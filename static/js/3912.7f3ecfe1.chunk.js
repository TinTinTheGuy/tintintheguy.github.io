"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3912],{3912:(s,i,t)=>{t.d(i,{CircleWarp:()=>n});var e=t(4864);class n extends e.um{constructor(s,i,t,e){super(s,i,t),this.canvasSize=e,this.canvasSize={...e}}contains(s){const{width:i,height:t}=this.canvasSize,{x:e,y:n}=s;return super.contains(s)||super.contains({x:e-i,y:n})||super.contains({x:e-i,y:n-t})||super.contains({x:e,y:n-t})}intersects(s){if(super.intersects(s))return!0;const i=s,t=s,n={x:s.position.x-this.canvasSize.width,y:s.position.y-this.canvasSize.height};if(void 0!==t.radius){const s=new e.um(n.x,n.y,2*t.radius);return super.intersects(s)}if(void 0!==i.size){const s=new e.Yt(n.x,n.y,2*i.size.width,2*i.size.height);return super.intersects(s)}return!1}}}}]);
//# sourceMappingURL=3912.7f3ecfe1.chunk.js.map