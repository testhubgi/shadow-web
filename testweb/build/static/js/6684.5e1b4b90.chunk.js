"use strict";(self.webpackChunkapp_web_react=self.webpackChunkapp_web_react||[]).push([[6684],{77690:function(e,n,o){o.d(n,{J:function(){return X}});var r=o(70885),t=o(45987),i=o(72791),s=o(30599),a=o(95567),u=o(33163),l=i.createContext({onClose:function(){},initialFocusRef:{current:null},finalFocusRef:{current:null},popoverContentId:void 0,headerId:void 0,bodyId:void 0,setHeaderMounted:function(){},setBodyMounted:function(){},headerMounted:!1,bodyMounted:!1,isOpen:!1}),c=o(78312),d=o(6299),f=o(49559),p=o(5588),v=o(30610),b=o(8264),h=o(31502),y=o(96346),m=o(763),O=o(7238),P=["onOpen","trigger","onClose","isOpen","children","defaultIsOpen","initialFocusRef","finalFocusRef","useRNModal","trapFocus"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},g.apply(this,arguments)}var M=function(e,n){var o=e.onOpen,M=e.trigger,I=e.onClose,F=e.isOpen,C=e.children,R=e.defaultIsOpen,Z=e.initialFocusRef,E=e.finalFocusRef,w=e.useRNModal,H=e.trapFocus,B=void 0===H||H,j=(0,t.Z)(e,P),x=i.useRef(null),k=(0,a.l)([x]),_=(0,u.T)({value:F,defaultValue:R,onChange:function(e){e?o&&o():I&&I()}}),A=(0,r.Z)(_,2),V=A[0],D=A[1],S=i.useState(!1),L=(0,r.Z)(S,2),N=L[0],T=L[1],z=i.useState(!1),K=(0,r.Z)(z,2),q=K[0],G=K[1],U=(0,m.uniqueId)();i.useContext(O.t).disableCSSMediaQueries||(U=(0,b.Me)());var W="".concat(U,"-content"),X="".concat(W,"-header"),J="".concat(W,"-body"),Q=i.useCallback((function(){D(!0)}),[D]),Y=function(){D(!1)};return(0,y.M)(j)?null:i.createElement(c.Z,{ref:n},M({ref:k,onPress:Q,"aria-expanded":!!V,"aria-controls":V?W:void 0,"aria-haspopup":!0},{open:V}),i.createElement(h.a,{isOpen:V,onRequestClose:Y,useRNModalOnAndroid:!0,useRNModal:w,unmountOnExit:!0},i.createElement(p.Z,{initial:{opacity:0},animate:{opacity:1,transition:{duration:150}},exit:{opacity:0,scale:.95,transition:{duration:100}},visible:V,style:v.Z.absoluteFill},i.createElement(s.r,g({onClose:Y,triggerRef:x},j),i.createElement(d.Z,{onPress:Y,bg:"transparent"}),i.createElement(l.Provider,{value:{onClose:Y,initialFocusRef:Z,finalFocusRef:E,popoverContentId:W,bodyId:J,headerId:X,headerMounted:q,bodyMounted:N,setBodyMounted:T,setHeaderMounted:G,isOpen:V}},i.createElement(f.MT,{contain:B,restoreFocus:!0,autoFocus:!0},C))))))},I=(0,i.memo)((0,i.forwardRef)(M)),F=o(38549),C=o(70200),R=o(20373),Z=o(75674);function E(){return E=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},E.apply(this,arguments)}var w=i.forwardRef((function(e,n){var o,r,t,a=i.useContext(l),u=a.onClose,c=a.initialFocusRef,d=a.finalFocusRef,f=a.popoverContentId,p=a.headerMounted,v=a.bodyMounted,b=a.bodyId,h=a.headerId,m=a.isOpen,O=(0,F.n)("PopoverContent",e),P=null!==(o=null!==(r=null!==(t=e.bgColor)&&void 0!==t?t:e.bg)&&void 0!==r?r:e.backgroundColor)&&void 0!==o?o:O.backgroundColor,g=(0,C.d)("colors",P);i.useEffect((function(){var e=null===d||void 0===d?void 0:d.current;return c&&c.current&&c.current.focus(),function(){e&&e.focus()}}),[d,c]),(0,R.Zs)({enabled:!0,callback:u});var M=null,I=[];i.Children.toArray(e.children).forEach((function(e){var n,o;"PopperArrow"===(null===e||void 0===e||null===(n=e.type)||void 0===n?void 0:n.displayName)?M=i.cloneElement(e,{backgroundColor:null!==(o=e.props.color)&&void 0!==o?o:g}):I.push(e)}));var w="web"===Z.Z.OS?{accessibilityRole:"dialog","aria-labelledby":p?h:void 0,"aria-describedby":v?b:void 0}:{};return(0,y.M)(e)?null:i.createElement(s.r.Content,E({nativeID:f},w,O,{ref:n,isOpen:m}),M,I)}));function H(){return H=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},H.apply(this,arguments)}w.displayName="PopoverContent";var B=function(e,n){var o=(0,F.n)("PopoverBody",e),r=(0,i.useContext)(l),t=r.setBodyMounted,s=r.bodyId;return(0,i.useEffect)((function(){return t(!0),function(){t(!1)}}),[t]),(0,y.M)(e)?null:i.createElement(c.Z,H({nativeID:s},o,{ref:n}))},j=(0,i.memo)((0,i.forwardRef)(B)),x=o(60961),k=o(15483),_=["_icon","onPressIn","onPressOut","onHoverIn","onHoverOut","onFocus","onBlur"];function A(){return A=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},A.apply(this,arguments)}var V=function(e,n){var o=i.useContext(l).onClose,r=(0,x.XI)(),s=r.hoverProps,u=r.isHovered,c=(0,x.VU)(),d=c.pressableProps,p=c.isPressed,v=(0,x.KK)(),b=v.focusProps,h=v.isFocused,m=(0,f.Fx)(),O=m.isFocusVisible,P=m.focusProps,g=(0,F.n)("PopoverCloseButton",e,{isHovered:u,isPressed:p,isFocused:h,isFocusVisible:O}),M=g._icon,I=g.onPressIn,C=g.onPressOut,R=g.onHoverIn,Z=g.onHoverOut,E=g.onFocus,w=g.onBlur,H=(0,t.Z)(g,_);return(0,y.M)(e)?null:i.createElement(x.ZP,A({accessibilityRole:"button",ref:n,onPressIn:(0,a.M)(I,d.onPressIn),onPressOut:(0,a.M)(C,d.onPressOut),onHoverIn:(0,a.M)(R,s.onHoverIn),onHoverOut:(0,a.M)(Z,s.onHoverOut),onFocus:(0,a.M)((0,a.M)(E,b.onFocus),P.onFocus),onBlur:(0,a.M)((0,a.M)(w,b.onBlur),P.onBlur),onPress:o},H),i.createElement(k.T,M))},D=i.memo(i.forwardRef(V));function S(){return S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},S.apply(this,arguments)}var L=function(e,n){var o=(0,F.n)("PopoverFooter",e);return(0,y.M)(e)?null:i.createElement(c.Z,S({},o,{ref:n}))},N=(0,i.memo)((0,i.forwardRef)(L));function T(){return T=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},T.apply(this,arguments)}var z=function(e,n){var o=(0,F.n)("PopoverHeader",e),r=(0,i.useContext)(l),t=r.setHeaderMounted,s=r.headerId;return(0,i.useEffect)((function(){return t(!0),function(){t(!1)}}),[t]),(0,y.M)(e)?null:i.createElement(c.Z,T({nativeID:s},o,{ref:n}))},K=(0,i.memo)((0,i.forwardRef)(z));function q(){return q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},q.apply(this,arguments)}var G=i.forwardRef((function(e,n){var o=(0,F.n)("PopoverArrow",e);return(0,y.M)(e)?null:i.createElement(s.r.Arrow,q({},o,{ref:n}))}));G.displayName="PopperArrow";var U=G,W=I;W.Content=w,W.CloseButton=D,W.Header=K,W.Footer=N,W.Body=j,W.Arrow=U;var X=W},20520:function(e,n,o){o.d(n,{z:function(){return C}});var r=o(1413),t=o(45987),i=o(72791),s=o(68129),a=o(38549),u=o(78312),l=o(26686),c=o(60961),d=o(95567),f=o(49559),p=o(96346),v=["children","startIcon","rightIcon","leftIcon","endIcon","spinner","isDisabled","isLoading","isHovered","isPressed","isFocused","isFocusVisible","spinnerPlacement"],b=["onPressIn","onPressOut","onHoverIn","onHoverOut","onFocus","onBlur","_text","_stack","_spinner","isLoadingText","_icon"];function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},h.apply(this,arguments)}var y=function(e,n){var o,y=e.children,m=e.startIcon,O=e.rightIcon,P=e.leftIcon,g=e.endIcon,M=e.spinner,I=e.isDisabled,F=e.isLoading,C=e.isHovered,R=e.isPressed,Z=e.isFocused,E=e.isFocusVisible,w=e.spinnerPlacement,H=void 0===w?"start":w,B=(0,t.Z)(e,v),j=(0,c.XI)(),x=j.hoverProps,k=j.isHovered,_=(0,c.VU)(),A=_.pressableProps,V=_.isPressed,D=(0,c.KK)(),S=D.focusProps,L=D.isFocused,N=(0,f.Fx)(),T=N.isFocusVisible,z=N.focusProps,K=(0,a.n)("Button",B,{isDisabled:I,isHovered:C||k,isFocused:Z||L,isPressed:R||V,isLoading:F,isFocusVisible:E||T}),q=K.onPressIn,G=K.onPressOut,U=K.onHoverIn,W=K.onHoverOut,X=K.onFocus,J=K.onBlur,Q=K._text,Y=K._stack,$=K._spinner,ee=K.isLoadingText,ne=K._icon,oe=(0,t.Z)(K,b);if((0,p.M)(B))return null;P&&(m=P),O&&(g=O),g&&i.isValidElement(g)&&(g=i.Children.map(g,(function(e,n){return i.cloneElement(e,(0,r.Z)((0,r.Z)({key:"button-end-icon-".concat(n)},ne),e.props))}))),m&&i.isValidElement(m)&&(m=i.Children.map(m,(function(e,n){return i.cloneElement(e,(0,r.Z)((0,r.Z)({key:"button-start-icon-".concat(n)},ne),e.props))})));var re=M||i.createElement(s.Z,h({color:null===Q||void 0===Q?void 0:Q.color},$)),te=function(e){return e?i.createElement(u.Z,{_text:Q},e):null};return i.createElement(c.ZP,h({disabled:I||F,ref:n,onPressIn:(0,d.M)(q,A.onPressIn),onPressOut:(0,d.M)(G,A.onPressOut),onHoverIn:(0,d.M)(U,x.onHoverIn),onHoverOut:(0,d.M)(W,x.onHoverOut),onFocus:(0,d.M)((0,d.M)(X,S.onFocus),z.onFocus),onBlur:(0,d.M)((0,d.M)(J,S.onBlur),z.onBlur)},oe,{accessibilityRole:null!==(o=B.accessibilityRole)&&void 0!==o?o:"button"}),i.createElement(l.Z,h({},Y,{test:!0}),m&&!F?m:null,F&&"start"===H?re:null,F?ee?te(ee):null:te(y),g&&!F?g:null,F&&"end"===H?re:null))},m=(0,i.memo)((0,i.forwardRef)(y)),O=o(62778),P=["children","divider","variant"],g=["space","direction","size","colorScheme","isDisabled","isAttached"];function M(){return M=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},M.apply(this,arguments)}var I=(0,i.memo)((0,i.forwardRef)((function(e,n){var o,s=e.children,u=e.divider,l=e.variant,c=(0,t.Z)(e,P),d=(0,a.n)("ButtonGroup",c),f=d.space,v=d.direction,b=d.size,h=d.colorScheme,y=d.isDisabled,m=d.isAttached,I=(0,t.Z)(d,g),F=(0,a.n)("Button",c).borderRadius;return o=Array.isArray(s)?i.Children.toArray(s).map((function(e,n){return"string"===typeof e||"number"===typeof e?e:i.cloneElement(e,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({key:"button-group-child-".concat(n),variant:l,size:b,colorScheme:h,isDisabled:y},m?{borderRadius:0}:{}),m&&0===n?"column"===v?{borderTopRadius:F}:{borderLeftRadius:F}:{}),m&&n===(null===s||void 0===s?void 0:s.length)-1?"column"===v?{borderBottomRadius:F}:{borderRightRadius:F}:{}),m&&0!==n?"column"===v?{borderTopWidth:0}:{borderLeftWidth:0}:{}),e.props))})):i.Children.toArray(s).map((function(e,n){return i.cloneElement(e,(0,r.Z)({key:"button-group-child-".concat(n),variant:l,size:b,colorScheme:h,isDisabled:y},e.props))})),(0,p.M)(c)?null:i.createElement(O.Z,M({divider:u,space:m?0:f,direction:v},I,{ref:n}),o)}))),F=m;F.Group=I;var C=F}}]);
//# sourceMappingURL=6684.5e1b4b90.chunk.js.map