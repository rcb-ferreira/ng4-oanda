webpackJsonp([1,4],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_instrument__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_candles__ = __webpack_require__(360);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getHeaders = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return headers;
    };
    ApiService.prototype.getInstruments = function (token, accountId) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.getHeaders(token) });
        var apiURL = "https://api-fxpractice.oanda.com/v3/accounts/" + accountId + "/instruments";
        return this.http.get(apiURL, options)
            .map(function (res) {
            return res.json().instruments.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_instrument__["a" /* instrumentItem */](item.name, item.type, item.displayName);
            });
        })
            .catch(this.handleError);
    };
    ApiService.prototype.getCandles = function (token, instrument, granularity, count) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.getHeaders(token) });
        var apiURL = "https://api-fxpractice.oanda.com/v3/instruments/" + instrument + "/candles?price=B&granularity=" + granularity + "&count=" + count;
        return this.http.get(apiURL, options)
            .map(function (res) {
            return res.json().candles.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_5__models_candles__["a" /* candleItem */](new Date(item.time).getTime(), parseFloat(item.bid.o), parseFloat(item.bid.h), parseFloat(item.bid.l), parseFloat(item.bid.c), item.volume);
            });
        })
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, user) {
        this.http = http;
        this.user = user;
    }
    AuthService.prototype.isUserAuthenticated = function () {
        return this.user.getToken() ? true : false;
    };
    AuthService.prototype.authenticate = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var apiURL = "https://api-fxpractice.oanda.com/v3/accounts";
        return this.http.get(apiURL, options)
            .map(function (res) {
            return res.json().accounts.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* userItem */](item);
            });
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        var body = JSON.parse(error._body);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(body);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateRouteGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanActivateRouteGuard = (function () {
    function CanActivateRouteGuard(auth, user, router) {
        this.auth = auth;
        this.user = user;
        this.router = router;
    }
    CanActivateRouteGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isUserAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    };
    return CanActivateRouteGuard;
}());
CanActivateRouteGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CanActivateRouteGuard);

var _a, _b, _c;
//# sourceMappingURL=can-activate-route.guard.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticatedComponent = (function () {
    function AuthenticatedComponent(user, api) {
        this.user = user;
        this.api = api;
        this.countLimit = [];
        this.candles = [];
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setSplice = 0;
        this.accountId = this.user.getAccountId();
        this.loadingInstrument = true;
        this.loadingInstrument = false;
        this.loadingCandles = false;
        this.reset = false;
        this.granularities = ["S5", "S10", "S15", "S30", "M1", "M2", "M3", "M4", "M5", "M10", "M15", "M30", "H1", "H2", "H3", "H4", "H6", "H8", "H12", "D", "W", "M"];
        // Default instruments array to prevent jumping.
        this.instruments = [{ "name": "EUR_USD", "type": "CURRENCY", "displayName": "EUR/USD" }];
        // Add default param to build graph with.
        this.defaultGranularity = "S5";
        this.defaultInstrument = "EUR_USD";
        this.defaultCount = 100;
        this.selectedGranularity = this.defaultGranularity;
        this.selectedInstrument = this.defaultInstrument;
        this.selectedCount = this.defaultCount;
        // A quick and clean range counter to be used for dropdown.
        for (var i = 10; i > 0; i--) {
            this.countLimit.push(i * 10);
        }
        this.token = this.user.getToken();
        this.listInstruments();
        this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount);
        // Fetch and update chart data every five seconds
        setTimeout(function () {
            _this.count = 0;
            setInterval(function () {
                _this.toggleInterval();
            }, 5000);
        }, 5000);
    };
    AuthenticatedComponent.prototype.listInstruments = function () {
        var _this = this;
        this.loadingInstrument = true;
        this.api.getInstruments(this.token, this.user.getAccountId())
            .subscribe(function (result) {
            _this.instruments = result;
            _this.loadingInstrument = false;
        }, function (error) {
            console.error(error);
            _this.loadingInstrument = false;
        });
    };
    AuthenticatedComponent.prototype.getCandles = function (token, instrument, granularity, count, loader) {
        var _this = this;
        if (loader === void 0) { loader = true; }
        this.loading = true;
        this.loadingCandles = loader;
        this.api.getCandles(token, instrument, granularity, count)
            .subscribe(function (result) {
            _this.candles = result;
            _this.loadingCandles = false;
            _this.loading = false;
        }, function (error) {
            console.error(error);
            _this.loadingCandles = false;
            _this.loading = false;
        });
    };
    // Trigger search
    AuthenticatedComponent.prototype.toggleChart = function (setReset) {
        if (setReset === void 0) { setReset = true; }
        this.count = 0;
        this.reset = setReset;
        this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount, false);
    };
    AuthenticatedComponent.prototype.toggleInterval = function () {
        this.count = this.count + 1;
        this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount + this.count, false);
    };
    AuthenticatedComponent.prototype.resetChart = function () {
        this.reset = false;
        this.selectedGranularity = this.defaultGranularity;
        this.selectedInstrument = this.defaultInstrument;
        this.selectedCount = this.defaultCount;
        this.getCandles(this.token, this.selectedInstrument, this.selectedGranularity, this.selectedCount, false);
    };
    return AuthenticatedComponent;
}());
AuthenticatedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-authenticated',
        template: __webpack_require__(720),
        styles: [__webpack_require__(709)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _b || Object])
], AuthenticatedComponent);

var _a, _b;
//# sourceMappingURL=authenticated.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, auth, user) {
        this.router = router;
        this.auth = auth;
        this.user = user;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.token = '';
        this.loading = false;
        if (this.auth.isUserAuthenticated()) {
            this.router.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.loginUser = function (token) {
        var _this = this;
        if (token === void 0) { token = ''; }
        if (!token) {
            return;
        }
        this.loading = true;
        this.auth.authenticate(token)
            .subscribe(function (result) {
            _this.user.setUserLoggedIn(result, token);
            _this.router.navigate(['dashboard']);
            _this.loading = false;
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(722),
        styles: [__webpack_require__(711)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(363);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__can_activate_route_guard__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_authenticated_authenticated_component__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_4__components_authenticated_authenticated_component__["a" /* AuthenticatedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__can_activate_route_guard__["a" /* CanActivateRouteGuard */]]
    },
    { path: '**', redirectTo: 'login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(719),
        styles: [__webpack_require__(708)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nvd3__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nvd3__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_nvd3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_module__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__can_activate_route_guard__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authenticated_authenticated_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_main_main_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_shared_barchart_barchart_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_shared_candlestick_candlestick_component__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// d3 and nvd3 should be included somewhere


// Theming




// Services



// Components








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_authenticated_authenticated_component__["a" /* AuthenticatedComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_shared_barchart_barchart_component__["a" /* BarchartComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_shared_candlestick_candlestick_component__["a" /* CandlestickComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_module__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nvd3__["NvD3Module"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__can_activate_route_guard__["a" /* CanActivateRouteGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(user) {
        this.user = user;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.user.signOut();
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], HeaderComponent.prototype, "accountId", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(721),
        styles: [__webpack_require__(710)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(api) {
        this.api = api;
        this.instrument = '';
        this.granularity = '';
        this.token = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loading = false;
        // this.listCandles(this.token, this.instrument, this.granularity, 100);
    };
    MainComponent.prototype.listCandles = function (token, instrument, granularity, count) {
        var _this = this;
        this.loading = true;
        this.api.getCandles(token, instrument, granularity, count)
            .subscribe(function (result) {
            _this.candles = result;
            _this.loading = false;
        }, function (error) {
            console.error(error);
            _this.loading = false;
        });
    };
    return MainComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainComponent.prototype, "instrument", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainComponent.prototype, "granularity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MainComponent.prototype, "token", void 0);
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(723),
        styles: [__webpack_require__(712)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(724),
        styles: [__webpack_require__(713)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarchartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarchartComponent = (function () {
    function BarchartComponent() {
    }
    BarchartComponent.prototype.ngOnInit = function () { };
    BarchartComponent.prototype.ngOnChanges = function () { };
    return BarchartComponent;
}());
BarchartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-barchart',
        template: __webpack_require__(725),
        styles: [__webpack_require__(714)]
    }),
    __metadata("design:paramtypes", [])
], BarchartComponent);

//# sourceMappingURL=barchart.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CandlestickComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CandlestickComponent = (function () {
    function CandlestickComponent() {
    }
    CandlestickComponent.prototype.ngOnInit = function () { };
    // Listen to any changes and apply to chart
    CandlestickComponent.prototype.ngOnChanges = function () {
        console.log(this.candles);
        this.options = {
            chart: {
                type: 'candlestickBarChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 60
                },
                x: function (d) { return d['date']; },
                y: function (d) { return d['close']; },
                duration: 100,
                xAxis: {
                    axisLabel: 'Dates',
                    tickFormat: function (d) {
                        return d3.time.format('%b %d/%y')(new Date(d));
                    },
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Stock Price',
                    tickFormat: function (d) {
                        return '$ ' + d3.format(',.2f')(d);
                    },
                    showMaxMin: false
                },
                zoom: {
                    enabled: true,
                    scaleExtent: [1, 10],
                    useFixedDomain: true,
                    useNiceScale: true,
                    horizontalOff: false,
                    verticalOff: false,
                    unzoomEventType: 'dblclick.zoom'
                }
            }
        };
        this.data = [{
                values: this.candles
            }];
    };
    return CandlestickComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CandlestickComponent.prototype, "candles", void 0);
CandlestickComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-candlestick',
        template: __webpack_require__(726),
        styles: [__webpack_require__(715)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    })
], CandlestickComponent);

//# sourceMappingURL=candlestick.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(348);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    return MaterialModule;
}());
MaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdProgressBarModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MdProgressBarModule */]],
    })
], MaterialModule);

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return candleItem; });
var candleItem = (function () {
    function candleItem(date, open, high, low, close, volume) {
        this.date = date;
        this.open = open;
        this.high = high;
        this.low = low;
        this.close = close;
        this.volume = volume;
    }
    return candleItem;
}());

//# sourceMappingURL=candles.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return instrumentItem; });
var instrumentItem = (function () {
    function instrumentItem(name, type, displayName) {
        this.name = name;
        this.type = type;
        this.displayName = displayName;
    }
    return instrumentItem;
}());

//# sourceMappingURL=instrument.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userItem; });
var userItem = (function () {
    function userItem(accounts) {
        this.accounts = accounts;
    }
    return userItem;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(router) {
        this.router = router;
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function (user, token) {
        var _this = this;
        this.accountId = 0;
        user.forEach(function (element) {
            if (element.accounts.id) {
                _this.accountId = element.accounts.id;
            }
        });
        localStorage.setItem('trading.token', token);
        localStorage.setItem('trading.account_id', this.accountId);
        this.isUserLoggedIn = false;
    };
    UserService.prototype.getAccountId = function () {
        return localStorage.getItem('trading.account_id');
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('trading.token');
    };
    UserService.prototype.signOut = function () {
        localStorage.setItem('trading.token', '');
        localStorage.setItem('trading.account_id', '');
        this.router.navigate(['login']);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <app-header accountId=\"{{accountId}}\">\n  </app-header>\n\n  <md-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" class=\"chart-progress\"></md-progress-bar>\n</div>\n\n<md-sidenav-container>\n  <md-sidenav mode=\"side\" opened=\"true\">\n    <md-list>\n      <md-list-item>\n        <md-icon md-list-icon>timeline</md-icon>\n        <h4 md-line>{{selectedInstrument}}</h4>\n      </md-list-item>\n    </md-list>\n  </md-sidenav>\n\n  <div class=\"main-content\">\n    <md-card class=\"example-card\">\n      <md-card-header>\n        <md-card-title>\n          <md-select placeholder=\"Instrument\" [(ngModel)]=\"selectedInstrument\" (change)=\"toggleChart()\" name=\"instrument\">\n            <md-option *ngFor=\"let instrument of instruments\" [value]=\"instrument.name\">\n              {{instrument.name}}\n            </md-option>\n          </md-select>\n          \n          <md-select placeholder=\"Granularities\" [(ngModel)]=\"selectedGranularity\" (change)=\"toggleChart()\" name=\"granularities\">\n            <md-option *ngFor=\"let granularity of granularities\" [value]=\"granularity\">\n              {{granularity}}\n            </md-option>\n          </md-select>\n\n          <md-select placeholder=\"Limit\" [(ngModel)]=\"selectedCount\" (change)=\"toggleChart()\" name=\"limit\">\n            <md-option *ngFor=\"let limit of countLimit\" [value]=\"limit\">\n              {{limit}}\n            </md-option>\n          </md-select>\n\n          <button md-mini-fab class=\"btn-reset\" *ngIf=\"reset\" (click)=\"resetChart()\">\n            <md-icon class=\"dropdown-icon\">cached</md-icon>\n          </button>\n\n          <span class=\"btn-wrapper\">\n            <button md-raised-button color=\"primary\">Buy</button>\n            <button md-raised-button color=\"accent\">Sell</button>\n          </span>\n        </md-card-title>\n      </md-card-header>\n    </md-card>  \n\n    <md-card class=\"chart-card\">\n      <md-card-content>\n        <md-tab-group>\n          <md-tab label=\"Candles\">\n            <app-candlestick *ngIf=\"!loadingCandles\" [candles]=\"candles\">\n            </app-candlestick>\n          </md-tab>\n          <md-tab label=\"Chart\">\n            <app-barchart>\n            </app-barchart>\n          </md-tab>\n        </md-tab-group>\n      </md-card-content>\n    </md-card>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <md-icon class=\"example-icon\">verified_user</md-icon>\n  <span>Account Id - {{accountId}}</span>\n  <span class=\"example-spacer\"></span>\n  <button md-button [mdMenuTriggerFor]=\"appMenu\">\n    <md-icon class=\"dropdown-icon\">account_circle</md-icon>\n    <md-icon class=\"dropdown-icon\">arrow_drop_down</md-icon>\n  </button>\n</md-toolbar>\n\n<md-menu #appMenu=\"mdMenu\">\n  <button md-menu-item (click)=\"signOut()\">\n    <md-icon>exit_to_app</md-icon><span>Sign out</span>\n  </button>\n</md-menu>\n"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <md-form-field class=\"example-full-width\">\n    <span mdPrefix>Add &nbsp;</span>\n    <input type=\"text\" mdInput name=\"token\" placeholder=\"Token\" [(ngModel)]=\"token\">\n    <button mdSuffix class=\"btn-add\" md-mini-fab [disabled]=\"!token\">\n      <md-spinner *ngIf=\"loading\"></md-spinner>\n      <md-icon *ngIf=\"!loading\" aria-label=\"Add token button\" (click)=\"loginUser(token)\">add</md-icon>\n    </button>\n  </md-form-field>\n</form>"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"example-card\">\n  <md-card-content>\n    <p>\n      {{instrument}}\n    </p>\n    <p>\n      {{granularity}}\n    </p>\n\n    <pre>\n      {{candles | json}}\n    </pre>\n  </md-card-content>\n</md-card>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<p>Soon to be the a chart...</p>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<p>Hover over the candles to view stats.</p>\n<nvd3 [options]=\"options\" [data]=\"data\"></nvd3>"

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[985]);
//# sourceMappingURL=main.bundle.js.map