"use strict";(self.webpackChunkapp_web_react=self.webpackChunkapp_web_react||[]).push([[7095],{65785:function(e,r){r.Z={primary:"rgba(125, 43, 233, 1)",accent:"#FFC107"}},12720:function(e,r,t){t.d(r,{$3:function(){return w},Ji:function(){return m},LG:function(){return E},QB:function(){return b},RA:function(){return T},S2:function(){return j},SS:function(){return y},UK:function(){return h},V1:function(){return g},Vf:function(){return Z},lo:function(){return l},m3:function(){return f},n8:function(){return v},qK:function(){return P},sB:function(){return S},xI:function(){return x},xX:function(){return O}});var n=t(1413),o=t(4942),a=t(74165),s=t(15861),c=(t(763),t(72426)),i=t.n(c),u=t(4200),p=t(75247),d=function(){if(null!==localStorage.getItem("@shadowuser"))return JSON.parse(localStorage.getItem("@shadowuser"))},f=function(){var e=localStorage.getItem("@propertyFilter"),r=0;if(e){var t=JSON.parse(e);for(var n in t)if("date"===n){var o=t.date;o.from&&o.to&&(r+=1)}else if("sort"===n)""!==t.sort&&(r+=1);else if("order"===n)"desc"===t.order&&(r+=1);else{if("ts"===n)continue;r+=t[n].length}}return r},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(){var n=(0,s.Z)((0,a.Z)().mark((function n(s,c){var l,h,w,g,m,v,x,y,k,b;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=d(),h=l.token,w=f()>0,g=localStorage.getItem("@propertyFilter"),m={},v={_id:-1},w&&((g=JSON.parse(g)).date&&g.date.from&&g.date.to&&(m.fromdate=i()(g.date.from).startOf("day").toISOString(),m.todate=i()(g.date.to).endOf("day").toISOString()),g.tags.length>0&&(m.tags=g.tags),g.status.length>0&&(m.status=g.status),g.bath.length>0&&(m.bath=g.bath.map((function(e){return"10+"===e&&(e=10),parseInt(e)}))),g.bed.length>0&&(m.bed=g.bed.map((function(e){return"10+"===e&&(e=10),parseInt(e)}))),g.acre.length>0&&(m.acre=g.acre.map((function(e){return e}))),g.sqft.length>0&&(m.sqft=g.sqft.map((function(e){return e}))),g.year.length>0&&(m.yearbuilt=g.year.map((function(e){return e.toString()}))),g.ev.length>0&&(m.ev=g.ev.map((function(e){return e=(e=(e=(e=(e=(e=e.replace(",","")).replace(",","")).replace(",","")).replace("$","")).replace("+","")).replace("0-99999","99999"),parseInt(e)}))),""!==g.sort&&(console.log(g.sort,g.order),x=g.sort,"ser"===g.sort&&(x="createdUser.firstname"),v=(0,o.Z)({},x,"desc"===g.order?-1:1))),y=JSON.stringify({skip:1===e?0:(e-1)*r,limit:parseInt(r),sort:v,search:t,fields:{_id:1,name:1,propertyaddress:1,owneraddress:1,coords:1,bed:1,bath:1,floor:1,sqft:1,acre:1,ev:1,yearbuilt:1,status:1,tags:1,apn:1,tid:1,mid:1,pic:1,created:1,modified:1,"createdUser._id":1,"createdUser.firstname":1,"createdUser.lastname":1,"createdUser.pic":1},filter:m}),n.prev=7,n.next=10,fetch("".concat(u.T5,"/properties/get"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+h},body:y});case 10:if((k=n.sent).ok){n.next=18;break}return n.t0=console,n.next=15,k.json();case 15:throw n.t1=n.sent,n.t0.log.call(n.t0,n.t1),new Error("Something went wrong!");case 18:return n.next=20,k.json();case 20:return b=n.sent,s({type:p.tm,properties:b.data?b.data:[],page:e,total:b.count}),n.abrupt("return",b.count?b.count:0);case 25:throw n.prev=25,n.t2=n.catch(7),console.log("fetchProperties Error ",n.t2),n.t2;case 29:case"end":return n.stop()}}),n,null,[[7,25]])})));return function(e,r){return n.apply(this,arguments)}}()},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,o){var s,c,i,f,l;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=d(),c=s.token,i=JSON.stringify({skip:1===e?0:(e-1)*r,limit:r,sort:{default:-1}}),t.prev=2,t.next=5,fetch("".concat(u.T5,"/status/get"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:i});case 5:if((f=t.sent).ok){t.next=8;break}throw new Error("Something went wrong!");case 8:return t.next=10,f.json();case 10:(l=t.sent).data&&n({type:p.ev,data:l.data}),t.next=18;break;case 14:throw t.prev=14,t.t0=t.catch(2),console.log("fetchStatus Error ",t.t0),t.t0;case 18:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e,r){return t.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,o){var s,c,i,f,l,h,w;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=d(),c=s.token,i=JSON.stringify({skip:1===e?0:(e-1)*r,limit:r,sort:{default:-1}}),t.prev=2,t.next=5,fetch("".concat(u.T5,"/tags/get"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:i});case 5:if((f=t.sent).ok){t.next=13;break}return t.next=9,f.json();case 9:throw l=t.sent,h="Something went wrong!",l.error&&(h=l.error),new Error(h);case 13:return t.next=15,f.json();case 15:(w=t.sent).data&&n({type:p.Fe,data:w.data}),t.next=23;break;case 19:throw t.prev=19,t.t0=t.catch(2),console.log("fetchTags Error ",t.t0),t.t0;case 23:case"end":return t.stop()}}),t,null,[[2,19]])})));return function(e,r){return t.apply(this,arguments)}}()},g=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,r.prev=1,r.next=4,fetch("".concat(u.T5,"/properties/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}});case 4:if((c=r.sent).ok){r.next=12;break}return r.t0=console,r.next=9,c.json();case 9:throw r.t1=r.sent,r.t0.log.call(r.t0,r.t1),new Error("Something went wrong!");case 12:return r.next=14,c.json();case 14:return(i=r.sent).data&&t({type:p.uw,data:i.data}),r.abrupt("return",i.data);case 19:throw r.prev=19,r.t2=r.catch(1),console.log("fetchPropertyById Error ",r.t2),r.t2;case 23:case"end":return r.stop()}}),r,null,[[1,19]])})));return function(e,t){return r.apply(this,arguments)}}()},m=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,o){var s,c,i,p,f,l,h,w;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=d(),c=s.token,i=e._id,delete e._id,t.next=5,fetch("".concat(u.T5,"/properties/").concat(i),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify(e)});case 5:if((p=t.sent).ok){t.next=17;break}return t.next=9,p.json();case 9:if(f=t.sent,console.log("setDefaultImage",f.error),l="Something went wrong!",!f.error){t.next=16;break}throw new Error(f.error);case 16:throw new Error(l);case 17:return t.next=19,p.json();case 19:(h=t.sent).data&&(r&&r.emit("property:updated",h.data),w=o().properties.availableProperties,k(n,w,h.data));case 21:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()},v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var t=(0,s.Z)((0,a.Z)().mark((function t(n,o){var s,c,i,p,f,l,h,w;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=d(),c=s.token,i=e._id,delete e._id,t.next=6,fetch("".concat(u.T5,"/properties/").concat(i),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify(e)});case 6:if((p=t.sent).ok){t.next=18;break}return t.next=10,p.json();case 10:if(f=t.sent,console.log("updatePropertyStatus",f.error),l="Something went wrong!",!f.error){t.next=17;break}throw new Error(f.error);case 17:throw new Error(l);case 18:return t.next=20,p.json();case 20:return h=t.sent,w=o().properties.availableProperties,r&&r.emit("property:updated",h.data),k(n,w,h.data),t.abrupt("return",h.data);case 27:throw t.prev=27,t.t0=t.catch(0),new Error(t.t0.message);case 30:case"end":return t.stop()}}),t,null,[[0,27]])})));return function(e,r){return t.apply(this,arguments)}}()},x=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,p,f,l,h;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,r.next=5,fetch("".concat(u.T5,"/properties/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 5:if((i=r.sent).ok){r.next=17;break}return r.next=9,i.json();case 9:if(p=r.sent,console.log("setDefaultImage",p.error),f="Something went wrong!",!p.error){r.next=16;break}throw new Error(p.error);case 16:throw new Error(f);case 17:return r.next=19,i.json();case 19:l=r.sent,h=n().properties.availableProperties,k(t,h,l.data);case 22:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},y=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,p;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,r.next=3,fetch("".concat(u.T5,"/tags/add"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 3:if((c=r.sent).ok){r.next=15;break}return r.next=7,c.json();case 7:if(i=r.sent,console.log("setDefaultImage",i.error),p="Something went wrong!",!i.error){r.next=14;break}throw new Error(i.error);case 14:throw new Error(p);case 15:return r.next=17,w(1,0);case 17:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},k=function(e,r,t){e({type:p.uw,data:t});var n=r.map((function(e){if(e._id===t._id)for(var r in e)Object.keys(t).includes(r)&&(e[r]=t[r]);return e}));e({type:p.tm,properties:n})},b=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,f,l,h;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,r.next=5,fetch("".concat(u.T5,"/properties/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 5:if((i=r.sent).ok){r.next=17;break}return r.next=9,i.json();case 9:if(f=r.sent,console.log("savePropertyNote",f.error),l="Something went wrong!",!f.error){r.next=16;break}throw new Error(f.error);case 16:throw new Error(l);case 17:return r.next=19,i.json();case 19:if(!(h=r.sent).data){r.next=23;break}return t({type:p.Tl,data:h.data}),r.abrupt("return",h.data);case 23:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},S=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,p,f,l,h,w;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,i="".concat(u.T5,"/properties/").concat(c),r.next=6,fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 6:if((p=r.sent).ok){r.next=16;break}return r.next=10,p.json();case 10:if(f=r.sent,console.log("saveMailingAddress",f.error),l="Something went wrong!",!f.error){r.next=15;break}throw new Error(f.error);case 15:throw new Error(l);case 16:return r.next=18,p.json();case 18:h=r.sent,w=n().properties.availableProperties,k(t,w,h.data);case 21:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Z=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,p,f,l,h,w;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,i="".concat(u.T5,"/properties/").concat(c),r.next=6,fetch(i,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 6:if((p=r.sent).ok){r.next=18;break}return r.next=10,p.json();case 10:if(f=r.sent,console.log("savePhoneNumbers",f.error),l="Something went wrong!",!f.error){r.next=17;break}throw new Error(f.error);case 17:throw new Error(l);case 18:return r.next=20,p.json();case 20:h=r.sent,w=n().properties.availableProperties,k(t,w,h.data);case 23:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},T=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,o){var s,c,i,p,f,l,h,w,g,m,v,x;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=d(),c=s.token,i=o().properties,p=i.fetchedProperty,f=i.availableProperties,l=e._id,delete e._id,h=p.campaign&&Object.keys(p.campaign).length>0?p.campaign:null,w="".concat(u.T5,"/properties/").concat(l),r.next=8,fetch(w,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+c},body:JSON.stringify((0,n.Z)((0,n.Z)({},e),{},{campaign:h}))});case 8:if((g=r.sent).ok){r.next=20;break}return r.next=12,g.json();case 12:if(m=r.sent,console.log("saveEmails",m.error),v="Something went wrong!",!m.error){r.next=19;break}throw new Error(m.error);case 19:throw new Error(v);case 20:return r.next=22,g.json();case 22:x=r.sent,k(t,f,x.data);case 24:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},j=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,f,l,h;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,r.next=5,fetch("".concat(u.T5,"/properties/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 5:if((i=r.sent).ok){r.next=17;break}return r.next=9,i.json();case 9:if(f=r.sent,console.log("updatePostCardName",f.error),l="Something went wrong!",!f.error){r.next=16;break}throw new Error(f.error);case 16:throw new Error(l);case 17:return r.next=19,i.json();case 19:(h=r.sent).data&&t({type:p.uw,data:h.data});case 21:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},E=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,i,f,l,h,w;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=d(),s=o.token,c=e._id,delete e._id,r.next=5,fetch("".concat(u.T5,"/properties/").concat(c),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify(e)});case 5:if((i=r.sent).ok){r.next=13;break}return r.next=9,i.json();case 9:throw f=r.sent,l="Something went wrong!",f&&f.error&&(l=f.error),new Error(l);case 13:return r.next=15,i.json();case 15:h=r.sent,w=n().properties.availableProperties,k(t,w,h.data),t({type:p.uw,data:h.data});case 19:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},P=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return function(){var c=(0,s.Z)((0,a.Z)().mark((function s(c,i){var f,l,h,w,g,m,v,x,y,k,b,S;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(f=d(),l=f.token,h=i().auth.profile,w=0,"None"===r&&(r=null),0!==(g=h&&h.plan&&h.plan.smartsearch||h&&h.freetrial&&h.freetrial.smartsearch||0)){a.next=7;break}throw new Error("Cannot do smartsearch, subscription details not found.");case 7:return a.prev=7,a.next=10,fetch("".concat(u.T5,"/properties/bulkadd"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+l},body:JSON.stringify({address:e,pipeline:r,route_id:t.g.route_id?t.g.route_id:null,autosmartsearch:o,price:g})});case 10:if((m=a.sent).ok){a.next=18;break}return a.next=14,m.json();case 14:throw v=a.sent,x="something went wrong",v.error&&(x=v.error),new Error(x);case 18:return a.next=20,m.json();case 20:return(y=a.sent).data&&(k=y.data.bulkProperties,b=y.data.stateProperties,S=y.data.zipProperties,w=k&&k.length||0,n&&n.emit("property:add",{bulkproperties:k,stateproperties:b,zipproperties:S}),c({type:p.qx,data:k.reverse()}),c({type:p.td,data:k}),c({type:p.cI,data:b}),c({type:p.A1,data:S})),a.abrupt("return",{added:w,notfound:e.length-w});case 25:if(a.prev=25,a.t0=a.catch(7),"OWNER-NOT-FOUND"!==a.t0.message){a.next=29;break}throw new Error(a.t0.message);case 29:throw console.log("Bulk add error",a.t0.message),a.t0;case 31:case"end":return a.stop()}}),s,null,[[7,25]])})));return function(e,r){return c.apply(this,arguments)}}()},O=function(e){return function(){var r=(0,s.Z)((0,a.Z)().mark((function r(t,n){var o,s,c,p,f,l,h,w,g,m,v,x,y,b,S,Z,T;return(0,a.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,o=d(),s=o.token,c=o.price,p=o.freetrial,f=o.sub,l=n().properties,h=l.fetchedProperty,w=l.availableProperties,h._id===e){r.next=6;break}throw new Error("Property not found for smartsearch.");case 6:if(!h||h.owneraddress){r.next=8;break}throw new Error("Owner address not found for smartsearch.");case 8:if(g=h.owneraddress,m=!(h.emails.length>0),v=!(h.phones.length>0),x=c.smartsearch||p.smartsearch||0,!i()(f.end).utc().isBefore(i()().utc())||0!==x){r.next=14;break}throw new Error("Cannot do smartsearch, subscription details not found.");case 14:return y=h.campaign?h.campaign:null,r.next=17,fetch("".concat(u.T5,"/properties/smartsearch/").concat(e),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s},body:JSON.stringify({ff:g,emaildefault:m,phonedefault:v,campaign:y,price:x,tid:h.tid.toString()})});case 17:if((b=r.sent).ok){r.next=25;break}return r.next=21,b.json();case 21:throw S=r.sent,Z="Something went wrong!",S.error&&(Z=S.error),new Error(Z);case 25:return r.next=27,b.json();case 27:return(T=r.sent).data&&k(t,w,T.data),r.abrupt("return",T.data);case 32:throw r.prev=32,r.t0=r.catch(0),console.log("Error ",r.t0),r.t0;case 36:case"end":return r.stop()}}),r,null,[[0,32]])})));return function(e,t){return r.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=7095.173f0905.chunk.js.map