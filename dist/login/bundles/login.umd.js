(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('rxjs'), require('ngx-cookie-service'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/platform-browser/animations'), require('@angular/common'), require('@angular/material'), require('@angular/core'), require('@angular/forms'), require('@angular/common/http'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('login', ['exports', 'rxjs/operators', 'rxjs', 'ngx-cookie-service', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/platform-browser/animations', '@angular/common', '@angular/material', '@angular/core', '@angular/forms', '@angular/common/http', '@angular/router'], factory) :
    (factory((global.login = {}),global.rxjs.operators,global.rxjs,global.i2,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.dialog,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.platformBrowser.animations,global.ng.common,global.ng.material,global.ng.core,global.ng.forms,global.ng.common.http,global.ng.router));
}(this, (function (exports,operators,rxjs,i2,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,dialog,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,animations,common,material,i0,forms,i1,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginService = /** @class */ (function () {
        function LoginService() {
        }
        LoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ LoginService.ngInjectableDef = i0.defineInjectable({ factory: function LoginService_Factory() { return new LoginService(); }, token: LoginService, providedIn: "root" });
        return LoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ApiService = /** @class */ (function () {
        function ApiService(_http, _authHttp, cookieService) {
            var _this = this;
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            // public accesstoken:any='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NjgzNTgyMTAsImlhdCI6MTU2ODI3MTgxMH0.2ltvxVKwfX1uwMOwQ2Zzgp1K2jiaCDj051Wyho0Iw-Q';
            this.fileservername = [];
            this.subjectForServerUrl = new rxjs.Subject();
            this.subjectForaddEndpointUrl = new rxjs.Subject();
            this.subjectForuploadEndpointUrl = new rxjs.Subject(); //added by souresh
            //added by souresh
            this.subjectForupdateEndpointUrl = new rxjs.Subject();
            this.subjectFordeletesingleEndpointUrl = new rxjs.Subject();
            this.subjectForupdatestatusSingleEndpointUrl = new rxjs.Subject();
            this.subjectForGetdataEndpointUrl = new rxjs.Subject();
            this.subscriptionServer = this.getServerUrl().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.serverUrl = result;
                }
                else {
                    _this.serverUrl = null;
                }
            }));
            this.subscriptionaddEndpoint = this.getaddEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.addendpointUrl = result;
                }
                else {
                    _this.addendpointUrl = null;
                }
            }));
            /*********added by souresh***********/
            this.subscriptionuploadEndpoint = this.getuploadEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.uploadEndpointUrl = result;
                }
                else {
                    _this.uploadEndpointUrl = null;
                }
            }));
            /************souresh end here**************/
            this.subscriptionupdateEndpoint = this.getupdateEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updateendpointUrl = result;
                }
                else {
                    _this.updateendpointUrl = null;
                }
            }));
            this.subscriptiondeletesingleEndpoint = this.getdeletesingleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.deletesingle_endpointUrl = result;
                }
                else {
                    _this.deletesingle_endpointUrl = null;
                }
            }));
            this.subscriptionupdatestatusSingleEndpoint = this.getupdatestatus_singleEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.updatestatus_single_endpointUrl = result;
                }
                else {
                    _this.updatestatus_single_endpointUrl = null;
                }
            }));
            this.subscriptionGetdataEndpoint = this.getdataEndpoint().subscribe(( /**
             * @param {?} message
             * @return {?}
             */function (message) {
                /** @type {?} */
                var result;
                result = message;
                if (result != null) {
                    _this.getdata_endpointUrl = result;
                }
                else {
                    _this.getdata_endpointUrl = null;
                }
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setServerUrl = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForServerUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearServerUrl = /**
         * @return {?}
         */
            function () {
                this.subjectForServerUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getServerUrl = /**
         * @return {?}
         */
            function () {
                return this.subjectForServerUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setaddEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForaddEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearaddEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForaddEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getaddEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForaddEndpointUrl.asObservable();
            };
        /*****added by souresh******/
        /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setuploadEndpont = /**
         * **added by souresh*****
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForuploadEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearuploadEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForuploadEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getuploadEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForuploadEndpointUrl.asObservable();
            };
        /********souresh end here********/
        /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdateEndpoint = /**
         * *****souresh end here*******
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdateEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdateEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdateEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdateEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdateEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setdeletesingleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectFordeletesingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleardeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectFordeletesingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdeletesingleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectFordeletesingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setupdatestatus_singleEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForupdatestatusSingleEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.clearupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForupdatestatusSingleEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getupdatestatus_singleEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForupdatestatusSingleEndpointUrl.asObservable();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ApiService.prototype.setgetdataEndpoint = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.subjectForGetdataEndpointUrl.next(value);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.cleargetdataEndpoint = /**
         * @return {?}
         */
            function () {
                this.subjectForGetdataEndpointUrl.next(null);
            };
        /**
         * @return {?}
         */
        ApiService.prototype.getdataEndpoint = /**
         * @return {?}
         */
            function () {
                return this.subjectForGetdataEndpointUrl.asObservable();
            };
        /**
         * @return {?}
         */
        ApiService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.addData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                console.log('in adddata apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken //hard code written access-token(temp)
                    })
                };
                console.log('httpoptions', httpOptions, this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******added by souresh************/
        /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.uploadFile = /**
         * ****added by souresh***********
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.uploadEndpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*******souresh end here********/
        /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateData = /**
         * ****souresh end here*******
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken //hard code written access-token(temp)
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updateendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.getData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.getdata_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*************** Added by himadri start here ***************/
        /**
         * ************ Added by himadri start here **************
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.addLogin = /**
         * ************ Added by himadri start here **************
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                console.log('in addLogin apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json'
                        // 'Authorization': this.accesstoken          //hard code written access-token(temp)
                    })
                };
                console.log(this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*************** Added by himadri end here ***************/
        /*************** Added by himadri start here ***************/
        /*************** Added by himadri end here ***************/
        /**
         * ************ Added by himadri start here **************
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.forgetPassword = /*************** Added by himadri end here ***************/
            /**
             * ************ Added by himadri start here **************
             * @param {?} requestdata
             * @return {?}
             */
            function (requestdata) {
                console.log('in forgetPassword apiservice');
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json'
                        // 'Authorization': this.accesstoken          //hard code written access-token(temp)
                    })
                };
                console.log(this.serverUrl, requestdata);
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.addendpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /*************** Added by himadri end here ***************/
        /**
         * ************ Added by himadri end here **************
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteSingleData = /**
         * ************ Added by himadri end here **************
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.deleteMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.deletesingle_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForSingleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @return {?}
         */
        ApiService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} requestdata
         * @return {?}
         */
            function (requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + this.updatestatus_single_endpointUrl + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
        ApiService.prototype.CustomRequest = /**
         * @param {?} requestdata
         * @param {?} endpoint
         * @return {?}
         */
            function (requestdata, endpoint) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'access-token': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ApiService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ApiService.ngInjectableDef = i0.defineInjectable({ factory: function ApiService_Factory() { return new ApiService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ApiService, providedIn: "root" });
        return ApiService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginComponent = /** @class */ (function () {
        function LoginComponent(fb, http, router$$1, apiService) {
            this.fb = fb;
            this.http = http;
            this.router = router$$1;
            this.apiService = apiService;
            this.message = '';
            this.fromTitleValue = '';
            this.serverURL = '';
            this.signUpRouteingUrlValue = '';
            this.forgetRouteingUrlValue = '';
            this.routerStatusValue = '';
            this.logoValue = '';
            this.project_name = '';
            this.loginForm = this.fb.group({
                username: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
                password: ['', forms.Validators.required]
            });
        }
        Object.defineProperty(LoginComponent.prototype, "fromTitle", {
            set: /**
             * @param {?} fromTitleVal
             * @return {?}
             */ function (fromTitleVal) {
                this.fromTitleValue = (fromTitleVal) || '<no name set>';
                this.fromTitleValue = fromTitleVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "logo", {
            set: /**
             * @param {?} logoVal
             * @return {?}
             */ function (logoVal) {
                this.logoValue = logoVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "fullUrl", {
            set: /**
             * @param {?} fullUrlVal
             * @return {?}
             */ function (fullUrlVal) {
                this.serverURL = (fullUrlVal) || '<no name set>';
                this.serverURL = fullUrlVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "endpoint", {
            set: /**
             * @param {?} endpointVal
             * @return {?}
             */ function (endpointVal) {
                this.endpointValue = endpointVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "signUpRouteingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
                this.signUpRouteingUrlValue = routeingUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "forgetRouteingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
                this.forgetRouteingUrlValue = routeingUrlval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LoginComponent.prototype, "routerStatus", {
            set: /**
             * @param {?} routerStatusval
             * @return {?}
             */ function (routerStatusval) {
                this.routerStatusValue = (routerStatusval) || '<no name set>';
                this.routerStatusValue = routerStatusval;
                console.log(this.routerStatusValue);
                console.log(this.routerStatusValue.data.length);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        LoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl(); // Clear the server url
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverURL); // set the server url 
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint(); // clear the endpoint 
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.endpointValue); // set the endpoint
                }), 50);
                // console.log(this.addEndpointData.endpoint);
            };
        /********* Login Form Submit start here*********/
        /**
         * ****** Login Form Submit start here********
         * @return {?}
         */
        LoginComponent.prototype.loginFormSubmit = /**
         * ****** Login Form Submit start here********
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var x;
                // use for validation checking
                for (x in this.loginForm.controls) {
                    this.loginForm.controls[x].markAsTouched();
                }
                if (this.loginForm.valid) {
                    /** @type {?} */
                    var data = this.loginForm.value;
                    this.apiService.addLogin(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        // console.log(response);
                        /** @type {?} */
                        var result = {};
                        result = response;
                        if (result.status == "success") {
                            for (var key in _this.routerStatusValue.data) {
                                console.log(_this.routerStatusValue.data[key].type);
                                if (result.type === _this.routerStatusValue.data[key].type) {
                                    _this.router.navigateByUrl('/' + _this.routerStatusValue.data[key].routerNav); // navigate to dashboard url 
                                }
                            }
                            // this is use for reset the from
                            _this.formDirective.resetForm();
                        }
                        else {
                            // display error message on html
                            _this.message = result.msg;
                        }
                    }));
                }
            };
        /**
         * @param {?} val
         * @return {?}
         */
        LoginComponent.prototype.inputUntouched = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.loginForm.controls[val].markAsUntouched();
            };
        // This is use for navigate this component to forget component 
        // This is use for navigate this component to forget component 
        /**
         * @return {?}
         */
        LoginComponent.prototype.forgetpassword =
            // This is use for navigate this component to forget component 
            /**
             * @return {?}
             */
            function () {
                this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
            };
        // This is use for navigate this component to sign-Up component 
        // This is use for navigate this component to sign-Up component 
        /**
         * @return {?}
         */
        LoginComponent.prototype.signup =
            // This is use for navigate this component to sign-Up component 
            /**
             * @return {?}
             */
            function () {
                this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
            };
        LoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-login',
                        template: "<div class=\"main-div\">\n\n    <mat-card class=\"from\">\n            <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n                    <img  [src]=\"logoValue\">\n                </span>\n\n        <h2 *ngIf=\"fromTitleValue != ''\"> {{fromTitleValue}}</h2>\n\n        <form class=\"example-container\" [formGroup]=\"loginForm\" (ngSubmit)=\"loginFormSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Username\" formControlName=\"username\" (blur)=\"inputUntouched('username')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['username'].valid && loginForm.controls['username'].errors.required && loginForm.controls['username'].touched\">\n                    Username field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <mat-form-field>\n                <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n                <mat-error\n                    *ngIf=\"!loginForm.controls['password'].valid && loginForm.controls['password'].errors.required && loginForm.controls['password'].touched\">\n                    Password field can not be blank</mat-error>\n            </mat-form-field>\n\n\n            <button mat-raised-button color=\"primary\">Login</button>\n            <span class=\"signupfooter\">\n                <a (click)=\"forgetpassword()\">Forgot password</a>\n                <a (click)=\"signup()\">Sign Up</a>\n            </span>\n        </form>\n\n    </mat-card>\n\n</div>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        LoginComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: ApiService }
            ];
        };
        LoginComponent.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            fromTitle: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            fullUrl: [{ type: i0.Input }],
            endpoint: [{ type: i0.Input }],
            signUpRouteingUrl: [{ type: i0.Input }],
            forgetRouteingUrl: [{ type: i0.Input }],
            routerStatus: [{ type: i0.Input }]
        };
        return LoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SignUpComponent = /** @class */ (function () {
        function SignUpComponent(fb, http, router$$1, dialog$$1, apiService) {
            this.fb = fb;
            this.http = http;
            this.router = router$$1;
            this.dialog = dialog$$1;
            this.apiService = apiService;
            this.message = '';
            this.formTitleValue = '';
            this.serverUrlValue = '';
            this.forgetRouteingUrlValue = '';
            this.loginRouteingUrlValue = '';
            this.addEndpointValue = '';
            this.logoValue = '';
            this.signUpForm = this.fb.group({
                email: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
                firstname: ['', forms.Validators.required],
                lastname: ['', forms.Validators.required],
                password: ['', forms.Validators.required]
            });
        }
        Object.defineProperty(SignUpComponent.prototype, "formTitle", {
            set: /**
             * @param {?} formTitleVal
             * @return {?}
             */ function (formTitleVal) {
                this.formTitleValue = (formTitleVal) || '<no name set>';
                this.formTitleValue = formTitleVal;
                // console.log(this.formTitleValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignUpComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlVal
             * @return {?}
             */ function (serverUrlVal) {
                this.serverUrlValue = (serverUrlVal) || '<no name set>';
                this.serverUrlValue = serverUrlVal;
                // console.log(this.serverUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignUpComponent.prototype, "logo", {
            set: /**
             * @param {?} logoVal
             * @return {?}
             */ function (logoVal) {
                this.logoValue = logoVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignUpComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} addEndpointVal
             * @return {?}
             */ function (addEndpointVal) {
                this.addEndpointValue = addEndpointVal;
                console.log(this.addEndpointValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignUpComponent.prototype, "forgetRouteingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.forgetRouteingUrlValue = (routeingUrlval) || '<no name set>';
                this.forgetRouteingUrlValue = routeingUrlval;
                // console.log(this.forgetRouteingUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SignUpComponent.prototype, "loginRouteingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.loginRouteingUrlValue = (routeingUrlval) || '<no name set>';
                this.loginRouteingUrlValue = routeingUrlval;
                // console.log(this.loginRouteingUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        SignUpComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl(); //  Clear the server url
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint(); //  Clear the endpoint
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
                }), 50);
            };
        /********* Sign Up Form Submit start here*********/
        /**
         * ****** Sign Up Form Submit start here********
         * @return {?}
         */
        SignUpComponent.prototype.signUpFormSubmit = /**
         * ****** Sign Up Form Submit start here********
         * @return {?}
         */
            function () {
                var _this = this;
                // use for validation checking
                for (var x in this.signUpForm.controls) {
                    this.signUpForm.controls[x].markAsTouched();
                }
                if (this.signUpForm.valid) {
                    // let link: any = this.fullUrlValue;
                    /** @type {?} */
                    var data = {
                        'data': this.signUpForm.value,
                        "source": this.addEndpointValue.source
                    };
                    console.log(data);
                    this.apiService.addData(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        /** @type {?} */
                        var result = {};
                        result = response;
                        console.log(result);
                        if (result.status == "success") {
                            // this.router.navigateByUrl('/' + )     // navigate to dashboard url 
                            // this is use for reset the from
                            _this.formDirective.resetForm();
                        }
                        else {
                            // display error message on html
                            _this.message = result.msg;
                        }
                    }));
                }
            };
        /********* Sign Up Form Submit end here*********/
        // This is use for navigate this component to forget component 
        /**
         * ****** Sign Up Form Submit end here********
         * @return {?}
         */
        // This is use for navigate this component to forget component 
        SignUpComponent.prototype.forgetpassword = /**
         * ****** Sign Up Form Submit end here********
         * @return {?}
         */
            // This is use for navigate this component to forget component 
            function () {
                this.router.navigateByUrl('/' + this.forgetRouteingUrlValue);
            };
        // This is use for navigate this component to forget component 
        // This is use for navigate this component to forget component 
        /**
         * @return {?}
         */
        SignUpComponent.prototype.login =
            // This is use for navigate this component to forget component 
            /**
             * @return {?}
             */
            function () {
                this.router.navigateByUrl('/' + this.loginRouteingUrlValue);
            };
        /**
         * @param {?} val
         * @return {?}
         */
        SignUpComponent.prototype.inputUntouched = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.signUpForm.controls[val].markAsUntouched();
            };
        SignUpComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-sign-up',
                        template: "<div class=\"main-div\">\n\n    \n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpFormSubmit()\" novalidate>\n\n\n      <mat-error class=\"error\" *ngIf=\"message != ''\">{{message}}</mat-error>\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"First Name\" formControlName=\"firstname\" (blur)=\"inputUntouched('firstname')\">\n        <mat-error\n          *ngIf=\"!signUpForm.controls['firstname'].valid && signUpForm.controls['firstname'].errors.required && signUpForm.controls['firstname'].touched\">\n          First Name field can not be blank</mat-error>\n      </mat-form-field>\n\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Last Name\" formControlName=\"lastname\" (blur)=\"inputUntouched('lastname')\">\n        <mat-error\n          *ngIf=\"!signUpForm.controls['lastname'].valid && signUpForm.controls['lastname'].errors.required && signUpForm.controls['lastname'].touched\">\n          Last Name field can not be blank</mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Email\" formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!signUpForm.controls['email'].valid && signUpForm.controls['email'].errors.required && signUpForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error *ngIf=\"!signUpForm.controls['email'].valid && !signUpForm.controls['email'].errors.required\">Email is\n          not valid</mat-error>\n      </mat-form-field>\n\n\n\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n        <mat-error\n          *ngIf=\"!signUpForm.controls['password'].valid && signUpForm.controls['password'].errors.required && signUpForm.controls['password'].touched\">\n          Password field can not be blank</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Sign Up</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"forgetpassword()\">Forget Password</a>\n        <a (click)=\"login()\">Login</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        SignUpComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: material.MatDialog },
                { type: ApiService }
            ];
        };
        SignUpComponent.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            formTitle: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            forgetRouteingUrl: [{ type: i0.Input }],
            loginRouteingUrl: [{ type: i0.Input }]
        };
        return SignUpComponent;
    }());
    var commonModalComponent = /** @class */ (function () {
        function commonModalComponent(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        commonModalComponent.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        commonModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'commonModal',
                        template: "<!-- <h1 mat-dialog-title>Hi {{data.name}}</h1> -->\n<div mat-dialog-content>\n  <h2>{{data.name}}</h2>\n \n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button >Ok</button>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        commonModalComponent.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return commonModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ForgetPasswordComponent = /** @class */ (function () {
        function ForgetPasswordComponent(fb, http, router$$1, apiService) {
            this.fb = fb;
            this.http = http;
            this.router = router$$1;
            this.apiService = apiService;
            this.message = '';
            this.formTitleValue = '';
            this.serverUrlValue = '';
            this.signUpRouteingUrlValue = '';
            this.domanUrlValue = '';
            this.addEndpointValue = '';
            this.logoValue = '';
            this.forgetPasswordForm = this.fb.group({
                email: ['', forms.Validators.compose([forms.Validators.required, forms.Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            });
        }
        Object.defineProperty(ForgetPasswordComponent.prototype, "domanUrl", {
            set: /**
             * @param {?} domanUrlVal
             * @return {?}
             */ function (domanUrlVal) {
                this.domanUrlValue = (domanUrlVal) || '<no name set>';
                this.domanUrlValue = domanUrlVal;
                console.log(this.domanUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForgetPasswordComponent.prototype, "formTitle", {
            set: /**
             * @param {?} formTitleVal
             * @return {?}
             */ function (formTitleVal) {
                this.formTitleValue = (formTitleVal) || '<no name set>';
                this.formTitleValue = formTitleVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForgetPasswordComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlVal
             * @return {?}
             */ function (serverUrlVal) {
                this.serverUrlValue = (serverUrlVal) || '<no name set>';
                this.serverUrlValue = serverUrlVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForgetPasswordComponent.prototype, "logo", {
            set: /**
             * @param {?} logoVal
             * @return {?}
             */ function (logoVal) {
                this.logoValue = logoVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForgetPasswordComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} addEndpointval
             * @return {?}
             */ function (addEndpointval) {
                this.addEndpointValue = addEndpointval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ForgetPasswordComponent.prototype, "signUpRouteingUrl", {
            set: /**
             * @param {?} routeingUrlval
             * @return {?}
             */ function (routeingUrlval) {
                this.signUpRouteingUrlValue = (routeingUrlval) || '<no name set>';
                this.signUpRouteingUrlValue = routeingUrlval;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ForgetPasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl(); //  Clear the server url
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverUrlValue); //  set the server url
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint(); //  Clear the endpoint
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); //  set the endpoint
                }), 50);
            };
        /********* Forget password  Form Submit start here*********/
        /**
         * ****** Forget password  Form Submit start here********
         * @return {?}
         */
        ForgetPasswordComponent.prototype.forgetPasswordSubmit = /**
         * ****** Forget password  Form Submit start here********
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var x;
                for (x in this.forgetPasswordForm.controls) {
                    this.forgetPasswordForm.controls[x].markAsTouched();
                }
                if (this.forgetPasswordForm.valid) {
                    /** @type {?} */
                    var link = this.serverUrlValue;
                    /** @type {?} */
                    var data = this.forgetPasswordForm.value;
                    data.domanUrl = this.domanUrlValue;
                    this.apiService.forgetPassword(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        console.log(response);
                        /** @type {?} */
                        var result = {};
                        result = response;
                        if (result.status == "success") {
                            // this is use for reset the from
                            _this.formDirective.resetForm();
                        }
                        else {
                            // display error message on html
                            _this.message = result.msg;
                        }
                    }));
                }
            };
        /********* Forget password  Form Submit end here*********/
        // This is use for navigate this component to sign-Up component 
        /**
         * ****** Forget password  Form Submit end here********
         * @return {?}
         */
        // This is use for navigate this component to sign-Up component 
        ForgetPasswordComponent.prototype.signup = /**
         * ****** Forget password  Form Submit end here********
         * @return {?}
         */
            // This is use for navigate this component to sign-Up component 
            function () {
                this.router.navigateByUrl('/' + this.signUpRouteingUrlValue);
            };
        /**
         * @param {?} val
         * @return {?}
         */
        ForgetPasswordComponent.prototype.inputUntouched = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.forgetPasswordForm.controls[val].markAsUntouched();
            };
        ForgetPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-forget-password',
                        template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"formTitleValue != ''\"> {{formTitleValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"forgetPasswordForm\" (ngSubmit)=\"forgetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Email\"  formControlName=\"email\" (blur)=\"inputUntouched('email')\">\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && forgetPasswordForm.controls['email'].errors.required && forgetPasswordForm.controls['email'].touched\">\n          Email field can not be blank</mat-error>\n        <mat-error\n          *ngIf=\"!forgetPasswordForm.controls['email'].valid && !forgetPasswordForm.controls['email'].errors.required\">\n          Email is not valid</mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Forget Password</button>\n      <span class=\"signupfooter\">\n        <a (click)=\"signup()\">Sign Up</a>\n      </span>\n    </form>\n  </mat-card>\n</div>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        ForgetPasswordComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: ApiService }
            ];
        };
        ForgetPasswordComponent.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            domanUrl: [{ type: i0.Input }],
            formTitle: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            logo: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            signUpRouteingUrl: [{ type: i0.Input }]
        };
        return ForgetPasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResetPasswordComponent = /** @class */ (function () {
        function ResetPasswordComponent(fb, http, router$$1, route, apiService) {
            var _this = this;
            this.fb = fb;
            this.http = http;
            this.router = router$$1;
            this.route = route;
            this.apiService = apiService;
            this.fromTitleNameValue = '';
            this.serverUrlValue = '';
            this.message = '';
            this.addEndpointValue = '';
            this.logoValue = '';
            this.route.params.subscribe(( /**
             * @param {?} params
             * @return {?}
             */function (params) {
                _this.accesscode = params['token'];
                console.log(_this.accesscode);
            }));
            this.resetPasswordForm = this.fb.group({
                // password: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
                password: ['', forms.Validators.required],
                confirmPassword: ['', forms.Validators.required],
            }, {
                validator: this.machpassword('password', 'confirmPassword')
            });
        }
        Object.defineProperty(ResetPasswordComponent.prototype, "fromTitleName", {
            // public signUpRouteingUrlValue: any = '';
            set: 
            // public signUpRouteingUrlValue: any = '';
            /**
             * @param {?} fromTitleNameVal
             * @return {?}
             */
            function (fromTitleNameVal) {
                this.fromTitleNameValue = (fromTitleNameVal) || '<no name set>';
                this.fromTitleNameValue = fromTitleNameVal;
                console.log(this.fromTitleNameValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResetPasswordComponent.prototype, "serverUrl", {
            set: /**
             * @param {?} serverUrlVal
             * @return {?}
             */ function (serverUrlVal) {
                this.serverUrlValue = (serverUrlVal) || '<no name set>';
                this.serverUrlValue = serverUrlVal;
                console.log(this.serverUrlValue);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResetPasswordComponent.prototype, "addEndpoint", {
            set: /**
             * @param {?} addEndpointVal
             * @return {?}
             */ function (addEndpointVal) {
                this.addEndpointValue = addEndpointVal;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ResetPasswordComponent.prototype, "logo", {
            set: /**
             * @param {?} logoVal
             * @return {?}
             */ function (logoVal) {
                this.logoValue = logoVal;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ResetPasswordComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.apiService.clearServerUrl(); // Clear the server url
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setServerUrl(_this.serverUrlValue); // set the server url 
                }), 50);
                // console.log(this.serverURL);
                this.apiService.clearaddEndpoint(); // clear the endpoint 
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.apiService.setaddEndpoint(_this.addEndpointValue.endpoint); // set the endpoint
                }), 50);
                // console.log(this.addEndpointData.endpoint);
            };
        //  this function is use for mach password and confirm Password 
        //  this function is use for mach password and confirm Password 
        /**
         * @param {?} passwordkye
         * @param {?} confirmpasswordkye
         * @return {?}
         */
        ResetPasswordComponent.prototype.machpassword =
            //  this function is use for mach password and confirm Password 
            /**
             * @param {?} passwordkye
             * @param {?} confirmpasswordkye
             * @return {?}
             */
            function (passwordkye, confirmpasswordkye) {
                return ( /**
                 * @param {?} group
                 * @return {?}
                 */function (group) {
                    /** @type {?} */
                    var passwordInput = group.controls[passwordkye];
                    /** @type {?} */
                    var confirmpasswordInput = group.controls[confirmpasswordkye];
                    if (passwordInput.value !== confirmpasswordInput.value) {
                        return confirmpasswordInput.setErrors({ notEquivalent: true });
                    }
                    else {
                        return confirmpasswordInput.setErrors(null);
                    }
                });
            };
        /********* Reset Password Form Submit start here*********/
        /**
         * ****** Reset Password Form Submit start here********
         * @return {?}
         */
        ResetPasswordComponent.prototype.resetPasswordSubmit = /**
         * ****** Reset Password Form Submit start here********
         * @return {?}
         */
            function () {
                var _this = this;
                console.log(this.resetPasswordForm.value);
                /** @type {?} */
                var x;
                for (x in this.resetPasswordForm.controls) {
                    this.resetPasswordForm.controls[x].markAsTouched();
                }
                if (this.resetPasswordForm.valid) {
                    /** @type {?} */
                    var data1 = { "password": this.resetPasswordForm.value.password, "accesscode": this.accesscode };
                    /** @type {?} */
                    var data = {
                        'data': data1,
                        "source": this.addEndpointValue.source
                    };
                    // data.accesscode = this.accesscode;
                    this.apiService.addData(data).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        /** @type {?} */
                        var result = {};
                        result = response;
                        console.log(result);
                        if (result.status == "success") {
                            _this.formDirective.resetForm(); // Use for reset the form
                        }
                        else {
                            _this.message = result.msg;
                        }
                    }));
                }
            };
        /********* Reset Password Form Submit end here*********/
        /**
         * ****** Reset Password Form Submit end here********
         * @param {?} val
         * @return {?}
         */
        ResetPasswordComponent.prototype.inputUntouched = /**
         * ****** Reset Password Form Submit end here********
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.resetPasswordForm.controls[val].markAsUntouched();
            };
        ResetPasswordComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-reset-password',
                        template: "<div class=\"main-div\">\n\n  <mat-card class=\"from\">\n      <span class=\"logowrapper\" *ngIf=\"logoValue != ''\" >\n          <img  [src]=\"logoValue\">\n      </span>\n\n    <h2 *ngIf=\"fromTitleNameValue != ''\"> {{fromTitleNameValue}}</h2>\n\n\n    <form class=\"example-container\" [formGroup]=\"resetPasswordForm\" (ngSubmit)=\"resetPasswordSubmit()\" novalidate>\n<mat-error class=\"error\" *ngIf=\"message !=''\">{{message}}</mat-error>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\" (blur)=\"inputUntouched('password')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['password'].valid && resetPasswordForm.controls['password'].errors.required && resetPasswordForm.controls['password'].touched\">\n          Password field can not be blank</mat-error>\n          <!-- <mat-error  *ngIf=\"!resetPasswordForm.controls['password'].errors.required  && resetPasswordForm.controls['password'].touched\">Minimum length for password is 4!</mat-error> -->\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Confirm Password\" type=\"password\"  formControlName=\"confirmPassword\" (blur)=\"inputUntouched('confirmPassword')\">\n        <mat-error\n          *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].errors.required && resetPasswordForm.controls['confirmPassword'].touched\">\n          Confirm Password field can not be blank</mat-error>\n        <!-- <mat-error *ngIf=\"f.confirmPassword.errors.mustMatch\">Confirm Password is not valid</mat-error> -->\n        <mat-error *ngIf=\"!resetPasswordForm.controls['confirmPassword'].valid && resetPasswordForm.controls['confirmPassword'].touched\">Password does not match </mat-error>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"primary\">Reset Password</button>\n\n    </form>\n  </mat-card>\n</div>\n\n<!-- <button (click)=\"openSnackBar('succes', 'ok')\"> ok</button> -->",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.from{width:30%;margin:0 auto}.from h2{text-align:center;background-color:#00f;color:#fff;padding:15px}.from a{padding-right:30px}.main-div{height:100vh;display:flex;justify-content:center;align-items:center}.signupfooter{margin-top:12px;display:flex;justify-content:space-between;align-items:center}.signupfooter a{cursor:pointer}.error{text-align:center}.logowrapper{margin:0 auto;display:block;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        ResetPasswordComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: i1.HttpClient },
                { type: router.Router },
                { type: router.ActivatedRoute },
                { type: ApiService }
            ];
        };
        ResetPasswordComponent.propDecorators = {
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            fromTitleName: [{ type: i0.Input }],
            serverUrl: [{ type: i0.Input }],
            addEndpoint: [{ type: i0.Input }],
            logo: [{ type: i0.Input }]
        };
        return ResetPasswordComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginModule = /** @class */ (function () {
        function LoginModule() {
        }
        LoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent, commonModalComponent],
                        imports: [
                            DemoMaterialModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            animations.BrowserAnimationsModule,
                            common.CommonModule,
                            i1.HttpClientModule
                        ],
                        exports: [LoginComponent, SignUpComponent, ForgetPasswordComponent, ResetPasswordComponent],
                        providers: [ApiService],
                        bootstrap: [],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        entryComponents: [commonModalComponent]
                    },] }
        ];
        return LoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.LoginService = LoginService;
    exports.LoginComponent = LoginComponent;
    exports.LoginModule = LoginModule;
    exports.ɵa = ApiService;
    exports.ɵd = ForgetPasswordComponent;
    exports.ɵf = DemoMaterialModule;
    exports.ɵe = ResetPasswordComponent;
    exports.ɵb = SignUpComponent;
    exports.ɵc = commonModalComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=login.umd.js.map