"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[426],{40426:function(e,s,t){t.r(s);var n=t(93433),i=t(29439),a=t(72791),r=t(9140),l=t(2469),c=t(43360),o=t(89743),d=t(2677),h=t(43504),u=t(81694),x=t.n(u),m=t(55615),j=t(80184),g=["primary","secondary","success","danger","warning","info","light","dark"],f=function(){return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Default Alert"}),(0,j.jsx)("p",{className:"text-muted font-14 mb-3",children:"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts are available for any length of text, as well as an optional dismiss button."}),(0,j.jsxs)("p",{children:["For proper styling, use one of the eight",(0,j.jsx)("strong",{children:"required"})," contextual classes (e.g.,",(0,j.jsx)("code",{children:".alert-success"}),"). For background color use class",(0,j.jsx)("code",{children:".bg-* "}),", ",(0,j.jsx)("code",{children:".text-white "})]}),g.map((function(e,s){return(0,j.jsxs)(l.Z,{variant:e,className:x()("light"===e?"text-dark":"text-"+e),children:[(0,j.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},s.toString())}))]})})},p=function(){var e=(0,a.useState)(["primary","secondary","success","danger","warning","info","light","dark"]),s=(0,i.Z)(e,2),t=s[0],c=s[1];return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Dismissing Alerts"}),(0,j.jsxs)("p",{className:"text-muted font-14 mb-3",children:["Add a dismiss button and the ",(0,j.jsx)("code",{children:".alert-dismissible"})," class, which adds extra padding to the right of the alert and positions the ",(0,j.jsx)("code",{children:".btn-close"})," button."]}),t.map((function(e,s){return(0,j.jsxs)(l.Z,{variant:"",className:x()("bg-"+e,"light"===e?"text-dark":"text-white",{"text-light":["dark","secondary"].includes(e)}),onClose:function(){return function(e){var s=(0,n.Z)(t);s.splice(e,1),c(s)}(s)},dismissible:!0,children:[(0,j.jsxs)("strong",{children:[e," - "]})," A simple ",e," alert\u2014check it out!"]},s.toString())}))]})})},Z=function(){var e=(0,a.useState)(["success","danger","warning","info"]),s=(0,i.Z)(e,1)[0],t=["dripicons-checkmark","dripicons-wrong","dripicons-warning","dripicons-information"];return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Icons with Alerts"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"You can also include additional elements like icons, heading, etc along side the actual message."}),s.map((function(e,s){return(0,j.jsxs)(l.Z,{variant:e,children:[(0,j.jsx)("i",{className:x()(t[s],"me-2")}),"This is a",(0,j.jsx)("strong",{children:e})," alert - check it out!"]},s.toString())}))]})})},b=function(){return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Additional content"}),(0,j.jsx)("p",{className:"text-muted font-14",children:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."}),(0,j.jsxs)(l.Z,{variant:"success",children:[(0,j.jsx)("h4",{className:"alert-heading",children:"Well done!"}),(0,j.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),(0,j.jsx)("hr",{}),(0,j.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})})},v=function(){return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Custom Alerts"}),(0,j.jsxs)("p",{className:"text-muted font-14",children:["Display alert with transparent background and with contextual text color. Use classes"," ",(0,j.jsx)("code",{children:".bg-white"}),", and ",(0,j.jsx)("code",{children:".text-*"}),". E.g. ",(0,j.jsx)("code",{children:"bg-white text-primary"}),"."]}),g.map((function(e,s){return(0,j.jsxs)(l.Z,{variant:e,className:x()("bg-transparent","text-"+e),children:["This is a ",(0,j.jsx)("strong",{children:e})," alert\u2014check it out!"]},s.toString())}))]})})},y=function(){return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Link Color"}),(0,j.jsxs)("p",{className:"text-muted font-14",children:["Use the ",(0,j.jsx)("code",{children:".alert-link"})," utility class to quickly provide matching colored links within any alert."]}),g.map((function(e,s){return(0,j.jsxs)(l.Z,{variant:e,children:["A simple ",e," alert with"," ",(0,j.jsx)(h.rU,{to:"#",className:"alert-link",children:"an example link"}),". Give it a click if you like."]},s.toString())}))]})})},k=function(){var e=(0,a.useState)([]),s=(0,i.Z)(e,2),t=s[0],o=s[1];return(0,j.jsx)(r.Z,{children:(0,j.jsxs)(r.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Alert Live example"}),(0,j.jsx)("p",{className:"sub-header",children:"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button."}),(t||[]).map((function(e,s){return(0,j.jsx)(l.Z,{variant:"success",onClose:function(){return function(e){var s=(0,n.Z)(t);s.splice(e,1),o(s)}(s)},dismissible:!0,children:"Nice, you triggered this alert message!"},s.toString())})),(0,j.jsx)(c.Z,{onClick:function(){return o((function(e){return[].concat((0,n.Z)(e),[e.length])}))},children:"Show live alert"})]})})};s.default=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(m.V1,{breadCrumbItems:[{label:"Base UI",path:"/ui/alerts"},{label:"Alerts",path:"/ui/alerts",active:!0}],title:"Alerts"}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(d.Z,{lg:6,children:(0,j.jsx)(f,{})}),(0,j.jsx)(d.Z,{lg:6,children:(0,j.jsx)(p,{})})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(d.Z,{lg:6,children:(0,j.jsx)(v,{})}),(0,j.jsx)(d.Z,{lg:6,children:(0,j.jsx)(y,{})})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(d.Z,{children:(0,j.jsx)(Z,{})}),(0,j.jsx)(d.Z,{children:(0,j.jsx)(b,{})})]}),(0,j.jsx)(o.Z,{children:(0,j.jsx)(d.Z,{lg:6,children:(0,j.jsx)(k,{})})})]})}},2469:function(e,s,t){var n=t(1413),i=t(45987),a=t(81694),r=t.n(a),l=t(72791),c=t(80239),o=t(39007),d=t(16445),h=t(10162),u=t(72709),x=t(80473),m=t(27472),j=t(66543),g=t(80184),f=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],p=(0,m.Z)("h4");p.displayName="DivStyledAsH4";var Z=(0,j.Z)("alert-heading",{Component:p}),b=(0,j.Z)("alert-link",{Component:d.Z}),v={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},y=l.forwardRef((function(e,s){var t=(0,c.Ch)(e,{show:"onClose"}),a=t.bsPrefix,l=t.show,d=t.closeLabel,m=t.closeVariant,j=t.className,p=t.children,Z=t.variant,b=t.onClose,v=t.dismissible,y=t.transition,k=(0,i.Z)(t,f),w=(0,h.vE)(a,"alert"),N=(0,o.Z)((function(e){b&&b(!1,e)})),C=!0===y?u.Z:y,A=(0,g.jsxs)("div",(0,n.Z)((0,n.Z)({role:"alert"},C?void 0:k),{},{ref:s,className:r()(j,w,Z&&"".concat(w,"-").concat(Z),v&&"".concat(w,"-dismissible")),children:[v&&(0,g.jsx)(x.Z,{onClick:N,"aria-label":d,variant:m}),p]}));return C?(0,g.jsx)(C,(0,n.Z)((0,n.Z)({unmountOnExit:!0},k),{},{ref:void 0,in:l,children:A})):l?A:null}));y.displayName="Alert",y.defaultProps=v,s.Z=Object.assign(y,{Link:b,Heading:Z})},80473:function(e,s,t){var n=t(1413),i=t(45987),a=t(52007),r=t.n(a),l=t(72791),c=t(81694),o=t.n(c),d=t(80184),h=["className","variant"],u={"aria-label":r().string,onClick:r().func,variant:r().oneOf(["white"])},x=l.forwardRef((function(e,s){var t=e.className,a=e.variant,r=(0,i.Z)(e,h);return(0,d.jsx)("button",(0,n.Z)({ref:s,type:"button",className:o()("btn-close",a&&"btn-close-".concat(a),t)},r))}));x.displayName="CloseButton",x.propTypes=u,x.defaultProps={"aria-label":"Close"},s.Z=x}}]);
//# sourceMappingURL=426.fcfa3fda.chunk.js.map