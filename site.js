const route = document.body.dataset.page;
const root = document.querySelector('main');
const archive = projects.filter(p=>p.start);
const waiting = projects.filter(p=>!p.start);
const contact = '<a href="mailto:1783728092@qq.com">1783728092@qq.com ↗</a>';
const nav = [['index.html','首页','home'],['work.html','作品','work']];
document.querySelector('header').innerHTML = '<a href="index.html" class="brand">陈 / LYSIA</a><nav aria-label="主导航">'+nav.map(([href,label,id])=>`<a href="${href}" ${route===id?'aria-current="page"':''}>${label}</a>`).join('')+'</nav>';
document.querySelector('footer').innerHTML = `<span>陈璐瑶 · PORTFOLIO 2026</span>${contact}`;
const link = p => `project.html?id=${p.id}`;
function list(items){return items.map(p=>`<a class="entry" href="${link(p)}"><span class="mono">${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span><strong>${p.title}</strong><small>${p.en}</small></span><span class="mono entry-tags">${p.start||Object.hasOwn(cases,p.id)?p.tags.join(' / '):'素材待补'}</span><span aria-hidden="true">↗</span></a>`).join('');}
if(route==='home'){
 const requested = new URLSearchParams(location.search).get('view');
 const view = ['grid','gallery'].includes(requested) ? requested : 'list';
 const modes = [['list','List'],['grid','Grid'],['gallery','Gallery']];
 document.querySelector('header').classList.add('studio-header');
 document.querySelector('header').innerHTML=`<a href="index.html">陈璐瑶 <span>Lysia</span></a><nav aria-label="作品浏览方式">${modes.map(([mode,label])=>`<a href="?view=${mode}" ${view===mode?'aria-current="page"':''}>${label}</a>`).join('')}</nav><nav aria-label="个人资料"><a href="work.html">全部作品</a><a href="about.html">简介</a></nav>`;
 root.innerHTML=`<section class="studio-index studio-${view}" aria-label="精选项目">${featured.map(([id,title,sub,asset],i)=>`<a class="studio-item" href="project.html?id=${id}&view=${view}"><span class="studio-image"><img src="assets/selected/${asset}.jpg" alt=""></span><span class="studio-label"><strong>${title}</strong><small>${sub}</small></span><span class="studio-number" aria-hidden="true">0${i+1}</span></a>`).join('')}</section>`;
 const footer=document.querySelector('footer');
 footer.classList.add('studio-footer');
 footer.innerHTML=`<a href="about.html">品牌视觉 / IP / 文创设计</a>${contact}`;
}
if(route==='work'){
 root.innerHTML=`<div class="page-title"><h1>作品</h1></div><div class="entries">${list(archive)}</div><section><div class="section-head"><h2>新增项目</h2></div>${list(waiting.filter(p=>Object.hasOwn(cases,p.id)))}</section><section class="pending"><div class="section-head"><h2>成都马宁项目</h2></div><p>项目图片与过程资料待补。</p>${list(waiting.filter(p=>!Object.hasOwn(cases,p.id)))}</section><p class="archive-link"><a href="project.html?id=archive">查看旧作品集 44 页原序档案 ↗</a></p>`;
}
function projectPages(p){
 const pages = Array.from({length:p.end-p.start+1},(_,i)=>i+p.start);
 return p.cover ? [p.cover,...pages.filter(n=>n!==p.cover)] : pages;
}
if(route==='project'){
 const id=new URLSearchParams(location.search).get('id');
 const p=id==='archive'?{title:'旧作品集 · 完整档案',en:'ORIGINAL PORTFOLIO',start:1,end:44,tags:[]}:projects.find(x=>x.id===id);
 const caseStudy=Object.hasOwn(cases,id)?cases[id]:null;
 if(caseStudy){
  document.title=`${caseStudy.title} · 陈璐瑶`;
  const position = featured.findIndex(([projectId]) => projectId === id);
  const cover = featured[position][3];
  const previous = featured[(position + featured.length - 1) % featured.length];
  const next = featured[(position + 1) % featured.length];

  root.innerHTML=`<a class="back mono" href="index.html">← 返回精选项目</a><div class="page-title case-title"><p class="mono">${caseStudy.subtitle} / 成都马宁</p><h1>${caseStudy.title}</h1></div><img class="case-cover" src="assets/selected/${cover}.jpg" alt="${caseStudy.title} 项目主图" fetchpriority="high"><div class="case-overview"><p>${caseStudy.intro}</p><p class="case-note"><b>个人职责与资料说明</b><br>${caseStudy.contribution}</p></div>${caseStudy.sections.map(([n,title,desc,imgs])=>`<section class="case-section"><h2><span class="mono">${n}</span> ${title}</h2><p>${desc}</p><div class="case-gallery">${imgs.map(([asset,label])=>`<figure><a href="assets/selected/${asset}.jpg"><img src="assets/selected/${asset}.jpg" alt="${label}" loading="lazy"></a><figcaption>${label}</figcaption></figure>`).join('')}</div></section>`).join('')}<nav class="case-pagination" aria-label="切换精选项目"><a href="project.html?id=${previous[0]}">← 上一个项目<strong>${previous[1]}</strong></a><a href="project.html?id=${next[0]}">下一个项目 →<strong>${next[1]}</strong></a></nav>`;
 }
 else if(!p)root.innerHTML='<div class="page-title"><h1>项目未找到</h1><a href="work.html">返回作品索引 ↗</a></div>';
 else{
  document.title=`${p.title} · 陈璐瑶`;
  root.innerHTML=`<a class="back mono" href="work.html">← WORK INDEX</a><div class="page-title project-title"><p class="mono">${p.en}</p><h1>${p.title}</h1>${p.summary?`<p>${p.summary}</p>`:''}<p class="mono">${p.tags.join(' / ')}</p></div>${p.start?`<div class="gallery">${projectPages(p).map((n,i)=>`<figure><a href="${pageImage(n)}"><img src="${pageImage(n)}" width="1632" height="918" ${i?'loading="lazy"':''} alt="${p.title}，原作品集第 ${n} 页"></a><figcaption class="mono">ARCHIVE / P.${String(n).padStart(2,'0')}</figcaption></figure>`).join('')}</div>`:'<div class="placeholder"><strong>素材待补</strong><p>成都马宁企业管理咨询有限公司 · 2026.07—2026.10</p><p>待补充可公开的项目图片、个人职责及过程资料。</p></div>'}<a class="more" href="work.html">返回作品索引 ↗</a>`;
 }
}
if(route==='about')root.innerHTML=`<div class="page-title"><p class="mono">ABOUT / LYSIA</p><h1>陈璐瑶</h1><div class="prose"><p>艺术设计硕士，视觉传达方向。具备品牌视觉设计、IP 商业衍生、产品设计及包装开发经验。曾完成品牌联名视觉、主题主视觉与宣传物料设计，并结合角色特征、产品用途与制作工艺，推进衍生品方案、包装设计及打样调整。</p><p>辽宁石油化工大学 · 艺术设计硕士 · 2022–2025<br>四川传媒学院 · 艺术设计专业 · 2017–2021</p></div><a href="work.html" class="more">查看作品 ↗</a></div>`;
if(route==='contact')root.innerHTML=`<div class="page-title"><p class="mono">CONTACT / LYSIA</p><h1>联系我</h1><div class="prose">${contact}<br><a href="tel:17369180620">173 6918 0620 ↗</a></div></div>`;
