(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),u=t(14),r=t.n(u),o=t(3),l=t(2),i=function(e){return c.a.createElement("input",{value:e.name,onChange:e.handleEvent})},m=function(e){return c.a.createElement("form",{onSubmit:e.addPerson},c.a.createElement("div",null,"name: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("div",null,"number: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.persons,t=e.clickEvent;return console.log("ph",n),c.a.createElement("div",null,n.filter((function(e){return e.display})).map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("p",null," ",e.name,"  ",e.number," "),c.a.createElement("button",{onClick:t(e.id)},"delete"))})))},d=t(4),f=t.n(d),h="https://phonebook-study.herokuapp.com/api/persons",p=function(e){return f.a.post(h,e).then((function(e){return e.data}))},b=function(){return f.a.get(h).then((function(e){return e.data}))},E=function(e){return f.a.delete(h+"/".concat(e)).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.classname;return null===n?null:c.a.createElement("div",{className:t},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],r=Object(a.useState)(""),d=Object(l.a)(r,2),f=d[0],h=d[1],j=Object(a.useState)(""),O=Object(l.a)(j,2),w=O[0],y=O[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),N=C[0],S=C[1],L=Object(a.useState)(null),D=Object(l.a)(L,2),P=D[0],T=D[1],J=Object(a.useState)("message"),x=Object(l.a)(J,2),B=x[0],I=x[1];Object(a.useEffect)((function(){b().then((function(e){e.forEach((function(e){return e.display=!0})),console.log(e),u(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(g,{message:P,classname:B}),c.a.createElement(i,{name:N,handleEvent:function(e){var n=e.target.value;u(""===n?t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{display:!0})})):t.map((function(e){return e.name.toLowerCase().includes(n.toLowerCase())?Object(o.a)(Object(o.a)({},e),{},{display:!0}):Object(o.a)(Object(o.a)({},e),{},{display:!1})}))),S(n)}}),c.a.createElement("h2",null,"add a new"),c.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:f,number:w,display:f.toLowerCase().includes(N.toLowerCase())},a=t.filter((function(e){return e.name===f}));0!==a.length?window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&v(a[0].id,n).then((function(e){e.display=!0,u(t.map((function(n){return n.id===a[0].id?e:n}))),T("".concat(f," is added")),I("message"),setTimeout((function(){T(null)}),5e3)})).catch((function(e){T("".concat(f," is removed from server")),I("error"),setTimeout((function(){T(null)}),5e3)})):(p(n).then((function(e){e.display=!0,u(t.concat(e)),h(""),y("")})),T("".concat(f," is added")),I("message"),setTimeout((function(){T(null)}),5e3))},newName:f,handleNameChange:function(e){h(e.target.value)},newNumber:w,handleNumberChange:function(e){y(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(s,{persons:t,clickEvent:function(e){return function(n){n.preventDefault(),window.confirm("Delete ".concat(t[e-1].name))&&function(e){E(e).then((function(n){u(t.filter((function(n){return n.id!==e})))}))}(e)}}}))};t(37);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2a7811ab.chunk.js.map