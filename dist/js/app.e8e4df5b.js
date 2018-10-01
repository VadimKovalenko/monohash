(function(e){function t(t){for(var r,o,s=t[0],i=t[1],p=t[2],l=0,u=[];l<s.length;l++)o=s[l],a[o]&&u.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(u.length)u.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},"09fa":function(e,t,n){},"1c26":function(e,t,n){},"336c":function(e,t,n){"use strict";var r=n("6bb0"),a=n.n(r);a.a},"3e8e":function(e,t,n){},"4e22":function(e,t,n){"use strict";var r=n("09fa"),a=n.n(r);a.a},"531d":function(e,t,n){"use strict";var r=n("1c26"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("ba4c"),a=n.n(r),c=n("43f9"),o=n.n(c),s=n("8c4f"),i=n("6112"),p=n.n(i),d=(n("51de"),n("e094"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app md-layout"}},[n("router-view")],1)}),l=[],u={name:"App"},f=u,y=(n("034f"),n("2877")),m=Object(y["a"])(f,d,l,!1,null,null,null);m.options.__file="App.vue";var v=m.exports,h=n("2b0e"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("h1",[e._v(e._s(e.title))]),n("h2",[e._v(e._s(e.msg))]),n("div",{staticClass:"tab-layout"},[n("md-tabs",{attrs:{"md-sync-route":""}},[n("md-tab",{attrs:{id:"tab-encryption","md-label":"Encryption"}},[n("Encrypt")],1),n("md-tab",{attrs:{id:"tab-decryption","md-label":"Decryption"}},[n("Decrypt")],1)],1)],1)])},_=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-field",[n("label",[e._v("Paste encrypted text for decryption")]),n("md-textarea",{model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),n("md-field",[n("label",[e._v("Related private key")]),n("md-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("md-button",{staticClass:"md-raised md-primary decrypt-btn",on:{click:function(t){e.handleDecryptText(e.textarea,e.password)}}},[e._v("Decrypt")]),n("transition",{attrs:{name:"fade"}},[e.decrypted?n("DecryptResponse",{attrs:{decryptedData:e.decrypted},on:{closeDecryptionBlockChild:e.closeDecryptionBlockParent}}):e._e()],1)],1)},w=[],k=(n("96cf"),n("3040")),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-card",{staticClass:"response-block"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("Decryption complete")]),n("md-icon",{staticClass:"close-btn"},[n("span",{on:{click:e.closeDecryptionBlockChild}},[e._v("close")])])],1),n("md-card-content",[n("p",[e._v(e._s(e.decryptedData))])])],1)],1)},E=[],g={name:"DencryptResponse",props:{decryptedData:{type:String,required:!1}},methods:{closeDecryptionBlockChild:function(){this.$emit("closeDecryptionBlockChild")}}},C=g,P=(n("336c"),Object(y["a"])(C,D,E,!1,null,"8fd5d3c0",null));P.options.__file="DecryptResponse.vue";var O=P.exports,j=n("bc3a"),R=n.n(j),B=function(){return R.a.create({baseURL:"https://monohash-data-crypto.herokuapp.com/"})},S={decryptPost:function(e,t){return B().post("decrypt",{text:e,password:t})}},$={name:"Decrypt",data:function(){return{textarea:"",password:"",decrypted:""}},methods:{handleDecryptText:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S.decryptPost(t,n);case 2:r=e.sent,this.decrypted=r.data;case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),closeDecryptionBlockParent:function(){this.decrypted=""}},components:{DecryptResponse:O}},M=$,T=(n("daed"),Object(y["a"])(M,x,w,!1,null,"eeff926c",null));T.options.__file="Decrypt.vue";var q=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-field",[n("label",[e._v("Create your private key")]),n("md-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("md-field",[n("label",[e._v("Input text to encrypt")]),n("md-textarea",{model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),n("md-button",{staticClass:"md-raised md-accent encrypt-btn",on:{click:function(t){e.handleEncryptText(e.textarea,e.password)}}},[e._v("Encrypt")]),n("transition",{attrs:{name:"fade"}},[e.encrypted?n("EncryptResponse",{attrs:{password:e.responsePassword,encryptedData:e.encrypted},on:{closeEncryptionBlockChild:e.closeEncryptionBlockParent}}):e._e()],1)],1)},J=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-card",{staticClass:"response-block"},[n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("QR-code for your key:")]),n("md-icon",{staticClass:"close-btn"},[n("span",{on:{click:e.closeEncryptionBlockChild}},[e._v("close")])])],1),n("md-card-content",[n("div",{staticClass:"qr-block"},[n("qriously",{attrs:{size:150},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)]),n("md-card-header",[n("div",{staticClass:"md-title"},[e._v("Your encrypted text:")])]),n("md-card-content",[n("p",[e._v(e._s(e.encryptedData))])])],1)],1)},I=[],L={name:"EncryptResponse",props:{encryptedData:{type:String,required:!1},password:{type:String,required:!0}},methods:{closeEncryptionBlockChild:function(){this.$emit("closeEncryptionBlockChild")}}},Q=L,U=(n("cea3"),Object(y["a"])(Q,z,I,!1,null,"8f6e5740",null));U.options.__file="EncryptResponse.vue";var Y=U.exports,F={ecnryptPost:function(e,t){return B().post("encrypt",{text:e,password:t})}},G={name:"Encrypt",data:function(){return{textarea:"",password:"",encrypted:"",responsePassword:""}},methods:{handleEncryptText:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.ecnryptPost(t,n);case 2:r=e.sent,this.encrypted=r.data,this.responsePassword=n;case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),closeEncryptionBlockParent:function(){this.encrypted="",this.responsePassword=""}},components:{EncryptResponse:Y}},H=G,K=(n("531d"),Object(y["a"])(H,A,J,!1,null,"3c5b24e0",null));K.options.__file="Encrypt.vue";var N=K.exports,V={name:"Main",data:function(){return{msg:"monohash",title:"0--#"}},components:{Decrypt:q,Encrypt:N}},W=V,X=(n("4e22"),Object(y["a"])(W,b,_,!1,null,"17ffcec7",null));X.options.__file="Main.vue";var Z=X.exports;h["default"].use(s["a"]);var ee=new s["a"]({mode:"history",routes:[{path:"/",name:"Main",component:Z,mode:"history",history:!0}]});a.a.config.productionTip=!1,a.a.use(o.a),a.a.use(s["a"]),a.a.use(p.a),new a.a({el:"#app",router:ee,components:{App:v},template:"<App/>"})},"6bb0":function(e,t,n){},"82a3":function(e,t,n){},c21b:function(e,t,n){},cea3:function(e,t,n){"use strict";var r=n("3e8e"),a=n.n(r);a.a},daed:function(e,t,n){"use strict";var r=n("82a3"),a=n.n(r);a.a}});
//# sourceMappingURL=app.e8e4df5b.js.map