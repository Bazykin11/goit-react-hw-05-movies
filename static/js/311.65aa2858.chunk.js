"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[311],{808:function(n,t,e){e.d(t,{Bt:function(){return f},F6:function(){return s},LC:function(){return p},PY:function(){return i},ad:function(){return l}});var r=e(861),a=e(687),u=e.n(a),c=e(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="937968fc5e907db2565b1416fc4a5859",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},130:function(n,t,e){e.d(t,{O:function(){return p}});var r,a,u=e(168),c=e(934),o=e(689),i=e(87),s=e(184),p=function(n){var t=n.movies,e=(0,o.TH)();return(0,s.jsx)(f,{children:t.map((function(n){return(0,s.jsx)(l,{children:(0,s.jsxs)(i.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,s.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w200".concat(n.poster_path):"https://via.placeholder.com/278x417?text=Poster+Not+Found",alt:"movie.title}",width:"200",height:"300"}),(0,s.jsx)("p",{children:n.title})]})},n.id)}))})},f=c.Z.ul(r||(r=(0,u.Z)(["\n  padding-left: 50px;\n  list-style: none;\n  line-height: 1,5;\n  display: grid;\n  grid-template-columns: repeat(4, 250px);\n  grid-template-rows: repeat(4, 400px);\n"]))),l=c.Z.li(a||(a=(0,u.Z)(["\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  background-color: #bbbbbb69;\n  border-radius: 5px;\n  margin: 3px;\n  text-align: center;\n  padding: 10px;\n"])))},311:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,u,c=e(861),o=e(439),i=e(687),s=e.n(i),p=e(87),f=e(791),l=e(808),d=e(130),h=e(168),x=e(934),v=e(184),m=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,o.Z)(e,2),a=r[0],u=r[1];return(0,v.jsxs)(b,{onSubmit:function(n){n.preventDefault();var e=a.toLowerCase().trim();if(""===e)return alert("It cannot be empty query! Example: 'Batman'!");t(e),u("")},children:[(0,v.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(n){return u(n.target.value)}}),(0,v.jsx)(Z,{children:"Seach"})]})},g=x.Z.input(r||(r=(0,h.Z)(["\njustify-content: center;\npadding: 5px;\nwidth: 300px;\nmargin-right: 10px;\njustify-content: center;\n"]))),b=x.Z.form(a||(a=(0,h.Z)(["\n  text-align: center;\n  padding-top: 20px;\n"]))),Z=x.Z.button(u||(u=(0,h.Z)(["\n  padding: 5px;\n  background-color: inherit;\n  border-radius: 10px;\n  border: 1px solid #ff6702;\n  :hover {\n    background-color: #ff6702;\n  }\n"]))),k=e(321);function y(){var n,t=(0,f.useState)(""),e=(0,o.Z)(t,2),r=e[0],a=e[1],u=(0,p.lr)(),i=(0,o.Z)(u,2),h=i[0],x=i[1],g=(0,f.useState)(!1),b=(0,o.Z)(g,2),Z=b[0],y=b[1],w=null!==(n=h.get("query"))&&void 0!==n?n:"";return(0,f.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.ad)(w);case 3:if(0!==(t=n.sent).length){n.next=6;break}return n.abrupt("return");case 6:a(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:return n.prev=12,y(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==w&&(y(!0),function(){n.apply(this,arguments)}())}),[w]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("main",{children:[(0,v.jsx)(m,{onSubmit:function(n){x(""!==n?{query:n}:{})}}),r&&(0,v.jsx)(d.O,{movies:r})]}),Z&&(0,v.jsx)(k.a,{})]})}}}]);
//# sourceMappingURL=311.65aa2858.chunk.js.map