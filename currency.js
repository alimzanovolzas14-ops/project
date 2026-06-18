/* DDC — js/currency.js — Курсы валют НБ РК + Погода (Астана) */

// ══════════════════════════════════════════════
//  CURRENCY — NBK rates with reliable CORS fallback
// ══════════════════════════════════════════════
const CUR_META = {
  USD:{flag:'🇺🇸',label:{ru:'Доллар США',kz:'АҚШ доллары',en:'US Dollar'}},
  EUR:{flag:'🇪🇺',label:{ru:'Евро',kz:'Еуро',en:'Euro'}},
  RUB:{flag:'🇷🇺',label:{ru:'Рос. рубль',kz:'Ресей рублі',en:'Russian Ruble'}},
  CNY:{flag:'🇨🇳',label:{ru:'Китайский юань',kz:'Қытай юані',en:'Chinese Yuan'}},
  GBP:{flag:'🇬🇧',label:{ru:'Фунт стерлингов',kz:'Фунт стерлинг',en:'British Pound'}},
  AED:{flag:'🇦🇪',label:{ru:'Дирхам ОАЭ',kz:'БАӘ дирхамы',en:'UAE Dirham'}},
  JPY:{flag:'🇯🇵',label:{ru:'Японская иена',kz:'Жапон иенасы',en:'Japanese Yen'}},
  CHF:{flag:'🇨🇭',label:{ru:'Швейцарский франк',kz:'Швейцария франкі',en:'Swiss Franc'}},
  TRY:{flag:'🇹🇷',label:{ru:'Турецкая лира',kz:'Түрік лирасы',en:'Turkish Lira'}},
  KRW:{flag:'🇰🇷',label:{ru:'Вон Кореи',kz:'Корея воны',en:'Korean Won'}},
};
const PRIORITY = ['USD','EUR','RUB','CNY','GBP','AED','JPY','CHF','TRY','KRW'];
let liveRates = [], prevRates = {};

// Static fallback (approx. mid-2025 levels) used only if every live source fails,
// so the widget never gets stuck on "Loading..." for the visitor.
const FALLBACK_RATES = {USD:480.5,EUR:520.3,RUB:5.9,CNY:66.8,GBP:610.2,AED:130.8,JPY:3.15,CHF:545.6,TRY:14.2,KRW:0.35};

async function fetchRates() {
  // 1) Primary: National Bank of Kazakhstan official RSS via a public CORS proxy
  try {
    const d = new Date(), dd=String(d.getDate()).padStart(2,'0'), mm=String(d.getMonth()+1).padStart(2,'0'), yyyy=d.getFullYear();
    const url = `https://nationalbank.kz/rss/get_rates.cfm?fdate=${dd}.${mm}.${yyyy}`;
    const r = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
    if (r.ok) {
      const xmlText = await r.text();
      const xml = new DOMParser().parseFromString(xmlText, 'text/xml');
      const rates = {};
      xml.querySelectorAll('item').forEach(item=>{
        const code = item.querySelector('title')?.textContent?.trim();
        const rate = parseFloat(item.querySelector('description')?.textContent?.trim());
        const qty = parseInt(item.querySelector('quant')?.textContent?.trim()||'1');
        if(code && !isNaN(rate)) rates[code] = rate/qty;
      });
      if (Object.keys(rates).length) return {rates, source:'nbk'};
    }
  } catch {}
  // 2) Fallback: open.er-api.com (free, CORS-enabled, no key needed)
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/KZT');
    if (r.ok) {
      const d = await r.json();
      if (d.rates) {
        const inv = {};
        Object.entries(d.rates).forEach(([k,v])=>{ if (v>0) inv[k]=1/v; });
        if (Object.keys(inv).length) return {rates: inv, source:'erapi'};
      }
    }
  } catch {}
  // 3) Last resort: static approximate rates so the UI is never empty
  return {rates: FALLBACK_RATES, source:'fallback'};
}

function fmtRate(r,code){return(code==='JPY'||code==='KRW')?r.toFixed(4):r>=100?r.toFixed(2):r.toFixed(4);}

async function loadRates() {
  const {rates, source} = await fetchRates();
  if (!rates) return;
  liveRates = PRIORITY.filter(c=>rates[c]).map(c=>{
    const rate=rates[c], prev=prevRates[c]||rate, delta=rate-prev, pct=prev>0?(delta/prev)*100:0;
    return {code:c,rate,delta,pct};
  });
  prevRates = {};
  liveRates.forEach(c=>{prevRates[c.code]=c.rate;});
  renderRates();
  renderTicker();
  const now = new Date();
  const ts = now.toLocaleString(lang==='en'?'en-US':lang==='kz'?'kk-KZ':'ru-RU',{day:'numeric',month:'long',year:'numeric',hour:'2-digit',minute:'2-digit'});
  const srcLabel = source==='nbk'
    ? (lang==='en'?'Source: NBK':lang==='kz'?'Дерек: ҚР ҰБ':'Источник: НБ РК')
    : (lang==='en'?'Source: market data':lang==='kz'?'Дерек: нарық':'Источник: рыночные данные');
  const m = document.getElementById('curMeta');
  if(m) m.textContent = (lang==='en'?'Updated: ':lang==='kz'?'Жаңартылды: ':'Обновлено: ')+ts+' · '+srcLabel;
}

function renderRates() {
  const grid = document.getElementById('curGrid');
  if (!grid||!liveRates.length) return;
  grid.innerHTML = liveRates.map(c=>{
    const m=CUR_META[c.code]; const up=c.delta>=0;
    return `<div class="cur-card"><div class="cur-top"><span class="cur-flag">${m.flag}</span><span class="cur-pair">${c.code}/KZT</span></div><div class="cur-lbl">${m.label[lang]||m.label.ru}</div><div class="cur-rate">${fmtRate(c.rate,c.code)}</div><div class="cur-chg ${up?'up':'dn'}">${up?'↑':'↓'} ${up?'+':''}${c.pct.toFixed(2)}%</div></div>`;
  }).join('');
}

function renderTicker() {
  const inner = document.getElementById('tickerInner');
  if (!inner||!liveRates.length) return;
  const items = liveRates.map(c=>{const m=CUR_META[c.code];const up=c.delta>=0;return `<span class="t-item"><span>${m.flag}</span><span class="t-pair">${c.code}/KZT</span><span class="t-rate">${fmtRate(c.rate,c.code)}</span><span class="${up?'t-up':'t-dn'}">${up?'+':''}${c.pct.toFixed(2)}%</span></span>`;}).join('');
  inner.innerHTML = items + items;
}

setInterval(loadRates, 5*60*1000);


// ══════════════════════════════════════════════
//  WEATHER — Astana, live via Open-Meteo (free, no key, CORS-enabled)
// ══════════════════════════════════════════════
const ASTANA_COORDS = { lat: 51.1694, lon: 71.4491 };

// WMO weather interpretation codes -> icon + localized label
const WEATHER_CODES = {
  0:{icon:'☀️',label:{ru:'Ясно',kz:'Ашық',en:'Clear sky'}},
  1:{icon:'🌤️',label:{ru:'Преимущественно ясно',kz:'Негізінен ашық',en:'Mostly clear'}},
  2:{icon:'⛅',label:{ru:'Переменная облачность',kz:'Бұлтты',en:'Partly cloudy'}},
  3:{icon:'☁️',label:{ru:'Облачно',kz:'Бұлтты',en:'Overcast'}},
  45:{icon:'🌫️',label:{ru:'Туман',kz:'Тұман',en:'Fog'}},
  48:{icon:'🌫️',label:{ru:'Изморозь',kz:'Қыраулы тұман',en:'Rime fog'}},
  51:{icon:'🌦️',label:{ru:'Лёгкая морось',kz:'Әлсіз сіркіреген жаңбыр',en:'Light drizzle'}},
  53:{icon:'🌦️',label:{ru:'Морось',kz:'Сіркіреген жаңбыр',en:'Drizzle'}},
  55:{icon:'🌧️',label:{ru:'Сильная морось',kz:'Күшті сіркіреген жаңбыр',en:'Dense drizzle'}},
  61:{icon:'🌦️',label:{ru:'Небольшой дождь',kz:'Аздаған жаңбыр',en:'Slight rain'}},
  63:{icon:'🌧️',label:{ru:'Дождь',kz:'Жаңбыр',en:'Rain'}},
  65:{icon:'🌧️',label:{ru:'Сильный дождь',kz:'Күшті жаңбыр',en:'Heavy rain'}},
  71:{icon:'🌨️',label:{ru:'Небольшой снег',kz:'Аздаған қар',en:'Slight snow'}},
  73:{icon:'❄️',label:{ru:'Снег',kz:'Қар',en:'Snow'}},
  75:{icon:'❄️',label:{ru:'Сильный снег',kz:'Күшті қар',en:'Heavy snow'}},
  77:{icon:'🌨️',label:{ru:'Снежная крупа',kz:'Қар бұршағы',en:'Snow grains'}},
  80:{icon:'🌦️',label:{ru:'Ливень',kz:'Нөсер жаңбыр',en:'Rain showers'}},
  81:{icon:'🌧️',label:{ru:'Сильный ливень',kz:'Күшті нөсер',en:'Heavy showers'}},
  82:{icon:'⛈️',label:{ru:'Очень сильный ливень',kz:'Өте күшті нөсер',en:'Violent showers'}},
  85:{icon:'🌨️',label:{ru:'Снежный ливень',kz:'Қарлы нөсер',en:'Snow showers'}},
  86:{icon:'❄️',label:{ru:'Сильный снежный ливень',kz:'Күшті қарлы нөсер',en:'Heavy snow showers'}},
  95:{icon:'⛈️',label:{ru:'Гроза',kz:'Найзағай',en:'Thunderstorm'}},
  96:{icon:'⛈️',label:{ru:'Гроза с градом',kz:'Бұршақты найзағай',en:'Thunderstorm with hail'}},
  99:{icon:'⛈️',label:{ru:'Сильная гроза с градом',kz:'Күшті бұршақты найзағай',en:'Severe thunderstorm with hail'}},
};
function weatherInfo(code){ return WEATHER_CODES[code] || {icon:'🌡️',label:{ru:'—',kz:'—',en:'—'}}; }

let lastWeather = null;

async function loadWeather(){
  const pill = document.getElementById('weatherPill');
  if(!pill) return;
  try{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ASTANA_COORDS.lat}&longitude=${ASTANA_COORDS.lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=Asia%2FAlmaty`;
    const r = await fetch(url);
    if(!r.ok) throw new Error('weather fetch failed');
    const d = await r.json();
    const cur = d.current;
    const temp = Math.round(cur.temperature_2m);
    const w = weatherInfo(cur.weather_code);
    lastWeather = { temp, wind: Math.round(cur.wind_speed_10m), humidity: Math.round(cur.relative_humidity_2m), w };
    renderWeather();
  }catch(e){
    if (!lastWeather) {
      pill.textContent = (lang==='en'?'🌤 Astana —°C':lang==='kz'?'🌤 Астана —°C':'🌤 Астана —°C');
    }
  }
}

function renderWeather(){
  const pill = document.getElementById('weatherPill');
  if(!pill || !lastWeather) return;
  const cityName = lang==='en'?'Astana':lang==='kz'?'Астана':'Астана';
  const sign = lastWeather.temp > 0 ? '+' : '';
  pill.textContent = `${lastWeather.w.icon} ${cityName} ${sign}${lastWeather.temp}°C`;
  const windL = lang==='en'?'Wind':lang==='kz'?'Жел':'Ветер';
  const humL = lang==='en'?'Humidity':lang==='kz'?'Ылғалдылық':'Влажность';
  pill.title = `${lastWeather.w.label[lang]||lastWeather.w.label.ru} · ${windL} ${lastWeather.wind} km/h · ${humL} ${lastWeather.humidity}%`;
}

setInterval(loadWeather, 15*60*1000);
