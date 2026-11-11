const categories = ['Branding','IP Design','Product Design','Cultural Creative','Illustration'];
const projects = [
 ['abc','熊猫博士 ABC Reading','ABC Reading', ['Illustration'],4,12,7,'面向海外少儿英语学习场景，参与绘本策划、角色视觉与故事画面设计。详情收录角色拆解和绘本场景。'],
 ['lei-feng','雷锋主题文创','Lei Feng Cultural',['Cultural Creative','Product Design'],13,25,18,'以雷锋故事为线索，将历史场景转化为立体纸艺画面，并延展到图案和礼盒包装。'],
 ['duck','乐味甜鸭','Character & Packaging',['IP Design','Product Design'],27,30,27,'以鸭子角色为核心，探索表情、服饰与角色造型，并将形象延展到包装与周边。'],
 ['pandas','学习强国主题形象','Character & Visual Identity',['IP Design','Illustration'],31,36,32,'围绕「国国」和「强强」两只熊猫角色展开，展示角色多视图、主题插画以及屏幕和平面展示应用。'],
 ['posters','色彩与图形海报','Poster Studies',['Illustration'],38,38,38,'以花卉和抽象图形为主题，探索柔和色彩、虚实边缘和海报构图。'],
 ['visual-products','产品视觉探索','Product Visual Studies',['Product Design'],39,39,39,'展示一组产品视觉探索，包括色彩变化、产品效果图与场景应用。'],
 ['illustrations','主题插画','Illustration Studies',['Illustration'],40,40,40,'用人物、植物和流动图形构成两幅主题画面，展示插画在版面中的应用。'],
 ['motion','动态视觉探索','Visual Studies',['Branding'],41,41,41,'用手机屏幕、光影和空间构图呈现视觉概念，详情保留旧册展示画面。'],
 ['cultural-packaging','文创包装探索','Cultural Packaging',['Cultural Creative','Product Design'],42,43,42,'以红色和米白为主，结合地域图像探索文创包装的系列化呈现。'],
 ['collaboration','品牌联名视觉','Brand Collaboration',['Branding'],null,null,null,'成都马宁期间的品牌联名视觉、插画及衍生品相关设计。'],
 ['fiiijuju','fiiijuju IP 形象延展','Character Development',['IP Design'],null,null,null,'原创 IP 的系列插画、角色图形及配套视觉。'],
 ['adapter','吸管转接头','Straw Adapter',['Product Design'],null,null,null,'将 fiiijuju 角色元素应用到吸管转接头的衍生品方案中。'],
 ['ceramics','陶瓷餐具','Ceramic Tableware',['Product Design'],null,null,null,'围绕餐具使用场景探索 fiiijuju 角色元素在陶瓷产品上的应用。'],
 ['thermos','保温杯','Insulated Bottle',['Product Design'],null,null,null,'将 fiiijuju 角色元素延展到保温杯的产品视觉方案中。'],
 ['packaging','包装设计','Packaging Design',['Branding','Product Design'],null,null,null,'产品包装视觉及相关设计文件。'],
].map(([id,title,en,tags,start,end,cover,summary])=>({id,title,en,tags,start,end,cover,summary}));
const pageImage = n => `assets/archive/page-${String(n).padStart(2,'0')}.jpg`;
