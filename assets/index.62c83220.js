import{t as i}from"./elements.eca917ca.js";import{c as m}from"./components.21c4ed88.js";import{d as c,_ as d,o,c as t,a as n,z as a,n as p,V as r,k as f}from"./elevation.4b2b848a.js";import{u as h,a as l,_ as v,b,c as B}from"./en-US.c00b1940.js";const{n:C,classes:N}=m("table"),y=c({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:i,n:C,classes:N}}});function z(e,$,g,F,k,D){return o(),t("div",{class:a(e.classes(e.n(),"var-elevation--1 var--box"))},[n("div",{class:a(e.n("main"))},[n("table",{class:a(e.n("table")),style:p({width:e.toSizeUnit(e.fullWidth)})},[r(e.$slots,"default")],6)],2),e.$slots.footer?(o(),t("div",{key:0,class:a(e.n("footer"))},[r(e.$slots,"footer")],2)):f("v-if",!0)],2)}var s=d(y,[["render",z]]);s.install=function(e){e.component(s.name,s)};var S={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},U={basicUsage:"Basic Usage",slot:"Footer Slots",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:u,use:_,pack:W,packs:w,merge:A}=h(),J=e=>{B(e),_(e)};l("zh-CN",v);l("en-US",b);u("zh-CN",S);u("en-US",U);export{s as T,W as p,J as u};
