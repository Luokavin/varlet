var w=Object.defineProperty,P=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var k=(e,o,p)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:p}):e[o]=p,b=(e,o)=>{for(var p in o||(o={}))S.call(o,p)&&k(e,p,o[p]);if(y)for(var p of y(o))A.call(o,p)&&k(e,p,o[p]);return e},c=(e,o)=>P(e,E(o));import{P as h}from"./index.c6fe2774.js";import{B}from"./index.2221c590.js";import{S as j}from"./index.d6386add.js";import{A as g}from"./AppType.2df6deed.js";import{c as m}from"./index.e0c8ad15.js";import{d as U}from"./index.77fe3760.js";import{w as D,a as _,b as x}from"./utils.72e4e7bc.js";import{u as N,a as F,_ as z,b as O,c as V}from"./en-US.87180fe8.js";import{_ as T}from"./elevation.9adcc0d7.js";import{q as I,C as L,_ as H,e as f,o as R,c as q,i as a,j as l,F as M,m as n,t as u,a as d}from"./vendor.9810b84e.js";import"./lock.6729105e.js";import"./zIndex.c115b57d.js";import"./components.968da630.js";import"./shared.99253c97.js";import"./index.fef475e0.js";import"./index.2a596169.js";import"./index.a4cdafab.js";import"./elements.ca95ba1c.js";var G={popupPosition:"\u5F39\u51FA\u4F4D\u7F6E",centerPopup:"\u5C45\u4E2D\u5F39\u51FA",belowPopup:"\u4E0B\u65B9\u5F39\u51FA",abovePopup:"\u4E0A\u65B9\u5F39\u51FA",leftPopup:"\u5DE6\u4FA7\u5F39\u51FA",rightPopup:"\u53F3\u4FA7\u5F39\u51FA",overlayStyle:"\u906E\u7F69\u5C42\u6837\u5F0F",overlayClass:"\u906E\u7F69\u5C42class",overlayStyles:"\u906E\u7F69\u5C42style",event:"\u6CE8\u518C\u4E8B\u4EF6",text:"\u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002"},J={popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."};const{add:C,use:K,pack:Q,packs:jo,merge:go}=N(),W=e=>{V(e),K(e)};F("zh-CN",z);F("en-US",O);C("zh-CN",G);C("en-US",J);const X={name:"PopupExample",components:{VarPopup:h,VarButton:B,AppType:g},setup(){const e=I({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1});D(W),_(U);const o=m.touchmoveForbid;return x(p=>{p==="pc"&&(m.touchmoveForbid=!1)}),L(()=>{m.touchmoveForbid=o}),c(b({pack:Q},H(e)),{Snackbar:j})}},Y={class:"block"},Z={class:"block"},$={class:"block"},oo={class:"block"},eo={class:"block"},to={class:"block"},so={class:"block"},ao={class:"block"};function lo(e,o,p,t,uo,po){const v=f("app-type"),r=f("var-button"),i=f("var-popup");return R(),q(M,null,[a(v,null,{default:l(()=>[n(u(t.pack.popupPosition),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[0]||(o[0]=s=>e.center=!0)},{default:l(()=>[n(u(t.pack.centerPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[1]||(o[1]=s=>e.bottom=!0)},{default:l(()=>[n(u(t.pack.belowPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[2]||(o[2]=s=>e.top=!0)},{default:l(()=>[n(u(t.pack.abovePopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[3]||(o[3]=s=>e.left=!0)},{default:l(()=>[n(u(t.pack.leftPopup),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[4]||(o[4]=s=>e.right=!0)},{default:l(()=>[n(u(t.pack.rightPopup),1)]),_:1}),a(i,{show:e.center,"onUpdate:show":o[5]||(o[5]=s=>e.center=s)},{default:l(()=>[d("div",Y,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"bottom",show:e.bottom,"onUpdate:show":o[6]||(o[6]=s=>e.bottom=s)},{default:l(()=>[d("div",Z,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"top",show:e.top,"onUpdate:show":o[7]||(o[7]=s=>e.top=s)},{default:l(()=>[d("div",$,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"left",show:e.left,"onUpdate:show":o[8]||(o[8]=s=>e.left=s)},{default:l(()=>[d("div",oo,u(t.pack.text),1)]),_:1},8,["show"]),a(i,{position:"right",show:e.right,"onUpdate:show":o[9]||(o[9]=s=>e.right=s)},{default:l(()=>[d("div",eo,u(t.pack.text),1)]),_:1},8,["show"]),a(v,null,{default:l(()=>[n(u(t.pack.overlayStyle),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[10]||(o[10]=s=>e.overlayClass=!0)},{default:l(()=>[n(u(t.pack.overlayClass),1)]),_:1}),a(i,{"overlay-class":"custom-overlay",show:e.overlayClass,"onUpdate:show":o[11]||(o[11]=s=>e.overlayClass=s)},{default:l(()=>[d("div",to,u(t.pack.text),1)]),_:1},8,["show"]),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[12]||(o[12]=s=>e.overlayStyle=!0)},{default:l(()=>[n(u(t.pack.overlayStyles),1)]),_:1}),a(i,{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e.overlayStyle,"onUpdate:show":o[13]||(o[13]=s=>e.overlayStyle=s)},{default:l(()=>[d("div",so,u(t.pack.text),1)]),_:1},8,["overlay-style","show"]),a(v,null,{default:l(()=>[n(u(t.pack.event),1)]),_:1}),a(r,{class:"mt-10",type:"primary",block:"",onClick:o[14]||(o[14]=s=>e.event=!0)},{default:l(()=>[n(u(t.pack.event),1)]),_:1}),a(i,{show:e.event,"onUpdate:show":o[15]||(o[15]=s=>e.event=s),onOpen:o[16]||(o[16]=()=>t.Snackbar.info("open")),onOpened:o[17]||(o[17]=()=>t.Snackbar.success("opened")),onClose:o[18]||(o[18]=()=>t.Snackbar.warning("close")),onClosed:o[19]||(o[19]=()=>t.Snackbar.error("closed"))},{default:l(()=>[d("div",ao,u(t.pack.text),1)]),_:1},8,["show"])],64)}var Uo=T(X,[["render",lo],["__scopeId","data-v-58f55917"]]);export{Uo as default};
