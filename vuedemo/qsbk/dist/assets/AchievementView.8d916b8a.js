import{_ as M}from"./ic_topic_prefix.9.4b76950c.js";import{a as E}from"./axios.8ade02f1.js";import{_ as J,B as P,r as c,d as v,J as T,e as s,h as o,j as e,m as l,k as w,g as m,F as B,i as I,f as S,p as z,t as n,l as Y,q as N,C as G,s as H,v as K}from"./index.3c14ef27.js";const _=p=>(H("data-v-9987d7d2"),p=p(),K(),p),O={class:"act"},Q={key:0,class:"title"},W={key:1,class:"title"},X={key:2,class:"title"},Z={class:"wrap"},y={key:0,class:"sheItem"},ee={class:"video_head"},te={class:"user_info"},se=["src"],oe={key:1,class:"tou_icon"},le={class:"name"},ae=["src"],ie={key:0,class:"royao"},ne=_(()=>e("div",{class:"video_icon"},[e("i",{class:"guan"}),e("i",{class:"dele"})],-1)),_e={class:"context"},ue={key:0,class:"topic"},re={class:"top_wrap"},de=_(()=>e("img",{src:M,alt:""},null,-1)),ce=["src"],ve=_(()=>e("div",{class:"play_btn"},null,-1)),me=["src"],pe={key:0,class:"changtu"},ge=_(()=>e("span",null,"\u957F\u56FE",-1)),he=[ge],fe={key:2,class:"picture_wrap"},ke={key:0,class:"gif_icon"},we=_(()=>e("span",null,"\u52A8\u56FE",-1)),ze=[we],$e={key:3,class:"hot_com"},xe={class:"head_com"},be={class:"head_wrap"},qe=["src"],Ve={class:"head_zan"},Ce={class:"hot_content"},Be={class:"video_foot"},Ie={class:"left"},Se=_(()=>e("div",{class:"like"},null,-1)),Ne=_(()=>e("div",{class:"unlike"},null,-1)),Ae={class:"right"},De=_(()=>e("div",{class:"comment_icon"},null,-1)),Le=_(()=>e("div",{class:"share_icon"},null,-1)),Re={__name:"AchievementView",setup(p){const A=a=>{let i=Math.floor(a/60),r=Math.floor(a%60);return r<10&&(r="0"+r),i+":"+r},$=P(),u=c([]),g=c(!1),f=c(!1),h=c(!1);let k=c(0);const x=()=>{k.value++,E.get(`https://apis.netstart.cn/qiushi/user/${$.query.id}/${$.query.text}`,{params:{page:k.value,count:20}}).then(a=>{h.value&&(u.value=[],h.value=!1),u.value=[...u.value,...a.data.items],a.data.items.length||(f.value=!0),g.value=!1})},D=()=>{k.value=0,f.value=!1,g.value=!0,x()};return(a,i)=>{const r=v("van-grid-item"),L=v("van-grid"),R=v("van-skeleton"),U=v("van-list"),j=v("van-pull-refresh"),F=T("lazy");return s(),o("div",O,[e("header",null,[e("div",{class:"left_icon",onClick:i[0]||(i[0]=t=>a.$router.back())}),a.$route.query.text=="qsjx"?(s(),o("h3",Q,"ta\u7684\u795E\u539F\u521B")):l("",!0),a.$route.query.text=="qsyx"?(s(),o("h3",W,"ta\u7684\u795EUP")):l("",!0),a.$route.query.text=="magic_comment"?(s(),o("h3",X,"ta\u7684\u795E\u8BC4")):l("",!0)]),e("div",Z,[w(j,{modelValue:h.value,"onUpdate:modelValue":i[4]||(i[4]=t=>h.value=t),onRefresh:D},{default:m(()=>[w(U,{loading:g.value,"onUpdate:loading":i[3]||(i[3]=t=>g.value=t),finished:f.value,"finished-text":"\u6CA1\u6709\u66F4\u591A\u4E86",onLoad:x},{default:m(()=>[(s(!0),o(B,null,I(u.value.length?u.value:5,t=>(s(),S(R,{title:"",avatar:"",row:3,loading:!u.value.length},{default:m(()=>{var b,q,V,C;return[t.user?(s(),o("div",y,[e("div",ee,[e("div",te,[e("div",{class:"user_pic",onClick:i[1]||(i[1]=d=>a.$router.push({path:"/user"}))},[e("img",{src:t.user.thumb,alt:""},null,8,se),t.user.box_url?(s(),o("div",{key:0,class:"xiangkuang",style:z(`background-image:url('${t.user.box_url}')`)},null,4)):l("",!0),t.user.talents?(s(),o("div",oe)):l("",!0)]),e("div",{class:"user_name",onClick:i[2]||(i[2]=d=>a.$router.push({path:"/user"}))},[e("div",le,[e("span",null,n(t.user.login),1),t.user.titles?(s(),o("img",{key:0,src:t.user.titles[0].icon,alt:""},null,8,ae)):l("",!0)]),t.user.talents?(s(),o("div",ie,[e("p",null,n(t.user.talents[0].cmd_desc),1)])):l("",!0)])]),ne]),e("div",_e,[e("p",null,[t.topic?(s(),o("div",ue,[e("div",re,[de,e("span",null,n(t.topic.content),1)])])):l("",!0),Y(n(t.content),1)])]),t.pic_size?(s(),o("div",{key:0,class:N(t.pic_size[0]/t.pic_size[1]<=1?"video_wrap1":"video_wrap2")},[e("img",{src:t.pic_url,alt:""},null,8,ce),e("div",{class:"mask",style:z(`background-image:url('${t.pic_url}')`)},null,4),ve,e("span",null,n(A(t.pic_size[2])),1)],2)):l("",!0),t.image_size?(s(),o("div",{key:1,class:N(t.image_size.m[0]/t.image_size.m[1]<1?"video_wrap1":"video_wrap2")},[e("img",{src:t.low_url,alt:""},null,8,me),t.image_size.m[1]/t.image_size.m[0]>3?(s(),o("div",pe,he)):l("",!0)],2)):l("",!0),t.attachments?(s(),o("div",fe,[w(L,{square:"",gutter:5,border:!1,"column-num":3},{default:m(()=>[(s(!0),o(B,null,I(t.attachments,d=>(s(),S(r,null,{default:m(()=>[G((s(),o("div",{class:"pic",style:z(`background-image:url('${d.origin_url}')`)},[d.format=="gif"?(s(),o("div",ke,ze)):l("",!0)],4)),[[F,d.origin_url,"background-image"]])]),_:2},1024))),256))]),_:2},1024)])):l("",!0),t.hot_comment?(s(),o("div",$e,[e("div",xe,[e("div",be,[e("img",{src:(b=t.hot_comment)==null?void 0:b.user.thumb,alt:""},null,8,qe),e("span",null,n((q=t.hot_comment)==null?void 0:q.user.login)+"\uFF1A",1)]),e("div",Ve,[e("span",null,n((V=t.hot_comment)==null?void 0:V.like_count)+" \u8D5E",1)])]),e("div",Ce,[e("p",null,n((C=t.hot_comment)==null?void 0:C.content),1)])])):l("",!0),e("div",Be,[e("div",Ie,[Se,e("span",null,n(t.votes.up+t.votes.down),1),Ne]),e("div",Ae,[De,e("span",null,n(t.comments_count),1),Le,e("span",null,n(t.share_count),1)])])])):l("",!0)]}),_:2},1032,["loading"]))),256))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])])])}}},Me=J(Re,[["__scopeId","data-v-9987d7d2"]]);export{Me as default};
