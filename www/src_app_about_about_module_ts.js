"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_about_about_module_ts"],{

/***/ 88057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageRoutingModule": () => (/* binding */ AboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page */ 44518);




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_0__.AboutPage
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ 46985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPageModule": () => (/* binding */ AboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 88057);
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page */ 44518);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 44466);








let AboutPageModule = class AboutPageModule {
};
AboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutPageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_1__.AboutPage]
    })
], AboutPageModule);



/***/ }),

/***/ 44518:
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.page.html?ngResource */ 4687);
/* harmony import */ var _about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.page.scss?ngResource */ 33792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AboutPage = class AboutPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about',
        template: _about_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_about_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AboutPage);



/***/ }),

/***/ 33792:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: var(--ion-color-light);\n  padding: 0;\n  margin: 0;\n}\n\nion-card {\n  box-shadow: none;\n}\n\nion-card.pb-32 {\n  padding-bottom: 32px;\n}\n\np.text {\n  font-size: 17px;\n  letter-spacing: 0.4px;\n}\n\np.text.pt-32 {\n  padding-top: 32px;\n}\n\n.about-container {\n  max-width: 1600px;\n  margin: 0 auto;\n}\n\n.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n  color: black;\n  -webkit-text-fill-color: var(--ion-color-light-tint);\n  /* Will override color (regardless of order) */\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: var(--ion-color-primary-shade);\n}\n\n.separator-line {\n  padding: 3px;\n  width: 250px;\n  border-radius: 2px;\n  background: var(--ion-color-primary);\n}\n\n.map-container {\n  display: flex;\n  justify-content: center;\n}\n\n.try-us-section {\n  display: flex;\n  justify-content: center;\n  padding: 100px 0;\n  margin: 52px 0 0 0;\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.feature-section ion-card-title {\n  font-size: 18px;\n}\n\n.feature-section ion-card-title.heading-card {\n  font-size: 42px;\n  font-weight: bold;\n}\n\n.feature-section ion-card-title ion-text {\n  font-weight: bold;\n  font-size: 32px;\n}\n\n.feature-section .features {\n  display: flex;\n  justify-content: center;\n  height: 300px;\n}\n\n.contact-section {\n  background: var(--ion-color-primary);\n  background: url('about-bg-contact.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n  max-width: 1600px;\n  margin: 0 auto;\n  padding: 16px 0;\n}\n\n.contact-section .left-side {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.contact-section .left-side .heading {\n  font-size: 32px;\n  color: aliceblue;\n  font-weight: 700;\n}\n\n.contact-section .left-side .sub-heading {\n  color: #c9ccce;\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBREU7RUFDRSxvQkFBQTtBQUdKOztBQUFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQkFBQTtBQUlKOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0FBSUY7O0FBREE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0Esb0RBQUE7RUFFRyw4Q0FBQTtFQUNILDhCQUFBO0VBQ0EseURBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFBSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUFJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUNJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFDSTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUNOIiwiZmlsZSI6ImFib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgJi5wYi0zMiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICB9XHJcbn1cclxucC50ZXh0IHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICYucHQtMzIge1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgfVxyXG59XHJcbi5hYm91dC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZy1jYXJkIHtcclxuICBmb250LXNpemU6IDQycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gIGNvbG9yOiBibGFjaztcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKFxyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludFxyXG4gICk7IC8qIFdpbGwgb3ZlcnJpZGUgY29sb3IgKHJlZ2FyZGxlc3Mgb2Ygb3JkZXIpICovXHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxufVxyXG5cclxuLnNlcGFyYXRvci1saW5lIHtcclxuICBwYWRkaW5nOiAzcHg7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuLm1hcC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cnktdXMtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gIG1hcmdpbjogNTJweCAwIDAgMDtcclxuXHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvYWJvdXQtYmctY29udGFjdC5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXNlY3Rpb24ge1xyXG4gIGlvbi1jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICYuaGVhZGluZy1jYXJkIHtcclxuICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmZlYXR1cmVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWJvdXQvYWJvdXQtYmctY29udGFjdC5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xyXG5cclxuICBtYXgtd2lkdGg6IDE2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgLmxlZnQtc2lkZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgLnN1Yi1oZWFkaW5nIHtcclxuICAgICAgY29sb3I6IHJnYigyMDEsIDIwNCwgMjA2KTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4687:
/*!**************************************************!*\
  !*** ./src/app/about/about.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>About Page</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"about-container\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card color=\"light\" class=\"ion-margin-top pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\">Application</ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-horizontal\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  A online property management solution for real estate and\r\n                  physical property management. This can include residential,\r\n                  commercial, and land real estate. a software developed to\r\n                  connect property managers and potential buyers.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  Whether you operate 1 to 100 properties this app will help you\r\n                  advertise, manage and sell your properties to potential\r\n                  buyers.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"6\" class=\"map-container\">\r\n          <img src=\"assets/images/about/about-map.svg\" alt=\"map image\" />\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"6\">\r\n          <ion-card color=\"light\" class=\"pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\">MAP VIEW</ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-bottom\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  Maps can be a useful tool for viewing properties location &\r\n                  filter them by types. this also help us to know distances so\r\n                  that we know how far away one thing is from another.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  You might not necessarily want to find the fastest route from\r\n                  property A to property B, you might want to take the scenic\r\n                  route. Knowing how to spot mountains, lakes, coastline and\r\n                  historic sites on a map helps you to plan which property to\r\n                  visit.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <div class=\"try-us-section\">\r\n    <ion-button color=\"success\" size=\"large\" routerLink=\"/user/register\"\r\n      >TRY US NOW</ion-button\r\n    >\r\n  </div>\r\n  <div class=\"about-container\">\r\n    <ion-grid class=\"feature-section\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card color=\"light\" class=\"pb-32\">\r\n            <ion-card-header>\r\n              <ion-card-title class=\"heading-card\"> PROPERTIES </ion-card-title>\r\n            </ion-card-header>\r\n            <div class=\"separator-line\"></div>\r\n            <ion-card-content class=\"ion-padding-bottom\">\r\n              <p class=\"text\">\r\n                <ion-text color=\"dark\">\r\n                  <strong>\r\n                    Do you spend way too much time looking for a Real Estate\r\n                    Property to buy?\r\n                  </strong>\r\n                  <br />\r\n                  dont worry we have you covered, We have hundreds of high\r\n                  quality properties ready to sell. you can use the search field\r\n                  to find properties and to see basic information(price,\r\n                  address, types, etc...) about the desired property.\r\n                </ion-text>\r\n              </p>\r\n              <p class=\"text ion-padding-top\">\r\n                <ion-text color=\"dark\">\r\n                  <strong>Do you own a property you wanted to sell?</strong>\r\n                  <br />\r\n                  Our application will help advertise your property to potential\r\n                  buyers.\r\n                </ion-text>\r\n              </p>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Connect</ion-text> with people\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-connection.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Buy</ion-text> new properties\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-buy.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"4\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                <ion-text color=\"primary\">Sell</ion-text> your properties\r\n              </ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"features\">\r\n              <img src=\"assets/images/about/about-sell.svg\" alt=\"image\" />\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <div style=\"height: 100px\"></div>\r\n  </div>\r\n\r\n  <div class=\"contact-section\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"5\" sizeXl=\"6\" class=\"left-side\">\r\n          <div class=\"heading\">Let's get in touch</div>\r\n          <div class=\"sub-heading\">\r\n            Have an inquiry or some feedback for us?\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"7\" sizeXl=\"6\">\r\n          <app-contact-form> </app-contact-form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map