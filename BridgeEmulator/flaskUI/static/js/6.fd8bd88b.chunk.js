(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[6],{108:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return f}));var o=c(14),n=c(2),a=c(16),l=c.n(a),r=c(98),s=c(12),i=c(27),u=c(17),j=(c(90),c(91)),b=c.n(j),d=(c(92),c(93)),h=(c(94),c(6)),p=function(e){var t=e.api_key,c=e.id,o=e.light,n=e.modelIds,a=e.setType,j=e.setMessage,p=function(){l.a.delete("/api/".concat(t,"/lights/").concat(c)).then((function(e){console.log(e.data),j("Light successfully deleted"),a("none"),a("success")})).catch((function(e){console.error(e),j("Error occured, check browser console"),a("none"),a("error")}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"iconContainer",children:Object(h.jsx)(s.h,{onClick:function(){l.a.put("/api/".concat(t,"/lights/").concat(c,"/state"),{alert:"select"}).then((function(e){console.log(e.data),j("Light alerted"),a("none"),a("success")})).catch((function(e){console.error(e),j("Error occured, check browser console"),a("none"),a("error")}))}})}),o.name," ",o.state.reachable&&Object(h.jsx)(s.c,{title:"Reachable"})||Object(h.jsx)(u.b,{title:"Unrechable"}),Object(h.jsx)("br",{}),Object(h.jsx)(b.a,{options:n,value:o.modelid,onChange:function(e){return t=e.value,console.log(Object(r.a)({},c,t)),void l.a.post("/light-types",Object(r.a)({},c,t)).then((function(e){console.log(e.data),j("Modelid updated"),a("none"),a("success")})).catch((function(e){console.error(e),j("Error occured, check browser console"),a("none"),a("error")}));var t},placeholder:"Choose light modelid"}),"Protocol: ",o.protocol,Object(h.jsx)("br",{})," IP: ",o.protocol_cfg.ip,Object(h.jsx)("br",{}),Object(h.jsx)(i.a,{title:"Delete",onClick:function(){Object(d.confirmAlert)({title:"Delete light "+o.name,message:"Are you sure to do this?",buttons:[{label:"Yes",onClick:function(){return p()}},{label:"No"}]})}}),"  ",Object(h.jsx)(i.c,{title:"Update"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},O=function(){var e=Object(n.useState)("auto"),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(h.jsxs)("form",{className:"add-form",children:[Object(h.jsx)(b.a,{options:[{value:"auto",label:"Autodetect"},{value:"domoticz",label:"Domoticz"},{value:"flex",label:"Flex"},{value:"jeedom",label:"Jeedom"},{value:"milight",label:"MiLight"},{value:"mibox",label:"Mi Box"},{value:"wiz",label:"Wiz"}],value:c,onChange:function(e){return a(e.value)},placeholder:"Choose light protocol"}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light Ip"}),Object(h.jsx)("input",{type:"text",placeholder:"192.168.x.x"})]}),"auto"!==c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Name"}),Object(h.jsx)("input",{type:"text",placeholder:"Name used on diyhue"})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)(b.a,{options:[{value:"LOM001",label:"On/Off Plug"},{value:"LWB010",label:"Dimmable Light"},{value:"LTW001",label:"Color temperature Light"},{value:"LCT015",label:"Color Light"},{value:"LST002",label:"Color Strip"}],placeholder:"Emulated light type"})})]}),("milight"===c||"mibox"===c)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Device ID"}),Object(h.jsx)("input",{type:"text",placeholder:"0x1234"})]}),Object(h.jsx)(b.a,{options:[{value:"rgbw",label:"RGBW"},{value:"cct",label:"CCT"},{value:"rgb_cct",label:"RGB-CCT"},{value:"rgb",label:"RGB"}],placeholder:"Choose light mode"}),Object(h.jsx)(b.a,{options:["1","2","3","4"],placeholder:"Choose light group"})]}),"mibox"===c&&Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Port"}),Object(h.jsx)("input",{type:"number",placeholder:"Mi Box port"})]}),"domoticz"===c&&Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Device ID"}),Object(h.jsx)("input",{type:"text",placeholder:""})]}),"jeedom"===c&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light Api"}),Object(h.jsx)("input",{type:"text",placeholder:"Light Api"})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Light ID"}),Object(h.jsx)("input",{type:"text",placeholder:"Light ID"})]})]}),Object(h.jsx)("div",{className:"form-control",children:Object(h.jsx)("input",{type:"submit",value:"Add Light",className:"btn btn-block"})})]})},x=c(88);function f(e){var t=e.API_KEY,c=Object(n.useState)({}),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)([]),u=Object(o.a)(i,2),j=u[0],b=u[1],d=Object(n.useState)("none"),f=Object(o.a)(d,2),m=f[0],g=f[1],v=Object(n.useState)("no message"),N=Object(o.a)(v,2),M=N[0],y=N[1],C=Object(n.useState)(!1),L=Object(o.a)(C,2),k=L[0],w=L[1],F=function(){void 0!==t&&l.a.get("/lights").then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.error(e)}))};return Object(n.useEffect)((function(){F(),void 0!==t&&l.a.get("/light-types").then((function(e){console.log(e.data),b(e.data.result)})).catch((function(e){console.error(e)}));var e=setInterval((function(){F()}),2e3);return function(){return clearInterval(e)}}),[t]),Object(h.jsxs)("div",{className:"content",children:["none"!==m&&Object(h.jsx)(x.a,{type:m,message:M,duration:"5000",setType:g}),Object(h.jsxs)("div",{className:"cardGrid",children:[Object(h.jsxs)("div",{className:"linkbtn",onClick:function(){void 0!==t&&l.a.post("/api/".concat(t,"/lights"),"").then((function(e){console.log(e.data),y("Searching for new lights..."),g("none"),g("success")})).catch((function(e){console.error(e),y("Error occured, check browser console"),g("none"),g("error")}))},children:["Scan For Lights",Object(h.jsx)("div",{className:"btn btn-block"})]}),Object(h.jsx)("a",{onClick:function(){return w(!k)},className:"someClassWithCursorPointer",children:"Add light manually"}),k&&Object(h.jsx)(O,{}),Object.entries(r).map((function(e){var c=Object(o.a)(e,2),n=c[0],a=c[1];return Object(h.jsx)(p,{api_key:t,id:n,light:a,modelIds:j,setType:g,setMessage:y},n)}))]})]})}},88:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c(2);var o=c(12),n=c(89),a=c.n(n),l=c(6);function r(e){var t=e.type,c=e.message,n=e.duration,r=e.setType;return Object(l.jsx)(a.a,{duration:n,persistOnHover:!0,children:Object(l.jsx)("div",{className:"notificationContainer",children:Object(l.jsxs)("div",{className:"notification ".concat(t),children:[Object(l.jsx)("p",{children:c}),Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)(o.m,{onClick:function(){return r("none")}})})]})})})}},90:function(e,t,c){"use strict";function o(e,t,c){void 0===c&&(c=254);var o=1-e-t,n=(c/254).toFixed(2),a=n/t*e,l=n/t*o,r=1.656492*a-.354851*n-.255038*l,s=.707196*-a+1.655397*n+.036152*l,i=.051713*a-.121364*n+1.01153*l;return r>i&&r>s&&r>1?(s/=r,i/=r,r=1):s>i&&s>r&&s>1?(r/=s,i/=s,s=1):i>r&&i>s&&i>1&&(r/=i,s/=i,i=1),r=r<=.0031308?12.92*r:1.055*Math.pow(r,1/2.4)-.055,s=s<=.0031308?12.92*s:1.055*Math.pow(s,1/2.4)-.055,i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,r=Math.round(255*r),s=Math.round(255*s),i=Math.round(255*i),isNaN(r)&&(r=0),isNaN(s)&&(s=0),isNaN(i)&&(i=0),"rgba("+Math.floor(r)+","+Math.floor(s)+","+Math.floor(i)+",1)"}function n(e){var t,c,o,n=2e4/e;return n<=66?(t=255,c=99.4708025861*Math.log(n)-161.1195681661,o=n<=19?0:138.5177312231*Math.log(n-10)-305.0447927307):(t=329.698727446*Math.pow(n-60,-.1332047592),c=288.1221695283*Math.pow(n-60,-.0755148492),o=255),t=t>255?255:t,c=c>255?255:c,o=o>255?255:o,"rgba("+Math.floor(t)+","+Math.floor(c)+","+Math.floor(o)+",1)"}function a(e,t,c){var o=.664511*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.154324*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.162028*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92),n=.283881*e+.668433*t+.047685*c,a=88e-6*e+.07231*t+.986039*c,l=(o/(o+n+a)).toFixed(4),r=(n/(o+n+a)).toFixed(4);return isNaN(l)&&(l=0),isNaN(r)&&(r=0),[parseFloat(l),parseFloat(r)]}c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return n})),c.d(t,"c",(function(){return a}))}}]);
//# sourceMappingURL=6.fd8bd88b.chunk.js.map