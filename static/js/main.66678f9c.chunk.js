(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{298:function(e,t){},301:function(e){e.exports={"game.prediction":"Prediction","game.luckyNumber":"Lucky Number","game.rollUnder":"ROLL UNDER","game.rollOver":"ROLL Over","game.payout":"Payout","game.profitOnWin":"Profit on Win","game.winChance":"Win Chance","game.chip":"Chip","game.betAmount":"Bet Amount","game.balance":"Balance: {balance} EOS"}},302:function(e){e.exports={"game.prediction":"\u9884\u6d4b\u503c","game.luckyNumber":"\u5e78\u8fd0\u6570","game.rollUnder":"\u731c \u5c0f\u4e8e","game.rollOver":"\u731c \u5927\u4e8e","game.payout":"Payout","game.profitOnWin":"\u6536\u76ca","game.winChance":"\u6982\u7387","game.chip":"Chip","game.betAmount":"\u7ade\u731c\u6570\u91cf","game.balance":"\u4f59\u989d: {balance} EOS"}},314:function(e,t,n){e.exports=n(716)},319:function(e,t,n){},328:function(e,t){},334:function(e,t){},351:function(e,t,n){},365:function(e,t){},368:function(e,t){},370:function(e,t){},698:function(e,t,n){},708:function(e,t,n){},710:function(e,t,n){},712:function(e,t,n){},714:function(e,t,n){},716:function(e,t,n){"use strict";n.r(t);var a,r,i,c,o=n(1),l=n.n(o),u=n(9),s=n.n(u),m=(n(319),n(28)),p=n(32),b=n(45),g=n(44),h=n(46),f=n(64),d=n(30),v=n(299),y=n.n(v),O=n(300),w=n.n(O),j=(n(717),n(216)),E=(n(344),n(97)),k=(n(718),n(127)),_=(n(351),n(18)),x=n(13),A=(n(159),n(8)),N=n(301),C=n(302);!function(e){e.English="en",e.China="zh-CN"}(c||(c={}));var B,z,L,P,S,T,R,I,M,D,U,F,W,V=new(a=function(){function e(){Object(m.a)(this,e),Object(_.a)(this,"currentLanguageLocale",r,this),this.languageList=[{locale:c.English,label:"English",icon:"",messages:N},{locale:c.China,label:"\u7b80\u4f53\u4e2d\u6587",icon:"",messages:C}],Object(_.a)(this,"changeLanguage",i,this)}return Object(p.a)(e,[{key:"currentLanguage",get:function(){var e=this;return this.languageList.find(function(t){return t.locale===e.currentLanguageLocale})}}]),e}(),r=Object(x.a)(a.prototype,"currentLanguageLocale",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return c.English}}),Object(x.a)(a.prototype,"currentLanguage",[A.e],Object.getOwnPropertyDescriptor(a.prototype,"currentLanguage"),a.prototype),i=Object(x.a)(a.prototype,"changeLanguage",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.currentLanguageLocale=t}}}),a),H=n(29),J=n.n(H),q=n(59),Q=n(124),$=n.n(Q),G=n(303),K=n.n(G),X=n(214),Y=n(154),Z=n.n(Y);$.a.plugins(new K.a);var ee={blockchain:"eos",protocol:"https",host:"nodes.get-scatter.com",port:443,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"},te=$.a.scatter;function ne(){return te.identity?te.identity.accounts.find(function(e){return"eos"===e.blockchain}):null}var ae,re=new(B=function e(){Object(m.a)(this,e),this.waitConnectPromises=[],this.waitLoginPromises=[],Object(_.a)(this,"connecting",z,this),Object(_.a)(this,"connected",L,this),Object(_.a)(this,"logging",P,this),Object(_.a)(this,"logined",S,this),Object(_.a)(this,"account",T,this),Object(_.a)(this,"balance",R,this),Object(_.a)(this,"init",I,this),Object(_.a)(this,"connect",M,this),Object(_.a)(this,"login",D,this),Object(_.a)(this,"logout",U,this),Object(_.a)(this,"getAccount",F,this),Object(_.a)(this,"getCurrencyBalance",W,this),this.rpc=new X.JsonRpc("https://api.eosnewyork.io"),alert(te),this.api=te.eos(ee,X.Api,{rpc:this.rpc,expireInSeconds:60})},z=Object(x.a)(B.prototype,"connecting",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),L=Object(x.a)(B.prototype,"connected",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=Object(x.a)(B.prototype,"logging",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),S=Object(x.a)(B.prototype,"logined",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),T=Object(x.a)(B.prototype,"account",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=Object(x.a)(B.prototype,"balance",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=Object(x.a)(B.prototype,"init",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.initPromise){t.next=2;break}return t.abrupt("return",e.initPromise);case 2:e.initPromise=new Promise(function(){var t=Object(q.a)(J.a.mark(function t(n){return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.connect();case 2:e.account=ne(),e.account&&e.getCurrencyBalance(),window&&(window.ScatterJS=null),n();case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}},t,this)}))}}),M=Object(x.a)(B.prototype,"connect",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){var n;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.connected){t.next=2;break}return t.abrupt("return");case 2:if(!e.connecting){t.next=4;break}return t.abrupt("return",new Promise(function(t,n){e.waitConnectPromises.push({resolve:t,reject:n})}));case 4:return t.prev=4,e.connecting=!0,t.next=8,$.a.scatter.connect("hbin.dice");case 8:e.connected=t.sent,t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),e.connected=!1;case 14:for(e.connecting=!1;e.waitConnectPromises.length>0;)n=e.waitConnectPromises.shift(),e.connected?n.resolve():n.reject();if(e.connected){t.next=18;break}throw new Error("connecte error");case 18:case"end":return t.stop()}},t,this,[[4,11]])}))}}),D=Object(x.a)(B.prototype,"login",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){var n,a;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.logined){t.next=2;break}return t.abrupt("return");case 2:if(!e.logging){t.next=4;break}return t.abrupt("return",new Promise(function(t,n){e.waitLoginPromises.push({resolve:t,reject:n})}));case 4:return e.logging=!0,t.prev=5,t.next=8,e.init();case 8:return t.next=10,e.connect();case 10:if(te.identity){t.next=14;break}return n={accounts:[ee]},t.next=14,te.getIdentity(n);case 14:e.account=ne(),e.logined=!0,t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),e.logined=!1;case 21:for(e.logging=!1;e.waitLoginPromises.length>0;)a=e.waitLoginPromises.shift(),e.logined?a.resolve():a.reject();e.getCurrencyBalance();case 24:case"end":return t.stop()}},t,this,[[5,18]])}))}}),U=Object(x.a)(B.prototype,"logout",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.logined=!1,e.account=null,e.balance=null,te.forgetIdentity();case 4:case"end":return t.stop()}},t,this)}))}}),F=Object(x.a)(B.prototype,"getAccount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.login();case 2:return t.abrupt("return",ne());case 3:case"end":return t.stop()}},t,this)}))}}),W=Object(x.a)(B.prototype,"getCurrencyBalance",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){var n,a;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.account){t.next=3;break}throw new Error("account not exist");case 3:return t.next=5,e.rpc.get_currency_balance("eosio.token",e.account.name,"EOS");case 5:if((n=t.sent)&&n.length){t.next=8;break}throw new Error("resp not exist");case 8:return a=n[0].split(" ")[0],e.balance=Z()(a),t.abrupt("return",e.balance);case 13:throw t.prev=13,t.t0=t.catch(0),t.t0;case 16:case"end":return t.stop()}},t,this,[[0,13]])}))}}),B);function ie(e){var t=e.account,n=e.login,a=e.logout;if(!t)return l.a.createElement("div",{onClick:n},"Login");var r=l.a.createElement(k.a,null,l.a.createElement(k.a.Item,{onClick:a},"Logout"));return l.a.createElement(j.a,{overlay:r,trigger:["click"]},l.a.createElement("div",null,"".concat(t.name,"@").concat(t.authority)," ",l.a.createElement(E.a,{type:"down"})))}var ce=Object(f.a)(function(){return{languageStore:V,accountStore:re}})(ae=Object(f.b)(ae=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).changeLanguage=V.changeLanguage,n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.languageStore,a=t.accountStore,r=n,i=r.languageList,c=r.currentLanguage,o=a,u=o.account,s=o.login,m=o.logout,p=l.a.createElement(k.a,null,i.map(function(t){return l.a.createElement(k.a.Item,{key:t.locale,onClick:function(){return e.changeLanguage(t.locale)}},t.label)}));return l.a.createElement("nav",{className:"app-navbar"},l.a.createElement("div",{className:"app-navbar__content"},l.a.createElement("div",{className:"app-navbar__logo"}),l.a.createElement("div",{className:"app-navbar__right"},l.a.createElement("div",{className:"app-navbar__login"},l.a.createElement(ie,{account:u,login:s,logout:m})),l.a.createElement("div",{className:"app-navbar__language"},l.a.createElement(j.a,{overlay:p,trigger:["click"]},l.a.createElement("div",null,c.label," ",l.a.createElement(E.a,{type:"down"})))))))}}]),t}(l.a.Component))||ae)||ae,oe=n(11),le=n.n(oe),ue=(n(698),function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.active,n=e.size,a=e.onClick;return l.a.createElement("button",{className:le()("app-button",t&&"app-button__active","app-button__size-".concat(n)),onClick:a},this.props.children)}}]),t}(l.a.Component));ue.defaultProps={size:"default"};var se,me,pe,be,ge,he,fe,de,ve,ye,Oe,we,je,Ee,ke,_e=ue,xe=n(312),Ae=(n(706),n(708),80);!function(e){e[e.Small=0]="Small",e[e.Big=1]="Big"}(ke||(ke={}));var Ne,Ce,Be=new(se=function(){function e(){var t=this;Object(m.a)(this,e),Object(_.a)(this,"prediction",me,this),Object(_.a)(this,"rollType",pe,this),Object(_.a)(this,"betAmountInputValue",be,this),Object(_.a)(this,"luckyNum",ge,this),Object(_.a)(this,"rolling",he,this),Object(_.a)(this,"changePrediction",fe,this),Object(_.a)(this,"changeRollType",de,this),Object(_.a)(this,"changeBetAmount",ve,this),Object(_.a)(this,"setMinBetAmount",ye,this),Object(_.a)(this,"setMaxBetAmount",Oe,this),Object(_.a)(this,"setHalfBetAmount",we,this),Object(_.a)(this,"setDoubleBetAmount",je,this),Object(_.a)(this,"roll",Ee,this),this.startRandom=function(){t.stopRandom(),t.luckyNum=~~(99*Math.random()),t.startRandomTimeoutId=setTimeout(t.startRandom,66)},this.stopRandom=function(){clearTimeout(t.startRandomTimeoutId)},this.getMaxBetAmount=function(){return null===re.balance?Ae:re.balance}}return Object(p.a)(e,[{key:"betAmount",get:function(){return Z()(this.betAmountInputValue)},set:function(e){this.betAmountInputValue=e.toFixed(4)}},{key:"payout",get:function(){return.98/this.winChance}},{key:"winReward",get:function(){return this.betAmount*this.payout}},{key:"winChance",get:function(){var e=this.prediction/100;return this.rollType===ke.Small?e:.99-e}},{key:"luckyNumUI",get:function(){return null===this.luckyNum?"--":this.luckyNum<10?"0".concat(this.luckyNum):this.luckyNum.toString()}}]),e}(),me=Object(x.a)(se.prototype,"prediction",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 49}}),pe=Object(x.a)(se.prototype,"rollType",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return ke.Small}}),be=Object(x.a)(se.prototype,"betAmountInputValue",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1..toFixed(4)}}),ge=Object(x.a)(se.prototype,"luckyNum",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),he=Object(x.a)(se.prototype,"rolling",[A.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(x.a)(se.prototype,"betAmount",[A.e],Object.getOwnPropertyDescriptor(se.prototype,"betAmount"),se.prototype),Object(x.a)(se.prototype,"payout",[A.e],Object.getOwnPropertyDescriptor(se.prototype,"payout"),se.prototype),Object(x.a)(se.prototype,"winReward",[A.e],Object.getOwnPropertyDescriptor(se.prototype,"winReward"),se.prototype),Object(x.a)(se.prototype,"winChance",[A.e],Object.getOwnPropertyDescriptor(se.prototype,"winChance"),se.prototype),Object(x.a)(se.prototype,"luckyNumUI",[A.e],Object.getOwnPropertyDescriptor(se.prototype,"luckyNumUI"),se.prototype),fe=Object(x.a)(se.prototype,"changePrediction",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.rolling||t<2||t>97||(e.prediction=t)}}}),de=Object(x.a)(se.prototype,"changeRollType",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.rolling||(e.rollType=t)}}}),ve=Object(x.a)(se.prototype,"changeBetAmount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.rolling||(t.split("").some(function(e){return"0123456789.".indexOf(e)<0})||t.indexOf(".")===t.lastIndexOf(".")&&(t.length-t.lastIndexOf(".")-1>4||(e.betAmountInputValue=t)))}}}),ye=Object(x.a)(se.prototype,"setMinBetAmount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.rolling||(e.betAmount=.1)}}}),Oe=Object(x.a)(se.prototype,"setMaxBetAmount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.rolling||(e.betAmount=e.getMaxBetAmount())}}}),we=Object(x.a)(se.prototype,"setHalfBetAmount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(!e.rolling){var t=e.betAmount/2;t<.1&&(t=.1),e.betAmount=t}}}}),je=Object(x.a)(se.prototype,"setDoubleBetAmount",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(!e.rolling){var t=2*e.betAmount,n=e.getMaxBetAmount();e.betAmount=t>n?n:t}}}}),Ee=Object(x.a)(se.prototype,"roll",[A.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(q.a)(J.a.mark(function t(){var n,a;return J.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.rolling){t.next=2;break}return t.abrupt("return");case 2:return e.rolling=!0,t.next=5,re.login();case 5:return t.next=7,re.getCurrencyBalance();case 7:if(n=t.sent,!(e.betAmount>n)){t.next=10;break}throw new Error("betAmount > balance");case 10:return e.startRandom(),t.next=13,new Promise(function(e){return setTimeout(function(){return e(~~(99*Math.random()))},2e3)});case 13:return a=t.sent,t.next=16,re.getCurrencyBalance();case 16:e.luckyNum=a,e.stopRandom(),e.rolling=!1;case 19:case"end":return t.stop()}},t,this)}))}}),se),ze=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.rollType;return l.a.createElement("div",{className:le()("game-slider",n===ke.Small?"game-slider__less":"game-slider__greater")},l.a.createElement("div",{className:"game-slider__label-wrap"},l.a.createElement("span",null,"0"),l.a.createElement("span",null,"99")),l.a.createElement(xe.a,{min:-3,max:102,value:t,onChange:this.props.onChange}))}}]),t}(l.a.Component),Le=n(311),Pe=n.n(Le),Se=(n(710),{large:"only screen and (min-width: ".concat(767,"px)"),small:"only screen and (max-width: ".concat(767,"px)")}),Te=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getQuery=function(){return n.props.query?n.props.query:n.props.preset?Se[n.props.preset]:void 0},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return l.a.createElement(Pe.a,Object.assign({},this.props,{query:this.getQuery()}),this.props.children)}}]),t}(l.a.Component),Re=(n(712),Object(f.a)(function(){return{gameStore:Be,accountStore:re}})(Ne=Object(f.b)(Ne=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).changePrediction=Be.changePrediction,n.changeRollTypeToSmall=function(){return Be.changeRollType(ke.Small)},n.changeRollTypeToBig=function(){return Be.changeRollType(ke.Big)},n.setHalfBetAmount=function(){return Be.setHalfBetAmount()},n.setDoubleBetAmount=function(){return Be.setDoubleBetAmount()},n.setMinBetAmount=function(){return Be.setMinBetAmount()},n.setMaxBetAmount=function(){return Be.setMaxBetAmount()},n.handleBetAmountChange=function(e){Be.changeBetAmount(e.currentTarget.value)},n.confirm=function(){},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gameStore,n=e.accountStore,a=t,r=a.payout,i=a.prediction,c=a.winChance,o=a.winReward,u=a.rollType,s=a.betAmountInputValue,m=a.luckyNumUI,p=a.roll,b=n.balance,g=null!==b?b.toFixed(4):"--";return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game__top"},l.a.createElement("div",{className:"game__number-wrap"},l.a.createElement("div",{className:"game__prediction"},l.a.createElement("div",{className:"game__prediction-value"},i),l.a.createElement("div",{className:"game__prediction-label"},l.a.createElement(d.a,{id:"game.prediction"}))),l.a.createElement("div",{className:"game__result"},l.a.createElement("div",{className:"game__result-value"},m),l.a.createElement("div",{className:"game__result-label"},l.a.createElement(d.a,{id:"game.luckyNumber"})))),l.a.createElement(Te,{preset:"small"},l.a.createElement("div",{className:"game__sm__roll-type"},l.a.createElement(_e,{size:"small",active:u===ke.Small,onClick:this.changeRollTypeToSmall},l.a.createElement(d.a,{id:"game.rollUnder"})),l.a.createElement(_e,{size:"small",active:u===ke.Big,onClick:this.changeRollTypeToBig},l.a.createElement(d.a,{id:"game.rollOver"})))),l.a.createElement("div",{className:"game__slider-wrap"},l.a.createElement(Te,{preset:"large"},l.a.createElement(_e,{active:u===ke.Small,onClick:this.changeRollTypeToSmall},l.a.createElement(d.a,{id:"game.rollUnder"}))),l.a.createElement("div",{className:"game__slider-wrap-center"},l.a.createElement(ze,{value:i,onChange:this.changePrediction,rollType:u})),l.a.createElement(Te,{preset:"large"},l.a.createElement(_e,{active:u===ke.Big,onClick:this.changeRollTypeToBig},l.a.createElement(d.a,{id:"game.rollOver"}))))),l.a.createElement(Ie,{payout:r,winReward:o,winChance:c}),l.a.createElement("div",{className:"game__bottom"},l.a.createElement("div",{className:"game__chip"},l.a.createElement("div",{className:"game__chip-title"},l.a.createElement(d.a,{id:"game.chip"})),l.a.createElement("div",{className:"game__chip-select"}),l.a.createElement("div",{className:"game__chip-desc"},"EOS")),l.a.createElement("div",{className:"game__bet-amount"},l.a.createElement("div",{className:"game__bet-amount-title"},l.a.createElement(d.a,{id:"game.betAmount"})),l.a.createElement("div",{className:"game__bet-amount-content"},l.a.createElement("input",{className:"game__bet-amount-content-input",type:"text",value:s,onChange:this.handleBetAmountChange}),l.a.createElement("div",{className:"game__bet-amount-content-btns"},l.a.createElement("div",{onClick:this.setDoubleBetAmount},"2x"),l.a.createElement("div",{onClick:this.setHalfBetAmount},"1/2"),l.a.createElement("div",{onClick:this.setMinBetAmount},"Min"),l.a.createElement("div",{onClick:this.setMaxBetAmount},"Max"))),l.a.createElement("div",{className:"game__bet-amount-desc"},l.a.createElement(d.a,{id:"game.balance",values:{balance:g}}))),l.a.createElement("div",{className:"game__confirm"},l.a.createElement(Te,{preset:"small"},function(e){return l.a.createElement(_e,{active:!0,size:e?"default":"large",onClick:p},u===ke.Small?l.a.createElement(d.a,{id:"game.rollUnder"}):l.a.createElement(d.a,{id:"game.rollOver"})," ",i)}))))}}]),t}(l.a.Component))||Ne)||Ne),Ie=Object(d.d)(function(e){var t=e.intl,n=[{label:t.formatMessage({id:"game.payout"}),value:"".concat(e.payout.toFixed(2),"x")},{label:t.formatMessage({id:"game.profitOnWin"}),value:"".concat(e.winReward.toFixed(2)," EOS")},{label:t.formatMessage({id:"game.winChance"}),value:"".concat((100*e.winChance).toFixed(2),"%")}];return l.a.createElement("div",{className:"game__info"},n.map(function(e,t){return l.a.createElement("div",{key:t,className:"game__info-item"},l.a.createElement("div",null,e.label),l.a.createElement("div",null,e.value))}))}),Me=Re;n(714);Object(d.c)(w.a),Object(d.c)(y.a),re.init();var De=Object(f.a)(function(){return{languageStore:V}})(Ce=Object(f.b)(Ce=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.languageStore.currentLanguage;return l.a.createElement(d.b,{key:e.locale,locale:e.locale,messages:e.messages},l.a.createElement(l.a.Fragment,null,l.a.createElement(ce,null),l.a.createElement(Me,null)))}}]),t}(l.a.Component))||Ce)||Ce;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[314,2,1]]]);
//# sourceMappingURL=main.66678f9c.chunk.js.map