(this["webpackJsonpbook-search"]=this["webpackJsonpbook-search"]||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),s=(n(21),n(2)),i=n.n(s),u=n(3),f=n(4),h=n(15),l=n.n(h);n(40);var p=function(){var e=Object(a.useState)({hits:[]}),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({books:[]}),s=Object(f.a)(c,2),h=(s[0],s[1]);return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/books");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,200===t.status){e.next=8;break}throw Error(n.message);case 8:h(t.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("https://hn.algolia.com/api/v1/search?query=redux");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("ul",null,n.hits.map((function(e){return r.a.createElement("li",{key:e.objectID},r.a.createElement("a",{href:e.url},e.title))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.544ba1e4.chunk.js.map