var C=Object.defineProperty,k=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var p=(e,l,o)=>l in e?C(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o,V=(e,l)=>{for(var o in l||(l={}))y.call(l,o)&&p(e,o,l[o]);if(v)for(var o of v(l))B.call(l,o)&&p(e,o,l[o]);return e},b=(e,l)=>k(e,g(l));import{A as z}from"./AppType.2df6deed.js";import{S as A}from"./index.431083f1.js";import{d as j}from"./index.77fe3760.js";import{u as E,a as f,_ as w,b as F,c as N}from"./en-US.87180fe8.js";import{w as D,a as L}from"./utils.72e4e7bc.js";import{_ as T}from"./elevation.9adcc0d7.js";import{q as h,_ as c,e as S,o as R,c as q,a as s,i as u,j as t,F as I,m as i,t as m}from"./vendor.9810b84e.js";import"./components.968da630.js";import"./shared.99253c97.js";import"./provide.9260f784.js";import"./elements.ca95ba1c.js";var M={basicUsage:"\u57FA\u672C\u4F7F\u7528",stepSize:"\u6307\u5B9A\u6B65\u957F",dualThumb:"\u53CC\u6ED1\u5757",disable:"\u7981\u7528",readonly:"\u53EA\u8BFB",sliderSize:"\u4E0D\u540C\u5927\u5C0F",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",showLabel:"\u663E\u793A\u6807\u7B7E",customBtn:"\u81EA\u5B9A\u4E49\u6309\u94AE",validateValue:"\u503C\u7684\u6821\u9A8C"},G={basicUsage:"Basic Usage",stepSize:"Step Size",dualThumb:"Dual thumb",disable:"Disable",readonly:"Readonly",sliderSize:"Slider Size",customStyle:"Custom Style",showLabel:"Show Label",customBtn:"Custom Button",validateValue:"Validate Value"};const{add:U,use:H,pack:J,packs:se,merge:te}=E(),K=e=>{N(e),H(e)};f("zh-CN",w);f("en-US",F);U("zh-CN",M);U("en-US",G);const O={name:"SliderExample",components:{VarSlider:A,AppType:z},setup(){const e=h({value:3,value1:[24,50],value2:25,value3:40,value4:20,value5:20,value6:70,value7:50,value8:20,value9:[5,38],value10:[7,64]}),l=o=>{console.log(o)};return D(K),L(j),b(V({},c(e)),{pack:J,handleChange:l})}},P={class:"slider-example_block"};function Q(e,l,o,n,W,X){const r=S("app-type"),d=S("var-slider");return R(),q(I,null,[s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.basicUsage),1)]),_:1}),u(d,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.stepSize),1)]),_:1}),u(d,{modelValue:e.value2,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value2=a),step:"10"},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.dualThumb),1)]),_:1}),u(d,{modelValue:e.value1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value1=a),range:"",onChange:n.handleChange,"label-visible":"always"},null,8,["modelValue","onChange"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.disable),1)]),_:1}),u(d,{modelValue:e.value3,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value3=a),disabled:""},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.readonly),1)]),_:1}),u(d,{modelValue:e.value3,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value3=a),readonly:""},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.sliderSize),1)]),_:1}),u(d,{modelValue:e.value10,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value10=a),"track-height":"4","thumb-size":"8",range:""},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.customStyle),1)]),_:1}),u(d,{modelValue:e.value4,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value4=a),"label-color":"purple","active-color":"#e0732c","track-color":"#3a68b4","thumb-color":"#e25241","label-text-color":"#ededed"},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.customBtn),1)]),_:1}),u(d,{modelValue:e.value9,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value9=a),range:"","active-color":"#52af77"},{button:t(({currentValue:a})=>[s("div",P,m(a),1)]),_:1},8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.showLabel),1)]),_:1}),u(d,{modelValue:e.value5,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value5=a),"label-visible":"never"},null,8,["modelValue"]),u(d,{modelValue:e.value6,"onUpdate:modelValue":l[9]||(l[9]=a=>e.value6=a)},null,8,["modelValue"]),u(d,{modelValue:e.value7,"onUpdate:modelValue":l[10]||(l[10]=a=>e.value7=a),"label-visible":"always"},null,8,["modelValue"])]),s("div",null,[u(r,null,{default:t(()=>[i(m(n.pack.validateValue),1)]),_:1}),u(d,{modelValue:e.value8,"onUpdate:modelValue":l[11]||(l[11]=a=>e.value8=a),rules:[a=>a>35||"error message"]},null,8,["modelValue","rules"])])],64)}var me=T(O,[["render",Q],["__scopeId","data-v-8d9bb942"]]);export{me as default};
