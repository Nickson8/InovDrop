exports.id=828,exports.ids=[828],exports.modules={98722:()=>{},84873:(e,t,a)=>{Promise.resolve().then(a.bind(a,50814)),Promise.resolve().then(a.bind(a,58763)),Promise.resolve().then(a.bind(a,3820)),Promise.resolve().then(a.bind(a,4907)),Promise.resolve().then(a.bind(a,54889))},35755:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,26840,23)),Promise.resolve().then(a.t.bind(a,38771,23)),Promise.resolve().then(a.t.bind(a,13225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,43982,23))},76191:(e,t,a)=>{"use strict";a.d(t,{JN:()=>d,Ke:()=>l,ML:()=>n,Yg:()=>i,ni:()=>r,xT:()=>o}),a(13664);var s=a(28371);(0,s.$)("7a4ee3e6745dd049db803f8227da544617438f7e"),(0,s.$)("b55ce47193d80ed7c4e4788112d81c516920b993"),(0,s.$)("bf85958dff3324d445980ba082ab27904560c79b");var r=(0,s.$)("c0c9746688f5ff2c2bc455a56746faeaeb09911b"),l=(0,s.$)("1a444d861d429897e20df0eff6c8bdc2363103d5"),n=(0,s.$)("9073680ea970370eb54c15ab6be4cfb1e0c83dd0"),i=(0,s.$)("61db52ac61cad4bfdcc0f12de195e289511fb04b");(0,s.$)("7fc63d17120b1d8e1859e544f2795fdc06b16086");var d=(0,s.$)("e15cf3dab848181f04209a23c62af44813c43e10");(0,s.$)("afc4aa456334a3d83dc53b3bc1dbfcf7adee6f27");var o=(0,s.$)("15924735a364096939848bc81b246fb3913f418e");(0,s.$)("0e3c7690dfe9f8d4c279c91ce14dc049351fc852")},50814:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(95344);a(3729);var r=a(56815),l=a(79377);let n=(...e)=>(0,l.m6)((0,r.W)(e));var i=a(24501),d=new Date,o=new Intl.DateTimeFormat("pt-br",{month:"short",day:"2-digit",year:"numeric"});let c=()=>s.jsx("div",{className:n("sticky inset-x-0 top-0 z-30 px-10 pt-4 w-full transition-all bg-transparent backdrop-blur-sm"),children:(0,s.jsxs)("div",{className:"relative p-4 flex flex-row space-x-4 bg-indigo-800 rounded-lg items-center w-full h-[80%] shadow-xl shadow-slate-100",children:[s.jsx("p",{className:"text-xl font-bold text-white",children:"Bem-Vindo"}),(0,s.jsxs)("p",{className:" font-normal text-white",children:[" ",">>"," "]}),s.jsx("p",{className:"text-white",children:o.format(d)}),(0,s.jsxs)("div",{className:"absolute inset-y-4 right-10 bg-gray-100 rounded-lg w-[352px] h-[32px] border-2 border-gray-200 row-auto cursor-not-allowed",children:[s.jsx("p",{className:"py-1 px-10 text-sm text-gray-400",children:"Pesquise aqui"}),s.jsx("span",{className:"absolute inset-y-1 right-2",children:s.jsx(i.JO,{icon:"ic:outline-search",width:22,height:22,color:"#9ca3aa"})})]})]})})},58763:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var s=a(95344),r=a(41223),l=a.n(r),n=a(73644),i=a(57916),d=a(3729),o=a.n(d),c=a(53608),x=a(81419),m=a(76191),h=a(22254),p=a(74314),u=a.n(p),f=a(15757),g=a.n(f),j=a(45573);j.Tu.workerSrc="/pdf.worker.min.mjs";let b=e=>{let t=(0,h.useRouter)(),[a,r]=(0,d.useState)(!1),[p,f]=(0,d.useState)(!1),[b,w]=(0,d.useState)(null),y=async a=>{let s="Analise Falhou!",l="error";f(!0),r(!1),u().fire({title:"O Arquivo est\xe1 sendo analizado",timer:2e4,didOpen:()=>{u().showLoading()},willClose:()=>{u().fire({title:s,text:"error"===l?"Mas o arquivo foi anexado, recarregue a p\xe1gina para acessa-lo":"",icon:l}),f(!1)}});var n=new FormData;if(!a)return 0;let i=await a.arrayBuffer();Buffer.from(i);let d=await (0,j.Me)(URL.createObjectURL(a)).promise,o="",x=await d.getPage(1),m=x.getViewport({scale:2}),h=document.createElement("canvas"),p=h.getContext("2d");h.height=m.height,h.width=m.width,p&&await x.render({canvasContext:p,viewport:m}).promise;let b=p?.getImageData(0,0,h.width,h.height);if(b&&b.data){let e=b.data;for(let t=0;t<e.length;t+=4){let a=.34*e[t]+.5*e[t+1]+.16*e[t+2]>=235?255:0;e[t]=a,e[t+1]=a,e[t+2]=a}p?.putImageData(b,0,0)}else console.error("Image data is undefined or null");o=await g().recognize(h,"por").then(({data:{text:e}})=>e),n.append("file",a),n.append("id",e.id),n.append("url",e.url),n.append("text",o),await c.Z.post("/api/UploadDef",n,{headers:{"Content-Type":"multipart/form-data"}}).then(async e=>{e.data,t.refresh(),s="Analise Concluida!",l="success";let a=u().getTimerLeft();u().increaseTimer(-a+50)})},N=(0,d.useCallback)(async e=>{w(e[0])},[]),v=(0,x.uI)({onDrop:N,accept:{"application/pdf":[".pdf"]}});o().useEffect(()=>{b&&y(b)},[b]);let C=`/icon_contas/${e.img}.png`,D=new Date;return D.setHours(0,0,0,0),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsxs)("div",{className:"w-full border-b border-gray-400 pt-2 flex flex-row items-center bg-gray-50 relative",onClick:()=>{r(!a)},style:{cursor:"pointer"},children:[D.getTime()-e.date.getTime()>864e5?s.jsx("span",{className:"pl-2",children:s.jsx(l(),{src:"/alert_icon.png",alt:"Conta Vencida!",width:22,height:27})}):null,s.jsx("span",{className:"pl-2",children:s.jsx(l(),{src:C,alt:"",width:22,height:27})}),s.jsx("p",{className:"pl-1 text-md",children:e.name}),s.jsx("p",{className:"absolute right-72 text-sm",children:`${e.date.getUTCDate()}/${e.date.getUTCMonth()+1}/${e.date.getUTCFullYear()}`}),s.jsx("p",{className:"absolute right-20 text-sm",children:`R$ ${e.total.toLocaleString("pt-BR")}`}),s.jsx("span",{className:"absolute right-8",children:s.jsx(l(),{src:"/arrow_head_down.png",alt:"",width:13,height:13})})]}),s.jsx("div",{className:"w-full",children:s.jsx(n.M,{children:a&&s.jsx(i.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"flex w-full justify-center",children:s.jsx("div",{className:"relative bg-gray-100 w-full max-w-[1080px] h-[190px] pt-2 border rounded-md border-gray-200 shadow-md",children:(0,s.jsxs)("div",{className:"p-2 flex flex-col w-full",children:[(0,s.jsxs)("form",{action:e=>{u().fire({title:"Quer mesmo deletar essa conta?",icon:"warning",showDenyButton:!1,showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonText:"Deletar conta",confirmButtonColor:"red"}).then(a=>{a.isConfirmed&&((0,m.Ke)(e),t.refresh(),u().fire("Deletada","","success"))})},className:"absolute top-5 right-5",children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"url",value:e.url}),s.jsx("input",{type:"hidden",name:"curl",value:""}),s.jsx("button",{className:"bg-red-600 p-1 w-16 text-center rounded text-white",children:"Deletar"})]}),s.jsx("div",{className:"space-y-0 w-full",children:s.jsx("div",{className:"space-y-3 flex flex-col w-full",children:(0,s.jsxs)("form",{action:m.ML,className:"space-y-1",children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"pag",value:"false"}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Nome: "}),s.jsx("input",{type:"text",name:"name",defaultValue:e.name,className:"w-[345px] bg-transparent text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Codigo de Barras: "}),s.jsx("input",{type:"text",name:"scd",defaultValue:e.scd,className:"w-[380px] bg-transparent text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Data de Vencimento: "}),s.jsx("p",{className:"text-sm",children:`${e.date.getUTCDate()}/${e.date.getUTCMonth()+1}/${e.date.getUTCFullYear()}`}),s.jsx("input",{type:"date",name:"due_date",className:"w-[18%] rounded-md border border-gray-500 text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Total: "}),s.jsx("input",{type:"number",step:"0.01",name:"total",defaultValue:`${e.total}`,className:"w-fit bg-transparent text-sm"})]}),(0,s.jsxs)("p",{children:[s.jsx("span",{className:"font-bold text-sm",children:"Boleto: "}),s.jsx("a",{href:e.url,className:"underline underline-offset-2 text-sm text-sky-700 hover:text-sky-600",target:"_blank",children:"Link para o boleto"})]}),s.jsx("button",{className:"absolute top-4 right-[165px] bg-indigo-600 p-1 w-fit text-center rounded text-white",children:"Salvar altera\xe7\xf5es"})]})})}),(0,s.jsxs)("div",{...v.getRootProps(),className:`absolute right-3 top-[60px] flex w-[300px] h-[100px] rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 hover:border-gray-500 ${v.isDragActive?"border-sky-600":"border-gray-600"}  hover:bg-gray-600 transition-all`,children:[s.jsx("label",{htmlFor:"dropzone-file",className:"cursor-pointer w-full h-full",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6 w-full h-full",children:[s.jsx("p",{className:"mb-2 text-gray-400 text-lg",children:s.jsx("span",{className:"font-bold",children:p?"Uploading...":"Envie o Arquivo"})}),s.jsx("p",{className:"text-gray-400 text-sm",children:"PDF"})]})}),s.jsx("input",{...v.getInputProps(),className:"hidden",type:"file"})]}),s.jsx("div",{className:"absolute top-5 right-[80px] pr-5 flex flex-row",children:(0,s.jsxs)("form",{action:e=>{(0,m.Yg)(e),t.refresh()},children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"type",value:e.img}),s.jsx("input",{type:"hidden",name:"name",value:e.name}),s.jsx("button",{className:"bg-green-600 p-1 text-center rounded text-white",children:"Pagar"})]})})]})})})})})]})}},3820:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var s=a(95344),r=a(41223),l=a.n(r),n=a(73644),i=a(57916),d=a(3729),o=a.n(d),c=a(53608),x=a(81419),m=a(76191),h=a(22254),p=a(74314),u=a.n(p);let f=e=>{let t=(0,h.useRouter)(),[a,r]=(0,d.useState)(!1),[p,f]=(0,d.useState)("Boleto"),[g,j]=(0,d.useState)(!1),[b,w]=(0,d.useState)(null),y=async a=>{let s="Analise Falhou!",l="error";j(!0),r(!1),u().fire({title:"O Arquivo est\xe1 sendo analizado",timer:3e4,didOpen:()=>{u().showLoading()},willClose:()=>{u().fire(s,"",l),j(!1),r(!0)}});var n=new FormData;if(!a)return 0;n.append("file",a),n.append("id",e.id),n.append("url",e.url),await c.Z.post("http://localhost:3000/api/UploadDef",n,{headers:{"Content-Type":"multipart/form-data"}}).then(async e=>{e.data,t.refresh(),s="Analise Concluida!",l="success";let a=u().getTimerLeft();u().increaseTimer(-a+50)}),j(!1)},N=async a=>{j(!0),r(!1),u().fire({title:"O Arquivo est\xe1 sendo analizado",timer:5e4,didOpen:()=>{u().showLoading()},willClose:()=>{u().fire("Analise concluida!","","success"),j(!1),r(!0)}});var s=new FormData;if(!a)return 0;s.append("file",a),s.append("id",e.id),s.append("curl",e.curl),await c.Z.post("/api/UploadComp",s,{headers:{"Content-Type":"multipart/form-data"}}).then(async e=>{e.data,t.refresh();let a=u().getTimerLeft();u().increaseTimer(-a+50)})},v=(0,d.useCallback)(async e=>{w(e[0])},[]),C=(0,x.uI)({onDrop:v,accept:{"application/pdf":[".pdf"]}});o().useEffect(()=>{b&&("Boleto"===p&&y(b),"Comprovante"===p&&N(b))},[b]);let D=`/icon_contas/${e.img}_pag.png`;return(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsxs)("div",{className:"w-full border-b border-gray-400 pt-5 flex flex-row items-center bg-gray-50 relative",onClick:()=>{r(!a)},style:{cursor:"pointer"},children:[s.jsx("span",{className:"pl-2",children:s.jsx(l(),{src:D,alt:"",width:22,height:27})}),s.jsx("p",{className:"pl-1 text-md",children:e.name}),(0,s.jsxs)("p",{className:"absolute right-[360px] text-sm",children:[`${e.pDate.getUTCDate()}/${e.pDate.getUTCMonth()+1}/${e.pDate.getUTCFullYear()}`,s.jsx("span",{className:"font-bold text-md",children:" | "})]}),s.jsx("p",{className:"absolute right-72 text-sm",children:`${e.date.getUTCDate()}/${e.date.getUTCMonth()+1}/${e.date.getUTCFullYear()}`}),s.jsx("p",{className:"absolute right-20 text-sm",children:`R$ ${e.total.toLocaleString("pt-BR")}`}),s.jsx("span",{className:"absolute right-8",children:s.jsx(l(),{src:"/arrow_head_down.png",alt:"",width:13,height:13})})]}),s.jsx("div",{className:"w-full",children:s.jsx(n.M,{children:a&&s.jsx(i.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"flex w-full justify-center",children:s.jsx("div",{className:"relative bg-gray-100 w-full max-w-[1080px] h-[230px] pt-2 border rounded-md border-gray-200 shadow-md",children:(0,s.jsxs)("div",{className:"p-2 flex flex-col w-full",children:[(0,s.jsxs)("form",{action:e=>{u().fire({title:"Quer mesmo deletar essa conta?",icon:"warning",showDenyButton:!1,showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonText:"Deletar conta",confirmButtonColor:"red"}).then(a=>{a.isConfirmed&&((0,m.Ke)(e),t.refresh(),u().fire("Deletada","","success"))})},className:"absolute top-5 right-5",children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"url",value:e.url}),s.jsx("input",{type:"hidden",name:"curl",value:e.curl}),s.jsx("button",{className:"bg-red-600 p-1 w-16 text-center rounded text-white text-sm",children:"Deletar"})]}),s.jsx("div",{className:"space-y-0 w-full",children:s.jsx("div",{className:"space-y-3 flex flex-col w-full",children:(0,s.jsxs)("form",{action:m.ML,className:"space-y-1",children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"pag",value:"true"}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Nome: "}),s.jsx("input",{type:"text",name:"name",defaultValue:e.name,className:"w-[345px] bg-transparent text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Codigo de Barras: "}),s.jsx("input",{type:"text",name:"scd",defaultValue:e.scd,className:"w-[380px] bg-transparent text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Data de Vencimento: "}),s.jsx("p",{className:"text-sm",children:`${e.date.getUTCDate()}/${e.date.getUTCMonth()+1}/${e.date.getUTCFullYear()}`}),s.jsx("input",{type:"date",name:"due_date",className:"w-[18%] rounded-md border border-gray-500 text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Data do Pagamento: "}),s.jsx("p",{className:"text-sm",children:`${e.pDate.getUTCDate()}/${e.pDate.getUTCMonth()+1}/${e.pDate.getUTCFullYear()}`}),s.jsx("input",{type:"date",name:"pag_date",className:"w-[18%] rounded-md border border-gray-500 text-sm"})]}),(0,s.jsxs)("div",{className:"flex flex-row w-full space-x-1",children:[s.jsx("label",{className:"font-bold text-sm",children:"Total: "}),s.jsx("input",{type:"number",step:"0.01",name:"total",defaultValue:`${e.total}`,className:"w-fit bg-transparent text-sm"})]}),(0,s.jsxs)("p",{children:[s.jsx("span",{className:"font-bold text-sm",children:"Boleto: "}),s.jsx("a",{href:e.url,className:"underline underline-offset-2 text-sm text-sky-700 hover:text-sky-600",target:"_blank",children:"Link para o boleto"})]}),(0,s.jsxs)("p",{children:[s.jsx("span",{className:"font-bold text-sm",children:"Comprovante: "}),s.jsx("a",{href:e.curl,className:"underline underline-offset-2 text-sm text-sky-700 hover:text-sky-600",target:"_blank",children:"Link para o comprovante"})]}),s.jsx("button",{className:"absolute top-4 right-[90px] bg-indigo-600 p-1 w-fit text-center rounded text-white text-sm",children:"Salvar altera\xe7\xf5es"})]})})}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("select",{className:"absolute right-5 top-16 w-fit border border-gray-500 rounded-md text-sm",id:"componentSelect",value:p,onChange:e=>{f(e.target.value)},children:[s.jsx("option",{value:"Boleto",children:"Boleto"}),s.jsx("option",{value:"Comprovante",children:"Comprovante"})]}),s.jsx("div",{className:"absolute right-1 bottom-5",children:(()=>{switch(p){case"Boleto":default:return(0,s.jsxs)("div",{...C.getRootProps(),className:`absolute right-3 bottom-3 flex w-[300px] h-[100px] rounded-lg border-dashed border-4 border-gray-600 bg-gray-700 hover:border-gray-500 ${C.isDragActive?"border-sky-600":"border-gray-600"}  hover:bg-gray-600 transition-all`,children:[s.jsx("label",{htmlFor:"dropzone-file",className:"cursor-pointer w-full h-full",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6 w-full h-full",children:[s.jsx("p",{className:"mb-2 text-gray-400 text-lg",children:s.jsx("span",{className:"font-bold",children:g?"Uploading...":"Envie o Arquivo"})}),s.jsx("p",{className:"text-gray-400 text-sm",children:"PDF"})]})}),s.jsx("input",{...C.getInputProps(),className:"hidden",type:"file"})]});case"Comprovante":return(0,s.jsxs)("div",{...C.getRootProps(),className:`absolute right-3 bottom-3 flex w-[300px] h-[100px] rounded-lg border-dashed border-4 border-emerald-500 bg-green-400 hover:border-emerald-400 ${C.isDragActive?"border-sky-600":"border-gray-600"}  hover:bg-green-300 transition-all`,children:[s.jsx("label",{htmlFor:"dropzone-file",className:"cursor-pointer w-full h-full",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6 w-full h-full",children:[s.jsx("p",{className:"mb-2 text-black text-lg",children:s.jsx("span",{className:"font-bold",children:g?"Uploading...":"Envie o Arquivo"})}),s.jsx("p",{className:"text-black text-sm",children:"PDF"})]})}),s.jsx("input",{...C.getInputProps(),className:"hidden",type:"file"})]})}})()})]})]})})})})})]})}},4907:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(95344);a(3729);var r=a(20783),l=a.n(r),n=a(41223),i=a.n(n),d=a(76191),o=a(74314),c=a.n(o),x=a(22254);let m=e=>{let t=(0,x.useRouter)();var a="";"fix"===e.tog&&(a=`/contas/fixas/${e.id}`),"for"===e.tog&&(a=`/contas/fornecedores/${e.id}`);let r=e.name.split("")[0],n=`/alphabet/fi-sr-circle-${r}.svg`;return s.jsx("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsxs)("div",{className:"relative w-full border-b border-gray-400 pt-5 flex flex-row items-center bg-gray-50",children:[(0,s.jsxs)(l(),{className:"flex flex-row",href:a,style:{cursor:"pointer"},children:[s.jsx("span",{className:"",children:s.jsx(i(),{src:n,alt:"",width:30,height:30})}),s.jsx("p",{className:"pl-4 text-2xl",children:e.name})]}),(e.tog,(0,s.jsxs)("form",{action:a=>{c().fire({title:"Quer mesmo deletar essa conta?",icon:"warning",showDenyButton:!1,showCancelButton:!0,cancelButtonText:"Cancelar",confirmButtonText:"Deletar conta",confirmButtonColor:"red"}).then(s=>{s.isConfirmed&&("fix"===e.tog&&(0,d.JN)(a),"for"===e.tog&&(0,d.xT)(a),t.refresh(),c().fire("Deletada","","success"))})},className:"absolute right-5 top-3",children:[s.jsx("input",{type:"hidden",name:"id",value:e.id}),s.jsx("input",{type:"hidden",name:"name",value:e.name}),s.jsx("button",{className:"bg-red-600 p-1 w-16 text-center rounded text-white",children:"Deletar"})]}))]})})}},54889:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(95344),r=a(3729),l=a(20783),n=a.n(l),i=a(24501),d=a(76191),o=a(73644),c=a(57916),x="flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-11/12 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-indigo-700 transition-all";let m=()=>{let[e,t]=(0,r.useState)(!1);return s.jsx("div",{className:"md:w-60 bg-indigo-950 h-screen flex-1 fixed md:flex text-white",children:(0,s.jsxs)("div",{className:"flex flex-col space-y-6 w-full pt-10",children:[s.jsx(n(),{href:"/contas",className:"flex flex-row items-center justify-center md:justify-start md:px-6",children:(0,s.jsxs)("p",{className:"text-2xl",children:[s.jsx("span",{className:"font-bold",children:"INOV"}),"drop"]})}),(0,s.jsxs)("div",{className:"pt-10",children:[s.jsx("div",{className:"px-2 py-2",children:(0,s.jsxs)(n(),{href:"/contas/contas_a_pagar",className:x,children:[s.jsx("span",{children:s.jsx(i.JO,{icon:"carbon:document",width:22,height:22})}),s.jsx("p",{className:"text-md",children:"\xc0 Pagar"})]})}),s.jsx("div",{className:"px-2 py-2",children:(0,s.jsxs)(n(),{href:"/contas/pagas",className:x,children:[s.jsx("span",{children:s.jsx(i.JO,{icon:"uiw:pay",width:21,height:21})}),s.jsx("p",{className:"text-md",children:"Pagas"})]})}),(0,s.jsxs)("div",{className:"",children:[s.jsx("div",{className:"px-7 py-2 flex flex-row hover:text-indigo-300",onClick:()=>{t(!e)},style:{cursor:"pointer"},children:(0,s.jsxs)("p",{className:"text-md",children:["Contas ",s.jsx("span",{className:"text-xs",children:"\\/"})]})}),s.jsx(o.M,{children:e&&s.jsx(c.E.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"flex w-full justify-center",children:(0,s.jsxs)("div",{className:"",children:[s.jsx("div",{className:"px-1 py-2",children:(0,s.jsxs)(n(),{href:"/contas/fixas",className:x,children:[s.jsx("span",{children:s.jsx(i.JO,{icon:"uil:bill",width:22,height:22})}),s.jsx("p",{className:"text-md",children:"Fixas"})]})}),s.jsx("div",{className:"px-1 py-2",children:(0,s.jsxs)(n(),{href:"/contas/variadas",className:x,children:[s.jsx("span",{children:s.jsx(i.JO,{icon:"tdesign:bill",width:22,height:22})}),s.jsx("p",{className:"text-md",children:"Variadas"})]})}),s.jsx("div",{className:"px-1 py-2",children:(0,s.jsxs)(n(),{href:"/contas/fornecedores",className:x,children:[s.jsx("span",{children:s.jsx(i.JO,{icon:"solar:box-broken",width:22,height:22})}),s.jsx("p",{className:"text-md",children:"Fornecedores"})]})})]})})})]}),s.jsx("form",{action:d.ni,className:"absolute bottom-2 right-2 px-2 py-2",children:s.jsx("button",{className:"flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-36 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-red-500 transition-all",children:s.jsx("p",{className:"text-md",children:"Encerrar Sess\xe3o"})})})]})]})})}},26704:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d,metadata:()=>i});var s=a(25036),r=a(35071);function l({children:e}){return s.jsx("div",{className:"flex flex-col pt-2 px-1 space-y-2 bg-gray-200 flex-grow pb-4",children:e})}function n({children:e}){return s.jsx("div",{className:"flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen bg-gray-200",children:e})}let i={title:"InovDrop",description:"Gerencie suas contas aqui"};function d({children:e}){return s.jsx("section",{className:"relative",children:(0,s.jsxs)("div",{className:"flex",children:[s.jsx(r.kw,{}),s.jsx("main",{className:"flex-1",children:(0,s.jsxs)(n,{children:[s.jsx(r.$7,{}),s.jsx(l,{children:e})]})})]})})}},82917:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l,metadata:()=>r});var s=a(25036);a(67272);let r={title:"InovDrop",description:"Gerencie suas contas aqui"};function l({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:"relative",children:e})})}},90263:(e,t,a)=>{"use strict";a.d(t,{Bp:()=>l,Em:()=>d,M2:()=>n,s2:()=>o,uu:()=>i});var s=a(45248),r=a(25142);let l=async()=>{try{return(0,r.P)(),await s.Gw.find()}catch(e){throw console.log(e),Error('Failed to fetch the "contas"')}},n=async()=>{try{return(0,r.P)(),await s.Z0.find()}catch(e){throw console.log(e),Error('Failed to fetch the "fixNames"')}},i=async e=>{try{return(0,r.P)(),await s.Z0.findById(e)}catch(e){throw console.log(e),Error('Failed to fetch the "fixName"')}},d=async()=>{try{return(0,r.P)(),await s.Gb.find()}catch(e){throw console.log(e),Error('Failed to fetch the "ForNames"')}},o=async e=>{try{return(0,r.P)(),await s.Gb.findById(e)}catch(e){throw console.log(e),Error('Failed to fetch the "ForName"')}}},45248:(e,t,a)=>{"use strict";a.d(t,{Gb:()=>m,Gw:()=>c,Z0:()=>x,n5:()=>o});var s=a(11185),r=a.n(s);let l=new(r()).Schema({name:{type:String,required:!0,min:3,max:25},email:{type:String,required:!0},password:{type:String,required:!0}}),n=new(r()).Schema({name:{type:String,required:!0,min:3,max:25,default:"Nome n\xe3o adicionado"},type:{type:String,required:!0},pag:{type:Boolean,required:!0,default:!1},scd:{type:String,default:"Sem Codigo DD"},due_date:{type:Date,default:new Date(1e3,11,11)},pag_date:{type:Date,default:new Date(1e3,11,11)},total:{type:Number,min:0,default:0},bol:{},comp:{},user_id:{}},{timestamps:!0}),i=new(r()).Schema({name:{type:String,required:!0,min:3,max:25}}),d=new(r()).Schema({name:{type:String,required:!0,min:3,max:25}}),o=r().models.User||r().model("User",l),c=r().models.Contssss||r().model("Contssss",n),x=r().models.FixNames||r().model("FixNames",i),m=r().models.ForName||r().model("ForName",d)},25142:(e,t,a)=>{"use strict";a.d(t,{P:()=>l});var s=a(11185),r=a.n(s);let l=async()=>{let e={};try{if(e.isConnected)return;let t=await r().connect(process.env.MONGO);e.isConnected=t.connections[0].readyState}catch(e){throw console.log(e),Error(e)}}},35071:(e,t,a)=>{"use strict";a.d(t,{$7:()=>i,wd:()=>u,wt:()=>v,pO:()=>b,kw:()=>x});var s=a(86843);let r=(0,s.createProxy)(String.raw`C:\Users\nicol\OneDrive\Documentos\JS\Projects\inovdrop true\components\headerr.tsx`),{__esModule:l,$$typeof:n}=r,i=r.default,d=(0,s.createProxy)(String.raw`C:\Users\nicol\OneDrive\Documentos\JS\Projects\inovdrop true\components\sideNav.tsx`),{__esModule:o,$$typeof:c}=d,x=d.default,m=(0,s.createProxy)(String.raw`C:\Users\nicol\OneDrive\Documentos\JS\Projects\inovdrop true\components\menuConta.tsx`),{__esModule:h,$$typeof:p}=m,u=m.default,f=(0,s.createProxy)(String.raw`C:\Users\nicol\OneDrive\Documentos\JS\Projects\inovdrop true\components\nomeFixas.tsx`),{__esModule:g,$$typeof:j}=f,b=f.default,w=(0,s.createProxy)(String.raw`C:\Users\nicol\OneDrive\Documentos\JS\Projects\inovdrop true\components\menuContaPaga.tsx`),{__esModule:y,$$typeof:N}=w,v=w.default},67272:()=>{}};