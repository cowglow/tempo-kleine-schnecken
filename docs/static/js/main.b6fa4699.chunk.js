(this["webpackJsonptempo-kleine-schnecken"]=this["webpackJsonptempo-kleine-schnecken"]||[]).push([[0],[,,function(e,t,a){e.exports={track:"track_track__sG6US",trackStep:"track_trackStep__1AY1t"}},function(e,t,a){e.exports=a.p+"static/media/snail-silhouette.90401f08.svg"},,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),l=(a(11),a(1)),i=["#A93226","#884EA0","#3498DB","#27AE60","#F4D03F","#E67E22"],s=function(e){return Math.floor(Math.random()*e)},u=function(e){var t=e.faces,a=e.callback,n=t.length,c=r.a.createRef(),o=r.a.useState(t[s(n)]),i=Object(l.a)(o,2),u=i[0],m=i[1];return r.a.createElement("button",{ref:c,onClick:function(){var e=s(n),r=t[e];m(r),a({id:e,color:r})},style:{padding:"1rem",color:"#ffffff",backgroundColor:u,":active":{color:"#000000"}}},"Click To Roll")},m=a(3),p=a.n(m),f=function(e){var t=e.color;return r.a.createElement("span",{style:{backgroundColor:t,verticalAlign:"center",display:"inline-block",padding:"2rem","-webkit-mask":'url("'+p.a+'") no-repeat 50% 50%',mask:'url("'+p.a+'") no-repeat 50% 50%'}})},k=a(2),d=a.n(k),h=function(e){var t=e.steps,a=(e.color,e.currentPosition),n=e.player,c=Array.apply(null,Array(t));return c[a]=n,r.a.createElement("div",{className:d.a.track},c.map((function(e,t){return e?r.a.createElement("h1",{className:d.a.trackStep},n):r.a.createElement("h1",{className:d.a.trackStep},"")})))},E=function(){var e=r.a.useState({id:null,color:null}),t=Object(l.a)(e,2),a=(t[0],t[1]),n=r.a.useState(Array.from(Array(7),(function(){return 0}))),c=Object(l.a)(n,2),o=c[0];c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{faces:i,callback:function(e){var t=o;t[e.id]=t[e.id]+1,a(e)}}),i.map((function(e,t){return r.a.createElement(h,{steps:7,color:e,currentPosition:o[t],player:r.a.createElement(f,{color:e})})})))},v=(a(12),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-content"},r.a.createElement(E,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.b6fa4699.chunk.js.map