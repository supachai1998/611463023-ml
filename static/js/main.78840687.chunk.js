(this.webpackJsonpml5=this.webpackJsonpml5||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c,i=n(1),o=n.n(i),r=n(14),s=n.n(r),a=(n(21),n(4)),u=n.n(a),l=n(15),d=n(2),f=n(16),j=n.n(f),b=n(0),h="https://teachablemachine.withgoogle.com/models/ntvbyZsmT/";function O(){var e=Object(i.useRef)(),t=Object(i.useState)(h),n=Object(d.a)(t,2),o=n[0],r=n[1],s=Object(i.useState)([]),a=Object(d.a)(s,2),f=a[0],O=a[1],m=Object(i.useState)(!1),g=Object(d.a)(m,2),v=(g[0],g[1],Object(i.useState)(0)),x=Object(d.a)(v,2),p=x[0],w=x[1],y=Object(i.useState)(!0),C=Object(d.a)(y,2),F=C[0],S=C[1];Object(i.useEffect)((function(){k(),""==o?r(h):c=j.a.imageClassifier(o,(function(){console.log("Image Model is Loaded"),console.log(o)}))}),[o]),Object(i.useEffect)((function(){c&&(0===p?setTimeout((function(){c.classify(e.current,(function(e,t){e?console.error(e):O(t)}))}),300):1===p&&setTimeout((function(){undefined.detect(e.current,(function(e,t){e?console.error(e):console.log(t)}))}),300))}),[f,p]);var k=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:{facingMode:F?"environment":"user"}}).then((function(t){return e.current.srcObject=t})).catch(console.log);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(b.jsx)("div",{className:"flex",children:Object(b.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){return w(0)},children:"Image Classify"})}),Object(b.jsx)("video",{ref:e,width:window.innerWidth,height:.75*window.innerHeight,autoPlay:!0,onClick:function(){e.current.srcObject.getTracks().forEach((function(e){e.stop()})),S((function(e){return!e})),k()}}),c&&f&&void 0!==f?Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Result"}),f.map((function(e,t){return Object(b.jsxs)("p",{children:[e.label,Object(b.jsx)("div",{className:"progress",children:Object(b.jsxs)("div",{className:"progress-bar",role:"progressbar",style:{width:110*e.confidence},"aria-valuenow":(100*e.confidence).toFixed(2),"aria-valuemin":"0","aria-valuemax":"100",children:[(100*e.confidence).toFixed(2),"%"]})})]},t)}))]}):Object(b.jsx)(b.Fragment,{children:"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14 ..."})]})}h+="model.json";var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),m()}},[[42,1,2]]]);
//# sourceMappingURL=main.78840687.chunk.js.map