import{h as t}from"./vue.71710d55.js";import{aN as l}from"./NvapForm.32ab4956.js";const a=[{title:"id",key:"id"},{title:"角色名称",key:"name",render:e=>t(l,{type:"success"},{default:()=>e.name})}],p=[{title:"id",key:"id"},{title:"角色名称",key:"name",edit:!0,editComponent:"NInput"},{title:"角色类型",key:"nametype",edit:!0,editComponent:"NSelect",editComponentProps:{options:[{label:"管理员",value:1},{label:"测试",value:2}]},ellipsis:!1},{title:"角色是否启用",key:"switch",edit:!0,editComponent:"NSwitch",editValueMap:e=>e?"启用":"禁用"}],i=[{field:"name",label:"名称",component:"NInput",giProps:{span:3},componentProps:{placeholder:"请输入姓名",onInput:()=>{}},rules:[{required:!0,message:"请输入姓名",trigger:["blur"]}]},{field:"age",label:"性别",component:"NInput",giProps:{span:3},componentProps:{placeholder:"请输入性别",onInput:()=>{}},rules:[{required:!0,message:"请输入性别",trigger:["blur"]}]},{field:"age",label:"性别",component:"NInput",giProps:{span:3},componentProps:{placeholder:"请输入性别",onInput:()=>{}},rules:[{required:!0,message:"请输入性别",trigger:["blur"]}]},{field:"age",label:"性别",component:"NInput",giProps:{span:3},componentProps:{placeholder:"请输入性别",onInput:()=>{}},rules:[{required:!0,message:"请输入性别",trigger:["blur"]}]}],s={pageSize:10,pageCount:1,list:[{id:"63feeff3569f0473b0f6dcd9",name:"管理员",nametype:1,switch:!0,code:["table","from","three","webgl","example"],permissions:["table - add","table - select","table - delete "]},{id:"6400a2070a9e5e46991f1c63",name:"测试",nametype:2,switch:!0,code:["example","table","from"],permissions:["delete "]}]};export{a,p as c,s as d,i as s};
