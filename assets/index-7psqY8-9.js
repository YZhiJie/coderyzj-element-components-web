import{a as B}from"./axios-G2rPRu76.js";import{d as E,r as o,o as L,f as l,a as M,h as N,v as a,q as n,K as i,D as r,A as C}from"./elementPlus-bnWr50qM.js";const V=`
              <path class="path" d="
                M 30 15
                L 28 17
                M 25.61 25.61
                A 15 15, 0, 0, 1, 15 30
                A 15 15, 0, 1, 1, 27.99 7.5
                L 15 15
              " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
            `,K=E({__name:"index",setup($){const u=o(),g=o([]),d=o(""),m=o(1),_=o(10),v=o(0),p=()=>{B.post("/api/list",{current:m.value,pageSize:_.value}).then(e=>{g.value=e.data.data.rows,v.value=e.data.data.total})};L(()=>{p()});const h=[{label:"日期",prop:"date",slot:"date",align:"center",editable:!0},{label:"姓名",prop:"name",slot:"name",align:"center",editable:!0},{label:"地址",prop:"address",align:"center"},{label:"操作",prop:"operation",align:"center",action:!0}],b=e=>{d.value="edit",console.log(e)},k=e=>{console.log(e)},w=e=>{console.log("confirm",e)},x=e=>{console.log("cancel",e)},y=e=>{_.value=e,p()},z=e=>{m.value=e,p()},R=e=>{var c;(c=u.value)==null||c.cancelClick(e)};return(e,c)=>{const D=l("Timer"),I=l("el-icon"),S=l("el-tag"),A=l("el-popover"),s=l("el-button"),T=l("m-table");return M(),N(T,{ref_key:"tableRef",ref:u,stripe:"",data:g.value,options:h,elementLoadingText:"正在拼命加载中 ...","element-loading-background":"rgba(0, 0, 0, .9)","element-loading-svg":V,"element-loading-svg-view-box":"-10, -10, 50, 50",onConfirm:w,onCancel:x,editIcon:"Edit",isEditRow:"",pagination:"",total:v.value,editRowIndex:d.value,"onUpdate:editRowIndex":c[0]||(c[0]=t=>d.value=t),paginationAlign:"center",onSizeChange:y,onCurrentChange:z},{date:a(({scope:t})=>[n(I,null,{default:a(()=>[n(D)]),_:1}),i(" "+r(t.row.date),1)]),name:a(({scope:t})=>[n(A,{effect:"light",trigger:"hover",placement:"top",width:"auto"},{default:a(()=>[C("div",null,"name: "+r(t.row.name),1),C("div",null,"address: "+r(t.row.address),1)]),reference:a(()=>[n(S,null,{default:a(()=>[i(r(t.row.name),1)]),_:2},1024)]),_:2},1024)]),action:a(({scope:t})=>[n(s,{size:"small",type:"primary",onClick:f=>b(t)},{default:a(()=>[i("编辑")]),_:2},1032,["onClick"]),n(s,{size:"small",type:"danger",onClick:f=>k(t)},{default:a(()=>[i("删除")]),_:2},1032,["onClick"])]),editRow:a(({scope:t})=>[n(s,{size:"small",type:"primary"},{default:a(()=>[i("确定")]),_:1}),n(s,{size:"small",type:"danger",onClick:f=>R(t)},{default:a(()=>[i("取消")]),_:2},1032,["onClick"])]),_:1},8,["data","total","editRowIndex"])}}});export{K as default};
