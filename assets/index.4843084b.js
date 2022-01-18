import{A as I}from"./AppType.2df6deed.js";import{d as V,r as P}from"./elements.ca95ba1c.js";import{t as A,p as R}from"./shared.99253c97.js";import{_ as B}from"./elevation.9adcc0d7.js";import{d as L,r as d,y as O,o as D,c as E,G as Y,$ as q,a0 as G,m as r,t as n,e as k,a as s,i as a,j as l,F as Z,Y as J,Z as K}from"./vendor.9810b84e.js";import{S as Q}from"./index.d6386add.js";import{B as W}from"./index.2221c590.js";import{d as X}from"./index.77fe3760.js";import{u as ee,a as M,_ as te,b as oe,c as ae}from"./en-US.87180fe8.js";import{w as ne,a as se}from"./utils.72e4e7bc.js";import"./index.2a596169.js";import"./index.a4cdafab.js";import"./zIndex.c115b57d.js";import"./index.e0c8ad15.js";import"./components.968da630.js";import"./lock.6729105e.js";import"./index.fef475e0.js";const ue={time:{type:[String,Number],default:0},format:{type:String,default:"HH : mm : ss"},autoStart:{type:Boolean,default:!0},onEnd:{type:Function},onChange:{type:Function}};const x=1e3,F=60*x,g=60*F,N=24*g,ce=L({name:"VarCountdown",props:ue,setup(e){const o=d(0),u=d(!1),t=d(""),h=d(0),C=d(0),c=d({days:0,hours:0,minutes:0,seconds:0,milliseconds:0}),m=p=>{var T;const v=Math.floor(p/N),y=Math.floor(p%N/g),w=Math.floor(p%g/F),_=Math.floor(p%F/x),z=Math.floor(p%x),j={days:v,hours:y,minutes:w,seconds:_,milliseconds:z};c.value=j,(T=e.onChange)==null||T.call(e,c.value),t.value=R(e.format,j)},f=()=>{const{time:p,onEnd:v,autoStart:y}=e,w=Date.now();o.value||(o.value=w+A(p));let _=o.value-w;if(_<0&&(_=0),C.value=_,m(_),_===0){v==null||v();return}(y||u.value)&&(h.value=P(f))},i=()=>{u.value||(u.value=!0,o.value=Date.now()+(C.value||A(e.time)),f())},$=()=>{u.value=!1},b=()=>{o.value=0,u.value=!1,V(h.value),f()};return O(()=>e.time,()=>b(),{immediate:!0}),{showTime:t,timeData:c,start:i,pause:$,reset:b}}}),re={class:"var-countdown"};function le(e,o,u,t,h,C){return D(),E("div",re,[Y(e.$slots,"default",q(G(e.timeData)),()=>[r(n(e.showTime),1)])])}var S=B(ce,[["render",le]]);S.install=function(e){e.component(S.name,S)};var ie={basicUsage:"\u57FA\u672C\u4F7F\u7528",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",showMillisecond:"\u663E\u793A\u6BEB\u79D2",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",format:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",startText:"\u5F00\u59CB",pauseText:"\u6682\u505C",resetText:"\u91CD\u7F6E"},de={basicUsage:"Basic Usage",customFormat:"Custom Format",showMillisecond:"Show Millisecond",customStyle:"Custom Style",manualControl:"Manual Control",format:"DD Day, HH:mm:ss",startText:"Start",pauseText:"Pause",resetText:"Reset"};const{add:U,use:me,pack:fe,packs:Ve,merge:Pe}=ee(),pe=e=>{ae(e),me(e)};M("zh-CN",te);M("en-US",oe);U("zh-CN",ie);U("en-US",de);const _e={name:"CountdownExample",components:{VarCountdown:S,VarButton:W,AppType:I},setup(){const e=d(null),o=d(3e3),u=()=>{Q.info("end!")},t=()=>{console.log("change")};return ne(pe),se(X),{time:o,pack:fe,end:u,countdown:e,change:t}}},H=e=>(J("data-v-4f9fa9e9"),e=e(),K(),e),ve={class:"block"},he=H(()=>s("span",{class:"colon"},":",-1)),Ce={class:"block"},we=H(()=>s("span",{class:"colon"},":",-1)),Se={class:"block"},ye={class:"btn-container"};function ke(e,o,u,t,h,C){const c=k("app-type"),m=k("var-countdown"),f=k("var-button");return D(),E(Z,null,[s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.basicUsage),1)]),_:1}),a(m,{time:"108000000"})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.customFormat),1)]),_:1}),a(m,{time:"108000000",format:t.pack.format},null,8,["format"])]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.showMillisecond),1)]),_:1}),a(m,{time:"108000000",format:"HH : mm : ss : SS"})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.customStyle),1)]),_:1}),a(m,{time:"108000000"},{default:l(i=>[s("span",ve,n(i.hours),1),he,s("span",Ce,n(i.minutes),1),we,s("span",Se,n(i.seconds),1)]),_:1})]),s("div",null,[a(c,null,{default:l(()=>[r(n(t.pack.manualControl),1)]),_:1}),a(m,{time:t.time,ref:"countdown","auto-start":!1,format:"ss : SSS",onEnd:t.end,onChange:t.change},null,8,["time","onEnd","onChange"]),s("div",ye,[a(f,{type:"primary",onClick:o[0]||(o[0]=i=>e.$refs.countdown.start())},{default:l(()=>[r(n(t.pack.startText),1)]),_:1}),a(f,{onClick:o[1]||(o[1]=i=>e.$refs.countdown.pause())},{default:l(()=>[r(n(t.pack.pauseText),1)]),_:1}),a(f,{onClick:o[2]||(o[2]=i=>e.$refs.countdown.reset())},{default:l(()=>[r(n(t.pack.resetText),1)]),_:1})])])],64)}var Re=B(_e,[["render",ke],["__scopeId","data-v-4f9fa9e9"]]);export{Re as default};
