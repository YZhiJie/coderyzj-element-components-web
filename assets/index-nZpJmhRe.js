import{d as h,r as y,f as u,a as f,b as _,q as t,v as l,K as s,A as k,E as p}from"./elementPlus-bnWr50qM.js";const C=k("div",{style:{color:"#ccc","font-size":"12px"}},"jpg/png files with a size less than 500KB.",-1),B=h({__name:"index",setup(x){const r=y(!1),c=()=>{r.value=!0},d=[{type:"input",value:"",label:"用户名",prop:"username",rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}],attrs:{clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}],attrs:{showPassword:!0,clearable:!0}},{type:"select",value:"",placeholder:"请选择职位",prop:"role",label:"职位",attrs:{style:{width:"100%"}},rules:[{required:!0,message:"职位不能为空",trigger:"blur"}],children:[{type:"option",label:"经理",value:"1"},{type:"option",label:"主管",value:"2"},{type:"option",label:"员工",value:"3"}]},{type:"checkbox-group",value:[],prop:"like",label:"爱好",rules:[{required:!0,message:"爱好不能为空",trigger:"change"}],children:[{type:"checkbox",label:"足球",value:"football"},{type:"checkbox",label:"篮球",value:"basketball"},{type:"checkbox",label:"排球",value:"volleyball"}]},{type:"radio-group",value:"",prop:"gender",label:"性别",rules:[{required:!0,message:"性别不能为空",trigger:"change"}],children:[{type:"radio",label:"男",value:"male"},{type:"radio",label:"女",value:"female"},{type:"radio",label:"保密",value:"secret"}]},{type:"upload",label:"上传文件",prop:"pic",uploadAttrs:{action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,limit:3,name:"photos"},rules:[{required:!0,message:"文件不能为空",trigger:"blur"}]},{type:"editor",value:"",prop:"desc",label:"描述",editorConfig:{placeholder:"请输入描述信息"},rules:[{required:!0,message:"描述不能为空",trigger:"blur"}]}],g=e=>{const o=e.validate(),a=e.getFormData();o(i=>{i?(console.log(a),p.success("验证成功")):p.error("验证失败")})},b=()=>{r.value=!1},m=e=>{console.log("onChange",e)},v=e=>{console.log("handleSuccess"),console.log(e)};return(e,o)=>{const a=u("el-button"),i=u("m-modal-form");return f(),_("div",null,[t(a,{type:"primary",onClick:c},{default:l(()=>[s("open")]),_:1}),t(i,{isScroll:"",title:"编辑用户",width:"50%",visible:r.value,"onUpdate:visible":o[0]||(o[0]=n=>r.value=n),options:d,"label-width":"80px",onChange:m,onSuccess:v},{uploadArea:l(()=>[t(a,{size:"small",type:"primary"},{default:l(()=>[s("Click to upload")]),_:1})]),uploadTip:l(()=>[C]),footer:l(({formRef:n})=>[t(a,{onClick:b},{default:l(()=>[s("取消")]),_:1}),t(a,{type:"primary",onClick:q=>g(n)},{default:l(()=>[s("确认")]),_:2},1032,["onClick"])]),_:1},8,["visible"])])}}});export{B as default};