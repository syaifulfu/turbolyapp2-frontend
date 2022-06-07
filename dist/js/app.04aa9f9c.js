(function(){"use strict";var a={1891:function(a,t,e){var n=e(9242),l=e(3396);const s={class:"container"};function o(a,t,e,n,o,r){const i=(0,l.up)("NavComponent"),c=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i),(0,l._)("div",s,[(0,l.Wm)(c)])],64)}var r=e(7139);const i={class:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},c={class:"container-fluid"},d=(0,l._)("a",{class:"navbar-brand",href:"#"},"Turboly-App",-1),m=(0,l._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,l._)("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarCollapse"},p={class:"navbar-nav me-auto mb-2 mb-md-0"},_={class:"nav-item"},w=(0,l.Uk)(" Home "),f={class:"nav-item"},b=(0,l.Uk)(" Tasks "),h={class:"nav-item"},g=(0,l.Uk)(" Today "),v={class:"navbar-nav me-auto mb-2 mb-md-0"},y={class:"nav-item"},k=(0,l.Uk)(" Login "),D={class:"nav-item"},C=(0,l.Uk)(" Register ");function x(a,t,e,n,s,o){const x=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("div",c,[d,m,(0,l._)("div",u,[(0,l._)("ul",p,[(0,l._)("li",_,[(0,l.Wm)(x,{to:"/",class:(0,r.C_)("home"==this.$route.name?"nav-link active":"nav-link")},{default:(0,l.w5)((()=>[w])),_:1},8,["class"])]),(0,l._)("li",f,[(0,l.Wm)(x,{to:"/tasks",class:(0,r.C_)("tasks"==this.$route.name?"nav-link active":"nav-link")},{default:(0,l.w5)((()=>[b])),_:1},8,["class"])]),(0,l._)("li",h,[(0,l.Wm)(x,{to:"/today",class:(0,r.C_)("today"==this.$route.name?"nav-link active":"nav-link")},{default:(0,l.w5)((()=>[g])),_:1},8,["class"])])])]),(0,l._)("div",null,[(0,l._)("ul",v,[(0,l._)("li",y,[(0,l.Wm)(x,{to:"/login",class:(0,r.C_)("login"==this.$route.name?"nav-link active":"nav-link")},{default:(0,l.w5)((()=>[k])),_:1},8,["class"])]),(0,l._)("li",D,[(0,l.Wm)(x,{to:"/register",class:(0,r.C_)("register"==this.$route.name?"nav-link active":"nav-link")},{default:(0,l.w5)((()=>[C])),_:1},8,["class"])])])])])])}var U={name:"NavComponent"},T=e(89);const V=(0,T.Z)(U,[["render",x]]);var P=V,z={components:{NavComponent:P}};const H=(0,T.Z)(z,[["render",o]]);var j=H,N=e(678);const O={class:"text-center"};function Y(a,t,e,n,s,o){return(0,l.wg)(),(0,l.iD)("h1",O,"SELAMAT DATANG")}var W={name:"HomeView"};const E=(0,T.Z)(W,[["render",Y]]);var S=E;const A=(0,l._)("h1",null,"Tasks",-1);function K(a,t,e,n,s,o){const r=(0,l.up)("v-data-table");return(0,l.wg)(),(0,l.iD)(l.HY,null,[A,(0,l.Wm)(r,{headers:s.headers,items:s.desserts,"items-per-page":5,class:"elevation-1"},null,8,["headers","items"])],64)}var $={name:"DataTableView",data(){return{headers:[{text:"Dessert (100g serving)",align:"start",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Iron (%)",value:"iron"}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}},methods:{async gets(){await fetch("http://localhost:3000/tasks",{method:"GET"}).then((async a=>{let t=await a.json();t.success?this.items=t.data:alert(t.message)}))}},created(){}};const Z=(0,T.Z)($,[["render",K]]);var I=Z;const L={class:"form-signin w-100 m-auto"},G=(0,l._)("h1",{class:"h3 mb-3 fw-normal"},"Login",-1),J={class:"form-floating mb-2"},F=(0,l._)("label",{for:"email"},"Email",-1),M={class:"form-floating mb-2"},R=(0,l._)("label",{for:"password"},"Password",-1);function B(a,t,e,s,o,r){return(0,l.wg)(),(0,l.iD)("main",L,[(0,l._)("form",null,[G,(0,l._)("div",J,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>a.data.email=t),type:"email",class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[n.nr,a.data.email]]),F]),(0,l._)("div",M,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>a.data.password=t),type:"password",class:"form-control",id:"password",placeholder:"Password"},null,512),[[n.nr,a.data.password]]),R]),(0,l._)("button",{class:"w-100 btn btn-lg btn-primary",type:"button",onClick:t[2]||(t[2]=a=>r.login())},"Login")])])}var q={name:"LoginView",data:function(){return{data:{email:"",password:""}}},methods:{login:async function(){await fetch("http://localhost:3000/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}).then((async a=>{let t=await a.json();t.success?this.$router.push({name:"home"}):alert(t.message)}))}}};const Q=(0,T.Z)(q,[["render",B]]);var X=Q;const aa={class:"form-signin w-100 m-auto"},ta=(0,l._)("h1",{class:"h3 mb-3 fw-normal"},"Register",-1),ea={class:"form-floating mb-2"},na=(0,l._)("label",{for:"name"},"Name",-1),la={class:"form-floating mb-2"},sa=(0,l._)("label",{for:"email"},"email",-1),oa={class:"form-floating mb-2"},ra=(0,l._)("label",{for:"password"},"Password",-1);function ia(a,t,e,s,o,r){return(0,l.wg)(),(0,l.iD)("main",aa,[(0,l._)("form",null,[ta,(0,l._)("div",ea,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>a.data.name=t),type:"name",class:"form-control",id:"name",placeholder:"name@example.com"},null,512),[[n.nr,a.data.name]]),na]),(0,l._)("div",la,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>a.data.email=t),type:"email",class:"form-control",id:"email",placeholder:"name@example.com"},null,512),[[n.nr,a.data.email]]),sa]),(0,l._)("div",oa,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>a.data.password=t),type:"password",class:"form-control",id:"password",placeholder:"Password"},null,512),[[n.nr,a.data.password]]),ra]),(0,l._)("button",{class:"w-100 btn btn-lg btn-primary",type:"button",onClick:t[3]||(t[3]=a=>r.register())},"Sign up")])])}var ca={name:"RegisterView",data:function(){return{data:{name:"",email:"",password:""}}},methods:{register:async function(){await fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}).then((async a=>{let t=await a.json();t.success?this.$router.push({name:"login"}):alert(t.message)}))}}};const da=(0,T.Z)(ca,[["render",ia]]);var ma=da;const ua={class:"container"},pa={class:"row"},_a=(0,l._)("div",{class:"col-md-10"},[(0,l._)("h1",null,"Tasks")],-1),wa={class:"col-md-2"},fa=(0,l.Uk)(" Add "),ba=(0,l._)("i",{class:"fa fa-add"},null,-1),ha={class:"table table-striped"},ga=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"No"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Description"),(0,l._)("th",null,"Due Date"),(0,l._)("th",null,"Priority"),(0,l._)("th",null,"Created At"),(0,l._)("th",null,"Action")])],-1),va=(0,l.Uk)(" Show "),ya=(0,l._)("i",{class:"fa fa-eye"},null,-1),ka=(0,l.Uk)(" Edit "),Da=(0,l._)("i",{class:"fa fa-pencil"},null,-1),Ca=["onClick"],xa=(0,l.Uk)(" Delete "),Ua=(0,l._)("i",{class:"fa fa-trash"},null,-1),Ta=[xa,Ua];function Va(a,t,e,n,s,o){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",ua,[(0,l._)("div",pa,[_a,(0,l._)("div",wa,[(0,l.Wm)(i,{to:"/tasks/new",class:"btn btn-success"},{default:(0,l.w5)((()=>[fa,ba])),_:1})])]),(0,l._)("table",ha,[ga,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(s.tasks,((a,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:a.id},[(0,l._)("td",null,(0,r.zw)(t+1),1),(0,l._)("td",null,(0,r.zw)(a.name),1),(0,l._)("td",null,(0,r.zw)(a.description),1),(0,l._)("td",null,(0,r.zw)(a.due_date),1),(0,l._)("td",null,(0,r.zw)(a.priority),1),(0,l._)("td",null,(0,r.zw)(a.created_at),1),(0,l._)("td",null,[(0,l.Wm)(i,{to:"/tasks/show/"+a.id,class:"btn btn-info btn-sm"},{default:(0,l.w5)((()=>[va,ya])),_:2},1032,["to"]),(0,l.Wm)(i,{to:"/tasks/edit/"+a.id,class:"btn btn-danger btn-sm"},{default:(0,l.w5)((()=>[ka,Da])),_:2},1032,["to"]),(0,l._)("a",{class:"btn btn-warning btn-sm",onClick:t=>o.destroy(a.id)},Ta,8,Ca)])])))),128))])])])}var Pa={name:"IndexView",data(){return{tasks:[]}},methods:{async get(){await fetch("http://localhost:3000/tasks",{method:"GET"}).then((async a=>{let t=await a.json();t.success?this.tasks=t.data:alert(t.message)}))},async destroy(a){await fetch("http://localhost:3000/tasks/"+a,{method:"DELETE"}).then((async a=>{let t=await a.json();t.success?this.get():alert(t.message)}))}},created(){this.get()}};const za=(0,T.Z)(Pa,[["render",Va]]);var Ha=za;const ja=(0,l._)("h1",null,"Add Task",-1),Na={class:"mb-3 row"},Oa={class:"col-sm-10"},Ya={class:"mb-3 row"},Wa={class:"col-sm-10"},Ea={class:"mb-3 row"},Sa={class:"col-sm-10"},Aa={class:"mb-3 row"},Ka={class:"col-sm-10"},$a=(0,l._)("br",null,null,-1),Za={class:"mb-3 row"},Ia={class:"col-sm-10"},La={class:"mb-3 row"},Ga=(0,l._)("label",{class:"col-sm-2 col-form-label"},null,-1),Ja={class:"col-sm-10"},Fa=(0,l._)("i",{class:"fa fa-save"},null,-1),Ma=(0,l.Uk)(" Save "),Ra=[Fa,Ma],Ba=(0,l._)("i",{class:"fa fa-arrow-left"},null,-1),qa=(0,l.Uk)(" Delete ");function Qa(a,t,e,s,o,i){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[ja,(0,l._)("div",Na,[(0,l._)("label",{class:(0,r.C_)(o.warning.name?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Name",2),(0,l._)("div",Oa,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.data.name=a),class:(0,r.C_)(o.warning.name?"form-control is-invalid":"form-control"),type:"text",placeholder:"Please enter name"},null,2),[[n.nr,o.data.name]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.name,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Name "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",Ya,[(0,l._)("label",{class:(0,r.C_)(o.warning.description?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Description",2),(0,l._)("div",Wa,[(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.description=a),class:(0,r.C_)([o.warning.description?"form-control is-invalid":"form-control","form-control"]),rows:"5",placeholder:"Please enter description"},null,2),[[n.nr,o.data.description]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.description,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Description "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",Ea,[(0,l._)("label",{class:(0,r.C_)(o.warning.due_date?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Due date",2),(0,l._)("div",Sa,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.data.due_date=a),class:(0,r.C_)([o.warning.due_date?"form-control is-invalid":"form-control","form-control"]),type:"date"},null,2),[[n.nr,o.data.due_date]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.due_date,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Due date "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",Aa,[(0,l._)("label",{class:(0,r.C_)(o.warning.priority?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Priority",2),(0,l._)("div",Ka,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.data.priority=a),class:(0,r.C_)([o.warning.priority?"form-control is-invalid":"form-control","form-control"]),type:"number",min:"1",max:"10",placeholder:"1-10"},null,2),[[n.nr,o.data.priority]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.priority,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t},[(0,l.Uk)(" Priority "+(0,r.zw)(a)+" ",1),$a])))),128))])]),(0,l._)("div",Za,[(0,l._)("label",{class:(0,r.C_)(o.warning.is_completed?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Is Completed",2),(0,l._)("div",Ia,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.data.is_completed=a),class:(0,r.C_)([o.warning.is_completed?"form-check-input is-invalid":"form-check-input","form-check-input"]),type:"checkbox"},null,2),[[n.e8,o.data.is_completed]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.is_completed,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Is completed "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",La,[Ga,(0,l._)("div",Ja,[(0,l._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=a=>i.save())},Ra),(0,l.Wm)(c,{to:"/tasks",class:"btn btn-secondary"},{default:(0,l.w5)((()=>[Ba,qa])),_:1})])])],64)}var Xa={name:"NewView",data(){return{data:{name:"",description:"",due_date:"",priority:"",is_completed:"",created_by:""},warning:{name:"",description:"",due_date:"",priority:"",is_completed:"",created_by:""}}},methods:{async save(){await fetch("http://localhost:3000/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}).then((async a=>{let t=await a.json();t.success?this.$router.push({name:"tasks"}):(this.warning=t.warning,console.log(this.data))}))}}};const at=(0,T.Z)(Xa,[["render",Qa]]);var tt=at;const et=(0,l._)("h1",null,"Edit Task",-1),nt={class:"mb-3 row"},lt={class:"col-sm-10"},st={class:"mb-3 row"},ot={class:"col-sm-10"},rt={class:"mb-3 row"},it={class:"col-sm-10"},ct={class:"mb-3 row"},dt={class:"col-sm-10"},mt=(0,l._)("br",null,null,-1),ut={class:"mb-3 row"},pt={class:"col-sm-10"},_t={class:"mb-3 row"},wt=(0,l._)("label",{class:"col-sm-2 col-form-label"},null,-1),ft={class:"col-sm-10"},bt=(0,l._)("i",{class:"fa fa-save"},null,-1),ht=(0,l.Uk)(" Save "),gt=[bt,ht],vt=(0,l._)("i",{class:"fa fa-arrow-left"},null,-1),yt=(0,l.Uk)(" Back ");function kt(a,t,e,s,o,i){const c=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[et,(0,l._)("div",nt,[(0,l._)("label",{class:(0,r.C_)(o.warning.name?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Name",2),(0,l._)("div",lt,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.data.name=a),class:(0,r.C_)(o.warning.name?"form-control is-invalid":"form-control"),type:"text",placeholder:"Please enter name"},null,2),[[n.nr,o.data.name]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.name,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Name "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",st,[(0,l._)("label",{class:(0,r.C_)(o.warning.description?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Description",2),(0,l._)("div",ot,[(0,l.wy)((0,l._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.data.description=a),class:(0,r.C_)([o.warning.description?"form-control is-invalid":"form-control","form-control"]),rows:"5",placeholder:"Please enter description"},null,2),[[n.nr,o.data.description]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.description,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Description "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",rt,[(0,l._)("label",{class:(0,r.C_)(o.warning.due_date?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Due date",2),(0,l._)("div",it,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.data.due_date=a),class:(0,r.C_)([o.warning.due_date?"form-control is-invalid":"form-control","form-control"]),type:"date"},null,2),[[n.nr,o.data.due_date]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.due_date,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Due date "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",ct,[(0,l._)("label",{class:(0,r.C_)(o.warning.priority?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Priority",2),(0,l._)("div",dt,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.data.priority=a),class:(0,r.C_)([o.warning.priority?"form-control is-invalid":"form-control","form-control"]),type:"number",min:"1",max:"10",placeholder:"1-10"},null,2),[[n.nr,o.data.priority]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.priority,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t},[(0,l.Uk)(" Priority "+(0,r.zw)(a)+" ",1),mt])))),128))])]),(0,l._)("div",ut,[(0,l._)("label",{class:(0,r.C_)(o.warning.is_completed?"col-sm-2 col-form-label text-danger":"col-sm-2 col-form-label")},"Is Completed",2),(0,l._)("div",pt,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.data.is_completed=a),class:(0,r.C_)([o.warning.is_completed?"form-check-input is-invalid":"form-check-input","form-check-input"]),type:"checkbox"},null,2),[[n.e8,o.data.is_completed]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.warning.is_completed,((a,t)=>((0,l.wg)(),(0,l.iD)("small",{class:"text-danger",key:t}," Is completed "+(0,r.zw)(a),1)))),128))])]),(0,l._)("div",_t,[wt,(0,l._)("div",ft,[(0,l._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=a=>i.update())},gt),(0,l.Wm)(c,{to:"/tasks",class:"btn btn-secondary"},{default:(0,l.w5)((()=>[vt,yt])),_:1})])])],64)}var Dt={name:"EditView",data(){return{data:{name:"",description:"",due_date:"",priority:"",is_completed:"",created_by:""},warning:{name:"",description:"",due_date:"",priority:"",is_completed:"",created_by:""}}},methods:{async find(){await fetch("http://localhost:3000/tasks/"+this.$route.params.id,{method:"GET"}).then((async a=>{let t=await a.json();t.success?this.data=t.data:alert(t.message)}))},async update(){await fetch("http://localhost:3000/tasks/"+this.$route.params.id,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.data)}).then((async a=>{let t=await a.json();t.success?this.$router.push({name:"tasks"}):(this.warning=t.warning,console.log(this.data))}))}},mounted(){this.find()}};const Ct=(0,T.Z)(Dt,[["render",kt]]);var xt=Ct;const Ut=(0,l._)("h1",{class:"text-center"},"Show",-1),Tt=(0,l._)("br",null,null,-1),Vt=(0,l._)("b",null,"Name : ",-1),Pt=(0,l._)("br",null,null,-1),zt=(0,l._)("b",null,"Description : ",-1),Ht=(0,l._)("br",null,null,-1),jt=(0,l._)("b",null,"Due Date : ",-1),Nt=(0,l._)("br",null,null,-1),Ot=(0,l._)("b",null,"Priority : ",-1),Yt=(0,l._)("br",null,null,-1),Wt=(0,l._)("b",null,"Created At : ",-1),Et=(0,l._)("br",null,null,-1),St=(0,l._)("br",null,null,-1),At=(0,l._)("i",{class:"fa fa-arrow-left"},null,-1),Kt=(0,l.Uk)(" Back ");function $t(a,t,e,n,s,o){const i=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[Ut,Tt,Vt,(0,l.Uk)((0,r.zw)(s.data.name),1),Pt,zt,(0,l.Uk)((0,r.zw)(s.data.description),1),Ht,jt,(0,l.Uk)((0,r.zw)(s.data.due_date),1),Nt,Ot,(0,l.Uk)((0,r.zw)(s.data.priority),1),Yt,Wt,(0,l.Uk)((0,r.zw)(s.data.created_at),1),Et,St,(0,l.Wm)(i,{to:"/tasks",class:"btn btn-secondary"},{default:(0,l.w5)((()=>[At,Kt])),_:1})],64)}var Zt={name:"ShowView",data(){return{data:{name:"",description:"",due_date:"",priority:"",is_completed:"",created_by:""}}},methods:{async find(){await fetch("http://localhost:3000/tasks/"+this.$route.params.id,{method:"GET"}).then((async a=>{let t=await a.json();t.success?this.data=t.data:alert(t.message)}))}},mounted(){this.find()}};const It=(0,T.Z)(Zt,[["render",$t]]);var Lt=It;const Gt={class:"container"},Jt={class:"row"},Ft=(0,l._)("div",{class:"col-md-11"},[(0,l._)("h1",null,"Today")],-1),Mt={class:"col-md-1"},Rt=(0,l._)("i",{class:"fa fa-add"},null,-1),Bt=(0,l._)("table",{class:"table table-striped"},[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",null,"No"),(0,l._)("th",null,"Name"),(0,l._)("th",null,"Description"),(0,l._)("th",null,"Due Date"),(0,l._)("th",null,"Priority"),(0,l._)("th",null,"Created At"),(0,l._)("th",null,"Action")])]),(0,l._)("tbody")],-1);function qt(a,t,e,n,s,o){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",Gt,[(0,l._)("div",Jt,[Ft,(0,l._)("div",Mt,[(0,l.Wm)(r,{to:"/",class:"btn btn-success"},{default:(0,l.w5)((()=>[Rt])),_:1})])]),Bt])}var Qt={name:"TodayView",data:function(){return{tasks:[]}}};const Xt=(0,T.Z)(Qt,[["render",qt]]);var ae=Xt;const te=[{path:"/",name:"home",component:S},{path:"/login",name:"login",component:X},{path:"/register",name:"register",component:ma},{path:"/tasks",name:"tasks",component:Ha},{path:"/datatable",name:"datatable",component:I},{path:"/tasks/new",name:"tasks-new",component:tt},{path:"/tasks/edit/:id",name:"tasks-edit",component:xt},{path:"/tasks/show/:id",name:"tasks-show",component:Lt},{path:"/today",name:"today",component:ae}],ee=(0,N.p7)({history:(0,N.PO)("/"),routes:te});var ne=ee,le=e(65),se=(0,le.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const oe=(0,n.ri)(j);oe.use(se),oe.use(ne),oe.mount("#app")}},t={};function e(n){var l=t[n];if(void 0!==l)return l.exports;var s=t[n]={exports:{}};return a[n](s,s.exports,e),s.exports}e.m=a,function(){var a=[];e.O=function(t,n,l,s){if(!n){var o=1/0;for(d=0;d<a.length;d++){n=a[d][0],l=a[d][1],s=a[d][2];for(var r=!0,i=0;i<n.length;i++)(!1&s||o>=s)&&Object.keys(e.O).every((function(a){return e.O[a](n[i])}))?n.splice(i--,1):(r=!1,s<o&&(o=s));if(r){a.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=a.length;d>0&&a[d-1][2]>s;d--)a[d]=a[d-1];a[d]=[n,l,s]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var l,s,o=n[0],r=n[1],i=n[2],c=0;if(o.some((function(t){return 0!==a[t]}))){for(l in r)e.o(r,l)&&(e.m[l]=r[l]);if(i)var d=i(e)}for(t&&t(n);c<o.length;c++)s=o[c],e.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return e.O(d)},n=self["webpackChunkturbolyapp2_frontend"]=self["webpackChunkturbolyapp2_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(1891)}));n=e.O(n)})();
//# sourceMappingURL=app.04aa9f9c.js.map