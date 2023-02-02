"use strict";(self.webpackChunkapp_web_react=self.webpackChunkapp_web_react||[]).push([[8946,9996],{28586:function(e,t,n){n.r(t);var i=n(42982),o=n(74165),r=n(15861),l=n(70885),s=n(72791),a=n(74222),c=n(29996),u=n(55045),d=n(60961),f=n(18227),p=n(26686),v=n(94724),h=n(73528),m=n.n(h),y=n(92810),b=n(44428),g=n(763),x=n.n(g),Z=n(84234),w=n(70084),C=n(4200),R=n(80184);delete n.g.created;t.default=function(e){var t=e.profile,n=(0,s.useRef)(),h=(0,s.useRef)(),g=(0,s.useState)(null),I=(0,l.Z)(g,2),O=I[0],S=I[1],j=(0,s.useState)(""),_=(0,l.Z)(j,2),k=_[0],D=_[1],F=(0,s.useState)(0),T=(0,l.Z)(F,2),E=T[0],P=T[1],q=(0,s.useState)([]),H=(0,l.Z)(q,2),z=H[0],B=H[1],L=(0,s.useState)(!1),W=(0,l.Z)(L,2),A=(W[0],W[1]),M=(0,s.useState)({_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0,avatar:t&&t.pic?"".concat(C.G3,"/users/").concat(t._id,"/").concat(t&&t.pic?t.pic.id:"0"):null});(0,l.Z)(M,1)[0];(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://chat.shadow.properties",(n=(0,b.ZP)("https://chat.shadow.properties",{reconnection:!0,transports:["websocket"],allowUpgrades:!1,pingTimeout:3e4})).on("connect",(function(){B([]),n.emit("get:messages",{filter:{customer:t._id},skip:0,limit:10}),console.log("connected to support server"),console.log("support server socket id:",n.id)})).on("reconnect",function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("reconnected to support server");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).on("disconnect",(0,r.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("disconnected support server");case 1:case"end":return e.stop()}}),e)})))).on("error",(function(e){console.log("support server error",e)})),S(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e(),function(){O&&O.disconnect()}}),[]),(0,s.useEffect)((function(){return O&&O.on("pm",(function(e){e.nextagent||(B((function(t){return[e].concat((0,i.Z)(t))})),P(!E))})).on("messages",(function(e){A(!1),e&&e.length&&B((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(e))})),P(!E)})).on("connect:next:agent",(function(e){O.emit("chat",{_id:(0,y.Z)(),createdAt:m()().utc().toISOString(),text:e.text,nextagent:!e.switch,switch:!!e.switch&&e.switch,user:{_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0}})})),function(){O&&(O.off("chat"),O.off("messages"),B([]))}}),[O]),(0,s.useEffect)((function(){""===k&&h.current&&(h.current.focus(),h.current.value="",n.current.scrollToOffset({animated:!0,offset:0}))}),[k]);var Y=function(e){var n={_id:(0,y.Z)(),createdAt:m()().utc().toISOString(),text:e,user:{_id:t._id,name:t.firstname+" "+t.lastname,email:t.email,room:t.email,customer:!0}};O.emit("pm",n),D("")},K=(0,s.useCallback)((function(e){return e}),[]),Q=x().groupBy(z,(function(e){return m()(e.createdAt).format("MMM DD, YYYY")}));return(0,R.jsxs)(a.Z,{style:{height:"100vh"},flex:1,children:[(0,R.jsx)(Z.Z,{title:"Chat Support"}),(0,R.jsxs)(a.Z,{style:{boxShadow:"0px 3px 10px #0000001A",borderRadius:10,backgroundColor:"white",width:"100%",paddingTop:(0,w.vh)(80),height:"69.9vh",marginBottom:(0,w.vh)(10)},children:[(0,R.jsx)(c.O,{ListFooterComponent:0===z.length?null:(0,R.jsx)(u.Z,{marginTop:(0,w.vh)(-30),children:(0,R.jsx)(d.ZP,{onPress:function(){O.emit("get:messages",{filter:{customer:t._id},skip:z.length,limit:10}),A(!0)},style:{flex:1,borderRadius:50,width:(0,w.vw)(180),justifyContent:"center",paddingHorizontal:(0,w.vw)(10),paddingVertical:(0,w.vh)(5),backgroundColor:"rgba(125, 43, 233, 0.2)"},children:(0,R.jsx)(f.Z,{style:{textAlign:"center",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13),color:"rgba(51, 33, 75, 1)"},children:"Load earlier messages"})})}),inverted:!0,ref:n,contentContainerStyle:{marginBottom:40},style:{bottom:(0,w.vh)(60),height:300},data:Object.keys(Q),keyExtractor:K,renderItem:function(e){var n=e.item;e.index;return(0,R.jsxs)(a.Z,{children:[(0,R.jsx)(u.Z,{py:3,children:(0,R.jsx)(f.Z,{style:{fontSize:(0,w.vw)(13),fontFamily:"Poppins",color:"rgba(0,0,0,0.5)"},children:n===m()().format("MMM DD, YYYY")?"Today":n})}),Q[n].reverse().map((function(e){var n=e.user&&e.user._id===t._id;return(0,R.jsx)(p.Z,{style:{justifyContent:n?"flex-end":"flex-start"},children:(0,R.jsxs)(a.Z,{style:{marginHorizontal:(0,w.vw)(15),marginVertical:(0,w.vh)(5),padding:(0,w.vw)(5),borderRadius:8,borderTopLeftRadius:n?8:0,borderTopRightRadius:n?0:8,backgroundColor:n?"rgba(125, 43, 233, 0.8)":"rgba(0,0,0, 0.05)",maxWidth:(0,w.vw)(400)},children:[(0,R.jsx)(f.Z,{style:{color:n?"white":"rgba(0,0,0,0.8)",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13)},children:e.text}),(0,R.jsx)(f.Z,{style:{fontFamily:"Poppins",fontSize:(0,w.vw)(11),color:n?"white":"rgba(0,0,0,0.8)",textAlign:"right",marginTop:(0,w.vh)(-2)},children:m()(e.createdAt).format("HH:mm a")})]})},e._id)}))]})}}),(0,R.jsx)(p.Z,{flex:1,style:{position:"absolute",bottom:2,height:(0,w.vh)(50),justifyContent:"space-between",width:"100%",borderTopColor:"rgba(0,0,0,0.15)",borderTopWidth:(0,w.vw)(1.5)},children:(0,R.jsx)(v.II,{autoComplete:"Off",autoFocus:!0,ref:h,variant:"unstyled",width:"full",placeholder:"Type something",placeholderTextColor:"rgba(145, 145, 145, 1)",style:{height:(0,w.vh)(40),fontFamily:"Poppins_medium",fontSize:(0,w.vw)(13),color:"rgba(0,0,0,0.8)"},onSubmitEditing:function(e){Y(e.target.value)},onChange:function(e){D(e.target.value)},InputRightElement:(0,R.jsx)(d.ZP,{onPress:function(){Y(h.current.value)},style:{marginHorizontal:(0,w.vw)(15)},children:(0,R.jsx)(f.Z,{style:{color:""===k?"rgba(145, 145, 145, 1)":"#303030",fontFamily:"Poppins_medium",fontSize:(0,w.vw)(15)},children:"Send"})})})})]})]})}},84234:function(e,t,n){var i=n(1413),o=(n(72791),n(26686)),r=n(74222),l=n(18227),s=n(70084),a=n(80184);t.Z=function(e){var t=e.title,n=e.subtitle,c=e.rightElement,u=e.noborder,d=void 0!==u&&u,f={borderBottomColor:"rgba(0,0,0, 0.15)",borderBottomWidth:(0,s.vw)(1.5),marginBottom:(0,s.vh)(20)};return d&&(f={}),(0,a.jsxs)(o.Z,{style:(0,i.Z)({paddingBottom:(0,s.vh)(16)},f),justifyContent:"space-between",children:[(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{style:{fontSize:(0,s.vw)(24),color:"#303030",fontFamily:"Poppins_medium"},children:t}),(0,a.jsx)(l.Z,{style:{fontSize:(0,s.vw)(13),color:"#666666",fontFamily:"Poppins"},children:n})]}),c]})}},29996:function(e,t,n){n.d(t,{O:function(){return v}});var i=n(45987),o=n(72791),r=n(41965),l=n(38549),s=n(47556),a=n(99705),c=n(96346),u=["_contentContainerStyle","contentContainerStyle"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}var f=(0,a.R)(r.Z),p=function(e,t){var n=(0,l.n)("FlatList",e),r=n._contentContainerStyle,a=n.contentContainerStyle,p=(0,i.Z)(n,u),v=(0,s.t)(r||{});return(0,c.M)(e)?null:o.createElement(f,d({},p,{contentContainerStyle:a||v,ref:t}))},v=(0,o.forwardRef)(p)},43291:function(e,t,n){n.d(t,{Ug:function(){return v},Yp:function(){return m},NJ:function(){return y},qQ:function(){return h}});var i=n(1413),o=n(70885),r=n(45987),l=n(72791),s=n(8264),a=n(87357),c=n.n(a),u=function(e){return!!e||void 0},d=n(7238),f=n(763),p=["nativeID","isRequired","isInvalid","isDisabled","isReadOnly"],v=l.createContext({});function h(e){var t=e.nativeID,n=e.isRequired,i=e.isInvalid,a=e.isDisabled,c=e.isReadOnly,u=(0,r.Z)(e,p),v=(0,f.uniqueId)();l.useContext(d.t).disableCSSMediaQueries||(v=(0,s.Me)());var h=t||"field-".concat(v),m="".concat(h,"-label"),y="".concat(h,"-feedback"),b="".concat(h,"-helptext"),g=l.useState(!1),x=(0,o.Z)(g,2),Z=x[0],w=x[1],C=l.useState(!1),R=(0,o.Z)(C,2);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!c,isDisabled:!!a,hasFeedbackText:Z,setHasFeedbackText:w,hasHelpText:R[0],setHasHelpText:R[1],nativeID:h,labelId:m,feedbackId:y,helpTextId:b,htmlProps:u}}function m(e){var t,n=y(),o=[];null!==n&&void 0!==n&&n.hasFeedbackText&&o.push(null===n||void 0===n?void 0:n.feedbackId),null!==n&&void 0!==n&&n.hasHelpText&&o.push(null===n||void 0===n?void 0:n.helpTextId);var r=o.join(" "),l=c()(e,["isInvalid","isDisabled","isReadOnly","isRequired"]);return(0,i.Z)((0,i.Z)({},l),{},{nativeID:null!==(t=e.nativeID)&&void 0!==t?t:(null===n||void 0===n?void 0:n.nativeID)+"-input",disabled:e.isDisabled||(null===n||void 0===n?void 0:n.isDisabled),readOnly:e.isReadOnly||(null===n||void 0===n?void 0:n.isReadOnly),required:e.isRequired||(null===n||void 0===n?void 0:n.isRequired),accessibilityInvalid:u(e.isInvalid||(null===n||void 0===n?void 0:n.isInvalid)),accessibilityRequired:u(e.isRequired||(null===n||void 0===n?void 0:n.isRequired)),accessibilityReadOnly:u(e.isReadOnly||(null===n||void 0===n?void 0:n.isReadOnly)),accessibilityDescribedBy:r||void 0})}var y=function(){return l.useContext(v)}},94724:function(e,t,n){n.d(t,{II:function(){return I}});var i=n(42982),o=n(1413),r=n(70885),l=n(45987),s=n(72791),a=n(91171),c=n(70200),u=n(43291),d=n(96346),f=n(58300),p=n(2885),v=n(38549),h=function(e,t){return"underlined"===e?{outlineWidth:"0",boxShadow:"0 1px 0 0 ".concat(t)}:"unstyled"===e?{outlineWidth:0}:{outlineWidth:"0",boxShadow:"0 0 0 1px ".concat(t)}},m=n(95567),y=n(62778),b=n(99705),g=n(74623),x=["isHovered","isFocused","onKeyPress","InputLeftElement","InputRightElement","leftElement","rightElement"],Z=["ariaLabel","accessibilityLabel","type","isFullWidth","isDisabled","isReadOnly","fontFamily","fontWeight","fontStyle","placeholderTextColor","selectionColor","underlineColorAndroid","onFocus","onBlur","wrapperRef","_stack","_input"];function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},w.apply(this,arguments)}var C=(0,b.R)(a.Z),R=function(e,t){var n=e.isHovered,a=e.isFocused,b=e.onKeyPress,R=e.InputLeftElement,I=e.InputRightElement,O=e.leftElement,S=e.rightElement,j=(0,l.Z)(e,x),_=(0,u.Yp)({isDisabled:j.isDisabled,isInvalid:j.isInvalid,isReadOnly:j.isReadOnly,isRequired:j.isRequired,nativeID:j.nativeID}),k=s.useState(!1),D=(0,r.Z)(k,2),F=D[0],T=D[1],E=function(e,t){T(e),t()},P=s.useRef(null),q=(0,f.X)({},P).isHovered,H={isDisabled:_.disabled,isInvalid:_.accessibilityInvalid,isReadOnly:_.accessibilityReadOnly,isRequired:_.required},z=(0,v.n)("Input",(0,o.Z)((0,o.Z)({},H),j),{isDisabled:H.isDisabled,isHovered:n||q,isFocused:a||F,isInvalid:H.isInvalid,isReadOnly:H.isReadOnly}),B=z.ariaLabel,L=z.accessibilityLabel,W=z.type,A=z.isFullWidth,M=z.isDisabled,Y=z.isReadOnly,K=z.fontFamily,Q=z.fontWeight,U=z.fontStyle,V=z.placeholderTextColor,G=z.selectionColor,J=z.underlineColorAndroid,N=z.onFocus,X=z.onBlur,$=z.wrapperRef,ee=z._stack,te=z._input,ne=(0,l.Z)(z,Z),ie=(0,p.bH)(ne,[].concat((0,i.Z)(p.o6.margin),(0,i.Z)(p.o6.border),(0,i.Z)(p.o6.layout),(0,i.Z)(p.o6.flexbox),(0,i.Z)(p.o6.position),(0,i.Z)(p.o6.background),["shadow","opacity"])),oe=(0,r.Z)(ie,2),re=oe[0],le=oe[1],se=(0,g.o)({fontFamily:K,fontWeight:null!==Q&&void 0!==Q?Q:400,fontStyle:null!==U&&void 0!==U?U:"normal"}),ae=(0,c.d)("colors",V),ce=(0,c.d)("colors",G),ue=(0,c.d)("colors",J);return ne.focusOutlineColor=(0,c.d)("colors",ne.focusOutlineColor),ne.invalidOutlineColor=(0,c.d)("colors",ne.invalidOutlineColor),(0,d.M)(j)?null:(ne.focusOutlineColor&&F&&(re.borderColor=ne.focusOutlineColor,ee.style=h(j.variant,ne.focusOutlineColor)),ne.invalidOutlineColor&&j.isInvalid&&(re.borderColor=ne.invalidOutlineColor,ee.style=h(j.variant,ne.invalidOutlineColor)),s.createElement(y.Z,w({},ee,re,{ref:(0,m.l)([P,$]),isFocused:F}),R||O?R||O:null,s.createElement(C,w({},_,{secureTextEntry:"password"===W,accessible:!0,accessibilityLabel:B||L,editable:!M&&!Y,w:A?"100%":void 0},le,se,{placeholderTextColor:ae,selectionColor:ce,underlineColorAndroid:ue,onKeyPress:function(e){e.persist(),b&&b(e)},onFocus:function(e){E(!0,N?function(){return N(e)}:function(){})},onBlur:function(e){E(!1,X?function(){return X(e)}:function(){})}},te,{ref:(0,m.l)([t,P,$])})),I||S?I||S:null))},I=(0,s.memo)((0,s.forwardRef)(R))}}]);
//# sourceMappingURL=8946.f081e561.chunk.js.map