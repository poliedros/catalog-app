(this["webpackJsonpcatalog-app"]=this["webpackJsonpcatalog-app"]||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},54:function(e,n,t){},55:function(e,n,t){},56:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var c=t(8),s=t(25),a=t.n(s),i=(t(50),t(51),t(4)),r=function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{id:"main",children:[Object(i.jsx)("h3",{children:"O seu guia de compras"}),Object(i.jsxs)("h1",{class:"unselectable",children:[Object(i.jsx)("span",{className:"h1-100",children:"G"}),Object(i.jsx)("span",{className:"h1-200",children:"A"}),Object(i.jsx)("span",{className:"h1-300",children:"L"}),Object(i.jsx)("span",{className:"h1-400",children:"E"}),Object(i.jsx)("span",{className:"h1-300",children:"R"}),Object(i.jsx)("span",{className:"h1-200",children:"I"}),Object(i.jsx)("span",{className:"h1-100",children:"A"})]}),Object(i.jsxs)("h5",{children:["2\xaa Edi\xe7\xe3o ",Object(i.jsx)("b",{children:"\xb7 Julho"})," de 2021 ",Object(i.jsx)("virtual",{children:"vers\xe3o virtual"}),"  ",Object(i.jsx)("br",{})]}),Object(i.jsxs)("h5",{children:[Object(i.jsx)("name",{children:"Rosa Maria \xb7"}),Object(i.jsx)("email",{children:" informativoopcao@gmail.com"})," ",Object(i.jsx)("b",{children:"\xb7 98898-6305"})," ",Object(i.jsx)("virtual",{children:"oi"})," ",Object(i.jsx)("b",{children:"\xb7 99920-3720"})," ",Object(i.jsx)("virtual",{children:"vivo"})]})]}),Object(i.jsxs)("div",{className:"sub",children:[Object(i.jsx)("h5",{children:Object(i.jsx)("sub",{children:Object(i.jsx)("b",{children:"Op\xe7\xe3o"})})}),Object(i.jsxs)("h3",{children:["Julho de 20",Object(i.jsx)("b",{children:"21"})]}),Object(i.jsx)("hr",{size:"2",width:"5%",color:"greenyellow"}),Object(i.jsxs)("h6",{children:["Informativo - Ano XIX - ",Object(i.jsx)("b",{children:"Julho"})," de 2021 - N\xbaCCXXVIII ",Object(i.jsx)("br",{}),"S\xe3o Jo\xe3o Nepomuceno e Regi\xe3o - Minas Gerais ",Object(i.jsx)("br",{})]})]})]})},o=t(10),l=t.n(o),j=t(13),d=t(17);t(54),t(55);function u(e){var n=e.closeModal,t=e.url,c=e.description;return Object(i.jsx)("div",{className:"modal-background",children:Object(i.jsx)("div",{className:"modal-main",children:Object(i.jsxs)("div",{className:"modal-container",children:[Object(i.jsx)("h1",{className:"h1-modal",children:c}),Object(i.jsx)("img",{src:t,width:"105%"}),Object(i.jsxs)("p",{children:["Nome completo do estabelicimento ",c]}),Object(i.jsx)("p",{children:"subtitulo"}),Object(i.jsx)("p",{children:"tipo"}),Object(i.jsx)("p",{children:"endere\xe7o"}),Object(i.jsx)("p",{children:"telefone"}),Object(i.jsx)("p",{children:"redes sociais"}),Object(i.jsx)("p",{children:"Nome completo do estabelicimento"}),Object(i.jsx)("p",{children:"subtitulo"}),Object(i.jsx)("p",{children:"tipo"}),Object(i.jsx)("p",{children:"endere\xe7o"}),Object(i.jsx)("p",{children:"telefone"}),Object(i.jsx)("p",{children:"redes sociais"}),Object(i.jsx)("button",{onClick:function(){return n(!1)},children:"Fechar"}),Object(i.jsx)("div",{className:"modal-frame"})]})})})}function b(e){var n=e.url,t=e.description,s=Object(c.useState)(!1),a=Object(d.a)(s,2),r=a[0],o=a[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{class:"unique",src:n,alt:t,title:t,onClick:function(){o(!0)}}),r&&Object(i.jsx)(u,{closeModal:o,url:n,description:t})]})}t(56);var h=t(27),p=t.n(h);p.a.defaults.baseURL="https://catalog-api-b073ede8-e3f9-4d8a.herokuapp.com";var O=p.a;function x(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],s=n[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("ads");case 2:n=e.sent,t=n.data,s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));return Object(i.jsxs)("ul",{id:"photos",children:[t.filter((function(e){return e.description.includes("Hamburguer")})).map((function(e){return Object(i.jsx)(b,{url:e.url,description:e.description})})),t.map((function(e){return Object(i.jsx)(b,{url:e.url,description:e.description})}))]})}t(75);var m=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("h4",{children:["Desenvolvido por ",Object(i.jsx)("name2",{children:"Anderson M. Ribeiro"})," ",Object(i.jsx)("br",{}),"emponderado por React JS ",Object(i.jsx)("b",{children:"\xb7 2021"})," ",Object(i.jsx)("br",{}),"S\xe3o Jo\xe3o Nepomuceno ",Object(i.jsx)("b",{children:"\xb7 Minas Gerais \xb7"})," Brasil"]})})};m.defaultProps={};var f=m,v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),s(e),a(e),i(e)}))},w=t(18);t(76);function g(){return Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsxs)("div",{className:"links",children:[Object(i.jsx)(w.b,{to:"/",children:"In\xedcio"}),Object(i.jsx)(w.b,{to:"/signup",children:"Cadastrar"}),Object(i.jsx)(w.b,{to:"/login",children:"Entrar"})]})})}g.defaultProps={};var N=t(20);t(82);function y(){var e="user",n=Object(c.useState)({name:"",email:"",password:""}),t=Object(d.a)(n,2),s=t[0],a=t[1];function r(e){return o.apply(this,arguments)}function o(){return(o=Object(j.a)(l.a.mark((function n(t){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,O.post(e,{name:s.name,email:s.email,password:s.password});case 3:c=n.sent,console.log(c);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(e){var n=Object(N.a)({},s);n[e.target.id]=e.target.value,a(n),console.log(n)}return Object(i.jsxs)("form",{className:"log-form",onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[Object(i.jsx)("h3",{children:Object(i.jsx)("name",{children:"Cadastrar"})}),Object(i.jsx)("hr",{className:"hr-log",size:"2",width:"15%",color:"greenyellow"}),Object(i.jsx)("label",{children:"Nome"}),Object(i.jsx)("input",{className:"name",onChange:function(e){return u(e)},id:"name",value:s.name,type:"text",name:"name"}),Object(i.jsx)("label",{children:"E-mail"}),Object(i.jsx)("input",{className:"email",onChange:function(e){return u(e)},id:"email",value:s.email,type:"email",name:"email"}),Object(i.jsx)("label",{children:"Senha"}),Object(i.jsx)("input",{className:"password",onChange:function(e){return u(e)},id:"password",value:s.password,type:"password",name:"password",autoComplete:"on"}),Object(i.jsx)("button",{children:"Iniciar Sess\xe3o"})]})}t(83);function C(){var e="auth",n=Object(c.useState)({email:"",password:""}),t=Object(d.a)(n,2),s=t[0],a=t[1];function r(e){return o.apply(this,arguments)}function o(){return(o=Object(j.a)(l.a.mark((function n(t){var c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.preventDefault(),n.next=3,O.get(e,{email:s.email,password:s.password});case 3:c=n.sent,console.log(c);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(e){var n=Object(N.a)({},s);n[e.target.id]=e.target.value,a(n),console.log(n)}return Object(i.jsxs)("form",{className:"log-form",onSubmit:function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[Object(i.jsx)("h3",{children:Object(i.jsx)("name",{children:"Iniciar Sess\xe3o"})}),Object(i.jsx)("hr",{className:"hr-log",size:"2",width:"15%",color:"greenyellow"}),Object(i.jsx)("label",{children:"E-mail"}),Object(i.jsx)("input",{className:"email",onChange:function(e){return u(e)},id:"email",value:s.email,type:"email",name:"email"}),Object(i.jsx)("label",{children:"Senha"}),Object(i.jsx)("input",{className:"password",onChange:function(e){return u(e)},id:"password",value:s.password,type:"password",name:"password",autoComplete:"on"}),Object(i.jsx)("button",{children:"Iniciar Sess\xe3o"}),Object(i.jsx)(w.b,{to:"/signup",children:"N\xe3o sou cadastrado"})]})}var S=t(5),k=t(43);function I(){var e,n=new S.Z,t=new S.R(75,window.innerWidth/window.innerHeight,.1,1e3),c=new S.mb({alpha:!0,antialiase:!0});c.setClearColor(0,0),c.setSize(300,300),document.body.appendChild(c.domElement),t.position.z=3,t.position.y=1.5,t.position.z=5,(e=new S.j(15724543,3)).position.set(1,1,1).normalize(),n.add(e),(e=new S.j(16773103,3)).position.set(-1,-1,-1).normalize(),n.add(e),window.addEventListener("resize",(function(){var e=window.innerWidth,n=window.innerHeight;c.setSize(e,n),t.aspect=e/n,t.updateProjectionMatrix()}));var s,a,r=new k.a;r.load("https://cors-anywhere.herokuapp.com/https://poliedros.github.io/catalog-app/Samba_Dancing.fbx",(function(e){e.scene.traverse((function(e){e instanceof S.G&&(e.castShadow=!0,e.material.side=S.k)})),(a=e.scene).scale.set(3.5,3.5,3.5),n.add(a),console.log(e.animations),(s=new S.b(a)).clipAction(e.animations[1]).play(),document.body.addEventListener("click",(function(){s.clipAction(e.animations[1]).stop(),s.clipAction(e.animations[0]).play(),setTimeout((function(){s.clipAction(e.animations[0]).stop(),s.clipAction(e.animations[1]).play()}),1500)}))})),console.log("Loader"),console.log(r);var o=new S.h;return function e(){requestAnimationFrame(e);var i=o.getDelta();null!=s&&s.update(i),a&&(a.rotation.y+=.025),c.render(n,t)}(),Object(i.jsx)("div",{id:"canvas"})}I.defaultProps={};var z=t(11);a.a.render(Object(i.jsx)(w.a,{children:Object(i.jsx)("div",{children:Object(i.jsxs)(z.c,{children:[Object(i.jsxs)(z.a,{exact:!0,path:"/",children:[Object(i.jsx)(g,{}),Object(i.jsx)(r,{}),Object(i.jsx)(x,{}),Object(i.jsx)(f,{})]}),Object(i.jsxs)(z.a,{exact:!0,path:"/login",children:[Object(i.jsx)(g,{}),Object(i.jsx)(C,{})]}),Object(i.jsxs)(z.a,{exact:!0,path:"/signup",children:[Object(i.jsx)(g,{}),Object(i.jsx)(y,{}),Object(i.jsx)(I,{}),Object(i.jsx)("div",{id:"canvas"})]})]})})}),document.getElementById("root")),v()}},[[84,1,2]]]);
//# sourceMappingURL=main.35dde397.chunk.js.map