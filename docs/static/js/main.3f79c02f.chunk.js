(this["webpackJsonpusando-react-router-dom"]=this["webpackJsonpusando-react-router-dom"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(16),s=a.n(n),i=a(8),r=a(9),l=a(2),u=function(e){return fetch("https://rickandmortyapi.com/api/character/?page=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,photo:e.image,name:e.name,species:e.species,gender:e.gender,origin:e.origin.name,status:e.status,episode:e.episode.length}}))}))},j=(a(23),a(7),a(24),a.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),o=(a(25),a(26),a(0)),d=function(e){return Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Introduce tu b\xfasqueda",value:e.value,onChange:e.handleInput})},h=function(e){return Object(o.jsx)("option",{value:e.option,children:e.option})},b=(a(28),function(e){var t=e.uniqueList.map((function(e,t){return Object(o.jsx)(h,{option:e},t)}));return Object(o.jsxs)("label",{htmlFor:e.select,className:"label",children:[e.name,":",Object(o.jsxs)("select",{className:"select",name:e.select,value:e.select,onChange:e.handleSelect,children:[Object(o.jsx)("option",{value:"all",children:"All"}),t]})]})}),O=(a(29),function(e){return Object(o.jsx)("button",{className:"button",onClick:e.handleclick,children:e.text})}),f=function(e){var t=e.data.map((function(e){return e.gender})),a=t.filter((function(e,a){return t.indexOf(e)===a})),c=e.data.map((function(e){return e.species})),n=c.filter((function(e,t){return c.indexOf(e)===t})),s=e.data.map((function(e){return e.origin})),i=s.filter((function(e,t){return s.indexOf(e)===t})),r=e.data.map((function(e){return e.status})),l=r.filter((function(e,t){return r.indexOf(e)===t}));return Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)(d,{value:e.inputName,handleInput:function(t){t.preventDefault(),e.setInputName(t.currentTarget.value)}}),Object(o.jsxs)("div",{className:"line__buttons",children:[Object(o.jsx)(O,{handleclick:function(){e.op>0&&(e.setOp(e.op-1),console.log(e.op))},text:Object(o.jsx)("i",{class:"fas fa-reply"})}),Object(o.jsx)(O,{handleclick:function(t){t.preventDefault(),e.setInputName(""),e.setSelectGender("all"),e.setSelectSpecies("all"),e.setSelectOrigin("all"),e.setSelectStatus("all")},text:"Reset"}),Object(o.jsx)(O,{handleclick:function(){e.op<=34&&(e.setOp(e.op+1),console.log(e.op))},text:Object(o.jsx)("i",{class:"fas fa-share"})})]}),Object(o.jsx)(b,{name:"G\xe9nero",select:e.selectGender,handleSelect:function(t){e.setSelectGender(t.currentTarget.value)},uniqueList:a}),Object(o.jsx)(b,{name:"Especie",select:e.selectSpecies,handleSelect:function(t){e.setSelectSpecies(t.currentTarget.value)},uniqueList:n}),Object(o.jsx)(b,{name:"Origen",select:e.selectOrigin,handleSelect:function(t){e.setSelectOrigin(t.currentTarget.value)},uniqueList:i}),Object(o.jsx)(b,{name:"Estado",select:e.selectStatus,handleSelect:function(t){e.setSelectStatus(t.currentTarget.value)},uniqueList:l})]})},x=(a(30),a(31),function(){return Object(o.jsxs)("section",{className:"alternative",children:[Object(o.jsx)("h2",{className:"alternative__insult",children:"\xa1\xa1Eh!!"}),Object(o.jsx)("p",{className:"alternative__text",children:"\xa1\xa1Aqu\xed no tenemos de eso!!"})]})}),m=function(e){var t="";return"Dead"===e.characterData.status&&(t=Object(o.jsx)("i",{className:"status fas fa-dizzy"})),void 0===e.characterData?Object(o.jsx)(x,{}):Object(o.jsx)(i.b,{to:"./character/".concat(e.characterData.id),children:Object(o.jsxs)("li",{className:"list__element",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"list__element--img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"list__element--text",children:[Object(o.jsx)("h2",{className:"name",children:e.characterData.name}),Object(o.jsxs)("p",{className:"line",children:[e.characterData.species,Object(o.jsx)("span",{children:t})]})]})})]},e.characterData.id)})},p=(a(37),function(e){var t=e.list.map((function(e){return Object(o.jsx)(m,{characterData:e},e.id)}));return 0===e.list.length?Object(o.jsx)(x,{}):Object(o.jsx)("ul",{className:"list",children:t})}),N=(a(38),function(e){var t="";return t="Dead"===e.characterData.status?Object(o.jsx)("i",{className:"status fas fa-dizzy"}):"Alive"===e.characterData.status?Object(o.jsx)("i",{class:"fas fa-heartbeat"}):Object(o.jsx)("i",{class:"far fa-question-circle"}),void 0===e.characterData?Object(o.jsxs)("section",{className:"alternative",children:[Object(o.jsx)("h2",{className:"alternative__insult",children:"\xa1\xa1Eh!!"}),Object(o.jsx)("p",{className:"alternative__text",children:"\xa1\xa1Metete con un personaje de esta serie!!"}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("i",{class:"return fas fa-backspace"})})]}):Object(o.jsxs)("section",{className:"detail",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"detail__img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsxs)("div",{className:"text",children:[Object(o.jsx)("h1",{className:"detail__name",children:e.characterData.name}),Object(o.jsxs)("ul",{className:"detail__text",children:[Object(o.jsxs)("li",{className:"detail__text--line",children:["Especie : ",e.characterData.species]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["G\xe9nero: ",e.characterData.gender]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Origen: ",e.characterData.origin]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["N\xba Episodios: ",e.characterData.episode]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Salud: ",t]})]}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("i",{className:"back fas fa-level-up-alt"})})]})]},e.characterData.id)});var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),d=i[0],h=i[1],b=Object(c.useState)("all"),O=Object(r.a)(b,2),m=O[0],g=O[1],_=Object(c.useState)("all"),v=Object(r.a)(_,2),S=v[0],D=v[1],k=Object(c.useState)("all"),y=Object(r.a)(k,2),E=y[0],I=y[1],L=Object(c.useState)("all"),q=Object(r.a)(L,2),G=q[0],z=q[1],T=Object(c.useState)(1),A=Object(r.a)(T,2),C=A[0],w=A[1];Object(c.useEffect)((function(){u(C).then((function(e){n(e)}))}),[C]);var M=Object(l.f)("/character/:id"),R=null!==M?M.params.id:"",B=a.find((function(e){return e.id===parseInt(R)})),J=a.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"all"===m||m===e.gender})).filter((function(e){return"all"===S||S===e.species})).filter((function(e){return"all"===E||E===e.origin})).filter((function(e){return"all"===G||G===e.status}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{className:"header__img",src:j,alt:"Rick and Morty"})}),Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[Object(o.jsx)(f,{data:a,op:C,setOp:w,inputName:d,setInputName:h,selectGender:m,setSelectGender:g,selectSpecies:S,setSelectSpecies:D,selectOrigin:E,setSelectOrigin:I,selectStatus:G,setSelectStatus:z}),Object(o.jsx)(p,{list:J})]}),Object(o.jsx)(l.a,{path:"/character/:id",children:Object(o.jsx)(N,{characterData:B})}),Object(o.jsx)(l.a,{children:Object(o.jsx)(x,{})})]})}),Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("h6",{children:"\xa92021"}),Object(o.jsx)("h6",{children:"By IreGonzalez To Adalab"})]})]})};s.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.3f79c02f.chunk.js.map