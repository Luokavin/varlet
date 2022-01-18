var C=Object.defineProperty;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var v=(a,u,c)=>u in a?C(a,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[u]=c,f=(a,u)=>{for(var c in u||(u={}))E.call(u,c)&&v(a,c,u[c]);if(b)for(var c of b(u))y.call(u,c)&&v(a,c,u[c]);return a};import{S}from"./index.d6dce2ca.js";import{O as j}from"./index.dc49ba0b.js";import{I as U}from"./index.a4cdafab.js";import{A}from"./AppType.2df6deed.js";import{d as F}from"./index.77fe3760.js";import{w as _,a as g}from"./utils.72e4e7bc.js";import{u as M,a as k,_ as I,b as B,c as T}from"./en-US.87180fe8.js";import{_ as P}from"./elevation.9adcc0d7.js";import{q as N,_ as D,e as s,o as w,c as R,i as e,j as n,a as V,t as p,F as z,Y as L,Z as O,m as t}from"./vendor.9810b84e.js";import"./index.9eebfc14.js";import"./elements.ca95ba1c.js";import"./shared.99253c97.js";import"./zIndex.c115b57d.js";import"./index.e0c8ad15.js";import"./components.968da630.js";import"./index.fef475e0.js";import"./index.8f0296e6.js";import"./provide.9260f784.js";import"./index.1c5c2b88.js";var Y={basicUsage:"\u57FA\u672C\u4F7F\u7528",plainMode:"\u6734\u7D20\u6A21\u5F0F",disabled:"\u7981\u7528",readonly:"\u53EA\u8BFB",clearable:"\u53EF\u6E05\u9664",displayIcon:"\u663E\u793A\u56FE\u6807",validate:"\u5355\u9009\u503C\u6821\u9A8C",multipleValidate:"\u591A\u9009\u503C\u6821\u9A8C",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u9009\u9879",multiplePlaceholder:"\u8BF7\u9009\u62E9\u591A\u4E2A\u9009\u9879",clearableText:"\u53EF\u6E05\u9664\u6587\u672C",relation:"\u6587\u672C\u5173\u8054\u503C",multiple:"\u591A\u9009",chipMultiple:"\u7EB8\u7247\u98CE\u683C\u7684\u591A\u9009",eat:"\u5403\u996D",sleep:"\u7761\u89C9",play:"\u6253\u6E38\u620F",coding:"\u5199\u4EE3\u7801",rest:"\u6478\u9C7C",currentSelect:"\u5F53\u524D\u9009\u62E9\u7684\u662F:",mustSelectRest:"\u60A8\u4E00\u5B9A\u5F97\u9009\u62E9\u6478\u9C7C",mustSelectMoreThan:"\u60A8\u81F3\u5C11\u9009\u62E9\u4E24\u4E2A\u9009\u9879"},q={basicUsage:"Basic Usage",plainMode:"Plain Mode",disabled:"Disabled",readonly:"Readonly",clearable:"Clearable",displayIcon:"Display Icon",validate:"Validate",multipleValidate:"Multiple Validate",placeholder:"Please select one the options",multiplePlaceholder:"Please select multiple options",clearableText:"Clearable Text",relation:"Label relation value",multiple:"Multiple Selection",chipMultiple:"Multiple choice of paper style",eat:"Eat",sleep:"Sleep",play:"Play game",coding:"Coding",rest:"Rest",currentSelect:"The current selection is:",mustSelectRest:"You must choose to rest",mustSelectMoreThan:"You select at least two options"};const{add:h,use:Z,pack:x,packs:Cl,merge:El}=M(),G=a=>{T(a),Z(a)};k("zh-CN",I);k("en-US",B);h("zh-CN",Y);h("en-US",q);const H={name:"SelectExample",components:{VarSelect:S,VarOption:j,VarIcon:U,AppType:A},setup(){const a=N({value:void 0,value2:void 0,value3:void 0,value4:void 0,value5:[],value6:void 0,value7:[],value8:void 0,value9:void 0,value10:[],value11:void 0});return _(u=>{G(u),a.value=void 0,a.value2=void 0,a.value3=void 0,a.value4=void 0,a.value6=void 0,a.value5=[],a.value7=[],a.value8=void 0,a.value9=void 0,a.value10=[],a.value11=void 0}),g(F),f({pack:x},D(a))}},J=a=>(L("data-v-56062e2a"),a=a(),O(),a),K={class:"relation"},Q=J(()=>V("div",{class:"space"},null,-1));function W(a,u,c,l,X,$){const i=s("app-type"),d=s("var-option"),r=s("var-select"),m=s("var-icon");return w(),R(z,null,[e(i,null,{default:n(()=>[t(p(l.pack.basicUsage),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=o=>a.value=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.plainMode),1)]),_:1}),e(r,{hint:!1,line:!1,placeholder:l.pack.placeholder,modelValue:a.value2,"onUpdate:modelValue":u[1]||(u[1]=o=>a.value2=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.relation),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value6,"onUpdate:modelValue":u[2]||(u[2]=o=>a.value6=o)},{default:n(()=>[e(d,{label:l.pack.eat,value:1},null,8,["label"]),e(d,{label:l.pack.sleep,value:2},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),V("div",K,p(l.pack.currentSelect)+" "+p(a.value6),1),e(i,null,{default:n(()=>[t(p(l.pack.disabled),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,disabled:"",modelValue:a.value4,"onUpdate:modelValue":u[3]||(u[3]=o=>a.value4=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.readonly),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,readonly:"",modelValue:a.value3,"onUpdate:modelValue":u[4]||(u[4]=o=>a.value3=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.clearable),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,clearable:"",modelValue:a.value8,"onUpdate:modelValue":u[5]||(u[5]=o=>a.value8=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.displayIcon),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,modelValue:a.value11,"onUpdate:modelValue":u[6]||(u[6]=o=>a.value11=o)},{"prepend-icon":n(()=>[e(m,{class:"prepend-icon",name:"plus"})]),"append-icon":n(()=>[e(m,{class:"append-icon",name:"minus"})]),default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.multiple),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,multiple:"",modelValue:a.value5,"onUpdate:modelValue":u[7]||(u[7]=o=>a.value5=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.chipMultiple),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,chip:"",multiple:"",modelValue:a.value7,"onUpdate:modelValue":u[8]||(u[8]=o=>a.value7=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.validate),1)]),_:1}),e(r,{placeholder:l.pack.placeholder,rules:[o=>o===l.pack.rest||l.pack.mustSelectRest],modelValue:a.value9,"onUpdate:modelValue":u[9]||(u[9]=o=>a.value9=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.rest},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),e(i,null,{default:n(()=>[t(p(l.pack.multipleValidate),1)]),_:1}),e(r,{placeholder:l.pack.multiplePlaceholder,multiple:"",rules:[o=>o.length>=2||l.pack.mustSelectMoreThan],modelValue:a.value10,"onUpdate:modelValue":u[10]||(u[10]=o=>a.value10=o)},{default:n(()=>[e(d,{label:l.pack.eat},null,8,["label"]),e(d,{label:l.pack.sleep},null,8,["label"]),e(d,{label:l.pack.play},null,8,["label"]),e(d,{label:l.pack.coding},null,8,["label"])]),_:1},8,["placeholder","rules","modelValue"]),Q],64)}var yl=P(H,[["render",W],["__scopeId","data-v-56062e2a"]]);export{yl as default};
