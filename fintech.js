/* DDC Portal — js/fintech.js */

// ══════════════════════════════════════════════
//  DIGITAL TENGE LIVE DASHBOARD
// ══════════════════════════════════════════════
let tengeChartInstance=null;
function initTengeChart(){
  const canvas=document.getElementById('tengeChart');if(!canvas)return;
  const hours=Array.from({length:24},(_,i)=>`${i}:00`);
  const data=Array.from({length:24},()=>Math.floor(Math.random()*1200+400));
  if(tengeChartInstance)tengeChartInstance.destroy();
  tengeChartInstance=new Chart(canvas.getContext('2d'),{
    type:'line',
    data:{labels:hours,datasets:[{data,borderColor:'#00A98F',backgroundColor:'rgba(0,169,143,0.08)',borderWidth:2,fill:true,tension:.4,pointRadius:2,pointHoverRadius:4}]},
    options:{plugins:{legend:{display:false}},scales:{x:{ticks:{color:'rgba(255,255,255,0.3)',font:{size:9},maxTicksLimit:8}},y:{ticks:{color:'rgba(255,255,255,0.3)',font:{size:9}}}},animation:{duration:600}}
  });
}
function animateTenge(){
  const el=document.getElementById('tengeTps');
  if(el){const v=847+Math.floor(Math.random()*120-60);el.textContent=v.toLocaleString();}
  const u=document.getElementById('tengeUsers');
  if(u){const v=parseInt(u.textContent.replace(/,/g,''))+Math.floor(Math.random()*3);u.textContent=v.toLocaleString();}
  const ms=document.getElementById('tengeMs');
  if(ms){const v=(0.7+Math.random()*0.3).toFixed(1);ms.textContent=v+'s';}
}
setInterval(animateTenge,2000);


