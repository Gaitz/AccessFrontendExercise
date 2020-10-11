(this["webpackJsonpaccess-frontend-exercise"]=this["webpackJsonpaccess-frontend-exercise"]||[]).push([[0],{12:function(e,n,t){e.exports={listComponent:"UserList_listComponent__1WJFx",userList:"UserList_userList__1L9EN",anUserInfo:"UserList_anUserInfo__37YjZ",avatar:"UserList_avatar__30JzF",userLogin:"UserList_userLogin__3rGej",siteAdmin:"UserList_siteAdmin__3O7oN",paginatedBlock:"UserList_paginatedBlock__21SKP"}},23:function(e,n,t){e.exports={paginatedBlock:"ListPagination_paginatedBlock__2HvD_",pageIndexLink:"ListPagination_pageIndexLink__hnHuu",disabledLink:"ListPagination_disabledLink__jP1bI"}},24:function(e,n,t){e.exports={userDetailComponent:"UserDetail_userDetailComponent__1gCAt",userInfo:"UserDetail_userInfo__3jcbC",avatar:"UserDetail_avatar__2ikjn"}},32:function(e,n,t){e.exports={navigator:"Navigator_navigator__1ZaNE"}},35:function(e,n,t){e.exports={pageTitle:"PageTitle_pageTitle__2HryP"}},36:function(e,n,t){e.exports={pendingBlock:"Pending_pendingBlock__30w5L",pending:"Pending_pending__2WnI1"}},37:function(e,n,t){e.exports=t(51)},46:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var a,r,l=t(0),i=t.n(l),c=t(16),s=t.n(c),u=t(3),o=(t(46),t(11)),m=t(2),d=t(21),g=t(32),p=t.n(g),f=function(){var e=Object(l.useState)(""),n=Object(d.a)(e,2),t=n[0],a=n[1],r=Object(m.f)();return i.a.createElement("nav",{className:p.a.navigator},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.b,{to:"/"},"Back to List")),i.a.createElement("li",null,i.a.createElement("form",{"data-testid":"searchForm",onSubmit:function(e){e.preventDefault(),r.push("/".concat(t))}},i.a.createElement("label",{htmlFor:"userName"},"Search user by account: "),i.a.createElement("input",{type:"search",name:"userName",id:"userName",onChange:function(e){a(e.target.value)}}),i.a.createElement("button",{type:"submit"},"go")))))},b=t(9),E=t(14),_=t.n(E),v=t(18),j=t(10),x=t(20),O=Object(j.b)("userList/getGitHubUsers",function(){var e=Object(v.a)(_.a.mark((function e(n,t){var a,r,l;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getState,r=20*a().list.pageIndex,e.next=4,Object(x.a)("GET /users",{per_page:20,since:r});case 4:return l=e.sent,e.abrupt("return",l);case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),L=Object(j.c)({name:"userList",initialState:{users:[{avatarUrl:null,login:null,siteAdmin:null,id:null}],pageIndex:0,isPending:!0},reducers:{appendPageIndex:function(e,n){e.pageIndex+=n.payload},goToPageIndex:function(e,n){e.pageIndex=n.payload}},extraReducers:(a={},Object(b.a)(a,O.pending,(function(e){e.isPending=!0})),Object(b.a)(a,O.fulfilled,(function(e,n){e.users=n.payload.data.map((function(e){return{avatarUrl:e.avatar_url,login:e.login,siteAdmin:e.site_admin,id:e.id}})),e.isPending=!1})),Object(b.a)(a,O.rejected,(function(e,n){console.error(n),e.isPending=!1})),a)}),I=L.actions,P=I.appendPageIndex,k=I.goToPageIndex,N=L.reducer,U=t(12),h=t.n(U),y=t(35),A=t.n(y),D=function(e){return i.a.createElement("h2",{className:A.a.pageTitle},e.children)},C=t(36),B=t.n(C),S=function(){return i.a.createElement("p",{className:B.a.pendingBlock},"Waiting for request ")},T=t(23),w=t.n(T),G=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.list.pageIndex})),t=n+1;return i.a.createElement("div",{className:w.a.paginatedBlock},i.a.createElement("p",null,"Page Index:"," ",Array(t).fill(t).map((function(t,a){var r=a===n;return i.a.createElement("a",{key:a,href:"/page/".concat(a),onClick:function(n){n.preventDefault(),e(k(a))},className:"".concat(w.a.pageIndexLink," ").concat(r?w.a.disabledLink:"")},a)}))),i.a.createElement("button",{onClick:function(n){n.preventDefault(),e(P(1))}},"Get Next Page"))},H=function(){var e=Object(u.b)(),n=Object(u.c)((function(e){return e.list.users})),t=Object(u.c)((function(e){return e.list.pageIndex})),a=Object(u.c)((function(e){return e.list.isPending}));Object(l.useEffect)((function(){e(O(t))}),[t,e]);return i.a.createElement("article",{className:h.a.listComponent},i.a.createElement(D,null,"GitHub User List"),!0===a?i.a.createElement(S,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(G,null),i.a.createElement("p",null,"This page contains ",n.length," items"),i.a.createElement("ul",{className:h.a.userList},n.map((function(e,n){return function(e,n){return i.a.createElement("li",{className:h.a.anUserInfo,key:e.id},i.a.createElement(o.b,{to:"/".concat(e.login)},i.a.createElement("p",null,n),i.a.createElement("div",{className:h.a.avatar},i.a.createElement("img",{src:e.avatarUrl,alt:"avatar"})),i.a.createElement("p",{className:h.a.userLogin},e.login),i.a.createElement("p",{className:h.a.siteAdmin},"Site Admin: ",e.siteAdmin?"true":"false")))}(e,20*t+n+1)})))))},F=t(24),M=t.n(F),J=Object(j.b)("userDetail/getUser",function(){var e=Object(v.a)(_.a.mark((function e(n){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)("GET /users/{username}",{username:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),W=Object(j.c)({name:"userDetail",initialState:{userInfo:{avatarUrl:null,name:null,bio:null,login:null,siteAdmin:null,location:null,blog:null},isPending:!1,errorMessage:null},reducers:{},extraReducers:(r={},Object(b.a)(r,J.pending,(function(e){e.isPending=!0,e.errorMessage=null})),Object(b.a)(r,J.fulfilled,(function(e,n){var t=n.payload.data,a=t.avatar_url,r=t.name,l=t.bio,i=t.login,c=t.site_admin,s=t.location,u=t.blog;e.userInfo={avatarUrl:a,name:r,bio:l,login:i,siteAdmin:!0===c?"true":"false",location:s,blog:u},e.isPending=!1})),Object(b.a)(r,J.rejected,(function(e,n){e.isPending=!1,e.errorMessage=n.error.message})),r)}).reducer,R=function(){var e=Object(m.g)().userName,n=Object(u.b)(),t=Object(u.c)((function(e){return e.detail.isPending})),a=Object(u.c)((function(e){return e.detail.userInfo})),r=Object(u.c)((function(e){return e.detail.errorMessage}));return Object(l.useEffect)((function(){n(J(e))}),[n,e]),i.a.createElement("article",{className:M.a.userDetailComponent},i.a.createElement(D,null,"GitHub User: ",i.a.createElement("em",null,e)," Detail"),!0===t?i.a.createElement(S,null):r?i.a.createElement("p",null,r):i.a.createElement("div",{className:M.a.userInfo},i.a.createElement("div",{className:M.a.avatar},i.a.createElement("img",{src:a.avatarUrl,alt:"avatar"})),i.a.createElement("p",null,"name: ",a.name),i.a.createElement("p",null,"bio: ",a.bio),i.a.createElement("p",null,"login: ",a.login),i.a.createElement("p",null,"siteAdmin: ",a.siteAdmin),i.a.createElement("p",null,"location: ",a.location),i.a.createElement("p",null,"blog: ",a.blog)))};var Z=function(){return i.a.createElement(o.a,null,i.a.createElement(f,null),i.a.createElement(m.c,null,i.a.createElement(m.a,{exact:!0,path:"/"},i.a.createElement(H,null)),i.a.createElement(m.a,{path:"/:userName"},i.a.createElement(R,null))))},q=Object(j.a)({reducer:{list:N,detail:W}});s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u.a,{store:q},i.a.createElement(Z,null))),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c1769e88.chunk.js.map