"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{687:function(e,n,r){r.d(n,{Cn:function(){return s},FO:function(){return o},Hg:function(){return i},IQ:function(){return p},Jh:function(){return d}});var t=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day",{params:{api_key:"2d95e97f255e7635245c1980eab541d3"}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie?include_adult=false&language=en-US&page=1",{params:{api_key:"2d95e97f255e7635245c1980eab541d3",query:n}});case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"?api_key=2d95e97f255e7635245c1980eab541d3"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/credits?api_key=2d95e97f255e7635245c1980eab541d3&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(n,"/reviews?api_key=2d95e97f255e7635245c1980eab541d3&language=en-US"));case 3:return r=e.sent,t=r.data,e.abrupt("return",t);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()},47:function(e,n,r){r.d(n,{e:function(){return h}});var t,a,u,c,i=r(168),s=r(924),o=r(87),p=s.ZP.ul(t||(t=(0,i.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n"]))),d=s.ZP.div(a||(a=(0,i.Z)(["\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 10px;\n  width: 250px;\n"]))),f=s.ZP.p(u||(u=(0,i.Z)(["\n  margin-top: 15px;\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n"]))),l=(0,s.ZP)(o.rU)(c||(c=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-decoration: none;\n"]))),v=r(184),h=function(e){var n=e.movies;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p,{children:n.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(d,{children:(0,v.jsxs)(l,{to:"/movies/".concat(e.id),children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title}),(0,v.jsx)(f,{children:e.title})]})})},e.id)}))})})}},415:function(e,n,r){r.r(n);var t=r(439),a=r(687),u=r(791),c=r(47),i=r(184);n.default=function(){var e=(0,u.useState)([]),n=(0,t.Z)(e,2),r=n[0],s=n[1];return(0,u.useEffect)((function(){(0,a.Hg)().then((function(e){return s(e)}))}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsx)("h1",{style:{marginBottom:"20px"},children:"Trending today"})}),(0,i.jsx)("main",{children:r&&(0,i.jsx)(c.e,{movies:r})})]})}}}]);
//# sourceMappingURL=415.42e0eb10.chunk.js.map