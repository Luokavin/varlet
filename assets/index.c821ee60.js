import{A as r}from"./index.61cbc1ac.js";import{A as U}from"./AppType.5c97583f.js";import{B as u}from"./index.6f8741c4.js";import{S as g}from"./index.c6e73335.js";import{S as m}from"./index.14cfb333.js";import{d as V}from"./index.5d153c96.js";import{u as _,a as E,_ as L,b as M,c as Y}from"./en-US.c00b1940.js";import{w as j,a as q}from"./utils.782338de.js";import{B as $,r as f,o as G,c as H,m as n,ah as o,p as i,F as J,y as s,t as c}from"./elevation.4b2b848a.js";import"./index.e49719fd.js";import"./index.eb1d562b.js";/* empty css               */import"./elements.eca917ca.js";import"./components.21c4ed88.js";import"./index.11644729.js";import"./lock.97aa2730.js";import"./zIndex.bf5fc216.js";import"./index.520d7afd.js";import"./index.ae14c8b6.js";var K={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",componentCall:"\u7EC4\u4EF6\u8C03\u7528",yourSelected:"\u60A8\u9009\u62E9\u7684\u662F:",customTitle:"\u9009\u62E9\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u5427",disableCloseOnClickAction:"\u7981\u7528\u70B9\u51FB\u9009\u9879\u65F6\u5173\u95ED\u52A8\u4F5C\u9762\u677F",disabled:"\u7981\u7528\u9009\u9879",customActionStyles:"\u81EA\u5B9A\u4E49\u9009\u9879\u6837\u5F0F"},P={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",componentCall:"Component Call",yourSelected:"Your selected is:",customTitle:"Choose whichever you like",disableCloseOnClickAction:"Disable close on click action",disabled:"Action Disabled",customActionStyles:"Custom Action Styles"};const{add:I,use:Q,pack:t,packs:wo,merge:ko}=_(),R=C=>{Y(C),Q(C)};E("zh-CN",L);E("en-US",M);I("zh-CN",K);I("en-US",P);const bo={setup(C){const d=r.Component,y=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],F=[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi",disabled:!0}],h=[{name:"Item 01",icon:"account-circle",color:"#00c48f"},{name:"Item 02",icon:"notebook",color:"#ff9800"},{name:"Item 03",icon:"wifi",color:"#00afef"}],w=$(y),T=$(F),B=$(h),k=f(!1),b=f(!1),S=f(!1),v=f(!1),A=f(!1),D=async()=>{const a=await r({actions:y});a!=="close"&&m(`${t.value.yourSelected}${a.name}`)},N=async()=>{const a=await r({actions:y,title:t.value.customTitle});a!=="close"&&m(`${t.value.yourSelected}${a.name}`)},z=async()=>{const a=await r({actions:F});a!=="close"&&m(`${t.value.yourSelected}${a.name}`)},O=async()=>{const a=await r({actions:h});a!=="close"&&m(`${t.value.yourSelected}${a.name}`)},x=()=>{r({actions:[{name:"Item 01",icon:"account-circle"},{name:"Item 02",icon:"notebook"},{name:"Item 03",icon:"wifi"}],closeOnClickAction:!1,onSelect:a=>m(`${t.value.yourSelected}${a.name}`)})},p=a=>{m(`${t.value.yourSelected}${a.name}`)};return j(R),q(V),(a,e)=>(G(),H(J,null,[n(o(U),null,{default:i(()=>[s(c(o(t).functionCall),1)]),_:1}),n(o(g),{direction:"column",size:[10,10]},{default:i(()=>[n(o(u),{type:"primary",block:"",onClick:D},{default:i(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:N},{default:i(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:z},{default:i(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:x},{default:i(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"primary",block:"",onClick:O},{default:i(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(U),null,{default:i(()=>[s(c(o(t).componentCall),1)]),_:1}),n(o(g),{direction:"column",size:[10,10]},{default:i(()=>[n(o(u),{type:"warning",block:"",onClick:e[0]||(e[0]=l=>k.value=!0)},{default:i(()=>[s(c(o(t).basicUsage),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[1]||(e[1]=l=>b.value=!0)},{default:i(()=>[s(c(o(t).modifyTitle),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[2]||(e[2]=l=>S.value=!0)},{default:i(()=>[s(c(o(t).disabled),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[3]||(e[3]=l=>v.value=!0)},{default:i(()=>[s(c(o(t).disableCloseOnClickAction),1)]),_:1}),n(o(u),{type:"warning",block:"",onClick:e[4]||(e[4]=l=>A.value=!0)},{default:i(()=>[s(c(o(t).customActionStyles),1)]),_:1})]),_:1}),n(o(d),{actions:o(w),show:k.value,"onUpdate:show":e[5]||(e[5]=l=>k.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{title:o(t).customTitle,actions:o(w),show:b.value,"onUpdate:show":e[6]||(e[6]=l=>b.value=l),onSelect:p},null,8,["title","actions","show"]),n(o(d),{actions:o(T),show:S.value,"onUpdate:show":e[7]||(e[7]=l=>S.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{"close-on-click-action":!1,actions:o(w),show:v.value,"onUpdate:show":e[8]||(e[8]=l=>v.value=l),onSelect:p},null,8,["actions","show"]),n(o(d),{actions:o(B),show:A.value,"onUpdate:show":e[9]||(e[9]=l=>A.value=l),onSelect:p},null,8,["actions","show"])],64))}};export{bo as default};
