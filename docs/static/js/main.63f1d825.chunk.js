(this["webpackJsonpusando-react-router-dom"]=this["webpackJsonpusando-react-router-dom"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(16),s=a.n(n),i=a(8),r=a(10),l=a(2),u=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,photo:e.image,name:e.name,species:e.species,gender:e.gender,origin:e.origin.name,status:e.status,episode:e.episode.length}}))}))},o=(a(23),a(7),a(24),a.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png"),j=(a(25),a(26),a(0)),d=function(e){return Object(j.jsx)("input",{className:"input",type:"text",placeholder:"Introduce tu b\xfasqueda",value:e.value,onChange:e.handleInput})},h=function(e){return Object(j.jsx)("option",{value:e.option,children:e.option})},b=(a(28),function(e){var t=e.uniqueList.map((function(e,t){return Object(j.jsx)(h,{option:e},t)}));return Object(j.jsxs)("label",{htmlFor:e.select,className:"label",children:["Filtra por ",e.name,":",Object(j.jsxs)("select",{className:"select",name:e.select,value:e.select,onChange:e.handleSelect,children:[Object(j.jsx)("option",{value:"all",children:"All"}),t]})]})}),O=function(e){return Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)(d,{value:e.inputName,handleInput:e.handleInput}),Object(j.jsx)(b,{name:"g\xe9nero",select:e.selectGender,handleSelect:e.handleSelectGender,uniqueList:e.genderUniqueList}),Object(j.jsx)(b,{name:"especie",select:e.selectSpecies,handleSelect:e.handleSelectSpecies,uniqueList:e.speciesUniqueList}),Object(j.jsx)(b,{name:"origen",select:e.selectOrigin,handleSelect:e.handleSelectOrigin,uniqueList:e.originUniqueList}),Object(j.jsx)(b,{name:"estado",select:e.selectStatus,handleSelect:e.handleSelectStatus,uniqueList:e.statusUniqueList})]})},m=(a(29),a(30),function(){return Object(j.jsxs)("section",{className:"alternative",children:[Object(j.jsx)("h2",{className:"alternative__insult",children:"\xa1\xa1Eh!!"}),Object(j.jsx)("p",{className:"alternative__text",children:"\xa1\xa1Mete unos datos que sean correctos!!"})]})}),f=function(e){var t="";return"Dead"===e.characterData.status&&(t=Object(j.jsx)("i",{className:"status fas fa-dizzy"})),void 0===e.characterData?Object(j.jsx)(m,{}):Object(j.jsx)(i.b,{to:"./character/".concat(e.characterData.id),children:Object(j.jsxs)("li",{className:"list__element",id:e.characterData.id,children:[Object(j.jsx)("img",{className:"list__element--img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"list__element--text",children:[Object(j.jsx)("h2",{className:"name",children:e.characterData.name}),Object(j.jsxs)("p",{className:"line",children:[e.characterData.species,Object(j.jsx)("span",{children:t})]})]})})]},e.characterData.id)})},x=(a(36),function(e){var t=e.list.map((function(e){return Object(j.jsx)(f,{characterData:e},e.id)}));return 0===e.list.length?(console.log(e.list.length),Object(j.jsx)(m,{})):Object(j.jsx)("ul",{className:"list",children:t})}),p=(a(37),function(e){return console.log(e.characterData),void 0===e.characterData?Object(j.jsx)(m,{}):Object(j.jsxs)("section",{className:"detail",id:e.characterData.id,children:[Object(j.jsx)("img",{className:"detail__img",src:e.characterData.photo,alt:e.characterData.name,title:e.characterData.name}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"detail__name",children:e.characterData.name}),Object(j.jsxs)("ul",{className:"detail__text",children:[Object(j.jsxs)("li",{className:"detail__text--line",children:["Especie : ",e.characterData.species]}),Object(j.jsxs)("li",{className:"detail__text--line",children:["G\xe9nero: ",e.characterData.gender]}),Object(j.jsxs)("li",{className:"detail__text--line",children:["Origen: ",e.characterData.origin]}),Object(j.jsxs)("li",{className:"detail__text--line",children:["Episodios: ",e.characterData.episode]}),Object(j.jsxs)("li",{className:"detail__text--line",children:["Estado: ",e.characterData.status]})]})]}),Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("i",{className:"back fas fa-level-up-alt"})})]},e.characterData.id)});var g=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),d=i[0],h=i[1],b=Object(c.useState)("all"),f=Object(r.a)(b,2),g=f[0],_=f[1],N=Object(c.useState)("all"),v=Object(r.a)(N,2),D=v[0],S=v[1],L=Object(c.useState)("all"),q=Object(r.a)(L,2),I=q[0],U=q[1],y=Object(c.useState)("all"),E=Object(r.a)(y,2),k=E[0],G=E[1];Object(c.useEffect)((function(){u().then((function(e){n(e)}))}),[]);var T=a.map((function(e){return e.gender})),w=T.filter((function(e,t){return T.indexOf(e)===t})),z=a.map((function(e){return e.species})),C=z.filter((function(e,t){return z.indexOf(e)===t})),A=a.map((function(e){return e.origin})),M=A.filter((function(e,t){return A.indexOf(e)===t})),B=a.map((function(e){return e.status})),F=B.filter((function(e,t){return B.indexOf(e)===t})),J=Object(l.f)("/character/:id"),R=null!==J?J.params.id:"",H=a.find((function(e){return e.id===parseInt(R)})),K=a.filter((function(e){return e.name.toLocaleLowerCase().includes(d.toLocaleLowerCase())})).filter((function(e){return"all"===g||g===e.gender})).filter((function(e){return"all"===D||D===e.species})).filter((function(e){return"all"===I||I===e.origin})).filter((function(e){return"all"===k||k===e.status}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("img",{className:"header__img",src:o,alt:"Rick and Morty"})}),Object(j.jsx)("main",{className:"main",children:Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{exact:!0,path:"/",children:[Object(j.jsx)(O,{inputName:d,handleInput:function(e){e.preventDefault(),h(e.currentTarget.value)},genderUniqueList:w,selectGender:g,handleSelectGender:function(e){_(e.currentTarget.value)},speciesUniqueList:C,selectSpecies:D,handleSelectSpecies:function(e){S(e.currentTarget.value)},originUniqueList:M,selectOrigin:I,handleSelectOrigin:function(e){U(e.currentTarget.value)},statusUniqueList:F,selectStatus:k,handleSelectStatus:function(e){G(e.currentTarget.value)}}),Object(j.jsx)(x,{list:K})]}),Object(j.jsx)(l.a,{path:"/character/:id",children:Object(j.jsx)(p,{characterData:H})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(m,{})})]})}),Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("h6",{children:"\xa92021"}),Object(j.jsx)("h6",{children:"By IreGonzalez To Adalab"})]})]})};s.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}],[[38,1,2]]]);
//# sourceMappingURL=main.63f1d825.chunk.js.map