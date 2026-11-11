const items=[
 ['sonder','FIIIJUJU × SONDER · 我不是 NPC','品牌联名视觉与 IP 衍生品设计','new/sonder-current/gallery-cover.jpg'],
 ['rooosy','FIIIJUJU × ROOOSY TIME','品牌联名创意与产品视觉设计','new/rooosy-pdf/rooosy-logo.jpg'],
 ['juju','FIIIJUJU / JUJU CHARACTER ILLUSTRATION','JuJu 角色插画与视觉延展','new/juju-pdf/page-2.jpg'],
 ['soothing','SOOTHING FIIIJUJU','陶艺店主题视觉、产品与包装设计','new/soothing/p-1.jpg'],
 ['floral','FIIIJUJU / FLORAL COLLECTION','碎花系列主视觉与产品开发','new/floral/p-02.jpg'],
 ['everyday','FIIIJUJU / EVERYDAY OBJECTS','IP 日常用品与创意衍生设计','new/everyday-pdf/everyday-cover.jpg'],
 ['abc','ABC READING','Children’s Educational Product Design','new/old-portfolio-pdf/page-03.jpg'],
 ['lei','LEI FENG CULTURAL','Cultural Research & Product Design','new/old-portfolio-pdf/page-12.jpg'],
 ['ipdesign','IP DESIGN','Character & Visual Identity Design','new/old-portfolio-pdf/page-25.jpg'],
 ['selectedworks','SELECTED WORKS','Visual Explorations & Creative Practice','new/old-portfolio-pdf/page-36.jpg']
];
const section=document.querySelector('#projects');
section.innerHTML=items.map(([id,title,description,image],i)=>`<a class="project" href="reference-project.html?id=${id}"><span class="name">${title}</span><span class="preview"><img src="assets/${image}" alt="${title} preview" loading="lazy" decoding="async"></span></a>`).join('');
section.className='projects list';
const viewLinks=[...document.querySelectorAll('[data-view]')];
function changeView(view){if(!['list','gallery'].includes(view)) return;section.className=`projects ${view}`;viewLinks.forEach(link=>link.setAttribute('aria-current',String(link.dataset.view===view)));}
viewLinks.forEach(link=>link.addEventListener('click',event=>{event.preventDefault();changeView(link.dataset.view)}));
changeView('list');

