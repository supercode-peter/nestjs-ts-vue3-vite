import{_ as x}from"./ComponentPage.vue_vue_type_script_setup_true_name_ComponentPage_lang.da812460.js";import{_ as C}from"./NvapTable.5831c320.js";import{_ as b}from"./index.vue_vue_type_script_setup_true_name_assignRoles_lang.6abc0b97.js";import{_ as M}from"./NvapModal.01430e95.js";import{aQ as U,aR as $,aS as z,aT as P,aU as S,h as T}from"./NvapForm.32ab4956.js";import{s as A,c as B,a as N}from"./userColumns.5fd566a9.js";import{u as O}from"./useModal.11f91f90.js";import{u as j,L as q}from"./layenum.51237ff4.js";import{d as g,U as v,Z as y,X as c,k as t,u as n,r as F,a as w,o as G,l as K}from"./vue.71710d55.js";import{g as L}from"./roles.c85b50b3.js";import"./AppPage.vue_vue_type_script_setup_true_name_AppPage_lang.083a423a.js";import"./vue-router.37441a91.js";import"./vue-i18n.b2cb1419.js";import"./axios.9678a311.js";import"./TableAction.19dbf54e.js";const Q=g({name:"addUser"}),V=g({...Q,setup(_,{expose:u}){const[r,{openModal:i,closeModal:o}]=O({title:"新增用户"}),[p,{getFieldsValue:d}]=j({gridProps:{cols:1},collapsedRows:3,labelWidth:120,layout:q.horizontal,showActionButtonGroup:!1,schemas:A});u({open:async()=>{i()}});const f=async()=>{const l=d(),{code:m}=await U(l);m==200&&(window.$message.success("新增成功"),o())};return(l,m)=>{const a=$,e=M;return v(),y(e,{onRegister:n(r),class:"NvapModal",onOnOk:f},{default:c(()=>[t(a,{onRegister:n(p)},null,8,["onRegister"])]),_:1},8,["onRegister"])}}}),re=g({__name:"index",setup(_){const u=F({name:""}),r=w(),i=w(),o=w([]),p=async a=>{let e={...n(u),...a};const{data:s}=await z(e);return s},d=async a=>{let e=[];P(a,"roles")&&o.value.filter(s=>{a.roles.includes(s.value)&&e.push(s.value)}),e=[...new Set(e)],i.value.open(a,e,o.value)};G(async()=>{const{data:a}=await L({page:1,pageSize:10});o.value=a.list.map(e=>({label:e.name,value:e.id}))});const f=a=>{window.$dialog.info({title:"提示",content:"您确定想删除此用户吗?",positiveText:"确定",negativeText:"取消",onPositiveClick:async()=>{const{code:e,msg:s}=await S(a.id);e==200?window.$message.success("删除成功"):window.$message.error(s)},onNegativeClick:()=>{window.$message.error("已取消")}})},l=()=>{},m=()=>{r.value.open()};return(a,e)=>{const s=T,k=C,R=x;return v(),y(R,null,{default:c(()=>[t(k,{columns:n(B),request:p,"row-key":h=>h.id,ref:"actionRef",actionColumn:n(N)(d,f),"onUpdate:checkedRowKeys":l},{tableButton:c(()=>[t(s,{type:"primary",size:"small",onClick:m},{default:c(()=>[K("添加用户")]),_:1})]),_:1},8,["columns","row-key","actionColumn"]),t(V,{ref_key:"addUse",ref:r},null,512),t(b,{ref_key:"assignRole",ref:i},null,512)]),_:1})}}});export{re as default};
