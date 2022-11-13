"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 44737:
/*!*********************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PropertiesCoordinatesComponent": () => (/* binding */ PropertiesCoordinatesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _properties_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./properties-coordinates.component.html?ngResource */ 98369);
/* harmony import */ var _properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties-coordinates.component.scss?ngResource */ 36874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let PropertiesCoordinatesComponent = class PropertiesCoordinatesComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.title = 'Set Property Marker';
    }
    ngOnInit() { }
    setCoord(event) {
        this.coord = event;
    }
    confirmed() {
        this.modalCtrl.dismiss(this.coord);
    }
    dismissModal() {
        this.modalCtrl.dismiss();
    }
};
PropertiesCoordinatesComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
PropertiesCoordinatesComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
PropertiesCoordinatesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-properties-coordinates',
        template: _properties_coordinates_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_properties_coordinates_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PropertiesCoordinatesComponent);



/***/ }),

/***/ 35144:
/*!*************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsCoordDefaultComponent": () => (/* binding */ SettingsCoordDefaultComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_coord_default_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-coord-default.component.html?ngResource */ 25734);
/* harmony import */ var _settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-coord-default.component.scss?ngResource */ 61983);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_properties_properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/properties/properties-coordinates-modal/properties-coordinates.component */ 44737);
/* harmony import */ var src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/storage/storage.service */ 53328);







let SettingsCoordDefaultComponent = class SettingsCoordDefaultComponent {
    constructor(toastController, storageService, modalCtrl) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.modalCtrl = modalCtrl;
        this.coord = { lat: 8.947416086535465, lng: 125.5451552207221 };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storageService.init();
            const coord = yield this.storageService.getCoord();
            if (coord) {
                this.coord = coord;
            }
        });
    }
    setCoord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.storageService.setCoord(this.coord);
            const toast = yield this.toastController.create({
                color: 'success',
                message: 'Your settings have been saved.',
                duration: 2000
            });
            ;
            toast.present();
        });
    }
    resetCoord() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.coord = { lat: 8.947416086535465, lng: 125.5451552207221 };
            this.storageService.setCoord(this.coord);
            const toast = yield this.toastController.create({
                color: 'success',
                message: 'Your settings have been Reset.',
                duration: 2000
            });
            ;
            toast.present();
        });
    }
    openMap() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_properties_properties_coordinates_modal_properties_coordinates_component__WEBPACK_IMPORTED_MODULE_2__.PropertiesCoordinatesComponent,
                componentProps: {
                    title: 'Select desired location.'
                }
            });
            yield modal.present();
            const { data } = yield modal.onDidDismiss();
            if (data) {
                const { lat, lng } = data;
                this.coord = { lat, lng };
            }
        });
    }
};
SettingsCoordDefaultComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
SettingsCoordDefaultComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-settings-coord-default',
        template: _settings_coord_default_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_coord_default_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsCoordDefaultComponent);



/***/ }),

/***/ 91836:
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 9561:
/*!*********************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsThemeComponent": () => (/* binding */ SettingsThemeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-theme.component.html?ngResource */ 56511);
/* harmony import */ var _settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-theme.component.scss?ngResource */ 86545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/storage/storage.service */ 53328);






let SettingsThemeComponent = class SettingsThemeComponent {
    constructor(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.darkTheme = false;
    }
    ngAfterViewInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.init();
            this.darkTheme = yield this.storage.getDartTheme();
        });
    }
    switchDarkMode(event) {
        if (event.detail.checked) {
            document.body.classList.add('dark');
            this.storage.setDarkTheme(true);
        }
        else {
            document.body.classList.remove('dark');
            this.storage.setDarkTheme(false);
        }
    }
};
SettingsThemeComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: src_app_shared_services_storage_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
SettingsThemeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-settings-theme',
        template: _settings_theme_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_theme_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsThemeComponent);



/***/ }),

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 91836);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var _settings_theme_settings_theme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-theme/settings-theme.component */ 9561);
/* harmony import */ var _settings_coord_default_settings_coord_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-coord-default/settings-coord-default.component */ 35144);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 44466);










let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage, _settings_theme_settings_theme_component__WEBPACK_IMPORTED_MODULE_2__.SettingsThemeComponent, _settings_coord_default_settings_coord_default_component__WEBPACK_IMPORTED_MODULE_3__.SettingsCoordDefaultComponent]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 75375);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 2282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SettingsPage = class SettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
SettingsPage.ctorParameters = () => [];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 36874:
/*!**********************************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-fab {\n  margin-top: 90px;\n}\n\n.notice-container {\n  width: 200px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  margin-top: 16px;\n  color: var(--ion-color-dark);\n  background: var(--ion-color-primary);\n  display: flex;\n  align-items: center;\n}\n\n.notice-container ion-icon {\n  font-size: 24px;\n  margin-left: 8px;\n}\n\n.page-container {\n  background-color: var(--ion-color-light-tint);\n  height: 100%;\n}\n\n.btn-contianer {\n  z-index: 400;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.btn-contianer ion-button {\n  --padding-end: 24px;\n  --padding-start: 24px;\n  margin: 0 0 32px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnRpZXMtY29vcmRpbmF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUVBO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUVGOztBQURFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoicHJvcGVydGllcy1jb29yZGluYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWIge1xyXG4gIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuLm5vdGljZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmJ0bi1jb250aWFuZXIge1xyXG4gIHotaW5kZXg6IDQwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyNHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMzJweCAwO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 61983:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = ".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n\nion-button {\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\n\nion-button.reset {\n  --background: transparent;\n  --background-hover: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLWNvb3JkLWRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxvQ0FBQTtBQUFGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FBRUoiLCJmaWxlIjoic2V0dGluZ3MtY29vcmQtZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgbWFyZ2luLXRvcDogNTBweCAwIDAgMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAmLnJlc2V0IHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 86545:
/*!**********************************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".heading {\n  font-size: 24px;\n  line-height: 150%;\n  margin-top: 50px 0 0 0;\n  font-weight: bold;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXRoZW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzZXR0aW5ncy10aGVtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgbWFyZ2luLXRvcDogNTBweCAwIDAgMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2282:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".settings-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQUNGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 98369:
/*!**********************************************************************************************************!*\
  !*** ./src/app/properties/properties-coordinates-modal/properties-coordinates.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent>\r\n  <ion-toolbar>\r\n    <ion-title>{{ title }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismissModal()\">\r\n        <ion-icon name=\"close-outline\" style=\"font-size: 28px\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"page-container\">\r\n    <app-map-search-field\r\n      (selectedLocation)=\"mapLeaflet.setMapCenter($event)\"\r\n    ></app-map-search-field>\r\n    <app-map-leaflet\r\n      #mapLeaflet\r\n      [showPropertyMarkers]=\"false\"\r\n      [clickAddMarker]=\"true\"\r\n      (clickedAt)=\"setCoord($event)\"\r\n    ></app-map-leaflet>\r\n  </div>\r\n\r\n  <div class=\"btn-contianer\" *ngIf=\"coord\">\r\n    <ion-button color=\"success\" (click)=\"confirmed()\">Confirm</ion-button>\r\n  </div>\r\n\r\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\">\r\n    <ion-fab-button color=\"primary\">\r\n      <ion-icon name=\"help-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"start\">\r\n      <div class=\"notice-container\">\r\n        <ion-text color=\"light\">\r\n          Click/Tap at the map to place the marker.\r\n        </ion-text>\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </div>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ }),

/***/ 25734:
/*!**************************************************************************************************!*\
  !*** ./src/app/settings/settings-coord-default/settings-coord-default.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-margin-top\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"heading ion-padding\">\r\n          <ion-text color=\"dark\">Change Default Coordinates</ion-text>\r\n          <ion-button size=\"small\" class=\"ion-margin-start\" (click)=\"openMap()\">\r\n            open map <ion-icon name=\"map-outline\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" sizeLg=\"6\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Latitude:</ion-label>\r\n          <ion-input [(ngModel)]=\"coord.lat\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\" sizeLg=\"6\">\r\n        <ion-item>\r\n          <ion-label position=\"fixed\">Longitude:</ion-label>\r\n          <ion-input [(ngModel)]=\"coord.lng\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"12\">\r\n        <ion-button color=\"primary\" (click)=\"setCoord()\">\r\n          set Coordinates</ion-button\r\n        >\r\n        <ion-button class=\"reset ion-margin-start\" (click)=\"resetCoord()\">\r\n          Reset Coordinates\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n";

/***/ }),

/***/ 56511:
/*!**********************************************************************************!*\
  !*** ./src/app/settings/settings-theme/settings-theme.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"ion-margin-top\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-no-padding\">\r\n        <div class=\"heading ion-padding\">\r\n          <ion-text color=\"dark\">Change Application Theme -</ion-text>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-item>\r\n          <ion-icon\r\n            style=\"margin: 0 6px 0 0\"\r\n            name=\"moon\"\r\n            color=\"dark\"\r\n            *ngIf=\"darkTheme; else sunny\"\r\n          ></ion-icon>\r\n          <ion-label color=\"dark\"> Theme Switcher</ion-label>\r\n\r\n          <ion-toggle\r\n            [(ngModel)]=\"darkTheme\"\r\n            (ionChange)=\"switchDarkMode($event)\"\r\n          ></ion-toggle>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</div>\r\n\r\n<ng-template #sunny>\r\n  <ion-icon style=\"margin: 0 6px 0 0\" name=\"sunny\" color=\"warning\"></ion-icon\r\n></ng-template>\r\n";

/***/ }),

/***/ 75375:
/*!********************************************************!*\
  !*** ./src/app/settings/settings.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Settings Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"settings-container ion-padding-vertical\">\r\n    <app-settings-theme></app-settings-theme>\r\n    <app-settings-coord-default></app-settings-coord-default>\r\n  </div>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts.js.map