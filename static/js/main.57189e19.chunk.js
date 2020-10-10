(this["webpackJsonpaccess-frontend-exercise"]=this["webpackJsonpaccess-frontend-exercise"]||[]).push([[0],{10:function(e,t,a){e.exports={listComponent:"UserList_listComponent__1WJFx",pageTitle:"UserList_pageTitle__3qRDG shared_pageTitle__32yBn",paginatedBlock:"UserList_paginatedBlock__21SKP",userList:"UserList_userList__1L9EN",anUserInfo:"UserList_anUserInfo__37YjZ",avatar:"UserList_avatar__30JzF",userLogin:"UserList_userLogin__3rGej",siteAdmin:"UserList_siteAdmin__3O7oN"}},16:function(e,t,a){e.exports={userDetailComponent:"UserDetail_userDetailComponent__1gCAt",pageTitle:"UserDetail_pageTitle__oTgQd shared_pageTitle__32yBn",userInfo:"UserDetail_userInfo__3jcbC",avatar:"UserDetail_avatar__2ikjn"}},31:function(e,t,a){e.exports={navigator:"Navigator_navigator__1ZaNE"}},34:function(e,t,a){e.exports={pendingBlock:"Pending_pendingBlock__30w5L"}},35:function(e,t,a){e.exports=a(49)},44:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),i=a.n(l),c=a(17),s=a.n(c),u=a(6),o=(a(44),a(12)),m=a(2),d=a(22),p=a(31),g=a.n(p),f=function(){var e=Object(l.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(m.f)();return i.a.createElement("nav",{className:g.a.navigator},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.b,{to:"/"},"Back to List")),i.a.createElement("li",null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.push("/".concat(a))}},i.a.createElement("label",{htmlFor:"userName"},"Search user by account: "),i.a.createElement("input",{type:"search",name:"userName",id:"userName",onChange:function(e){n(e.target.value)}}),i.a.createElement("button",{type:"submit"},"go")))))},b=a(9),E=a(14),_=a.n(E),v=a(19),j=a(11),O=a(21),U=Object(j.b)("userList/getGitHubUsers",function(){var e=Object(v.a)(_.a.mark((function e(t,a){var n,r,l;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.getState,r=20*n().list.pageIndex,e.next=4,Object(O.a)("GET /users",{per_page:20,since:r});case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),N=Object(j.c)({name:"userList",initialState:{users:[{avatarUrl:null,login:null,siteAdmin:null,id:null}],pageIndex:0,isPending:!0},reducers:{appendPageIndex:function(e,t){e.pageIndex+=t.payload,e.isPending=!0}},extraReducers:(n={},Object(b.a)(n,U.pending,(function(e){e.isPending=!0})),Object(b.a)(n,U.fulfilled,(function(e,t){e.users=t.payload.data.map((function(e){return{avatarUrl:e.avatar_url,login:e.login,siteAdmin:e.site_admin,id:e.id}})),e.isPending=!1})),Object(b.a)(n,U.rejected,(function(e,t){console.error(t),e.isPending=!1})),n)}),x=N.actions.appendPageIndex,h=N.reducer,L=a(10),I=a.n(L),P=a(34),k=a.n(P),D=function(){return i.a.createElement("p",{className:k.a.pendingBlock},"Waiting for request")},y=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.list.users})),a=Object(u.c)((function(e){return e.list.pageIndex})),n=Object(u.c)((function(e){return e.list.isPending}));Object(l.useEffect)((function(){e(U(a))}),[a,e]);return i.a.createElement("article",{className:I.a.listComponent},i.a.createElement("h2",{className:I.a.pageTitle},"GitHub User List"),!0===n?i.a.createElement(D,null):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:I.a.paginatedBlock},i.a.createElement("p",null,"This page contains ",t.length," items, Current page index:",a+1),i.a.createElement("button",{onClick:function(t){t.preventDefault(),e(x(1))}},"Get Next Page")),i.a.createElement("ul",{className:I.a.userList},t.map((function(e,t){return function(e,t){return i.a.createElement("li",{className:I.a.anUserInfo,key:e.id},i.a.createElement(o.b,{to:"/".concat(e.login)},i.a.createElement("p",null,t),i.a.createElement("div",{className:I.a.avatar},i.a.createElement("img",{src:e.avatarUrl,alt:"avatar"})),i.a.createElement("p",{className:I.a.userLogin},e.login),i.a.createElement("p",{className:I.a.siteAdmin},"Site Admin: ",e.siteAdmin?"true":"false")))}(e,20*a+t+1)})))))},A=a(16),T=a.n(A),C=Object(j.b)("userDetail/getUser",function(){var e=Object(v.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(O.a)("GET /users/{username}",{username:t});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(j.c)({name:"userDetail",initialState:{userInfo:{avatarUrl:null,name:null,bio:null,login:null,siteAdmin:null,location:null,blog:null},isPending:!1,errorMessage:null},reducers:{},extraReducers:(r={},Object(b.a)(r,C.pending,(function(e){e.isPending=!0,e.errorMessage=null})),Object(b.a)(r,C.fulfilled,(function(e,t){var a=t.payload.data,n=a.avatar_url,r=a.name,l=a.bio,i=a.login,c=a.site_admin,s=a.location,u=a.blog;e.userInfo={avatarUrl:n,name:r,bio:l,login:i,siteAdmin:!0===c?"true":"false",location:s,blog:u},e.isPending=!1})),Object(b.a)(r,C.rejected,(function(e,t){e.isPending=!1,e.errorMessage=t.error.message})),r)}).reducer,S=function(){var e=Object(m.g)().userName,t=Object(u.b)(),a=Object(u.c)((function(e){return e.detail.isPending})),n=Object(u.c)((function(e){return e.detail.userInfo})),r=Object(u.c)((function(e){return e.detail.errorMessage}));return Object(l.useEffect)((function(){t(C(e))}),[t,e]),i.a.createElement("article",{className:T.a.userDetailComponent},i.a.createElement("h2",{className:T.a.pageTitle},"GitHub User: ",i.a.createElement("em",null,e)," Detail"),!0===a?i.a.createElement(D,null):r?i.a.createElement("p",null,r):i.a.createElement("div",{className:T.a.userInfo},i.a.createElement("div",{className:T.a.avatar},i.a.createElement("img",{src:n.avatarUrl,alt:"avatar"})),i.a.createElement("p",null,"name: ",n.name),i.a.createElement("p",null,"bio: ",n.bio),i.a.createElement("p",null,"login: ",n.login),i.a.createElement("p",null,"siteAdmin: ",n.siteAdmin),i.a.createElement("p",null,"location: ",n.location),i.a.createElement("p",null,"blog: ",n.blog)))};var G=function(){return i.a.createElement(o.a,null,i.a.createElement(f,null),i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/"},i.a.createElement(y,null)),i.a.createElement(m.a,{path:"/:userName"},i.a.createElement(S,null))))},w=Object(j.a)({reducer:{list:h,detail:B}});s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:w},i.a.createElement(G,null))),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.57189e19.chunk.js.map