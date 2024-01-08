import{d,r as i,f as v,a as m,h as p}from"./elementPlus-bnWr50qM.js";const C=d({__name:"index",setup(u){const s=i([{title:"购物",start:"2023-06-13 08:00",end:"2023-06-13 12:00",editable:!0},{title:"敲代码",start:"2023-06-14 10:00",end:"2023-06-30 16:00"}]),a=e=>{s.value.push({title:"搞事情",start:e.dateStr+" 12:00",end:e.dateStr+" 18:00"})},o=e=>{console.log(e)},c=e=>{const n=document.createElement("div"),t=e.timeText.split("-"),l=t[0].replace("时",""),r=t[1].replace("时","");return n.innerHTML=`
          <img src="src/assets/vue.svg" style="width: 30px;">
          <div>开始时间: ${l}</div>
          <div>结束时间: ${r}</div>
          <div>标题:  ${e.event._def.title}</div>
        `,{domNodes:[n]}};return(e,n)=>{const t=v("m-calendar");return m(),p(t,{displayEventEnd:"",events:s.value,onDateClick:a,onEventClick:o,eventContent:c},null,8,["events"])}}});export{C as default};
