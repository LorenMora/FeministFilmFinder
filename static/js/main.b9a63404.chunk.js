(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(6),i=c.n(r),o=(c(16),c(7)),l=c(8),u=c(10),j=c(9),d=(c(17),c(2)),b=c.n(d),h=c(4),m=c(3);function p(e){var t=e.title,c=e.rating,s=Object(n.useState)([]),r=Object(m.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!1),u=Object(m.a)(l,2),j=u[0],d=u[1],p=function(){var e=Object(h.a)(b.a.mark((function e(){var c,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"1faa8c9c3b5a13bccc8eabe39ae4d977",c=encodeURI("https://api.themoviedb.org/3/search/movie?api_key=".concat("1faa8c9c3b5a13bccc8eabe39ae4d977","&language=en-US&query=").concat(t,"&page=1&include_adult=false")),e.prev=2,e.next=5,fetch(c);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,console.log(n.results[0]),o(n.results[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){d(3===c),p()}),[t]),i?Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("h3",{className:"card-title",children:i.title}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)("div",{className:"card-info",children:[Object(a.jsx)("div",{className:"test",children:j?Object(a.jsx)("p",{className:"passed",children:"Passed"}):Object(a.jsx)("p",{className:"failed",children:"Failed"})}),Object(a.jsx)("p",{className:"card--desc",children:i.overview})]}),Object(a.jsx)("img",{className:"card-image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(i.poster_path),alt:i.title+" poster"})]}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{children:["Bechdel Rating: ",c]})})]}):null}function v(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)([]),i=Object(m.a)(r,2),o=i[0],l=i[1],u=function(){var e=Object(h.a)(b.a.mark((function e(){var t,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://cors-proxy.htmldriven.com/?url=http://bechdeltest.com/api/v1/getMoviesByTitle?title=".concat(c),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,console.log(n),l(n),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),u()},children:[Object(a.jsx)("label",{htmlFor:"query",className:"label",children:"Movie"}),Object(a.jsx)("input",{className:"input",type:"text",placeholder:"i.e. Mary Poppins",name:"query",value:c,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("button",{className:"button",type:"submit",children:"Submit"})]}),Object(a.jsx)("div",{className:"card-list",children:o.map((function(e){return Object(a.jsx)(p,{title:e.title,rating:e.rating},e.id)}))}),Object(a.jsx)("div",{className:"card-list"})]})}var O=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"FEMINIST FILM FINDER"}),Object(a.jsx)("img",{className:"img",src:"images/comic895x389.jpg",alt:""}),Object(a.jsx)(v,{})]})}}]),c}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b9a63404.chunk.js.map