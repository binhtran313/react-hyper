"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[6547],{66078:function(e,n,t){t.r(n);var s=t(89743),l=t(2677),r=t(9140),a=t(3709),i=t.n(a),c=(t(74204),t(55615)),d=t(6315),u=t(80184);n.default=function(){var e=(0,d.G)(),n=e.selectedVals,t=e.selectedRanges,a=e.onSlide,x=e.onSlide2;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.V1,{breadCrumbItems:[{label:"Extended UI",path:"/ui/rangesliders"},{label:"Range Sliders",path:"/ui/rangesliders",active:!0}],title:"Range Sliders"}),(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(l.Z,{xl:6,children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Single"}),(0,u.jsx)("p",{className:"text-muted font-14",children:"Slider with single selecrtor"}),(0,u.jsx)(i(),{range:{min:0,max:100},start:[20],connect:!0,onSlide:function(e,n,t,s,l){return a(1,t,l)}}),(0,u.jsxs)("p",{className:"mt-2 mb-0",children:["Value:"," ",n?(0,u.jsxs)("span",{children:[n[1].textValue,", \xa0",n[1].percent,"%"]}):null]})]})})}),(0,u.jsx)(l.Z,{xl:6,children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Range"}),(0,u.jsx)("p",{className:"text-muted font-14",children:"Slider with range selecrtor"}),(0,u.jsx)(i(),{range:{min:10,max:150},start:[20,45],connect:!0,onSlide:function(e,n,t,s,l){return x(1,t)}}),(0,u.jsxs)("p",{className:"mt-2 mb-0",children:["Value: ",t?(0,u.jsx)("span",{children:t[1]}):null]})]})})})]}),(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(l.Z,{xl:6,children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Slider Step"}),(0,u.jsx)("p",{className:"text-muted font-14",children:"Slider with step value"}),(0,u.jsx)(i(),{range:{min:0,max:100},start:[20],step:10,connect:!0,onSlide:function(e,n,t,s,l){return a(2,t,l)}}),(0,u.jsxs)("p",{className:"mt-2 mb-0",children:["Value:"," ",n?(0,u.jsxs)("span",{children:[n[2].textValue,", \xa0",n[2].percent,"%"]}):null]})]})})}),(0,u.jsx)(l.Z,{xl:6,children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsx)("h4",{className:"header-title",children:"Range Slider with Steps"}),(0,u.jsx)("p",{className:"text-muted font-14",children:"Slider with range selecrtor with fixed step value"}),(0,u.jsx)(i(),{range:{min:10,max:150},start:[20,45],step:15,connect:!0,onSlide:function(e,n,t,s,l){return x(2,t)}}),(0,u.jsxs)("p",{className:"mt-2 mb-0",children:["Value: ",t?(0,u.jsx)("span",{children:t[2]}):null]})]})})})]})]})}},6315:function(e,n,t){t.d(n,{d:function(){return a},G:function(){return c}});var s=t(29439),l=t(10765),r=t(72791);function a(){var e=(0,l.OT)(),n=(0,s.Z)(e,2),t=n[0],a=n[1],i=(0,r.useState)(),c=(0,s.Z)(i,2),d=c[0],u=c[1],x=(0,r.useState)(""),h=(0,s.Z)(x,2),o=h[0],m=h[1],j=(0,r.useState)(!1),p=(0,s.Z)(j,2),S=p[0],f=p[1];return{isOpen:t,size:d,className:o,scroll:S,toggleModal:a,openModalWithSize:function(e){u(e),m(""),f(!1),a()},openModalWithClass:function(e){m(e),f(!1),a()},openModalWithScroll:function(){f(!0),u("sm"),m(""),a()}}}var i=t(1413);function c(){var e=(0,r.useState)({1:{textValue:20,percent:20},2:{textValue:20,percent:20}}),n=(0,s.Z)(e,2),t=n[0],l=n[1],a=(0,r.useState)({1:"20-45",2:"20-45"}),c=(0,s.Z)(a,2),d=c[0],u=c[1];return{selectedVals:t,selectedRanges:d,onSlide:function(e,n,s){var r=(0,i.Z)({},t);r[e]={textValue:Number(n[0].toFixed(2)),percent:Number(s[0].toFixed(2))},l(r)},onSlide2:function(e,n){var t=(0,i.Z)({},d);t[e]=n[0].toFixed(2)+"-"+n[1].toFixed(2),u(t)}}}}}]);
//# sourceMappingURL=6547.0808b09f.chunk.js.map