(this["webpackJsonpaccess-frontend-exercise"]=this["webpackJsonpaccess-frontend-exercise"]||[]).push([[0],{18:function(e,t,n){e.exports=n(33)},2:function(e,t,n){e.exports={listComponent:"UserList_listComponent__1WJFx",pageTitle:"UserList_pageTitle__3qRDG",paginatedBlock:"UserList_paginatedBlock__21SKP",userList:"UserList_userList__1L9EN",avatar:"UserList_avatar__30JzF",userLogin:"UserList_userLogin__3rGej",siteAdmin:"UserList_siteAdmin__3O7oN"}},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a,r=n(0),s=n.n(r),i=n(6),c=n.n(i),l=n(4),u=(n(29),n(3)),o=n(11),m=n.n(o),p=n(14),d=n(5),f=n(17),g=Object(d.b)("userList/getGitHubUsers",function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState,r=20*a().list.pageIndex,e.next=4,Object(f.a)("GET /users",{per_page:20,since:r});case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(d.c)({name:"userList",initialState:{users:[],pageIndex:0,isPending:!0},reducers:{},extraReducers:(a={},Object(u.a)(a,g.pending,(function(e){e.isPending=!0})),Object(u.a)(a,g.fulfilled,(function(e,t){e.users=t.payload.data,e.pageIndex++,e.isPending=!1})),Object(u.a)(a,g.rejected,(function(e,t){console.error(t.error)})),a)}).reducer,E=n(2),b=n.n(E),L=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.list.users})),n=Object(l.c)((function(e){return e.list.pageIndex})),a=Object(l.c)((function(e){return e.list.isPending}));Object(r.useEffect)((function(){e(g())}),[e]);return s.a.createElement("article",{className:b.a.listComponent},s.a.createElement("h2",{className:b.a.pageTitle},"User List"),!0===a?s.a.createElement("p",null,"Waiting for request"):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:b.a.paginatedBlock},s.a.createElement("p",null,"This page contains ",t.length," items, Current page index:"," ",n),s.a.createElement("button",{onClick:function(t){t.preventDefault(),e(g())}},"Get Next Page")),s.a.createElement("ul",{className:b.a.userList},t.map((function(e,t){return function(e,t){return s.a.createElement("li",{key:e.id},s.a.createElement("p",null,t),s.a.createElement("div",{className:b.a.avatar},s.a.createElement("img",{src:e.avatar_url,alt:"avatar"})),s.a.createElement("p",{className:b.a.userLogin},e.login),s.a.createElement("p",{className:b.a.siteAdmin},"Site Admin: ",e.site_admin?"true":"false"))}(e,20*(n-1)+t+1)})))))};var j=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(L,null))},v=Object(d.a)({reducer:{list:_}});c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.a,{store:v},s.a.createElement(j,null))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.85c69c8a.chunk.js.map