(this.webpackJsonpemployee_dir=this.webpackJsonpemployee_dir||[]).push([[0],{36:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},60:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),r=c.n(n),j=c(26),l=c.n(j),i=(c(36),c(10)),o=c(27),a=c.n(o),b=c(28),h=c(4),d=(c(55),c(56),c(30)),O=c(69),x=function(){return Object(s.jsxs)(O.a,{activeKey:"/home",children:[Object(s.jsx)(O.a.Item,{children:Object(s.jsx)(O.a.Link,{href:"/HW-14-Axios-Employee",children:"Directory"})}),Object(s.jsx)(O.a.Item,{children:Object(s.jsx)(O.a.Link,{href:"HW-14-Axios-Employee/search",children:"Search"})})]})},m=function(e){var t=e.employees,c=(e.setEmployees,Object(n.useState)([])),r=Object(i.a)(c,2),j=r[0],l=r[1],o=Object(n.useState)("ASC"),a=Object(i.a)(o,2),b=a[0],h=a[1];Object(n.useEffect)((function(){O()}),[t]);var O=function(){switch(b){case"ASC":l(p()),h("DESC");break;case"DESC":l(m()),h("ASC");break;default:l(m())}},m=function(){return t.slice().sort((function(e,t){return e.name.last.toUpperCase()<t.name.last.toUpperCase()?-1:1}))},p=function(){return t.slice().sort((function(e,t){return e.name.last.toUpperCase()>t.name.last.toUpperCase()?-1:1}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"container mt-3",id:"directory",children:[Object(s.jsx)("h1",{children:"I am directory!"}),Object(s.jsx)("h1",{children:"Employee Directory"}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",children:"Title"}),Object(s.jsx)("th",{scope:"col",children:"First"}),Object(s.jsxs)("th",{scope:"col",children:["Last",Object(s.jsx)(d.a,{onClick:O,className:"directory__icon"})]}),Object(s.jsx)("th",{scope:"col",children:"Cell"}),Object(s.jsx)("th",{scope:"col",children:"Email"})]})}),Object(s.jsx)("tbody",{children:j.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:t}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.thumbnail,alt:"employee"})}),Object(s.jsx)("td",{children:e.name.title}),Object(s.jsx)("td",{children:e.name.first}),Object(s.jsx)("td",{children:e.name.last}),Object(s.jsx)("td",{children:e.cell}),Object(s.jsx)("td",{children:e.email})]},t)}))})]})]})]})},p=(c(60),function(e){var t=e.employees,c=Object(n.useState)([]),r=Object(i.a)(c,2),j=r[0],l=r[1],o=Object(n.useState)(""),a=Object(i.a)(o,2),b=a[0],h=a[1],d=t.filter((function(e){var t=-1!==e.name.first.toLowerCase().indexOf(b.toLowerCase()),c=-1!==e.name.last.toLowerCase().indexOf(b.toLowerCase());return t||c}));return console.log(b),Object(n.useEffect)((function(){l(d),console.log(t)}),[t,b]),Object(s.jsxs)("div",{children:[Object(s.jsx)(x,{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"container mt-3",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h1",{children:"Search Employee Directory"}),Object(s.jsx)("input",{onChange:function(e){h(e.target.value)},id:"search",className:"form-control",name:"search",type:"search",placeholder:"search for name"}),Object(s.jsx)("button",{className:"btn btn-primary",children:"Search"})]}),Object(s.jsx)("div",{className:"row",id:"tableRow",children:Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col"}),Object(s.jsx)("th",{scope:"col",children:"Title"}),Object(s.jsx)("th",{scope:"col",children:"First"}),Object(s.jsx)("th",{scope:"col",children:"Last"}),Object(s.jsx)("th",{scope:"col",children:"Cell"}),Object(s.jsx)("th",{scope:"col",children:"Email"})]})}),Object(s.jsx)("tbody",{children:j.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:t}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.picture.thumbnail,alt:"employee"})}),Object(s.jsx)("td",{children:e.name.title}),Object(s.jsx)("td",{children:e.name.first}),Object(s.jsx)("td",{children:e.name.last}),Object(s.jsx)("td",{children:e.cell}),Object(s.jsx)("td",{children:e.email})]},t)}))})]})})]})]})});var u=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){a.a.get("https://randomuser.me/api/?results=100").then((function(e){console.log(e),console.log(e.data.results),r(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(s.jsx)(b.a,{className:"App",children:Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{exact:!0,path:"/HW-14-Axios-Employee",children:Object(s.jsx)(m,{employees:c,setEmployees:r})}),Object(s.jsx)(h.a,{exact:!0,path:"/HW-14-Axios-Employee",children:Object(s.jsx)(m,{employees:c,setEmployees:r})}),Object(s.jsx)(h.a,{exact:!0,path:"/search",children:Object(s.jsx)(p,{employees:c})})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),s(e),n(e),r(e),j(e)}))};c(66);l.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),f()}},[[67,1,2]]]);
//# sourceMappingURL=main.598086d5.chunk.js.map