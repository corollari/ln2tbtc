(this["webpackJsonpln2tbtc-client"]=this["webpackJsonpln2tbtc-client"]||[]).push([[0],{144:function(e,t,n){e.exports=n.p+"static/media/lightning.e641e8b5.png"},145:function(e,t,n){e.exports=n.p+"static/media/tBTC.bc04593f.png"},265:function(e,t,n){e.exports=n(570)},270:function(e,t,n){},274:function(e,t,n){},292:function(e,t,n){},295:function(e,t,n){},307:function(e,t){},316:function(e,t){},334:function(e,t){},336:function(e,t){},354:function(e,t){},355:function(e,t){},357:function(e,t){},358:function(e,t){},434:function(e,t){},436:function(e,t){},445:function(e,t){},447:function(e,t){},472:function(e,t){},474:function(e,t){},480:function(e,t){},481:function(e,t){},483:function(e,t){},495:function(e,t){},498:function(e,t){},503:function(e,t){},514:function(e,t){},517:function(e,t){},569:function(e,t,n){},570:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(18),o=n.n(l),c=(n(270),n(40)),i=n(620),u=n(631),s=n(619),m=n(617),d=n(618),b=n(616),f=n(613),p=r.a.forwardRef((function(e,t){return r.a.createElement(f.a,Object.assign({direction:"up",ref:t},e))}));function h(e){return r.a.createElement(u.a,{open:e.open,TransitionComponent:p,keepMounted:!0,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(b.a,{id:"alert-dialog-title"},e.title),r.a.createElement(m.a,null,r.a.createElement(d.a,{id:"alert-dialog-description"},e.children)),r.a.createElement(s.a,null,r.a.createElement(i.a,{onClick:e.handleClose,color:"primary",autoFocus:!0},"Close")))}n(274);function E(){var e=r.a.useState(null),t=Object(c.a)(e,2),n=t[0],a=t[1];r.a.Fragment;return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://github.com/corollari/ln2tBTC"},"Code"),"\xa0\xb7\xa0",r.a.createElement("a",{href:"https://github.com/corollari/ln2tBTC/blob/master/README.md"},"Docs"),"\xa0\xb7\xa0",r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){return a("about")}},"About"),"\xa0\xb7\xa0",r.a.createElement("button",{type:"button",className:"link-button",onClick:function(){return a("contact")}},"Contact us"),r.a.createElement(h,{title:"about"===n?"About":"Contact us",open:null!==n,handleClose:function(){a(null)}},"about"===n?r.a.createElement(r.a.Fragment,null,"LN2tBTC is a decentralized service that enables trustless swaps between tBTC and BTC on the lightning network.",r.a.createElement("br",null),r.a.createElement("br",null),"It is based on a protocol derived from submarine swaps and it's served by a network of liquidity providers that anyone can join.",r.a.createElement("br",null),r.a.createElement("br",null),"If you'd like to learn more about how everything works check out our"," ",r.a.createElement("a",{href:"https://github.com/corollari/ln2tBTC/blob/master/README.md"},"our docs"),"."):r.a.createElement(r.a.Fragment,null,"Just drop a message on"," ",r.a.createElement("a",{href:"https://discord.com/channels/590951101600235531/681226760209432608/748490345217654786"},"Keep's discord")," ","tagging me (@corollari#2127) or send me an email at admin@ln2tbtc.com")))}var g=n(253),w=n(250),v=n.n(w),C=n(621),x=n(32),k=n(625),O=n(629),j=n(626),y=n(148),F=n(628),T=n(632),N=n(627),S=n(144),B=n.n(S),I=n(145),A=n.n(I),W=n(623),M=n(251),P=n.n(M),z=n(624),D=n(622),J=(n(292),Object(C.a)((function(e){return Object(T.a)({root:{"& > *":{margin:e.spacing(1)}},switchIcon:{height:"100%"},wideTextField:{width:"100%"}})})));function R(e){return e?20:30}var q={type:"number",variant:"outlined",InputLabelProps:{shrink:!0}};function L(e){var t=J(),n=r.a.useState(!0),a=Object(c.a)(n,2),l=a[0],o=a[1],u=r.a.useState(null),s=Object(c.a)(u,2),m=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{container:!0,spacing:3},r.a.createElement(D.a,{item:!0,xs:9},r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(N.a,Object.assign({label:"From"},q,{className:t.wideTextField,onChange:function(e){return d(Number(e.target.value))},inputProps:{step:.001,min:0},InputProps:{endAdornment:r.a.createElement(W.a,{position:"end"},r.a.createElement("img",{src:l?B.a:A.a,height:R(l),alt:"coin logo"}))}})),r.a.createElement(N.a,Object.assign({label:"To"},q,{className:t.wideTextField,value:null===m?void 0:10*m,InputProps:{readOnly:!0,endAdornment:r.a.createElement(W.a,{position:"end"},r.a.createElement("img",{src:l?A.a:B.a,height:R(!l),alt:"coin logo"}))},inputProps:{step:.001,min:0}})))),r.a.createElement(D.a,{item:!0,xs:3},r.a.createElement(z.a,{"aria-label":"switch",onClick:function(){return o(!l)},className:t.switchIcon},r.a.createElement(P.a,{fontSize:"large"})))),null===e.web3?void 0:r.a.createElement(i.a,{variant:"contained",color:"primary",size:"large"},"Swap"))}function G(e){return null===e.web3?r.a.createElement(r.a.Fragment,null):r.a.createElement(D.a,{container:!0,spacing:3})}function K(e){var t=e.children,n=e.value,a=e.index,l=Object(g.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},l),n===a&&r.a.createElement(F.a,{p:3},r.a.createElement(y.a,{component:"span"},t)))}function V(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var Y=Object(C.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:500,"box-shadow":"0px 0px 16px 6px rgba(0, 0, 139, .4)"}}}));function $(e){var t=Y(),n=Object(x.a)(),a=r.a.useState(0),l=Object(c.a)(a,2),o=l[0],u=l[1],s=null!==e.web3?void 0:r.a.createElement(i.a,{variant:"contained",color:"primary",size:"large",onClick:e.connectWallet},"Connect Wallet");return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"static",color:"default"},r.a.createElement(O.a,{value:o,onChange:function(e,t){u(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth"},r.a.createElement(j.a,Object.assign({label:"Swap"},V(0))),r.a.createElement(j.a,Object.assign({label:"Operate"},V(1))))),r.a.createElement(v.a,{axis:"rtl"===n.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){u(e)}},r.a.createElement(K,{value:o,index:0,dir:n.direction},r.a.createElement(L,{web3:e.web3}),s),r.a.createElement(K,{value:o,index:1,dir:n.direction},r.a.createElement(G,{web3:e.web3}),s)))}n(295);function _(e){return r.a.createElement("div",{className:"top-right"},null===e.web3?"":e.web3.currentProvider.selectedAddress)}var H=n(146),Q=n.n(H);n(569);var U=function(){var e,t=Object(a.useState)(null),n=Object(c.a)(t,2),l=n[0],o=n[1],i=Object(a.useState)(null),u=Object(c.a)(i,2),s=u[0],m=u[1];return null===l&&(null===(e=window.ethereum)||void 0===e||e.request({method:"eth_accounts"}).then((function(e){e.length>0&&o(new Q.a(window.ethereum))}))),r.a.createElement("div",{className:"App"},r.a.createElement(_,{web3:l}),r.a.createElement($,{web3:l,connectWallet:function(){if(null!==l)throw new Error("Wallet already connected");void 0!==window.ethereum?window.ethereum.enable().then((function(){return o(new Q.a(window.ethereum))})):m(r.a.createElement(r.a.Fragment,null,"You must have MetaMask installed to use this product, get it"," ",r.a.createElement("a",{href:"https://metamask.io/"},"here")))}}),r.a.createElement(E,null),r.a.createElement(h,{title:"Error",open:null!==s,handleClose:function(){return m(null)}},null!==s&&void 0!==s?s:r.a.createElement(r.a.Fragment,null,"Good")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[265,1,2]]]);
//# sourceMappingURL=main.380dbcf3.chunk.js.map