import{c as z}from"./components.21c4ed88.js";import{d as E,r as g,D as N,af as w,_ as P,o as u,c as m,a as k,V as h,z as p,n as F,k as _,y as s,t as i,m as a,ah as t,p as o,F as T,q as V,l as U,x as M}from"./elevation.4b2b848a.js";import{I as y}from"./index.520d7afd.js";import{R as x}from"./index.e49719fd.js";import{A as c}from"./AppType.5c97583f.js";import{S as L}from"./index.14cfb333.js";import{M as I}from"./index.1763affe.js";import{B}from"./index.6f8741c4.js";import{C as q}from"./index.b452aa51.js";import{d as G}from"./index.5d153c96.js";import{u as O,a as R,_ as Y,b as j,c as H}from"./en-US.c00b1940.js";import{w as J,a as K}from"./utils.782338de.js";import"./elements.eca917ca.js";import"./index.eb1d562b.js";/* empty css               */import"./index.ae14c8b6.js";import"./zIndex.bf5fc216.js";import"./lock.97aa2730.js";function Q(e){return["left","center","right"].includes(e)}const W={color:{type:String},textColor:{type:String},title:{type:String},titlePosition:{type:String,default:"left",validator:Q},elevation:{type:Boolean,default:!0}};const{n:X,classes:Z}=z("app-bar"),tt=E({name:"VarAppBar",props:W,setup(e,{slots:n}){const d=g(),f=g(),v=()=>{d.value=n.left?0:void 0,f.value=n.right?0:void 0};return N(v),w(v),{n:X,classes:Z,paddingLeft:d,paddingRight:f}}});function et(e,n,d,f,v,D){return u(),m("div",{class:p(e.classes(e.n(),[e.elevation,"var-elevation--3"])),style:F({background:e.color,color:e.textColor})},[k("div",{class:p(e.n("left"))},[h(e.$slots,"left"),e.titlePosition==="left"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingLeft:e.paddingLeft})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):_("v-if",!0)],2),e.titlePosition==="center"?(u(),m("div",{key:0,class:p(e.n("title"))},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],2)):_("v-if",!0),k("div",{class:p(e.n("right"))},[e.titlePosition==="right"?(u(),m("div",{key:0,class:p(e.n("title")),style:F({paddingRight:e.paddingRight})},[h(e.$slots,"default",{},()=>[s(i(e.title),1)])],6)):_("v-if",!0),h(e.$slots,"right")],2)],6)}var r=P(tt,[["render",et]]);r.install=function(e){e.component(r.name,r)};var at={basicAppBar:"\u57FA\u7840\u5BFC\u822A\u680F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",addSlotsAtTitle:"\u6DFB\u52A0\u6807\u9898\u5904\u63D2\u69FD",addTheTitleFromTheSlot:"\u4ECE\u63D2\u69FD\u5904\u6DFB\u52A0\u6807\u9898",addLeftSlot:"\u6DFB\u52A0\u5DE6\u4FA7\u63D2\u69FD",title:"\u6807\u9898",addRightSlot:"\u6DFB\u52A0\u53F3\u4FA7\u63D2\u69FD",addLeftAndRightSlot:"\u6DFB\u52A0\u5DE6\u53F3\u63D2\u69FD",options1:"\u9009\u9879\u4E00",options2:"\u9009\u9879\u4E8C",search:"\u641C\u7D22",goBack:"\u8FD4\u56DE"},ot={basicAppBar:"Basic AppBar",customStyle:"Custom Style",addSlotsAtTitle:"Add Slots At Title",addTheTitleFromTheSlot:"Add The Title From The Slot",addLeftSlot:"Add Left Slot",title:"Title",addRightSlot:"Add Right Slot",addLeftAndRightSlot:"Add Left And Right Slot",options1:"options1",options2:"options2",search:"search",goBack:"Go Back"};const{add:b,use:lt,pack:l,packs:_t,merge:Ct}=O(),st=e=>{H(e),lt(e)};R("zh-CN",Y);R("en-US",j);b("zh-CN",at);b("en-US",ot);const it=k("div",{class:"var-app-var--example-space"},null,-1),Tt={setup(e){const n=g(!1),d=g([]),f=g("#fff"),v=()=>{L({content:l.value.search,position:"top"})},D=()=>{L({content:l.value.goBack,position:"top"})},$=()=>{d.value=[{label:l.value.options1,value:"menu1"},{label:l.value.options2,value:"menu2"}],n.value=!0};return J(S=>{st(S),n.value=!1}),K(G,S=>{f.value=S==="darkThemes"?"#272727":"#fff"}),(S,C)=>(u(),m(T,null,[a(t(c),null,{default:o(()=>[s(i(t(l).basicAppBar),1)]),_:1}),a(t(r),{title:t(l).title},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).customStyle),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center",color:"#00c48f"},null,8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addSlotsAtTitle),1)]),_:1}),a(t(r),null,{default:o(()=>[s(i(t(l).addTheTitleFromTheSlot),1)]),_:1}),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftSlot),1)]),_:1}),a(t(r),{title:t(l).title,"title-position":"center"},{left:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:D},{default:o(()=>[a(t(y),{name:"chevron-left",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{right:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:v},{default:o(()=>[a(t(y),{name:"magnify",size:24})]),_:1})]),_:1},8,["title"]),a(t(c),null,{default:o(()=>[s(i(t(l).addLeftAndRightSlot),1)]),_:1}),a(t(r),{title:t(l).title},{left:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:D},{default:o(()=>[a(t(y),{name:"chevron-left",size:24})]),_:1})]),right:o(()=>[a(t(I),{"offset-y":42,"offset-x":-20,show:n.value,"onUpdate:show":C[0]||(C[0]=A=>n.value=A)},{menu:o(()=>[k("div",{class:"var-app-var--example-menu-list",style:F({background:f.value})},[(u(!0),m(T,null,V(d.value,A=>U((u(),M(t(q),{class:"var-app-var--example-menu-cell",key:A.value},{default:o(()=>[s(i(A.label),1)]),_:2},1024)),[[t(x)]])),128))],4)]),default:o(()=>[a(t(B),{round:"",text:"",color:"transparent","text-color":"#ffffff",onClick:$},{default:o(()=>[a(t(y),{name:"menu",size:24})]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),it],64))}};export{Tt as default};
