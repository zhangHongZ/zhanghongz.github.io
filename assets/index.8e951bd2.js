import{H as U,_ as H,z as O,r as m,A as $,L as G,d as i,K,o as x,c as J,e,w as l,f as t,i as P,m as b,C as V,j as B,V as S,D as M,k as W,B as X,s as Y}from"./index.4196b790.js";function Z(_){return U({url:"/company/info/list",method:"get",params:_})}function ee(_){return U({url:"/company/info/"+_,method:"get"})}const le={class:"app-container"},te={class:"dialog-footer"},ne=O({name:"Administer"}),ae=Object.assign(ne,{setup(_){const{proxy:C}=Y(),k=m([]),r=m(!1),v=m(!0),y=m(0),N=m(""),q=$({form:{},queryParams:{pageNum:1,pageSize:10,name:void 0,mobile:void 0}}),{queryParams:a,form:s}=G(q);function h(){v.value=!0,Z(a.value).then(c=>{k.value=c.rows,y.value=c.total,v.value=!1})}function w(){a.value.pageNum=1,h()}function z(){C.resetForm("queryRef"),a.value.pageNum=1}function R(){s.value={id:void 0,name:void 0,mobile:void 0,contact:void 0,businessLicense:void 0},C.resetForm("detailRef")}function I(c){R(),ee(c.id).then(o=>{s.value=o.data,r.value=!0,N.value="\u67E5\u770B\u516C\u53F8\u4FE1\u606F"})}function D(){r.value=!1,R()}return h(),(c,o)=>{const p=i("el-input"),d=i("el-form-item"),f=i("el-button"),L=i("el-form"),u=i("el-table-column"),j=i("el-table"),A=i("pagination"),g=i("el-col"),F=i("el-row"),Q=i("el-dialog"),T=K("hasPermi"),E=K("loading");return x(),J("div",le,[e(L,{model:t(a),ref:"queryRef",inline:!0,"label-width":"100px"},{default:l(()=>[e(d,{label:"\u4F01\u4E1A\u540D\u79F0",prop:"name"},{default:l(()=>[e(p,{modelValue:t(a).name,"onUpdate:modelValue":o[0]||(o[0]=n=>t(a).name=n),placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0",clearable:"",style:{width:"240px"},onKeyup:P(w,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(d,{label:"\u8054\u7CFB\u4EBA\u7535\u8BDD",prop:"mobile"},{default:l(()=>[e(p,{modelValue:t(a).mobile,"onUpdate:modelValue":o[1]||(o[1]=n=>t(a).mobile=n),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u7535\u8BDD",clearable:"",style:{width:"240px"},onKeyup:P(w,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(d,null,{default:l(()=>[e(f,{type:"primary",icon:"Search",onClick:w},{default:l(()=>[b("\u641C\u7D22")]),_:1}),e(f,{icon:"Refresh",onClick:z},{default:l(()=>[b("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"]),V((x(),B(j,{data:t(k)},{default:l(()=>[e(u,{type:"index",width:"50",label:"\u5E8F\u53F7",align:"center"}),e(u,{prop:"name",label:"\u4F01\u4E1A\u540D\u79F0",align:"center"}),e(u,{prop:"businessLicense",label:"\u8425\u4E1A\u6267\u7167",align:"center"},{default:l(n=>[e(S,{width:100,height:100,src:n.row.businessLicense},null,8,["src"])]),_:1}),e(u,{prop:"contact",label:"\u516C\u53F8\u8054\u7CFB\u4EBA",align:"center"}),e(u,{prop:"mobile",label:"\u8054\u7CFB\u4EBA\u7535\u8BDD",align:"center"}),e(u,{prop:"platformRegisterTime",label:"\u5E73\u53F0\u6CE8\u518C\u65F6\u95F4",align:"center"}),e(u,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:l(n=>[V((x(),B(f,{link:"",type:"primary",icon:"View",onClick:oe=>I(n.row)},{default:l(()=>[b("\u67E5\u770B")]),_:2},1032,["onClick"])),[[T,["system:dept:edit"]]])]),_:1})]),_:1},8,["data"])),[[E,t(v)]]),V(e(A,{total:t(y),page:t(a).pageNum,"onUpdate:page":o[2]||(o[2]=n=>t(a).pageNum=n),limit:t(a).pageSize,"onUpdate:limit":o[3]||(o[3]=n=>t(a).pageSize=n),onPagination:h},null,8,["total","page","limit"]),[[M,t(y)>0]]),e(Q,{title:t(N),modelValue:t(r),"onUpdate:modelValue":o[4]||(o[4]=n=>X(r)?r.value=n:null),width:"40%","append-to-body":""},{footer:l(()=>[W("div",te,[e(f,{onClick:D},{default:l(()=>[b("\u53D6 \u6D88")]),_:1})])]),default:l(()=>[e(L,{ref:"detailRef",model:t(s),"label-width":"100px"},{default:l(()=>[e(F,null,{default:l(()=>[e(g,{span:24},{default:l(()=>[e(d,{label:"\u516C\u53F8\u540D\u79F0"},{default:l(()=>[e(p,{value:t(s).name,readonly:""},null,8,["value"])]),_:1})]),_:1}),e(g,{span:24},{default:l(()=>[e(d,{label:"\u516C\u53F8\u8054\u7CFB\u4EBA"},{default:l(()=>[e(p,{value:t(s).contact,readonly:""},null,8,["value"])]),_:1})]),_:1}),e(g,{span:24},{default:l(()=>[e(d,{label:"\u8054\u7CFB\u7535\u8BDD"},{default:l(()=>[e(p,{value:t(s).mobile,readonly:""},null,8,["value"])]),_:1})]),_:1}),e(g,{span:24},{default:l(()=>[e(d,{label:"\u8425\u4E1A\u6267\u7167"},{default:l(()=>[e(S,{width:200,height:140,src:t(s).businessLicense},null,8,["src"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["title","modelValue"])])}}}),se=H(ae,[["__scopeId","data-v-e16dd201"]]);export{se as default};
