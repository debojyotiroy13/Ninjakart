(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_seller_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/seller/product.component */ "./src/app/views/seller/product.component.ts");
/* harmony import */ var _views_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/buyer/buyer.component */ "./src/app/views/buyer/buyer.component.ts");
/* harmony import */ var _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/admin/admin.component */ "./src/app/views/admin/admin.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_login_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/login/signup.component */ "./src/app/views/login/signup.component.ts");
/* harmony import */ var _views_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/buyer/product.details.component */ "./src/app/views/buyer/product.details.component.ts");
/* harmony import */ var _views_buyer_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/buyer/cart.component */ "./src/app/views/buyer/cart.component.ts");










var routes = [
    { path: 'sell', component: _views_seller_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], canActivate: [] },
    { path: 'cart', component: _views_buyer_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], canActivate: [] },
    { path: 'home', component: _views_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"] },
    { path: 'admin', component: _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"], canActivate: [] },
    { path: 'login', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _views_login_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
    { path: 'product/:id', component: _views_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"] },
    { path: '**', component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.table{\n    width:100%;\n}\n.matFormField{\n    padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbn1cbi5tYXRGb3JtRmllbGR7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <span><i class=\"material-icons\" style=\"font-size: 35px;\" routerLink=\"/home\">shop</i></span>\n    <span class=\"example-spacer\">NinjaKart</span>\n    \n    <button mat-button routerLink=\"/home\"><i class=\"material-icons\">home</i><span style=\"padding-left:5px;padding-top: 5px;\">Home</span></button>\n    <button mat-button routerLink=\"/cart\" ><i class=\"material-icons\">shopping_basket</i><span style=\"padding-left:5px;padding-top: 5px;\">Cart</span></button>\n    <!-- matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"accent\" -->\n    <button mat-button [matMenuTriggerFor]=\"menu\"><i class=\"material-icons\">menu</i></button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item routerLink=\"/login\">Login</button>\n      <button mat-menu-item routerLink=\"/home\">Your Account</button>\n      <button mat-menu-item routerLink=\"/home\">Your Orders</button>\n      <button mat-menu-item routerLink=\"/admin\">Admin Dashboard</button>\n      <button mat-menu-item routerLink=\"/sell\">Seller Dashboard</button>\n      <button mat-menu-item (click)=\"logout()\" routerLink=\"/login\">Logout</button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>\n<router-outlet></router-outlet>\n<!-- <mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n      Copyright © Debojroy 2019\n  </mat-toolbar-row>\n</mat-toolbar> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Facebook';
    }
    AppComponent.prototype.logout = function () {
        console.log("Logging out!");
        this.authService.removeLoggedInState();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_seller_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/seller/product.component */ "./src/app/views/seller/product.component.ts");
/* harmony import */ var _views_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/buyer/buyer.component */ "./src/app/views/buyer/buyer.component.ts");
/* harmony import */ var _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/admin/admin.component */ "./src/app/views/admin/admin.component.ts");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/login/login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _views_login_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/signup.component */ "./src/app/views/login/signup.component.ts");
/* harmony import */ var _views_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/buyer/product.details.component */ "./src/app/views/buyer/product.details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_seller_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/seller.service */ "./src/app/services/seller.service.ts");
/* harmony import */ var _views_buyer_cart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/buyer/cart.component */ "./src/app/views/buyer/cart.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _views_seller_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _views_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"],
                _views_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _views_login_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                _views_buyer_product_details_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailsComponent"],
                _views_buyer_cart_component__WEBPACK_IMPORTED_MODULE_19__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["RestService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _services_seller_service__WEBPACK_IMPORTED_MODULE_18__["SellerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RestService = /** @class */ (function () {
    //  private baseUrl = 'http://localhost:5000/';
    function RestService(http) {
        this.http = http;
        this.baseUrl = 'https://debojyotiroy13.pythonanywhere.com/';
    } //this initialized the HttpClient which we use to do a post or get call
    RestService.prototype.post = function (path, body) {
        return this.http.post(this.baseUrl + path, body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    RestService.prototype.get = function (path) {
        return this.http.get(this.baseUrl + path, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    RestService.prototype.delete = function (path, id) {
        return this.http.delete(this.baseUrl + path + '/' + id, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') });
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]],
            exports: [_angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    //private loggedInState: boolean = false;
    AuthService.prototype.setLoggedInState = function (state) {
        localStorage.setItem('token', state);
    };
    AuthService.prototype.removeLoggedInState = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.getLoggedInState = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getUserInfo = function () {
        return localStorage.getItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/seller.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/seller.service.ts ***!
  \********************************************/
/*! exports provided: SellerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerService", function() { return SellerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SellerService = /** @class */ (function () {
    function SellerService() {
    }
    SellerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SellerService);
    return SellerService;
}());



/***/ }),

/***/ "./src/app/views/admin/admin.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/admin/admin.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.table{\n    width:100%;\n}\n.matFormField{\n    padding-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG59XG4ubWF0Rm9ybUZpZWxke1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:#eee;\">\n  <div class=\"container\">\n  <div class=\"col-md-12 card\">\n    <mat-card>\n        <div fxLayout=\"row\">\n            <div fxFlex>\n              <h4>Manage Categories</h4>\n            </div>\n        </div>\n        <div fxLayout=\"row\">\n            <div fxFlex>\n                <mat-form-field class=\"matFormField\">\n                  <input matInput [(ngModel)]=\"categoryName\" placeholder=\"Category Name\">\n                </mat-form-field>\n                <mat-form-field class=\"matFormField\">\n                    <input matInput [(ngModel)]=\"categoryDescription\" placeholder=\"Category Description\">\n                </mat-form-field>\n                <span>\n                    <button mat-raised-button color=\"primary\" (click)=\"createCategory()\">ADD</button>\n                    <!-- <button mat-raised-button color=\"accent\" (click)=\"getCategory()\">GET</button> -->\n                </span>\n            </div>\n        </div>\n\n          <!-- <mat-card> -->\n              <table mat-table [dataSource]=\"categoryDataSource\" class=\"mat-elevation-z8\" class=\"table\">\n                <ng-container matColumnDef=\"id\">\n                  <th mat-header-cell *matHeaderCellDef> No. </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                </ng-container>\n          \n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef> Name </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                </ng-container>\n              \n                <ng-container matColumnDef=\"description\">\n                  <th mat-header-cell *matHeaderCellDef> Description </th>\n                  <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n                </ng-container>\n          \n                <ng-container matColumnDef=\"action\">\n                  <th mat-header-cell *matHeaderCellDef> </th>\n                  <td mat-cell *matCellDef=\"let element\">\n                      <i class=\"material-icons\" style=\"cursor: pointer\" (click)=\"deleteCategory(element.id)\">delete</i>\n                    <!-- <button mat-raised-button color=\"primary\" (click)=\"editProduct(element.id)\">EDIT</button>  -->\n                    <!-- <button mat-raised-button color=\"warn\" (click)=\"deleteCategory(element.id)\">DELETE</button>  -->\n                  </td>\n                </ng-container>\n          \n                <tr mat-header-row *matHeaderRowDef=\"displayedCategoriesColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedCategoriesColumns;\"></tr>\n              </table>\n              <mat-paginator [length]=\"tableLength\"\n                      [pageSize]=\"tablePageSize\"\n                      [pageSizeOptions]=\"tablePageSizeOptions\"\n                      (page)=\"pageEvent = $event\">\n                    </mat-paginator>\n            <!-- </mat-card> -->\n    </mat-card>\n  </div>\n  <div class=\"col-md-12 card\">\n  <mat-card>\n      <div fxLayout=\"row\">\n          <div fxFlex>\n            <h4>Manage Products</h4>\n          </div>\n      </div>\n      <div fxLayout=\"row\">\n          <div fxFlex>\n              <mat-form-field class=\"matFormField\">\n                <mat-select placeholder=\"Select Category\" name=\"Category\" [(ngModel)]=\"productCategory\">\n                  <mat-option *ngFor=\"let cat of categoryDataSource\" [value]=\"cat\">{{cat.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n              <mat-form-field class=\"matFormField\">\n                  <input matInput [(ngModel)]=\"productName\" placeholder=\"Product Name\">\n                </mat-form-field>\n              <mat-form-field class=\"matFormField\">\n                  <input matInput [(ngModel)]=\"productDescription\" placeholder=\"Product Description\">\n                </mat-form-field>\n                <span>\n                    <button mat-raised-button color=\"primary\" (click)=\"createProduct()\">ADD</button>\n                    <!-- <button mat-raised-button color=\"accent\" (click)=\"getProduct()\">GET</button> -->\n                </span>\n          </div>\n      </div>\n      <div fxLayout=\"row\">\n          <div fxFlex>\n            <!-- <h5>Products</h5> -->\n            <span><mat-spinner [diameter]=\"20\" [strokeWidth]=\"2\" [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner></span>\n          </div>\n      </div>\n      <!-- <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search All\">\n      </mat-form-field> -->\n\n      <!-- <mat-card> -->\n      <table mat-table [dataSource]=\"productDataSource\" class=\"mat-elevation-z8\" class=\"table\">\n\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"category\">\n          <th mat-header-cell *matHeaderCellDef> Category </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n      \n        <ng-container matColumnDef=\"description\">\n          <th mat-header-cell *matHeaderCellDef> Description </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <i class=\"material-icons\" style=\"cursor: pointer\" (click)=\"deleteProduct(element.id)\">delete</i>\n            <!-- <button mat-raised-button color=\"primary\" (click)=\"editProduct(element.id)\">EDIT</button>  -->\n            <!-- <button mat-raised-button color=\"warn\" (click)=\"deleteProduct(element.id)\">DELETE</button>  -->\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedProdcutsColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedProdcutsColumns;\"></tr>\n      </table>\n      <mat-paginator [length]=\"tableLength\"\n              [pageSize]=\"tablePageSize\"\n              [pageSizeOptions]=\"tablePageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n            </mat-paginator>\n    <!-- </mat-card> -->\n  </mat-card>\n  </div>\n</div>\n</div>\n  <!-- <div fxLayout=\"row\">\n      <div fxFlex >\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"tableLength\" placeholder=\"List length\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"tablePageSize\" placeholder=\"Page size\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"tablePageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\" placeholder=\"Page size options\">\n          </mat-form-field>\n      </div>\n      <div fxFlex>\n          <mat-paginator [length]=\"tableLength\"\n            [pageSize]=\"tablePageSize\"\n            [pageSizeOptions]=\"tablePageSizeOptions\"\n            (page)=\"pageEvent = $event\">\n          </mat-paginator>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/views/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





/**
 * @title Basic use of `<table mat-table>`
 */
var AdminComponent = /** @class */ (function () {
    function AdminComponent(restService, snackBar) {
        this.restService = restService;
        this.snackBar = snackBar;
        this.title = 'Facebook';
        this.answer = '';
        /* Product Variables */
        this.productName = '';
        this.productDescription = '';
        /* Category Variables */
        this.categoryName = '';
        this.categoryDescription = '';
        this.categoryDataSource = [];
        this.answerDisplay = '';
        this.showSpinner = false;
        /* Product Table Params */
        this.displayedCategoriesColumns = ['name', 'description', 'action'];
        this.displayedProdcutsColumns = ['category', 'name', 'description', 'action'];
        this.productDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        this.tableLength = 100;
        this.tablePageSize = 10;
        this.tablePageSizeOptions = [5, 10, 25, 100];
        this.getProduct();
        this.getCategory();
    }
    AdminComponent.prototype.applyFilter = function (filterValue) {
        this.productDataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminComponent.prototype.changeCategory = function () {
    };
    AdminComponent.prototype.getCategory = function () {
        var _this = this;
        this.restService.get('categories').subscribe(function (data) {
            _this.categoryDataSource = data;
        });
    };
    AdminComponent.prototype.createCategory = function () {
        var _this = this;
        var catg = {};
        catg['name'] = this.categoryName;
        catg['description'] = this.categoryDescription;
        this.restService.post('categories', catg).subscribe(function (res) {
            if (res.status === 'success') {
                _this.getCategory();
            }
            else {
                _this.snackBar.open(res.message, 'ERROR', {
                    duration: 2000,
                });
            }
        });
    };
    AdminComponent.prototype.getProduct = function () {
        var _this = this;
        this.restService.get('product').subscribe(function (data) {
            _this.productDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        });
    };
    AdminComponent.prototype.createProduct = function () {
        var _this = this;
        var prod = {};
        prod['name'] = this.productName;
        prod['category_id'] = this.productCategory.id;
        prod['description'] = this.productDescription;
        this.restService.post('product', prod).subscribe(function (res) {
            if (res.status === 'success') {
                _this.getProduct();
                _this.productName = "";
                _this.productCategory = "";
                _this.productDescription = "";
                _this.productPrice = null;
            }
            else {
                //this.productService.setToastMessage('Error Saving Product! : ' + res.message);
                _this.snackBar.open(res.message, 'ERROR', {
                    duration: 2000,
                });
            }
        });
    };
    AdminComponent.prototype.editProduct = function (id) {
        this.getProduct();
    };
    AdminComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.restService.delete('product', id).subscribe(function (res) {
            _this.getProduct();
        });
    };
    AdminComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.restService.delete('categories', id).subscribe(function (res) {
            _this.getCategory();
        });
    };
    AdminComponent.prototype.showAnswer = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-root',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/views/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/views/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/views/buyer/buyer.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/buyer/buyer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.table{\n    width:100%;\n}\n.matFormField{\n    padding-right: 20px;\n}\n.side-navbar {\n    background: #eee;\n}\n.filter-panel{\n    padding-top: 8px;\n}\n.search-card-box{\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.search-product{\n    font-size: x-large;\n    color:#222;\n}\n.product-body{\n    height: 300px;\n}\n.product-card {\n    padding: 10px;\n}\n.product-card-header{\n    margin-bottom: 20px;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0px;\n    padding-bottom: 2px;\n}\n.box{\n    position: relative;\n    display: inline-block; /* Make the width of box same as image */\n    cursor: pointer;\n    -o-object-fit: contain;\n       object-fit: contain;\n    height: 200px;\n}\n.box .text{\n    height: 50%;\n    position: absolute;\n    z-index: 999;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    padding-top: 15px;\n    padding-left: 5px;\n    top: 50%; /* Adjust this value to move the positioned div up and down */\n    text-align: left;\n    width: 100%; /* Set the width of the positioned div */\n    font-weight: 400;\n    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(0,0,0,0.7));\n    color: #eee;\n}\n.box .text .large-text{\n    font-size: 25px;\n}\n.box-image{\n    width: 100%;\n    height: 200px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.mat-card-act{\n    padding-left: 15px;\n}\n/* Absolute Center Spinner */\n.loading-indicator {\n    position: fixed;\n    z-index: 999;\n    height: 2em;\n    width: 2em;\n    overflow: show;\n    margin: auto;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n/* Transparent Overlay */\n.loading-indicator:before {\n    content: '';\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.3);\n  }\n.header-image {\n    background-image: url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80');\n    background-size: cover;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQixFQUFFLHdDQUF3QztJQUMvRCxlQUFlO0lBQ2Ysc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFFBQVEsRUFBRSw2REFBNkQ7SUFDdkUsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSx3Q0FBd0M7SUFDckQsZ0JBQWdCO0lBQ2hCLGtGQUFrRjtJQUNsRixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isb0JBQWlCO09BQWpCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtFQUNWO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztFQUNuQztBQUVBO0lBQ0UsK0pBQStKO0lBQy9KLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2J1eWVyL2J1eWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi50YWJsZXtcbiAgICB3aWR0aDoxMDAlO1xufVxuLm1hdEZvcm1GaWVsZHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnNpZGUtbmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG5cbi5maWx0ZXItcGFuZWx7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5zZWFyY2gtY2FyZC1ib3h7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLXByb2R1Y3R7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIGNvbG9yOiMyMjI7XG59XG5cbi5wcm9kdWN0LWJvZHl7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9kdWN0LWNhcmQtaGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuXG4uYm94e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIE1ha2UgdGhlIHdpZHRoIG9mIGJveCBzYW1lIGFzIGltYWdlICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi5ib3ggLnRleHR7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHRvcDogNTAlOyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSB0byBtb3ZlIHRoZSBwb3NpdGlvbmVkIGRpdiB1cCBhbmQgZG93biAqL1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHBvc2l0aW9uZWQgZGl2ICovXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDApLCByZ2JhKDAsMCwwLDAuNykpO1xuICAgIGNvbG9yOiAjZWVlO1xufVxuLmJveCAudGV4dCAubGFyZ2UtdGV4dHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uYm94LWltYWdle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5tYXQtY2FyZC1hY3R7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4vKiBBYnNvbHV0ZSBDZW50ZXIgU3Bpbm5lciAqL1xuLmxvYWRpbmctaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgb3ZlcmZsb3c6IHNob3c7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xuICAubG9hZGluZy1pbmRpY2F0b3I6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgfVxuXG4gIC5oZWFkZXItaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTY1OTQ3OTg5NDctZTY1NTA1ZGJiMjlkP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNjUwJnE9ODAnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/buyer/buyer.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/buyer/buyer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-indicator\" *ngIf=\"showSpinner\">\n  <mat-progress-spinner mode=\"indeterminate\" color=\"accent\"></mat-progress-spinner>\n</div>\n<div class=\"col-md-12\">\n    <div fxFlex class=\"search-card-box\">\n      <mat-card>\n          <div fxLayout=\"column\">\n              <div fxFlex>\n                  <span><i class=\"material-icons\" style=\"color: gray;margin-right: 10px;\">search</i></span>\n                  <span> <input style=\"width:80%\" class=\"search-product\" matInput placeholder=\"Search Products and Categories\" autocomplete=\"off\"></span>\n              </div>\n          </div>\n      </mat-card>\n    </div>\n  </div>\n    <div class=\"filter-panel col-md-3\">\n        <mat-accordion class=\"\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Filters\n                </mat-panel-title>\n                <mat-panel-description>\n                  Basic\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <div fxLayout=\"column\">\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Brand Name\">\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Color\">\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Material\">\n                      </mat-form-field>\n                  </div>\n              </div>\n              \n              \n            </mat-expansion-panel>\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  Filters\n                </mat-panel-title>\n                <mat-panel-description>\n                  Advance\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              <div fxLayout=\"column\">\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Price Range\">\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Ratings\">\n                      </mat-form-field>\n                  </div>\n                  <div fxFlex>\n                      <mat-form-field>\n                        <input matInput placeholder=\"Price Range\">\n                      </mat-form-field>\n                  </div>\n              </div>\n            </mat-expansion-panel>\n          </mat-accordion>\n    </div>\n    <div class=\"col-md-9 breadcrumb\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n            <div fxFlex class=\"product-card-header\">\n              <mat-card>\n                  <mat-card-title>Categories</mat-card-title>\n                  <mat-card-subtitle>\n                    \n                      <mat-chip-list>\n                          <mat-chip color=\"accent\" *ngFor=\"let cat of categoriesDataSource\" selected>{{cat.name}}</mat-chip>\n                        </mat-chip-list>\n                  </mat-card-subtitle>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n                <div class=\"col-md-4\" *ngFor=\"let item of productDataSource\">\n                    <mat-card class=\"product-card-header\">\n                        <mat-card-header>\n                          <mat-card-title>{{item.name}}</mat-card-title>\n                          <mat-card-subtitle>20% Discount</mat-card-subtitle>\n                        </mat-card-header>\n                        <div>\n                          <img [src]=\"item.image\" alt=\"Photo\" style=\"width:100%;\">\n                        </div>\n                        <mat-card-content>\n                          <p>{{item.description}}</p>\n                        </mat-card-content>\n                        <mat-card-actions>\n                          <button mat-button>Wishlist</button>\n                          <button mat-button>Cart</button>\n                          <button mat-button (click)=\"quickview(item)\">Quick View</button>\n                        </mat-card-actions>\n                      </mat-card>\n            </div>\n        </div> -->\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" *ngFor=\"let item of productDataSource\">\n              <mat-card class=\"product-card-header\">\n                  <div class=\"box\" (click)=\"quickview(item)\">\n                      <img class=\"box-image\" style=\"width:100%\" [src]=\"item.image\" alt=\"Photo\">\n                         <div class=\"text\">\n                          <p class=\"large-text\">{{item.name}}</p>\n                          <p>{{item.description}}</p>\n                        </div>\n                  </div>\n                  <div>\n                    <button mat-button>Wishlist</button>\n                    <button mat-button>Cart</button>\n                    <button mat-button (click)=\"quickview(item)\">Quick View</button>\n                  </div>\n                </mat-card>\n      </div>\n  </div>\n      </div>\n \n        <!-- <div fxFlex>   \n          <div fxLayout=\"row\">\n              <div fxFlex>\n                  <mat-paginator [length]=\"tableLength\"\n                    [pageSize]=\"tablePageSize\"\n                    [pageSizeOptions]=\"tablePageSizeOptions\"\n                    (page)=\"pageEvent = $event\">\n                  </mat-paginator>\n              </div>\n            </div>\n        </div> -->"

/***/ }),

/***/ "./src/app/views/buyer/buyer.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/buyer/buyer.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var ListComponent = /** @class */ (function () {
    function ListComponent(restService, snackBar, router, authService) {
        this.restService = restService;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
        this.title = 'Catalog';
        this.answer = '';
        this.itemsDataSource = [{ color: 'lightblue' }, { color: 'lightgreen' }, { color: 'lightpink' }, { color: '#DDBDF1' }];
        this.productDataSource = [];
        this.categoriesDataSource = [];
        /* Product Variables */
        this.productName = '';
        this.productDescription = '';
        this.productCategory = '';
        /* Category Variables */
        this.categoryName = '';
        this.categoryDescription = '';
        this.categoryDataSource = [];
        this.showSpinner = false;
        // Grocery
        this.groceryImages = [
            // 'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1508928807352-24a4adbb6795?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1498579397066-22750a3cb424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1463490093487-b0ffe9b8e140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1540289917366-db90f08d2397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2863&q=80',
        ];
        //Phone
        this.phoneImages = [
            'https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1558143396-75d2c4559aad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1558562805-4bf1e2a724eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
        ];
        //Laptop
        this.laptopImages = [
            // 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1704&q=80',
            'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        ];
        /* Product Table Params */
        this.displayedColumns = ['category', 'name', 'description', 'price', 'action'];
        this.tableLength = 100;
        this.tablePageSize = 10;
        this.tablePageSizeOptions = [5, 10, 25, 100];
        this.getProduct();
        this.getCategories();
    }
    ListComponent.prototype.getProduct = function () {
        var _this = this;
        this.showSpinner = true;
        this.restService.get('product').subscribe(function (data) {
            _this.productDataSource = data;
            _this.productDataSource.forEach(function (item, index) {
                var catg = item.category;
                if (catg.toLowerCase() == "grocery") {
                    item.image = _this.groceryImages[index % _this.groceryImages.length];
                }
                else if (catg.toLowerCase() == "laptop") {
                    item.image = _this.laptopImages[index % _this.laptopImages.length];
                }
                else if (catg.toLowerCase() == "mobile") {
                    item.image = _this.phoneImages[index % _this.phoneImages.length];
                }
                else {
                    item.image = _this.groceryImages[0];
                }
            });
            _this.showSpinner = false;
            console.log(_this.productDataSource);
        });
    };
    ListComponent.prototype.getCategories = function () {
        var _this = this;
        this.restService.get('categories').subscribe(function (data) {
            _this.categoriesDataSource = data;
        });
    };
    ListComponent.prototype.quickview = function (item) {
        this.router.navigate(['product', item.id]);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-root',
            template: __webpack_require__(/*! ./buyer.component.html */ "./src/app/views/buyer/buyer.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/views/buyer/buyer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/views/buyer/cart.component.html":
/*!*************************************************!*\
  !*** ./src/app/views/buyer/cart.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div fxFlex class=\"search-card-box\">\n    <mat-card>\n        <div fxLayout=\"column\">\n            <div fxFlex>\n                <span><i class=\"material-icons\" style=\"color: gray;margin-right: 10px;\">shopping_cart</i></span>\n                <span class=\"search-product\">Shopping Cart</span>\n                <span class=\"search-product\" style=\"float:right;\"><button mat-raised-button color=\"primary\">Proceed to buy</button></span>\n            </div>\n        </div>\n    </mat-card>\n  </div>\n</div>\n<div class=\"col-md-12\">\n  <div class=\"container breadcrumb\">\n    <div class=\"row\">\n          <div class=\"col-md-12\" *ngFor=\"let item of productDataSource\">\n              <mat-card style=\"margin-bottom: 20px;\">\n                  <mat-card-header>\n                    <div mat-card-avatar style=\"width:100px;height: 100px;\" class=\"header-image\"></div>\n                    <mat-card-title>{{item.name}}</mat-card-title>\n                    <mat-card-subtitle>{{item.description}}</mat-card-subtitle>\n                    <mat-card-subtitle>Rs. 10,000</mat-card-subtitle>\n                  </mat-card-header>\n              </mat-card>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/views/buyer/cart.component.ts":
/*!***********************************************!*\
  !*** ./src/app/views/buyer/cart.component.ts ***!
  \***********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var CartComponent = /** @class */ (function () {
    function CartComponent(restService, snackBar, router, authService) {
        this.restService = restService;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
        this.title = 'Catalog';
        this.answer = '';
        this.itemsDataSource = [{ color: 'lightblue' }, { color: 'lightgreen' }, { color: 'lightpink' }, { color: '#DDBDF1' }];
        this.productDataSource = [];
        this.categoriesDataSource = [];
        /* Product Variables */
        this.productName = '';
        this.productDescription = '';
        this.productCategory = '';
        /* Category Variables */
        this.categoryName = '';
        this.categoryDescription = '';
        this.categoryDataSource = [];
        this.answerDisplay = '';
        this.showSpinner = false;
        /* Product Table Params */
        this.displayedColumns = ['category', 'name', 'description', 'price', 'action'];
        this.tableLength = 100;
        this.tablePageSize = 10;
        this.tablePageSizeOptions = [5, 10, 25, 100];
        this.getProduct();
        this.getCategories();
        console.log(this.authService.getUserInfo());
    }
    CartComponent.prototype.getProduct = function () {
        var _this = this;
        this.restService.get('product').subscribe(function (data) {
            _this.productDataSource = data;
        });
    };
    CartComponent.prototype.getCategories = function () {
        var _this = this;
        this.restService.get('categories').subscribe(function (data) {
            _this.categoriesDataSource = data;
        });
    };
    CartComponent.prototype.quickview = function (item) {
        this.router.navigate(['product', item.id]);
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cart-root',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/views/buyer/cart.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/views/buyer/buyer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/views/buyer/product.details.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/buyer/product.details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"filter-panel col-md-3\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div fxFlex class=\"product-card-header\">\n                <mat-card>\n                    <!-- <mat-card-title>Categories</mat-card-title> -->\n                    <mat-card-subtitle>\n                        {{productName}}\n                    </mat-card-subtitle>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        <mat-card class=\"product-card-header\">\n            <img mat-card-image src=\"https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1V2VvP0Bc_hsTGx3rtlMZDDBYYtBwuTQ-%2Fgridlist-illos-01.png\" alt=\"Photo\">\n            <mat-card-content>\n            </mat-card-content>\n            <mat-card-actions>\n              <!-- <button mat-button><i class=\"material-icons\">shopping_cart</i></button> -->\n              <button mat-button><i class=\"material-icons\">zoom_in</i></button>\n              <button mat-button><i class=\"material-icons\">zoom_out</i></button>\n            </mat-card-actions>\n          </mat-card>\n    </div>\n    <div class=\"col-md-9 breadcrumb\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div fxFlex class=\"product-card-header\">\n            <mat-card>\n                <!-- <mat-card-title>Categories</mat-card-title> -->\n                <mat-card-subtitle>\n                    Offers!!\n                </mat-card-subtitle>\n            </mat-card>\n          </div>\n        </div>\n      </div>\n        <div class=\"row\">\n                <div class=\"col-md-6 product-card-header\">\n                  <mat-card class=\"product-body\">\n                      <!-- <mat-card-title>Categories</mat-card-title> -->\n                      <mat-card-subtitle>\n                          {{productDescription}}\n                      </mat-card-subtitle>\n                  </mat-card>\n                </div>\n                <div class=\"col-md-6 product-card-header\">\n                    <mat-card class=\"product-body\">\n                        <!-- <mat-card-title>Categories</mat-card-title> -->\n                        <mat-card-subtitle>\n                            <p>Product Purchase Options/ Delivery Options</p>\n                        </mat-card-subtitle>\n                    </mat-card>\n                  </div>  \n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div fxFlex class=\"product-card-header\">\n                <mat-card>\n                    <!-- <mat-card-title>Categories</mat-card-title> -->\n                    <mat-card-subtitle>\n                        Reviews\n                    </mat-card-subtitle>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n      </div>\n      \n        <!-- <div fxFlex>   \n          <div fxLayout=\"row\">\n              <div fxFlex>\n                  <mat-paginator [length]=\"tableLength\"\n                    [pageSize]=\"tablePageSize\"\n                    [pageSizeOptions]=\"tablePageSizeOptions\"\n                    (page)=\"pageEvent = $event\">\n                  </mat-paginator>\n              </div>\n            </div>\n        </div> -->"

/***/ }),

/***/ "./src/app/views/buyer/product.details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/buyer/product.details.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(restService, snackBar, activatedRoute) {
        this.restService = restService;
        this.snackBar = snackBar;
        this.activatedRoute = activatedRoute;
        this.title = 'Catalog';
        /* Product Variables */
        this.productName = '';
        this.productDescription = '';
        this.productCategory = '';
        this.answerDisplay = '';
        this.showSpinner = false;
        /* Product Table Params */
        this.displayedColumns = ['category', 'name', 'description', 'price', 'action'];
        this.tableLength = 100;
        this.tablePageSize = 10;
        this.tablePageSizeOptions = [5, 10, 25, 100];
        // this.getProduct();
        // this.getCategories();
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
        this.getProduct(id);
    };
    ProductDetailsComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.restService.get('product/' + id).subscribe(function (data) {
            _this.productName = data.name;
            _this.productDescription = data.description;
            _this.productCategory = data.category;
        });
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-root',
            template: __webpack_require__(/*! ./product.details.component.html */ "./src/app/views/buyer/product.details.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/views/buyer/buyer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/views/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-element > * {\n    width: 100%;\n}\n.login-container {\n    margin-top: 80px;\n    padding: 40px;\n}\n.login-button-container {\n    margin-top: 20px;\n}\n.login-button {\n    width : 100%;\n    margin-right: 20px;\n}\n.login-background{\n    background: lavender;\n    height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWVsZW1lbnQgPiAqIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgcGFkZGluZzogNDBweDtcbn1cbi5sb2dpbi1idXR0b24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxvZ2luLWJ1dHRvbiB7XG4gICAgd2lkdGggOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmxvZ2luLWJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-background\">\n<div class=\"container\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\" >\n        \n      <mat-card class=\"login-container\">\n          \n          <div fxLayout=\"column\">\n              <i class=\"material-icons\" style=\"font-size: 80px;text-align: center;color:grey\">account_circle</i>\n              <div fxFlex class=\"login-element\">\n                  \n                  <mat-form-field class=\"matFormField\" width=\"100%\">\n                    <input matInput [(ngModel)]=\"email\" placeholder=\"Email\">\n                  </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-element\">\n                  <mat-form-field class=\"matFormField\">\n                      <input type=\"password\" matInput [(ngModel)]=\"password\" placeholder=\"Password\">\n                  </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-button-container\">\n                    <div fxLayout=\"row\">\n                  <div fxFlex><button class=\"login-button\" mat-raised-button color=\"primary\" id=\"googleBtn\" (click)=\"login()\">Login</button></div>\n                  <div fxFlex><div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div></div>\n                  </div>\n              </div>             \n              <div fxFlex class=\"login-button-container\">\n                  <button class=\"login-button\" mat-raised-button color=\"accent\" (click)=\"signup()\">SIGNUP</button>\n              </div>\n          </div>\n      </mat-card>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, snackBar, restService, authService) {
        this.router = router;
        this.snackBar = snackBar;
        this.restService = restService;
        this.authService = authService;
        this.title = 'Facebook';
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': function (param) { return _this.onSignIn(param); }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = {};
        user['email'] = this.email;
        user['password'] = this.password;
        this.restService.post('login', user).subscribe(function (data) {
            if (data.status === "success") {
                var obj = { 'id': '', 'name': data.data.fname + " " + data.data.lname, 'image_url': 'default.jpg', 'email': _this.email };
                console.log(obj);
                _this.authService.setLoggedInState(obj);
                _this.router.navigate(['home']);
            }
            else {
                _this.snackBar.open('Unable to login!', 'ERROR', {
                    duration: 2000,
                });
            }
        }, function (error) {
            _this.snackBar.open('Unable to login!', 'ERROR', {
                duration: 2000,
            });
        });
    };
    LoginComponent.prototype.signup = function () {
        console.log(this.email, this.password);
        this.router.navigate(['register']);
    };
    LoginComponent.prototype.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        var obj = { 'id': profile.getId(), 'name': profile.getName(), 'image_url': profile.getImageUrl(), 'email': profile.getEmail() };
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
        this.authService.setLoggedInState(obj);
        this.router.navigate(['home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-root',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/login/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/views/login/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-background\">\n<div class=\"container\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\" >\n        \n      <mat-card class=\"login-container\">\n          \n          <div fxLayout=\"column\">\n              <i class=\"material-icons\" style=\"font-size: 80px;text-align: center;color:grey\">account_circle</i>\n              <div fxFlex class=\"login-element\">\n                  \n                  <mat-form-field class=\"matFormField\" width=\"100%\">\n                    <input matInput [(ngModel)]=\"fname\" placeholder=\"First Name\" required>\n                  </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-element\">\n                  <mat-form-field class=\"matFormField\">\n                    <input matInput [(ngModel)]=\"lname\" placeholder=\"Last Name\">\n                  </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-element\">\n                    <mat-form-field class=\"matFormField\" width=\"100%\">\n                        <input matInput [(ngModel)]=\"email\" placeholder=\"Email\" required>\n                    </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-element\">\n                    <mat-form-field class=\"matFormField\" width=\"100%\">\n                        <input type=\"password\" matInput [(ngModel)]=\"password\" placeholder=\"Password\" required>\n                    </mat-form-field>\n              </div>\n              <div fxFlex class=\"login-element\">\n                <mat-form-field>\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of Birth\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field>\n                </div>\n              <div fxFlex class=\"login-button-container\">\n                  <button class=\"login-button\" mat-raised-button color=\"primary\" id=\"googleBtn\" (click)=\"signup()\">SUBMIT</button>\n              </div>\n          </div>\n      </mat-card>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/views/login/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/views/login/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, snackBar, restService, authService) {
        this.router = router;
        this.snackBar = snackBar;
        this.restService = restService;
        this.authService = authService;
        this.title = 'Facebook';
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var user = {};
        user['email'] = this.email;
        user['password'] = this.password;
        user['fname'] = this.fname;
        user['lname'] = this.lname;
        user['image_file'] = "default.jpg";
        this.restService.post('register', user).subscribe(function (data) {
            if (data.status === "success") {
                _this.authService.setLoggedInState(true);
                _this.router.navigate(['login']);
            }
            else {
                _this.snackBar.open('Unable to register user!', 'ERROR', {
                    duration: 2000,
                });
            }
        }, function (error) {
            _this.snackBar.open('Unable to register user!', 'ERROR', {
                duration: 2000,
            });
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login-root',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/views/login/signup.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], _app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/views/seller/product.component.css":
/*!****************************************************!*\
  !*** ./src/app/views/seller/product.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.table{\n    width:100%;\n}\n.matFormField{\n    padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VsbGVyL3Byb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2VsbGVyL3Byb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG59XG4ubWF0Rm9ybUZpZWxke1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/seller/product.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/seller/product.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:#eee;height: -webkit-fill-available;\">\n<div class=\"container\">\n<div class=\"col-md-12 card\">\n<mat-card>\n    <div fxLayout=\"row\">\n        <div fxFlex>\n          <h4>Add Items</h4>\n        </div>\n    </div>\n    <div fxLayout=\"row\">\n        <div fxFlex>\n            <mat-form-field class=\"matFormField\">\n              <mat-select (selectionChange)=\"selectProduct($event.value)\" placeholder=\"Product Category\" name=\"Category\" [(ngModel)]=\"selectedCategory\">\n                <mat-option *ngFor=\"let cat of categoryDataSource\" [value]=\"cat\">{{cat.name}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-form-field class=\"matFormField\">\n                <mat-select placeholder=\"Product Name\" name=\"Category\" [(ngModel)]=\"selectedProduct\">\n                  <mat-option *ngFor=\"let prod of productDataSource\" [value]=\"prod\">{{prod.name}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n            <mat-form-field class=\"matFormField\">\n                <input type=\"number\" matInput [(ngModel)]=\"selectedQuantity\" placeholder=\"Product Quantity\">\n              </mat-form-field>\n            <mat-form-field class=\"matFormField\">\n                <input type=\"number\" matInput [(ngModel)]=\"selectedPrice\" placeholder=\"Product Price\">\n            </mat-form-field>\n            <span>\n              <button mat-stroked-button color=\"primary\" (click)=\"createItem()\">ADD</button>\n              <button mat-raised-button color=\"accent\" (click)=\"getItem()\">GET</button>\n            </span>\n        </div>\n    </div>\n</mat-card>\n</div>\n<!-- <div class=\"col-md-6 card\">\n  <mat-card>\n    \n    <br>\n    <button mat-raised-button (click)=\"showAnswer()\">Answer me</button>\n    <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n  </mat-card>\n  </div>\n  <div class=\"col-md-6 card\">\n    <mat-card>\n      <br>\n      <button mat-raised-button (click)=\"showAnswer()\">Answer me</button>\n      <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n    </mat-card>\n  </div> -->\n  <div class=\"col-md-12 card\">\n  <mat-card>\n    \n    <!-- <div fxLayout=\"row\">\n        <div fxFlex>\n          <h4>Saved Items</h4>\n          <span><mat-spinner [diameter]=\"20\" [strokeWidth]=\"2\" [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner></span>\n        </div>\n    </div>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search All\">\n    </mat-form-field> -->\n\n  <table mat-table [dataSource]=\"itemDataSource\" class=\"mat-elevation-z8\" class=\"table\">\n\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"category\">\n        <th mat-header-cell *matHeaderCellDef> Category </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"product\">\n        <th mat-header-cell *matHeaderCellDef> Product </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.product}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"quantity\">\n        <th mat-header-cell *matHeaderCellDef> Quantity </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef> Price </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <i class=\"material-icons\" style=\"cursor: pointer\" (click)=\"deleteProduct(element.id)\">delete</i>\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"editProduct(element.id)\">EDIT</button> \n          <button mat-raised-button color=\"warn\" (click)=\"deleteProduct(element.id)\">DELETE</button>  -->\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <div fxLayout=\"row\">\n        <div fxFlex>\n            <mat-paginator [length]=\"tableLength\"\n              [pageSize]=\"tablePageSize\"\n              [pageSizeOptions]=\"tablePageSizeOptions\"\n              (page)=\"pageEvent = $event\">\n            </mat-paginator>\n        </div>\n      </div>\n  </mat-card>\n\n  \n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/views/seller/product.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/seller/product.component.ts ***!
  \***************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





/**
 * @title Basic use of `<table mat-table>`
 */
var ProductComponent = /** @class */ (function () {
    function ProductComponent(restService, snackBar) {
        this.restService = restService;
        this.snackBar = snackBar;
        this.title = 'Facebook';
        this.answer = '';
        /* API Variables */
        this.productDataSource = [];
        this.categoryDataSource = [];
        this.itemDataSource = [];
        /* Random Variables */
        this.answerDisplay = '';
        this.showSpinner = false;
        /* Item Table Params */
        this.displayedColumns = ['category', 'product', 'quantity', 'price', 'action'];
        this.tableLength = 100;
        this.tablePageSize = 10;
        this.tablePageSizeOptions = [5, 10, 25, 100];
        this.getProduct();
        this.getCategory();
        this.getItem();
    }
    ProductComponent.prototype.applyFilter = function (filterValue) {
        this.productDataSource.filter = filterValue.trim().toLowerCase();
    };
    ProductComponent.prototype.selectProduct = function (filterValue) {
    };
    ProductComponent.prototype.getCategory = function () {
        var _this = this;
        this.restService.get('categories').subscribe(function (data) {
            //this.categoryDataSource = new MatTableDataSource(data);
            _this.categoryDataSource = data;
        });
    };
    ProductComponent.prototype.getItem = function () {
        var _this = this;
        this.restService.get('items').subscribe(function (data) {
            _this.itemDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.itemDataSource = data;
        });
    };
    ProductComponent.prototype.getProduct = function () {
        var _this = this;
        this.restService.get('product').subscribe(function (data) {
            _this.productDataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
            _this.productDataSource = data;
        });
    };
    ProductComponent.prototype.createItem = function () {
        var _this = this;
        var prod = {};
        prod['product_id'] = this.selectedProduct['id'];
        prod['category_id'] = this.selectedCategory['id'];
        prod['price'] = Number(this.selectedPrice);
        prod['quantity'] = Number(this.selectedQuantity);
        prod['user_id'] = 1;
        this.restService.post('items', prod).subscribe(function (res) {
            if (res.status === 'success') {
                _this.getItem();
                _this.selectedProduct = null;
                _this.selectedCategory = null;
                _this.selectedPrice = null;
                _this.selectedQuantity = null;
            }
            else {
                //this.productService.setToastMessage('Error Saving Product! : ' + res.message);
                _this.snackBar.open(res.message, 'ERROR', {
                    duration: 2000,
                });
            }
        });
    };
    ProductComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.restService.delete('item', id).subscribe(function (res) {
            _this.getProduct();
        });
    };
    ProductComponent.prototype.showAnswer = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'product-root',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/views/seller/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/views/seller/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    urlAddress: 'http://localhost:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/debojroy/Documents/Projects/ng5-material/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map