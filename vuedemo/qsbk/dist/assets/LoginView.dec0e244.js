import{_ as F,u as J,B as z,a as D,r as l,w as L,d as w,e as b,h as y,j as o,m as V,C as u,E as r,G as h,k as I,H as G,l as v,g as K,N as O,s as A,v as P,T as S}from"./index.3c14ef27.js";const Q=""+new URL("xiaohuangren1.74c862c8.jpg",import.meta.url).href,W=""+new URL("xiaohuangren2.cc77ccfb.jpg",import.meta.url).href;const p=f=>(A("data-v-cd95be60"),f=f(),P(),f),X={class:"login"},Y={class:"login-img"},Z={key:0,class:"img",src:Q},ee={key:1,class:"img",src:W},oe={class:"login-footer"},se={class:"login-user"},le={class:"xieyi"},ae=p(()=>o("p",null,[v("\u6211\u5DF2\u9605\u8BFB\u540C\u610F"),o("span",null,"\u300A\u7528\u6237\u670D\u52A1\u534F\u8BAE\u300B"),v("\u548C"),o("span",null,"\u300A\u9690\u79C1\u653F\u7B56\u300B")],-1)),te=["onClick"],ne={class:"bc"},ue=p(()=>o("span",null,null,-1)),re=p(()=>o("span",null,null,-1)),ie=p(()=>o("div",{class:"icon"},[o("span"),o("span"),o("span")],-1)),ce={key:0,class:"login-mark"},de=p(()=>o("span",null,"\u52A0\u8F7D\u4E2D",-1)),ve={__name:"LoginView",setup(f){const T=J(),N=z(),U=D(),i=l(!1),m=l(!1),$=l(!1),t=l(!1),C=l(!1),g=l(""),_=l(""),x=l(""),c=l(""),M=()=>{T.back()},a=l("");L(x,n=>{var e=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;e.test(n)&&C.value==!1?(a.value.style.backgroundColor="#fee934",a.value.disabled=!1):(a.value.style.backgroundColor="#f4f4f4",a.value.disabled=!0)});const d=l("");L(c,n=>{n.length==6?(d.value.style.backgroundColor="#fee934",d.value.style.color="#ffffff"):(d.value.style.backgroundColor="#f4f4f4",d.value.style.color="#aaaaaa")});const k=l(60),B=l(!1),H=()=>{let n=parseInt(Math.random()*9e5)+1e5;localStorage.setItem("code",JSON.stringify(n)),a.value.disabled=!0,C.value=!0,a.value.style.backgroundColor="#f4f4f4";const e=setInterval(()=>{k.value-=1,a.value.innerHTML=`(${k.value}\u79D2)`,k.value==0&&(clearInterval(e),localStorage.removeItem("code"),a.value.style.backgroundColor="#fee934",a.value.disabled=!1,C.value=!1,k.value=60,a.value.innerHTML="\u83B7\u53D6\u9A8C\u8BC1\u7801"),B.value==!0&&clearInterval(e)},1e3);setTimeout(()=>{O({type:"success",background:"#07c160",message:`\u4F60\u7684\u9A8C\u8BC1\u7801\u4E3A${n}`,duration:7e3})},3e3)},j=()=>{m.value&&c.value===localStorage.getItem("code")||_.value!==""&&g.value!==""?($.value=!0,B.value=!0,setTimeout(()=>{let n="MaJ6bKsj";U.commit("getToken",n),T.replace(N.query.from),localStorage.removeItem("code")},3e3)):m.value?c.value!=localStorage.getItem("code")?S({message:"\u9A8C\u8BC1\u7801\u9519\u8BEF",icon:"cross"}):_!=""&&g!=""&&S({message:"\u8D26\u53F7\u548C\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",icon:"cross"}):S({message:"\u5148\u52FE\u9009\u7528\u6237\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56",icon:"cross"})};return(n,e)=>{const R=w("van-checkbox"),q=w("van-divider"),E=w("van-loading");return b(),y("div",X,[o("div",Y,[o("span",{onClick:M}),i.value?V("",!0):(b(),y("img",Z)),i.value?(b(),y("img",ee)):V("",!0)]),o("div",oe,[o("div",se,[u(o("input",{class:"user","onUpdate:modelValue":e[0]||(e[0]=s=>g.value=s),type:"text",placeholder:"\u6635\u79F0/\u624B\u673A\u53F7/\u90AE\u7BB1"},null,512),[[r,!t.value],[h,g.value]]),u(o("input",{class:"user","onUpdate:modelValue":e[1]||(e[1]=s=>_.value=s),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onFocus:e[2]||(e[2]=s=>i.value=!0),onBlur:e[3]||(e[3]=s=>i.value=!1)},null,544),[[r,!t.value],[h,_.value]]),u(o("input",{class:"userphone","onUpdate:modelValue":e[4]||(e[4]=s=>x.value=s),type:"text",placeholder:"\u8F93\u5165\u624B\u673A\u53F7"},null,512),[[r,t.value],[h,x.value]]),u(o("input",{class:"user","onUpdate:modelValue":e[5]||(e[5]=s=>c.value=s),type:"text",placeholder:"\u8F93\u5165\u9A8C\u8BC1\u7801",onFocus:e[6]||(e[6]=s=>i.value=!0),onBlur:e[7]||(e[7]=s=>i.value=!1)},null,544),[[r,t.value],[h,c.value]]),o("div",le,[I(R,{modelValue:m.value,"onUpdate:modelValue":e[8]||(e[8]=s=>m.value=s),shape:"square"},null,8,["modelValue"]),ae]),o("input",{type:"submit",onClick:G(j,["prevent"]),value:"\u767B\u5F55",class:"btn",ref_key:"submit",ref:d},null,8,te),u(o("div",ne,"+86",512),[[r,t.value]]),u(o("button",{class:"obtain",ref_key:"obtain",ref:a,onClick:H,disabled:""},"\u83B7\u53D6\u9A8C\u8BC1\u7801",512),[[r,t.value]]),u(o("div",{class:"code",onClick:e[9]||(e[9]=s=>t.value=!0)},[v("\u9A8C\u8BC1\u7801\u767B\u5F55"),ue],512),[[r,!t.value]]),u(o("div",{class:"code",onClick:e[10]||(e[10]=s=>t.value=!1)},[v("\u8D26\u53F7\u5BC6\u7801\u767B\u5F55"),re],512),[[r,t.value]]),I(q,{style:{width:"70%",color:"#999999",borderColor:"#999999",padding:"0 10px",fontSize:"10rem",marginTop:"30rem"}},{default:K(()=>[v("\u7B2C\u4E09\u65B9\u8D26\u53F7\u767B\u5F55")]),_:1}),ie])]),$.value?(b(),y("div",ce,[I(E,{type:"spinner",color:"#fee934"}),de])):V("",!0)])}}},fe=F(ve,[["__scopeId","data-v-cd95be60"]]);export{fe as default};
