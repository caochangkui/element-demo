webpackJsonp([1],{"/WXp":function(e,t){},"8P6u":function(e,t){},"9n10":function(e,t){},BRcI:function(e,t){},CEEz:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("zL8q"),s=r.n(a),o=(r("tvR6"),r("9n10"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("keep-alive",[t("router-view")],1)],1)],1)},staticRenderFns:[]});var i=r("VU/8")({name:"App"},o,!1,function(e){r("/WXp")},null,null).exports,l=r("/ocq"),u={name:"Header",data:function(){return{menuBtn:"el-icon-tickets"}},computed:{username:function(){return JSON.parse(localStorage.getItem("user")).username}},methods:{handleMenu:function(){this.$emit("changeMenu"),"el-icon-tickets"===this.menuBtn?this.menuBtn="el-icon-d-arrow-right":this.menuBtn="el-icon-tickets"},logout:function(){var e=this;this.$confirm("是否退出账户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){localStorage.removeItem("user"),e.$router.push({path:"/login"})}).catch(function(){})}}},c={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticClass:"logo"},[e._v("\n    vue-ele-demo\n  ")]),e._v(" "),r("div",{staticClass:"navbar"},[r("div",{staticClass:"btn",on:{click:e.handleMenu}},[r("span",{class:e.menuBtn})]),e._v(" "),r("el-dropdown",[r("span",{staticClass:"el-dropdown-link"},[e._v("\n        "+e._s(e.username)),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("个人中心")]),e._v(" "),r("el-dropdown-item",[e._v("消息")]),e._v(" "),r("el-dropdown-item",[e._v("设置")]),e._v(" "),r("el-dropdown-item",{nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出 ")])],1)],1)],1)])},staticRenderFns:[]};var d=r("VU/8")(u,c,!1,function(e){r("8P6u")},"data-v-4a458812",null).exports,p={name:"Sidebar",props:{isCollapse:Boolean},data:function(){return{elementRouter:{opended:!0,router:!0,active:""}}},computed:{activeIndex:function(){var e=this.$route.path;return"ProductDetail"===this.$route.name?"/product/product_list":e}},methods:{handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sidebar"},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.activeIndex,router:"",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[r("el-menu-item",{attrs:{index:"/dashboard"}},[r("i",{staticClass:"el-icon-menu"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),e._v(" "),r("el-submenu",{attrs:{index:"/product"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("产品管理")])]),e._v(" "),r("el-menu-item",{attrs:{index:"/product/product_list"}},[e._v("产品列表")]),e._v(" "),r("el-menu-item",{attrs:{index:"/product/portrait_list"}},[e._v("指标列表")])],2),e._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-rank"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("账号管理")])]),e._v(" "),r("el-menu-item",{attrs:{index:""}},[e._v("账号开设")]),e._v(" "),r("el-menu-item",{attrs:{index:""}},[e._v("账号编辑")]),e._v(" "),r("el-menu-item",{attrs:{index:""}},[e._v("账号操作记录")])],2),e._v(" "),r("el-submenu",{attrs:{index:""}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-edit-outline"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("计费管理")])]),e._v(" "),r("el-menu-item",{attrs:{index:""}},[e._v("账单列表")]),e._v(" "),r("el-menu-item",{attrs:{index:""}},[e._v("账单详情")])],2),e._v(" "),r("el-menu-item",{attrs:{index:""}},[r("i",{staticClass:"el-icon-printer"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("财务统计")])]),e._v(" "),r("el-menu-item",{attrs:{index:"",disabled:""}},[r("i",{staticClass:"el-icon-setting"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("系统管理")])])],1)],1)},staticRenderFns:[]};var v=r("VU/8")(p,m,!1,function(e){r("bBRi")},"data-v-20eca52a",null).exports,h={name:"Breadcrumb",props:{list:{type:Array,required:!0,default:function(){return[]}}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"breadcrumb"},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.list,function(t,n){return r("el-breadcrumb-item",{key:n},[r("router-link",{attrs:{to:t}},[e._v(e._s(t.name))])],1)}))],1)},staticRenderFns:[]};var _={name:"Full",components:{Header:d,Siderbar:v,Breadcrumb:r("VU/8")(h,f,!1,function(e){r("nnxT")},"data-v-e3720f56",null).exports},data:function(){return{isCollapse:!1}},created:function(){console.log(this.$route)},computed:{list:function(){return this.$route.matched},name:function(){return this.$route.name}},methods:{changeMenu:function(){this.isCollapse=!this.isCollapse}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app"},[t("Header",{on:{changeMenu:this.changeMenu}}),this._v(" "),t("div",{staticClass:"app-body"},[t("Siderbar",{attrs:{isCollapse:this.isCollapse}}),this._v(" "),t("div",{attrs:{id:"app-content"}},[t("Breadcrumb",{attrs:{list:this.list}}),this._v(" "),t("router-view")],1)],1)],1)},staticRenderFns:[]};var b=r("VU/8")(_,g,!1,function(e){r("hqX6")},"data-v-6c3a0ec8",null).exports,w={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("el-progress",{attrs:{type:"circle",percentage:0}}),this._v(" "),t("el-progress",{attrs:{type:"circle",percentage:25}}),this._v(" "),t("el-progress",{attrs:{type:"circle",percentage:80,color:"#8e71c7"}}),this._v(" "),t("el-progress",{attrs:{type:"circle",percentage:100,status:"success"}}),this._v(" "),t("el-progress",{attrs:{type:"circle",percentage:50,status:"exception"}})],1)},staticRenderFns:[]},x=r("VU/8")({name:"Dashboard"},w,!1,null,null,null).exports,F={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("router-view")],1)},staticRenderFns:[]},$=r("VU/8")({name:"Product"},F,!1,null,null,null).exports,k=r("mtWM"),C=r.n(k),P={name:"ProductList",data:function(){return{loading:!0,tableData:[],totalPage:0,currentPage:1,pageSize:10}},watch:{tableData:function(){this.totalPage=this.tableData.length}},methods:{getProductList:function(){var e=this;this.loading=!0,setTimeout(function(){C.a.get("https://caochangkui.github.io/element-demo/dist/static/mock/products.json").then(function(t){if((t=t.data).ret&&t.data){var r=t.data;e.tableData=r.products,e.loading=!1}})},400)},currentChange:function(e){this.currentPage=e},handleEdit:function(e,t){this.$store.commit("showProductDetail",t),this.$router.push({path:"/product/product_list/"+t.id})},handleDelete:function(e,t){var r=this;this.$confirm("此操作将删除该行内容, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.tableData.splice(e,1),r.$message({type:"success",message:"删除成功!"})}).catch(function(){})}},mounted:function(){this.getProductList()}},y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData.slice((e.currentPage-1)*e.pageSize,e.currentPage*e.pageSize),align:"center",border:""}},[r("el-table-column",{attrs:{align:"center",label:"ProductId",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Name"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Address"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.address))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",label:"Telephone"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.telephone))])]}}])}),e._v(" "),r("el-table-column",{attrs:{align:"center",fixed:"right",label:"Operate",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){e.handleEdit(t.$index,t.row)}}},[e._v("查看")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"}},[e._v("编辑")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),r("el-pagination",{attrs:{background:"","page-size":e.pageSize,"current-page":e.currentPage,layout:"prev, pager, next",total:e.totalPage},on:{"current-change":e.currentChange}})],1)},staticRenderFns:[]},E=r("VU/8")(P,y,!1,null,null,null).exports,R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("el-progress",{attrs:{percentage:0}}),this._v(" "),t("el-progress",{attrs:{percentage:70}}),this._v(" "),t("el-progress",{attrs:{percentage:80,color:"#8e71c7"}}),this._v(" "),t("el-progress",{attrs:{percentage:100,status:"success"}}),this._v(" "),t("el-progress",{attrs:{percentage:50,status:"exception"}})],1)},staticRenderFns:[]},S=r("VU/8")({name:"PortraitList"},R,!1,null,null,null).exports,D={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("p",[e._v("Id: "+e._s(e.product.id))]),e._v(" "),r("p",[e._v("Name: "+e._s(e.product.name))]),e._v(" "),r("p",[e._v("Address: "+e._s(e.product.address))]),e._v(" "),r("p",[e._v("Tele: "+e._s(e.product.telephone))])])},staticRenderFns:[]};var L=r("VU/8")({name:"ProductDetail",data:function(){return{product:this.$store.state.productDetail}}},D,!1,function(e){r("CEEz")},"data-v-337910c9",null).exports,B=r("mvHQ"),I=r.n(B),q={name:"Login",data:function(){return{username:"admin",password:"123456",exist:!1}},computed:{users:function(){return this.$store.state.users}},activated:function(){localStorage.clear()},methods:{login:function(){var e=this;if(this.username.trim())if(this.password.trim())if(this.users.map(function(t,r){t.username===e.username&&t.password===e.password&&(e.exist=!0)}),this.exist){var t={username:this.username,password:this.password};localStorage.setItem("user",I()(t)),this.$router.push({path:"/"})}else alert("用户名或密码错误，请重新登录");else alert("请输入用户名！");else alert("请输入用户名！")},gotoRegist:function(){this.$router.push({path:"/register"})}}},V={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("p",{staticClass:"title"},[e._v("Vue-Element Demo")]),e._v(" "),r("form",{attrs:{action:"/",method:"post",id:"login-form"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"登陆密码"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"button"},on:{click:e.login}},[e._v("登  陆")]),e._v(" "),r("p",{staticClass:"register",on:{click:e.gotoRegist}},[e._v("没有账户？点击注册")])])])},staticRenderFns:[]};var U=r("VU/8")(q,V,!1,function(e){r("BRcI")},"data-v-1f77bb54",null).exports,z={name:"Register",data:function(){var e=this;return{ruleForm2:{pass:"",checkPass:"",username:""},rules2:{pass:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.ruleForm2.checkPass&&e.$refs.ruleForm2.validateField("checkPass"),n())},trigger:"blur"}],checkPass:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.ruleForm2.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],username:[{validator:function(e,t,r){if(!t)return r(new Error("用户名不能为空"));setTimeout(function(){t.length<4?r(new Error("用户名必须大于三个字符")):r()},200)},trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(t.ruleForm2),t.$store.commit("register",{id:t.$store.state.users.length+1,username:t.ruleForm2.username,password:t.ruleForm2.pass})})},resetForm:function(e){this.$refs[e].resetFields()},gotoLogin:function(){this.$router.push({path:"/login"})}}},T={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",e._n(t))},expression:"ruleForm2.username"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.pass,callback:function(t){e.$set(e.ruleForm2,"pass",t)},expression:"ruleForm2.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.$set(e.ruleForm2,"checkPass",t)},expression:"ruleForm2.checkPass"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm2")}}},[e._v("重置")]),e._v(" "),r("p",{staticClass:"login"},[e._v("已有账号？"),r("span",{on:{click:e.gotoLogin}},[e._v("点击登录")])])],1)],1)],1)},staticRenderFns:[]};var N=r("VU/8")(z,T,!1,function(e){r("eCIG")},"data-v-b58cd930",null).exports;n.default.use(l.a);var M=new l.a({routes:[{path:"/login",name:"Login",component:U},{path:"/register",name:"Register",component:N},{path:"/",redirect:"/dashboard",name:"Home",meta:{requireLogin:!0},component:b,children:[{path:"dashboard",name:"Dashboard",meta:{requireLogin:!0},component:x},{path:"product",redirect:"/product/product_list",name:"Product",meta:{requireLogin:!0},component:$,children:[{path:"product_list",name:"ProductList",meta:{requireLogin:!0},component:E},{path:"/product/product_list/:id",name:"ProductDetail",meta:{requireLogin:!0},component:L},{path:"portrait_list",name:"PortraitList",meta:{requireLogin:!0},component:S}]}]}]});M.beforeEach(function(e,t,r){e.meta.requireLogin?localStorage.getItem("user")?r():r({path:"/login",query:{redirect:e.fullPath}}):r()});var O=M,H=r("NYxO");n.default.use(H.a);var A=new H.a.Store({state:{users:[{id:1,username:"admin",password:"123456"}],productDetail:JSON.parse(localStorage.getItem("productDetail"))},mutations:{register:function(e,t){e.users.push(t),console.log(e.users)},showProductDetail:function(e,t){e.productDetail=t;try{localStorage.setItem("productDetail",I()(t))}catch(e){}}}});n.default.config.productionTip=!1,n.default.use(s.a),new n.default({el:"#app",router:O,store:A,components:{App:i},template:"<App/>"})},bBRi:function(e,t){},eCIG:function(e,t){},hqX6:function(e,t){},nnxT:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d785ed78edd47196deae.js.map