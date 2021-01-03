(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),r=n.n(s),c=n(55),i=n.n(c),l=(n(63),n(7)),o=n(8),u=n(10),d=n(14),j=n(13),h=n(15),b=n(3),m=(n(64),n(65),n(5)),p=n.n(m),O="http://localhost:5000/api/auth/",x=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"login",value:function(e,t){return p.a.post(O+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,n){return p.a.post(O+"signup",{username:e,email:t,password:n})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),v=n(26),f=n.n(v),g=n(20),N=n.n(g),k=n(27),y=n.n(k),w=function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},_=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.state={username:"",password:"",loading:!1,message:""},a}return Object(o.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?x.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:n})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(f.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(N.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[w]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(N.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[w]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("button",{className:"btn btn-primary btn-block",disabled:this.state.loading,children:[this.state.loading&&Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(a.jsx)("span",{children:"Login"})]})}),this.state.message&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:this.state.message})}),Object(a.jsx)(y.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(s.Component);function C(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}var S="http://localhost:5000/api/test/",D=new(function(){function e(){Object(l.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return p.a.get(S+"all")}},{key:"getUserBoard",value:function(){return p.a.get(S+"user",{headers:C()})}},{key:"getModeratorBoard",value:function(){return p.a.get(S+"mod",{headers:C()})}},{key:"getAdminBoard",value:function(){return p.a.get(S+"admin",{headers:C()})}}]),e}()),U=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;D.getPublicContent().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsx)("h3",{children:this.state.content})})})}}]),n}(s.Component),B=n(56),E=function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},T=function(e){if(!Object(B.isEmail)(e))return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},F=function(e){if(e.length<3||e.length>20)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},A=function(e){if(e.length<6||e.length>40)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},L=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.onChangeUsername=a.onChangeUsername.bind(Object(u.a)(a)),a.onChangeEmail=a.onChangeEmail.bind(Object(u.a)(a)),a.onChangePassword=a.onChangePassword.bind(Object(u.a)(a)),a.state={username:"",email:"",password:"",successful:!1,message:""},a}return Object(o.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&x.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var n=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:n})}))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(f.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t},children:[!this.state.successful&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(N.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[E,F]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)(N.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[E,T]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(N.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[E,A]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),this.state.message&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert",children:this.state.message})}),Object(a.jsx)(y.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}})]})]})})}}]),n}(s.Component),P=n(6),I=n.n(P),M=n(17),R=n(22),J=function(){var e=Object(s.useState)([]),t=Object(R.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(null),i=Object(R.a)(c,2),l=i[0],o=i[1];Object(s.useEffect)((function(){d()}),[]);var u=function(){var e=Object(M.a)(I.a.mark((function e(t){var n,a,s,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,a=n.title,s=n.author,r=n.description,e.next=4,p.a.post("/api/books",{title:a.value,author:s.value,description:r.value});case 4:a.value="",s.value="",r.value="",d();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(M.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/books");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(M.a)(I.a.mark((function e(t,n){var a,s,r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target,s=a.title,r=a.author,c=a.description,e.next=4,p.a.post("/api/books/update/".concat(n),{title:s.value,author:r.value,description:c.value});case 4:o(null),d();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(M.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"DELETE",url:"/api/books/",data:{id:t}});case 2:return e.next=4,d();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"DataInput",children:[Object(a.jsx)("h2",{children:"Enter book:"}),Object(a.jsxs)("form",{onSubmit:function(e){return u(e)},children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title"}),Object(a.jsx)("label",{htmlFor:"author",children:"Author:"}),Object(a.jsx)("input",{type:"text",name:"author"}),Object(a.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(a.jsx)("input",{type:"text",name:"description"}),Object(a.jsx)("button",{children:"Add Book"})]})]}),Object(a.jsx)("div",{className:"DataOutput",children:n.map((function(e){return Object(a.jsx)("div",{children:l!==e._id?Object(a.jsxs)("div",{className:"DataOutput__card",children:[Object(a.jsxs)("div",{className:"DataOutput__card--details",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Title:"}),e.title]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Author:"}),e.author]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Description:"}),e.description]})]}),Object(a.jsxs)("div",{className:"DataOutput__card--options",children:[Object(a.jsx)("button",{onClick:function(){return o(e._id)},children:"Edit"}),Object(a.jsx)("button",{onClick:function(){return h(e._id)},children:"Delete"})]})]},e._id):Object(a.jsx)("div",{className:"DataOutput__editing",children:Object(a.jsxs)("form",{onSubmit:function(t){return j(t,e._id)},children:[Object(a.jsxs)("div",{className:"DataOutput__editing--option",children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title",defaultValue:e.title})]}),Object(a.jsxs)("div",{className:"DataOutput__editing--option",children:[Object(a.jsx)("label",{htmlFor:"author",children:"Author:"}),Object(a.jsx)("input",{type:"text",name:"author",defaultValue:e.author})]}),Object(a.jsxs)("div",{className:"DataOutput__editing--option",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(a.jsx)("input",{type:"text",name:"description",defaultValue:e.description})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"Submit",children:"Submit"}),Object(a.jsx)("button",{className:"DataOutput__editing--cancel",onClick:function(){return o(null)},children:"Cancel"})]})]})},e._id)},e._id)}))})]})},V=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{username:""}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=x.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return Object(a.jsx)(b.a,{to:this.state.redirect});var e=this.state.currentUser;return Object(a.jsx)("div",{className:"container",children:this.state.userReady?Object(a.jsxs)("div",{children:[Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsxs)("h3",{children:[Object(a.jsx)("strong",{children:e.username})," Profile"]})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Token:"})," ",e.accessToken.substring(0,20)," ..."," ",e.accessToken.substr(e.accessToken.length-20)]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Email:"})," ",e.email]}),Object(a.jsx)("strong",{children:"Authorities:"}),Object(a.jsx)("ul",{children:e.roles&&e.roles.map((function(e,t){return Object(a.jsx)("li",{children:e},t)}))})]}):null})}}]),n}(s.Component),q=function(){var e=Object(s.useState)([]),t=Object(R.a)(e,2),n=t[0],r=t[1],c=Object(s.useState)(null),i=Object(R.a)(c,2),l=i[0],o=i[1];Object(s.useEffect)((function(){d()}),[]);var u=function(){var e=Object(M.a)(I.a.mark((function e(t){var n,a,s;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target,a=n.title,s=n.description,e.next=4,p.a.post("/api/bucketlist",{title:a.value,description:s.value});case 4:a.value="",s.value="",d();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(M.a)(I.a.mark((function e(){var t,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/bucketlist");case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(M.a)(I.a.mark((function e(t,n){var a,s,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target,s=a.title,r=a.description,e.next=4,p.a.post("/api/bucketlist/update/".concat(n),{title:s.value,description:r.value});case 4:o(null),d();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(M.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({method:"DELETE",url:"/api/bucketlist/",data:{id:t}});case 2:return e.next=4,d();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"DataInput",children:[Object(a.jsx)("h2",{children:"Enter Bucket List Item:"}),Object(a.jsxs)("form",{onSubmit:function(e){return u(e)},children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title"}),Object(a.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(a.jsx)("input",{type:"text",name:"description"}),Object(a.jsx)("button",{children:"Add Bucket List Item"})]})]}),Object(a.jsx)("div",{className:"DataOutput",children:n.map((function(e){return Object(a.jsx)("div",{children:l!==e._id?Object(a.jsxs)("div",{className:"DataOutput__card",children:[Object(a.jsxs)("div",{className:"DataOutput__card--details",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Title:"}),e.title]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{children:"Description:"}),e.description]})]}),Object(a.jsxs)("div",{className:"DataOutput__card--options",children:[Object(a.jsx)("button",{onClick:function(){return o(e._id)},children:"Edit"}),Object(a.jsx)("button",{onClick:function(){return h(e._id)},children:"Delete"})]})]},e._id):Object(a.jsx)("div",{className:"DataOutput__editing",children:Object(a.jsxs)("form",{onSubmit:function(t){return j(t,e._id)},children:[Object(a.jsxs)("div",{className:"DataOutput__editing--option",children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title:"}),Object(a.jsx)("input",{type:"text",name:"title",defaultValue:e.title})]}),Object(a.jsxs)("div",{className:"DataOutput__editing--option",children:[Object(a.jsx)("label",{htmlFor:"description",children:"Description:"}),Object(a.jsx)("input",{type:"text",name:"description",defaultValue:e.description})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"Submit",children:"Submit"}),Object(a.jsx)("button",{className:"DataOutput__editing--cancel",onClick:function(){return o(null)},children:"Cancel"})]})]})},e._id)},e._id)}))})]})},H=n.p+"static/media/bucketlist.26cdac94.png",z=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={content:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;D.getUserBoard().then((function(t){e.setState({content:t.data})}),(function(t){e.setState({content:t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("header",{className:"jumbotron text-center",children:[Object(a.jsx)("h3",{className:"text-center",children:"2021 Bucket List"}),Object(a.jsx)("img",{src:H,width:"20%",height:"20%",className:"text-right"})]}),Object(a.jsx)("div",{children:Object(a.jsx)(q,{})})]})}}]),n}(s.Component),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).logOut=a.logOut.bind(Object(u.a)(a)),a.state={showModeratorBoard:!1,showAdminBoard:!1,currentUser:void 0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=x.getCurrentUser();e&&this.setState({currentUser:e,showModeratorBoard:e.roles.includes("ROLE_MODERATOR"),showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){x.logout()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,n=e.showModeratorBoard,s=e.showAdminBoard;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(a.jsx)(h.b,{to:"/",className:"navbar-brand",children:"2021 Bucket List"}),Object(a.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/home",className:"nav-link",children:"Home"})}),n&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/mod",className:"nav-link",children:"Moderator Board"})}),s&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/admin",className:"nav-link",children:"Admin Board"})}),t&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/user",className:"nav-link",children:"User"})})]}),t?Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/profile",className:"nav-link",children:t.username})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{href:"/login",className:"nav-link",onClick:this.logOut,children:"LogOut"})})]}):Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(h.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:["/","/home"],component:U}),Object(a.jsx)(b.b,{exact:!0,path:"/book",component:J}),Object(a.jsx)(b.b,{exact:!0,path:"/login",component:_}),Object(a.jsx)(b.b,{exact:!0,path:"/register",component:L}),Object(a.jsx)(b.b,{exact:!0,path:"/profile",component:V}),Object(a.jsx)(b.b,{path:"/user",component:z})]})})]})}}]),n}(s.Component),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,161)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};i.a.render(Object(a.jsxs)(r.a.StrictMode,{children:[Object(a.jsx)(h.a,{children:Object(a.jsx)(G,{})}),","]}),document.getElementById("root")),K()},63:function(e,t,n){},65:function(e,t,n){}},[[160,1,2]]]);
//# sourceMappingURL=main.8fc9f594.chunk.js.map