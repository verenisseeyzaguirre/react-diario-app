(this["webpackJsonpusereducer-app"]=this["webpackJsonpusereducer-app"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=a(4),u=a(16),i=a(59),s="[Auth] Login",m="[Auth] Logout",d="[UI] Set error",p="[UI] Remove error",f="[UI] Start loading",b="[UI] Finish loading",h="[Notes] New note",v="[Notes] Set active note",E="[Notes] Load notes",g="[Notes] Updated note",j="[Notes] Delete note",y="[Notes] Logout Cleaning",_=a(41),O=a(2),N={notes:[],active:null},w={loading:!1,msgError:null},x="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,k=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return{uid:t.payload.uid,name:t.payload.displayName};case m:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(O.a)(Object(O.a)({},e),{},{msgError:t.payload});case p:return Object(O.a)(Object(O.a)({},e),{},{msgError:null});case f:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case b:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(O.a)(Object(O.a)({},e),{},{active:Object(O.a)({},t.payload)});case E:return Object(O.a)(Object(O.a)({},e),{},{notes:Object(_.a)(t.payload)});case g:return Object(O.a)(Object(O.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case j:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case y:return Object(O.a)(Object(O.a)({},e),{},{active:null,notes:[]});case h:return Object(O.a)(Object(O.a)({},e),{},{notes:[t.payload].concat(Object(_.a)(e.notes))});default:return e}}}),C=Object(u.e)(k,x(Object(u.a)(i.a))),S=a(13),I=a(14),A=a(6),P=a(23),D=a.n(P);a(69),a(73);D.a.initializeApp({apiKey:"AIzaSyCi--C7aAoxtwxF64xp5lhoE_NHscBtLIA",authDomain:"react-app-cursos-82999.firebaseapp.com",databaseURL:"https://react-app-cursos-82999.firebaseio.com",projectId:"react-app-cursos-82999",storageBucket:"react-app-cursos-82999.appspot.com",messagingSenderId:"798845669229",appId:"1:798845669229:web:9fa272e1324de089819464"});var L=D.a.firestore(),U=new D.a.auth.GoogleAuthProvider,z=a(30),R=a.n(z),B=a(29),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(S.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},l=function(e){var t=e.target;c(Object(O.a)(Object(O.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,l,o]},G=a(5),M=a.n(G),T=a(8),Y=a(15),q=a.n(Y),W=function(){var e=Object(T.a)(M.a.mark((function e(t){var a,n,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dhukjzoym/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dhukjzoym/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,n.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(T.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(O.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t){return{type:v,payload:Object(O.a)({id:e},t)}},H=function(e,t){return{type:h,payload:Object(O.a)({id:e},t)}},K=function(e){return{type:E,payload:e}},Q=function(e){return function(){var t=Object(T.a)(M.a.mark((function t(a,n){var r,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(O.a)({},e)).id,t.next=6,L.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(V(e.id,c)),q.a.fire("Guardado",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},V=function(e,t){return{type:g,payload:{id:e,note:Object(O.a)({id:e},t)}}},Z=function(e){return{type:j,payload:e}},$=function(e){return{type:d,payload:e}},ee=function(){return{type:b}},te=function(e,t){return function(a){a({type:f}),D.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(ae(t.uid,t.displayName)),a(ee())})).catch((function(e){console.log(e),a(ee()),q.a.fire("Error",e.message,"error")}))}},ae=function(e,t){return{type:s,payload:{uid:e,displayName:t}}},ne=function(){return{type:m}},re=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).loading,a=F({email:"bena@gmail.com",password:"123456"}),n=Object(S.a)(a,2),c=n[0],o=n[1],u=c.email,i=c.password,s=function(){return R.a.isEmail(u)?!(i.length<5)||(console.log("password debe tener al menos 6 caracter"),!1):(console.log("email no es valido"),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth_tittle"},"Ingresar"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(te(u,i))},className:"animate__animated animate__fadeIn animate__faster"},r.a.createElement("input",{type:"text",placeholder:"Email",autoComplete:"off",name:"email",className:"auth_input",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth_input",value:i,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit",disabled:t},"Ingresar"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Ingresa con Google"),r.a.createElement("div",{className:"google-btn",onClick:function(){s()&&(console.log("valido"),e((function(e){D.a.auth().signInWithPopup(U).then((function(t){var a=t.user;e(ae(a.uid,a.displayName))}))})))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(I.b,{to:"/auth/register",className:"link"},"Crear una nueva cuenta")))},ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.ui})).msgError,a=F({name:"Benazir",email:"bena@gmail.com",password:"123456",password2:"123456"}),n=Object(S.a)(a,2),c=n[0],o=n[1],u=c.name,i=c.email,s=c.password,m=c.password2,d=function(){return 0===u.trim().length?(console.log("nombre es requerido"),e($("nombre es requerido")),!1):R.a.isEmail(i)?s!==m||s.length<5?(console.log("password deberia tener al menos 6 caracter y coincidir "),e($("password deberia tener al menos 6 caracter y coincidir ")),!1):(e({type:p}),!0):(console.log("email no es valido"),e($("email no es valido")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth_tittle"},"Registrar"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log(u,i,s,m),d()&&(console.log("valido"),e(function(e,t,a){return function(n){D.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(T.a)(M.a.mark((function e(t){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(ae(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),q.a.fire("Error",e.message,"error")}))}}(i,s,u)))},className:"animate__animated animate__fadeIn animate__faster"},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",autoComplete:"off",name:"name",className:"auth_input",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",autoComplete:"off",name:"email",className:"auth_input",value:i,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth_input",value:s,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"passaword2",className:"auth_input",value:m,onChange:o}),r.a.createElement("button",{className:"btn btn-primary btn-block mb-5",type:"submit"},"Reg\xedstrate"),r.a.createElement(I.b,{to:"/auth/login",className:"link"},"Ya est\xe1s registrado?")))},oe=function(){return r.a.createElement("div",{className:"auth_main"},r.a.createElement("div",{className:"auth_box-container"},r.a.createElement(A.d,null,r.a.createElement(A.b,{exact:!0,path:"/auth/login",component:re}),r.a.createElement(A.b,{exact:!0,path:"/auth/register",component:ce}),r.a.createElement(A.a,{to:"/auth/login"}))))},le=a(20),ue=a.n(le),ie=(a(57),function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=Object(l.b)(),i=ue()(a);return r.a.createElement("div",{className:"journal__entry animate__animated animate__fadeIn animate__faster",onClick:function(){u(X(t,{id:t,date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,i.format("dddd")),r.a.createElement("h4",null,i.format("D"))))}),se=function(){var e=Object(l.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e&&e.map((function(e){return r.a.createElement(ie,Object.assign({key:e.id},e))})))},me=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null," ",t)),r.a.createElement("button",{className:"btn",onClick:function(){e(function(){var e=Object(T.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.auth().signOut();case 2:t(ne()),t({type:y});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Salir")),r.a.createElement("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(T.a)(M.a.mark((function e(t,a){var n,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,L.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,console.log(c),t(X(c.id,r)),t(H(c.id,r));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"Nueva publicaci\xf3n")),r.a.createElement(se,null))},de=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Selecciona una nueva",r.a.createElement("br",null),"publicaci\xf3n para iniciar a crear."),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},pe=function(){var e=(new Date).getTime(),t=ue()(e),a=Object(l.b)(),n=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,t.format("D MMMM YYYY")),r.a.createElement("input",{id:"fileSelector",type:"file",style:{display:"none"},onChange:function(e){var t=e.target.files[0];t&&a(function(e){return function(){var t=Object(T.a)(M.a.mark((function t(a,n){var r,c;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,q.a.fire({title:"Subiendo imagen",text:"Por favor espere...",allowOutsideClick:!1,onBeforeOpen:function(){q.a.showLoading()}}),t.next=4,W(e);case 4:c=t.sent,r.url=c,a(Q(r)),q.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(t))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{className:"btn",onClick:function(){a(Q(n))}},"Save")))},fe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.notes})).active,a=F(t),c=Object(S.a)(a,3),o=c[0],u=c[1],i=c[2],s=o.body,m=o.title,d=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==d.current&&(i(t),d.current=t.id)}),[t,i]),Object(n.useEffect)((function(){e(X(o.id,Object(O.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(pe,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"t\xedtulo",className:"notes__title-input",autoComplete:"off",name:"title",value:m,onChange:u}),r.a.createElement("textarea",{placeholder:"\xbfQu\xe9 pas\xf3 hoy?",className:"notes__textarea",name:"body",value:s,onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen de fondo"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){var t;e((t=o.id,function(){var e=Object(T.a)(M.a.mark((function e(a,n){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth.uid,e.next=3,L.doc("".concat(r,"/journal/notes/").concat(t)).delete();case 3:a(Z(t));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()))}},"Cerrar"))},be=function(){var e=Object(l.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster"},r.a.createElement(me,null),r.a.createElement("main",null,e?r.a.createElement(fe,null):r.a.createElement(de,null)))},he=a(31),ve=function(e){var t=e.isAuthenticated,a=e.component,n=Object(he.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(A.a,{to:"/"}):r.a.createElement(a,e)}}))},Ee=function(e){var t=e.isAuthenticated,a=e.component,n=Object(he.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",n.location.pathname),r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(A.a,{to:"/auth/login"})}}))},ge=function(){var e=Object(l.b)(),t=Object(n.useState)(!0),a=Object(S.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),i=Object(S.a)(u,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){D.a.auth().onAuthStateChanged((function(t){var a;(null===t||void 0===t?void 0:t.uid)?(e(ae(t.uid,t.displayName)),m(!0),e((a=t.uid,function(){var e=Object(T.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(a);case 2:n=e.sent,t(K(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):m(!1),o(!1)}))}),[e,o,m]),c?r.a.createElement("h1",null,"Espere..."):r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement(A.d,null,r.a.createElement(ve,{path:"/auth",component:oe,isAuthenticated:s}),r.a.createElement(Ee,{exact:!0,path:"/",component:be,isAuthenticated:s}),r.a.createElement(A.a,{to:"/auth/login"}))))},je=(a(153),function(){return r.a.createElement(l.a,{store:C},r.a.createElement(ge,null))});o.a.render(r.a.createElement(je,null),document.getElementById("root"))},60:function(e,t,a){e.exports=a(154)}},[[60,1,2]]]);
//# sourceMappingURL=main.8eadbac3.chunk.js.map