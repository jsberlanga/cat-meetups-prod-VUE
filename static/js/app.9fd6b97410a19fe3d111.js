webpackJsonp([1],{"56Qy":function(t,e){},"7zck":function(t,e){},"BYx+":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={data:function(){return{sideNav:!1}},computed:{menuItems:function(){var t=[{icon:"face",title:"Sign up",link:"/signup"},{icon:"lock_open",title:"Sign in",link:"/signin"}];return this.userIsAuthenticated&&(t=[{icon:"camera_front",title:"View Meetups",link:"/"},{icon:"room",title:"Organize Meetup",link:"/meetup/new"},{icon:"person",title:"Profile",link:"/profile"}]),t},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onLogout:function(){this.$store.dispatch("logout")}},name:"App"},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[s("v-list",[t._l(t.menuItems,function(e){return s("v-list-tile",{key:e.title,attrs:{to:e.link}},[s("v-list-tile-action",[s("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),s("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userIsAuthenticated?s("v-list-tile",{on:{click:t.onLogout}},[s("v-list-tile-action",[s("v-icon",[t._v("exit_to_app")])],1),t._v(" "),s("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),s("v-toolbar",{staticClass:"primary",attrs:{dark:""}},[s("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),s("v-toolbar-title",[s("router-link",{staticClass:"whatever",staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("CatMeetups")])],1),t._v(" "),s("v-spacer"),t._v(" "),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.menuItems,function(e){return s("v-btn",{key:e.title,attrs:{flat:"",to:e.link}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n\n      ")],1)}),t._v(" "),t.userIsAuthenticated?s("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v("exit_to_app")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1),t._v(" "),s("main",[s("router-view")],1),t._v(" "),s("v-footer",{staticClass:"white--text pa-1",attrs:{color:"secondary"}},[s("v-spacer"),t._v(" "),s("div",[t._v("Copyright © "+t._s((new Date).getFullYear())+" CatMeetups")])],1)],1)},staticRenderFns:[]};var n=s("VU/8")(i,r,!1,function(t){s("56Qy")},null,null).exports,o=s("Sazm"),l=s("/ocq"),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",{staticClass:"container"},[s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center text-sm-right",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"secondary",attrs:{large:"",router:"",to:"/meetups"}},[t._v("Explore All Meetups")])],1),t._v(" "),s("v-flex",{staticClass:"text-xs-center text-sm-left",attrs:{xs12:"",sm6:""}},[s("v-btn",{staticClass:"secondary",attrs:{large:"",router:"",to:"/meetup/new"}},[t._v("Organize A Meetup")])],1)],1),t._v(" "),s("v-layout",[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:8,size:100}}):t._e()],1)],1),t._v(" "),t.loading?t._e():s("v-layout",{staticClass:"mt-2 mb-2",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-carousel",{staticStyle:{cursor:"pointer"}},t._l(t.meetups,function(e){return s("v-carousel-item",{key:e.id,attrs:{src:e.imageUrl},on:{click:function(s){t.onLoadMeetup(e.id)}}},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(e.title))])])])}))],1)],1),t._v(" "),s("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("p",{staticClass:"heading"},[t._v("Join our Awesome Purrrrrrfect Meetups!")])])],1)],1)],1)},staticRenderFns:[]};var u=s("VU/8")({computed:{meetups:function(){return this.$store.getters.featuredMeetups},loading:function(){return this.$store.getters.loading}},methods:{onLoadMeetup:function(t){this.$router.push("/meetups/"+t)}}},c,!1,function(t){s("iuh2")},"data-v-0c42ef68",null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",t._l(t.meetups,function(e){return s("v-layout",{key:e.id,staticClass:"mb-2",attrs:{"row-wrap":""}},[s("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-xs0":"","offset-sm1":"","offset-md2":""}},[s("v-card",{attrs:{color:"accent"}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[s("v-card-media",{attrs:{src:e.imageUrl,height:"150px"}})],1),t._v(" "),s("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[s("v-card-title",{attrs:{"primary-title":""}},[s("div",[s("div",{staticClass:"white--text mb-1"},[s("h2",[t._v(t._s(e.title))])]),t._v(" "),s("div",[t._v(t._s(t._f("date")(e.date)))])])]),t._v(" "),s("v-card-actions",[s("v-btn",{attrs:{flat:"",to:"/meetups/"+e.id}},[s("v-icon",{attrs:{left:"",light:""}},[t._v("arrow_forward")]),t._v("\r\n                  View Meetup")],1)],1)],1)],1)],1)],1)],1)],1)}))],1)},staticRenderFns:[]},p=s("VU/8")({computed:{meetups:function(){return this.$store.getters.loadedMeetups}}},d,!1,null,null,null).exports,v={data:function(){return{title:"",location:"",imageUrl:"",description:"",date:(new Date).toISOString(),time:new Date,image:null}},computed:{formIsValid:function(){return""!==this.title&&""!==this.location&&""!==this.imageUrl&&""!==this.description},submittableDateTime:function(){var t=new Date(this.date);if("string"==typeof this.time){var e=this.time.match(/^(\d+)/)[1],s=this.time.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s)}else t.setHours(this.time.getHours()),t.setMinutes(this.time.getMinutes());return t}},methods:{onCreateMeetup:function(){if(this.formIsValid&&this.image){var t={title:this.title,location:this.location,image:this.image,description:this.description,date:this.submittableDateTime};this.$store.dispatch("createMeetup",t),this.$router.push("/meetups")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(){var t=this,e=event.target.files;if(e[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file");var s=new FileReader;s.addEventListener("load",function(){t.imageUrl=s.result}),s.readAsDataURL(e[0]),this.image=e[0]}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h2",[t._v("Create a New Meetup")])])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("form",{on:{submit:function(e){e.preventDefault(),t.onCreateMeetup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"location",label:"Location",id:"location",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{raised:""},on:{click:t.onPickFile}},[t._v("Upload Image")]),t._v(" "),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("img",{staticClass:"previewImg",attrs:{src:t.imageUrl}})])],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("h3",[t._v("Choose a Date & Time")])])],1),t._v(" "),s("v-layout",{staticClass:"mb-2",attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-date-picker",{staticClass:"d-inline-block",attrs:{actions:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),s("v-time-picker",{staticClass:"d-inline-block",attrs:{actions:"",format:"24hr"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-btn",{staticClass:"primary",attrs:{disabled:!t.formIsValid,type:"submit"}},[t._v("Create Meetup")])],1)],1)],1)])],1)],1)],1)},staticRenderFns:[]};var f=s("VU/8")(v,m,!1,function(t){s("BYx+")},"data-v-7c3f32e6",null).exports,h={props:["id"],computed:{meetup:function(){return this.$store.getters.loadedMeetup(this.id)},userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userIsCreator:function(){return!!this.userIsAuthenticated&&this.$store.getters.user.id===this.meetup.creatorId},loading:function(){return this.$store.getters.loading}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",[t.loading?s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?s("v-progress-circular",{attrs:{indeterminate:"",color:"primary",width:8,size:100}}):t._e()],1)],1):s("v-layout",{attrs:{"row-wrap":""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card",[s("v-card-title",[s("h3",{staticClass:"primary--text"},[t._v(t._s(t.meetup.title))]),t._v(" "),t.userIsCreator?[s("v-spacer"),t._v(" "),s("app-edit-meetup-details-dialog",{attrs:{meetup:t.meetup}})]:t._e()],2),t._v(" "),s("v-card-media",{attrs:{src:t.meetup.imageUrl,height:"400px"}}),t._v(" "),s("v-card-text",[s("div",{staticClass:"warning--text"},[t._v(" "+t._s(t._f("date")(t.meetup.date))+" - "+t._s(t.meetup.location))]),t._v(" "),s("div",{staticClass:"mb-2"},[t.userIsCreator?s("app-edit-meetup-date-dialog",{attrs:{meetup:t.meetup}}):t._e(),t._v(" "),t.userIsCreator?s("app-edit-meetup-time-dialog",{attrs:{meetup:t.meetup}}):t._e()],1),t._v(" "),s("div",[t._v(t._s(t.meetup.description))])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),t.userIsAuthenticated&&!t.userIsCreator?s("app-meetup-register-dialog",{attrs:{meetupId:t.meetup.id}}):t._e()],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},_=s("VU/8")(h,g,!1,null,null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("The User Profile Page")])])}]},w=s("VU/8")(null,x,!1,null,null,null).exports,b={data:function(){return{email:"",password:""}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignin:function(){this.$store.dispatch("signUserIn",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card",[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignin(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("\n                    Sign in\n                     "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var C=s("VU/8")(b,y,!1,function(t){s("xwXo")},null,null).exports,k={data:function(){return{email:"",password:"",confirmPassword:""}},computed:{comparePasswords:function(){return this.password!==this.confirmPassword?"Passwords do not match":""},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}},methods:{onSignup:function(){this.$store.dispatch("signUserUp",{email:this.email,password:this.password})},onDismissed:function(){console.log("Dismissed Alert"),this.$store.dispatch("clearError")}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",[s("v-container",[t.error?s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[s("v-card-text",[s("v-container",[s("form",{on:{submit:function(e){e.preventDefault(),t.onSignup(e)}}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Mail",id:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Sign Up\n                    "),s("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[s("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var D=s("VU/8")(k,M,!1,function(t){s("QFeG")},null,null).exports,U=s("NYxO"),I=s("Dd8w"),$=s.n(I),L={state:{loadedMeetups:[{imageUrl:"https://static.pexels.com/photos/669015/pexels-photo-669015.jpeg",id:"hardcodedId_1",title:"Meetup in Cat York",date:new Date,location:"Cat York",description:"It's Cat York!"},{imageUrl:"https://static.pexels.com/photos/46024/pexels-photo-46024.jpeg",id:"hardcodedId_2",title:"Meetup in Cat Land",date:new Date,location:"Cat Land",description:"It's Cat Land!"},{imageUrl:"https://static.pexels.com/photos/248280/pexels-photo-248280.jpeg",id:"hardcodedId_3",title:"Meetup in Cat Carpet",date:new Date,location:"Cat Carpet",description:"It's Cat Carpet!"}]},mutations:{setLoadedMeetups:function(t,e){t.loadedMeetups=e},createMeetup:function(t,e){t.loadedMeetups.push(e)},updateMeetup:function(t,e){var s=t.loadedMeetups.find(function(t){return t.id===e.id});e.title&&(s.title=e.title),e.description&&(s.description=e.description),e.date&&(s.date=e.date)}},actions:{loadMeetups:function(t){var e=t.commit;e("setLoading",!0),o.database().ref("meetups").once("value").then(function(t){var s=[],a=t.val();for(var i in a)s.push({id:i,title:a[i].title,description:a[i].description,imageUrl:a[i].imageUrl,date:a[i].date,location:a[i].location,creatorId:a[i].creatorId});e("setLoading",!1),e("setLoadedMeetups",s)}).catch(function(t){console.log(t),e("setLoading",!0)})},createMeetup:function(t,e){var s=t.commit,a=t.getters,i={title:e.title,location:e.location,description:e.description,date:e.date.toISOString(),creatorId:a.user.id},r=void 0,n=void 0;o.database().ref("meetups").push(i).then(function(t){return n=t.key}).then(function(t){var s=e.image.name,a=s.slice(s.lastIndexOf("."));return o.storage().ref("meetups/"+t+"."+a).put(e.image)}).then(function(t){return r=t.metadata.downloadURLs[0],o.database().ref("meetups").child(n).update({imageUrl:r})}).then(function(){s("createMeetup",$()({},i,{imageUrl:r,id:n}))}).catch(function(t){console.log(t)})},updateMeetupData:function(t,e){var s=t.commit;s("setLoading",!0);var a={};e.title&&(a.title=e.title),e.description&&(a.description=e.description),e.date&&(a.date=e.date),o.database().ref("meetups").child(e.id).update(a).then(function(){s("setLoading",!1),s("updateMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},getters:{loadedMeetups:function(t){return t.loadedMeetups.sort(function(t,e){return t.date>e.date})},featuredMeetups:function(t,e){return e.loadedMeetups.slice(0,5)},loadedMeetup:function(t){return function(e){return t.loadedMeetups.find(function(t){return t.id===e})}}}},S=s("uqrR"),F=s.n(S),E={state:{user:null},mutations:{registerUserForMeetup:function(t,e){var s=e.id;t.user.registeredMeetups.findIndex(function(t){return t.id===s})>=0||(t.user.registeredMeetups.push(s),t.user.fbKeys[s]=e.fbKey)},unregisterUserFromMeetup:function(t,e){var s=t.user.registeredMeetups;s.splice(s.findIndex(function(t){return t.id===e}),1),F()(t.user.fbKeys,e)},setUser:function(t,e){t.user=e}},actions:{registerUserForMeetup:function(t,e){var s=t.commit,a=t.getters;s("setLoading",!0);var i=a.user;o.database().ref("/users/"+i.id).child("/registrations").push(e).then(function(t){s("setLoading",!1),s("registerUserForMeetup",{id:e,fbKey:t.key})}).catch(function(t){console.log(t),s("setLoading",!1)})},unregisterUserFromMeetup:function(t,e){var s=t.commit,a=t.getters;s("setLoading",!0);var i=a.user;if(i.fbKeys){var r=i.fbKeys[e];o.database().ref("/users/"+i.id+"/registrations/").child(r).remove().then(function(){s("setLoading",!1),s("unregisterUserFromMeetup",e)}).catch(function(t){console.log(t),s("setLoading",!1)})}},signUserUp:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),o.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},signUserIn:function(t,e){var s=t.commit;s("setLoading",!0),s("clearError"),o.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){s("setLoading",!1);var e={id:t.uid,registeredMeetups:[],fbKeys:{}};s("setUser",e)}).catch(function(t){s("setLoading",!1),s("setError",t),console.log(t)})},autoSignIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,registeredMeetups:[],fbKeys:{}})},fetchUserData:function(t){var e=t.commit,s=t.getters;e("setLoading",!0),o.database().ref("/users/"+s.user.id+"/registrations/").once("value").then(function(t){var a=t.val(),i=[],r={};for(var n in a)i.push(a[n]),r[a[n]]=n;var o={id:s.user.id,registeredMeetups:i,fbKeys:r};e("setLoading",!1),e("setUser",o)}).catch(function(t){console.log(t),e("setLoading",!1)})},logout:function(t){var e=t.commit;o.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user}}};a.a.use(U.a);var T=new U.a.Store({modules:{meetup:L,user:E,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),P=function(t,e,s){T.getters.user?s():s("/signin")};a.a.use(l.a);var A=new l.a({routes:[{path:"/",name:"Home",component:u},{path:"/meetups",name:"Meetups",component:p},{path:"/meetup/new",name:"CreateMeetup",component:f,beforeEnter:P},{path:"/meetups/:id",name:"Meetup",props:!0,component:_},{path:"/profile",name:"Profile",component:w,beforeEnter:P},{path:"/signin",name:"Signin",component:C},{path:"/signup",name:"Signup",component:D}],mode:"history"}),R=s("3EgV"),V=s.n(R),N=(s("7zck"),{render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",icon:"warning",dismissible:"",value:!0},on:{input:this.onClose}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]}),Y=s("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},N,!1,null,null,null).exports,q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"400px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",fab:"",accent:""},slot:"activator"},[s("v-icon",[t._v("edit")])],1),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h3",[t._v("Edit Meetup")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("v-text-field",{attrs:{name:"title",label:"Title",id:"title",required:""},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),s("v-text-field",{attrs:{name:"description",label:"Description",id:"description","multi-line":"",required:""},model:{value:t.editedDescription,callback:function(e){t.editedDescription=e},expression:"editedDescription"}})],1)],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},K=s("VU/8")({props:["meetup"],data:function(){return{editDialog:!1,editedTitle:this.meetup.title,editedDescription:this.meetup.description}},methods:{onSaveChanges:function(){""!==this.editedTitle.trim()&&""!==this.editedDescription.trim()&&(this.editDialog=!1,this.$store.dispatch("updateMeetupData",{id:this.meetup.id,title:this.editedTitle,description:this.editedDescription}))}}},q,!1,null,null,null).exports,z={props:["meetup"],data:function(){return{editDialog:!1,editableDate:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=new Date(this.editableDate).getUTCDate(),s=new Date(this.editableDate).getUTCMonth(),a=new Date(this.editableDate).getUTCFullYear();t.setUTCDate(e),t.setUTCMonth(s),t.setUTCFullYear(a),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){var t=new Date(this.meetup.date);this.editableDate=t.getUTCFullYear()+"-"+(t.getUTCMonth()+1)+"-"+t.getUTCDate()}},O={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n        Edit Date\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h3",[t._v("Edit Meetup Date")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-date-picker",{staticStyle:{width:"100%"},attrs:{actions:""},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])]}}]),model:{value:t.editableDate,callback:function(e){t.editableDate=e},expression:"editableDate"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},H=s("VU/8")(z,O,!1,null,null,null).exports,j={props:["meetup"],data:function(){return{editDialog:!1,editableTime:null}},methods:{onSaveChanges:function(){var t=new Date(this.meetup.date),e=this.editableTime.match(/^(\d+)/)[1],s=this.editableTime.match(/:(\d+)/)[1];t.setHours(e),t.setMinutes(s),this.$store.dispatch("updateMeetupData",{id:this.meetup.id,date:t})}},created:function(){this.editableTime=new Date(this.meetup.date).toTimeString()}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{width:"350px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[s("v-btn",{attrs:{slot:"activator",accent:""},slot:"activator"},[t._v("\n        Edit Time\n    ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-title",[s("h3",[t._v("Edit Meetup Time")])])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-time-picker",{staticStyle:{},attrs:{actions:"",format:"24hr"},scopedSlots:t._u([{key:"default",fn:function(e){return e.save,e.cancel,[s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:function(e){t.editDialog=!1}}},[t._v("Close")]),t._v(" "),s("v-btn",{staticClass:"black--text darken-1",attrs:{flat:""},on:{click:t.onSaveChanges}},[t._v("Save")])]}}]),model:{value:t.editableTime,callback:function(e){t.editableTime=e},expression:"editableTime"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},X=s("VU/8")(j,Q,!1,null,null,null).exports,B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{persistent:""},model:{value:t.registerDialog,callback:function(e){t.registerDialog=e},expression:"registerDialog"}},[s("v-btn",{attrs:{slot:"activator",primary:"",accent:""},slot:"activator"},[t._v("\n    "+t._s(t.userIsRegistered?"Unregister":"Register")+"\n  ")]),t._v(" "),s("v-card",[s("v-container",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[t.userIsRegistered?s("v-card-title",[t._v("Unregister from Meetup?")]):s("v-card-title",[t._v("Register for Meetup?")])],1)],1),t._v(" "),s("v-divider"),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[t._v("You can always change your decision later on.")])],1)],1),t._v(" "),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-actions",[s("v-btn",{staticClass:"red--text darken-1",attrs:{flat:""},on:{click:function(e){t.registerDialog=!1}}},[t._v("Cancel")]),t._v(" "),s("v-btn",{staticClass:"green--text darken-1",attrs:{flat:""},on:{click:t.onAgree}},[t._v("Confirm")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},G=s("VU/8")({props:["meetupId"],data:function(){return{registerDialog:!1}},computed:{userIsRegistered:function(){var t=this;return this.$store.getters.user.registeredMeetups.findIndex(function(e){return e===t.meetupId})>=0}},methods:{onAgree:function(){this.userIsRegistered?this.$store.dispatch("unregisterUserFromMeetup",this.meetupId):this.$store.dispatch("registerUserForMeetup",this.meetupId)}}},B,!1,null,null,null).exports;a.a.use(V.a,{theme:{primary:"#262216",secondary:"#49412c",accent:"#97743a",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",background:"#b0a18e"}}),a.a.config.productionTip=!1,a.a.filter("date",function(t){return new Date(t).toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})}),a.a.component("app-alert",Y),a.a.component("app-edit-meetup-details-dialog",K),a.a.component("app-edit-meetup-date-dialog",H),a.a.component("app-edit-meetup-time-dialog",X),a.a.component("app-meetup-register-dialog",G),new a.a({el:"#app",router:A,store:T,components:{App:n},template:"<App/>",created:function(){var t=this;o.initializeApp({apiKey:"AIzaSyAvzPXGIaNPYiJ3N3tE3dfsh3pUrrokLX0",authDomain:"vue-vuetify.firebaseapp.com",databaseURL:"https://vue-vuetify.firebaseio.com",projectId:"vue-vuetify",storageBucket:"gs://vue-vuetify.appspot.com/"}),o.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoSignIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadMeetups")}})},QFeG:function(t,e){},iuh2:function(t,e){},xwXo:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9fd6b97410a19fe3d111.js.map