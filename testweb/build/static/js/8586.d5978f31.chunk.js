"use strict";(self.webpackChunkapp_web_react=self.webpackChunkapp_web_react||[]).push([[8586,8946,9996],{28586:function(e,t,n){n.r(t);var i=n(42982),o=n(74165),r=n(15861),a=n(70885),l=n(72791),s=n(74222),u=n(29996),c=n(55045),d=n(60961),f=n(18227),p=n(26686),v=n(94724),h=n(73528),m=n.n(h),y=n(92810),b=n(44428),g=n(763),x=n.n(g),Z=n(84234),w=n(70084),C=n(4200),R=n(80184);delete n.g.created;t.default=function(e){var t=e.profile,n=(0,l.useRef)(),h=(0,l.useRef)(),g=(0,l.useState)(null),I=(0,a.Z)(g,2),O=I[0],S=I[1],j=(0,l.useState)(""),_=(0,a.Z)(j,2),D=_[0],F=_[1],k=(0,l.useState)(0),T=(0,a.Z)(k,2),E=T[0],P=T[1],q=(0,l.useState)([]),A=(0,a.Z)(q,2),H=A[0],L=A[1],z=(0,l.useState)(!1),B=(0,a.Z)(z,2),W=(B[0],B[1]),M=(0,l.useState)({_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0,avatar:t&&t.pic?"".concat(C.G3,"/users/").concat(t._id,"/").concat(t&&t.pic?t.pic.id:"0"):null});(0,a.Z)(M,1)[0];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://chat.shadow.properties",(n=(0,b.ZP)("https://chat.shadow.properties",{reconnection:!0,transports:["websocket"],allowUpgrades:!1,pingTimeout:3e4})).on("connect",(function(){L([]),n.emit("get:messages",{filter:{customer:t._id},skip:0,limit:10}),console.log("connected to support server"),console.log("support server socket id:",n.id)})).on("reconnect",function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("reconnected to support server");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).on("disconnect",(0,r.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("disconnected support server");case 1:case"end":return e.stop()}}),e)})))).on("error",(function(e){console.log("support server error",e)})),S(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){O&&O.disconnect()}}),[]),(0,l.useEffect)((function(){return O&&O.on("pm",(function(e){e.nextagent||(L((function(t){return[e].concat((0,i.Z)(t))})),P(!E))})).on("messages",(function(e){W(!1),e&&e.length&&L((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(e))})),P(!E)})).on("connect:next:agent",(function(e){O.emit("chat",{_id:(0,y.Z)(),createdAt:m()().utc().toISOString(),text:e.text,nextagent:!e.switch,switch:!!e.switch&&e.switch,user:{_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0}})})),function(){O&&(O.off("chat"),O.off("messages"),L([]))}}),[O]),(0,l.useEffect)((function(){""===D&&h.current&&(h.current.focus(),h.current.value="",n.current.scrollToOffset({animated:!0,offset:0}))}),[D]);var Y=function(e){var n={_id:(0,y.Z)(),createdAt:m()().utc().toISOString(),text:e,user:{_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0}};O.emit("pm",n),F("")},V=(0,l.useCallback)((function(e){return e}),[]),U=x().groupBy(H,(function(e){return m()(e.createdAt).format("MMM DD, YYYY")}));return(0,R.jsxs)(s.Z,{style:{height:"100vh"},flex:1,children:[(0,R.jsx)(Z.Z,{title:"Chat Support"}),(0,R.jsxs)(s.Z,{style:{boxShadow:"0px 3px 10px #0000001A",borderRadius:10,backgroundColor:"white",width:"100%",paddingTop:(0,w.vh)(80),height:"69.9vh",marginBottom:(0,w.vh)(10)},children:[(0,R.jsx)(u.O,{ListFooterComponent:0===H.length?null:(0,R.jsx)(c.Z,{marginTop:(0,w.vh)(-30),children:(0,R.jsx)(d.ZP,{onPress:function(){O.emit("get:messages",{filter:{customer:t._id},skip:H.length,limit:10}),W(!0)},style:{flex:1,borderRadius:50,width:(0,w.vw)(180),justifyContent:"center",paddingHorizontal:(0,w.vw)(10),paddingVertical:(0,w.vh)(5),backgroundColor:"rgba(125, 43, 233, 0.2)"},children:(0,R.jsx)(f.Z,{style:{textAlign:"center",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13),color:"rgba(51, 33, 75, 1)"},children:"Load earlier messages"})})}),inverted:!0,ref:n,contentContainerStyle:{marginBottom:40},style:{bottom:(0,w.vh)(60),height:300},data:Object.keys(U),keyExtractor:V,renderItem:function(e){var n=e.item;e.index;return(0,R.jsxs)(s.Z,{children:[(0,R.jsx)(c.Z,{py:3,children:(0,R.jsx)(f.Z,{style:{fontSize:(0,w.vw)(13),fontFamily:"Poppins",color:"rgba(0,0,0,0.5)"},children:n===m()().format("MMM DD, YYYY")?"Today":n})}),U[n].reverse().map((function(e){var n=e.user&&e.user._id===t._id;return(0,R.jsx)(p.Z,{style:{justifyContent:n?"flex-end":"flex-start"},children:(0,R.jsxs)(s.Z,{style:{marginHorizontal:(0,w.vw)(15),marginVertical:(0,w.vh)(5),padding:(0,w.vw)(5),borderRadius:8,borderTopLeftRadius:n?8:0,borderTopRightRadius:n?0:8,backgroundColor:n?"rgba(125, 43, 233, 0.8)":"rgba(0,0,0, 0.05)",maxWidth:(0,w.vw)(400)},children:[(0,R.jsx)(f.Z,{style:{color:n?"white":"rgba(0,0,0,0.8)",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13)},children:e.text}),(0,R.jsx)(f.Z,{style:{fontFamily:"Poppins",fontSize:(0,w.vw)(11),color:n?"white":"rgba(0,0,0,0.8)",textAlign:"right",marginTop:(0,w.vh)(-2)},children:m()(e.createdAt).format("HH:mm a")})]})},e._id)}))]})}}),(0,R.jsx)(p.Z,{flex:1,style:{position:"absolute",bottom:2,height:(0,w.vh)(50),justifyContent:"space-between",width:"100%",borderTopColor:"rgba(0,0,0,0.15)",borderTopWidth:(0,w.vw)(1.5)},children:(0,R.jsx)(v.II,{autoComplete:"Off",autoFocus:!0,ref:h,variant:"unstyled",width:"full",placeholder:"Type something",placeholderTextColor:"rgba(145, 145, 145, 1)",style:{height:(0,w.vh)(40),fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13),color:"rgba(0,0,0,0.8)"},onSubmitEditing:function(e){Y(e.target.value)},onChange:function(e){F(e.target.value)},InputRightElement:(0,R.jsx)(d.ZP,{onPress:function(){Y(h.current.value)},style:{marginHorizontal:(0,w.vw)(15)},children:(0,R.jsx)(f.Z,{style:{color:""===D?"rgba(145, 145, 145, 1)":"#303030",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(15)},children:"Send"})})})})]})]})}},84234:function(e,t,n){var i=n(1413),o=(n(72791),n(26686)),r=n(74222),a=n(18227),l=n(70084),s=n(80184);t.Z=function(e){var t=e.title,n=e.subtitle,u=e.rightElement,c=e.noborder,d=void 0!==c&&c,f={borderBottomColor:"rgba(0,0,0, 0.15)",borderBottomWidth:(0,l.vw)(1.5),marginBottom:(0,l.vh)(20)};return d&&(f={}),(0,s.jsxs)(o.Z,{style:(0,i.Z)({paddingBottom:(0,l.vh)(16)},f),justifyContent:"space-between",children:[(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(a.Z,{style:{fontSize:(0,l.vw)(24),color:"#303030",fontFamily:"Poppins_medium"},children:t}),(0,s.jsx)(a.Z,{style:{fontSize:(0,l.vw)(13),color:"#666666",fontFamily:"Poppins"},children:n})]}),u]})}},29996:function(e,t,n){n.d(t,{O:function(){return v}});var i=n(45987),o=n(72791),r=n(41965),a=n(38549),l=n(47556),s=n(99705),u=n(96346),c=["_contentContainerStyle","contentContainerStyle"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}var f=(0,s.R)(r.Z),p=function(e,t){var n=(0,a.n)("FlatList",e),r=n._contentContainerStyle,s=n.contentContainerStyle,p=(0,i.Z)(n,c),v=(0,l.t)(r||{});return(0,u.M)(e)?null:o.createElement(f,d({},p,{contentContainerStyle:s||v,ref:t}))},v=(0,o.forwardRef)(p)},43291:function(e,t,n){n.d(t,{Ug:function(){return v},Yp:function(){return m},NJ:function(){return y},qQ:function(){return h}});var i=n(1413),o=n(70885),r=n(45987),a=n(72791),l=n(8264),s=n(87357),u=n.n(s),c=function(e){return!!e||void 0},d=n(7238),f=n(763),p=["nativeID","isRequired","isInvalid","isDisabled","isReadOnly"],v=a.createContext({});function h(e){var t=e.nativeID,n=e.isRequired,i=e.isInvalid,s=e.isDisabled,u=e.isReadOnly,c=(0,r.Z)(e,p),v=(0,f.uniqueId)();a.useContext(d.t).disableCSSMediaQueries||(v=(0,l.Me)());var h=t||"field-".concat(v),m="".concat(h,"-label"),y="".concat(h,"-feedback"),b="".concat(h,"-helptext"),g=a.useState(!1),x=(0,o.Z)(g,2),Z=x[0],w=x[1],C=a.useState(!1),R=(0,o.Z)(C,2);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!u,isDisabled:!!s,hasFeedbackText:Z,setHasFeedbackText:w,hasHelpText:R[0],setHasHelpText:R[1],nativeID:h,labelId:m,feedbackId:y,helpTextId:b,htmlProps:c}}function m(e){var t,n=y(),o=[];null!==n&&void 0!==n&&n.hasFeedbackText&&o.push(null===n||void 0===n?void 0:n.feedbackId),null!==n&&void 0!==n&&n.hasHelpText&&o.push(null===n||void 0===n?void 0:n.helpTextId);var r=o.join(" "),a=u()(e,["isInvalid","isDisabled","isReadOnly","isRequired"]);return(0,i.Z)((0,i.Z)({},a),{},{nativeID:null!==(t=e.nativeID)&&void 0!==t?t:(null===n||void 0===n?void 0:n.nativeID)+"-input",disabled:e.isDisabled||(null===n||void 0===n?void 0:n.isDisabled),readOnly:e.isReadOnly||(null===n||void 0===n?void 0:n.isReadOnly),required:e.isRequired||(null===n||void 0===n?void 0:n.isRequired),accessibilityInvalid:c(e.isInvalid||(null===n||void 0===n?void 0:n.isInvalid)),accessibilityRequired:c(e.isRequired||(null===n||void 0===n?void 0:n.isRequired)),accessibilityReadOnly:c(e.isReadOnly||(null===n||void 0===n?void 0:n.isReadOnly)),accessibilityDescribedBy:r||void 0})}var y=function(){return a.useContext(v)}},94724:function(e,t,n){n.d(t,{II:function(){return I}});var i=n(42982),o=n(1413),r=n(70885),a=n(45987),l=n(72791),s=n(91171),u=n(70200),c=n(43291),d=n(96346),f=n(58300),p=n(2885),v=n(38549),h=function(e,t){return"underlined"===e?{outlineWidth:"0",boxShadow:"0 1px 0 0 ".concat(t)}:"unstyled"===e?{outlineWidth:0}:{outlineWidth:"0",boxShadow:"0 0 0 1px ".concat(t)}},m=n(95567),y=n(62778),b=n(99705),g=n(74623),x=["isHovered","isFocused","onKeyPress","InputLeftElement","InputRightElement","leftElement","rightElement"],Z=["ariaLabel","accessibilityLabel","type","isFullWidth","isDisabled","isReadOnly","fontFamily","fontWeight","fontStyle","placeholderTextColor","selectionColor","underlineColorAndroid","onFocus","onBlur","wrapperRef","_stack","_input"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},w.apply(this,arguments)}var C=(0,b.R)(s.Z),R=function(e,t){var n=e.isHovered,s=e.isFocused,b=e.onKeyPress,R=e.InputLeftElement,I=e.InputRightElement,O=e.leftElement,S=e.rightElement,j=(0,a.Z)(e,x),_=(0,c.Yp)({isDisabled:j.isDisabled,isInvalid:j.isInvalid,isReadOnly:j.isReadOnly,isRequired:j.isRequired,nativeID:j.nativeID}),D=l.useState(!1),F=(0,r.Z)(D,2),k=F[0],T=F[1],E=function(e,t){T(e),t()},P=l.useRef(null),q=(0,f.X)({},P).isHovered,A={isDisabled:_.disabled,isInvalid:_.accessibilityInvalid,isReadOnly:_.accessibilityReadOnly,isRequired:_.required},H=(0,v.n)("Input",(0,o.Z)((0,o.Z)({},A),j),{isDisabled:A.isDisabled,isHovered:n||q,isFocused:s||k,isInvalid:A.isInvalid,isReadOnly:A.isReadOnly}),L=H.ariaLabel,z=H.accessibilityLabel,B=H.type,W=H.isFullWidth,M=H.isDisabled,Y=H.isReadOnly,V=H.fontFamily,U=H.fontWeight,K=H.fontStyle,Q=H.placeholderTextColor,G=H.selectionColor,J=H.underlineColorAndroid,N=H.onFocus,X=H.onBlur,$=H.wrapperRef,ee=H._stack,te=H._input,ne=(0,a.Z)(H,Z),ie=(0,p.bH)(ne,[].concat((0,i.Z)(p.o6.margin),(0,i.Z)(p.o6.border),(0,i.Z)(p.o6.layout),(0,i.Z)(p.o6.flexbox),(0,i.Z)(p.o6.position),(0,i.Z)(p.o6.background),["shadow","opacity"])),oe=(0,r.Z)(ie,2),re=oe[0],ae=oe[1],le=(0,g.o)({fontFamily:V,fontWeight:null!==U&&void 0!==U?U:400,fontStyle:null!==K&&void 0!==K?K:"normal"}),se=(0,u.d)("colors",Q),ue=(0,u.d)("colors",G),ce=(0,u.d)("colors",J);return ne.focusOutlineColor=(0,u.d)("colors",ne.focusOutlineColor),ne.invalidOutlineColor=(0,u.d)("colors",ne.invalidOutlineColor),(0,d.M)(j)?null:(ne.focusOutlineColor&&k&&(re.borderColor=ne.focusOutlineColor,ee.style=h(j.variant,ne.focusOutlineColor)),ne.invalidOutlineColor&&j.isInvalid&&(re.borderColor=ne.invalidOutlineColor,ee.style=h(j.variant,ne.invalidOutlineColor)),l.createElement(y.Z,w({},ee,re,{ref:(0,m.l)([P,$]),isFocused:k}),R||O?R||O:null,l.createElement(C,w({},_,{secureTextEntry:"password"===B,accessible:!0,accessibilityLabel:L||z,editable:!M&&!Y,w:W?"100%":void 0},ae,le,{placeholderTextColor:se,selectionColor:ue,underlineColorAndroid:ce,onKeyPress:function(e){e.persist(),b&&b(e)},onFocus:function(e){E(!0,N?function(){return N(e)}:function(){})},onBlur:function(e){E(!1,X?function(){return X(e)}:function(){})}},te,{ref:(0,m.l)([t,P,$])})),I||S?I||S:null))},I=(0,l.memo)((0,l.forwardRef)(R))},70200:function(e,t,n){n.d(t,{d:function(){return a}});var i=n(48526),o=n(48929),r=n.n(o);function a(e,t,n){var o=(0,i.F)();if(Array.isArray(t)){var a=[];return n&&(a=Array.isArray(n)?n:[n]),t.map((function(t,n){var i,l="".concat(e,".").concat(t);return r()(o,l,null!==(i=a[n])&&void 0!==i?i:t)}))}var l="".concat(e,".").concat(t);return r()(o,l,null!==n&&void 0!==n?n:t)}},92810:function(e,t,n){var i;n.d(t,{Z:function(){return d}});var o=new Uint8Array(16);function r(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(o)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&a.test(e)},s=[],u=0;u<256;++u)s.push((u+256).toString(16).substr(1));var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!l(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(e,t,n){var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=i[o];return t}return c(i)}}}]);
//# sourceMappingURL=8586.d5978f31.chunk.js.map