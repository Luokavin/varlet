import{F as oe,u as re}from"./provide.515f51d9.js";import{I as ie}from"./index.8ccfa1b5.js";import{P as de}from"./index.67e4e0e5.js";import{I as ue}from"./index.37744189.js";import{R as ce}from"./index.f8492b74.js";import{d as me,r as O,b as q,y as pe,q as D,z as ve,e as U,f as fe,o as m,c as p,a as b,F as ge,k as ye,w as G,p as r,t as he,R as Ve,i as R,h as P,n as we,G as be,j as Re}from"./vendor.49f89f0d.js";import{n as J,o as K,i as Pe,c as Q,t as X}from"./shared.506a394a.js";import{a as Be,g as v,h as Ce}from"./components.38f1d302.js";import{_ as ke}from"./elevation.229458c1.js";const Fe={modelValue:{type:Array,default:()=>[]},accept:{type:String,default:"image/*"},capture:{type:[String,Boolean],default:void 0},multiple:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},removable:{type:Boolean,default:!0},maxlength:{type:[Number,String]},maxsize:{type:[Number,String]},previewed:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange","onRemove"]},rules:{type:Array},hideList:{type:Boolean,default:!1},onBeforeRead:{type:Function},onAfterRead:{type:Function},onBeforeRemove:{type:Function},onRemove:{type:Function},onOversize:{type:Function},"onUpdate:modelValue":{type:Function}};const{n:Se,classes:$e}=Ce("uploader");let De=0;const Ue=me({name:"VarUploader",directives:{Ripple:ce},components:{VarIcon:ie,VarPopup:de,VarFormDetails:oe},props:Fe,setup(e){const u=O(!1),B=O(null),T=q(()=>{const{maxlength:a,modelValue:{length:n}}=e;return Pe(a)?`${n} / ${a}`:""}),{form:l,bindForm:y}=re(),{errorMessage:V,validateWithTrigger:C,validate:k,resetValidation:f}=Be(),s=q(()=>{const{modelValue:a,hideList:n}=e;return n?[]:a}),g=a=>{const{disabled:n,readonly:t,previewed:o}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||t||!o)return;const{url:i}=a;if(Q(i)&&K(i)){ue(i);return}Q(i)&&J(i)&&(B.value=a,u.value=!0)},Y=a=>({id:De++,url:"",cover:"",name:a.name,file:a}),Z=a=>{const n=a.target,{files:t}=n;return Array.from(t)},_=a=>new Promise(n=>{const t=new FileReader;t.onload=()=>{const o=t.result;a.file.type.startsWith("image")&&(a.cover=o),a.url=o,n(a)},t.readAsDataURL(a.file)}),x=a=>a.map(_),ee=a=>{const{onBeforeRead:n}=e;return a.map(t=>new Promise(o=>{const i=n?n(D(t)):!0;Promise.resolve(i).then(h=>o({valid:h,varFile:t}))}))},ae=async a=>{const{maxsize:n,maxlength:t,modelValue:o,onOversize:i,onAfterRead:h,readonly:S,disabled:$}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||$||S)return;const se=d=>d.filter(w=>w.file.size>X(n)?(v(i,D(w)),!1):!0),ne=d=>{const w=Math.min(d.length,X(t)-o.length);return d.slice(0,w)};let c=Z(a).map(Y);c=n!=null?se(c):c,c=t!=null?ne(c):c;const te=await Promise.all(x(c)),j=(await Promise.all(ee(te))).filter(({valid:d})=>d).map(({varFile:d})=>d);v(e["onUpdate:modelValue"],[...o,...j]),a.target.value="",j.forEach(d=>v(h,D(d)))},le=async a=>{const{disabled:n,readonly:t,modelValue:o,onBeforeRemove:i,onRemove:h}=e;if((l==null?void 0:l.disabled.value)||(l==null?void 0:l.readonly.value)||n||t||i&&!await i(a))return;const S=o.filter($=>$!==a);v(h,a),I("onRemove"),v(e["onUpdate:modelValue"],S)},z=()=>e.modelValue.filter(a=>a.state==="success"),N=()=>e.modelValue.filter(a=>a.state==="error"),A=()=>e.modelValue.filter(a=>a.state==="loading"),M={getSuccess:z,getError:N,getLoading:A},I=a=>{ve(()=>{const{validateTrigger:n,rules:t,modelValue:o}=e;C(n,a,t,o,M)})};let F=!1;const E=()=>k(e.rules,e.modelValue,M),H=()=>{F=!0,v(e["onUpdate:modelValue"],[]),f()},W={validate:E,resetValidation:f,reset:H};return y==null||y(W),v(y,W),pe(()=>e.modelValue,()=>{!F&&I("onChange"),F=!1},{deep:!0}),{n:Se,classes:$e,files:s,showPreview:u,currentPreview:B,errorMessage:V,maxlengthText:T,isHTMLSupportVideo:J,isHTMLSupportImage:K,formDisabled:l==null?void 0:l.disabled,formReadonly:l==null?void 0:l.readonly,preview:g,handleChange:ae,handleRemove:le,getSuccess:z,getError:N,getLoading:A,validate:E,resetValidation:f,reset:H}}}),Le=["onClick"],Te=["onClick"],ze=["src","alt"],Ne=["multiple","accept","capture","disabled"],Ae=["src"];function Me(e,u,B,T,l,y){const V=U("var-icon"),C=U("var-form-details"),k=U("var-popup"),f=fe("ripple");return m(),p("div",{class:r(e.classes(e.n(),"var--box"))},[b("div",{class:r(e.n("file-list"))},[(m(!0),p(ge,null,ye(e.files,s=>G((m(),p("div",{class:r(e.classes(e.n("file"),"var-elevation--2",[s.state==="loading",e.n("--loading")])),key:s.id,onClick:g=>e.preview(s)},[b("div",{class:r(e.n("file-name"))},he(s.name||s.url),3),e.removable?(m(),p("div",{key:0,class:r(e.n("file-close")),onClick:Ve(g=>e.handleRemove(s),["stop"])},[R(V,{class:r(e.n("file-close-icon")),"var-uploader-cover":"",name:"delete"},null,8,["class"])],10,Te)):P("v-if",!0),s.cover?(m(),p("img",{key:1,class:r(e.n("file-cover")),style:we({objectFit:s.fit}),src:s.cover,alt:s.name},null,14,ze)):P("v-if",!0),b("div",{class:r(e.classes(e.n("file-indicator"),[s.state==="success",e.n("--success")],[s.state==="error",e.n("--error")]))},null,2)],10,Le)),[[f,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple}]])),128)),!e.maxlength||e.modelValue.length<e.maxlength?G((m(),p("div",{key:0,class:r(e.classes("var--relative",[!e.$slots.default,`${e.n("action")} var-elevation--2`],[e.disabled||e.formDisabled,e.n("--disabled")]))},[b("input",{class:r(e.n("action-input")),type:"file",multiple:e.multiple,accept:e.accept,capture:e.capture,disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly,onChange:u[0]||(u[0]=(...s)=>e.handleChange&&e.handleChange(...s))},null,42,Ne),be(e.$slots,"default",{},()=>[R(V,{class:r(e.n("action-icon")),"var-uploader-cover":"",name:"plus"},null,8,["class"])])],2)),[[f,{disabled:e.disabled||e.formDisabled||e.readonly||e.formReadonly||!e.ripple||e.$slots.default}]]):P("v-if",!0)],2),R(C,{"error-message":e.errorMessage,"maxlength-text":e.maxlengthText},null,8,["error-message","maxlength-text"]),R(k,{class:r(e.n("preview")),"var-uploader-cover":"",position:"center",show:e.showPreview,"onUpdate:show":u[1]||(u[1]=s=>e.showPreview=s),onClosed:u[2]||(u[2]=s=>e.currentPreview=null)},{default:Re(()=>{var s,g;return[e.currentPreview&&e.isHTMLSupportVideo((s=e.currentPreview)==null?void 0:s.url)?(m(),p("video",{key:0,class:r(e.n("preview-video")),playsinline:"true","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",controls:"",src:(g=e.currentPreview)==null?void 0:g.url},null,10,Ae)):P("v-if",!0)]}),_:1},8,["class","show"])],2)}var L=ke(Ue,[["render",Me]]);L.install=function(e){e.component(L.name,L)};export{L as U};
