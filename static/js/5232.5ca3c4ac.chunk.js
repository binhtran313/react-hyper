(self.webpackChunkhyper_react_ts=self.webpackChunkhyper_react_ts||[]).push([[5232],{67509:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var s=n(1413),i=n(89743),l=n(2677),a=n(99410),r=n(21827),c=n(55353),d=n(43504),o=n(39658),m=n(29439),u=n(72791),h=n(8396),x=n(12576),f=n(17858),p=n(9140),j=n(81694),b=n.n(j),g=n(10765),N=n(80184),k=function(e){var t=e.task,n=e.selectTask,s=(0,o.Vg)(t),a=s.completed,r=s.markCompleted;return(0,N.jsxs)(i.Z,{className:"justify-content-sm-between mt-2",children:[(0,N.jsx)(l.Z,{sm:6,className:"mb-2 mb-sm-0",children:(0,N.jsxs)("div",{className:"form-check",children:[(0,N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"task-".concat(t.id),checked:a,onChange:function(e){return r(e,n)}}),(0,N.jsx)("label",{className:"form-check-label",htmlFor:"task-".concat(t.id),onClick:function(){return n(t)},children:t.title})]})}),(0,N.jsx)(l.Z,{sm:6,children:(0,N.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,N.jsx)("div",{children:(0,N.jsx)(h.Z,{placement:"right",overlay:(0,N.jsxs)(x.Z,{children:["Assigned to ",t.assigned_to]}),children:(0,N.jsx)("img",{src:t.assignee_avatar,alt:"",className:"avatar-xs rounded-circle me-1",id:"task-avatar-".concat(t.id)})})}),(0,N.jsx)("div",{children:(0,N.jsxs)("ul",{className:"list-inline font-13 text-end",children:[(0,N.jsxs)("li",{className:"list-inline-item",children:[(0,N.jsx)("i",{className:"uil uil-schedule font-16 me-1"})," ",t.due_date]}),(0,N.jsxs)("li",{className:"list-inline-item ms-1",children:[(0,N.jsx)("i",{className:"uil uil-align-alt font-16 me-1"})," ",t.checklists.filter((function(e){return e.completed})).length," / ",t.checklists.length]}),(0,N.jsxs)("li",{className:"list-inline-item ms-1",children:[(0,N.jsx)("i",{className:"uil uil-comment-message font-16 me-1"})," ",t.comments.length]}),(0,N.jsx)("li",{className:"list-inline-item ms-2",children:(0,N.jsx)("span",{className:b()("badge",{"badge-danger-lighten":"High"===t.priority,"badge-info-lighten":"Medium"===t.priority,"badge-success-lighten":"Low"===t.priority},"p-1"),children:t.priority})})]})})]})})]})},v=function(e){var t=e.title,n=e.tasks,s=e.selectTask,i=(0,g.OT)(!0),l=(0,m.Z)(i,2),a=l[0],r=l[1],c=(0,u.useState)(n),o=(0,m.Z)(c,1)[0];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("h5",{className:"m-0 pb-2",children:(0,N.jsxs)(d.rU,{className:"text-dark",to:"#",onClick:r,children:[(0,N.jsx)("i",{className:b()("uil",{"uil-angle-down":a,"uil-angle-right":!a},"font-18")}),t," ",(0,N.jsxs)("span",{className:"text-muted",children:["(",o.length,")"]})]})}),(0,N.jsx)(f.Z,{in:a,children:(0,N.jsx)(p.Z,{className:"mb-0",children:(0,N.jsx)(p.Z.Body,{className:"pb-1 pt-2",children:o.map((function(e,t){return(0,N.jsx)(k,{selectTask:s,task:e},t.toString())}))})})})]})},y=n(55615),w=n(51802),Z=(n(25646),function(e){var t=(0,o.Vg)(e),n=t.completed,s=t.editorState,a=t.onEditorStateChange,r=t.markCompleted;return(0,N.jsx)(p.Z,{children:(0,N.jsxs)(p.Z.Body,{children:[(0,N.jsx)(y.ll,{containerClass:"d-flex align-items-center justify-content-between",title:(0,N.jsxs)("div",{className:"form-check float-start",children:[(0,N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"completedCheck",checked:n,onChange:r}),(0,N.jsx)("label",{className:"form-check-label",htmlFor:"completedCheck",children:"Mark as completed"})]}),icon:"mdi mdi-dots-horizontal",menuItems:[{label:"Attachment",icon:"uil uil-file-upload"},{label:"Edit",icon:"uil uil-edit"},{label:"Mark as Duplicate",icon:"uil uil-file-copy-alt"},{label:"Delete",icon:"uil uil-trash-alt",variant:"text-danger",hasDivider:!0}]}),(0,N.jsx)("hr",{className:"mt-1 mb-2"}),(0,N.jsx)(i.Z,{children:(0,N.jsxs)(l.Z,{children:[(0,N.jsx)("h4",{children:e.title}),(0,N.jsxs)(i.Z,{children:[(0,N.jsxs)(l.Z,{children:[(0,N.jsx)("p",{className:"mt-2 mb-1 text-muted",children:"Assigned To"}),(0,N.jsxs)("div",{className:"d-flex",children:[(0,N.jsx)("img",{src:e.assignee_avatar,alt:e.assigned_to,className:"rounded-circle me-2",height:"24"}),(0,N.jsx)("div",{children:(0,N.jsx)("h5",{className:"mt-1 font-14",children:e.assigned_to})})]})]}),(0,N.jsxs)(l.Z,{children:[(0,N.jsx)("p",{className:"mt-2 mb-1 text-muted",children:"Due Date"}),(0,N.jsxs)("div",{className:"d-flex",children:[(0,N.jsx)("i",{className:"uil uil-schedule font-18 text-success me-1"}),(0,N.jsx)("div",{children:(0,N.jsx)("h5",{className:"mt-1 font-14",children:e.due_date})})]})]})]}),(0,N.jsx)(i.Z,{className:"mt-3",children:(0,N.jsx)(l.Z,{children:(0,N.jsx)(w.Editor,{toolbarHidden:!0,toolbarClassName:"draft-toolbar",wrapperClassName:"react-draft-wrapper border px-2",editorStyle:{minHeight:"150px"},editorState:s,onEditorStateChange:a})})}),(0,N.jsx)("h5",{className:"mt-4 mb-2 font-16",children:"Checklists/Sub-tasks"}),e.checklists.map((function(e,t){return(0,N.jsxs)("div",{className:"form-check mt-1",children:[(0,N.jsx)("input",{type:"checkbox",className:"form-check-input",id:"checklist-".concat(e.id),defaultChecked:e.completed}),(0,N.jsx)("label",{className:b()("form-check-label",{strikethrough:e.completed}),htmlFor:"checklist-".concat(e.id),children:e.title})]},t.toString())})),(0,N.jsx)("h5",{className:"mt-4 mb-2 font-16",children:"Attachments"}),e.attachments.map((function(e,t){var n=e.filename.substr(e.filename.lastIndexOf(".")+1);return(0,N.jsx)(p.Z,{className:"mb-2 shadow-none border",children:(0,N.jsx)("div",{className:"p-1",children:(0,N.jsxs)(i.Z,{className:"align-items-center",children:[(0,N.jsx)(l.Z,{className:"col-auto",children:(0,N.jsx)("div",{className:"avatar-sm",children:(0,N.jsxs)("span",{className:"avatar-title rounded",children:[".",n]})})}),(0,N.jsxs)(l.Z,{className:"ps-0",children:[(0,N.jsx)(d.rU,{to:"#",className:"text-muted fw-bold",children:e.filename}),(0,N.jsx)("p",{className:"mb-0",children:e.size})]}),(0,N.jsxs)(l.Z,{className:"col-auto",children:[(0,N.jsx)(h.Z,{placement:"left",overlay:(0,N.jsx)(x.Z,{children:"Download"}),children:(0,N.jsx)(d.rU,{to:"#",id:"btn-download",className:"btn btn-link text-muted btn-lg p-0 me-1",children:(0,N.jsx)("i",{className:"uil uil-cloud-download"})})}),(0,N.jsx)(h.Z,{placement:"left",overlay:(0,N.jsx)(x.Z,{children:"Delete"}),children:(0,N.jsx)(d.rU,{to:"#",id:"btn-Delete",className:"btn btn-link text-danger btn-lg p-0",children:(0,N.jsx)("i",{className:"uil uil-multiply"})})})]})]})})},t.toString())})),(0,N.jsx)("div",{className:"row mt-3",children:(0,N.jsxs)("div",{className:"col",children:[(0,N.jsx)("h5",{className:"mb-2 font-16",children:"Comments"}),e.comments.map((function(e,t){return(0,N.jsxs)(u.Fragment,{children:[(0,N.jsxs)("div",{className:"d-flex mt-3 p-1",children:[(0,N.jsx)("img",{src:e.author_avatar,className:"me-2 rounded-circle",height:"36",alt:e.author}),(0,N.jsxs)("div",{className:"w-100",children:[(0,N.jsxs)("h5",{className:"mt-0 mb-0",children:[(0,N.jsx)("span",{className:"float-end text-muted font-12",children:e.posted_on}),e.author]}),(0,N.jsx)("p",{className:"mt-1 mb-0 text-muted",children:e.text})]})]}),(0,N.jsx)("hr",{})]},t.toString())}))]})}),(0,N.jsx)(i.Z,{className:"mt-2",children:(0,N.jsx)(l.Z,{children:(0,N.jsx)("div",{className:"border rounded",children:(0,N.jsxs)("form",{action:"#",className:"comment-area-box",children:[(0,N.jsx)("textarea",{rows:3,className:"form-control border-0 resize-none",placeholder:"Your comment..."}),(0,N.jsxs)("div",{className:"p-2 bg-light",children:[(0,N.jsx)("div",{className:"float-end",children:(0,N.jsxs)("button",{type:"submit",className:"btn btn-sm btn-success",children:[(0,N.jsx)("i",{className:"uil uil-message me-1"}),"Submit"]})}),(0,N.jsxs)("div",{children:[(0,N.jsx)(d.rU,{to:"#",className:"btn btn-sm px-1 btn-light",children:(0,N.jsx)("i",{className:"uil uil-cloud-upload"})}),(0,N.jsx)(d.rU,{to:"#",className:"btn btn-sm px-1 btn-light",children:(0,N.jsx)("i",{className:"uil uil-at"})})]})]})]})})})})]})})]})})}),M=function(){var e=(0,o.ek)(),t=e.todayTask,n=e.upcomingTask,m=e.otherTask,u=e.selectedTask,h=e.selectTask;return(0,N.jsxs)(i.Z,{children:[(0,N.jsxs)(l.Z,{xl:8,children:[(0,N.jsxs)("div",{className:"page-title-box",children:[(0,N.jsx)("div",{className:"page-title-right",children:(0,N.jsx)("div",{className:"app-search",children:(0,N.jsxs)(a.Z,{children:[(0,N.jsx)(r.Z.Control,{placeholder:"Search..."}),(0,N.jsx)("span",{className:"mdi mdi-magnify search-icon"}),(0,N.jsxs)(c.Z,{align:"end",children:[(0,N.jsx)(c.Z.Toggle,{variant:"secondary",children:(0,N.jsx)("i",{className:"uil uil-sort-amount-down"})}),(0,N.jsxs)(c.Z.Menu,{children:[(0,N.jsx)(c.Z.Item,{children:"Due Date"}),(0,N.jsx)(c.Z.Item,{children:"Added Date"}),(0,N.jsx)(c.Z.Item,{children:"Assignee"})]})]})]})})}),(0,N.jsxs)("h4",{className:"page-title",children:["Tasks"," ",(0,N.jsx)(d.rU,{to:"#",className:"btn btn-success btn-sm ms-3",children:"Add New"})]})]}),(0,N.jsx)("div",{className:"mt-2",children:(0,N.jsx)(v,{title:"Today",tasks:t,selectTask:h})}),(0,N.jsx)("div",{className:"mt-4",children:(0,N.jsx)(v,{title:"Upcoming",tasks:n,selectTask:h})}),(0,N.jsx)("div",{className:"mt-4 mb-4",children:(0,N.jsx)(v,{title:"Other",tasks:m,selectTask:h})})]}),(0,N.jsx)(l.Z,{children:(0,N.jsx)(Z,(0,s.Z)({},u))})]})}},1701:function(e,t,n){window,e.exports=function(e,t){return i={},n.m=s=[function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(0),l=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&((t=document.implementation.createHTMLDocument("foo")).documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n},a=function(e,t,n){var s,l=e.textContent;return""===l.trim()?{chunk:(s=n,{text:" ",inlines:[new i.OrderedSet],entities:[s],blocks:[]})}:{chunk:{text:l,inlines:Array(l.length).fill(t),entities:Array(l.length).fill(n),blocks:[]}}},r=function(){return{text:"\n",inlines:[new i.OrderedSet],entities:new Array(1),blocks:[]}},c=function(){return{text:"",inlines:[],entities:[],blocks:[]}},d=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new i.Map({})}]}},o=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new i.Map({})}]}},m=function(e){return{text:"\r ",inlines:[new i.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new i.Map({})}]}},u=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}},h=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}}),x={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"};function f(e){return e.style.textAlign?new i.Map({"text-align":e.style.textAlign}):e.style.marginLeft?new i.Map({"margin-left":e.style.marginLeft}):void 0}var p=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};t=e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,s.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute&&e.getAttribute("href")||e.href,n.title=e.innerHTML,n.targetOption=e.target,s.Entity.__create("LINK","MUTABLE",n))}return t};n.d(t,"default",(function(){return k}));var j=" ",b=new RegExp("&nbsp;","g"),g=!0;function N(e,t,n,i,l,j){var b=e.nodeName.toLowerCase();if(j){var k=j(b,e);if(k){var v=s.Entity.__create(k.type,k.mutability,k.data||{});return{chunk:m(v)}}}if("#text"===b&&"\n"!==e.textContent)return a(e,t,l);if("br"===b)return{chunk:r()};if("img"===b&&e instanceof HTMLImageElement){var y={};y.src=e.getAttribute&&e.getAttribute("src")||e.src,y.alt=e.alt,y.height=e.style.height,y.width=e.style.width,e.style.float&&(y.alignment=e.style.float);var w=s.Entity.__create("IMAGE","MUTABLE",y);return{chunk:m(w)}}if("video"===b&&e instanceof HTMLVideoElement){var Z={};Z.src=e.getAttribute&&e.getAttribute("src")||e.src,Z.alt=e.alt,Z.height=e.style.height,Z.width=e.style.width,e.style.float&&(Z.alignment=e.style.float);var M=s.Entity.__create("VIDEO","MUTABLE",Z);return{chunk:m(M)}}if("iframe"===b&&e instanceof HTMLIFrameElement){var T={};T.src=e.getAttribute&&e.getAttribute("src")||e.src,T.height=e.height,T.width=e.width;var E=s.Entity.__create("EMBEDDED_LINK","MUTABLE",T);return{chunk:m(E)}}var S,_=function(e,t){var n=h.filter((function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&-1<n.aliasedElements.indexOf(e)})).keySeq().toSet().toArray();if(1===n.length)return n[0]}(b,i);_&&("ul"===b||"ol"===b?(i=b,n+=1):("unordered-list-item"!==_&&"ordered-list-item"!==_&&(i="",n=-1),g?(S=d(_,f(e)),g=!1):S=o(_,n,f(e)))),S=S||c(),t=function(e,t,n){var s,i=x[e];if(i)s=n.add(i).toOrderedSet();else if(t instanceof HTMLElement){var l=t;s=(s=n).withMutations((function(e){var t=l.style.color,n=l.style.backgroundColor,s=l.style.fontSize,i=l.style.fontFamily.replace(/^"|"$/g,""),a=l.style.fontWeight,r=l.style.textDecoration,c=l.style.fontStyle;t&&e.add("color-".concat(t.replace(/ /g,""))),n&&e.add("bgcolor-".concat(n.replace(/ /g,""))),s&&e.add("fontsize-".concat(s.replace(/px$/g,""))),i&&e.add("fontfamily-".concat(i)),"bold"===a&&e.add(x.strong),"underline"===r&&e.add(x.ins),"italic"===c&&e.add(x.em)})).toOrderedSet()}return s}(b,e,t);for(var C=e.firstChild;C;){var A=N(C,t,n,i,p(C)||l,j).chunk;S=u(S,A),C=C.nextSibling}return{chunk:S}}function k(e,t){var n,a,r,c=(n=t,a=e.trim().replace(b,j),(r=l(a))?(g=!0,{chunk:N(r,new i.OrderedSet,-1,"",void 0,n).chunk}):null);if(c){var d=c.chunk,o=new i.OrderedMap({});d.entities&&d.entities.forEach((function(e){e&&(o=o.set(e,s.Entity.__get(e)))}));var m=0;return{contentBlocks:d.text.split("\r").map((function(e,t){var n=m+e.length,l=d&&d.inlines.slice(m,n),a=d&&d.entities.slice(m,n),r=new i.List(l.map((function(e,t){var n={style:e,entity:null};return a[t]&&(n.entity=a[t]),s.CharacterMetadata.create(n)})));return m=n,new s.ContentBlock({key:Object(s.genKey)(),type:d&&d.blocks[t]&&d.blocks[t].type||"unstyled",depth:d&&d.blocks[t]&&d.blocks[t].depth,data:d&&d.blocks[t]&&d.blocks[t].data||new i.Map({}),text:e,characterList:r})})),entityMap:o}}return null}}],n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2);function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return s[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var s,i}(n(81184),n(72010))}}]);
//# sourceMappingURL=5232.5ca3c4ac.chunk.js.map