/* DDC Portal — js/soc.js */

// ══════════════════════════════════════════════
//  SOC DASHBOARD
// ══════════════════════════════════════════════
const THREATS = [
  {name:'DDoS',val:1240,color:'#f87171'},{name:'Phishing',val:874,color:'#fbbf24'},
  {name:'Malware',val:412,color:'#a78bfa'},{name:'Brute Force',val:198,color:'#60a5fa'},
  {name:'Ransomware',val:89,color:'#f97316'},{name:'SQL Injection',val:34,color:'#34d399'},
];
const OSS_TOOLS = [
  {icon:'🛡️',name:'Wazuh',desc:{ru:'SIEM/XDR',kz:'SIEM/XDR',en:'SIEM/XDR'}},
  {icon:'🐝',name:'Suricata',desc:{ru:'IDS/IPS',kz:'IDS/IPS',en:'IDS/IPS'}},
  {icon:'🔬',name:'TheHive',desc:{ru:'Реагирование',kz:'Жауап беру',en:'Incident Response'}},
  {icon:'🧩',name:'MISP',desc:{ru:'Threat Intel',kz:'Threat Intel',en:'Threat Intel'}},
  {icon:'🦈',name:'Zeek',desc:{ru:'Анализ сети',kz:'Желі талдауы',en:'Network Analysis'}},
  {icon:'🦅',name:'Velociraptor',desc:{ru:'Forensics',kz:'Форензика',en:'Forensics'}},
  {icon:'🔍',name:'OpenSearch',desc:{ru:'Поиск/SIEM',kz:'Іздеу/SIEM',en:'Search/SIEM'}},
  {icon:'🔒',name:'OpenVAS',desc:{ru:'Сканер',kz:'Сканер',en:'Scanner'}},
];

function buildSOC() {
  const total = THREATS.reduce((s,t)=>s+t.val,0);
  const tl = document.getElementById('threatList');
  if(tl) tl.innerHTML = THREATS.map(t=>`<div class="threat-row"><span>${t.name}</span><div class="threat-bar-wrap"><div class="threat-bar" style="width:${t.val/total*100}%;background:${t.color}"></div></div><span style="color:${t.color};font-weight:700;font-family:'Manrope',sans-serif">${t.val}</span></div>`).join('');
  const ol = document.getElementById('ossList');
  if(ol) ol.innerHTML = OSS_TOOLS.map(t=>`<div class="threat-row"><span>${t.icon} <b>${t.name}</b></span><span style="color:var(--muted);font-size:12px">${t.desc[lang]||t.desc.ru}</span></div>`).join('');
  const canvas = document.getElementById('socChart');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  if(window._socChart) window._socChart.destroy();
  window._socChart = new Chart(ctx,{type:'bar',data:{labels:THREATS.map(t=>t.name),datasets:[{data:THREATS.map(t=>t.val),backgroundColor:THREATS.map(t=>t.color+'33'),borderColor:THREATS.map(t=>t.color),borderWidth:2,borderRadius:6}]},options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'rgba(255,255,255,0.45)',font:{size:11}}},y:{ticks:{color:'rgba(255,255,255,0.45)',font:{size:11}}}},animation:{duration:800}}});
}

// SOC live updates
setInterval(()=>{
  const v=(Math.random()*50+2820|0).toLocaleString();
  const k1=document.getElementById('kpi1'); if(k1) k1.textContent=v;
},5000);


// ══════════════════════════════════════════════
//  CYBER MAP
// ══════════════════════════════════════════════
function buildCyberMap() {
  // SVG-based world map - just start the attack animation
  startSvgAttacks();
}

const SVG_CITIES = [
  {name:'Москва',   cx:480, cy:85},
  {name:'Лондон',   cx:348, cy:82},
  {name:'Берлин',   cx:382, cy:75},
  {name:'Пекин',    cx:722, cy:115},
  {name:'Сеул',     cx:770, cy:122},
  {name:'Токио',    cx:800, cy:112},
  {name:'Нью-Йорк', cx:145, cy:112},
  {name:'Дубай',    cx:498, cy:172},
  {name:'Сингапур', cx:710, cy:225},
];
const ASTANA = {cx:605, cy:128};
const THREAT_TYPES = ['DDoS','Phishing','Malware','Ransomware','BruteForce','SQLi'];
const THREAT_COLORS = ['#f87171','#fbbf24','#a78bfa','#f97316','#60a5fa','#34d399'];
let svgAttackCount = 0;
let svgAttackInterval = null;

function startSvgAttacks() {
  const svg = document.getElementById('cyberMapSvg');
  if(!svg) return;
  if(svgAttackInterval) clearInterval(svgAttackInterval);
  svgAttackInterval = setInterval(() => {
    const city = SVG_CITIES[Math.floor(Math.random()*SVG_CITIES.length)];
    const tIdx = Math.floor(Math.random()*THREAT_TYPES.length);
    const color = THREAT_COLORS[tIdx];
    const type = THREAT_TYPES[tIdx];
    addSvgAttack(svg, city, color, type);
    svgAttackCount++;
    const counter = document.getElementById('liveAttackCount');
    if(counter) counter.textContent = svgAttackCount;
    // Add to log
    const log = document.getElementById('svgAttackLog');
    if(log) {
      const pill = document.createElement('span');
      pill.style.cssText = `display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:5px;font-size:11px;background:${color}18;border:1px solid ${color}44;color:${color};animation:fadeIn .3s ease`;
      pill.textContent = `${type} ← ${city.name}`;
      log.insertBefore(pill, log.firstChild);
      if(log.children.length > 6) log.removeChild(log.lastChild);
    }
  }, 1500 + Math.random()*1000);
}

function addSvgAttack(svg, src, color, type) {
  const linesG = document.getElementById('attackLines');
  const dotsG  = document.getElementById('attackDots');
  if(!linesG) return;
  const id = 'atk_' + Date.now() + Math.random().toString(36).slice(2,6);
  // Bezier control point (arc upward)
  const mx = (src.cx + ASTANA.cx)/2;
  const my = Math.min(src.cy, ASTANA.cy) - 60 - Math.random()*40;
  // Animated line via path
  const path = document.createElementNS('http://www.w3.org/2000/svg','path');
  path.setAttribute('id', id+'_path');
  path.setAttribute('d', `M${src.cx},${src.cy} Q${mx},${my} ${ASTANA.cx},${ASTANA.cy}`);
  path.setAttribute('fill','none');
  path.setAttribute('stroke', color);
  path.setAttribute('stroke-width','1.5');
  path.setAttribute('opacity','0.7');
  path.setAttribute('stroke-dasharray','800');
  path.setAttribute('stroke-dashoffset','800');
  const anim = document.createElementNS('http://www.w3.org/2000/svg','animate');
  anim.setAttribute('attributeName','stroke-dashoffset');
  anim.setAttribute('from','800'); anim.setAttribute('to','0');
  anim.setAttribute('dur','1.8s'); anim.setAttribute('fill','freeze');
  path.appendChild(anim);
  linesG.appendChild(path);
  // Moving dot along path
  if(dotsG) {
    const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('r','4');
    dot.setAttribute('fill', color);
    dot.setAttribute('filter','url(#glow2)');
    const motionAnim = document.createElementNS('http://www.w3.org/2000/svg','animateMotion');
    motionAnim.setAttribute('dur','1.8s');
    motionAnim.setAttribute('fill','freeze');
    const mpath = document.createElementNS('http://www.w3.org/2000/svg','mpath');
    mpath.setAttributeNS('http://www.w3.org/1999/xlink','href','#'+id+'_path');
    motionAnim.appendChild(mpath);
    dot.appendChild(motionAnim);
    dotsG.appendChild(dot);
    setTimeout(()=>{ try{dotsG.removeChild(dot);}catch(e){} }, 2200);
  }
  // Cleanup attack line after 4s
  setTimeout(()=>{
    try{
      path.setAttribute('opacity','0');
      setTimeout(()=>{ try{linesG.removeChild(path);}catch(e){} }, 500);
    }catch(e){}
  }, 3500);
}


// ══════════════════════════════════════════════
//  MODALS UTIL
// ══════════════════════════════════════════════
function openModalEl(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';}
function closeModal(id){document.getElementById(id).classList.remove('open');document.body.style.overflow='';}
function closeModalOutside(e,id){if(e.target===document.getElementById(id))closeModal(id);}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal('svcModal');closeModal('jobModal');}});


// ══════════════════════════════════════════════
//  CONTACT FORM
// ══════════════════════════════════════════════
const EMAILJS_SVC='YOUR_SERVICE_ID', EMAILJS_TPL='YOUR_TEMPLATE_ID', EMAILJS_KEY='YOUR_PUBLIC_KEY';
(function(){if(typeof emailjs!=='undefined')emailjs.init({publicKey:EMAILJS_KEY});})();

function phoneMask(input){
  let v=input.value.replace(/\D/g,'');
  if(v.startsWith('7'))v=v.slice(1);
  if(v.startsWith('8'))v=v.slice(1);
  let o='+7 ';
  if(v.length>0)o+='('+v.substring(0,3);
  if(v.length>=3)o+=') '+v.substring(3,6);
  if(v.length>=6)o+='-'+v.substring(6,8);
  if(v.length>=8)o+='-'+v.substring(8,10);
  input.value=o;
}

async function submitForm(){
  const t=T[lang];
  const name=document.getElementById('cf_name').value.trim();
  const company=document.getElementById('cf_company').value.trim();
  const email=document.getElementById('cf_email').value.trim();
  const phone=document.getElementById('cf_phone').value.trim();
  const topic=document.getElementById('cf_topic').value;
  const msg=document.getElementById('cf_msg').value.trim();
  const ok=document.getElementById('cfSuccess'), err=document.getElementById('cfErrMsg'), btn=document.getElementById('cfBtn');
  ok.classList.remove('show'); err.classList.remove('show');
  ['cf_email','cf_msg'].forEach(id=>document.getElementById(id).classList.remove('err'));
  let errors=[];
  if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){errors.push(t.cfErrEmail);document.getElementById('cf_email').classList.add('err');}
  if(!msg){errors.push(t.cfErrMsg);document.getElementById('cf_msg').classList.add('err');}
  if(errors.length){err.textContent=errors.join(' ');err.classList.add('show');return;}
  btn.disabled=true; btn.classList.add('submitting');
  document.getElementById('cfBtnText').textContent='...';
  document.getElementById('cfSpin').style.display='block';
  try{
    if(typeof emailjs!=='undefined'&&EMAILJS_SVC!=='YOUR_SERVICE_ID'){
      await emailjs.send(EMAILJS_SVC,EMAILJS_TPL,{from_name:name||'Аноним',from_company:company||'—',from_email:email,from_phone:phone||'—',topic:topic||'—',message:msg,reply_to:email},EMAILJS_KEY);
    }
    ok.classList.add('show');
    ['cf_name','cf_company','cf_email','cf_phone','cf_msg'].forEach(id=>{document.getElementById(id).value='';});
    document.getElementById('cf_topic').value='';
  }catch(e){
    err.textContent='⚠️ '+( lang==='en'?'Send error. Email us directly: info@ddc.gov.kz':lang==='kz'?'Жіберу қатесі. Тікелей хабарласыңыз: info@ddc.gov.kz':'Ошибка отправки. Напишите напрямую: info@ddc.gov.kz');
    err.classList.add('show');
  }finally{
    btn.disabled=false; btn.classList.remove('submitting');
    document.getElementById('cfBtnText').setAttribute('data-i18n','cfSend');
    document.getElementById('cfBtnText').textContent=T[lang].cfSend;
    document.getElementById('cfSpin').style.display='none';
  }
}



// ══════════════════════════════════════════════
//  AI LAB MODALS
// ══════════════════════════════════════════════
const AI_DETAILS = {
  ml:{icon:'🧠',color:'#00A98F',title:'Machine Learning',
    techs:['TensorFlow','PyTorch','Scikit-learn','XGBoost','LightGBM','CatBoost','ONNX','Kubeflow'],
    kpis:[{v:'94%',l:{ru:'Точность',kz:'Дәлдік',en:'Accuracy'}},{v:'15ms',l:{ru:'Инференс',kz:'Инференс',en:'Inference'}},{v:'10M+',l:{ru:'Обучающих записей',kz:'Оқыту жазбалары',en:'Training records'}}],
    desc:{ru:'Предиктивная аналитика, детекция аномалий, прогнозирование финансовых рисков и поведенческие модели пользователей. Обученные модели интегрированы в банковские системы Казахстана для выявления мошеннических транзакций в реальном времени.',kz:'Болжамды аналитика, аномалияларды анықтау, қаржылық тәуекелдерді болжау және пайдаланушылардың мінез-құлық модельдері.',en:'Predictive analytics, anomaly detection, financial risk forecasting and user behavioral models. Trained models are integrated into Kazakhstan banking systems to detect fraudulent transactions in real time.'},
    projects:['Fraud Detection Engine (Prod)','Credit Risk Model (Prod)','Behavioral Analytics (Beta)'],
    link:'https://tensorflow.org'},
  nlp:{icon:'💬',color:'#60a5fa',title:'NLP & Chatbots',
    techs:['LangChain','HuggingFace','BERT-kz','FastAPI','Transformers','spaCy','Rasa','OpenSearch'],
    kpis:[{v:'91%',l:{ru:'Точность NLU',kz:'NLU дәлдігі',en:'NLU accuracy'}},{v:'3',l:{ru:'Языка',kz:'Тіл',en:'Languages'}},{v:'50K',l:{ru:'Запросов/сут',kz:'Сұрау/тәул.',en:'Requests/day'}}],
    desc:{ru:'Обработка обращений граждан на казахском, русском и английском языках. BERT-kz — модель, специально обученная на корпусе казахскоязычных текстов. Интегрирована с порталом egov.kz и контакт-центром.',kz:'Қазақ, орыс және ағылшын тілдерінде азаматтардың өтініштерін өңдеу. BERT-kz — қазақ тілінде арнайы оқытылған модель.',en:'Processing citizen requests in Kazakh, Russian and English. BERT-kz is a model specially trained on a corpus of Kazakh-language texts. Integrated with egov.kz portal and contact center.'},
    projects:['Gov AI Assistant (Prod)','eGov Chatbot (Prod)','Document Classifier (Beta)'],
    link:'https://huggingface.co'},
  cv:{icon:'👁️',color:'#a78bfa',title:'Computer Vision',
    techs:['OpenCV','YOLO v8','MediaPipe','TensorFlow Lite','TorchVision','DeepFace','Tesseract','PaddleOCR'],
    kpis:[{v:'99.2%',l:{ru:'Точность распознавания',kz:'Тану дәлдігі',en:'Recognition accuracy'}},{v:'30fps',l:{ru:'Обработка видео',kz:'Видео өңдеу',en:'Video processing'}},{v:'8500',l:{ru:'Камер подключено',kz:'Камера қосылды',en:'Cameras connected'}}],
    desc:{ru:'Распознавание лиц, анализ видеопотоков умного города, верификация документов и интеллектуальное видеонаблюдение. Система обрабатывает 8 500 камер Астаны в режиме реального времени.',kz:'Бет тану, ақылды қала бейне ағындарын талдау, құжаттарды верификациялау.',en:'Face recognition, smart city video stream analysis, document verification and intelligent surveillance. The system processes 8,500 Astana cameras in real time.'},
    projects:['Smart City Vision (Prod)','eKYC Face Verification (Prod)','License Plate OCR (Prod)'],
    link:'https://opencv.org'},
  pred:{icon:'📈',color:'#fbbf24',title:'Predictive Analytics',
    techs:['Prophet','LSTM','XGBoost','Statsmodels','Plotly','Apache Superset','ClickHouse','Grafana'],
    kpis:[{v:'±2.3%',l:{ru:'Точность прогноза',kz:'Болжам дәлдігі',en:'Forecast accuracy'}},{v:'30 дней',l:{ru:'Горизонт прогноза',kz:'Болжам горизонты',en:'Forecast horizon'}},{v:'12',l:{ru:'Активных моделей',kz:'Белсенді модельдер',en:'Active models'}}],
    desc:{ru:'Прогнозирование курсов валют, кредитных рисков, нагрузки на системы и поведения пользователей финансовых сервисов. Модели LSTM для временных рядов и Prophet для сезонных данных.',kz:'Валюта бағамдарын, несиелік тәуекелдерді, жүйелер жүктемесін және пайдаланушылардың мінез-құлқын болжау.',en:'Forecasting exchange rates, credit risks, system load and user behavior of financial services. LSTM models for time series and Prophet for seasonal data.'},
    projects:['FX Rate Forecasting (Prod)','System Load Prediction (Prod)','Credit Risk Scoring (Beta)'],
    link:'https://facebook.github.io/prophet'},
  doc:{icon:'📄',color:'#34d399',title:'Document AI',
    techs:['Tesseract','LayoutLM','PaddleOCR','Apache Tika','spaCy','Hugging Face','FastAPI','Kafka'],
    kpis:[{v:'98%',l:{ru:'Точность OCR',kz:'OCR дәлдігі',en:'OCR accuracy'}},{v:'0.8s',l:{ru:'Время обработки',kz:'Өңдеу уақыты',en:'Processing time'}},{v:'2M+',l:{ru:'Документов/мес',kz:'Құжат/ай',en:'Documents/month'}}],
    desc:{ru:'Автоматическое извлечение структурированных данных из документов, OCR для казахских и русских текстов, классификация и интеллектуальная маршрутизация документооборота. Интеграция с ЦОН и госпорталом.',kz:'Құжаттардан деректерді автоматты алу, қазақ және орыс мәтіндеріне арналған OCR, жіктеу және маршруттау.',en:'Automatic extraction of structured data from documents, OCR for Kazakh and Russian texts, classification and intelligent document routing. Integration with public service centers and gov portal.'},
    projects:['eDocument Processing (Prod)','Tax Form OCR (Prod)','Contract Analysis (Beta)'],
    link:'https://github.com/PaddlePaddle/PaddleOCR'},
  anom:{icon:'🔍',color:'#f87171',title:'Anomaly Detection',
    techs:['Isolation Forest','Autoencoders','DBSCAN','PyOD','Kafka Streams','Flink','Redis','Grafana'],
    kpis:[{v:'94%',l:{ru:'F1-score',kz:'F1-score',en:'F1-score'}},{v:'<0.3%',l:{ru:'Ложные срабат.',kz:'Жалған срабату',en:'False positives'}},{v:'15ms',l:{ru:'Время детекции',kz:'Анықтау уақыты',en:'Detection time'}}],
    desc:{ru:'Выявление мошеннических транзакций, нетипичного поведения пользователей и угроз ИБ в реальном времени. Комбинация unsupervised ML и rule-based систем обеспечивает минимум ложных срабатываний.',kz:'Алаяқтық транзакцияларды, пайдаланушылардың атипті мінез-құлқын және ақпараттық қауіпсіздік қауіптерін нақты уақытта анықтау.',en:'Detecting fraudulent transactions, abnormal user behavior and information security threats in real time. Combination of unsupervised ML and rule-based systems ensures minimal false positives.'},
    projects:['Transaction Fraud Detection (Prod)','Network Anomaly SOC (Prod)','Insider Threat Detection (Beta)'],
    link:'https://pyod.readthedocs.io'},
  gen:{icon:'🎨',color:'#fb923c',title:'Generative AI',
    techs:['GPT-4 API','Stable Diffusion','DALL-E','LangChain','Diffusers','LoRA','RAG','Prompt Engineering'],
    kpis:[{v:'40%',l:{ru:'Экономия времени',kz:'Уақыт үнемі',en:'Time saved'}},{v:'12',l:{ru:'Сценариев использования',kz:'Қолдану сценарийі',en:'Use cases'}},{v:'<3с',l:{ru:'Генерация ответа',kz:'Жауап генерациясы',en:'Response generation'}}],
    desc:{ru:'Синтез синтетических данных для обучения моделей, генерация черновиков документов и автоматизация контента для внутренних коммуникаций. Используется с осторожностью и человеческой проверкой для всех гос. материалов.',kz:'Модельдерді оқыту үшін синтетикалық деректер жасау, құжат жобаларын генерациялау және ішкі коммуникациялар үшін контентті автоматтандыру.',en:'Synthetic data generation for model training, document draft generation and content automation for internal communications. Used carefully with human review for all government-facing materials.'},
    projects:['Synthetic Data Generator (Prod)','Document Draft Assistant (Beta)','Internal Knowledge Search (Beta)'],
    link:'https://platform.openai.com'},
  llm:{icon:'🤖',color:'#e879f9',title:'LLM Platform',
    techs:['LangChain','Chroma','Ollama','vLLM','BERT-kz','RAG','FastAPI','Vector DB'],
    kpis:[{v:'3',l:{ru:'Языка (KZ/RU/EN)',kz:'Тіл (KZ/RU/EN)',en:'Languages (KZ/RU/EN)'}},{v:'50K',l:{ru:'Запросов/сут',kz:'Сұрау/тәул.',en:'Requests/day'}},{v:'On-prem',l:{ru:'Развёртывание',kz:'Орналастыру',en:'Deployment'}}],
    desc:{ru:'Корпоративная LLM-платформа с retrieval-augmented generation (RAG) поверх базы знаний DDC и государственных регламентов. Модели развёрнуты on-premise в GovCloud для соблюдения требований по защите данных.',kz:'DDC білім базасы мен мемлекеттік регламенттер негізінде RAG технологиясы бар корпоративтік LLM платформасы. Модельдер деректерді қорғау талаптарын сақтау үшін GovCloud-та орналастырылған.',en:'Enterprise LLM platform with retrieval-augmented generation (RAG) over the DDC knowledge base and government regulations. Models are deployed on-premise in GovCloud to meet data protection requirements.'},
    projects:['Internal Knowledge Assistant (Prod)','eGov Chatbot Engine (Prod)','Document Q&A (Beta)'],
    link:'https://www.langchain.com'},
};

function openAIMod(key){ openAIModal(key); }

function openAIModal(key) {
  const d = AI_DETAILS[key];
  const t = T[lang];
  if(!d) return;
  const closeL = t.modalClose || 'Закрыть';
  const projL = lang==='en'?'Projects':lang==='kz'?'Жобалар':'Проекты';
  const techL = 'Tech Stack';
  const readMore = lang==='en'?'Documentation ↗':lang==='kz'?'Құжаттама ↗':'Документация ↗';
  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-icon" style="font-size:48px">${d.icon}</div>
    <div class="modal-badge" style="color:${d.color};border-color:${d.color}44;background:${d.color}15">AI Innovation Lab</div>
    <h2 style="font-size:22px;margin-bottom:12px">${d.title}</h2>
    <p class="modal-desc">${d.desc[lang]||d.desc.ru}</p>
    <div class="modal-section">
      <div class="modal-section-title">KPI</div>
      <div class="modal-kpi-grid">${d.kpis.map(k=>`<div class="modal-kpi"><div class="modal-kpi-val" style="color:${d.color}">${k.v}</div><div class="modal-kpi-lbl">${k.l[lang]||k.l.ru}</div></div>`).join('')}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">${techL}</div>
      <div class="modal-tags">${d.techs.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">${projL}</div>
      ${d.projects.map(p=>{const active=p.includes('Prod');return `<div class="modal-proj-row"><span>${p.replace(' (Prod)','').replace(' (Beta)','')}</span><span class="proj-status ${active?'s-active':'s-dev'}" style="margin:0">${active?'● Prod':'◐ Beta'}</span></div>`;}).join('')}
    </div>
    <div class="modal-btns">
      <a href="${d.link}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:13px">🔗 ${readMore}</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">${closeL}</button>
    </div>`;
  openModalEl('svcModal');
}


// ══════════════════════════════════════════════
//  REGION MODALS
// ══════════════════════════════════════════════
const REGIONS = {
  astana:{icon:'🏙️',name:{ru:'Астана',kz:'Астана',en:'Astana'},pop:'1.3M',
    desc:{ru:'Столица Казахстана — главный хаб цифровых инициатив DDC. Здесь расположены SOC-центр, дата-центры и штаб-квартира DDC.',kz:'Қазақстанның астанасы — DDC цифрлық бастамаларының негізгі орталығы.',en:'Capital of Kazakhstan — the main hub of DDC digital initiatives. SOC center, data centers and DDC headquarters are located here.'},
    count:{ru:'8 активных проектов',kz:'8 белсенді жоба',en:'8 active projects'},
    projects:['Cyber Monitoring Center (SOC)','Digital Tenge Platform','Smart City Астана','Data Platform KZ','Digital Identity Platform','Open Banking API','AI Analytics Platform','Smart Government Hub'],
    tags:['SOC 24/7','Smart City','CBDC','AI Lab','GovCloud'],
    link:'https://astana.gov.kz'},
  almaty:{icon:'🌆',name:{ru:'Алматы',kz:'Алматы',en:'Almaty'},pop:'2.1M',
    desc:{ru:'Финансовый центр Казахстана. Здесь сосредоточены финтех-стартапы, офисы банков-партнёров и AI-лаборатории DDC.',kz:'Қазақстанның қаржылық орталығы. Финтех-стартаптар, банктер серіктестерінің офистері.',en:'Financial center of Kazakhstan. FinTech startups, partner bank offices and DDC AI labs are concentrated here.'},
    count:{ru:'5 активных проектов',kz:'5 белсенді жоба',en:'5 active projects'},
    projects:['FinTech Innovation Hub','AI Research Lab','Open Banking Sandbox','Mobile Banking Platform','eKYC Verification Center'],
    tags:['FinTech','AI/ML','Cloud','Digital Banking'],
    link:'https://almaty.gov.kz'},
  shymkent:{icon:'🏭',name:{ru:'Шымкент',kz:'Шымкент',en:'Shymkent'},pop:'1.2M',
    desc:{ru:'Третий по величине город Казахстана. Реализуются проекты цифровизации госуслуг и цифрового банкинга для юга страны.',kz:'Қазақстанның үшінші ірі қаласы. Оңтүстік аймақ үшін мемлекеттік қызметтерді цифрландыру жобалары.',en:'Third largest city in Kazakhstan. eGov and digital banking projects for southern Kazakhstan.'},
    count:{ru:'3 активных проекта',kz:'3 белсенді жоба',en:'3 active projects'},
    projects:['eGov Regional Hub','Digital Banking Branch','Smart Services Portal'],
    tags:['eGov','Digital Banking','Smart Services'],
    link:'https://shymkent.gov.kz'},
  atyrau:{icon:'⛽',name:{ru:'Атырау',kz:'Атырау',en:'Atyrau'},pop:'280K',
    desc:{ru:'Нефтяная столица Казахстана. Реализуются IoT-проекты мониторинга промышленных объектов и аналитики больших данных.',kz:'Қазақстанның мұнай астанасы. Өнеркәсіптік объектілерді мониторингтеу IoT жобалары.',en:'Oil capital of Kazakhstan. IoT monitoring of industrial facilities and big data analytics projects.'},
    count:{ru:'2 активных проекта',kz:'2 белсенді жоба',en:'2 active projects'},
    projects:['Industrial IoT Platform','Energy Analytics Dashboard'],
    tags:['IoT','Analytics','Industrial','Big Data'],
    link:'https://atyrau.gov.kz'},
  regions:{icon:'🗺️',name:{ru:'Регионы Казахстана',kz:'Қазақстан өңірлері',en:'Kazakhstan Regions'},pop:'19M',
    desc:{ru:'11 регионов Казахстана охвачены цифровыми проектами DDC — от eGov-интеграций до платформ Open Data и Smart Bridge.',kz:'Қазақстанның 11 өңірі DDC цифрлық жобаларымен қамтылған — eGov интеграциясынан Open Data платформаларына дейін.',en:'11 regions of Kazakhstan are covered by DDC digital projects — from eGov integrations to Open Data and Smart Bridge platforms.'},
    count:{ru:'11 регионов охвачено',kz:'11 өңір қамтылды',en:'11 regions covered'},
    projects:['eGov Regional Integration (x11)','Open Data Platform','Smart Bridge (47 systems)','Digital Document Flow','Regional Analytics Dashboard'],
    tags:['eGov','Open Data','Smart Bridge','Digital Documents','Analytics'],
    link:'https://egov.kz'},
};

function openRegionModal(key) {
  const r = REGIONS[key]; if(!r) return;
  const t = T[lang];
  const projL = lang==='en'?'Projects':lang==='kz'?'Жобалар':'Проекты';
  const popL = lang==='en'?'Population':lang==='kz'?'Халық саны':'Население';
  const readMore = lang==='en'?'Official site ↗':lang==='kz'?'Ресми сайт ↗':'Официальный сайт ↗';
  const closeL = t.modalClose || 'Закрыть';
  document.getElementById('svcModalContent').innerHTML = `
    <div class="modal-icon">${r.icon}</div>
    <div class="modal-badge">${r.count[lang]||r.count.ru}</div>
    <h2>${r.name[lang]||r.name.ru}</h2>
    <div style="display:flex;align-items:center;gap:10px;margin:10px 0 16px">
      <span style="background:rgba(0,169,143,0.1);border:1px solid rgba(0,169,143,0.2);color:var(--teal-l);font-size:12px;padding:4px 10px;border-radius:5px">👥 ${popL}: ${r.pop}</span>
    </div>
    <p class="modal-desc">${r.desc[lang]||r.desc.ru}</p>
    <div class="modal-section">
      <div class="modal-section-title">${projL}</div>
      ${r.projects.map(p=>`<div class="modal-proj-row"><span>✅ ${p}</span></div>`).join('')}
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Tags</div>
      <div class="modal-tags">${r.tags.map(tg=>`<span class="modal-tag">${tg}</span>`).join('')}</div>
    </div>
    <div class="modal-btns">
      <a href="${r.link}" target="_blank" rel="noopener" class="btn btn-primary" style="font-size:13px">🔗 ${readMore}</a>
      <button class="btn btn-outline" onclick="closeModal('svcModal')" style="font-size:13px">${closeL}</button>
    </div>`;
  openModalEl('svcModal');
}

// ══════════════════════════════════════════════
//  SOC LIVE TERMINAL
// ══════════════════════════════════════════════
const TERM_EVENTS = [
  {type:'blocked',msgs:['DDoS attack from 185.220.101.{x} → Astana DC','SQL injection attempt on egov.kz → Blocked','Phishing URL blocked: fake-nbk-{x}.kz','Port scan from {ip} → Dropped','Malware signature detected in email attachment']},
  {type:'alert',msgs:['Suspicious login: 3 failed attempts from {ip}','Unusual data transfer volume on VLAN-12','New device registered on secure network','Anomaly detected in API gateway traffic','High CPU on SOC-Server-{n} — investigating']},
  {type:'critical',msgs:['Ransomware behavior detected — isolating host','Zero-day exploit attempt on CVE-2024-{n}','Credential stuffing attack — 847 attempts/min','Lateral movement detected in CORP segment','C2 beacon detected from internal host']},
  {type:'resolved',msgs:['Incident #28{n} closed — response: {t} min','False positive confirmed — rule updated','Host quarantine lifted — clean scan','Patch deployed to {n} affected systems','Threat contained — resuming normal ops']},
  {type:'info',msgs:['SIEM rule updated: SIGMA-{n}','Threat intel feed synced from MISP','Blue Team exercise starting in 5 min','SOC shift handover — all clear','New IOC added: {ip} → watchlist']},
];
let termLineCount = 0;
function randIP(){return `${Math.floor(Math.random()*220)+20}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;}
function randNum(min,max){return Math.floor(Math.random()*(max-min)+min);}
function addTermLine(){
  const body=document.getElementById('termBody');if(!body)return;
  const ev=TERM_EVENTS[Math.floor(Math.random()*TERM_EVENTS.length)];
  const msg=ev.msgs[Math.floor(Math.random()*ev.msgs.length)]
    .replace('{ip}',randIP()).replace('{x}',randNum(1,254)).replace('{n}',randNum(100,999)).replace('{t}',randNum(4,18));
  const now=new Date();
  const time=`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  const labels={blocked:'BLOCKED',alert:'ALERT',critical:'CRITICAL',resolved:'RESOLVED',info:'INFO'};
  const div=document.createElement('div');
  div.className='t-line';
  div.style.animationDelay=`0s`;
  div.innerHTML=`<span class="t-time">[${time}]</span><span class="t-badge ${ev.type}">${labels[ev.type]}</span><span class="t-msg">${msg}</span>`;
  body.appendChild(div);
  body.scrollTop=body.scrollHeight;
  termLineCount++;
  if(body.children.length>30)body.removeChild(body.firstChild);
}
function startTerminal(){
  addTermLine();
  setInterval(addTermLine,1800+Math.random()*1200);
}


