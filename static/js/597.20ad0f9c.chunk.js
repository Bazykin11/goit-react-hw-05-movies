"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{808:function(t,e,n){n.d(e,{Bt:function(){return f},F6:function(){return o},LC:function(){return p},PY:function(){return i},ad:function(){return l}});var r=n(861),a=n(687),c=n.n(a),u=n(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="937968fc5e907db2565b1416fc4a5859",i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},597:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r,a,c=n(168),u=n(861),s=n(439),i=n(687),o=n.n(i),p=n(934),f=n(791),l=n(689),d=n(808),h=n(321),v=n(184);function m(){var t=(0,f.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,f.useState)(!1),c=(0,s.Z)(a,2),i=c[0],p=c[1],m=(0,f.useState)(!0),b=(0,s.Z)(m,2),k=b[0],w=b[1],Z=(0,l.UO)().movieId;return(0,f.useEffect)((function(){function t(){return(t=(0,u.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.LC)(Z);case 3:if(0!==(e=t.sent).length){t.next=7;break}return p(!0),t.abrupt("return",alert("There is no information about the actors of the film"));case 7:r(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,w(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[Z]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(x,{children:n.map((function(t){return(0,v.jsx)(g,{children:(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):"https://via.placeholder.com/100x150?text=Photo+Not+Found",alt:t.name,width:"100"}),(0,v.jsx)("h2",{children:t.name}),(0,v.jsx)("p",{children:t.character})]})},t.cast_id)}))}),i&&(0,v.jsx)("p",{children:"We don't have cast for this movie "}),k&&(0,v.jsx)(h.a,{})]})}var x=p.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 170px);\n  grid-template-rows: repeat(7, 300px);\n  justify-content: center;\n  padding-left: 0px;\n"]))),g=p.Z.li(a||(a=(0,c.Z)(["\n  list-style: none;\n  background-color: #bbbbbb69;\n  border-radius: 5px;\n  margin: 3px;\n  text-align: center;\n  padding: 10px;\n"])))}}]);
//# sourceMappingURL=597.20ad0f9c.chunk.js.map