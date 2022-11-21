"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[3186],{23186:function(e,s,t){t.r(s),t.d(s,{default:function(){return O}});var a,l=t(93433),i=t(29439),n=t(72791),o=t(1413),r=t(45987),c=t(81694),d=t.n(c),m=t(49726),h=t(4942),u=t(27726),x=t(72709),j=t(80184),p=(a={},(0,h.Z)(a,u.d0,"showing"),(0,h.Z)(a,u.Ix,"showing show"),a),b=n.forwardRef((function(e,s){return(0,j.jsx)(x.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:s,transitionClasses:p}))}));b.displayName="ToastFade";var N=b,g=t(39007),v=t(10162),y=t(80473),Z=n.createContext({onClose:function(){}}),f=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],w=n.forwardRef((function(e,s){var t=e.bsPrefix,a=e.closeLabel,l=e.closeVariant,i=e.closeButton,c=e.className,m=e.children,h=(0,r.Z)(e,f);t=(0,v.vE)(t,"toast-header");var u=(0,n.useContext)(Z),x=(0,g.Z)((function(e){null==u||null==u.onClose||u.onClose(e)}));return(0,j.jsxs)("div",(0,o.Z)((0,o.Z)({ref:s},h),{},{className:d()(t,c),children:[m,i&&(0,j.jsx)(y.Z,{"aria-label":a,variant:l,onClick:x,"data-dismiss":"toast"})]}))}));w.displayName="ToastHeader",w.defaultProps={closeLabel:"Close",closeButton:!0};var R=w,k=(0,t(66543).Z)("toast-body"),T=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],A=n.forwardRef((function(e,s){var t=e.bsPrefix,a=e.className,l=e.transition,i=void 0===l?N:l,c=e.show,h=void 0===c||c,u=e.animation,x=void 0===u||u,p=e.delay,b=void 0===p?5e3:p,g=e.autohide,y=void 0!==g&&g,f=e.onClose,w=e.bg,R=(0,r.Z)(e,T);t=(0,v.vE)(t,"toast");var k=(0,n.useRef)(b),A=(0,n.useRef)(f);(0,n.useEffect)((function(){k.current=b,A.current=f}),[b,f]);var E=(0,m.Z)(),B=!(!y||!h),C=(0,n.useCallback)((function(){B&&(null==A.current||A.current())}),[B]);(0,n.useEffect)((function(){E.set(C,k.current)}),[E,C]);var I=(0,n.useMemo)((function(){return{onClose:f}}),[f]),M=!(!i||!x),G=(0,j.jsx)("div",(0,o.Z)((0,o.Z)({},R),{},{ref:s,className:d()(t,a,w&&"bg-".concat(w),!M&&(h?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return(0,j.jsx)(Z.Provider,{value:I,children:M&&i?(0,j.jsx)(i,{in:h,unmountOnExit:!0,children:G}):G})}));A.displayName="Toast";var E=Object.assign(A,{Body:k,Header:R}),B=["bsPrefix","position","className","as"],C={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},I=n.forwardRef((function(e,s){var t=e.bsPrefix,a=e.position,l=e.className,i=e.as,n=void 0===i?"div":i,c=(0,r.Z)(e,B);return t=(0,v.vE)(t,"toast-container"),(0,j.jsx)(n,(0,o.Z)((0,o.Z)({ref:s},c),{},{className:d()(t,a&&"position-absolute ".concat(C[a]),l)}))}));I.displayName="ToastContainer";var M=I,G=t(9140),U=t(89743),H=t(2677),S=t(43360),Q=t(21827),F=t(10765),z=t(55615),D=t(45184),Y=function(){var e=(0,F.OT)(!0),s=(0,i.Z)(e,4),t=s[0],a=s[3],o=(0,F.OT)(!0),r=(0,i.Z)(o,4),c=r[0],d=r[3],m=(0,F.OT)(!0),h=(0,i.Z)(m,4),u=h[0],x=h[3],p=(0,n.useState)([{time:"just now",desc:"See? Just like this."},{time:"2 seconds ago",desc:"Heads up, toasts will stack automatically"}]),b=(0,i.Z)(p,2),N=b[0],g=b[1];return(0,j.jsx)(G.Z,{children:(0,j.jsxs)(G.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Bootstrap Toasts"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"Push notifications to your visitors with a toast, a lightweight and easily customizable alert message."}),(0,j.jsxs)(U.Z,{children:[(0,j.jsxs)(H.Z,{md:6,children:[(0,j.jsx)("h5",{className:"mb-2",children:"Basic"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button."}),(0,j.jsx)("div",{className:"p-3",children:(0,j.jsxs)(E,{onClose:a,show:t,autohide:!0,children:[(0,j.jsxs)(E.Header,{children:[(0,j.jsx)("img",{src:D,alt:"brand-logo",height:"12",className:"me-1"}),(0,j.jsx)("strong",{className:"me-auto",children:"Hyper"}),(0,j.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,j.jsx)(E.Body,{children:"Hello, world! This is a toast message."})]})})]}),(0,j.jsxs)(H.Z,{md:6,children:[(0,j.jsx)("h5",{className:"mb-2",children:"Translucent"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we\u2019ll also attempt to blur the elements under a toast."}),(0,j.jsx)("div",{className:"p-3 bg-light",children:(0,j.jsxs)(E,{onClose:d,show:c,delay:8e3,autohide:!0,children:[(0,j.jsxs)(E.Header,{children:[(0,j.jsx)("img",{src:D,alt:"brand-logo",height:"12",className:"me-1"}),(0,j.jsx)("strong",{className:"me-auto",children:"Hyper"}),(0,j.jsx)("small",{className:"ms-5",children:"11 mins ago"})]}),(0,j.jsx)(E.Body,{children:"Hello, world! This is a toast message."})]})})]})]}),(0,j.jsxs)(U.Z,{children:[(0,j.jsxs)(H.Z,{md:6,className:"mt-4",children:[(0,j.jsx)("h5",{className:"mb-2",children:"Stacking"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"When you have multiple toasts, we default to vertiaclly stacking them in a readable manner."}),(0,j.jsx)("div",{className:"p-3",children:(0,j.jsx)("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"relative",minHeight:"200px"},children:(0,j.jsx)("div",{className:"toast-container",style:{position:"absolute",top:0,right:0},children:N.map((function(e,s){return(0,j.jsxs)(E,{onClose:function(){return function(e){var s=(0,l.Z)(N);s.splice(e,1),g(s)}(s)},delay:5e3,autohide:!0,children:[(0,j.jsxs)(E.Header,{children:[(0,j.jsx)("img",{src:D,alt:"brand-logo",height:"12",className:"me-1"}),(0,j.jsx)("strong",{className:"me-auto",children:"Hyper"}),(0,j.jsx)("small",{className:"ms-5",children:e.time})]}),(0,j.jsx)(E.Body,{children:e.desc})]},s.toString())}))})})})]}),(0,j.jsxs)(H.Z,{md:6,className:"mt-4",children:[(0,j.jsx)("h5",{className:"mb-2",children:"Placement"}),(0,j.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the ",(0,j.jsx)("code",{children:".toast"}),"."]}),(0,j.jsx)("div",{className:"p-3",children:(0,j.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"d-flex justify-content-center align-items-center",style:{minHeight:"200px"},children:(0,j.jsxs)(E,{onClose:x,show:u,delay:6e3,autohide:!0,children:[(0,j.jsxs)(E.Header,{children:[(0,j.jsx)("img",{src:D,alt:"brand-logo",height:"12",className:"me-1"}),(0,j.jsx)("strong",{className:"me-auto",children:"Hyper"}),(0,j.jsx)("small",{className:"ms-5",children:"1 mins ago"})]}),(0,j.jsx)(E.Body,{children:"Heads up, toasts will stack automatically"})]})})})]})]})]})})},P=function(){var e=(0,F.OT)(!0),s=(0,i.Z)(e,4),t=s[0],a=s[3],l=(0,F.OT)(!0),n=(0,i.Z)(l,4),o=n[0],r=n[3],c=(0,F.OT)(!0),d=(0,i.Z)(c,4),m=d[0],h=d[3],u=(0,F.OT)(!0),x=(0,i.Z)(u,4),p=x[0],b=x[3];return(0,j.jsx)(G.Z,{children:(0,j.jsxs)(G.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Custom content"}),(0,j.jsx)("p",{className:"text-muted",children:"Alternatively, you can also add additional controls and components to toasts."}),(0,j.jsxs)(E,{className:"d-flex align-items-center mt-4",show:t,onClose:a,delay:3e3,autohide:!0,children:[(0,j.jsx)(E.Body,{children:"Hello, world! This is a toast message."}),(0,j.jsx)(S.Z,{variant:"",onClick:a,className:"btn-close ms-auto me-2"})]}),(0,j.jsxs)(E,{className:"d-flex align-items-center text-white bg-primary border-0 mt-4",show:o,onClose:r,delay:6e3,autohide:!0,children:[(0,j.jsx)(E.Body,{children:"Hello, world! This is a toast message."}),(0,j.jsx)(S.Z,{variant:"",onClick:r,className:"btn-close btn-close-white ms-auto me-2"})]}),(0,j.jsx)(E,{className:"mt-4",show:m,onClose:h,delay:8e3,autohide:!0,children:(0,j.jsxs)(E.Body,{children:["Hello, world! This is a toast message.",(0,j.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,j.jsx)(S.Z,{variant:"primary",className:"btn-sm me-1",children:"Take action"}),(0,j.jsx)(S.Z,{variant:"secondary",onClick:h,className:"btn-sm",children:"Close"})]})]})}),(0,j.jsx)(E,{className:"text-white bg-primary mt-4",show:p,onClose:b,delay:1e4,autohide:!0,children:(0,j.jsxs)(E.Body,{children:["Hello, world! This is a toast message.",(0,j.jsxs)("div",{className:"mt-2 pt-2 border-top",children:[(0,j.jsx)(S.Z,{variant:"light",className:"btn-sm me-1",children:"Take action"}),(0,j.jsx)(S.Z,{variant:"secondary",onClick:b,className:"btn-sm",children:"Close"})]})]})})]})})},J=function(){var e=(0,n.useState)("top-start"),s=(0,i.Z)(e,2),t=s[0],a=s[1];return(0,j.jsx)(G.Z,{children:(0,j.jsxs)(G.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Placement"}),(0,j.jsxs)("p",{className:"text-muted font-14",children:["Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you\u2019re only ever going to show one toast at a time, put the positioning styles right on the",(0,j.jsx)("code",{children:".toast"}),"."]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{htmlFor:"selectToastPlacement",children:"Toast placement"}),(0,j.jsx)(Q.Z.Select,{id:"selectToastPlacement",className:"mt-2",onChange:function(e){return a(e.currentTarget.value)},children:(["top-start","top-center","top-end","middle-start","middle-center","middle-end","bottom-start","bottom-center","bottom-end"]||[]).map((function(e){return(0,j.jsx)("option",{value:e,children:e},e)}))})]}),(0,j.jsx)("div",{"aria-live":"polite","aria-atomic":"true",className:"bg-light position-relative",style:{minHeight:"294px"},children:(0,j.jsx)(M,{className:"p-3",position:t,children:(0,j.jsxs)(E,{children:[(0,j.jsxs)(E.Header,{closeButton:!1,children:[(0,j.jsx)("img",{src:D,className:"me-1",alt:"",height:"12"}),(0,j.jsx)("strong",{className:"me-auto",children:"UBold"}),(0,j.jsx)("small",{children:"11 mins ago"})]}),(0,j.jsx)(E.Body,{children:"Hello, world! This is a toast message."})]})})})]})})},O=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(z.V1,{breadCrumbItems:[{label:"Base UI",path:"/ui/toasts"},{label:"Notifications",path:"/ui/notifications",active:!0}],title:"Notifications"}),(0,j.jsx)(U.Z,{children:(0,j.jsx)(H.Z,{children:(0,j.jsx)(Y,{})})}),(0,j.jsxs)(U.Z,{children:[(0,j.jsx)(H.Z,{lg:6,children:(0,j.jsx)(P,{})}),(0,j.jsx)(H.Z,{lg:6,children:(0,j.jsx)(J,{})})]})]})}},80473:function(e,s,t){var a=t(1413),l=t(45987),i=t(52007),n=t.n(i),o=t(72791),r=t(81694),c=t.n(r),d=t(80184),m=["className","variant"],h={"aria-label":n().string,onClick:n().func,variant:n().oneOf(["white"])},u=o.forwardRef((function(e,s){var t=e.className,i=e.variant,n=(0,l.Z)(e,m);return(0,d.jsx)("button",(0,a.Z)({ref:s,type:"button",className:c()("btn-close",i&&"btn-close-".concat(i),t)},n))}));u.displayName="CloseButton",u.propTypes=h,u.defaultProps={"aria-label":"Close"},s.Z=u},45184:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAkCAYAAADGrhlwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyREY5MzJEM0NBRDExRTg5MTNDRUUxRURERTM3MUI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyREY5MzJFM0NBRDExRTg5MTNDRUUxRURERTM3MUI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzJERjkzMkIzQ0FEMTFFODkxM0NFRTFFRERFMzcxQjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzJERjkzMkMzQ0FEMTFFODkxM0NFRTFFRERFMzcxQjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bpEsvAAADNElEQVR42tyZXUhTYRjHn03npmvOTVSW5aBBWDcGQVoUdjMqwmiQd+FFd2GRBRJddRkRQhd2VVdR4EVkJEHhVRCpXUhSkEYKGjRsuU+nm9uy55nvgbX24XnO5l76w48Jcp7tf56Pc9731fX3PQeVsiOnkW7kEFIlPkkfkZT4fIu8nva4/FnXdyGdSAfSjjiRRvG/FWQRmUVmkClkUs2P06kw5EEuI26VN2A8ajc9neturcG/e8TNMGzz2gTdFGQMeYH4il1QvY2gR5D7yFFgyL/X4va3WdzAk0HcBKIXeYw84RqiUhpCrnF+SdxsAN8+K1IPm3odlEB0U04ih5FhZF6NISsyIspDtaI2Eyzvb4DgbjOUWJSxAdF3d0WPFTVEZt4jB7lmvAdsEG6pgzKK+pm+4Ha2KX2OMhvhmqEyo8yU2YyiU8hNxFXI0BC3zEjUM2Uos2KZupLP0HHuABDTLD0AKqB+5GIuQ3e4EZPGKsDRXKppxhkUfUhTpiGPyBBLQYcZws21UEHRSD+faWhQS7SQow4kUI9iqI37FpAe03YTZkcKQzTMusjQWS1RojZjpXonVy916rX0DmndagSJ1KHnPkQVxSwGmQy1Kz3E1kZdtUyGnGRol5YIyZoqmQw16uE/Exla1RKgeiMlk58VMrSkJULNWlImQ4tkaE5LBFMkIZOhWb3YnWGrNhSXydAMGXqlJYI5EAfd700ZzFCpTCk9NME25I9B/c81GQzRdtekMrbvaYlk9UphaCxz+TCKvONGavBGMUvrlTQzDlsbkX+tWG+xn0XxFNiXIpXqJeod2oD0ZRuiDA1zo9q/R6BpIVwJQw8gYzc1+9VnQKSPpaaFEDT8iO6kmdHsJGQboveYXu7D1hhNQMvXINQv78iQeANbu6fzhQyltwiQY9xMmQMxcHwJlDtTlJl/dk3zGSLRmc4Zbk+RqdbPK9D8LVTqQUEDgE5CBnOZKWRIKb+ryAnkA6f89nz6Bc5pX6lGOlXMJeQ65Dl5SE/cbQSi6UcnbheQG6Byhwin34RxNfEo3NxKK0EpDrwUPRPQkv0cbB1DFjqSJF5Oe1yZy5OHUOYjyT8CDADvmNezrOaGUAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=3186.4750bebf.chunk.js.map