(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),i=n.n(r),o=(n(13),n(2)),l=n(3),u=n(5),s=n(4),d=(n(14),n(1));function k(e,t){var n=Number(e[t-1]),c=Number(e[t+1]);switch(e[t]){case"+":return[].concat(Object(d.a)(e.slice(0,t-1)),[n+c],Object(d.a)(e.slice(t+2)));case"-":return[].concat(Object(d.a)(e.slice(0,t-1)),[n-+c],Object(d.a)(e.slice(t+2)));case"\xd7":return[].concat(Object(d.a)(e.slice(0,t-1)),[n*c],Object(d.a)(e.slice(t+2)));case"\xf7":return[].concat(Object(d.a)(e.slice(0,t-1)),[n/c],Object(d.a)(e.slice(t+2)));default:return e}}var f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=function(){window.addEventListener("keydown",(function(t){return e.handelKeyBoard(t.key)}))},e.componentWillUnmount=function(){window.removeEventListener("keydown",(function(t){return e.handelKeyBoard(t.key)}))},e.handelKeyBoard=function(t){var n,c="",a=e.props.clickInput,r=t;switch(t){case"0":c="zero";break;case"1":c="one";break;case"2":c="two";break;case"3":c="three";break;case"4":c="four";break;case"5":c="five";break;case"6":c="six";break;case"7":c="seven";break;case"8":c="eight";break;case"9":c="nine";break;case"Delete":c="clear",a=e.props.clickClear;break;case"Backspace":c="back-space",a=e.props.clickBackspace;break;case"Enter":case"=":c="equals",a=e.props.clickEqual;break;case"+":c="add";break;case"-":c="subtract";break;case"\xd7":case"*":c="multiply",r="\xd7";break;case"\xf7":case"/":c="divide",r="\xf7";break;case".":c="decimal"}""!==c&&(null===(n=document.getElementById(c))||void 0===n||n.focus(),a(r))},e}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null)}}]),n}(c.Component),m=a.a.memo(f),h=/(?<!\s[+|\xd7|\xf7|-])(\s[+|\xd7|\xf7|-])$/,p=/(\d+\.|\d+\.\d+)$/,b=/(\D+)$/,v=/[+|\xd7|\xf7|-]$/,g=/[+|\xd7|\xf7|-]\s[-]$/,E=/(\s[+|-|\xd7|\xf7]|\d+)$/,w=/\d+$/,C=/\d+\s[+|\xd7|\xf7|-]$/,y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).componentDidMount=function(){c.toggleDarkTheme(!0)},c.handelCalc=function(e){var t=function(e){return-1!==n.indexOf(e)?n.indexOf(e):a},n=e,a=n.length+1,r=t("\xd7"),i=t("\xf7"),o=t("+"),l=t("-");r!==a||i!==a?(n=k(n,Math.min(r,i)))&&c.handelCalc(n):o!==a||l!==a?(n=k(n,Math.min(o,l)))&&c.handelCalc(n):c.setState({current:n.toString()})},c.clickInput=function(e){var t="Infinity"===c.state.current?"0":c.state.current;switch(e){case"-":t+=""===t?"-":t.match(E)?" -":"";break;case"+":case"\xd7":case"\xf7":t.match(g)?t=t.replace(g,e):t.match(v)?t=t.replace(v,e):""!==t&&(t+=" ".concat(e));break;case".":t.match(p)||(t+=t.match(w)?".":""===t?"0.":" 0.");break;case"0":t.endsWith(" 0")||"0"===t||(t+=t.match(C)?" 0":"0");break;default:"0"===t?t=e:t+=t.match(h)?" ".concat(e):e}c.state.current!==t&&c.setState({current:t})},c.clickEqual=function(){var e=c.state.current.replace(b,"").split(" ");c.handelCalc(e)},c.clickClear=function(){""!==c.state.current&&c.setState({current:"0"})},c.clickBackspace=function(){var e=c.state.current.slice(0,c.state.current.endsWith("0.")?-2:-1).trimEnd();c.setState({current:e})},c.toggleDarkTheme=function(e){var t="true"===window.sessionStorage.getItem("dark-theme"),n=String(e?t:!t);window.sessionStorage.setItem("dark-theme",n),document.documentElement.setAttribute("dark-theme",n)},c.state={current:"0"},c}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("main",{id:"calc",className:"calc"},a.a.createElement("h1",null,"React Calculator"),a.a.createElement("label",null,a.a.createElement("input",{id:"display",value:"Infinity"===this.state.current?"Cannot divide by zero":this.state.current,readOnly:!0})),a.a.createElement(I,{id:"clear",onClick:function(){return e.clickClear()}},"AC"),a.a.createElement(I,{id:"back-space",onClick:function(){return e.clickBackspace()}},"\u2039"),a.a.createElement(I,{id:"multiply",onClick:function(){return e.clickInput("\xd7")}},"\xd7"),a.a.createElement(I,{id:"seven",onClick:function(){return e.clickInput("7")}},"7"),a.a.createElement(I,{id:"eight",onClick:function(){return e.clickInput("8")}},"8"),a.a.createElement(I,{id:"nine",onClick:function(){return e.clickInput("9")}},"9"),a.a.createElement(I,{id:"divide",onClick:function(){return e.clickInput("\xf7")}},"\xf7"),a.a.createElement(I,{id:"four",onClick:function(){return e.clickInput("4")}},"4"),a.a.createElement(I,{id:"five",onClick:function(){return e.clickInput("5")}},"5"),a.a.createElement(I,{id:"six",onClick:function(){return e.clickInput("6")}},"6"),a.a.createElement(I,{id:"add",onClick:function(){return e.clickInput("+")}},"+"),a.a.createElement(I,{id:"one",onClick:function(){return e.clickInput("1")}},"1"),a.a.createElement(I,{id:"two",onClick:function(){return e.clickInput("2")}},"2"),a.a.createElement(I,{id:"three",onClick:function(){return e.clickInput("3")}},"3"),a.a.createElement(I,{id:"subtract",onClick:function(){return e.clickInput("-")}},"-"),a.a.createElement(I,{id:"decimal",onClick:function(){return e.clickInput(".")}},"."),a.a.createElement(I,{id:"zero",onClick:function(){return e.clickInput("0")}},"0"),a.a.createElement(I,{id:"equals",onClick:function(){return e.clickEqual()}},"="),a.a.createElement(I,{id:"dark-btn",onClick:function(){return e.toggleDarkTheme()}},"\u25d1"),a.a.createElement("a",{id:"creadit",target:"blink",href:"https://github.com/AvivAbachi"},"Design and Code by AvivAbachi@Gmail.com"),a.a.createElement(m,{clickInput:this.clickInput,clickEqual:this.clickEqual,clickBackspace:this.clickBackspace,clickClear:this.clickClear}))}}]),n}(c.Component),I=a.a.memo((function(e){return a.a.createElement("button",{id:e.id,onClick:e.onClick},e.children)})),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-calculator","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.72e4e83e.chunk.js.map