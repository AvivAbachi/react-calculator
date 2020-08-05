(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[3],{11:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(o){a=!0,c=o}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}return n}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(t),n.d(t,"default",(function(){return p}));var i=n(0),l=n.n(i);n(9);function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){var n=Number(e[t-1]),r=Number(e[t+1]);switch(e[t]){case"+":return[].concat(o(e.slice(0,t-1)),[n+r],o(e.slice(t+2)));case"-":return[].concat(o(e.slice(0,t-1)),[n-+r],o(e.slice(t+2)));case"\xd7":return[].concat(o(e.slice(0,t-1)),[n*r],o(e.slice(t+2)));case"\xf7":return[].concat(o(e.slice(0,t-1)),[n/r],o(e.slice(t+2)));default:return e}}var s=l.a.lazy((function(){return n.e(5).then(n.bind(null,12))})),d=l.a.lazy((function(){return n.e(4).then(n.bind(null,10))})),f=/(?<!\s[+|\xd7|\xf7|-])(\s[+|\xd7|\xf7|-])$/,m=/(\d+\.|\d+\.\d+)$/,b=/(\D+)$/,h=/[+|\xd7|\xf7|-]$/,k=/[+|\xd7|\xf7|-]\s[-]$/,y=/(\s[+|-|\xd7|\xf7]|\d+)$/,E=/\d+$/,C=/\d+\s[+|\xd7|\xf7|-]$/;function p(){var e=c(Object(i.useState)("0"),2),t=e[0],n=e[1];Object(i.useEffect)((function(){return g(!0)}),[]);var r=Object(i.useCallback)((function(e){var t=function(e){return-1!==a.indexOf(e)?a.indexOf(e):c},a=e,c=a.length+1,i=t("\xd7"),l=t("\xf7"),o=t("+"),s=t("-");i!==c||l!==c?(a=u(a,Math.min(i,l)))&&r(a):o!==c||s!==c?(a=u(a,Math.min(o,s)))&&r(a):n(a.toString())}),[]),a=Object(i.useCallback)((function(e){var r="Infinity"===t?"0":t;switch(e){case"-":r+=""===r?"-":r.match(y)?" -":"";break;case"+":case"\xd7":case"\xf7":r.match(k)?r=r.replace(k,e):r.match(h)?r=r.replace(h,e):""!==r&&(r+=" ".concat(e));break;case".":!r.match(m)&&(r+=r.match(E)?".":""===r?"0.":" 0.");break;case"0":!r.endsWith(" 0")&&"0"!==r&&(r+=r.match(C)?" 0":"0");break;default:"0"===r?r=e:r.endsWith(" 0")?r=r.slice(0,-1)+e:r+=r.match(f)?" ".concat(e):e}n(r)}),[t]),o=Object(i.useCallback)((function(){var e=t.replace(b,"").split(" ");r(e)}),[t,r]),p=Object(i.useCallback)((function(){return n("0")}),[]),v=Object(i.useCallback)((function(){var e=t.slice(0,t.endsWith("0.")?-2:-1).trimEnd();n(e)}),[t]),g=Object(i.useCallback)((function(e){var t="true"===window.sessionStorage.getItem("dark-theme"),n=String(e?t:!t);window.sessionStorage.setItem("dark-theme",n),document.documentElement.setAttribute("dark-theme",n)}),[]);return l.a.createElement("main",{id:"calc",className:"calc"},l.a.createElement("h1",null,"React Calculator"),l.a.createElement("label",null,l.a.createElement("input",{id:"display",value:"Infinity"===t?"Cannot divide by zero":t,readOnly:!0})),l.a.createElement(l.a.Suspense,{fallback:null},l.a.createElement(d,{id:"clear",onClick:function(){return p()}},"AC"),l.a.createElement(d,{id:"back-space",onClick:function(){return v()}},"\u2039"),l.a.createElement(d,{id:"multiply",onClick:function(){return a("\xd7")}},"\xd7"),l.a.createElement(d,{id:"seven",onClick:function(){return a("7")}},"7"),l.a.createElement(d,{id:"eight",onClick:function(){return a("8")}},"8"),l.a.createElement(d,{id:"nine",onClick:function(){return a("9")}},"9"),l.a.createElement(d,{id:"divide",onClick:function(){return a("\xf7")}},"\xf7"),l.a.createElement(d,{id:"four",onClick:function(){return a("4")}},"4"),l.a.createElement(d,{id:"five",onClick:function(){return a("5")}},"5"),l.a.createElement(d,{id:"six",onClick:function(){return a("6")}},"6"),l.a.createElement(d,{id:"add",onClick:function(){return a("+")}},"+"),l.a.createElement(d,{id:"one",onClick:function(){return a("1")}},"1"),l.a.createElement(d,{id:"two",onClick:function(){return a("2")}},"2"),l.a.createElement(d,{id:"three",onClick:function(){return a("3")}},"3"),l.a.createElement(d,{id:"subtract",onClick:function(){return a("-")}},"-"),l.a.createElement(d,{id:"decimal",onClick:function(){return a(".")}},"."),l.a.createElement(d,{id:"zero",onClick:function(){return a("0")}},"0"),l.a.createElement(d,{id:"equals",onClick:function(){return o()}},"="),l.a.createElement(d,{id:"dark-btn",onClick:function(){return g()}},"\u25d1"),l.a.createElement("a",{id:"creadit",target:"blink",href:"https://github.com/AvivAbachi"},"Design and Code by AvivAbachi@Gmail.com"),l.a.createElement(s,{clickInput:a,clickEqual:o,clickBackspace:v,clickClear:p})))}},9:function(e,t,n){}}]);
//# sourceMappingURL=3.66aa110d.chunk.js.map