(this.webpackJsonpml5=this.webpackJsonpml5||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c,i=n(1),s=n.n(i),r=n(14),o=n.n(r),a=(n(21),n(4)),u=n.n(a),l=n(15),d=n(2),j=n(16),b=n.n(j),f=n(0),h="https://teachablemachine.withgoogle.com/models/ntvbyZsmT/";function O(){var e=Object(i.useRef)(),t=Object(i.useState)(h),n=Object(d.a)(t,2),s=n[0],r=n[1],o=Object(i.useState)([]),a=Object(d.a)(o,2),j=a[0],O=(a[1],Object(i.useState)(!1)),g=Object(d.a)(O,2),m=(g[0],g[1],Object(i.useState)(0)),v=Object(d.a)(m,2),x=v[0],p=v[1],w=Object(i.useState)(!0),y=Object(d.a)(w,2),C=y[0],F=y[1];Object(i.useEffect)((function(){S(),""==s?r(h):c=b.a.imageClassifier(s,(function(){console.log("Image Model is Loaded"),console.log(s)}))}),[s]),Object(i.useEffect)((function(){console.log(j)}),[j,x]);var S=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:C?"environment":"user"}}).then((function(t){return e.current.srcObject=t})).catch(console.log);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(f.jsx)("div",{className:"flex",children:Object(f.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){return p(0)},children:"Image Classify"})}),Object(f.jsx)("video",{ref:e,width:window.innerWidth,height:.75*window.innerHeight,autoPlay:!0,onClick:function(){e.current.srcObject.getTracks().forEach((function(e){e.stop()})),F((function(e){return!e})),S()}}),c&&j&&void 0!==j?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Result"}),j.map((function(e,t){return Object(f.jsxs)("p",{children:[e.label,Object(f.jsx)("div",{className:"progress",children:Object(f.jsxs)("div",{className:"progress-bar",role:"progressbar",style:{width:110*e.confidence},"aria-valuenow":(100*e.confidence).toFixed(2),"aria-valuemin":"0","aria-valuemax":"100",children:[(100*e.confidence).toFixed(2),"%"]})})]},t)}))]}):Object(f.jsx)(f.Fragment,{children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14 ..."})]})}h+="model.json";var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};o.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),g()}},[[42,1,2]]]);
//# sourceMappingURL=main.a7395da3.chunk.js.map