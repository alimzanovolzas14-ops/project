/* DDC Portal — js/canvas.js */

// ══════════════════════════════════════════════
//  HERO CANVAS
// ══════════════════════════════════════════════
function initCanvas() {
  const c = document.getElementById('heroCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  function resize(){c.width=window.innerWidth;c.height=c.parentElement?c.parentElement.offsetHeight:window.innerHeight;}
  resize();
  const pts = Array.from({length:50},()=>({
    x:Math.random()*c.width, y:Math.random()*c.height,
    vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35
  }));
  let raf;
  function draw(){
    // IMPORTANT: clearRect with alpha=0 keeps background transparent
    ctx.clearRect(0,0,c.width,c.height);
    pts.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>c.width) p.vx*=-1;
      if(p.y<0||p.y>c.height) p.vy*=-1;
      // draw point
      ctx.beginPath();
      ctx.arc(p.x,p.y,1.8,0,Math.PI*2);
      ctx.fillStyle='rgba(0,200,160,0.55)';
      ctx.fill();
      // draw connections
      pts.forEach(q=>{
        const d=Math.hypot(p.x-q.x,p.y-q.y);
        if(d<130){
          ctx.beginPath();
          ctx.moveTo(p.x,p.y);
          ctx.lineTo(q.x,q.y);
          ctx.strokeStyle='rgba(0,169,143,'+(0.12*(1-d/130))+')';
          ctx.lineWidth=0.5;
          ctx.stroke();
        }
      });
    });
    raf=requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize',resize);
}
