"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[619],{3577:function(n,t,e){e.d(t,{O:function(){return b}});var r,i,o,a,s,c=e(501),u=e(6871),p=e(168),l=e(6031),d=l.ZP.ul(r||(r=(0,p.Z)(["\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n"]))),f=l.ZP.li(i||(i=(0,p.Z)(["\n  cursor: pointer;\n  margin: 10px;\n  margin-bottom: 20px;\n  //flex-basis: calc((100% - 10px) / 5);\n  transform: translateY(0);\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: translateY(-3%);\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),h=l.ZP.p(o||(o=(0,p.Z)(["\nwidth: 309px;\ntext-decoration: none;\ncolor: black;\nfont-weight: ",";\nfont-size: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m})),m=l.ZP.img(a||(a=(0,p.Z)(["\n  width: 309px;\n  height: 449px;\n  text-decoration: none;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),x=l.ZP.div(s||(s=(0,p.Z)(["\ntext-align: center;\n  font-size: ",";\n  font-weight: ",";\n  color: ",";;\n"])),(function(n){return n.theme.fontSizes.ml}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.colors.primary})),g=e(184),b=function(n){var t=n.movies,e=(0,u.TH)();return console.log(t),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(d,{children:0!==t.length?t.map((function(n){return(0,g.jsxs)(f,{children:[(0,g.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,g.jsx)(m,{src:n.poster_path?"https://image.tmdb.org/t/p/w500"+n.poster_path:"https://dummyimage.com/309x449/fff/000000.png&text=%D0%9A%D1%96%D0%BD%D0%B0+%D0%BD%D0%B5+%D0%B1%D1%83%D0%B4%D0%B5!",alt:n.title})}),(0,g.jsx)(h,{children:n.title})]},n.id)})):(0,g.jsx)(x,{children:"Films not found, enter the correct request!"})})})}},6619:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,i,o,a,s=e(885),c=e(168),u=e(6031),p=e(5705),l=u.ZP.div(r||(r=(0,c.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n"]))),d=(0,u.ZP)(p.l0)(i||(i=(0,c.Z)(["\n  position: relative;\n"]))),f=(0,u.ZP)(p.gN)(o||(o=(0,c.Z)(["\n  outline: none;\n  height: 30px;\n  width: 300px;\n  border: 0;\n  border-radius: 6px;\n  padding-left: 10px;\n  font-size: 16px;\n"]))),h=u.ZP.button(a||(a=(0,c.Z)(["\n  display: block;\n  position: absolute;\n  right: 0;\n  width: 30px;\n  height: 32px;\n  border: 0;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),m=e(7425),x=e(184),g=function(n){var t=n.onSubmit,e=n.value;return(0,x.jsx)(l,{children:(0,x.jsx)(p.J9,{initialValues:{query:null!==e&&void 0!==e?e:""},onSubmit:function(n,e){t(n),e.resetForm()},children:(0,x.jsxs)(d,{children:[(0,x.jsx)(h,{type:"submit",children:(0,x.jsx)(m.Qcu,{})}),(0,x.jsx)(f,{type:"text",autoComplete:"off",autoFocus:!0,name:"query",placeholder:"Search movies"})]})})})},b=e(2791),v=e(501),y=e(5861),Z=e(7757),j=e.n(Z),w=e(8927),k=function(){var n=(0,y.Z)(j().mark((function n(t){var e,r;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.h.get("/search/movie",{params:t});case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),D=e(3577),_=e(6066),P=function(){var n=(0,v.lr)(),t=(0,s.Z)(n,2),e=t[0],r=t[1],i=(0,b.useState)([]),o=(0,s.Z)(i,2),a=o[0],c=o[1];(0,b.useEffect)((function(){var n,t=null!==(n=e.get("name"))&&void 0!==n?n:"";""!==t&&k({query:t,page:1}).then((function(n){c(n.results)}))}),[e]);return(0,x.jsxs)("div",{children:[(0,x.jsx)(g,{onSubmit:function(n){if(""===n.query.trim())_.Am.warn("Enter a movie title!",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var t=""!==n.query?{name:n.query}:{};r(t)}},value:e.get("name")}),(0,x.jsx)(D.O,{movies:a})]})}},8927:function(n,t,e){e.d(t,{h:function(){return i}});var r=e(4569),i=e.n(r)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"28d5cd374d4ca5faf90ef748b7c7ae26"}})}}]);
//# sourceMappingURL=619.9e44eaed.chunk.js.map