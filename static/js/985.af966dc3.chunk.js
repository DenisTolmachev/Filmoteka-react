"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[985],{1985:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,i,o,a,s,c,u=e(885),p=e(2791),f=e(5861),d=e(7757),l=e.n(d),h=e(8927),m={page:1},x=function(){var n=(0,f.Z)(l().mark((function n(){var t,e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.h.get("/trending/movie/day",{params:m});case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),g=e(501),v=e(6871),b=e(168),w=e(6031),Z=w.ZP.ul(r||(r=(0,b.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),_=w.ZP.li(i||(i=(0,b.Z)(["\n  cursor: pointer;\n  margin: 10px;\n  margin-bottom: 20px;\n  //flex-basis: calc((100% - 10px) / 5);\n  transform: translateY(0);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: translateY(-3%);\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),j=w.ZP.p(o||(o=(0,b.Z)(["\nwidth: 309px;\ntext-decoration: none;\ncolor: black;\nfont-weight: ",";\nfont-size: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m})),y=w.ZP.img(a||(a=(0,b.Z)(["\n  width: 309px;\n  height: 449px;\n  text-decoration: none;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),k=e(184),P=function(n){var t=n.movies,e=(0,v.TH)();return(0,k.jsx)(Z,{children:t.map((function(n){return(0,k.jsxs)(_,{children:[(0,k.jsx)(g.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,k.jsx)(y,{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title})}),(0,k.jsx)(j,{children:n.title})]},n.id)}))})},z=w.ZP.div(s||(s=(0,b.Z)(["\n\n"]))),C=w.ZP.h1(c||(c=(0,b.Z)(["\ntext-align: center;\ntext-transform: uppercase;\ncolor: ",";\n"])),(function(n){return n.theme.colors.secondary})),S=function(){var n=(0,p.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1];return(0,p.useEffect)((function(){x().then((function(n){r(n.results)}))}),[]),(0,k.jsxs)(z,{children:[(0,k.jsx)(C,{children:"Trending movies today"}),(0,k.jsx)(P,{movies:e})]})}},8927:function(n,t,e){e.d(t,{h:function(){return i}});var r=e(4569),i=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28d5cd374d4ca5faf90ef748b7c7ae26"}})}}]);
//# sourceMappingURL=985.af966dc3.chunk.js.map