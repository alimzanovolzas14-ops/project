/* DDC Portal — js/router.js (DOM-based SPA, works with file://) */

const MENU_DATA = {
  home:{ru:'Главная',kz:'Басты бет',en:'Home'},
  about:{ru:'О компании',kz:'Компания туралы',en:'About DDC'},
  board:{ru:'Совет директоров',kz:'Директорлар кеңесі',en:'Board of Directors'},
  org:{ru:'Структура',kz:'Құрылым',en:'Structure'},
  cybersecurity:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},
  fintech:{ru:'FinTech',kz:'FinTech',en:'FinTech'},
  ai:{ru:'AI Lab',kz:'AI Зертхана',en:'AI Lab'},
  smartcity:{ru:'Smart City',kz:'Smart City',en:'Smart City'},
  projects:{ru:'Проекты',kz:'Жобалар',en:'Projects'},
  services:{ru:'Услуги',kz:'Қызметтер',en:'Services'},
  technology:{ru:'Tech Stack',kz:'Tech Stack',en:'Tech Stack'},
  infrastructure:{ru:'Data Center',kz:'Деректер орталығы',en:'Data Center'},
  team:{ru:'Команда',kz:'Команда',en:'Team'},
  careers:{ru:'Карьера',kz:'Карьера',en:'Careers'},
  partners:{ru:'Партнёры',kz:'Серіктестер',en:'Partners'},
  news:{ru:'Новости',kz:'Жаңалықтар',en:'News'},
  analytics:{ru:'Аналитика',kz:'Аналитика',en:'Analytics'},
  knowledge:{ru:'Центр знаний',kz:'Білім орталығы',en:'Knowledge Center'},
  faq:{ru:'FAQ',kz:'FAQ',en:'FAQ'},
  contact:{ru:'Контакты',kz:'Байланыс',en:'Contacts'},
  portal:{ru:'Портал сотрудников',kz:'Қызметкерлер порталы',en:'Employee Portal'},
  myportal:{ru:'Личный кабинет',kz:'Жеке кабинет',en:'My Portal'},
  arm:{ru:'Concept ARM',kz:'Concept ARM',en:'Concept ARM'},
  admin:{ru:'Администрирование',kz:'Әкімшілік',en:'Admin Panel'},
};
window.MENU_DATA = MENU_DATA;

let currentPage = 'home';

// ── Главная функция навигации ──────────────────────────────────
function navigate(pid) {
  if (!MENU_DATA[pid]) { console.warn('Unknown page:', pid); return; }

  // Скрываем все секции
  document.querySelectorAll('.page-section').forEach(function(s) {
    s.style.display = 'none';
  });

  // Показываем нужную
  var section = document.getElementById('page-' + pid);
  if (!section) { console.warn('Section not found: page-' + pid); return; }
  section.style.display = 'block';

  currentPage = pid;

  // Активный пункт sidebar
  document.querySelectorAll('.sidebar-item').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.page === pid);
  });

  // Breadcrumb
  updateBreadcrumb();

  // URL без перезагрузки
  if (history.pushState) history.pushState({ page: pid }, '', '#/' + pid);

  // Закрыть sidebar на мобильных
  if (window.innerWidth < 900) closeSidebar();

  // Скролл вверх
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Инициализация страницы
  initPage(pid);

  // Язык
  if (typeof applyLang === 'function') applyLang();

  // Reveal-анимации
  if (typeof initReveal === 'function') initReveal();
  if (typeof initCounters === 'function') initCounters();

  // Fallback reveal
  setTimeout(function() {
    section.querySelectorAll('.reveal:not(.visible)').forEach(function(el) {
      el.classList.add('visible');
    });
  }, 600);
}

// ── Инициализация страницы ─────────────────────────────────────
function initPage(pid) {
  switch (pid) {
    case 'home':
      if (typeof loadRates === 'function') loadRates();
      if (typeof startTerminal === 'function') startTerminal();
      if (typeof initTengeChart === 'function') initTengeChart();
      if (typeof initCounters === 'function') initCounters();
      if (typeof initCanvas === 'function') initCanvas();
      break;
    case 'cybersecurity':
      if (typeof buildSOC === 'function') buildSOC();
      setTimeout(function() { if (typeof buildCyberMap === 'function') buildCyberMap(); }, 200);
      if (typeof renderQuiz === 'function') renderQuiz();
      if (typeof renderIncident === 'function') renderIncident();
      if (typeof loadCVE === 'function') loadCVE();
      break;
    case 'ai':
      setTimeout(function() { if (typeof initAIChart === 'function') initAIChart(); }, 100);
      break;
    case 'smartcity':
      setTimeout(function() { if (typeof drawCityMap === 'function') drawCityMap(); }, 100);
      break;
    case 'analytics':
      setTimeout(function() { if (typeof initAnalyticsCharts === 'function') initAnalyticsCharts(); }, 100);
      if (typeof calcROI === 'function') calcROI();
      break;
    case 'technology':
      if (typeof renderStack === 'function') renderStack();
      if (typeof initTSB === 'function') initTSB();
      break;
    case 'infrastructure':
      if (typeof renderUptime === 'function') renderUptime();
      if (typeof animateDCGauges === 'function') animateDCGauges();
      break;
    case 'team':
      if (typeof renderEmployees === 'function') renderEmployees();
      break;
    case 'partners':
      if (typeof renderPartners === 'function') renderPartners();
      break;
    case 'news':
      if (typeof renderNews === 'function') renderNews();
      break;
    case 'faq':
      if (typeof renderFAQ === 'function') renderFAQ();
      break;
    case 'fintech':
      if (typeof initTengeChart === 'function') initTengeChart();
      break;
    case 'careers':
      if (typeof renderJobs === 'function') renderJobs();
      break;
    case 'knowledge':
      if (typeof renderEduResources === 'function') renderEduResources();
      break;
    case 'portal':
      break;
    case 'myportal':
      if (typeof initPortal === 'function') setTimeout(initPortal, 100);
      break;
    case 'arm':
      if (typeof initARM === 'function') setTimeout(initARM, 100);
      break;
    case 'admin':
      break;
  }
}

// ── Generic page-tab switcher (About, Cybersecurity, etc.) ─────
function switchTab(btn, paneId) {
  if (!btn) return;
  var tabsBar = btn.closest('.page-tabs');
  var pageSection = btn.closest('.page-section');
  if (tabsBar) {
    tabsBar.querySelectorAll('.page-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
  }
  if (pageSection) {
    pageSection.querySelectorAll('.tab-pane').forEach(function(p) { p.style.display = 'none'; });
    var pane = document.getElementById(paneId);
    if (pane) pane.style.display = 'block';
  }
  if (typeof initReveal === 'function') initReveal();
}

// ── Breadcrumb ─────────────────────────────────────────────────
function updateBreadcrumb() {
  var bc = document.getElementById('breadcrumb');
  if (!bc) return;
  var lang = window.lang || 'ru';
  var info = MENU_DATA[currentPage];
  var name = (info && info[lang]) || (info && info.ru) || currentPage;
  bc.innerHTML = '<a onclick="navigate(\'home\')" style="cursor:pointer">DDC</a>' +
    '<span class="breadcrumb-sep">›</span><span>' + name + '</span>';
}

// ── Sidebar ────────────────────────────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
}
function toggleSidebar() {
  document.getElementById('sidebar').classList.contains('open') ? closeSidebar() : openSidebar();
}

// ── Sidebar builder ────────────────────────────────────────────
const SIDEBAR_MENU = [
  {id:'home',icon:'🏠',ru:'Главная',kz:'Басты бет',en:'Home',group:null},
  {id:'about',icon:'🏛️',ru:'О компании',kz:'Компания туралы',en:'About DDC',group:'Компания'},
  {id:'board',icon:'👔',ru:'Совет директоров',kz:'Директорлар кеңесі',en:'Board of Directors',group:'Компания'},
  {id:'org',icon:'📊',ru:'Структура',kz:'Құрылым',en:'Structure',group:'Компания'},
  {id:'cybersecurity',icon:'🔒',ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity',group:'Деятельность'},
  {id:'fintech',icon:'💳',ru:'FinTech / Digital Tenge',kz:'FinTech',en:'FinTech',group:'Деятельность'},
  {id:'ai',icon:'🤖',ru:'AI Lab',kz:'AI Зертхана',en:'AI Lab',group:'Деятельность'},
  {id:'smartcity',icon:'🏙️',ru:'Smart City & eGov',kz:'Smart City',en:'Smart City',group:'Деятельность'},
  {id:'projects',icon:'📁',ru:'Проекты',kz:'Жобалар',en:'Projects',group:'Технологии'},
  {id:'services',icon:'⚙️',ru:'Услуги',kz:'Қызметтер',en:'Services',group:'Технологии'},
  {id:'technology',icon:'💻',ru:'Tech Stack',kz:'Tech Stack',en:'Tech Stack',group:'Технологии'},
  {id:'infrastructure',icon:'🖥️',ru:'Data Center',kz:'Деректер орталығы',en:'Data Center',group:'Технологии'},
  {id:'team',icon:'👥',ru:'Сотрудники',kz:'Қызметкерлер',en:'Team',group:'Команда'},
  {id:'careers',icon:'💼',ru:'Карьера',kz:'Карьера',en:'Careers',group:'Команда',badge:'New'},
  {id:'partners',icon:'🤝',ru:'Партнёры',kz:'Серіктестер',en:'Partners',group:'Команда'},
  {id:'news',icon:'📰',ru:'Новости',kz:'Жаңалықтар',en:'News',group:'Медиа'},
  {id:'analytics',icon:'📈',ru:'Аналитика',kz:'Аналитика',en:'Analytics',group:'Медиа'},
  {id:'knowledge',icon:'📚',ru:'Центр знаний',kz:'Білім орталығы',en:'Knowledge',group:'Медиа'},
  {id:'faq',icon:'❓',ru:'FAQ',kz:'FAQ',en:'FAQ',group:'Медиа'},
  {id:'contact',icon:'📞',ru:'Контакты',kz:'Байланыс',en:'Contacts',group:null},
  {id:'portal',icon:'🌐',ru:'Портал сотрудников',kz:'Қызметкерлер порталы',en:'Employee Portal',group:'Сотрудникам'},
  {id:'myportal',icon:'👤',ru:'Личный кабинет',kz:'Жеке кабинет',en:'My Portal',group:'Сотрудникам',badge:'New'},
  {id:'arm',icon:'🎯',ru:'Concept ARM',kz:'Concept ARM',en:'Concept ARM',group:'Безопасность',badge:'New'},
  {id:'admin',icon:'⚙️',ru:'Администрирование',kz:'Әкімшілік',en:'Admin Panel',group:null},
];

function buildSidebar() {
  var sb = document.getElementById('sidebarItems');
  if (!sb) return;
  var lastGroup = 'NONE', html = '';
  SIDEBAR_MENU.forEach(function(item) {
    if (item.group !== lastGroup) {
      if (lastGroup !== 'NONE') html += '</div>';
      html += '<div class="sidebar-section">';
      if (item.group) html += '<div class="sidebar-group-label" data-sbg="' + item.group + '">' + item.group + '</div>';
      lastGroup = item.group;
    }
    var badge = item.badge ? '<span class="sidebar-badge">' + item.badge + '</span>' : '';
    html += '<button class="sidebar-item" onclick="navigate(\'' + item.id + '\')" data-page="' + item.id + '" ' +
      'data-ru="' + item.ru + '" data-kz="' + item.kz + '" data-en="' + item.en + '">' +
      '<span class="sidebar-item-icon">' + item.icon + '</span>' +
      '<span class="sidebar-item-label">' + item.ru + '</span>' + badge + '</button>';
  });
  html += '</div>';
  sb.innerHTML = html;
}

// ── Sidebar lang update ────────────────────────────────────────
function updateSidebarLang() {
  var lang = window.lang || 'ru';
  document.querySelectorAll('.sidebar-item').forEach(function(btn) {
    var v = btn.getAttribute('data-' + lang);
    if (v) btn.querySelector('.sidebar-item-label').textContent = v;
  });
  var gmap = {
    Компания:{kz:'Компания',en:'Company'}, Деятельность:{kz:'Қызмет',en:'Activity'},
    Технологии:{kz:'Технологиялар',en:'Technology'}, Команда:{kz:'Команда',en:'Team'},
    Медиа:{kz:'Медиа',en:'Media'}
  };
  document.querySelectorAll('[data-sbg]').forEach(function(el) {
    var g = el.dataset.sbg;
    el.textContent = (gmap[g] && gmap[g][lang]) || g;
  });
  updateBreadcrumb();
}

// ── Search ─────────────────────────────────────────────────────
function searchSite(q) {
  if (!q) return;
  q = q.toLowerCase();
  var map = {
    'soc':'cybersecurity','кибер':'cybersecurity','tenge':'fintech','fintech':'fintech',
    'ai':'ai','искусств':'ai','smart city':'smartcity','город':'smartcity','iot':'smartcity',
    'проект':'projects','сотрудник':'team','вакансии':'careers','карьер':'careers',
    'партнер':'partners','контакт':'contact','новости':'news','знани':'knowledge',
    'аналитик':'analytics','faq':'faq','совет':'board','структур':'org','истор':'org',
    'data center':'infrastructure','стек':'technology',
  };
  for (var k in map) { if (q.includes(k)) { navigate(map[k]); return; } }
}
function doSearch(q) { searchSite(q); }

// ── Charts (analytics, AI, smartcity) ─────────────────────────
function initAnalyticsCharts(){
  var last30=Array.from({length:30},function(_,i){return(i+1)+'';});
  ['analyticsChart1','analyticsChart2','analyticsChart3','analyticsChart4'].forEach(function(id,i){
    var c=document.getElementById(id); if(!c)return;
    var key='_ac'+(i+1); if(window[key])window[key].destroy();
    if(i===0) window[key]=new Chart(c.getContext('2d'),{type:'line',data:{labels:last30,datasets:[{data:Array.from({length:30},function(){return Math.floor(Math.random()*1500+600);}),borderColor:'#00A98F',backgroundColor:'rgba(0,169,143,.08)',borderWidth:2,fill:true,tension:.4,pointRadius:0}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'rgba(255,255,255,.3)',font:{size:9},maxTicksLimit:10}},y:{ticks:{color:'rgba(255,255,255,.3)',font:{size:9}}}}}});
    if(i===1) window[key]=new Chart(c.getContext('2d'),{type:'doughnut',data:{labels:['DDoS','Phishing','Malware','BruteForce','Ransomware'],datasets:[{data:[1240,874,412,198,89],backgroundColor:['#f87171','#fbbf24','#a78bfa','#60a5fa','#f97316'],borderWidth:0}]},options:{plugins:{legend:{position:'right',labels:{color:'rgba(255,255,255,.6)',font:{size:10}}}}}});
    if(i===2) window[key]=new Chart(c.getContext('2d'),{type:'bar',data:{labels:['Digital Tenge','SOC','Open Banking','eGov API','Data Platform','AI'],datasets:[{data:[99.99,99.97,99.95,99.98,99.96,99.91],backgroundColor:'rgba(0,169,143,.3)',borderColor:'#00A98F',borderWidth:1.5,borderRadius:4}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'rgba(255,255,255,.4)',font:{size:9}}},y:{min:99.8,ticks:{color:'rgba(255,255,255,.4)',font:{size:9}}}}}});
    if(i===3) window[key]=new Chart(c.getContext('2d'),{type:'pie',data:{labels:['ML/Anomaly','NLP/Chat','Computer Vision','Document AI','Predictive','LLM'],datasets:[{data:[35,25,18,10,8,4],backgroundColor:['#00A98F','#60a5fa','#a78bfa','#fbbf24','#34d399','#f87171'],borderWidth:0}]},options:{plugins:{legend:{position:'right',labels:{color:'rgba(255,255,255,.6)',font:{size:10}}}}}});
  });
}
function initAIChart(){
  var c=document.getElementById('aiActivityChart');if(!c)return;
  if(window._aiC)window._aiC.destroy();
  window._aiC=new Chart(c.getContext('2d'),{type:'bar',data:{labels:['ML','NLP','CV','DocAI','Pred','Anomaly','GenAI','LLM'],datasets:[{data:[420,300,216,120,96,36,18,10],backgroundColor:['#00A98F','#60a5fa','#a78bfa','#fbbf24','#34d399','#f87171','#fb923c','#e879f9'],borderRadius:5,borderWidth:0}]},options:{indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{ticks:{color:'rgba(255,255,255,.35)',font:{size:9}}},y:{ticks:{color:'rgba(255,255,255,.6)',font:{size:11}}}}}});
}

// ── SMART CITY — real interactive map of Astana (Leaflet + OSM) ─
const CITY_POINTS = [
  {lat:51.1283,lon:71.4306,type:'landmark',icon:'🗼',name:{ru:'Байтерек',kz:'Бәйтерек',en:'Baiterek Tower'},desc:{ru:'Символ Астаны и смотровая площадка, рядом расположен ситуационный центр умного города.',kz:'Астананың символы және шолу алаңы.',en:'Symbol of Astana and an observation deck, near the smart-city situation center.'}},
  {lat:51.1326,lon:71.4221,type:'landmark',icon:'🏛️',name:{ru:'Акорда',kz:'Ақорда',en:'Akorda Presidential Palace'},desc:{ru:'Резиденция Президента Республики Казахстан.',kz:'Қазақстан Республикасы Президентінің резиденциясы.',en:"Residence of the President of the Republic of Kazakhstan."}},
  {lat:51.1326,lon:71.4068,type:'landmark',icon:'⛺',name:{ru:'Хан Шатыр',kz:'Хан Шатыр',en:'Khan Shatyr'},desc:{ru:'Крупнейший шатёр в мире — торгово-развлекательный центр.',kz:'Әлемдегі ең үлкен шатыр — сауда-ойын-сауық орталығы.',en:"World's largest tent — shopping and entertainment center."}},
  {lat:51.0936,lon:71.4129,type:'landmark',icon:'🔮',name:{ru:'Nur Alem (EXPO)',kz:'Nur Alem (ЭКСПО)',en:'Nur Alem (EXPO)'},desc:{ru:'Сферический павильон ЭКСПО-2017, сегодня — музей энергии будущего.',kz:'ЭКСПО-2017 сфералық павильоны, қазір — болашақ энергиясы мұражайы.',en:'EXPO-2017 spherical pavilion, now the Museum of Future Energy.'}},
  {lat:51.0911,lon:71.3953,type:'landmark',icon:'🎓',name:{ru:'Nazarbayev University',kz:'Назарбаев Университеті',en:'Nazarbayev University'},desc:{ru:'Ведущий исследовательский университет страны и партнёр DDC по AI-проектам.',kz:'Елдің жетекші зерттеу университеті, DDC-нің AI жобалары бойынша серіктесі.',en:"The country's leading research university and DDC partner on AI projects."}},
  {lat:51.1280,lon:71.4283,type:'landmark',icon:'🏢',name:{ru:'Дворец Независимости',kz:'Тәуелсіздік сарайы',en:'Palace of Independence'},desc:{ru:'Деловой и культурный центр на пр. Мәңгілік Ел.',kz:'Мәңгілік Ел даңғылындағы іскерлік-мәдени орталық.',en:'Business and cultural center on Mangilik El Avenue.'}},
  {lat:51.1402,lon:71.4350,type:'transport',icon:'🚦',name:{ru:'Умный перекрёсток — пр. Мәңгілік Ел',kz:'Ақылды қиылысу — Мәңгілік Ел даңғылы',en:'Smart intersection — Mangilik El Ave.'},desc:{ru:'Адаптивное управление светофорами на основе данных трафика в реальном времени.',kz:'Нақты уақыттағы трафик деректері негізінде бейімделген бағдаршам басқару.',en:'Adaptive traffic-light control based on real-time traffic data.'}},
  {lat:51.1180,lon:71.4460,type:'transport',icon:'🚦',name:{ru:'Умный перекрёсток — ул. Кенесары',kz:'Ақылды қиылысу — Кенесары к-сі',en:'Smart intersection — Kenesary St.'},desc:{ru:'Часть сети из 240 умных перекрёстков Астаны.',kz:'Астананың 240 ақылды қиылысу желісінің бір бөлігі.',en:'Part of the 240 smart-intersection network in Astana.'}},
  {lat:51.1510,lon:71.4190,type:'transport',icon:'🚌',name:{ru:'Узел общественного транспорта',kz:'Қоғамдық көлік торабы',en:'Public transit hub'},desc:{ru:'Мониторинг загрузки автобусных маршрутов в реальном времени.',kz:'Автобус бағыттарының жүктемесін нақты уақытта бақылау.',en:'Real-time monitoring of bus route load.'}},
  {lat:51.1230,lon:71.4400,type:'iot',icon:'📡',name:{ru:'IoT-кластер датчиков качества воздуха',kz:'Ауа сапасы IoT-датчиктер кластері',en:'Air-quality IoT sensor cluster'},desc:{ru:'Часть сети из 12 000+ IoT-узлов Smart City.',kz:'12 000+ Smart City IoT торабы желісінің бөлігі.',en:'Part of the 12,000+ node Smart City IoT network.'}},
  {lat:51.1350,lon:71.4480,type:'iot',icon:'📡',name:{ru:'IoT-датчики освещения',kz:'Жарықтандыру IoT-датчиктері',en:'Smart lighting IoT sensors'},desc:{ru:'Управление 18 400 умными фонарями по графику и освещённости.',kz:'18 400 ақылды шамды кесте мен жарықтандыру бойынша басқару.',en:'Controls 18,400 smart streetlights by schedule and ambient light.'}},
  {lat:51.1160,lon:71.4250,type:'camera',icon:'📷',name:{ru:'Узел видеонаблюдения',kz:'Бейнебақылау торабы',en:'Surveillance camera hub'},desc:{ru:'Часть сети из 8 500 камер с видеоаналитикой на базе Computer Vision.',kz:'Computer Vision негізіндегі 8 500 камера желісінің бөлігі.',en:'Part of the 8,500-camera network with Computer Vision analytics.'}},
  {lat:51.1450,lon:71.4150,type:'camera',icon:'📷',name:{ru:'Узел видеонаблюдения — Левый берег',kz:'Бейнебақылау торабы — Сол жағалау',en:'Surveillance hub — Left Bank'},desc:{ru:'Видеоаналитика для безопасности и контроля дорожного движения.',kz:'Қауіпсіздік пен жол қозғалысын бақылауға арналған бейнеаналитика.',en:'Video analytics for safety and traffic control.'}},
  {lat:51.1050,lon:71.4050,type:'eco',icon:'🌿',name:{ru:'Экостанция мониторинга',kz:'Экомониторинг станциясы',en:'Environmental monitoring station'},desc:{ru:'Часть сети из 95 станций контроля качества воздуха и шума.',kz:'Ауа сапасы мен шуды бақылайтын 95 станция желісінің бөлігі.',en:'Part of the 95-station air-quality and noise monitoring network.'}},
  {lat:51.1380,lon:71.3980,type:'eco',icon:'🌿',name:{ru:'Экостанция — Ботанический сад',kz:'Экостанция — Ботаникалық бақ',en:'Eco station — Botanical Garden'},desc:{ru:'Контроль экологических показателей в зелёной зоне города.',kz:'Қаланың жасыл аймағындағы экологиялық көрсеткіштерді бақылау.',en:"Monitors environmental indicators in the city's green zone."}},
];
let cityMapInstance = null;
let cityMarkersLayer = null;
function drawCityMap(){
  var container = document.getElementById('cityMapLeaflet');
  if(!container || typeof L === 'undefined') return;
  if (!cityMapInstance && container.offsetWidth === 0) return; // page not visible yet — init later on navigate
  var lng = window.lang || 'ru';
  if (!cityMapInstance) {
    cityMapInstance = L.map(container, { scrollWheelZoom:false }).setView([51.1300, 71.4300], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(cityMapInstance);
    cityMarkersLayer = L.layerGroup().addTo(cityMapInstance);
  }
  cityMarkersLayer.clearLayers();
  var typeColors = {landmark:'#fbbf24', transport:'#f87171', iot:'#60a5fa', camera:'#a78bfa', eco:'#34d399'};
  CITY_POINTS.forEach(function(p){
    var color = typeColors[p.type] || '#00A98F';
    var icon = L.divIcon({
      className: 'city-map-pin',
      html: '<div style="background:'+color+';width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 0 0 4px '+color+'33,0 2px 10px rgba(0,0,0,.5);border:1.5px solid rgba(255,255,255,.5)">'+p.icon+'</div>',
      iconSize:[28,28], iconAnchor:[14,14],
    });
    var marker = L.marker([p.lat, p.lon], {icon: icon});
    var name = p.name[lng] || p.name.ru;
    var desc = p.desc ? (p.desc[lng] || p.desc.ru) : '';
    marker.bindPopup('<b style="font-family:Manrope,sans-serif">'+name+'</b>'+(desc?'<br><span style="font-size:12px">'+desc+'</span>':''));
    cityMarkersLayer.addLayer(marker);
  });
  setTimeout(function(){ cityMapInstance.invalidateSize(); }, 150);
}

// ── Project modal ──────────────────────────────────────────────
const PROJ_DB=[{"id":"digital-tenge","icon":"💎","status":"active","ru":"Digital Tenge (CBDC)","kz":"Digital Tenge (CBDC)","en":"Digital Tenge (CBDC)","dru":"CBDC платформа — 500K+ пользователей, ₸2.3B/мес, транзакция за 0.8 сек. PCI DSS Level 1.","dkz":"CBDC платформасы — 500K+ пайдаланушы, ₸2.3B/ай, 0.8 сек транзакция.","den":"CBDC platform — 500K+ users, ₸2.3B/month, 0.8s transactions. PCI DSS Level 1.","tech":["NestJS","PostgreSQL","HSM","Blockchain","Kafka","ISO 20022","PCI DSS","Vault"],"kpis":[["500K+","Пользователей"],["₸2.3B","Оборот/мес"],["0.8s","Транзакция"],["99.99%","Uptime"]],"goals_ru":["Национальная CBDC-инфраструктура","Снижение стоимости транзакций на 80%","Программируемые госвыплаты","Интеграция с Open Banking"],"phases":[["2021 Q3","R&D и архитектура","done"],["2022 Q1","Пилот","done"],["2023 Q1","200K users","done"],["2024 Q1","500K+ users","done"],["2025 Q3","Open Banking","now"]]},{"id":"open-banking","icon":"🔗","status":"active","ru":"Open Banking API","kz":"Open Banking API","en":"Open Banking API","dru":"API-шлюз для 12 банков. ISO 20022, 500+ эндпоинтов, 2M+ запросов/сутки.","dkz":"12 банк үшін API шлюзы. ISO 20022, 500+ эндпоинт, 2M+ сұрау/тәулігіне.","den":"API gateway for 12 banks. ISO 20022, 500+ endpoints, 2M+ requests/day.","tech":["WSO2","NestJS","OAuth 2.0","OpenAPI 3.0","Kong","Redis","Kafka","PostgreSQL"],"kpis":[["12","Банков"],["500+","API эндп."],["2M+","Запросов/сут"],["99.95%","Uptime"]],"goals_ru":["Open Banking по стандарту PSD2","Единая точка интеграции","Снижение time-to-market","ISO 20022 стандарт"],"phases":[["2021 Q1","Проектирование","done"],["2021 Q3","Пилот 3 банка","done"],["2022 Q4","8 банков","done"],["2023 Q4","12 банков","done"],["2025 Q1","Маркетплейс","now"]]},{"id":"soc-platform","icon":"🛡️","status":"active","ru":"Cyber Monitoring Center","kz":"Кибермониторинг орталығы","en":"Cyber Monitoring Center","dru":"SOC 24/7. 2847+ угроз/день, реакция 8.4 мин, 200+ защищаемых систем.","dkz":"SOC 24/7. 2847+ қауіп/күн, жауап 8.4 мин, 200+ қорғалатын жүйе.","den":"SOC 24/7. 2,847+ threats/day, 8.4 min response, 200+ protected systems.","tech":["Wazuh","Splunk","Suricata","Zeek","TheHive","MISP","Velociraptor","OpenSearch"],"kpis":[["2847","Угроз/день"],["8.4мин","Реакция"],["99.97%","Uptime SOC"],["200+","Систем"]],"goals_ru":["SOC 24/7 для финансовой инфры","Время реакции < 10 минут","Автоматизация triage","MITRE ATT&CK > 80%"],"phases":[["2020 Q1","Запуск SOC","done"],["2020 Q3","SIEM Wazuh","done"],["2021 Q2","Threat Intel","done"],["2022 Q4","Red Team","done"],["2025 Q2","AI Threat Hunting","now"]]}];

function openProjModal(pid){
  var p=PROJ_DB.find(function(x){return x.id===pid;});if(!p)return;
  var lang=window.lang||'ru',title=p[lang]||p.ru,desc=p['d'+lang]||p.dru,goals=p.goals_ru||[];
  var sl=p.status==='active'?'var(--green)':'var(--yellow)',slLbl=p.status==='active'?'● Active':'◐ In Dev';
  var kpiH=p.kpis.map(function(k){return'<div class="proj-kpi-cell"><div class="proj-kpi-val">'+k[0]+'</div><div class="proj-kpi-lbl">'+k[1]+'</div></div>';}).join('');
  var techH=p.tech.map(function(t){return'<span class="modal-tag">'+t+'</span>';}).join('');
  var goalsH=goals.map(function(g){return'<div style="display:flex;gap:8px;font-size:13px;color:rgba(255,255,255,.7);margin-bottom:5px"><span style="color:var(--green)">✅</span>'+g+'</div>';}).join('');
  var phasesH=p.phases.map(function(ph){var dc=ph[2]==='done'?'done':ph[2]==='now'?'now':'future';var badge=ph[2]==='done'?'<span style="font-size:9px;background:rgba(74,222,128,.15);color:var(--green);padding:2px 7px;border-radius:3px;font-weight:700">✓</span>':ph[2]==='now'?'<span style="font-size:9px;background:rgba(251,191,36,.15);color:var(--yellow);padding:2px 7px;border-radius:3px;font-weight:700">▶ Сейчас</span>':'';return'<div class="proj-phase"><div class="proj-phase-dot '+dc+'"></div><span class="proj-phase-date">'+ph[0]+'</span><span style="flex:1;font-size:12px">'+ph[1]+'</span>'+badge+'</div>';}).join('');
  document.getElementById('svcModalContent').innerHTML='<div style="display:flex;gap:14px;align-items:flex-start;margin-bottom:16px"><span style="font-size:44px;flex-shrink:0">'+p.icon+'</span><div><div class="modal-badge">Проект DDC</div><h2 style="font-size:20px;font-weight:900;margin-bottom:8px">'+title+'</h2><span style="font-size:12px;font-weight:700;color:'+sl+'">'+slLbl+'</span></div></div><p style="font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:18px">'+desc+'</p><div class="modal-section"><div class="modal-section-title">KPI</div><div class="proj-kpi-grid">'+kpiH+'</div></div><div class="modal-section"><div class="modal-section-title">Цели</div>'+goalsH+'</div><div class="modal-section"><div class="modal-section-title">Tech Stack</div><div class="modal-tags">'+techH+'</div></div><div class="modal-section"><div class="modal-section-title">Этапы</div>'+phasesH+'</div><div style="margin-top:20px;display:flex;gap:10px"><button class="btn btn-outline" onclick="closeModal(\'svcModal\')" style="font-size:13px">Закрыть</button></div>';
  openModalEl('svcModal');
}

function filterVacs(dept,btn){
  vacFilter = dept;
  document.querySelectorAll('.proj-tab').forEach(function(b){b.classList.remove('active');});
  if(btn)btn.classList.add('active');
  if (typeof renderJobs === 'function') renderJobs();
}

// ── Back/forward ───────────────────────────────────────────────
window.addEventListener('popstate', function(e) {
  var hash = location.hash.replace('#/','').replace('#','');
  if (MENU_DATA[hash]) navigate(hash);
});
