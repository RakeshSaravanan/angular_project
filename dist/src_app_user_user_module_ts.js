"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_user_module_ts"],{

/***/ 9668:
/*!**********************************************!*\
  !*** ./src/app/shared/enums/notification.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
var NotificationType;
(function (NotificationType) {
    NotificationType["enquiry"] = "enquiry";
    NotificationType["property"] = "property";
    NotificationType["app"] = "app";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ 18218:
/*!******************************************!*\
  !*** ./src/app/user/auth-guest.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuestGuard": () => (/* binding */ AuthGuestGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 1584);




let AuthGuestGuard = class AuthGuestGuard {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = this.user.user;
            // if user is guest in
            if (!user) {
                this.router.navigate(['/map']);
                return false;
            }
            return true;
        });
    }
};
AuthGuestGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuestGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuestGuard);



/***/ }),

/***/ 32881:
/*!************************************!*\
  !*** ./src/app/user/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ 1584);




let AuthGuard = class AuthGuard {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    canActivate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const user = this.user.user;
            // if user is signed in
            if (!!user) {
                this.router.navigate(['/map']);
                return false;
            }
            return true;
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_0__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 92384:
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 89334);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 42378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/custom-validators.directive */ 92414);






let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(fb, customValidators) {
        this.fb = fb;
        this.customValidators = customValidators;
        this.error = false;
        this.changePassForm = this.fb.group({
            passwordCurrent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            passwordNew: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    this.customValidators.patternValidator(/\d/, { hasNumber: true }),
                    this.customValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    this.customValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
                    this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacters: true })
                ]],
            passwordConfirm: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8),
                    this.customValidators.patternValidator(/\d/, { hasNumber: true }),
                    this.customValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    this.customValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
                    this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacters: true })
                ]],
        });
    }
    ngOnInit() { }
    submit() {
        if (this.changePassForm.invalid) {
            this.error = true;
            return;
        }
        console.log(this.changePassForm.value);
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__.CustomValidatorsDirective }
];
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-change-password',
        template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordComponent);



/***/ }),

/***/ 70873:
/*!***************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.component.html?ngResource */ 43774);
/* harmony import */ var _notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.scss?ngResource */ 88417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/notification */ 9668);





let NotificationsComponent = class NotificationsComponent {
    constructor() {
        this.notifications = [
            {
                id: '01',
                title: 'Property have been added.',
                type: 'property',
                date: new Date()
            },
            {
                id: '02',
                title: 'Property have been added.',
                type: 'property',
                date: new Date()
            },
            {
                id: '03',
                title: 'Test@email.com have have sent you enquiries',
                type: 'enquiry',
                date: new Date('2021/8/6')
            },
            {
                id: '04',
                title: 'Success, your Email have been verified!!!',
                type: 'app',
                date: new Date('2021/8/5')
            },
            {
                id: '05',
                title: 'Welcome friend, Account created',
                type: 'app',
                date: new Date('2021/8/5')
            }
        ];
    }
    ngOnInit() { }
    itemClicked() {
        console.log('item is clicked');
    }
    getItemBadge(type) {
        switch (type) {
            case src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationType.enquiry:
                return 'secondary';
            case src_app_shared_enums_notification__WEBPACK_IMPORTED_MODULE_2__.NotificationType.property:
                return 'success';
            default:
                return 'primary';
        }
    }
};
NotificationsComponent.ctorParameters = () => [];
NotificationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notifications',
        template: _notifications_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_notifications_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsComponent);



/***/ }),

/***/ 69080:
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 71959);
/* harmony import */ var _profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.component.scss?ngResource */ 65817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 1584);





let ProfileComponent = class ProfileComponent {
    constructor(userService) {
        this.userService = userService;
        this.imgUrl = './assets/images/avatar.png';
        this.userService.user$.subscribe(data => this.user = data);
    }
    ngOnInit() {
    }
    toggleUpload() {
        const input = document.getElementById('image-upload');
        input.click();
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (ev) => {
                this.imgUrl = ev.target.result;
                console.log(this.imgUrl);
            };
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfileComponent);



/***/ }),

/***/ 42859:
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component.html?ngResource */ 48740);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 63602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/directives/custom-validators.directive */ 92414);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ 1584);









let RegisterComponent = class RegisterComponent {
    constructor(fb, customValidators, toastCtrl, loadingController, router, user) {
        this.fb = fb;
        this.customValidators = customValidators;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.router = router;
        this.user = user;
        this.error = false;
        this.registerForm = this.fb.group({
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(4)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                    this.customValidators.patternValidator(/\d/, { hasNumber: true }),
                    this.customValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
                    this.customValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
                    this.customValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacters: true })
                ]],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            termService: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        }, {
            validators: this.customValidators.isDifferent('password', 'confirm', 'notConfirmed')
        });
    }
    ngOnInit() { }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (this.registerForm.invalid) {
                this.error = true;
                return;
            }
            const loading = yield this.presentLoading();
            loading.present();
            setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const { fullName, email, password } = this.registerForm.value;
                const result = yield this.user.register(fullName, email, password);
                if (!result.error) {
                    loading.dismiss();
                    yield this.showToast('Success, registration is complete.');
                    yield this.router.navigateByUrl('/user/account/profile');
                }
            }), 1000);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
        });
    }
    showToast(message, color = 'success') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color
            });
            toast.present();
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_shared_directives_custom_validators_directive__WEBPACK_IMPORTED_MODULE_2__.CustomValidatorsDirective },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterComponent);



/***/ }),

/***/ 77973:
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.component.html?ngResource */ 15169);
/* harmony import */ var _signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.component.scss?ngResource */ 77585);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ 1584);








let SigninComponent = class SigninComponent {
    constructor(fb, user, toastCtrl, loadingController, router) {
        this.fb = fb;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.router = router;
        this.error = false;
        this.authFailed = false;
        this.signinForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    ngOnInit() {
    }
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.signinForm.invalid) {
                this.error = true;
                return;
            }
            const loading = yield this.presentLoading();
            loading.present();
            const { email, password } = this.signinForm.value;
            const errMssg = 'Something went wrong, try again later.';
            try {
                const result = yield this.user.signIn(email, password);
                yield loading.dismiss();
                if (result.error) {
                    yield this.showToast(result.error.message || errMssg, 'danger');
                    return;
                }
                yield this.showToast('Success, You are logged in');
                this.router.navigateByUrl('/map');
            }
            catch (error) {
                yield loading.dismiss();
                yield this.showToast(errMssg, 'danger');
            }
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
            });
        });
    }
    showToast(message, color = 'success') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 2000,
                color
            });
            toast.present();
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SigninComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-signin',
        template: _signin_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signin_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SigninComponent);



/***/ }),

/***/ 20454:
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": () => (/* binding */ UserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _auth_guest_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-guest.guard */ 18218);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 32881);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password/change-password.component */ 92384);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications/notifications.component */ 70873);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ 69080);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 42859);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ 77973);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.page */ 18169);











const routes = [
    {
        path: '',
        redirectTo: '/user/account',
        pathMatch: 'full'
    },
    {
        path: 'account',
        component: _user_page__WEBPACK_IMPORTED_MODULE_7__.UserPage,
        children: [
            {
                path: '',
                redirectTo: '/user/account/profile',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent
            },
            {
                path: 'change-password',
                component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent
            },
            {
                path: 'notifications',
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__.NotificationsComponent
            },
        ],
        canActivate: [_auth_guest_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuestGuard]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__.SigninComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    })
], UserPageRoutingModule);



/***/ }),

/***/ 88524:
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": () => (/* binding */ UserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 20454);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.page */ 18169);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 77973);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 42859);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password/change-password.component */ 92384);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ 69080);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications/notifications.component */ 70873);













let UserPageModule = class UserPageModule {
};
UserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ],
        declarations: [
            _user_page__WEBPACK_IMPORTED_MODULE_2__.UserPage,
            _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent,
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordComponent,
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileComponent,
            _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_7__.NotificationsComponent
        ]
    })
], UserPageModule);



/***/ }),

/***/ 18169:
/*!***********************************!*\
  !*** ./src/app/user/user.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": () => (/* binding */ UserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page.html?ngResource */ 87493);
/* harmony import */ var _user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page.scss?ngResource */ 35823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let UserPage = class UserPage {
    constructor() { }
    ngOnInit() {
    }
};
UserPage.ctorParameters = () => [];
UserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-user',
        template: _user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPage);



/***/ }),

/***/ 42378:
/*!********************************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.change-pass-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.change-pass-card {\n  width: 100%;\n  max-width: 450px;\n}\n\n.change-pass-card .title {\n  font-size: 20px;\n  font-weight: bold;\n  color: var(--ion-color-dark);\n}\n\n.change-pass-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n@media (max-width: 600px) {\n  .change-pass-card {\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FBRUo7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFFRjtBQUNGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3MtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDMwcHggYXV0byAwO1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3MtY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jaGFuZ2UtcGFzcy1jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 88417:
/*!****************************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.notification-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\nion-item {\n  --inner-padding-bottom: 16px;\n  --inner-padding-top: 16px;\n}\n\nion-item .item-right-side {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\nion-item .item-right-side ion-badge {\n  margin: 0 8px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBQUE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBRkU7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhJO0VBQ0UsaUJBQUE7QUFLTiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ubm90aWZpY2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgLS1pbm5lci1wYWRkaW5nLXRvcDogMTZweDtcclxuICAuaXRlbS1yaWdodC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24tYmFkZ2Uge1xyXG4gICAgICBtYXJnaW46IDAgOHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 65817:
/*!****************************************************************!*\
  !*** ./src/app/user/profile/profile.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\nion-card {\n  box-shadow: none;\n}\n\n.profile-container {\n  min-height: 100%;\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.profile-img-container {\n  padding: 16px 0;\n}\n\n.profile-img-container img {\n  border-radius: 16px;\n  height: auto;\n  width: 100%;\n  max-height: 300px;\n  max-width: 300px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-input {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-colo-light);\n}\n\n.app-use-info {\n  padding: 16px 0;\n}\n\n.app-use-info .item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 12px 0;\n}\n\n.app-use-info .item ion-icon {\n  font-size: 24px;\n  margin-right: 4px;\n}\n\n.app-use-info .item ion-text {\n  font-size: 16px;\n  margin-right: 4px;\n}\n\n.form-information ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --padding-end: 0;\n  --padding-start: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin: 0 0 16px 0;\n}\n\n.form-information ion-item ion-label {\n  --color: #8794a4;\n}\n\n.form-information ion-item ion-input,\n.form-information ion-item ion-textarea {\n  --padding-start: 12px;\n  padding: 6px;\n  border: 1px solid rgba(0, 57, 100, 0.418);\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.form-information ion-item ion-input::placeholder,\n.form-information ion-item ion-textarea::placeholder {\n  font-size: 15px;\n}\n\n.activities-section {\n  margin: 90px 0 0 0;\n}\n\n.activities-section .heading {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0 0 24px 0;\n  border-bottom: 5px solid var(--ion-color-primary);\n}\n\n.activities-section .activities-empty {\n  height: 300px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.activities-section .activities-empty h1 {\n  display: flex;\n  align-items: center;\n  font-size: 35px;\n  letter-spacing: 1.5px;\n}\n\n.activities-section .activities-empty h1 ion-icon {\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBSEU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkE7RUFDRSwwQ0FBQTtFQUNBLDRCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFRTjs7QUFOSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVFOOztBQUhFO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFMSTtFQUNFLGdCQUFBO0FBT047O0FBTEk7O0VBRUUscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU9OOztBQU5NOztFQUNFLGVBQUE7QUFTUjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBTEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFPSjs7QUFMRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFOSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVFOOztBQVBNO0VBQ0UsZUFBQTtBQVNSIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbmlvbi1jYXJkIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5wcm9maWxlLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4ucHJvZmlsZS1pbWctY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbi5pbWFnZS1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sby1saWdodCk7XHJcbn1cclxuLmFwcC11c2UtaW5mbyB7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAxMnB4IDA7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb3JtLWluZm9ybWF0aW9uIHtcclxuICBpb24taXRlbSB7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgLS1jb2xvcjogIzg3OTRhNDtcclxuICAgIH1cclxuICAgIGlvbi1pbnB1dCxcclxuICAgIGlvbi10ZXh0YXJlYSB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTJweDtcclxuICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDU3LCAxMDAsIDAuNDE4KTtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpdml0aWVzLXNlY3Rpb24ge1xyXG4gIG1hcmdpbjogOTBweCAwIDAgMDtcclxuICAuaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMCAyNHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICAuYWN0aXZpdGllcy1lbXB0eSB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaDEge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 63602:
/*!******************************************************************!*\
  !*** ./src/app/user/register/register.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.register-container {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.register-card {\n  width: 100%;\n  max-width: 400px;\n}\n\n.register-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-signin {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n\n.ask-signin a {\n  margin-left: 6px;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n\n  .register-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQURFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0FBR0o7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFERTtFQUNFLGdCQUFBO0FBR0o7O0FBQUE7RUFDRTtJQUNFLDRDQUFBO0VBR0Y7O0VBREE7SUFDRSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQUlGO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5yZWdpc3Rlci1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jYXJkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsZXJ0LWVycm9ycyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA2cHggMCAwIDA7XHJcbn1cclxuXHJcbi5hc2stc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xyXG4gIH1cclxuICAucmVnaXN0ZXItY2FyZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 77585:
/*!**************************************************************!*\
  !*** ./src/app/user/signin/signin.component.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n}\n\n.signin-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n  min-height: calc(100% - 56px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.signin-card {\n  width: 100%;\n  max-width: 400px;\n}\n\n.signin-card ion-item {\n  margin-top: 8px;\n  --background: var(--ion-color-light);\n}\n\n.logo-container {\n  margin: 30px auto 0;\n  max-width: 200px;\n  text-align: center;\n}\n\n.alert-errors {\n  width: 100%;\n  margin: 6px 0 0 0;\n}\n\n.ask-register {\n  width: 100%;\n  margin-top: 36px;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n}\n\n.ask-register a {\n  margin-left: 6px;\n}\n\n@media (max-width: 600px) {\n  ion-content {\n    --background: var(--ion-color-dark-contrast);\n  }\n\n  .signin-card {\n    margin: 0;\n    box-shadow: none;\n    min-height: 100%;\n    width: 100%;\n    max-width: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBRUY7O0FBREU7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7QUFHSjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUVGOztBQURFO0VBQ0UsZ0JBQUE7QUFHSjs7QUFBQTtFQUNFO0lBQ0UsNENBQUE7RUFHRjs7RUFEQTtJQUNFLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbi5zaWduaW4tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaWduaW4tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMzBweCBhdXRvIDA7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbGVydC1lcnJvcnMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNnB4IDAgMCAwO1xyXG59XHJcblxyXG4uYXNrLXJlZ2lzdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAzNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xyXG4gIH1cclxuICAuc2lnbmluLWNhcmQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 35823:
/*!************************************************!*\
  !*** ./src/app/user/user.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  --border: 1px solid\n    var(\n      --ion-item-border-color,\n      var(--ion-border-color, var(--ion-color-step-250, rgba(0, 0, 0, 0.13)))\n    );\n  box-shadow: 2px 0px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7Ozs7S0FBQTtFQUtBLDJDQUFBO0FBQ0YiLCJmaWxlIjoidXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZFxyXG4gICAgdmFyKFxyXG4gICAgICAtLWlvbi1pdGVtLWJvcmRlci1jb2xvcixcclxuICAgICAgdmFyKC0taW9uLWJvcmRlci1jb2xvciwgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMjUwLCByZ2JhKDAsIDAsIDAsIDAuMTMpKSlcclxuICAgICk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDBweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 89334:
/*!********************************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"change-pass-container\">\r\n    <ion-card class=\"change-pass-card\">\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <div class=\"logo-container\">\r\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\r\n          <div class=\"source\"></div>\r\n        </div>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <div class=\"title\">Change Passowrd</div>\r\n        <div class=\"sub-title\">\r\n          Your new Password must be different from your previous Password\r\n        </div>\r\n        <form [formGroup]=\"changePassForm\" (submit)=\"submit()\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password Current</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                formControlName=\"passwordCurrent\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password New</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                formControlName=\"passwordNew\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password Confirm</ion-label>\r\n              <ion-input\r\n                type=\"password\"\r\n                formControlName=\"passwordConfirm\"\r\n              ></ion-input>\r\n            </ion-item>\r\n\r\n            <div>\r\n              <ul>\r\n                <li>Passwords must be atleast 8 characters log.</li>\r\n                <li>New Password and Confirm Password must be the same.</li>\r\n                <li>\r\n                  Passowrd must contain a number, special charaters, cappitalize\r\n                  & small case\r\n                </li>\r\n              </ul>\r\n            </div>\r\n\r\n            <ion-button\r\n              size=\"large\"\r\n              class=\"ion-margin-top\"\r\n              expand=\"full\"\r\n              color=\"primary\"\r\n              type=\"submit\"\r\n            >\r\n              Submit\r\n            </ion-button>\r\n          </ion-list>\r\n        </form>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 43774:
/*!****************************************************************************!*\
  !*** ./src/app/user/notifications/notifications.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"notification-container ion-padding-vertical\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title> My Notifications </ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <ion-list>\r\n                <ion-item\r\n                  *ngFor=\"let item of notifications\"\r\n                  button\r\n                  (click)=\"itemClicked()\"\r\n                >\r\n                  <ion-label>{{ item.title }}</ion-label>\r\n                  <div class=\"item-right-side\">\r\n                    <ion-badge [color]=\"getItemBadge(item.type)\">{{\r\n                      item.type\r\n                    }}</ion-badge>\r\n                    {{ item.date | date }}\r\n                  </div>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 71959:
/*!****************************************************************!*\
  !*** ./src/app/user/profile/profile.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"profile-container ion-padding-vertical\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeMd=\"4\">\r\n          <ion-card>\r\n            <ion-card-header class=\"ion-no-padding\">\r\n              <ion-card-title class=\"ion-padding\"> My Profile, </ion-card-title>\r\n              <div class=\"profile-img-container\">\r\n                <img [src]=\"imgUrl\" />\r\n              </div>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <input\r\n                type=\"file\"\r\n                (change)=\"onSelectFile($event)\"\r\n                accept=\"image/*\"\r\n                [hidden]=\"true\"\r\n                id=\"image-upload\"\r\n              />\r\n              <ion-button\r\n                color=\"primary\"\r\n                expand=\"block\"\r\n                (click)=\"toggleUpload()\"\r\n              >\r\n                Upload Image\r\n              </ion-button>\r\n\r\n              <div class=\"app-use-info\">\r\n                <div class=\"item\">\r\n                  <ion-icon name=\"flame-outline\"></ion-icon>\r\n                  <ion-text>Joined {{ user?.created | date }}</ion-text>\r\n                </div>\r\n                <div class=\"item\">\r\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\r\n                  <ion-text>Visited For 1 day</ion-text>\r\n                </div>\r\n              </div>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n\r\n        <ion-col size=\"12\" sizeMd=\"8\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title> My Information </ion-card-title>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n              <form class=\"form-information\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Email *</ion-label>\r\n                  <ion-input type=\"email\" [value]=\"user?.email\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Full Name *</ion-label>\r\n                  <ion-input type=\"text\" [value]=\"user?.fullName\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">About Me:</ion-label>\r\n                  <ion-textarea\r\n                    placeholder=\"...\"\r\n                    [value]=\"user?.aboutMe\"\r\n                  ></ion-textarea>\r\n                </ion-item>\r\n\r\n                <ion-item lines=\"none\">\r\n                  <ion-label position=\"stacked\">Location</ion-label>\r\n                  <ion-input type=\"text\" [value]=\"user?.location\"></ion-input>\r\n                </ion-item>\r\n\r\n                <div class=\"ion-text-end ion-padding-vertical\">\r\n                  <ion-button>SAVE CHANGES</ion-button>\r\n                </div>\r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"activities-section\">\r\n          <div class=\"heading\">My Activities</div>\r\n          <div class=\"activities-empty\">\r\n            <h1>EMPTY<ion-icon name=\"alert-circle-outline\"></ion-icon></h1>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 48740:
/*!******************************************************************!*\
  !*** ./src/app/user/register/register.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Register Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"register-container\">\r\n    <ion-card class=\"register-card\">\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <div class=\"logo-container\">\r\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\r\n          <div class=\"source\"></div>\r\n        </div>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <form [formGroup]=\"registerForm\" (submit)=\"submit()\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Full Name</ion-label>\r\n              <ion-input type=\"text\" formControlName=\"fullName\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div\r\n              class=\"alert-errors\"\r\n              *ngIf=\"error && registerForm.get('fullName').errors\"\r\n            >\r\n              <app-alert-card\r\n                content=\"Full Name is too short.\"\r\n              ></app-alert-card>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div\r\n              class=\"alert-errors\"\r\n              *ngIf=\"error && registerForm.get('email').errors\"\r\n            >\r\n              <app-alert-card content=\"Email is not valid.\"></app-alert-card>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div\r\n              class=\"alert-errors\"\r\n              *ngIf=\"error && registerForm.get('password').errors\"\r\n            >\r\n              <app-alert-card\r\n                content=\"Length needs to be 8+ long & contain a\r\n                (number, special characters, small case & capitalize).\"\r\n              ></app-alert-card>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Confirm Password</ion-label>\r\n              <ion-input type=\"password\" formControlName=\"confirm\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div\r\n              class=\"alert-errors\"\r\n              *ngIf=\"error && registerForm.errors?.notConfirmed\"\r\n            >\r\n              <app-alert-card\r\n                content=\"Password not confirmed.\"\r\n              ></app-alert-card>\r\n            </div>\r\n\r\n            <div class=\"ion-padding-vertical\">\r\n              By continuing, you agree to our <a>User Agreement</a> and\r\n              <a>Privacy Policy</a>.\r\n            </div>\r\n\r\n            <ion-button\r\n              size=\"large\"\r\n              class=\"ion-margin-top\"\r\n              expand=\"full\"\r\n              color=\"primary\"\r\n              type=\"submit\"\r\n            >\r\n              Sign Up\r\n            </ion-button>\r\n\r\n            <div class=\"ask-signin\">\r\n              Already have an Account?\r\n              <a [routerLink]=\"['/user/signin']\">Sign in</a>\r\n            </div>\r\n          </ion-list>\r\n        </form>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ }),

/***/ 15169:
/*!**************************************************************!*\
  !*** ./src/app/user/signin/signin.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Sign In Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"signin-container\">\r\n    <ion-card class=\"signin-card\">\r\n      <ion-card-header class=\"ion-text-center\">\r\n        <div class=\"logo-container\">\r\n          <img src=\"../assets/images/logo.png\" alt=\"logo\" />\r\n          <div class=\"source\"></div>\r\n        </div>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <form [formGroup]=\"signinForm\" (submit)=\"submit()\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n            <div\r\n              class=\"alert-errors\"\r\n              *ngIf=\"error && signinForm.get('email').errors\"\r\n            >\r\n              <app-alert-card content=\"Email is not valid.\"></app-alert-card>\r\n            </div>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"alert-errors\" *ngIf=\"authFailed\">\r\n              <app-alert-card\r\n                content=\"Wrong Email or Password.\"\r\n              ></app-alert-card>\r\n            </div>\r\n\r\n            <ion-button\r\n              size=\"large\"\r\n              class=\"ion-margin-top\"\r\n              expand=\"full\"\r\n              color=\"primary\"\r\n              type=\"submit\"\r\n            >\r\n              Sign In\r\n            </ion-button>\r\n\r\n            <div class=\"ask-register\">\r\n              First time here? <a [routerLink]=\"['/user/register']\">Register</a>\r\n            </div>\r\n          </ion-list>\r\n        </form>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ }),

/***/ 87493:
/*!************************************************!*\
  !*** ./src/app/user/user.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\" class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-title>Account Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-router-outlet></ion-router-outlet>\r\n  </div>\r\n\r\n  <ion-tabs>\r\n    <ion-tab-bar slot=\"top\">\r\n      <ion-tab-button tab=\"profile\">\r\n        <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n        <ion-label>Profile</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"change-password\">\r\n        <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n        <ion-label>Change Password</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"notifications\">\r\n        <ion-icon name=\"notifications-outline\"></ion-icon>\r\n        <ion-label>Notifications</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n  </ion-tabs>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user_user_module_ts.js.map