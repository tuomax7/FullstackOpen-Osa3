(this["webpackJsonp2.6"]=this["webpackJsonp2.6"]||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),i=t(15),a=t.n(i),u=t(6),o=t(3),s=t(4),d=t.n(s),j="/api/persons",l=function(){return d.a.get(j).then((function(e){return e.data}))},b=function(e){return d.a.post(j,e).then((function(e){return e.data}))},f=function(e,n){return d.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},h=(t(38),t(0)),O=function(e){var n=e.person,t=e.deletePerson;return Object(h.jsxs)("div",{children:[n.name," ",n.number," ",Object(h.jsx)("button",{onClick:function(){return t(n)},children:"Delete"})]})},g=function(e){var n=e.personsToShow,t=e.deletePerson;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Numbers"}),n.map((function(e){return Object(h.jsx)(O,{person:e,deletePerson:t},e.id)}))]})},v=function(e){var n=e.message;return null!==n.messageString?Object(h.jsx)("div",{className:"notification",style:{color:n.success?"green":"red"},children:n.messageString}):Object(h.jsx)("div",{})},x=function(e){var n=e.submitPerson,t=e.newName,c=e.changedName,r=e.newNumber,i=e.changedNum;return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsxs)("div",{children:["Name: ",Object(h.jsx)("input",{value:t,onChange:c})]}),Object(h.jsxs)("div",{children:["Number: ",Object(h.jsx)("input",{value:r,onChange:i})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"Add"})})]})},p=function(e){var n=e.newFilter,t=(e.setNewFilter,e.changedFilter);return Object(h.jsxs)("div",{children:["Filter shown with ",Object(h.jsx)("input",{value:n,onChange:t})]})},w=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],i=Object(c.useState)(""),a=Object(o.a)(i,2),s=a[0],d=a[1],j=Object(c.useState)(""),O=Object(o.a)(j,2),w=O[0],S=O[1],N=Object(c.useState)(""),F=Object(o.a)(N,2),C=F[0],P=F[1],k=Object(c.useState)({messageString:null,success:null}),y=Object(o.a)(k,2),D=y[0],T=y[1];Object(c.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var L=function(e,n){T({messageString:e,success:n}),setTimeout((function(){T({messageString:null,success:null})}),3e3)},A=t.filter((function(e){return e.name.toLowerCase().includes(C)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(v,{message:D}),Object(h.jsx)(p,{newFilter:C,setNewFilter:P,changedFilter:function(e){P(e.target.value)}}),Object(h.jsx)(x,{submitPerson:function(e){e.preventDefault();var n={name:s,number:w};if(t.find((function(e){return e.name===n.name}))){if(window.confirm("".concat(n.name," is already added to phonebook, change their number?"))){var c=t.find((function(e){return e.name===n.name})),i=Object(u.a)(Object(u.a)({},c),{},{number:w});f(c.id,i).then((function(e){r(t.map((function(n){return n.id!==c.id?n:e}))),L("Changed the number of '".concat(e.name,"'."),!0)})).catch((function(e){r(t.filter((function(e){return e.id!==c.id}))),L("'".concat(c.name,"' was already removed from the server."),!1)})),d(""),S("")}}else b(n).then((function(e){r(t.concat(e)),L("Added '".concat(e.name,"'."),!0),d(""),S("")}))},newName:s,changedName:function(e){d(e.target.value)},newNumber:w,changedNum:function(e){S(e.target.value)}}),Object(h.jsx)(g,{personsToShow:A,deletePerson:function(e){window.confirm("Delete ".concat(e.name," from phonebook?"))&&m(e.id).then((function(n){r(t.filter((function(n){return n.id!==e.id}))),L("Deleted '".concat(e.name,"'."),!0)}))}})]})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.a30f0ebd.chunk.js.map