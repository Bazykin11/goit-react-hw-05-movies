"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{808:function(e,t,n){n.d(t,{Bt:function(){return f},F6:function(){return i},LC:function(){return p},PY:function(){return o},ad:function(){return l}});var r=n(861),a=n(687),u=n.n(a),c=n(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="937968fc5e907db2565b1416fc4a5859",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},681:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r,a=n(168),u=n(861),c=n(439),s=n(687),o=n.n(s),i=n(791),p=n(689),f=n(808),l=n(934),v=n(321),h=n(184);function d(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),n=t[0],r=t[1],a=(0,i.useState)(!1),s=(0,c.Z)(a,2),l=s[0],d=s[1],x=(0,i.useState)(!0),g=(0,c.Z)(x,2),k=g[0],w=g[1],Z=(0,p.UO)().movieId;return(0,i.useEffect)((function(){function e(){return(e=(0,u.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.Bt)(Z);case 3:if(0!==(t=e.sent).length){e.next=7;break}return d(!0),e.abrupt("return",alert("No reviews for this movie"));case 7:r(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}w(!0),console.log("hello"),function(){e.apply(this,arguments)}()}),[Z]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h2",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]},e.id)}))}),l&&(0,h.jsx)("p",{children:"We don't have review for this movie "}),k&&(0,h.jsx)(v.a,{})]})}var m=l.Z.ul(r||(r=(0,a.Z)(["\n  list-style: none;\n"])))}}]);
//# sourceMappingURL=681.f0cdea74.chunk.js.map