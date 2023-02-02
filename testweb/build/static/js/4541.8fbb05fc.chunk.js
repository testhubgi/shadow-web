"use strict";(self.webpackChunkapp_web_react=self.webpackChunkapp_web_react||[]).push([[4541],{2445:function(e,n,t){t.d(n,{Fx:function(){return S},MT:function(){return E},QL:function(){return M},kc:function(){return H}});var r=t(45987),o=t(1413),u=t(70885),i=t(74165),c=t(15671),s=t(43144),a=t(37762),d=t(72791),f=t(76374),l=t(64454),v=["ref"];function p(e){if("virtual"===(0,l.Jz)()){var n=document.activeElement;(0,f.QB)((function(){document.activeElement===n&&document.contains(e)&&(0,f.Ao)(e)}))}else(0,f.Ao)(e)}function b(e,n){return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;var n=e.style,t=n.display,r=n.visibility,o="none"!==t&&"hidden"!==r&&"collapse"!==r;if(o){var u=(0,e.ownerDocument.defaultView.getComputedStyle)(e),i=u.display,c=u.visibility;o="none"!==i&&"hidden"!==c&&"collapse"!==c}return o}(e)&&function(e,n){return!e.hasAttribute("hidden")&&("DETAILS"!==e.nodeName||!n||"SUMMARY"===n.nodeName||e.hasAttribute("open"))}(e,n)&&(!e.parentElement||b(e.parentElement,e))}var h=d.createContext(null),m=null;function E(e){var n,t=e.children,r=e.contain,o=e.restoreFocus,u=e.autoFocus,i=(0,d.useRef)(),c=(0,d.useRef)(),s=(0,d.useRef)([]),a=(0,d.useContext)(h),l=null!==(n=null===a||void 0===a?void 0:a.scopeRef)&&void 0!==n?n:null;(0,f.bt)((function(){for(var e=i.current.nextSibling,n=[];e&&e!==c.current;)n.push(e),e=e.nextSibling;s.current=n}),[t,l]),O.getTreeNode(l)&&!O.getTreeNode(s)&&O.addTreeNode(s,l),O.getTreeNode(s).contain=r,function(e,n){var t=(0,d.useRef)(),r=(0,d.useRef)(null);(0,f.bt)((function(){var o=e.current;if(n){var u=function(n){if(!("Tab"!==n.key||n.altKey||n.ctrlKey||n.metaKey)&&T(e)){var t=document.activeElement,r=e.current;if(R(t,r)){var o=M(F(r),{tabbable:!0},r);o.currentNode=t;var u=n.shiftKey?o.previousNode():o.nextNode();u||(o.currentNode=n.shiftKey?r[r.length-1].nextElementSibling:r[0].previousElementSibling,u=n.shiftKey?o.previousNode():o.nextNode()),n.preventDefault(),u&&k(u,!0)}}},i=function(n){!m||P(m,e)?(m=e,t.current=n.target):T(e)&&!x(n.target,e)?t.current?t.current.focus():m&&w(m.current):T(e)&&(t.current=n.target)},c=function(n){r.current=requestAnimationFrame((function(){T(e)&&!x(document.activeElement,e)&&(m=e,document.body.contains(n.target)?(t.current=n.target,t.current.focus()):m&&w(m.current))}))};return document.addEventListener("keydown",u,!1),document.addEventListener("focusin",i,!1),o.forEach((function(e){return e.addEventListener("focusin",i,!1)})),o.forEach((function(e){return e.addEventListener("focusout",c,!1)})),function(){document.removeEventListener("keydown",u,!1),document.removeEventListener("focusin",i,!1),o.forEach((function(e){return e.removeEventListener("focusin",i,!1)})),o.forEach((function(e){return e.removeEventListener("focusout",c,!1)}))}}r.current&&(cancelAnimationFrame(r.current),r.current=null)}),[e,n]),(0,d.useEffect)((function(){return function(){r.current&&cancelAnimationFrame(r.current)}}),[r])}(s,r),function(e,n,t){var r=(0,d.useRef)("undefined"!==typeof document?document.activeElement:null);(0,f.bt)((function(){var r=e.current;if(n&&!t){var o=function(){m&&!P(m,e)||(m=e)};return document.addEventListener("focusin",o,!1),r.forEach((function(e){return e.addEventListener("focusin",o,!1)})),function(){document.removeEventListener("focusin",o,!1),r.forEach((function(e){return e.removeEventListener("focusin",o,!1)}))}}}),[e,t]),(0,f.bt)((function(){if(O.getTreeNode(e).nodeToRestore=r.current,n){var o=function(n){if(!("Tab"!==n.key||n.altKey||n.ctrlKey||n.metaKey)){var t=document.activeElement;if(R(t,e.current)){var r=O.getTreeNode(e).nodeToRestore,o=M(document.body,{tabbable:!0});o.currentNode=t;var u=n.shiftKey?o.previousNode():o.nextNode();if(document.body.contains(r)&&r!==document.body||(r=null,O.getTreeNode(e).nodeToRestore=null),(!u||!R(u,e.current))&&r){o.currentNode=r;do{u=n.shiftKey?o.previousNode():o.nextNode()}while(R(u,e.current));n.preventDefault(),n.stopPropagation(),u?k(u,!0):x(r)?k(r,!0):t.blur()}}}};return t||document.addEventListener("keydown",o,!0),function(){t||document.removeEventListener("keydown",o,!0);var r=O.getTreeNode(e).nodeToRestore;if(n&&r&&(R(document.activeElement,e.current)||document.activeElement===document.body&&m===e)){var u=O.clone();requestAnimationFrame((function(){if(document.activeElement===document.body)for(var n=u.getTreeNode(e);n;){if(n.nodeToRestore&&document.body.contains(n.nodeToRestore))return void k(n.nodeToRestore);n=n.parent}}))}}}}),[e,n,t])}(s,o,r),function(e,n){var t=d.useRef(n);(0,d.useEffect)((function(){t.current&&(m=e,R(document.activeElement,m.current)||w(e.current)),t.current=!1}),[e])}(s,u),(0,f.bt)((function(){if(s&&(l||null==l))return function(){s!==m&&!P(s,m)||l&&!O.getTreeNode(l)||(m=l),O.removeTreeNode(s)}}),[s,l]);var v=function(e){return{focusNext:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.current,r=n.from,o=n.tabbable,u=n.wrap,i=n.accept,c=r||document.activeElement,s=t[0].previousElementSibling,a=M(F(t),{tabbable:o,accept:i},t);a.currentNode=R(c,t)?c:s;var d=a.nextNode();return!d&&u&&(a.currentNode=s,d=a.nextNode()),d&&k(d,!0),d},focusPrevious:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.current,r=n.from,o=n.tabbable,u=n.wrap,i=n.accept,c=r||document.activeElement,s=t[t.length-1].nextElementSibling,a=M(F(t),{tabbable:o,accept:i},t);a.currentNode=R(c,t)?c:s;var d=a.previousNode();return!d&&u&&(a.currentNode=s,d=a.previousNode()),d&&k(d,!0),d},focusFirst:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.current,r=n.tabbable,o=n.accept,u=M(F(t),{tabbable:r,accept:o},t);u.currentNode=t[0].previousElementSibling;var i=u.nextNode();return i&&k(i,!0),i},focusLast:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.current,r=n.tabbable,o=n.accept,u=M(F(t),{tabbable:r,accept:o},t);u.currentNode=t[t.length-1].nextElementSibling;var i=u.previousNode();return i&&k(i,!0),i}}}(s);return d.createElement(h.Provider,{value:{scopeRef:s,focusManager:v}},d.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:i}),t,d.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:c}))}var y=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],g=y.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";y.push('[tabindex]:not([tabindex="-1"]):not([disabled])');var N=y.join(':not([hidden]):not([tabindex="-1"]),');function F(e){return e[0].parentElement}function T(e){for(var n=O.getTreeNode(m);n&&n.scopeRef!==e;){if(n.contain)return!1;n=n.parent}return!0}function R(e,n){return n.some((function(n){return n.contains(e)}))}function x(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=(0,a.Z)(O.traverse(O.getTreeNode(t)));try{for(r.s();!(n=r.n()).done;){var o=n.value.scopeRef;if(R(e,o.current))return!0}}catch(u){r.e(u)}finally{r.f()}return!1}function P(e,n){for(var t,r=null===(t=O.getTreeNode(n))||void 0===t?void 0:t.parent;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function k(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(null==e||n){if(null!=e)try{e.focus()}catch(t){}}else try{p(e)}catch(r){}}function w(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=e[0].previousElementSibling,r=M(F(e),{tabbable:n},e);r.currentNode=t;var o=r.nextNode();n&&!o&&((r=M(F(e),{tabbable:!1},e)).currentNode=t,o=r.nextNode()),k(o)}function M(e,n,t){var r=(null===n||void 0===n?void 0:n.tabbable)?N:g,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:function(e){var o;return(null===n||void 0===n||null===(o=n.from)||void 0===o?void 0:o.contains(e))?NodeFilter.FILTER_REJECT:!e.matches(r)||!b(e)||t&&!R(e,t)||(null===n||void 0===n?void 0:n.accept)&&!n.accept(e)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return(null===n||void 0===n?void 0:n.from)&&(o.currentNode=n.from),o}var Z=function(){function e(){(0,c.Z)(this,e),this.fastMap=new Map,this.root=new L({scopeRef:null}),this.fastMap.set(null,this.root)}return(0,s.Z)(e,[{key:"size",get:function(){return this.fastMap.size}},{key:"getTreeNode",value:function(e){return this.fastMap.get(e)}},{key:"addTreeNode",value:function(e,n,t){var r=this.fastMap.get(null!==n&&void 0!==n?n:null),o=new L({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),t&&(o.nodeToRestore=t)}},{key:"removeTreeNode",value:function(e){if(null!==e){var n,t=this.fastMap.get(e),r=t.parent,o=(0,a.Z)(this.traverse());try{for(o.s();!(n=o.n()).done;){var u=n.value;u!==t&&t.nodeToRestore&&u.nodeToRestore&&t.scopeRef.current&&R(u.nodeToRestore,t.scopeRef.current)&&(u.nodeToRestore=t.nodeToRestore)}}catch(c){o.e(c)}finally{o.f()}var i=t.children;r.removeChild(t),i.length>0&&i.forEach((function(e){return r.addChild(e)})),this.fastMap.delete(t.scopeRef)}}},{key:"traverse",value:(0,i.Z)().mark((function e(){var n,t,r,o,u=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(n=u.length>0&&void 0!==u[0]?u[0]:this.root).scopeRef){e.next=4;break}return e.next=4,n;case 4:if(!(n.children.length>0)){e.next=21;break}t=(0,a.Z)(n.children),e.prev=6,t.s();case 8:if((r=t.n()).done){e.next=13;break}return o=r.value,e.delegateYield(this.traverse(o),"t0",11);case 11:e.next=8;break;case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(6),t.e(e.t1);case 18:return e.prev=18,t.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[6,15,18,21]])}))},{key:"clone",value:function(){var n,t=new e,r=(0,a.Z)(this.traverse());try{for(r.s();!(n=r.n()).done;){var o=n.value;t.addTreeNode(o.scopeRef,o.parent.scopeRef,o.nodeToRestore)}}catch(u){r.e(u)}finally{r.f()}return t}}]),e}(),L=function(){function e(n){(0,c.Z)(this,e),this.children=[],this.contain=!1,this.scopeRef=n.scopeRef}return(0,s.Z)(e,[{key:"addChild",value:function(e){this.children.push(e),e.parent=this}},{key:"removeChild",value:function(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0}}]),e}(),O=new Z;function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.autoFocus,t=void 0!==n&&n,r=e.isTextInput,o=e.within,i=(0,d.useRef)({isFocused:!1,isFocusVisible:t||(0,l.E)()}),c=(0,d.useState)(!1),s=(0,u.Z)(c,2),a=s[0],f=s[1],v=(0,d.useState)((function(){return i.current.isFocused&&i.current.isFocusVisible})),p=(0,u.Z)(v,2),b=p[0],h=p[1],m=(0,d.useCallback)((function(){return h(i.current.isFocused&&i.current.isFocusVisible)}),[]),E=(0,d.useCallback)((function(e){i.current.isFocused=e,f(e),m()}),[m]);(0,l.mG)((function(e){i.current.isFocusVisible=e,m()}),[],{isTextInput:r});var y=(0,l.KK)({isDisabled:o,onFocusChange:E}),g=y.focusProps,N=(0,l.L_)({isDisabled:!o,onFocusWithinChange:E}),F=N.focusWithinProps;return{isFocused:a,isFocusVisible:i.current.isFocused&&b,focusProps:o?F:g}}var C=d.createContext(null);function H(e,n){var t=(0,l.KK)(e).focusProps,u=(0,l.v5)(e).keyboardProps,i=(0,f.dG)(t,u),c=function(e){var n=(0,d.useContext)(C)||{};return(0,f.lE)(n,e),n.ref,(0,r.Z)(n,v)}(n),s=e.isDisabled?{}:c,a=(0,d.useRef)(e.autoFocus);return(0,d.useEffect)((function(){a.current&&n.current&&p(n.current),a.current=!1}),[n]),{focusableProps:(0,f.dG)((0,o.Z)((0,o.Z)({},i),{},{tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0}),s)}}},49559:function(e,n,t){t.d(n,{MT:function(){return s},Fx:function(){return r.Fx}});var r=t(2445),o=t(45987),u=t(72791),i=["children","contain"];function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var s=function(e){var n=e.children,t=e.contain,s=(0,o.Z)(e,i);return!1===t?u.createElement(u.Fragment,null):u.createElement(r.MT,c({contain:t},s),n)}},60961:function(e,n,t){t.d(n,{KK:function(){return h},VU:function(){return m},XI:function(){return b}});var r=t(45987),o=t(70885),u=t(72791),i=t(39015),c=t(95567),s=t(96346),a=t(99705),d=t(38549),f=t(49559),l=["children","isDisabled","disabled","isHovered","isPressed","isFocused","isFocusVisible"],v=["onPressIn","onPressOut","onHoverIn","onHoverOut","onFocus","onBlur"];function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}var b=function(){var e=u.useState(!1),n=(0,o.Z)(e,2),t=n[0],r=n[1];return{hoverProps:{onHoverIn:function(){return r(!0)},onHoverOut:function(){return r(!1)}},isHovered:t}},h=function(){var e=u.useState(!1),n=(0,o.Z)(e,2),t=n[0],r=n[1];return{focusProps:{onFocus:function(){return r(!0)},onBlur:function(){return r(!1)}},isFocused:t}},m=function(){var e=u.useState(!1),n=(0,o.Z)(e,2),t=n[0],r=n[1];return{pressableProps:{onPressIn:function(){return r(!0)},onPressOut:function(){return r(!1)}},isPressed:t}},E=(0,a.R)(i.Z),y=function(e,n){var t=e.children,o=e.isDisabled,i=e.disabled,a=e.isHovered,y=e.isPressed,g=e.isFocused,N=e.isFocusVisible,F=(0,r.Z)(e,l),T=b(),R=T.hoverProps,x=T.isHovered,P=m(),k=P.pressableProps,w=P.isPressed,M=h(),Z=M.focusProps,L=M.isFocused,O=(0,f.Fx)(),S=O.isFocusVisible,C=O.focusProps,H=(0,d.n)("Pressable",F,{isPressed:y||w,isFocused:g||L,isHovered:a||x,isFocusVisible:N||S,isDisabled:i||o}),I=H.onPressIn,K=H.onPressOut,V=H.onHoverIn,A=H.onHoverOut,D=H.onFocus,j=H.onBlur,_=(0,r.Z)(H,v);return(0,s.M)(F)?null:u.createElement(E,p({ref:n,onPressIn:(0,c.M)(I,k.onPressIn),onPressOut:(0,c.M)(K,k.onPressOut),onHoverIn:(0,c.M)(V,R.onHoverIn),onHoverOut:(0,c.M)(A,R.onHoverOut),onFocus:(0,c.M)((0,c.M)(D,Z.onFocus),C.onFocus),onBlur:(0,c.M)((0,c.M)(j,Z.onBlur),C.onBlur),disabled:i||o},_),"function"!==typeof t?t:t({isPressed:w,isHovered:x,isFocused:L}))};n.ZP=(0,u.memo)((0,u.forwardRef)(y))},26686:function(e,n,t){var r=t(72791),o=t(62778),u=t(38549),i=t(96346);function c(){return c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var s=function(e,n){var t=(0,u.n)("HStack",e);return(0,i.M)(e)?null:r.createElement(o.Z,c({ref:n,direction:"row"},t))};n.Z=(0,r.memo)((0,r.forwardRef)(s))}}]);
//# sourceMappingURL=4541.8fbb05fc.chunk.js.map