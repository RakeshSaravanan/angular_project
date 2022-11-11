"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6808,9855],{8094:(P,f,c)=>{c.d(f,{Z:()=>t});var a=c(2096),r=c(9772),n=c(9808);function g(d,_){if(1&d&&(a.TgZ(0,"span"),a._uU(1),a.qZA()),2&d){const m=a.oxw();a.xp6(1),a.Oqu(m.content)}}const u=["*"];let t=(()=>{class d{constructor(){this.color="danger",this.content="Alert Something is wrong"}ngOnInit(){}}return d.\u0275fac=function(m){return new(m||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-alert-card"]],inputs:{color:"color",content:"content"},ngContentSelectors:u,decls:7,vars:3,consts:[[1,"alert"],["name","alert-circle-outline"],["ngContent",""],[4,"ngIf"]],template:function(m,Z){if(1&m&&(a.F$t(),a.TgZ(0,"div",0)(1,"div"),a._UZ(2,"ion-icon",1),a.qZA(),a.TgZ(3,"div",null,2),a.Hsn(5),a.qZA(),a.YNc(6,g,2,1,"span",3),a.qZA()),2&m){const v=a.MAs(4);a.Tol(Z.color),a.xp6(6),a.Q6J("ngIf",!v.innerHTML.trim())}},directives:[r.gu,n.O5],styles:[".alert[_ngcontent-%COMP%]{padding:6px 16px;color:var(--ion-color-dark);border-radius:8px;border:1px solid;display:flex}.alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;align-items:flex-start;margin-right:6px}.alert[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}.danger[_ngcontent-%COMP%]{border-color:var(--ion-color-danger);background:#ed576b5d;color:var(--ion-color-danger-shade)}.warning[_ngcontent-%COMP%]{border-color:var(--ion-color-warning);background:#e0ae0852;color:var(--ion-color-warning-shade)}.success[_ngcontent-%COMP%]{border-color:var(--ion-color-success);background:#28ba6246;color:var(--ion-color-success-shade)}"]}),d})()},6526:(P,f,c)=>{c.d(f,{c:()=>n});var a=c(2096),r=c(9772);let n=(()=>{class g{constructor(){}ngOnInit(){}}return g.\u0275fac=function(t){return new(t||g)},g.\u0275cmp=a.Xpm({type:g,selectors:[["app-footer"]],decls:9,vars:0,consts:[[1,"footer-content"],[1,"title"],[1,"source"],["href","https://github.com/eevan7a9/real-estate-management"],["color","info"]],template:function(t,d){1&t&&(a.TgZ(0,"ion-footer")(1,"ion-toolbar")(2,"div",0)(3,"div",1),a._uU(4,"Real Estate Management System"),a.qZA(),a.TgZ(5,"div",2)(6,"a",3)(7,"ion-text",4),a._uU(8," https://github.com/eevan7a9/real-estate-management "),a.qZA()()()()()())},directives:[r.fr,r.sr,r.yW],styles:[".footer-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.footer-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:var(--ion-color-dark);font-size:14px}.footer-content[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:12px}"]}),g})()},6808:(P,f,c)=>{c.r(f),c.d(f,{UserPageModule:()=>Y});var a=c(9808),r=c(4182),n=c(9772),g=c(7637),u=c(655),t=c(2096),d=c(1584);let _=(()=>{class e{constructor(o,i){this.user=o,this.router=i}canActivate(){return(0,u.mG)(this,void 0,void 0,function*(){return!!this.user.user||(this.router.navigate(["/map"]),!1)})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.K),t.LFG(g.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(o,i){this.user=o,this.router=i}canActivate(){return(0,u.mG)(this,void 0,void 0,function*(){return!this.user.user||(this.router.navigate(["/map"]),!1)})}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.K),t.LFG(g.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=c(2414);let v=(()=>{class e{constructor(o,i){this.fb=o,this.customValidators=i,this.error=!1,this.changePassForm=this.fb.group({passwordCurrent:["",r.kI.required],passwordNew:["",[r.kI.required,r.kI.minLength(8),this.customValidators.patternValidator(/\d/,{hasNumber:!0}),this.customValidators.patternValidator(/[A-Z]/,{hasCapitalCase:!0}),this.customValidators.patternValidator(/[a-z]/,{hasSmallCase:!0}),this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/,{hasSpecialCharacters:!0})]],passwordConfirm:["",[r.kI.required,r.kI.minLength(8),this.customValidators.patternValidator(/\d/,{hasNumber:!0}),this.customValidators.patternValidator(/[A-Z]/,{hasCapitalCase:!0}),this.customValidators.patternValidator(/[a-z]/,{hasSmallCase:!0}),this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/,{hasSpecialCharacters:!0})]]})}ngOnInit(){}submit(){this.changePassForm.invalid?this.error=!0:console.log(this.changePassForm.value)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(Z.S))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-change-password"]],decls:36,vars:1,consts:[[1,"change-pass-container"],[1,"change-pass-card"],[1,"ion-text-center"],[1,"logo-container"],["src","../assets/images/logo.png","alt","logo"],[1,"source"],[1,"title"],[1,"sub-title"],[3,"formGroup","submit"],["position","floating"],["type","password","formControlName","passwordCurrent"],["type","password","formControlName","passwordNew"],["type","password","formControlName","passwordConfirm"],["size","large","expand","full","color","primary","type","submit",1,"ion-margin-top"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"ion-card",1)(3,"ion-card-header",2)(4,"div",3),t._UZ(5,"img",4)(6,"div",5),t.qZA()(),t.TgZ(7,"ion-card-content")(8,"div",6),t._uU(9,"Change Passowrd"),t.qZA(),t.TgZ(10,"div",7),t._uU(11," Your new Password must be different from your previous Password "),t.qZA(),t.TgZ(12,"form",8),t.NdJ("submit",function(){return i.submit()}),t.TgZ(13,"ion-list")(14,"ion-item")(15,"ion-label",9),t._uU(16,"Password Current"),t.qZA(),t._UZ(17,"ion-input",10),t.qZA(),t.TgZ(18,"ion-item")(19,"ion-label",9),t._uU(20,"Password New"),t.qZA(),t._UZ(21,"ion-input",11),t.qZA(),t.TgZ(22,"ion-item")(23,"ion-label",9),t._uU(24,"Password Confirm"),t.qZA(),t._UZ(25,"ion-input",12),t.qZA(),t.TgZ(26,"div")(27,"ul")(28,"li"),t._uU(29,"Passwords must be atleast 8 characters log."),t.qZA(),t.TgZ(30,"li"),t._uU(31,"New Password and Confirm Password must be the same."),t.qZA(),t.TgZ(32,"li"),t._uU(33," Passowrd must contain a number, special charaters, cappitalize & small case "),t.qZA()()(),t.TgZ(34,"ion-button",13),t._uU(35," Submit "),t.qZA()()()()()()()),2&o&&(t.xp6(12),t.Q6J("formGroup",i.changePassForm))},directives:[n.W2,n.PM,n.Zi,n.FN,r._Y,r.JL,r.sg,n.q_,n.Ie,n.Q$,n.pK,n.j9,r.JJ,r.u,n.YG],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-card[_ngcontent-%COMP%]{box-shadow:none}.change-pass-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;width:100%;min-height:100%;display:flex;justify-content:center;align-items:center}.logo-container[_ngcontent-%COMP%]{margin:30px auto 0;max-width:200px;text-align:center}.change-pass-card[_ngcontent-%COMP%]{width:100%;max-width:450px}.change-pass-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--ion-color-dark)}.change-pass-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:8px;--background: var(--ion-color-light)}@media (max-width: 600px){.change-pass-card[_ngcontent-%COMP%]{box-shadow:none;min-height:100%;width:100%;max-width:400px}}"]}),e})();var C=(()=>{return(e=C||(C={})).enquiry="enquiry",e.property="property",e.app="app",C;var e})();function y(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"ion-item",3),t.NdJ("click",function(){return t.CHM(o),t.oxw().itemClicked()}),t.TgZ(1,"ion-label"),t._uU(2),t.qZA(),t.TgZ(3,"div",4)(4,"ion-badge",5),t._uU(5),t.qZA(),t._uU(6),t.ALo(7,"date"),t.qZA()()}if(2&e){const o=s.$implicit,i=t.oxw();t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Q6J("color",i.getItemBadge(o.type)),t.xp6(1),t.Oqu(o.type),t.xp6(1),t.hij(" ",t.lcZ(7,4,o.date)," ")}}let b=(()=>{class e{constructor(){this.notifications=[{id:"01",title:"Property have been added.",type:"property",date:new Date},{id:"02",title:"Property have been added.",type:"property",date:new Date},{id:"03",title:"Test@email.com have have sent you enquiries",type:"enquiry",date:new Date("2021/8/6")},{id:"04",title:"Success, your Email have been verified!!!",type:"app",date:new Date("2021/8/5")},{id:"05",title:"Welcome friend, Account created",type:"app",date:new Date("2021/8/5")}]}ngOnInit(){}itemClicked(){console.log("item is clicked")}getItemBadge(o){switch(o){case C.enquiry:return"secondary";case C.property:return"success";default:return"primary"}}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notifications"]],decls:12,vars:1,consts:[[1,"notification-container","ion-padding-vertical"],["size","12"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"],[1,"item-right-side"],[3,"color"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),t._uU(8," My Notifications "),t.qZA()(),t.TgZ(9,"ion-card-content")(10,"ion-list"),t.YNc(11,y,8,6,"ion-item",2),t.qZA()()()()()()()()),2&o&&(t.xp6(11),t.Q6J("ngForOf",i.notifications))},directives:[n.W2,n.jY,n.Nd,n.wI,n.PM,n.Zi,n.Dq,n.FN,n.q_,a.sg,n.Ie,n.Q$,n.yp],pipes:[a.uU],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-card[_ngcontent-%COMP%]{box-shadow:none}.notification-container[_ngcontent-%COMP%]{min-height:100%;max-width:1600px;margin:0 auto}ion-item[_ngcontent-%COMP%]{--inner-padding-bottom: 16px;--inner-padding-top: 16px}ion-item[_ngcontent-%COMP%]   .item-right-side[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}ion-item[_ngcontent-%COMP%]   .item-right-side[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin:0 8px 0 0}"]}),e})(),O=(()=>{class e{constructor(o){this.userService=o,this.imgUrl="./assets/images/avatar.png",this.userService.user$.subscribe(i=>this.user=i)}ngOnInit(){}toggleUpload(){document.getElementById("image-upload").click()}onSelectFile(o){if(o.target.files&&o.target.files[0]){const i=new FileReader;i.readAsDataURL(o.target.files[0]),i.onload=l=>{this.imgUrl=l.target.result,console.log(this.imgUrl)}}}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-profile"]],decls:59,vars:9,consts:[[1,"profile-container","ion-padding-vertical"],["size","12","sizeMd","4"],[1,"ion-no-padding"],[1,"ion-padding"],[1,"profile-img-container"],[3,"src"],["type","file","accept","image/*","id","image-upload",3,"hidden","change"],["color","primary","expand","block",3,"click"],[1,"app-use-info"],[1,"item"],["name","flame-outline"],["name","calendar-outline"],["size","12","sizeMd","8"],[1,"form-information"],["lines","none"],["position","stacked"],["type","email",3,"value"],["type","text",3,"value"],["placeholder","...",3,"value"],[1,"ion-text-end","ion-padding-vertical"],[1,"activities-section"],[1,"heading"],[1,"activities-empty"],["name","alert-circle-outline"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-card")(6,"ion-card-header",2)(7,"ion-card-title",3),t._uU(8," My Profile, "),t.qZA(),t.TgZ(9,"div",4),t._UZ(10,"img",5),t.qZA()(),t.TgZ(11,"ion-card-content")(12,"input",6),t.NdJ("change",function(p){return i.onSelectFile(p)}),t.qZA(),t.TgZ(13,"ion-button",7),t.NdJ("click",function(){return i.toggleUpload()}),t._uU(14," Upload Image "),t.qZA(),t.TgZ(15,"div",8)(16,"div",9),t._UZ(17,"ion-icon",10),t.TgZ(18,"ion-text"),t._uU(19),t.ALo(20,"date"),t.qZA()(),t.TgZ(21,"div",9),t._UZ(22,"ion-icon",11),t.TgZ(23,"ion-text"),t._uU(24,"Visited For 1 day"),t.qZA()()()()()(),t.TgZ(25,"ion-col",12)(26,"ion-card")(27,"ion-card-header")(28,"ion-card-title"),t._uU(29," My Information "),t.qZA()(),t.TgZ(30,"ion-card-content")(31,"form",13)(32,"ion-item",14)(33,"ion-label",15),t._uU(34,"Email *"),t.qZA(),t._UZ(35,"ion-input",16),t.qZA(),t.TgZ(36,"ion-item",14)(37,"ion-label",15),t._uU(38,"Full Name *"),t.qZA(),t._UZ(39,"ion-input",17),t.qZA(),t.TgZ(40,"ion-item",14)(41,"ion-label",15),t._uU(42,"About Me:"),t.qZA(),t._UZ(43,"ion-textarea",18),t.qZA(),t.TgZ(44,"ion-item",14)(45,"ion-label",15),t._uU(46,"Location"),t.qZA(),t._UZ(47,"ion-input",17),t.qZA(),t.TgZ(48,"div",19)(49,"ion-button"),t._uU(50,"SAVE CHANGES"),t.qZA()()()()()()(),t.TgZ(51,"ion-row")(52,"ion-col",20)(53,"div",21),t._uU(54,"My Activities"),t.qZA(),t.TgZ(55,"div",22)(56,"h1"),t._uU(57,"EMPTY"),t._UZ(58,"ion-icon",23),t.qZA()()()()()()()),2&o&&(t.xp6(10),t.Q6J("src",i.imgUrl,t.LSH),t.xp6(2),t.Q6J("hidden",!0),t.xp6(7),t.hij("Joined ",t.lcZ(20,7,null==i.user?null:i.user.created),""),t.xp6(16),t.Q6J("value",null==i.user?null:i.user.email),t.xp6(4),t.Q6J("value",null==i.user?null:i.user.fullName),t.xp6(4),t.Q6J("value",null==i.user?null:i.user.aboutMe),t.xp6(4),t.Q6J("value",null==i.user?null:i.user.location))},directives:[n.W2,n.jY,n.Nd,n.wI,n.PM,n.Zi,n.Dq,n.FN,n.YG,n.gu,n.yW,r._Y,r.JL,r.F,n.Ie,n.Q$,n.pK,n.j9,n.g2],pipes:[a.uU],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}ion-card[_ngcontent-%COMP%]{box-shadow:none}.profile-container[_ngcontent-%COMP%]{min-height:100%;max-width:1600px;margin:0 auto}.profile-img-container[_ngcontent-%COMP%]{padding:16px 0}.profile-img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:16px;height:auto;width:100%;max-height:300px;max-width:300px;display:block;margin-left:auto;margin-right:auto}.image-input[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-colo-light)}.app-use-info[_ngcontent-%COMP%]{padding:16px 0}.app-use-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:0 0 12px}.app-use-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px;margin-right:4px}.app-use-info[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-size:16px;margin-right:4px}.form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--inner-padding-end: 0;--inner-padding-start: 0;--padding-end: 0;--padding-start: 0;--padding-top: 0;--padding-bottom: 0;margin:0 0 16px}.form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{--color: #8794a4}.form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{--padding-start: 12px;padding:6px;border:1px solid rgba(0,57,100,.418);box-sizing:border-box;border-radius:4px;margin-top:8px}.form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]::placeholder, .form-information[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]::placeholder{font-size:15px}.activities-section[_ngcontent-%COMP%]{margin:90px 0 0}.activities-section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:30px;font-weight:700;text-align:center;padding:0 0 24px;border-bottom:5px solid var(--ion-color-primary)}.activities-section[_ngcontent-%COMP%]   .activities-empty[_ngcontent-%COMP%]{height:300px;width:100%;display:flex;justify-content:center;align-items:center}.activities-section[_ngcontent-%COMP%]   .activities-empty[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:35px;letter-spacing:1.5px}.activities-section[_ngcontent-%COMP%]   .activities-empty[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:50px}"]}),e})();var x=c(8094),M=c(6526);function w(e,s){1&e&&(t.TgZ(0,"div",19),t._UZ(1,"app-alert-card",20),t.qZA())}function A(e,s){1&e&&(t.TgZ(0,"div",19),t._UZ(1,"app-alert-card",21),t.qZA())}function U(e,s){1&e&&(t.TgZ(0,"div",19),t._UZ(1,"app-alert-card",22),t.qZA())}function T(e,s){1&e&&(t.TgZ(0,"div",19),t._UZ(1,"app-alert-card",23),t.qZA())}const q=function(){return["/user/signin"]};let F=(()=>{class e{constructor(o,i,l,p,h,L){this.fb=o,this.customValidators=i,this.toastCtrl=l,this.loadingController=p,this.router=h,this.user=L,this.error=!1,this.registerForm=this.fb.group({fullName:["",[r.kI.required,r.kI.minLength(4)]],email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.minLength(8),this.customValidators.patternValidator(/\d/,{hasNumber:!0}),this.customValidators.patternValidator(/[A-Z]/,{hasCapitalCase:!0}),this.customValidators.patternValidator(/[a-z]/,{hasSmallCase:!0}),this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/,{hasSpecialCharacters:!0})]],confirm:["",r.kI.required],termService:[!1,r.kI.required]},{validators:this.customValidators.isDifferent("password","confirm","notConfirmed")})}ngOnInit(){}submit(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.registerForm.invalid)return void(this.error=!0);const o=yield this.presentLoading();o.present(),setTimeout(()=>(0,u.mG)(this,void 0,void 0,function*(){const{fullName:i,email:l,password:p}=this.registerForm.value;(yield this.user.register(i,l,p)).error||(o.dismiss(),yield this.showToast("Success, registration is complete."),yield this.router.navigateByUrl("/user/account/profile"))}),1e3)})}presentLoading(){return(0,u.mG)(this,void 0,void 0,function*(){return yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."})})}showToast(o,i="success"){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:o,duration:2e3,color:i})).present()})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(Z.S),t.Y36(n.yF),t.Y36(n.HT),t.Y36(g.F0),t.Y36(d.K))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:51,vars:8,consts:[[3,"translucent"],["slot","end"],[1,"register-container"],[1,"register-card"],[1,"ion-text-center"],[1,"logo-container"],["src","../assets/images/logo.png","alt","logo"],[1,"source"],[3,"formGroup","submit"],["position","floating"],["type","text","formControlName","fullName"],["class","alert-errors",4,"ngIf"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","confirm"],[1,"ion-padding-vertical"],["size","large","expand","full","color","primary","type","submit",1,"ion-margin-top"],[1,"ask-signin"],[3,"routerLink"],[1,"alert-errors"],["content","Full Name is too short."],["content","Email is not valid."],["content","Length needs to be 8+ long & contain a\n                (number, special characters, small case & capitalize)."],["content","Password not confirmed."]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Register Page"),t.qZA(),t.TgZ(4,"ion-buttons",1),t._UZ(5,"ion-menu-button"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",2)(8,"ion-card",3)(9,"ion-card-header",4)(10,"div",5),t._UZ(11,"img",6)(12,"div",7),t.qZA()(),t.TgZ(13,"ion-card-content")(14,"form",8),t.NdJ("submit",function(){return i.submit()}),t.TgZ(15,"ion-list")(16,"ion-item")(17,"ion-label",9),t._uU(18,"Full Name"),t.qZA(),t._UZ(19,"ion-input",10),t.qZA(),t.YNc(20,w,2,0,"div",11),t.TgZ(21,"ion-item")(22,"ion-label",9),t._uU(23,"Email"),t.qZA(),t._UZ(24,"ion-input",12),t.qZA(),t.YNc(25,A,2,0,"div",11),t.TgZ(26,"ion-item")(27,"ion-label",9),t._uU(28,"Password"),t.qZA(),t._UZ(29,"ion-input",13),t.qZA(),t.YNc(30,U,2,0,"div",11),t.TgZ(31,"ion-item")(32,"ion-label",9),t._uU(33,"Confirm Password"),t.qZA(),t._UZ(34,"ion-input",14),t.qZA(),t.YNc(35,T,2,0,"div",11),t.TgZ(36,"div",15),t._uU(37," By continuing, you agree to our "),t.TgZ(38,"a"),t._uU(39,"User Agreement"),t.qZA(),t._uU(40," and "),t.TgZ(41,"a"),t._uU(42,"Privacy Policy"),t.qZA(),t._uU(43,". "),t.qZA(),t.TgZ(44,"ion-button",16),t._uU(45," Sign Up "),t.qZA(),t.TgZ(46,"div",17),t._uU(47," Already have an Account? "),t.TgZ(48,"a",18),t._uU(49,"Sign in"),t.qZA()()()()()()(),t._UZ(50,"app-footer"),t.qZA()),2&o&&(t.Q6J("translucent",!0),t.xp6(14),t.Q6J("formGroup",i.registerForm),t.xp6(6),t.Q6J("ngIf",i.error&&i.registerForm.get("fullName").errors),t.xp6(5),t.Q6J("ngIf",i.error&&i.registerForm.get("email").errors),t.xp6(5),t.Q6J("ngIf",i.error&&i.registerForm.get("password").errors),t.xp6(5),t.Q6J("ngIf",i.error&&(null==i.registerForm.errors?null:i.registerForm.errors.notConfirmed)),t.xp6(13),t.Q6J("routerLink",t.DdM(7,q)))},directives:[n.Gu,n.sr,n.wd,n.Sm,n.fG,n.W2,n.PM,n.Zi,n.FN,r._Y,r.JL,r.sg,n.q_,n.Ie,n.Q$,n.pK,n.j9,r.JJ,r.u,a.O5,x.Z,n.YG,n.Fo,g.yS,M.c],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}.register-container[_ngcontent-%COMP%]{position:relative;max-width:1200px;margin:0 auto;width:100%;min-height:calc(100% - 56px);display:flex;justify-content:center;align-items:center}.register-card[_ngcontent-%COMP%]{width:100%;max-width:400px}.register-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:8px;--background: var(--ion-color-light)}.logo-container[_ngcontent-%COMP%]{margin:30px auto 0;max-width:200px;text-align:center}.alert-errors[_ngcontent-%COMP%]{width:100%;margin:6px 0 0}.ask-signin[_ngcontent-%COMP%]{width:100%;margin-top:36px;display:flex;justify-content:center;text-transform:uppercase}.ask-signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:6px}@media (max-width: 600px){ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-dark-contrast)}.register-card[_ngcontent-%COMP%]{margin:0;box-shadow:none;min-height:100%;width:100%;max-width:400px}}"]}),e})();function I(e,s){1&e&&(t.TgZ(0,"div",16),t._UZ(1,"app-alert-card",17),t.qZA())}function N(e,s){1&e&&(t.TgZ(0,"div",16),t._UZ(1,"app-alert-card",18),t.qZA())}const k=function(){return["/user/register"]},S=[{path:"",redirectTo:"/user/account",pathMatch:"full"},{path:"account",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-user"]],decls:23,vars:1,consts:[[1,"ion-no-border",3,"translucent"],["slot","end"],["slot","top"],["tab","profile"],["name","person-circle-outline"],["tab","change-password"],["name","lock-closed-outline"],["tab","notifications"],["name","notifications-outline"]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Account Page"),t.qZA(),t.TgZ(4,"ion-buttons",1),t._UZ(5,"ion-menu-button"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div"),t._UZ(8,"ion-router-outlet"),t.qZA(),t.TgZ(9,"ion-tabs")(10,"ion-tab-bar",2)(11,"ion-tab-button",3),t._UZ(12,"ion-icon",4),t.TgZ(13,"ion-label"),t._uU(14,"Profile"),t.qZA()(),t.TgZ(15,"ion-tab-button",5),t._UZ(16,"ion-icon",6),t.TgZ(17,"ion-label"),t._uU(18,"Change Password"),t.qZA()(),t.TgZ(19,"ion-tab-button",7),t._UZ(20,"ion-icon",8),t.TgZ(21,"ion-label"),t._uU(22,"Notifications"),t.qZA()()()()()),2&o&&t.Q6J("translucent",!0)},directives:[n.Gu,n.sr,n.wd,n.Sm,n.fG,n.W2,n.jP,n.UN,n.yq,n.ZU,n.gu,n.Q$],styles:["ion-tab-bar[_ngcontent-%COMP%]{--border: 1px solid var( --ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, rgba(0, 0, 0, .13))) );box-shadow:2px 0 2px #0000001f}"]}),e})(),children:[{path:"",redirectTo:"/user/account/profile",pathMatch:"full"},{path:"profile",component:O},{path:"change-password",component:v},{path:"notifications",component:b}],canActivate:[_]},{path:"register",component:F,canActivate:[m]},{path:"signin",component:(()=>{class e{constructor(o,i,l,p,h){this.fb=o,this.user=i,this.toastCtrl=l,this.loadingController=p,this.router=h,this.error=!1,this.authFailed=!1,this.signinForm=this.fb.group({email:["",[r.kI.required,r.kI.email]],password:["",r.kI.required]})}ngOnInit(){}submit(){return(0,u.mG)(this,void 0,void 0,function*(){if(this.signinForm.invalid)return void(this.error=!0);const o=yield this.presentLoading();o.present();const{email:i,password:l}=this.signinForm.value,p="Something went wrong, try again later.";try{const h=yield this.user.signIn(i,l);if(yield o.dismiss(),h.error)return void(yield this.showToast(h.error.message||p,"danger"));yield this.showToast("Success, You are logged in"),this.router.navigateByUrl("/map")}catch(h){yield o.dismiss(),yield this.showToast(p,"danger")}})}presentLoading(){return(0,u.mG)(this,void 0,void 0,function*(){return yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."})})}showToast(o,i="success"){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.toastCtrl.create({message:o,duration:2e3,color:i})).present()})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.qu),t.Y36(d.K),t.Y36(n.yF),t.Y36(n.HT),t.Y36(g.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signin"]],decls:33,vars:6,consts:[[3,"translucent"],["slot","end"],[1,"signin-container"],[1,"signin-card"],[1,"ion-text-center"],[1,"logo-container"],["src","../assets/images/logo.png","alt","logo"],[1,"source"],[3,"formGroup","submit"],["position","floating"],["type","email","formControlName","email"],["class","alert-errors",4,"ngIf"],["type","password","formControlName","password"],["size","large","expand","full","color","primary","type","submit",1,"ion-margin-top"],[1,"ask-register"],[3,"routerLink"],[1,"alert-errors"],["content","Email is not valid."],["content","Wrong Email or Password."]],template:function(o,i){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Sign In Page"),t.qZA(),t.TgZ(4,"ion-buttons",1),t._UZ(5,"ion-menu-button"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",2)(8,"ion-card",3)(9,"ion-card-header",4)(10,"div",5),t._UZ(11,"img",6)(12,"div",7),t.qZA()(),t.TgZ(13,"ion-card-content")(14,"form",8),t.NdJ("submit",function(){return i.submit()}),t.TgZ(15,"ion-list")(16,"ion-item")(17,"ion-label",9),t._uU(18,"Email"),t.qZA(),t._UZ(19,"ion-input",10),t.qZA(),t.YNc(20,I,2,0,"div",11),t.TgZ(21,"ion-item")(22,"ion-label",9),t._uU(23,"Password"),t.qZA(),t._UZ(24,"ion-input",12),t.qZA(),t.YNc(25,N,2,0,"div",11),t.TgZ(26,"ion-button",13),t._uU(27," Sign In "),t.qZA(),t.TgZ(28,"div",14),t._uU(29," First time here? "),t.TgZ(30,"a",15),t._uU(31,"Register"),t.qZA()()()()()()(),t._UZ(32,"app-footer"),t.qZA()),2&o&&(t.Q6J("translucent",!0),t.xp6(14),t.Q6J("formGroup",i.signinForm),t.xp6(6),t.Q6J("ngIf",i.error&&i.signinForm.get("email").errors),t.xp6(5),t.Q6J("ngIf",i.authFailed),t.xp6(5),t.Q6J("routerLink",t.DdM(5,k)))},directives:[n.Gu,n.sr,n.wd,n.Sm,n.fG,n.W2,n.PM,n.Zi,n.FN,r._Y,r.JL,r.sg,n.q_,n.Ie,n.Q$,n.pK,n.j9,r.JJ,r.u,a.O5,x.Z,n.YG,n.Fo,g.yS,M.c],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-light)}.signin-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;width:100%;min-height:calc(100% - 56px);display:flex;justify-content:center;align-items:center}.signin-card[_ngcontent-%COMP%]{width:100%;max-width:400px}.signin-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:8px;--background: var(--ion-color-light)}.logo-container[_ngcontent-%COMP%]{margin:30px auto 0;max-width:200px;text-align:center}.alert-errors[_ngcontent-%COMP%]{width:100%;margin:6px 0 0}.ask-register[_ngcontent-%COMP%]{width:100%;margin-top:36px;display:flex;justify-content:center;text-transform:uppercase}.ask-register[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:6px}@media (max-width: 600px){ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-dark-contrast)}.signin-card[_ngcontent-%COMP%]{margin:0;box-shadow:none;min-height:100%;width:100%;max-width:400px}}"]}),e})(),canActivate:[m]}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[g.Bz.forChild(S)],g.Bz]}),e})();var G=c(4466);let Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,r.u5,n.Pc,J,G.m]]}),e})()}}]);