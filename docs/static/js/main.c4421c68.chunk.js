(this["webpackJsonpusando-react-router-dom"]=this["webpackJsonpusando-react-router-dom"]||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(16),s=a.n(n),i=a(7),r=a(10),l=a(2),u=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,photo:e.image,name:e.name,species:e.species,gender:e.gender,origin:e.origin.name,status:e.status,episode:e.episode.length}}))}))},j=(a(23),a(8),a(24),a.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),o=(a(25),a(26),a(0)),d=function(e){return Object(o.jsx)("input",{className:"input",type:"text",placeholder:"Introduce tu b\xfasqueda",value:e.value,onChange:e.handleInput})},h=function(e){return Object(o.jsx)("option",{value:e.option,children:e.option})},b=(a(28),function(e){var t=e.uniqueList.map((function(e,t){return Object(o.jsx)(h,{option:e},t)}));return Object(o.jsxs)("label",{htmlFor:e.select,className:"label",children:["Filtra por ",e.name,":",Object(o.jsxs)("select",{className:"select",name:e.select,value:e.select,onChange:e.handleSelect,children:[Object(o.jsx)("option",{value:"all",children:"All"}),t]})]})}),O=function(e){return Object(o.jsxs)("form",{className:"form",children:[Object(o.jsx)(d,{value:e.inputName,handleInput:e.handleInput}),Object(o.jsx)(b,{name:"g\xe9nero",select:e.selectGender,handleSelect:e.handleSelectGender,uniqueList:e.genderUniqueList}),Object(o.jsx)(b,{name:"especie",select:e.selectSpecies,handleSelect:e.handleSelectSpecies,uniqueList:e.speciesUniqueList}),Object(o.jsx)(b,{name:"origen",select:e.selectOrigin,handleSelect:e.handleSelectOrigin,uniqueList:e.originUniqueList}),Object(o.jsx)(b,{name:"estado",select:e.selectStatus,handleSelect:e.handleSelectStatus,uniqueList:e.statusUniqueList})]})},m=(a(29),a(30),function(){return Object(o.jsxs)("section",{className:"alternative",children:[Object(o.jsx)("h2",{className:"alternative__insult",children:"\xa1\xa1Eh!!"}),Object(o.jsx)("p",{className:"alternative__text",children:"\xa1\xa1Aqu\xed no tenemos de eso!!"})]})}),x=function(e){var t="";return"Dead"===e.characterData.status&&(t=Object(o.jsx)("i",{className:"status fas fa-dizzy"})),void 0===e.characterData?Object(o.jsx)(m,{}):Object(o.jsx)(i.b,{to:"./character/".concat(e.characterData.id),children:Object(o.jsxs)("li",{className:"list__element",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"list__element--img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"list__element--text",children:[Object(o.jsx)("h2",{className:"name",children:e.characterData.name}),Object(o.jsxs)("p",{className:"line",children:[e.characterData.species,Object(o.jsx)("span",{children:t})]})]})})]},e.characterData.id)})},f=(a(36),function(e){var t=e.list.map((function(e){return Object(o.jsx)(x,{characterData:e},e.id)}));return 0===e.list.length?(console.log(e.list.length),Object(o.jsx)(m,{})):Object(o.jsx)("ul",{className:"list",children:t})}),p=(a(37),function(e){return console.log(e.characterData),void 0===e.characterData?Object(o.jsxs)("section",{className:"alternative",children:[Object(o.jsx)("h2",{className:"alternative__insult",children:"\xa1\xa1Eh!!"}),Object(o.jsx)("p",{className:"alternative__text",children:"\xa1\xa1Metete con un personaje de esta serie!!"}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("i",{class:"return fas fa-backspace"})})]}):Object(o.jsxs)("section",{className:"detail",id:e.characterData.id,children:[Object(o.jsx)("img",{className:"detail__img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(o.jsxs)("div",{className:"text",children:[Object(o.jsx)("h1",{className:"detail__name",children:e.characterData.name}),Object(o.jsxs)("ul",{className:"detail__text",children:[Object(o.jsxs)("li",{className:"detail__text--line",children:["Especie : ",e.characterData.species]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["G\xe9nero: ",e.characterData.gender]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Origen: ",e.characterData.origin]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Episodios: ",e.characterData.episode]}),Object(o.jsxs)("li",{className:"detail__text--line",children:["Estado: ",e.characterData.status]})]}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("i",{className:"back fas fa-level-up-alt"})})]})]},e.characterData.id)});var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),d=i[0],h=i[1],b=Object(c.useState)("all"),x=Object(r.a)(b,2),g=x[0],_=x[1],N=Object(c.useState)("all"),v=Object(r.a)(N,2),D=v[0],S=v[1],L=Object(c.useState)("all"),q=Object(r.a)(L,2),E=q[0],I=q[1],U=Object(c.useState)("all"),k=Object(r.a)(U,2),y=k[0],G=k[1];Object(c.useEffect)((function(){u().then((function(e){n(e)}))}),[]);var T=a.map((function(e){return e.gender})),w=T.filter((function(e,t){return T.indexOf(e)===t})),z=a.map((function(e){return e.species})),A=z.filter((function(e,t){return z.indexOf(e)===t})),C=a.map((function(e){return e.origin})),M=C.filter((function(e,t){return C.indexOf(e)===t})),B=a.map((function(e){return e.status})),F=B.filter((function(e,t){return B.indexOf(e)===t})),J=Object(l.f)("/character/:id"),R=null!==J?J.params.id:"",H=a.find((function(e){return e.id===parseInt(R)})),K=a.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"all"===g||g===e.gender})).filter((function(e){return"all"===D||D===e.species})).filter((function(e){return"all"===E||E===e.origin})).filter((function(e){return"all"===y||y===e.status}));return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("img",{className:"header__img",src:j,alt:"Rick and Morty"})}),Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)(l.c,{children:[Object(o.jsxs)(l.a,{exact:!0,path:"/",children:[Object(o.jsx)(O,{inputName:d,handleInput:function(e){e.preventDefault(),h(e.currentTarget.value)},genderUniqueList:w,selectGender:g,handleSelectGender:function(e){_(e.currentTarget.value)},speciesUniqueList:A,selectSpecies:D,handleSelectSpecies:function(e){S(e.currentTarget.value)},originUniqueList:M,selectOrigin:E,handleSelectOrigin:function(e){I(e.currentTarget.value)},statusUniqueList:F,selectStatus:y,handleSelectStatus:function(e){G(e.currentTarget.value)}}),Object(o.jsx)(f,{list:K})]}),Object(o.jsx)(l.a,{path:"/character/:id",children:Object(o.jsx)(p,{characterData:H})}),Object(o.jsx)(l.a,{children:Object(o.jsx)(m,{})})]})}),Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsx)("h6",{children:"\xa92021"}),Object(o.jsx)("h6",{children:"By IreGonzalez To Adalab"})]})]})};s.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.c4421c68.chunk.js.map