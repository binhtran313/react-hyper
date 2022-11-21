"use strict";(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[4616],{59270:function(e,n,t){t(72791);var r=t(47022),a=t(89743),s=t(2677),i=t(9140),o=t(43504),c=t(33168),l=t(74427),u=t(20329),d=t(80184);n.Z=function(e){var n=e.bottomLinks,t=e.children,f=(0,c.$)().t;return(0,u.aB)(),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,d.jsx)(r.Z,{children:(0,d.jsx)(a.Z,{className:"justify-content-center",children:(0,d.jsxs)(s.Z,{md:8,lg:6,xl:5,xxl:4,children:[(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(i.Z.Header,{className:"pt-4 pb-4 text-center bg-primary",children:(0,d.jsx)(o.rU,{to:"/",children:(0,d.jsx)("span",{children:(0,d.jsx)("img",{src:l,alt:"",height:"18"})})})}),(0,d.jsx)(i.Z.Body,{className:"p-4",children:t})]}),n]})})})}),(0,d.jsx)("footer",{className:"footer footer-alt",children:f("2018 - ".concat((new Date).getFullYear()," \xa9 Hyper - Coderthemes.com"))})]})}},34616:function(e,n,t){t.r(n);var r=t(43504),a=t(16871),s=t(89743),i=t(2677),o=t(2469),c=t(43360),l=t(33168),u=t(55615),d=t(59270),f=t(20329),p=t(80184),m=function(){var e=(0,l.$)().t;return(0,p.jsx)(s.Z,{className:"mt-3",children:(0,p.jsx)(i.Z,{className:"text-center",children:(0,p.jsxs)("p",{className:"text-muted",children:[e("Already have account?")," ",(0,p.jsx)(r.rU,{to:"/account/login",className:"text-muted ms-1",children:(0,p.jsx)("b",{children:e("Log In")})})]})})})};n.default=function(){var e=(0,l.$)().t,n=(0,f.mr)(),t=n.loading,r=n.userSignUp,s=n.error,i=n.schemaResolver,h=n.onSubmit;return(0,p.jsxs)(p.Fragment,{children:[r?(0,p.jsx)(a.Fg,{to:"/account/confirm"}):null,(0,p.jsxs)(d.Z,{bottomLinks:(0,p.jsx)(m,{}),children:[(0,p.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,p.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("Free Sign Up")}),(0,p.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute.")})]}),s&&(0,p.jsx)(o.Z,{variant:"danger",className:"my-2",children:s}),(0,p.jsxs)(u.JJ,{onSubmit:h,resolver:i,defaultValues:{},children:[(0,p.jsx)(u.yt,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,p.jsx)(u.yt,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,p.jsx)(u.yt,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,p.jsx)(u.yt,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3 text-muted"}),(0,p.jsx)("div",{className:"mb-3 mb-0 text-center",children:(0,p.jsx)(c.Z,{variant:"primary",type:"submit",disabled:t,children:e("Sign Up")})})]})]})]})}},20329:function(e,n,t){t.d(n,{aB:function(){return a},yq:function(){return u},MH:function(){return d},f0:function(){return p},aU:function(){return m},mr:function(){return h}});var r=t(72791);function a(){(0,r.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[])}var s=t(33168),i=t(65057),o=t(61265),c=t(50061),l=t(10765);function u(){var e=(0,l.Sc)(),n=e.dispatch,t=e.appSelector,a=(0,s.$)().t;(0,r.useEffect)((function(){n((0,c.Li)())}),[n]);var u=t((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,passwordReset:e.Auth.passwordReset,resetPasswordSuccess:e.Auth.resetPasswordSuccess}}));return{loading:u.loading,passwordReset:u.passwordReset,resetPasswordSuccess:u.resetPasswordSuccess,error:u.error,schemaResolver:(0,o.X)(i.Ry().shape({username:i.Z_().required(a("Please enter Username"))})),onSubmit:function(e){n((0,c.gF)(e.username))}}}function d(){var e=(0,s.$)().t;return{schemaResolver:(0,o.X)(i.Ry().shape({password:i.Z_().required(e("Please enter Password"))})),onSubmit:function(e){console.log(e)}}}var f=t(16871);function p(){var e=(0,s.$)().t,n=(0,l.Sc)(),t=n.dispatch,a=n.appSelector,u=(0,f.TH)(),d="/";if(u.state){var p=u.state.from;d=p?p.pathname:"/"}(0,r.useEffect)((function(){t((0,c.Li)())}),[t]);var m=a((function(e){return{loading:e.Auth.loading,user:e.Auth.user,error:e.Auth.error,userLoggedIn:e.Auth.userLoggedIn}}));return{loading:m.loading,userLoggedIn:m.userLoggedIn,user:m.user,error:m.error,schemaResolver:(0,o.X)(i.Ry().shape({username:i.Z_().required(e("Please enter Username")),password:i.Z_().required(e("Please enter Password"))})),onSubmit:function(e){t((0,c.pH)(e.username,e.password))},redirectUrl:d}}function m(){var e=(0,l.Sc)().dispatch;(0,r.useEffect)((function(){e((0,c.TX)())}),[e])}function h(){var e=(0,s.$)().t,n=(0,l.Sc)(),t=n.dispatch,a=(0,n.appSelector)((function(e){return{loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp}})),u=a.loading,d=a.userSignUp,f=a.error;(0,r.useEffect)((function(){t((0,c.Li)())}),[t]);return{loading:u,userSignUp:d,error:f,schemaResolver:(0,o.X)(i.Ry().shape({fullname:i.Z_().required(e("Please enter Fullname")),email:i.Z_().required("Please enter Email").email("Please enter valid Email"),password:i.Z_().required(e("Please enter Password"))})),onSubmit:function(e){t((0,c.EL)(e.fullname,e.email,e.password))}}}},2469:function(e,n,t){var r=t(1413),a=t(45987),s=t(81694),i=t.n(s),o=t(72791),c=t(80239),l=t(39007),u=t(16445),d=t(10162),f=t(72709),p=t(80473),m=t(27472),h=t(66543),b=t(80184),g=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],v=(0,m.Z)("h4");v.displayName="DivStyledAsH4";var y=(0,h.Z)("alert-heading",{Component:v}),x=(0,h.Z)("alert-link",{Component:u.Z}),j={variant:"primary",show:!0,transition:f.Z,closeLabel:"Close alert"},N=o.forwardRef((function(e,n){var t=(0,c.Ch)(e,{show:"onClose"}),s=t.bsPrefix,o=t.show,u=t.closeLabel,m=t.closeVariant,h=t.className,v=t.children,y=t.variant,x=t.onClose,j=t.dismissible,N=t.transition,Z=(0,a.Z)(t,g),w=(0,d.vE)(s,"alert"),R=(0,l.Z)((function(e){x&&x(!1,e)})),S=!0===N?f.Z:N,C=(0,b.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},S?void 0:Z),{},{ref:n,className:i()(h,w,y&&"".concat(w,"-").concat(y),j&&"".concat(w,"-dismissible")),children:[j&&(0,b.jsx)(p.Z,{onClick:R,"aria-label":u,variant:m}),v]}));return S?(0,b.jsx)(S,(0,r.Z)((0,r.Z)({unmountOnExit:!0},Z),{},{ref:void 0,in:o,children:C})):o?C:null}));N.displayName="Alert",N.defaultProps=j,n.Z=Object.assign(N,{Link:x,Heading:y})},80473:function(e,n,t){var r=t(1413),a=t(45987),s=t(52007),i=t.n(s),o=t(72791),c=t(81694),l=t.n(c),u=t(80184),d=["className","variant"],f={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},p=o.forwardRef((function(e,n){var t=e.className,s=e.variant,i=(0,a.Z)(e,d);return(0,u.jsx)("button",(0,r.Z)({ref:n,type:"button",className:l()("btn-close",s&&"btn-close-".concat(s),t)},i))}));p.displayName="CloseButton",p.propTypes=f,p.defaultProps={"aria-label":"Close"},n.Z=p},33168:function(e,n,t){t.d(n,{$:function(){return m}});var r=t(29439),a=t(4942),s=t(72791),i=t(74909);function o(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),o.apply(void 0,n))}function u(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function d(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return l("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,s=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!i(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!i(r,e)||a&&!i(s,e))))}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,a=(0,s.useContext)(i.OO)||{},o=a.i18n,c=a.defaultNS,f=t||o||(0,i.nI)();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new i.zv),!f){l("You will need to pass in an i18next instance by using initReactI18next");var m=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[m,{},!1];return h.t=m,h.i18n={},h.ready=!1,h}f.options.react&&void 0!==f.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=p(p(p({},(0,i.JP)()),f.options.react),n),g=b.useSuspense,v=b.keyPrefix,y=e||c||f.options&&f.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(y);var x=(f.isInitialized||f.initializedStoreOnce)&&y.every((function(e){return d(e,f,b)}));function j(){return f.getFixedT(null,"fallback"===b.nsMode?y:y[0],v)}var N=(0,s.useState)(j),Z=(0,r.Z)(N,2),w=Z[0],R=Z[1],S=(0,s.useRef)(!0);(0,s.useEffect)((function(){var e=b.bindI18n,n=b.bindI18nStore;function t(){S.current&&R(j)}return S.current=!0,x||g||u(f,y,(function(){S.current&&R(j)})),e&&f&&f.on(e,t),n&&f&&f.store.on(n,t),function(){S.current=!1,e&&f&&e.split(" ").forEach((function(e){return f.off(e,t)})),n&&f&&n.split(" ").forEach((function(e){return f.store.off(e,t)}))}}),[f,y.join()]);var C=(0,s.useRef)(!0);(0,s.useEffect)((function(){S.current&&!C.current&&R(j),C.current=!1}),[f]);var I=[w,f,x];if(I.t=w,I.i18n=f,I.ready=x,x)return I;if(!x&&!g)return I;throw new Promise((function(e){u(f,y,(function(){e()}))}))}},74427:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAAAkCAYAAACZv5Y5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRTQ0NzJFMjc4QzExRThCRjM5QzgxRkFCODM4RENBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRTQ0NzJGMjc4QzExRThCRjM5QzgxRkFCODM4RENBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JFNDQ3MkMyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JFNDQ3MkQyNzhDMTFFOEJGMzlDODFGQUI4MzhEQ0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4bJkp8AAAICklEQVR42uxdX2gURxj/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"}}]);
//# sourceMappingURL=4616.b386571c.chunk.js.map