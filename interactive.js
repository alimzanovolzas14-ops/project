/* DDC Portal — js/interactive.js */

// ══════════════════════════════════════════════
//  CYBER QUIZ
// ══════════════════════════════════════════════
const QUIZ_DATA = [
  {q:'Что такое фишинг?',opts:['Вид спортивной рыбалки','Метод социальной инженерии для кражи данных через поддельные письма','Тип DDoS-атаки','Протокол шифрования данных'],correct:1,exp:'Фишинг — это атака, при которой злоумышленник притворяется доверенной организацией, чтобы обманом заставить жертву раскрыть пароли, номера карт или другие данные.'},
  {q:'Что означает аббревиатура SIEM?',opts:['Security Information and Event Management','System Integration Enterprise Module','Secure Internet Exchange Monitor','Software Intelligence and Error Management'],correct:0,exp:'SIEM — это платформа для сбора, анализа и корреляции событий безопасности из различных источников инфраструктуры в режиме реального времени.'},
  {q:'Что такое двухфакторная аутентификация (2FA)?',opts:['Вход с двух устройств одновременно','Двойное шифрование пароля','Подтверждение личности двумя независимыми методами','Использование двух разных паролей'],correct:2,exp:'2FA требует подтверждения личности двумя разными способами: обычно это что-то, что вы знаете (пароль) + что-то, что у вас есть (телефон с кодом).'},
  {q:'Что такое CVE?',opts:['Common Vulnerability Exploits','Central Virus Encyclopedia','Common Vulnerabilities and Exposures — база уязвимостей','Cyber Vulnerability Engine'],correct:2,exp:'CVE (Common Vulnerabilities and Exposures) — это стандартизированный список публично известных уязвимостей в программном обеспечении. Каждой присваивается уникальный ID вида CVE-YEAR-NUMBER.'},
  {q:'Какое действие наиболее опасно с точки зрения ИБ?',opts:['Использование менеджера паролей','Открытие вложения от неизвестного отправителя','Регулярное обновление ПО','Использование VPN в публичных сетях'],correct:1,exp:'Открытие вложений от неизвестных отправителей — одна из главных причин заражения вредоносным ПО. Всегда проверяйте отправителя и содержимое письма перед открытием файлов.'},
];
let quizIdx=0,quizScore=0,quizAnswered=false;
function renderQuiz(){
  const progress=document.getElementById('quizProgress');
  const content=document.getElementById('quizContent');
  if(!progress||!content)return;
  progress.innerHTML=QUIZ_DATA.map((_,i)=>`<div class="quiz-progress-dot ${i<quizIdx?'done':i===quizIdx?'active':''}"></div>`).join('');
  if(quizIdx>=QUIZ_DATA.length){
    const pct=Math.round(quizScore/QUIZ_DATA.length*100);
    const grade=pct>=80?'🏆 Эксперт по ИБ':pct>=60?'🛡️ Хороший уровень':pct>=40?'📚 Нужно учиться':'🔰 Начинающий';
    const tips=pct<60?['Пройдите курс по основам ИБ','Включите 2FA на всех аккаунтах','Используйте менеджер паролей']:['Отличный результат!','Рассмотрите карьеру в DDC SOC','Поделитесь с коллегами'];
    content.innerHTML=`<div class="quiz-result show">
      <div class="quiz-score">${quizScore}/${QUIZ_DATA.length}</div>
      <div class="quiz-grade">${grade}</div>
      <p style="color:var(--muted);font-size:14px">Правильных ответов: ${pct}%</p>
      <div class="quiz-tags">${tips.map(t=>`<span class="tag" style="padding:6px 12px;font-size:12px">${t}</span>`).join('')}</div>
      <div style="margin-top:24px;display:flex;gap:12px;justify-content:center">
        <button class="btn btn-primary" onclick="resetQuiz()">↺ Пройти снова</button>
        <a href="#" onclick="navigate('careers');return false;" class="btn btn-outline" style="font-size:14px">💼 Карьера в SOC →</a>
      </div>
    </div>`;
    return;
  }
  const q=QUIZ_DATA[quizIdx];
  quizAnswered=false;
  content.innerHTML=`
    <div class="quiz-q">${quizIdx+1}. ${q.q}</div>
    <div class="quiz-options">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
    <div class="quiz-feedback" id="quizFeedback">${q.exp}</div>
    <button class="btn btn-primary" id="quizNext" onclick="nextQuiz()" style="display:none;margin-top:8px">Следующий вопрос →</button>
  `;
}
function answerQuiz(idx){
  if(quizAnswered)return;
  quizAnswered=true;
  const q=QUIZ_DATA[quizIdx];
  const opts=document.querySelectorAll('.quiz-opt');
  opts.forEach((o,i)=>{
    o.classList.add('disabled');
    if(i===q.correct)o.classList.add('correct');
    else if(i===idx)o.classList.add('wrong');
  });
  if(idx===q.correct)quizScore++;
  document.getElementById('quizFeedback').classList.add('show');
  document.getElementById('quizNext').style.display='block';
}
function nextQuiz(){quizIdx++;renderQuiz();}
function resetQuiz(){quizIdx=0;quizScore=0;quizAnswered=false;renderQuiz();}


// ══════════════════════════════════════════════
//  INCIDENT SIMULATOR
// ══════════════════════════════════════════════
const INCIDENTS = [
  {title:'Ransomware обнаружен в сети банка',severity:'КРИТИЧЕСКИЙ',src:'185.220.101.45',target:'CORE-BANK-SRV-01',type:'Ransomware / LockBit 3.0',time:'14:23:07',affected:'3 сервера',
   actions:[{icon:'🔌',label:'Изолировать хост',points:30,log:'Хост CORE-BANK-SRV-01 изолирован от сети. Lateral movement прекращён.'},{icon:'🔍',label:'Анализировать IOC',points:20,log:'IOC извлечены: hash=a3f2..., C2=185.45.x.x. Добавлены в MISP.'},{icon:'🛡️',label:'Заблокировать IP',points:15,log:'IP 185.220.101.45 заблокирован на периметре firewall.'},{icon:'📋',label:'Создать отчёт',points:25,log:'Отчёт об инциденте #2847 создан и отправлен CISO.'},{icon:'🔄',label:'Восстановить из бэкапа',points:10,log:'Хост восстановлен из резервной копии от 14:00. Проверка ЦОД.'}]},
  {title:'DDoS атака на платёжную систему',severity:'ВЫСОКИЙ',src:'Botnet / 12,400 узлов',target:'PAYMENT-GW-01',type:'Layer 7 HTTP Flood',time:'09:47:31',affected:'Платёжный шлюз',
   actions:[{icon:'🌊',label:'Активировать DDoS-защиту',points:30,log:'DDoS-mitigation активирован. Трафик перенаправлен через scrubbing center.'},{icon:'📊',label:'Анализировать трафик',points:20,log:'Аномальный трафик идентифицирован: 450K req/s от 98 стран.'},{icon:'🚫',label:'Блокировать по GeoIP',points:15,log:'Трафик из 12 аномальных стран заблокирован. Нагрузка снизилась на 67%.'},{icon:'📞',label:'Уведомить команду',points:25,log:'SOC Level 2 и команда NOC уведомлены. Bridge call открыт.'},{icon:'✅',label:'Подтвердить восстановление',points:10,log:'Платёжный шлюз в норме. Latency вернулась к 120ms. Инцидент закрыт.'}]},
];
let currentInc=0,incDone=[],incStartTime=0;
function renderIncident(){
  const inc=INCIDENTS[currentInc];
  document.getElementById('incTitle').textContent=inc.title;
  document.getElementById('incDetails').innerHTML=Object.entries({Тяжесть:inc.severity,'Источник':inc.src,'Цель':inc.target,'Тип атаки':inc.type,'Время':inc.time,'Затронуто':inc.affected})
    .map(([k,v])=>`<div class="incident-row"><span>${k}</span><span>${v}</span></div>`).join('');
  document.getElementById('incActions').innerHTML=inc.actions.map((a,i)=>`
    <button class="inc-btn ${incDone.includes(i)?'done':''}" id="incBtn${i}" onclick="doIncAction(${i})" ${incDone.includes(i)?'disabled':''}>
      <span class="inc-icon">${incDone.includes(i)?'✅':a.icon}</span>${a.label} <span style="margin-left:auto;font-size:11px;color:var(--dim)">+${a.points}pts</span>
    </button>`).join('');
  const score=document.getElementById('incScore');
  score.classList.remove('show');
  if(incDone.length===inc.actions.length){
    const total=inc.actions.reduce((s,a)=>s+a.points,0);
    const elapsed=Math.round((Date.now()-incStartTime)/1000);
    score.innerHTML=`<div style="font-size:36px;margin-bottom:8px">🏅</div><div style="font-family:'Manrope',sans-serif;font-size:28px;font-weight:900;color:var(--teal-l)">${total} очков</div><div style="color:var(--muted);font-size:14px;margin:8px 0">Инцидент закрыт за ${elapsed} секунд</div><div style="color:var(--green);font-size:13px;font-weight:600">Excellent incident response! 🎯</div>`;
    score.classList.add('show');
  }
}
function doIncAction(idx){
  const inc=INCIDENTS[currentInc];
  if(incDone.includes(idx))return;
  incDone.push(idx);
  const tl=document.getElementById('incTimeline');
  const item=document.createElement('div');
  item.className='timeline-item';
  item.textContent=inc.actions[idx].log;
  tl.appendChild(item);
  tl.scrollTop=tl.scrollHeight;
  renderIncident();
}
function resetIncident(){
  currentInc=(currentInc+1)%INCIDENTS.length;
  incDone=[];
  incStartTime=Date.now();
  document.getElementById('incTimeline').innerHTML='<span style="color:var(--dim);font-size:12px">Начните реагирование — выберите действие →</span>';
  renderIncident();
}


// ══════════════════════════════════════════════
//  UPTIME MONITOR
// ══════════════════════════════════════════════
const SERVICES = [
  {name:'Digital Tenge Platform',icon:'💳',uptime:99.99,status:'operational'},
  {name:'SOC / SIEM Platform',icon:'🛡️',uptime:99.97,status:'operational'},
  {name:'Open Banking API',icon:'🔗',uptime:99.95,status:'operational'},
  {name:'GovCloud Infrastructure',icon:'☁️',uptime:99.99,status:'operational'},
  {name:'eGov Smart Bridge',icon:'🌉',uptime:99.98,status:'operational'},
  {name:'Data Platform KZ',icon:'📊',uptime:99.96,status:'operational'},
  {name:'Digital Identity (eKYC)',icon:'🆔',uptime:99.94,status:'operational'},
  {name:'AI Analytics Engine',icon:'🤖',uptime:99.91,status:'operational'},
];
function buildUptimeBars(uptime){
  return Array.from({length:90},(_,i)=>{
    let cls='ok';
    if(Math.random()<(1-uptime/100)*15)cls=Math.random()<0.3?'down':'warn';
    return `<div class="uptime-bar ${cls}" title="Day ${90-i}: ${cls==='ok'?'Operational':cls==='warn'?'Degraded':'Incident'}"></div>`;
  }).join('');
}
function renderUptime(){
  const grid=document.getElementById('uptimeGrid');if(!grid)return;
  grid.innerHTML=SERVICES.map(s=>`
    <div class="uptime-service">
      <div class="uptime-service-header">
        <div class="uptime-service-name">${s.icon} ${s.name}</div>
        <span class="status-pill ${s.status}">${s.status==='operational'?'● Работает':'⚠ Деградация'}</span>
      </div>
      <div class="uptime-bars">${buildUptimeBars(s.uptime)}</div>
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div class="uptime-legend"><span class="l-ok">OK</span><span class="l-warn">Slow</span><span class="l-down">Down</span></div>
        <div class="uptime-pct">${s.uptime}%</div>
      </div>
    </div>`).join('');
  const upd=document.getElementById('uptimeLastUpdate');
  if(upd){const now=new Date();upd.textContent='Обновлено: '+now.toLocaleTimeString('ru-RU');}
}


// ══════════════════════════════════════════════
//  CVE THREAT FEED
// ══════════════════════════════════════════════
const MOCK_CVES = [
  {id:'CVE-2024-47177',score:9.8,level:'critical',vendor:'OpenSSH',desc:'Реализация Remote Code Execution через уязвимость в обработке пакетов аутентификации',date:'2024-07-01'},
  {id:'CVE-2024-38063',score:9.8,level:'critical',vendor:'Microsoft Windows',desc:'Критическая уязвимость в стеке TCP/IP Windows — возможно удалённое выполнение кода без аутентификации',date:'2024-08-13'},
  {id:'CVE-2024-21762',score:9.6,level:'critical',vendor:'Fortinet FortiOS',desc:'Out-of-bounds write в SSL VPN позволяет выполнить произвольный код без аутентификации',date:'2024-02-08'},
  {id:'CVE-2024-3400',score:10.0,level:'critical',vendor:'Palo Alto PAN-OS',desc:'Инъекция команд в GlobalProtect Gateway — активно эксплуатируется в реальных атаках',date:'2024-04-12'},
  {id:'CVE-2024-29973',score:8.1,level:'high',vendor:'Zyxel NAS',desc:'Command injection уязвимость в устройствах сетевого хранения данных через CGI параметр',date:'2024-06-04'},
  {id:'CVE-2024-20399',score:7.2,level:'high',vendor:'Cisco NX-OS',desc:'Уязвимость в Cisco CLI позволяет аутентифицированному пользователю выполнить команды с root-привилегиями',date:'2024-07-01'},
  {id:'CVE-2024-6387',score:8.1,level:'high',vendor:'OpenSSH regreSSHion',desc:'Race condition в signal handler — возможно RCE под root через 6-8 часов непрерывной атаки',date:'2024-07-01'},
];
async function loadCVE(){
  const feed=document.getElementById('cveFeed');if(!feed)return;
  try{
    const res=await fetch('https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=7&startIndex=0',{headers:{'apiKey':''}});
    if(res.ok){
      const data=await res.json();
      const cves=data.vulnerabilities||[];
      if(cves.length>0){renderCVEs(cves.map(v=>({
        id:v.cve.id,
        score:v.cve.metrics?.cvssMetricV31?.[0]?.cvssData?.baseScore||v.cve.metrics?.cvssMetricV2?.[0]?.cvssData?.baseScore||'N/A',
        desc:v.cve.descriptions?.[0]?.value||'No description',
        date:v.cve.published?.split('T')[0]||'',
        level:getScoreLevel(v.cve.metrics?.cvssMetricV31?.[0]?.cvssData?.baseScore||0)
      })));return;}
    }
  }catch(e){}
  // Fallback to mock data
  renderCVEs(MOCK_CVES);
}
function getScoreLevel(score){return score>=9?'critical':score>=7?'high':score>=4?'medium':'low';}
function renderCVEs(cves){
  const feed=document.getElementById('cveFeed');if(!feed)return;
  feed.innerHTML=cves.slice(0,7).map(c=>{
    const lvlLabel={critical:'КРИТИЧЕСКИЙ',high:'ВЫСОКИЙ',medium:'СРЕДНИЙ',low:'НИЗКИЙ'}[c.level]||c.level;
    const desc=typeof c.desc==='string'?c.desc.substring(0,120)+'...':c.desc;
    return `<div class="cve-item" onclick="window.open('https://nvd.nist.gov/vuln/detail/${c.id}','_blank')">
      <div class="cve-top"><span class="cve-id">${c.id}</span><span class="cve-score ${c.level}">${c.score} ${lvlLabel}</span><span class="cve-date">${c.date}</span></div>
      <div class="cve-desc">${desc}</div>
    </div>`;
  }).join('');
}


// ══════════════════════════════════════════════
//  ROI CALCULATOR
// ══════════════════════════════════════════════
function calcROI(){
  const employees=+document.getElementById('roiEmployees').value;
  const incidents=+document.getElementById('roiIncidents').value;
  const damage=+document.getElementById('roiDamage').value;
  const currentCost=+document.getElementById('roiCurrentCost').value;
  document.getElementById('roiEmployeesVal').textContent=employees.toLocaleString();
  document.getElementById('roiIncidentsVal').textContent=incidents;
  document.getElementById('roiDamageVal').textContent=damage.toLocaleString();
  document.getElementById('roiCurrentCostVal').textContent=currentCost.toLocaleString();
  // DDC reduces incidents by 85%, cost by 40%
  const incReduction=0.85;
  const savedDamage=incidents*damage*incReduction;
  const ddcCost=currentCost*0.6+employees*50;
  const netSaving=savedDamage-ddcCost+currentCost*0.4;
  const payback=Math.round(ddcCost/(netSaving/12));
  document.getElementById('roiSaved').textContent='$ '+Math.round(netSaving/1000)*1000>0?('$'+Math.round(netSaving/1000).toLocaleString()+'K'):'$0';
  document.getElementById('roiReduction').textContent=Math.round(incReduction*100)+'%';
  document.getElementById('roiPayback').textContent=payback>0?payback+' мес':'< 1 мес';
}


// ══════════════════════════════════════════════
//  CASE STUDIES
// ══════════════════════════════════════════════
const CASES = [
  {org:'Национальный Банк РК',icon:'🏦',banner:'linear-gradient(135deg,#0a1f2e,#061e19)',
   title:'Внедрение SOC и SIEM для защиты финансовой инфраструктуры',
   desc:'Создание Security Operations Center с круглосуточным мониторингом 847 критических активов и автоматизированным реагированием на инциденты.',
   results:['↓ 94% инцидентов','8.4 мин реакция','99.97% uptime SOC'],
   link:'cybersecurity'},
  {org:'Министерство цифрового развития РК',icon:'🏛️',banner:'linear-gradient(135deg,#0d1b4b,#061e19)',
   title:'Интеграция 47 государственных систем через Smart Bridge',
   desc:'Построение единой шины данных для межведомственного взаимодействия, обрабатывающей 5M+ API-запросов в сутки без единой точки отказа.',
   results:['47 систем в 1','5M запросов/день','99.98% доступность'],
   link:'smartcity'},
  {org:'FinTech экосистема Казахстана',icon:'💳',banner:'linear-gradient(135deg,#1a0f3d,#061e19)',
   title:'Запуск Digital Tenge — цифровой валюты НБ РК (CBDC)',
   desc:'Разработка и запуск платформы цифрового тенге с поддержкой 500K+ пользователей, транзакциями за 0.8 сек и соответствием PCI DSS Level 1.',
   results:['500K+ пользователей','₸2.3B оборот/мес','0.8s транзакция'],
   link:'fintech'},
];
function renderCases(){
  const grid=document.getElementById('caseGrid');if(!grid)return;
  grid.innerHTML=CASES.map(c=>`
    <div class="case-card reveal" onclick="navigate('${c.link}')">
      <div class="case-card-banner" style="background:${c.banner}">${c.icon}</div>
      <div class="case-card-body">
        <div class="case-card-org">${c.org}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <div class="case-result">${c.results.map(r=>`<span class="case-result-item">${r}</span>`).join('')}</div>
      </div>
    </div>`).join('');
  document.querySelectorAll('#caseGrid .reveal').forEach(el=>revObs&&revObs.observe(el));
}


// ══════════════════════════════════════════════
//  TECH STACK BUILDER
// ══════════════════════════════════════════════
const TSB_PALETTE_ITEMS = [
  {name:'Python',cat:'AI/ML'},{name:'Java',cat:'Backend'},{name:'React',cat:'Frontend'},
  {name:'PostgreSQL',cat:'Database'},{name:'Redis',cat:'Cache'},{name:'Kafka',cat:'Streaming'},
  {name:'Docker',cat:'DevOps'},{name:'Kubernetes',cat:'DevOps'},{name:'Wazuh',cat:'Security'},
  {name:'Elasticsearch',cat:'Search'},{name:'TensorFlow',cat:'AI/ML'},{name:'Nginx',cat:'Web'},
  {name:'Terraform',cat:'IaC'},{name:'Grafana',cat:'Monitoring'},{name:'TheHive',cat:'Security'},
  {name:'Oracle DB',cat:'Database'},{name:'FastAPI',cat:'Backend'},{name:'LangChain',cat:'AI/ML'},
];
let tsbDropped=[];
function initTSB(){
  const palette=document.getElementById('tsbPalette');if(!palette)return;
  palette.innerHTML=TSB_PALETTE_ITEMS.map(t=>`<span class="tsb-chip" draggable="true" ondragstart="tsbDragStart(event,'${t.name}')" onclick="tsbAddChip('${t.name}')">${t.name}<span style="margin-left:4px;font-size:10px;opacity:.5">${t.cat}</span></span>`).join('');
}
let dragItem='';
function tsbDragStart(e,name){dragItem=name;e.target.classList.add('dragging');setTimeout(()=>e.target.classList.remove('dragging'),0);}
function tsbDragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over');}
function tsbDrop(e){
  e.preventDefault();e.currentTarget.classList.remove('drag-over');
  if(dragItem&&!tsbDropped.includes(dragItem)){tsbDropped.push(dragItem);renderTSBDropped();}
}
function tsbAddChip(name){if(!tsbDropped.includes(name)){tsbDropped.push(name);renderTSBDropped();}}
function renderTSBDropped(){
  const el=document.getElementById('tsbDropped');if(!el)return;
  el.innerHTML=tsbDropped.map(n=>`<span class="tsb-chip" style="border-color:rgba(0,169,143,0.3);cursor:pointer" onclick="removeFromStack('${n}')">${n} ✕</span>`).join('');
  document.getElementById('tsbScore').classList.remove('show');
}
function removeFromStack(name){tsbDropped=tsbDropped.filter(n=>n!==name);renderTSBDropped();}
function clearStack(){tsbDropped=[];renderTSBDropped();}
function evaluateStack(){
  const sc=document.getElementById('tsbScore');if(!sc||!tsbDropped.length){return;}
  const security=tsbDropped.filter(n=>['Wazuh','TheHive','Elasticsearch'].includes(n)).length;
  const devops=tsbDropped.filter(n=>['Docker','Kubernetes','Terraform','Nginx'].includes(n)).length;
  const ai=tsbDropped.filter(n=>['Python','TensorFlow','LangChain','FastAPI'].includes(n)).length;
  const data=tsbDropped.filter(n=>['PostgreSQL','Redis','Kafka','Oracle DB','Grafana'].includes(n)).length;
  const total=tsbDropped.length;
  const score=Math.min(100,Math.round((security*15+devops*12+ai*13+data*10+Math.min(total,8)*5)));
  const grade=score>=80?'🏆 Enterprise-ready':score>=60?'🛡️ Production-ready':score>=40?'📦 MVP-ready':'🔰 Начальный уровень';
  sc.classList.add('show');
  sc.innerHTML=`<div style="font-weight:700;font-size:15px;color:var(--teal-l);margin-bottom:8px">${grade} — ${score}/100</div>
    <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:12px">
      <span>🔒 Security: ${security}/3</span><span>☁️ DevOps: ${devops}/4</span>
      <span>🤖 AI/ML: ${ai}/4</span><span>📊 Data: ${data}/5</span>
    </div>
    <div style="margin-top:10px;font-size:12px;color:var(--muted)">
      ${security<2?'💡 Добавь Wazuh или TheHive для усиления безопасности. ':''}
      ${devops<2?'💡 Kubernetes + Terraform повысят масштабируемость. ':''}
      ${ai<1?'💡 TensorFlow или LangChain нужны для AI-функций. ':''}
    </div>`;
}


// ══════════════════════════════════════════════
//  BEFORE/AFTER SLIDER
// ══════════════════════════════════════════════
let baActive=false,baWrapEl=null;
function baStart(e){
  baActive=true;
  baWrapEl=document.getElementById('baWrap');
  baMove(e);
}
function baMove(e){
  if(!baActive||!baWrapEl)return;
  const rect=baWrapEl.getBoundingClientRect();
  const clientX=e.touches?e.touches[0].clientX:e.clientX;
  const pct=Math.max(5,Math.min(95,((clientX-rect.left)/rect.width)*100));
  const divider=document.getElementById('baDivider');
  const after=document.getElementById('baAfter');
  if(divider)divider.style.left=pct+'%';
  if(after)after.style.clipPath=`inset(0 0 0 ${pct}%)`;
}
function baEnd(){baActive=false;}


// ══════════════════════════════════════════════
//  FAQ
// ══════════════════════════════════════════════
const FAQ_DATA = [
  {q:'Что такое Digital Tenge и как его получить?',a:'Digital Tenge — это цифровая национальная валюта Казахстана (CBDC), выпущенная Национальным Банком РК. Для использования необходимо скачать официальное приложение банка-партнёра и пройти верификацию через eKYC. Транзакции проходят за 0.8 секунды с минимальной комиссией.',cat:'fintech'},
  {q:'Как DDC защищает государственные информационные системы?',a:'DDC использует многоуровневый подход: Security Operations Center (SOC) работает 24/7, SIEM-система Wazuh анализирует миллионы событий в реальном времени, Blue Team проводит постоянный мониторинг, Red Team — пентесты и выявление уязвимостей. Среднее время реагирования на инцидент — 8.4 минуты.',cat:'cyber'},
  {q:'Как подать заявку на вакансию в DDC?',a:'Отправьте CV и сопроводительное письмо на hr@ddc.gov.kz с указанием желаемой позиции в теме письма. Процесс найма включает: скрининг резюме → техническое интервью → практическое задание → финальное интервью с руководителем команды. Среднее время от заявки до оффера — 3-4 недели.',cat:'career'},
  {q:'Что такое SOC и зачем он нужен?',a:'Security Operations Center (SOC) — это центр мониторинга и реагирования на киберугрозы. Специалисты SOC круглосуточно анализируют события безопасности, выявляют атаки и реагируют на инциденты. SOC DDC защищает более 200 государственных информационных систем.',cat:'cyber'},
  {q:'Как интегрироваться с Open Banking API?',a:'Для интеграции необходимо: 1) Подать заявку на info@ddc.gov.kz, 2) Пройти техническую проверку соответствия требованиям, 3) Получить тестовые credentials для Sandbox-среды, 4) Пройти security-аудит, 5) Подключиться к production API. Документация доступна по запросу.',cat:'fintech'},
  {q:'Какие технологии использует DDC?',a:'Основной стек: Python, Java, React для разработки; PostgreSQL, Oracle, ClickHouse для данных; Docker, Kubernetes, OpenShift для облака; Wazuh, Splunk, Suricata для безопасности; TensorFlow, PyTorch, LangChain для AI. Полный Tech Stack доступен в разделе "Технологии" сайта.',cat:'tech'},
  {q:'Есть ли стажировки в DDC?',a:'Да! DDC регулярно набирает стажёров по направлениям: Cybersecurity (SOC), AI/ML Engineering, Backend разработка, Data Analytics. Стажировка оплачивается (50-120K тг/мес), длится 3-6 месяцев. Лучшие стажёры получают оффер на full-time позицию. Заявки: hr@ddc.gov.kz.',cat:'career'},
  {q:'Как DDC обеспечивает доступность сервисов?',a:'Инфраструктура DDC построена по принципу высокой доступности: Active-Active кластеры, geo-distributed дата-центры, автоматическое переключение при сбоях. Целевой показатель — 99.99% uptime. Мониторинг доступности в режиме реального времени — в разделе "Статус сервисов".',cat:'tech'},
];
let faqOpen=-1;
function renderFAQ(filter=''){
  const list=document.getElementById('faqList');if(!list)return;
  const items=filter?FAQ_DATA.filter(f=>f.q.toLowerCase().includes(filter.toLowerCase())||f.a.toLowerCase().includes(filter.toLowerCase())):FAQ_DATA;
  list.innerHTML=items.map((f,i)=>`
    <div class="faq-item ${faqOpen===i?'open':''}" id="faq${i}">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        <span>${f.q}</span>
        <span class="faq-chevron">▼</span>
      </div>
      <div class="faq-a ${faqOpen===i?'open':''}"><p>${f.a}</p></div>
    </div>`).join('');
}
function filterFAQ(val){faqOpen=-1;renderFAQ(val);}
function toggleFAQ(i){faqOpen=faqOpen===i?-1:i;renderFAQ(document.getElementById('faqSearch')?.value||'');}


// ══════════════════════════════════════════════
//  ONBOARDING TOUR
// ══════════════════════════════════════════════
const TOUR_STEPS = [
  {selector:'#hero-section',title:'Добро пожаловать в DDC! 👋',text:'Это официальный портал Digital Development Center — государственной цифровой платформы Национального Банка Казахстана.',pos:'bottom'},
  {selector:'.hero-card',title:'Платформа в цифрах 📊',text:'Live-показатели: заблокированные атаки, пользователи Digital Tenge, AI-запросы и доступность платформ DDC.',pos:'bottom'},
  {selector:'#curGrid',title:'Курсы валют НБ РК 💱',text:'Актуальные курсы Национального Банка Казахстана, обновляются каждые 5 минут.',pos:'top'},
  {selector:'.topbar-menu-btn',title:'Всё остальное — в меню 🗂️',text:'Открой боковое меню, чтобы перейти в Кибербезопасность, AI Lab, Smart City, Карьеру и другие разделы сайта.',pos:'bottom'},
];
let tourIdx=0;
function startTour(){
  tourIdx=0;
  showTourStep();
  document.getElementById('tourSpotlight').classList.add('active');
}
function showTourStep(){
  const step=TOUR_STEPS[tourIdx];
  const tooltip=document.getElementById('tourTooltip');
  const target=document.querySelector(step.selector);
  if(!target||!tooltip)return;
  target.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>{
    const rect=target.getBoundingClientRect();
    tooltip.style.display='block';
    document.getElementById('tourTitle').textContent=step.title;
    document.getElementById('tourText').textContent=step.text;
    document.getElementById('tourStep').textContent=`${tourIdx+1} / ${TOUR_STEPS.length}`;
    document.getElementById('tourPrev').style.display=tourIdx===0?'none':'block';
    document.getElementById('tourNext').textContent=tourIdx===TOUR_STEPS.length-1?'Завершить ✓':'Далее →';
    // Position tooltip
    const left=Math.min(Math.max(rect.left,10),window.innerWidth-340);
    const top=step.pos==='bottom'?rect.bottom+12:rect.top-140;
    tooltip.style.left=left+'px';
    tooltip.style.top=Math.max(10,top)+'px';
  },400);
}
function nextTour(){
  if(tourIdx>=TOUR_STEPS.length-1){endTour();return;}
  tourIdx++;showTourStep();
}
function prevTour(){if(tourIdx>0){tourIdx--;showTourStep();}}
function endTour(){
  document.getElementById('tourSpotlight').classList.remove('active');
  document.getElementById('tourTooltip').style.display='none';
}




// ══════════════════════════════════════════════
//  INFRA TAB SWITCHING
// ══════════════════════════════════════════════
function showInfraTab(id, btn) {
  document.querySelectorAll('.infra-tab-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('#page-infrastructure .page-tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('infra-' + id);
  if (panel) panel.style.display = 'block';
  if (btn) btn.classList.add('active');
  // Init uptime when status tab opened
  if (id === 'status') {
    renderUptime && renderUptime();
    const el = document.getElementById('statusUpdateTime');
    if (el) el.textContent = 'Обновлено: ' + new Date().toLocaleTimeString('ru-RU');
  }
}


// ══════════════════════════════════════════════
//  KNOWLEDGE CENTER
// ══════════════════════════════════════════════
const ARTICLES_DB = [{"icon": "📖", "type": "Статья", "color": "#3b82f6", "bg": "rgba(59,130,246,.08)", "title": "Архитектура CBDC: как работает Digital Tenge", "desc": "Техническое описание криптографии, API и архитектуры CBDC-платформы", "date": "2024-12-10", "read": "15 мин", "full": "Digital Tenge — это центральная банковская цифровая валюта (CBDC) Казахстана, выпускаемая и гарантированная Национальным Банком РК.\n\nАРХИТЕКТУРА: Платформа построена на микросервисной архитектуре с использованием Java Spring Boot для транзакционного ядра и NestJS для API-слоя. Распределённый реестр обеспечивает неизменяемость истории операций.\n\nБЕЗОПАСНОСТЬ: Все транзакции защищены HSM (Hardware Security Module), шифрованием AES-256 и цифровой подписью на базе PKI-инфраструктуры. Платформа сертифицирована по PCI DSS Level 1.\n\nAPI: Open Banking API позволяет 12 банкам-партнёрам интегрироваться с платформой через стандарт ISO 20022. Среднее время транзакции — 0.8 секунды.\n\nKPI: 500 000+ активных пользователей, ₸2.3 млрд оборот в месяц, 99.99% доступность."}, {"icon": "🔬", "type": "Исследование", "color": "#a78bfa", "bg": "rgba(167,139,250,.08)", "title": "AI в государственном секторе Казахстана 2025", "desc": "Обзор применения ИИ в госорганах: кейсы, результаты, перспективы", "date": "2025-01-15", "read": "35 мин", "full": "В 2025 году Казахстан активно интегрирует технологии искусственного интеллекта в государственное управление. DDC является ключевым технологическим оператором этой трансформации.\n\nКЛЮЧЕВЫЕ НАПРАВЛЕНИЯ:\n• NLP и чат-боты: обработка обращений граждан на казахском, русском и английском языках. Модель BERT-kz обучена на 15 ГБ казахскоязычных текстов, достигает 91% точности распознавания намерений.\n• Computer Vision: система видеоаналитики обрабатывает 8 500 камер Астаны в реальном времени. Точность распознавания лиц — 99.2%.\n• Predictive Analytics: модели прогнозирования рисков для финансового сектора достигают точности ±2.3%.\n• Anomaly Detection: ML-модель выявляет мошеннические транзакции с F1-score 94%.\n\nРЕЗУЛЬТАТЫ: Сокращение времени обработки госуслуг на 67%, снижение операционных расходов на 34%, рост удовлетворённости граждан."}, {"icon": "💼", "type": "Кейс", "color": "#00A98F", "bg": "rgba(0,169,143,.08)", "title": "SOC DDC остановил ransomware за 8 минут", "desc": "Детальный разбор инцидента командой Blue Team", "date": "2025-02-01", "read": "20 мин", "full": "14 ноября 2024, 02:47 UTC — Wazuh Manager зафиксировал подозрительную активность на хосте CORE-BANK-SRV-01: попытки шифрования файлов, характерные для LockBit 3.0.\n\nХРОНОЛОГИЯ РЕАГИРОВАНИЯ:\n• 02:47 — SIEM-алерт категории Critical. L1 аналитик получает уведомление.\n• 02:49 — L2 аналитик подтверждает ransomware. Автоматическая изоляция хоста через Shuffle SOAR.\n• 02:51 — Извлечены IOC: хэши файлов, C2-адрес. Добавлены в MISP, заблокированы на firewall.\n• 02:53 — L3 команда Velociraptor проводит forensics. Определён вектор атаки (фишинг email).\n• 02:55 — Инцидент локализован. Восстановление из бэкапа инициировано.\n• 03:03 — Хост восстановлен и возвращён в сеть. Общее время реагирования: 8 минут 14 секунд.\n\nИТОГ: Нулевое распространение ransomware. Потери данных: 0. SLA соблюдён."}, {"icon": "📊", "type": "Отчёт", "color": "#fbbf24", "bg": "rgba(251,191,36,.08)", "title": "Digital Tenge: итоги 2024 года", "desc": "500K пользователей, ₸2.3B оборот, новые функции CBDC", "date": "2025-01-30", "read": "25 мин", "full": "2024 год стал переломным для Digital Tenge — платформа преодолела отметку 500 000 активных пользователей и масштабировалась на все регионы Казахстана.\n\nКЛЮЧЕВЫЕ ДОСТИЖЕНИЯ 2024:\n• Пользователи: 500 247 активных кошельков (+340% год к году)\n• Оборот: ₸2.3 млрд в месяц (декабрь 2024)\n• Транзакции: 847 операций в секунду в пиковые часы\n• Скорость: среднее время транзакции снижено до 0.8 сек (-40%)\n• Доступность: 99.99% uptime за весь 2024 год\n\nНОВЫЕ ФУНКЦИИ:\n• Программируемые выплаты: автоматические субсидии и социальные платежи\n• Open API для 12 банков-партнёров (Halyk, Kaspi, ForteBank, BCC и др.)\n• Merchant QR — 2 400+ точек оплаты по всей стране\n\nПЛАНЫ 2025: Расширение до 1M+ пользователей, интеграция с международными платёжными системами."}, {"icon": "📰", "type": "Новость", "color": "#4ade80", "bg": "rgba(74,222,128,.08)", "title": "DDC запустил BERT-kz — первую KZ NLP-модель", "desc": "Обучена на 15GB казахских текстов, 91% точность NLU", "date": "2025-03-01", "read": "5 мин", "full": "Digital Development Center запустил в production первую специализированную языковую модель для казахского языка — BERT-kz.\n\nТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ:\n• Архитектура: BERT-base (110M параметров), адаптирована под казахскую морфологию\n• Обучающий корпус: 15 ГБ казахскоязычных текстов (новости, госдокументы, юридические тексты)\n• Точность NLU: 91% на тестовой выборке\n• Языки: казахский (кириллица + латиница) + русский (code-switching)\n• Время инференса: < 50 мс\n\nПРИМЕНЕНИЕ: Обработка обращений граждан на портале eGov.kz, классификация госдокументов, автоматический перевод официальных текстов.\n\nОТКРЫТЫЙ ДОСТУП: Модель будет доступна на HuggingFace Hub для казахстанских разработчиков."}, {"icon": "📋", "type": "Документация", "color": "#94a3b8", "bg": "rgba(148,163,184,.06)", "title": "REST API Guide: Open Banking Platform", "desc": "Полное руководство по интеграции с Open Banking API DDC", "date": "2024-11-20", "read": "45 мин", "full": "Руководство для разработчиков по интеграции с Open Banking API Platform DDC.\n\nАУТЕНТИФИКАЦИЯ: OAuth 2.0 + PKCE. Все запросы требуют Bearer Token с ограниченным TTL.\n\nБАЗОВЫЙ URL: https://api.openbanking.ddc.gov.kz/v2/\n\nОСНОВНЫЕ ЭНДПОИНТЫ:\n• GET /accounts — список счетов клиента\n• GET /accounts/{id}/transactions — история транзакций\n• POST /payments/initiate — инициализация платежа\n• GET /payments/{id}/status — статус платежа\n• GET /fx/rates — курсы валют НБ РК (real-time)\n\nЛИМИТЫ: 1000 запросов/минута для sandbox, 10 000/минута для production.\n\nСТАНДАРТЫ: ISO 20022, OpenAPI 3.0. Все данные в формате JSON. Обязательное шифрование TLS 1.3.\n\nSANDBOX: Тестовая среда с синтетическими данными доступна по запросу на developer@ddc.gov.kz."}, {"icon": "🔬", "type": "Исследование", "color": "#a78bfa", "bg": "rgba(167,139,250,.08)", "title": "Кибербезопасность финансового сектора РК 2025", "desc": "Анализ ландшафта киберугроз для банков Казахстана", "date": "2025-01-10", "read": "30 мин", "full": "Ежегодный анализ DDC Threat Intelligence команды по киберугрозам для финансового сектора Казахстана.\n\nСТАТИСТИКА 2024:\n• Общее количество атак: 1 038 155 заблокированных попыток\n• Топ-1 вектор: фишинговые письма (34% всех инцидентов)\n• Топ-2: credential stuffing (28%)\n• Топ-3: DDoS (21%)\n• Ransomware инциденты: 3 (все успешно локализованы)\n\nОСНОВНЫЕ УГРОЗЫ 2025:\n• AI-генерируемые фишинговые атаки — рост 340%\n• Supply chain атаки на open-source зависимости\n• Атаки на API финтех-приложений\n\nРЕКОМЕНДАЦИИ: Внедрение MFA для всех корпоративных сервисов, регулярные Cyber Range учения, threat hunting программы.\n\nВЫВОД: Финансовый сектор Казахстана демонстрирует высокий уровень киберустойчивости благодаря SOC DDC."}, {"icon": "💼", "type": "Кейс", "color": "#00A98F", "bg": "rgba(0,169,143,.08)", "title": "Smart Bridge: 47 систем в одной шине данных", "desc": "История создания межведомственной интеграции с 5M+ запросов/сут", "date": "2025-02-15", "read": "18 мин", "full": "Smart Bridge — межведомственная интеграционная платформа, объединяющая 47 государственных информационных систем Казахстана.\n\nАРХИТЕКТУРА: Event-driven микросервисы на базе Apache Kafka. API Gateway на WSO2. REST + SOAP адаптеры для legacy-систем.\n\nИНТЕГРИРОВАННЫЕ СИСТЕМЫ (топ-10):\n• ГБД ФЛ — Государственная база данных физических лиц\n• E-Nотариат — Нотариальные действия онлайн  \n• Реестр недвижимости — МЮ РК\n• ЕРБД — Единый реестр бизнеса\n• ЦОН — Центры обслуживания населения\n• ГЦВП — Государственный центр выплат пенсий\n• Налоговый комитет — КГД МФ РК\n• Министерство здравоохранения — медкарты\n• КЦМР — Клиринг и расчёты\n• Digital Tenge — НБ РК\n\nНАГРУЗКА: 5 000 000+ API-запросов в сутки, пиковая нагрузка 1 200 RPS, latency P99 < 200 мс, uptime 99.98%."}, {"icon": "📰", "type": "Новость", "color": "#4ade80", "bg": "rgba(74,222,128,.08)", "title": "Cyber Range DDC — 200 специалистов, 12 сценариев", "desc": "Масштабные учения Blue/Red Team с организациями Казахстана", "date": "2025-02-20", "read": "5 мин", "full": "DDC провёл крупнейшие в истории Казахстана учения по кибербезопасности — Cyber Range 2025.\n\nУЧАСТНИКИ: 200 специалистов из 30 организаций: банки, госорганы, телеком-операторы, энергетические компании.\n\n12 СЦЕНАРИЕВ АТАК:\n1. Ransomware на банковскую инфраструктуру\n2. DDoS на платёжный шлюз  \n3. Фишинговая кампания на сотрудников\n4. SQL injection на веб-портал\n5. Атака на SWIFT-соединение\n6. Компрометация цепочки поставок\n7. Insider threat — утечка данных\n8. APT-атака на критическую инфраструктуру\n9. DNS hijacking\n10. Атака на мобильное банковское приложение\n11. Business Email Compromise (BEC)\n12. Атака на IoT-устройства Smart City\n\nРЕЗУЛЬТАТЫ: Среднее время обнаружения атаки снизилось на 34%. Разработаны 8 новых runbook для инцидент-менеджмента."}];

function filterKnow(type, btn) {
  document.querySelectorAll('#page-knowledge .proj-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const cards = document.querySelectorAll('#knowGrid .know-card');
  cards.forEach((card, i) => {
    const typeEl = card.querySelector('.know-type');
    const cardType = typeEl ? typeEl.textContent.trim() : '';
    card.style.display = (type === 'all' || cardType === type) ? 'block' : 'none';
  });
}

function openArticle(idx) {
  const a = ARTICLES_DB[idx]; if (!a) return;
  const langMap = {
    ru: { read: 'мин чтения', close: 'Закрыть', type: a.type },
    kz: { read: 'мин оқу', close: 'Жабу', type: a.type },
    en: { read: 'min read', close: 'Close', type: a.type },
  };
  const lm = langMap[lang] || langMap.ru;
  const bodyHtml = a.full.split('\n').map(line => {
    if (!line.trim()) return '<div style="height:8px"></div>';
    if (line.match(/^[А-ЯA-Z\s•—]+:/) || line.match(/^\d+\./)) {
      return `<div style="font-weight:700;color:var(--text);margin:10px 0 4px">${line}</div>`;
    }
    if (line.startsWith('•')) {
      return `<div style="padding-left:16px;color:rgba(255,255,255,.7);margin-bottom:3px">${line}</div>`;
    }
    return `<p style="color:rgba(255,255,255,.7);line-height:1.8;margin-bottom:8px">${line}</p>`;
  }).join('');

  document.getElementById('svcModalContent').innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <span style="font-size:40px">${a.icon}</span>
      <div>
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${a.color};margin-bottom:6px">${lm.type}</div>
        <h2 style="font-size:18px;font-weight:900;line-height:1.3">${a.title}</h2>
        <div style="font-size:12px;color:var(--dim);margin-top:4px">${a.date} · ${a.read} ${lm.read}</div>
      </div>
    </div>
    <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:18px;margin-bottom:16px;max-height:400px;overflow-y:auto">
      ${bodyHtml}
    </div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">${lm.close}</button>
    </div>`;
  openModalEl('svcModal');
}

// ══════════════════════════════════════════════
//  KNOWLEDGE CENTER — external educational resources
// ══════════════════════════════════════════════
const EDU_RESOURCES = [
  {icon:'🎓',color:'#3b82f6',bg:'rgba(59,130,246,.08)',name:'Coursera',cat:{ru:'AI / Data Science',kz:'AI / Data Science',en:'AI / Data Science'},desc:{ru:'Курсы по машинному обучению, data science и кибербезопасности от Stanford, Google, IBM и других университетов и компаний.',kz:'Stanford, Google, IBM және басқа университеттер мен компаниялардан машиналық оқыту, data science курстары.',en:'Courses on machine learning, data science and cybersecurity from Stanford, Google, IBM and other universities and companies.'},link:'https://www.coursera.org'},
  {icon:'📘',color:'#a78bfa',bg:'rgba(167,139,250,.08)',name:'edX',cat:{ru:'Computer Science',kz:'Computer Science',en:'Computer Science'},desc:{ru:'Университетские курсы по информатике, облачным технологиям и кибербезопасности от MIT, Harvard и других вузов.',kz:'MIT, Harvard және басқа университеттерден информатика, бұлттық технологиялар курстары.',en:'University-level courses on computer science, cloud and cybersecurity from MIT, Harvard and other institutions.'},link:'https://www.edx.org'},
  {icon:'💻',color:'#00A98F',bg:'rgba(0,169,143,.08)',name:'Stepik',cat:{ru:'Программирование',kz:'Бағдарламалау',en:'Programming'},desc:{ru:'Популярная в СНГ платформа с курсами по Python, алгоритмам, машинному обучению и аналитике данных на русском языке.',kz:'ТМД-да танымал Python, алгоритмдер және деректер аналитикасы курстары бар платформа.',en:'A platform popular across the CIS with Russian-language courses on Python, algorithms, ML and data analytics.'},link:'https://stepik.org'},
  {icon:'🛡️',color:'#f87171',bg:'rgba(248,113,113,.08)',name:'OWASP',cat:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},desc:{ru:'Открытые стандарты и обучающие материалы по безопасности веб-приложений — основа знаний для команды Red/Blue Team.',kz:'Веб-қосымшалар қауіпсіздігі бойынша ашық стандарттар мен оқу материалдары.',en:"Open standards and learning materials on web application security — core knowledge for Red/Blue Team work."},link:'https://owasp.org'},
  {icon:'🎯',color:'#fbbf24',bg:'rgba(251,191,36,.08)',name:'TryHackMe',cat:{ru:'Кибербезопасность',kz:'Киберқауіпсіздік',en:'Cybersecurity'},desc:{ru:'Практические лаборатории и CTF-задания для отработки навыков пентестинга и threat hunting в безопасной среде.',kz:'Пентестинг дағдыларын қауіпсіз ортада жаттықтыруға арналған тәжірибелік зертханалар.',en:'Hands-on labs and CTF challenges for practicing penetration testing and threat hunting in a safe environment.'},link:'https://tryhackme.com'},
  {icon:'🆓',color:'#4ade80',bg:'rgba(74,222,128,.08)',name:'freeCodeCamp',cat:{ru:'Разработка',kz:'Әзірлеу',en:'Development'},desc:{ru:'Бесплатные интерактивные курсы по веб-разработке, Python и структурам данных с сертификатами.',kz:'Веб-әзірлеу, Python бойынша тегін интерактивті курстар.',en:'Free interactive courses on web development, Python and data structures, with certificates.'},link:'https://www.freecodecamp.org'},
  {icon:'📊',color:'#60a5fa',bg:'rgba(96,165,250,.08)',name:'Kaggle Learn',cat:{ru:'Data Science',kz:'Data Science',en:'Data Science'},desc:{ru:'Короткие практические курсы по Python, pandas, машинному обучению и визуализации данных — с реальными датасетами.',kz:'Python, pandas, машиналық оқыту бойынша қысқа тәжірибелік курстар.',en:'Short, practical courses on Python, pandas, machine learning and data visualization, using real datasets.'},link:'https://www.kaggle.com/learn'},
  {icon:'🤗',color:'#f472b6',bg:'rgba(244,114,182,.08)',name:'Hugging Face Course',cat:{ru:'NLP / AI',kz:'NLP / AI',en:'NLP / AI'},desc:{ru:'Бесплатный курс по Transformers, NLP и LLM — основа технологий, на которых строится BERT-kz и Gov AI Assistant.',kz:'Transformers, NLP бойынша тегін курс — BERT-kz негізделген технологиялар.',en:'A free course on Transformers, NLP and LLMs — the foundation behind BERT-kz and the Gov AI Assistant.'},link:'https://huggingface.co/learn'},
];

function renderEduResources(){
  const grid = document.getElementById('eduResourcesGrid'); if(!grid) return;
  const visitL = lang==='en'?'Visit site ↗':lang==='kz'?'Сайтқа өту ↗':'Перейти на сайт ↗';
  grid.innerHTML = EDU_RESOURCES.map(r=>`
    <a class="know-card reveal" href="${r.link}" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;display:block">
      <div class="know-top" style="background:${r.bg}">${r.icon}</div>
      <div class="know-body">
        <div class="know-type" style="color:${r.color}">${r.cat[lang]||r.cat.ru}</div>
        <h3>${r.name}</h3><p>${r.desc[lang]||r.desc.ru}</p>
        <div class="know-meta"><span style="color:var(--teal-l);font-weight:600">${visitL}</span></div>
      </div>
    </a>`).join('');
  grid.querySelectorAll('.reveal').forEach(el=>revObs&&revObs.observe(el));
}

// ══════════════════════════════════════════════
//  UNIVERSAL TRANSLATION FIX
//  Translates data-ru/kz/en on ALL pages + data-i18n
// ══════════════════════════════════════════════


// Override applyLang to call applyLangToPage for ALL pages


// Patch setLang to use new applyLang

