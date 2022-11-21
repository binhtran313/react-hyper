"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[6253],{76253:function(e,s,n){n.r(s),n.d(s,{default:function(){return D}});var t=n(29439),c=n(72791),l=n(1413),r=n(45987),a=n(39007);var i=function(e,s){var n=(0,c.useRef)(!0);(0,c.useEffect)((function(){if(!n.current)return e();n.current=!1}),s)},o=n(47904),d=n(49726),u=n(16445),h=n(81694),x=n.n(h),m=n(80239),j=(0,n(66543).Z)("carousel-caption"),p=n(10162),f=n(80184),v=["as","bsPrefix","className"],b=c.forwardRef((function(e,s){var n=e.as,t=void 0===n?"div":n,c=e.bsPrefix,a=e.className,i=(0,r.Z)(e,v),o=x()(a,(0,p.vE)(c,"carousel-item"));return(0,f.jsx)(t,(0,l.Z)((0,l.Z)({ref:s},i),{},{className:o}))}));b.displayName="CarouselItem";var N=b,g=n(11701),Z=n(71380),k=n(67202),w=n(85007),I=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"],y={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,f.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var S=c.forwardRef((function(e,s){var n=(0,m.Ch)(e,{activeIndex:"onSelect"}),h=n.as,j=void 0===h?"div":h,v=n.bsPrefix,b=n.slide,N=n.fade,y=n.controls,S=n.indicators,C=n.indicatorLabels,T=n.activeIndex,E=n.onSelect,L=n.onSlide,M=n.onSlid,F=n.interval,R=n.keyboard,A=n.onKeyDown,B=n.pause,O=n.onMouseOver,P=n.onMouseOut,D=n.wrap,_=n.touch,K=n.onTouchStart,U=n.onTouchMove,W=n.onTouchEnd,H=n.prevIcon,X=n.prevLabel,V=n.nextIcon,Y=n.nextLabel,q=n.variant,z=n.className,G=n.children,J=(0,r.Z)(n,I),Q=(0,p.vE)(v,"carousel"),$=(0,p.SC)(),ee=(0,c.useRef)(null),se=(0,c.useState)("next"),ne=(0,t.Z)(se,2),te=ne[0],ce=ne[1],le=(0,c.useState)(!1),re=(0,t.Z)(le,2),ae=re[0],ie=re[1],oe=(0,c.useState)(!1),de=(0,t.Z)(oe,2),ue=de[0],he=de[1],xe=(0,c.useState)(T||0),me=(0,t.Z)(xe,2),je=me[0],pe=me[1];ue||T===je||(ee.current?ce(ee.current):ce((T||0)>je?"next":"prev"),b&&he(!0),pe(T||0)),(0,c.useEffect)((function(){ee.current&&(ee.current=null)}));var fe,ve=0;(0,g.Ed)(G,(function(e,s){++ve,s===T&&(fe=e.props.interval)}));var be=(0,o.Z)(fe),Ne=(0,c.useCallback)((function(e){if(!ue){var s=je-1;if(s<0){if(!D)return;s=ve-1}ee.current="prev",null==E||E(s,e)}}),[ue,je,E,D,ve]),ge=(0,a.Z)((function(e){if(!ue){var s=je+1;if(s>=ve){if(!D)return;s=0}ee.current="next",null==E||E(s,e)}})),Ze=(0,c.useRef)();(0,c.useImperativeHandle)(s,(function(){return{element:Ze.current,prev:Ne,next:ge}}));var ke=(0,a.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var s=getComputedStyle(e);return"none"!==s.display&&"hidden"!==s.visibility&&"none"!==getComputedStyle(e.parentNode).display}(Ze.current)&&($?Ne():ge())})),we="next"===te?"start":"end";i((function(){b||(null==L||L(je,we),null==M||M(je,we))}),[je]);var Ie="".concat(Q,"-item-").concat(te),ye="".concat(Q,"-item-").concat(we),Se=(0,c.useCallback)((function(e){(0,k.Z)(e),null==L||L(je,we)}),[L,je,we]),Ce=(0,c.useCallback)((function(){he(!1),null==M||M(je,we)}),[M,je,we]),Te=(0,c.useCallback)((function(e){if(R&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?ge(e):Ne(e));case"ArrowRight":return e.preventDefault(),void($?Ne(e):ge(e))}null==A||A(e)}),[R,A,Ne,ge,$]),Ee=(0,c.useCallback)((function(e){"hover"===B&&ie(!0),null==O||O(e)}),[B,O]),Le=(0,c.useCallback)((function(e){ie(!1),null==P||P(e)}),[P]),Me=(0,c.useRef)(0),Fe=(0,c.useRef)(0),Re=(0,d.Z)(),Ae=(0,c.useCallback)((function(e){Me.current=e.touches[0].clientX,Fe.current=0,"hover"===B&&ie(!0),null==K||K(e)}),[B,K]),Be=(0,c.useCallback)((function(e){e.touches&&e.touches.length>1?Fe.current=0:Fe.current=e.touches[0].clientX-Me.current,null==U||U(e)}),[U]),Oe=(0,c.useCallback)((function(e){if(_){var s=Fe.current;Math.abs(s)>40&&(s>0?Ne(e):ge(e))}"hover"===B&&Re.set((function(){ie(!1)}),F||void 0),null==W||W(e)}),[_,B,Ne,ge,Re,F,W]),Pe=null!=F&&!ae&&!ue,De=(0,c.useRef)();(0,c.useEffect)((function(){var e,s;if(Pe){var n=$?Ne:ge;return De.current=window.setInterval(document.visibilityState?ke:n,null!=(e=null!=(s=be.current)?s:F)?e:void 0),function(){null!==De.current&&clearInterval(De.current)}}}),[Pe,Ne,ge,be,F,ke,$]);var _e=(0,c.useMemo)((function(){return S&&Array.from({length:ve},(function(e,s){return function(e){null==E||E(s,e)}}))}),[S,ve,E]);return(0,f.jsxs)(j,(0,l.Z)((0,l.Z)({ref:Ze},J),{},{onKeyDown:Te,onMouseOver:Ee,onMouseOut:Le,onTouchStart:Ae,onTouchMove:Be,onTouchEnd:Oe,className:x()(z,Q,b&&"slide",N&&"".concat(Q,"-fade"),q&&"".concat(Q,"-").concat(q)),children:[S&&(0,f.jsx)("div",{className:"".concat(Q,"-indicators"),children:(0,g.UI)(G,(function(e,s){return(0,f.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=C&&C.length?C[s]:"Slide ".concat(s+1),className:s===je?"active":void 0,onClick:_e?_e[s]:void 0,"aria-current":s===je},s)}))}),(0,f.jsx)("div",{className:"".concat(Q,"-inner"),children:(0,g.UI)(G,(function(e,s){var n=s===je;return b?(0,f.jsx)(w.Z,{in:n,onEnter:n?Se:void 0,onEntered:n?Ce:void 0,addEndListener:Z.Z,children:function(s,t){return c.cloneElement(e,(0,l.Z)((0,l.Z)({},t),{},{className:x()(e.props.className,n&&"entered"!==s&&Ie,("entered"===s||"exiting"===s)&&"active",("entering"===s||"exiting"===s)&&ye)}))}}):c.cloneElement(e,{className:x()(e.props.className,n&&"active")})}))}),y&&(0,f.jsxs)(f.Fragment,{children:[(D||0!==T)&&(0,f.jsxs)(u.Z,{className:"".concat(Q,"-control-prev"),onClick:Ne,children:[H,X&&(0,f.jsx)("span",{className:"visually-hidden",children:X})]}),(D||T!==ve-1)&&(0,f.jsxs)(u.Z,{className:"".concat(Q,"-control-next"),onClick:ge,children:[V,Y&&(0,f.jsx)("span",{className:"visually-hidden",children:Y})]})]})]}))}));S.displayName="Carousel",S.defaultProps=y;var C=Object.assign(S,{Caption:j,Item:N}),T=n(9140),E=n(89743),L=n(2677),M=n(55615),F=function(){return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"Slides only"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["Here\u2019s a carousel with slides only. Note the presence of the ",(0,f.jsx)("code",{children:".d-block"}),"and ",(0,f.jsx)("code",{children:".img-fluid"})," on carousel images to prevent browser default image alignment."]}),(0,f.jsxs)(C,{indicators:!1,controls:!1,children:[(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},R=function(){return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"With controls"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"Adding in the previous and next controls:"}),(0,f.jsxs)(C,{indicators:!1,children:[(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},A=function(){var e=(0,c.useState)(0),s=(0,t.Z)(e,2),n=s[0],l=s[1];return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"With indicators"}),(0,f.jsx)("p",{className:"text-muted font-14",children:"You can also add the indicators to the carousel, alongside the controls, too."}),(0,f.jsxs)(C,{activeIndex:n,onSelect:function(e){l(e)},children:[(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},B=function(){return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"With captions"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["Add captions to your slides easily with the ",(0,f.jsx)("code",{children:".carousel-caption"})," element within any"," ",(0,f.jsx)("code",{children:".carousel-item"}),"."]}),(0,f.jsxs)(C,{indicators:!1,children:[(0,f.jsxs)(C.Item,{children:[(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"}),(0,f.jsxs)(C.Caption,{children:[(0,f.jsx)("h3",{children:"First slide label"}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,f.jsxs)(C.Item,{children:[(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"}),(0,f.jsxs)(C.Caption,{children:[(0,f.jsx)("h3",{children:"Second slide label"}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),(0,f.jsxs)(C.Item,{children:[(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"}),(0,f.jsxs)(C.Caption,{children:[(0,f.jsx)("h3",{children:"Third slide label"}),(0,f.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]})]})]})})},O=function(){return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"Crossfade"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["Add ",(0,f.jsx)("code",{children:".carousel-fade"})," to your carousel to animate slides with a fade transition instead of a slide."]}),(0,f.jsxs)(C,{fade:!0,indicators:!1,children:[(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},P=function(){return(0,f.jsx)(T.Z,{children:(0,f.jsxs)(T.Z.Body,{children:[(0,f.jsx)("h4",{className:"header-title",children:"Individual interval"}),(0,f.jsxs)("p",{className:"text-muted font-14",children:["Add ",(0,f.jsx)("code",{children:'data-bs-interval=""'})," to a ",(0,f.jsx)("code",{children:".carousel-item"})," to change the amount of time to delay between automatically cycling to the next item."]}),(0,f.jsxs)(C,{fade:!0,indicators:!1,children:[(0,f.jsx)(C.Item,{interval:1e3,children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?sea",alt:"First slide"})}),(0,f.jsx)(C.Item,{interval:2e3,children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?nature",alt:"Second slide"})}),(0,f.jsx)(C.Item,{children:(0,f.jsx)("img",{className:"d-block w-100",src:"https://source.unsplash.com/800x400/?island",alt:"Third slide"})})]})]})})},D=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(M.V1,{breadCrumbItems:[{label:"Base UI",path:"/ui/carousel"},{label:"Carousel",path:"/ui/carousel",active:!0}],title:"Carousel"}),(0,f.jsxs)(E.Z,{children:[(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(F,{})}),(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(R,{})})]}),(0,f.jsxs)(E.Z,{children:[(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(A,{})}),(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(B,{})})]}),(0,f.jsxs)(E.Z,{children:[(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(O,{})}),(0,f.jsx)(L.Z,{lg:6,children:(0,f.jsx)(P,{})})]})]})}}}]);
//# sourceMappingURL=6253.5463b51c.chunk.js.map