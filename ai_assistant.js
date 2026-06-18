/* DDC — AI Assistant (Claude API) */

// ══════════════════════════════════════════════
//  AI ASSISTANT (keyword-based, no API key)
// ══════════════════════════════════════════════
const AI_KB = [
  {keys:['привет','сәлем','hello','hi','добрый'],
   ans:{ru:'Привет! 👋 Я ассистент DDC. Спросите о проектах, услугах, вакансиях или технологиях.',kz:'Сәлем! 👋 Мен DDC көмекшісімін. Жобалар, қызметтер немесе вакансиялар туралы сұраңыз.',en:'Hello! 👋 I\'m the DDC assistant. Ask about projects, services, vacancies or technologies.'}},
  {keys:['кто такие','что такое ddc','о компании','about ddc','what is ddc','история','основан'],
   ans:{ru:'DDC (Digital Development Center) — государственный центр цифровых технологий при Национальном Банке Казахстана. Основан в 2019 году. Основные направления: кибербезопасность, AI, FinTech, облако, Smart City. 🏛️',kz:'DDC (Digital Development Center) — Қазақстан Ұлттық Банкіндегі мемлекеттік цифрлық технологиялар орталығы. 2019 жылы негізделді.',en:'DDC (Digital Development Center) is a state digital technology center under the National Bank of Kazakhstan, founded in 2019. Key areas: cybersecurity, AI, FinTech, cloud, Smart City. 🏛️'}},
  {keys:['проект','жоба','project','digital tenge','open banking','platform'],
   ans:{ru:'🗂️ Ключевые проекты DDC:\n\n• Digital Tenge — 500K+ пользователей, ₸2.3B/мес\n• Cyber Monitoring Center — SOC 24/7\n• Data Platform KZ — 200+ датасетов\n• Open Banking API — 12 банков\n• Digital Identity Platform\n• Smart Government Integration',kz:'🗂️ DDC-нің негізгі жобалары:\n\n• Digital Tenge — 500K+ пайдаланушы\n• Cyber Monitoring Center — SOC 24/7\n• Data Platform KZ — 200+ датасет\n• Open Banking API — 12 банк',en:'🗂️ DDC Key Projects:\n\n• Digital Tenge — 500K+ users, ₸2.3B/month\n• Cyber Monitoring Center — 24/7 SOC\n• Data Platform KZ — 200+ datasets\n• Open Banking API — 12 banks\n• Digital Identity Platform\n• Smart Government Integration'}},
  {keys:['услуга','сервис','service','чем занима','направлени','что делает'],
   ans:{ru:'🛠️ Услуги DDC:\n\n🔒 Кибербезопасность — SOC, SIEM, Blue/Red Team\n🤖 Искусственный интеллект — ML, NLP, CV\n📊 Аналитика данных — BI, Big Data\n☁️ Облачные решения — GovCloud, K8s\n💳 FinTech — Digital Tenge, Open Banking\n🏦 Цифровой банкинг — мобильный банк, eKYC\n🏙️ Smart City & eGov',kz:'🛠️ DDC қызметтері:\n\n🔒 Киберқауіпсіздік — SOC, SIEM, Blue/Red Team\n🤖 Жасанды интеллект — ML, NLP\n📊 Деректер аналитикасы — BI, Big Data\n☁️ Бұлттық шешімдер — GovCloud, K8s\n💳 FinTech — Digital Tenge\n🏙️ Smart City & eGov',en:'🛠️ DDC Services:\n\n🔒 Cybersecurity — SOC, SIEM, Blue/Red Team\n🤖 Artificial Intelligence — ML, NLP, CV\n📊 Data Analytics — BI, Big Data\n☁️ Cloud Solutions — GovCloud, K8s\n💳 FinTech — Digital Tenge, Open Banking\n🏦 Digital Banking — mobile bank, eKYC\n🏙️ Smart City & eGov'}},
  {keys:['кибербезопасность','soc','siem','угроз','атак','безопасн','cyber','wazuh','suricata','blue team','red team'],
   ans:{ru:'🔒 Кибербезопасность DDC:\n\n• SOC работает 24/7\n• Блокируем 2 847+ атак в сутки\n• Время реагирования: 8.4 мин\n• Инструменты: Wazuh, Suricata, Zeek, TheHive, MISP\n• Blue Team — защита и мониторинг\n• Red Team — пентесты и аудит\n• Cyber Range — учебная платформа\n\nUptime SOC: 99.97% 🟢',kz:'🔒 DDC киберқауіпсіздігі:\n\n• SOC 24/7 жұмыс жасайды\n• Тәулігіне 2 847+ шабуыл бұғатталады\n• Жауап уақыты: 8.4 мин\n• Құралдар: Wazuh, Suricata, Zeek, TheHive',en:'🔒 DDC Cybersecurity:\n\n• SOC works 24/7\n• 2,847+ attacks blocked daily\n• Response time: 8.4 min\n• Tools: Wazuh, Suricata, Zeek, TheHive, MISP\n• Blue Team — protection & monitoring\n• Red Team — pentests & audit\n• Cyber Range — training platform\n\nSOC Uptime: 99.97% 🟢'}},
  {keys:['ai','искусственный интеллект','машинное обучение','ml','нейросет','жасанды интеллект'],
   ans:{ru:'🤖 AI Innovation Lab DDC:\n\n• 1.2M+ AI-запросов в сутки\n• 94% точность ML-моделей\n• 18 AI-продуктов в production\n\nНаправления: Machine Learning, NLP & Chatbots, Computer Vision, Predictive Analytics, Document AI, Anomaly Detection\n\nТехнологии: TensorFlow, PyTorch, LangChain, HuggingFace, BERT-kz',kz:'🤖 DDC AI Innovation Lab:\n\n• 1.2M+ AI сұраулары тәулігіне\n• 94% ML модельдерінің дәлдігі\n• 18 AI өнімі production-да',en:'🤖 DDC AI Innovation Lab:\n\n• 1.2M+ AI requests per day\n• 94% ML model accuracy\n• 18 AI products in production\n\nDirections: ML, NLP & Chatbots, Computer Vision, Predictive Analytics, Document AI, Anomaly Detection\n\nTech: TensorFlow, PyTorch, LangChain, HuggingFace, BERT-kz'}},
  {keys:['fintech','цифровой тенге','digital tenge','cbdc','платёж','транзакц','open banking'],
   ans:{ru:'💳 FinTech DDC:\n\n• Digital Tenge (CBDC) — 500K+ пользователей\n• Ежемесячный оборот: ₸2.3 миллиарда\n• Open Banking API — 12 банков\n• PCI DSS сертифицировано\n• Instant Payment < 1 секунды\n• eKYC — биометрическая верификация',kz:'💳 DDC FinTech:\n\n• Digital Tenge (CBDC) — 500K+ пайдаланушы\n• Ай сайынғы айналым: ₸2.3 млрд\n• Open Banking API — 12 банк\n• PCI DSS сертификатталған',en:'💳 DDC FinTech:\n\n• Digital Tenge (CBDC) — 500K+ users\n• Monthly volume: ₸2.3 billion\n• Open Banking API — 12 banks\n• PCI DSS certified\n• Instant Payment < 1 second\n• eKYC — biometric verification'}},
  {keys:['smart city','умный город','iot','датчик','транспорт','egov','государств','регион'],
   ans:{ru:'🏙️ Smart City & eGov DDC:\n\n• 240 умных перекрёстков\n• 12 000+ IoT-датчиков\n• 8 500 камер видеонаблюдения\n• 95 экостанций мониторинга\n\n🏛️ eGov интеграции:\n• Digital ID\n• Smart Bridge — 47 систем\n• Open Data\n• eGov Portal API — 5M+ запросов/сут',kz:'🏙️ DDC Smart City & eGov:\n\n• 240 ақылды қиылысу\n• 12 000+ IoT датчик\n• 8 500 бейнекамера\n• 95 экостанция\n\n🏛️ eGov интеграциялары:\n• Digital ID, Smart Bridge — 47 жүйе',en:'🏙️ DDC Smart City & eGov:\n\n• 240 smart intersections\n• 12,000+ IoT sensors\n• 8,500 surveillance cameras\n• 95 eco monitoring stations\n\n🏛️ eGov Integrations:\n• Digital ID\n• Smart Bridge — 47 systems\n• Open Data\n• eGov Portal API — 5M+ requests/day'}},
  {keys:['вакансии','работа','карьера','устроит','трудоустрой','vacancy','job','career','мансап','жұмыс'],
   ans:{ru:'💼 Открытые вакансии DDC:\n\n🔒 SOC Analyst (L1/L2/L3)\n🔒 SIEM Engineer\n🔒 Penetration Tester\n🔒 DevSecOps Engineer\n🤖 AI/ML Engineer\n📊 Data Engineer\n💻 Backend Developer (Java)\n🖥️ Frontend Developer (React)\n🎓 Cybersecurity Internship\n\nHR: hr@ddc.gov.kz',kz:'💼 DDC ашық вакансиялары:\n\nSOC Analyst, SIEM Engineer, Penetration Tester, DevSecOps Engineer, AI/ML Engineer, Data Engineer, Backend Developer, Frontend Developer\n\nHR: hr@ddc.gov.kz',en:'💼 DDC Open Vacancies:\n\n🔒 SOC Analyst (L1/L2/L3)\n🔒 SIEM Engineer\n🔒 Penetration Tester\n🔒 DevSecOps Engineer\n🤖 AI/ML Engineer\n📊 Data Engineer\n💻 Backend Developer (Java)\n🖥️ Frontend Developer (React)\n🎓 Cybersecurity Internship\n\nHR: hr@ddc.gov.kz'}},
  {keys:['технологии','стек','stack','python','java','react','docker','kubernetes','oracle','postgresql','wazuh','splunk'],
   ans:{ru:'⚙️ Technology Stack DDC:\n\n🖥️ Backend: Python, Java, NestJS, FastAPI, Spring Boot\n🌐 Frontend: React, TypeScript, Next.js\n🗄️ Data: PostgreSQL, Oracle, ClickHouse, Redis, Kafka, Spark\n☁️ Cloud: Docker, Kubernetes, OpenShift, Terraform\n🔒 Security: Wazuh, Splunk, Suricata, Zeek, MISP\n🤖 AI/ML: TensorFlow, PyTorch, LangChain, MLflow',kz:'⚙️ DDC Technology Stack:\n\nBackend: Python, Java, NestJS · Frontend: React, TypeScript · Data: PostgreSQL, Oracle, Kafka · Cloud: Docker, Kubernetes, OpenShift · Security: Wazuh, Splunk, Suricata · AI/ML: TensorFlow, PyTorch, LangChain',en:'⚙️ DDC Technology Stack:\n\n🖥️ Backend: Python, Java, NestJS, FastAPI, Spring Boot\n🌐 Frontend: React, TypeScript, Next.js\n🗄️ Data: PostgreSQL, Oracle, ClickHouse, Redis, Kafka, Spark\n☁️ Cloud: Docker, Kubernetes, OpenShift, Terraform\n🔒 Security: Wazuh, Splunk, Suricata, Zeek, MISP\n🤖 AI/ML: TensorFlow, PyTorch, LangChain, MLflow'}},
  {keys:['контакт','байланыс','contact','адрес','телефон','email','почта','офис','где нах'],
   ans:{ru:'📞 Контакты DDC:\n\n📍 г. Астана, пр. Мәңгілік Ел, 55/1\n📞 +7 (7172) 55-00-00\n📧 info@ddc.gov.kz\n🕐 Пн–Пт, 09:00–18:00\n🛡️ SOC: 24/7\n📋 HR: hr@ddc.gov.kz',kz:'📞 DDC байланыс:\n\n📍 Астана қ., Мәңгілік Ел д-лы, 55/1\n📞 +7 (7172) 55-00-00\n📧 info@ddc.gov.kz\n🕐 Дс–Жм, 09:00–18:00 · SOC 24/7',en:'📞 DDC Contacts:\n\n📍 Astana, Mangilik El Ave., 55/1\n📞 +7 (7172) 55-00-00\n📧 info@ddc.gov.kz\n🕐 Mon–Fri, 09:00–18:00\n🛡️ SOC: 24/7\n📋 HR: hr@ddc.gov.kz'}},
  {keys:['спасибо','рахмет','рақмет','thanks','thank you','пожалуйста'],
   ans:{ru:'Пожалуйста! 😊 Если есть ещё вопросы — спрашивайте!',kz:'Рақмет! 😊 Басқа сұрақтарыңыз болса, қоя беріңіз!',en:'You\'re welcome! 😊 Feel free to ask anything else!'}},
];

const AI_DEFAULT = {ru:'Хороший вопрос! Напишите нам: info@ddc.gov.kz или +7 (7172) 55-00-00. Я могу помочь с вопросами о проектах, услугах, вакансиях или технологиях. 😊',kz:'Жақсы сұрақ! info@ddc.gov.kz немесе +7 (7172) 55-00-00 байланысыңыз. Жобалар, қызметтер немесе вакансиялар туралы сұрай аласыз. 😊',en:'Great question! Reach us at: info@ddc.gov.kz or +7 (7172) 55-00-00. I can help with questions about projects, services, vacancies or technologies. 😊'};

function matchAnswer(text){
  const t=text.toLowerCase();
  for(const item of AI_KB){if(item.keys.some(k=>t.includes(k)))return item.ans[lang]||item.ans.ru;}
  return AI_DEFAULT[lang]||AI_DEFAULT.ru;
}

const quickMap={projects:'проект',services:'услуга',vacancies:'вакансии',contacts:'контакт'};

function toggleAI(){document.getElementById('aiPanel').classList.toggle('open');}
function clearChat(){
  document.getElementById('aiMsgs').innerHTML=`<div class="ai-msg bot">${T[lang].aiGreet}</div>`;
  document.getElementById('aiQuick').style.display='flex';
}

function appendMsg(text,isUser){
  const c=document.getElementById('aiMsgs');
  const d=document.createElement('div');
  d.className='ai-msg '+(isUser?'user':'bot');
  d.style.whiteSpace='pre-wrap';
  d.textContent=text;
  c.appendChild(d);
  c.scrollTop=c.scrollHeight;
}

function appendTyping(){
  const c=document.getElementById('aiMsgs');
  const d=document.createElement('div');
  d.className='ai-typing';
  d.innerHTML='<span></span><span></span><span></span>';
  c.appendChild(d);
  c.scrollTop=c.scrollHeight;
  return d;
}

function sendQuick(key){
  document.getElementById('aiQuick').style.display='none';
  sendText(quickMap[key]||key);
}

function sendCustom(){
  const inp=document.getElementById('aiInput');
  const txt=inp.value.trim(); if(!txt)return;
  inp.value='';
  document.getElementById('aiQuick').style.display='none';
  sendText(txt);
}

function sendText(text){
  appendMsg(text,true);
  document.getElementById('aiSend').disabled=true;
  const typing=appendTyping();
  setTimeout(()=>{
    typing.remove();
    appendMsg(matchAnswer(text),false);
    document.getElementById('aiSend').disabled=false;
    setTimeout(()=>{document.getElementById('aiQuick').style.display='flex';},400);
  }, 600+Math.random()*600);
}



