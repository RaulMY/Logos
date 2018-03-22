webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 5; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 80%; /* Full width */\n    margin: 50px 10%;\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgba(53,38,82,0.4);\n}\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 40px auto; /* 15% from the top and centered */\n    border: 1px solid #888;\n    width: 90%; /* Could be more or less, depending on screen size */\n}\n/* The Close Button */\n.close {\n    /* Position it in the top right corner outside of the modal */\n    position: absolute;\n    right: 25px;\n    top: 0; \n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n/* Close button on hover */\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\nnav{\n    background-color: #5680E9;\n    padding: 0 5%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav> \n        <div class=\"nav-wrapper\">\n            <a [routerLink]=\"['']\" class=\"brand-logo\">Logos</a>\n            <a data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n            <ul class=\"right hide-on-med-and-down\">\n              <li *ngIf=\"!user\" onclick=\"document.getElementById('id01').style.display='block'\"><a>Log In</a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['user', user._id]\" >{{user.username}}<span class=\"new badge\">{{user.notifications.length}}</span></a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['inbox']\">Inbox <span class=\"blue badge\">{{user.messages.length}}</span></a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['new']\">Share an Idea</a></li>\n              <li *ngIf=\"user\" (click)=\"logout()\"><a [routerLink]=\"['']\" >Log Out</a></li>\n            </ul>\n            <ul class=\"side-nav\" id=\"mobile-demo\">\n              <li *ngIf=\"!user\" onclick=\"document.getElementById('id01').style.display='block'\"><a>Log In</a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['user', user._id]\">{{user.username}}<span class=\"new badge\">{{user.notifications.length}}</span></a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['inbox']\">Inbox <span class=\"blue badge\">{{user.messages.length}}</span></a></li>\n              <li *ngIf=\"user\"><a [routerLink]=\"['new']\">Share an Idea</a></li>\n              <li *ngIf=\"user\" (click)=\"logout()\"><a [routerLink]=\"['']\" >Log Out</a></li>\n            </ul>\n          </div>\n    </nav>\n  <div id=\"id01\" class=\"modal\" *ngIf=\"!user\">\n      <span onclick=\"document.getElementById('id01').style.display='none'\" \n    class=\"close\" title=\"Close Modal\">&times;</span>\n    <form class=\"modal-content animate\">\n      <h2> Login or Signup </h2>\n      <label> Username </label>\n      <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n      <br>\n      <label> Password </label>\n      <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n    \n      <button (click)=\"login()\"> Log In </button>\n      <button (click)=\"signup()\"> Sign Up </button>\n\n    <p class=\"error\"> {{ error }} </p>\n    </form>  \n  </div>\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(session, router) {
        this.session = session;
        this.router = router;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    AppComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    AppComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.formInfo)
            .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.session.logout()
            .subscribe(function () { return _this.successCb(null); }, function (err) { return _this.errorCb(err); });
    };
    AppComponent.prototype.getPrivateData = function () {
        var _this = this;
        this.session.getPrivateData()
            .subscribe(function (data) { return _this.privateData = data; }, function (err) { return _this.error = err; });
    };
    AppComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    AppComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_ideas_service__ = __webpack_require__("./src/app/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__idea_list_idea_list_component__ = __webpack_require__("./src/app/idea-list/idea-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_idea_create_idea_component__ = __webpack_require__("./src/app/create-idea/create-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__display_idea_display_idea_component__ = __webpack_require__("./src/app/display-idea/display-idea.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contribute_contribute_component__ = __webpack_require__("./src/app/contribute/contribute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__inbox_inbox_component__ = __webpack_require__("./src/app/inbox/inbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_9__idea_list_idea_list_component__["a" /* IdeaListComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_10__create_idea_create_idea_component__["a" /* CreateIdeaComponent */] },
    { path: 'inbox', component: __WEBPACK_IMPORTED_MODULE_14__inbox_inbox_component__["a" /* InboxComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_11__display_idea_display_idea_component__["a" /* DisplayIdeaComponent */] },
    { path: ':id/contribute', component: __WEBPACK_IMPORTED_MODULE_12__contribute_contribute_component__["a" /* ContributeComponent */] },
    { path: 'user/:userid', component: __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__idea_list_idea_list_component__["a" /* IdeaListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__create_idea_create_idea_component__["a" /* CreateIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__display_idea_display_idea_component__["a" /* DisplayIdeaComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contribute_contribute_component__["a" /* ContributeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__inbox_inbox_component__["a" /* InboxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_6__services_ideas_service__["a" /* IdeasService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contribute/contribute.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.container-input{\n    width: 98%;\n    margin: 20px 1%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n@media screen and (min-width:600px){\n    .container-input{\n        width: 48%;\n        margin: 5px 1%;\n    }\n \n  }\n\n@media screen and (min-width:1000px){\n    .container-input{\n        width: 30%;\n        margin: 5px 1%;\n    }\n \n  }"

/***/ }),

/***/ "./src/app/contribute/contribute.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<div class=\"row container-input\">\n    <div>\n      <h5>Contribute</h5>\n      <div class=\"input-field\">\n        <input id=\"comment\" type=\"text\" class=\"validate\" [(ngModel)] =\"contentComment\">\n        <label for=\"commet\">What do you think?</label>\n      </div>\n    </div>\n\n    <div class=\"btn\" (click)=\"createComment()\">Share it!</div>\n</div>\n\n<div class=\"row container-input\">\n    <div>\n        <h5>Recommend</h5>\n      <div class=\"input-field\">\n        <input id=\"rec\" type=\"text\" class=\"validate\" [(ngModel)] =\"contentRec\">\n        <label for=\"rec\">Know of a useful library/framework/API for this idea?</label>\n      </div>\n    </div>\n    <div>\n        <div class=\"input-field\">\n          <input id=\"linkRec\" type=\"text\" class=\"validate\" [(ngModel)] =\"linkRec\">\n          <label for=\"linkRec\">Link it!</label>\n        </div>\n      </div>\n    <div class=\"btn red\" (click)=\"createRec()\">Recommend it!</div>\n</div>\n\n<div class=\"row container-input\">\n    <div>\n        <h5>Let them know</h5>\n      <div class=\"input-field\">\n        <input id=\"similar\" type=\"text\" class=\"validate\" [(ngModel)] =\"contentSimilar\">\n        <label for=\"similar\">Know of a similar idea?</label>\n      </div>\n    </div>\n    <div>\n        <div class=\"input-field\">\n          <input id=\"linkSim\" type=\"text\" class=\"validate\" [(ngModel)] =\"linkSimilar\">\n          <label for=\"linkSim\">Link it!</label>\n        </div>\n      </div>\n    <div class=\"btn blue\" (click)=\"createSim()\">Share it!</div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/contribute/contribute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContributeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/app/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContributeComponent = /** @class */ (function () {
    function ContributeComponent(session, router, ideas, route) {
        this.session = session;
        this.router = router;
        this.ideas = ideas;
        this.route = route;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: []
        };
        this.nuComment = {
            authorId: '',
            content: '',
            ideaId: this.route.snapshot.params['id'],
            type: '',
            link: ''
        };
        this.contentComment = '';
        this.contentRec = '';
        this.contentSimilar = '';
        this.linkRec = '';
        this.linkSimilar = '';
        this.idea = {
            title: '',
            description: '',
            authorId: {
                username: '',
                picPath: '',
                _id: ''
            },
            category: '',
            comments: [],
            ratings: [],
            followers: [],
            similar: [],
            picPath: 'images/svg/other'
        };
    }
    ContributeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
        this.ideas.getIdea(this.route.snapshot.params['id'])
            .subscribe(function (list) {
            _this.idea = list;
            console.log(list);
        });
    };
    ContributeComponent.prototype.successCb = function (user) {
        this.user = user;
        this.nuComment.authorId = user._id;
    };
    ContributeComponent.prototype.update = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
        this.ideas.getIdea(this.route.snapshot.params['id'])
            .subscribe(function (list) {
            _this.idea = list;
            console.log(list);
        });
    };
    ContributeComponent.prototype.createComment = function () {
        var _this = this;
        this.ideas.notify(this.idea.authorId._id, { content: this.idea.title + " got a new Contribution" })
            .subscribe(function (not) {
            _this.nuComment.type = 'comment';
            _this.nuComment.content = _this.contentComment;
            _this.ideas.newComment(_this.nuComment)
                .subscribe(function (nuComment) {
                _this.nuComment = {
                    authorId: '',
                    content: '',
                    link: '',
                    ideaId: _this.route.snapshot.params['id'],
                    type: ''
                };
            });
        });
    };
    ContributeComponent.prototype.createRec = function () {
        var _this = this;
        this.ideas.notify(this.idea.authorId._id, { content: this.idea.title + " got a new Recommendation" })
            .subscribe(function (not) {
            _this.nuComment.type = 'rec';
            _this.nuComment.content = _this.contentRec;
            _this.nuComment.link = _this.linkRec;
            _this.ideas.newComment(_this.nuComment)
                .subscribe(function (nuComment) {
                _this.nuComment = {
                    authorId: '',
                    content: '',
                    link: '',
                    ideaId: _this.route.snapshot.params['id'],
                    type: ''
                };
            });
        });
    };
    ContributeComponent.prototype.createSim = function () {
        var _this = this;
        this.ideas.notify(this.idea.authorId._id, { content: this.idea.title + " got a new Similar" })
            .subscribe(function (not) {
            _this.nuComment.type = 'sim';
            _this.nuComment.content = _this.contentSimilar;
            _this.nuComment.link = _this.linkSimilar;
            _this.ideas.newComment(_this.nuComment)
                .subscribe(function (nuComment) {
                _this.nuComment = {
                    authorId: '',
                    content: '',
                    link: '',
                    ideaId: _this.route.snapshot.params['id'],
                    type: ''
                };
            });
        });
    };
    ContributeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contribute',
            template: __webpack_require__("./src/app/contribute/contribute.component.html"),
            styles: [__webpack_require__("./src/app/contribute/contribute.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ContributeComponent);
    return ContributeComponent;
}());



/***/ }),

/***/ "./src/app/create-idea/create-idea.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=radio] {\n    display:none;\n    opacity: 0;\n}\n\ninput[type=radio] + label {\n    opacity: 0.5;\n    height: 150px;\n    width: 100px;\n    display:inline-block;\n    padding: 0 0 0 0px;\n    text-align: center\n}\n\ninput[type=radio]:checked + label {\n    opacity: 1;\n    height: 150px;\n    width: 100px;\n    display:inline-block;\n    padding: 0 0 0 0px;\n    text-align: center\n}\n\n[type=\"radio\"]+label:before, [type=\"radio\"]:not(.filled-in)+label:after{\n    display: none;\n}\n\n.options-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.main-container{\n    margin: 10px 5%;\n}"

/***/ }),

/***/ "./src/app/create-idea/create-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"row segment\">\n      <div class=\"input-field\">\n        <input id=\"title\" type=\"text\" class=\"validate\" [(ngModel)] =\"nuIdea.title\">\n        <label for=\"title\">Your idea in one sentence</label>\n      </div>\n    </div>\n        <label for=\"category\">Choose a category</label>\n        <div class=\"options-container segment\">\n        <input type=\"radio\" name=\"category\" id=\"finance\" (change)='newValue(value)' value=\"finance\" [(ngModel)]=\"value\" /><label for=\"finance\"><img src=\"http://arcky.herokuapp.com/images/svg/finance.svg\"><span>Finance</span></label>\n        <input type=\"radio\" name=\"category\" id=\"organization\" (change)='newValue(value)' value=\"organization\" [(ngModel)]=\"value\"/><label for=\"organization\"><img src=\"http://arcky.herokuapp.com/images/svg/organization.svg\"><span>Organization</span></label>\n        <input type=\"radio\" name=\"category\" id=\"social\" (change)='newValue(value)' value=\"social\" [(ngModel)]=\"value\"/><label for=\"social\"><img src=\"http://arcky.herokuapp.com/images/svg/social.svg\"><span>Social</span></label>\n        <input type=\"radio\" name=\"category\" id=\"crowdfunding\" (change)='newValue(value)' value=\"crowdfunding\" [(ngModel)]=\"value\"/><label for=\"crowdfunding\"><img src=\"http://arcky.herokuapp.com/images/svg/crowdfunding.svg\"><span>Crowdfunding</span></label>\n        <input type=\"radio\" name=\"category\" id=\"education\" (change)='newValue(value)' value=\"education\" [(ngModel)]=\"value\"/><label for=\"education\"><img src=\"http://arcky.herokuapp.com/images/svg/education.svg\"><span>Education</span></label>\n        <input type=\"radio\" name=\"category\" id=\"travel\" (change)='newValue(value)' value=\"travel\" [(ngModel)]=\"value\"/><label for=\"travel\"><img src=\"http://arcky.herokuapp.com/images/svg/travel.svg\"><span>Travel</span></label>\n        <input type=\"radio\" name=\"category\" id=\"food\" (change)='newValue(value)' value=\"food\" [(ngModel)]=\"value\"/><label for=\"food\"><img src=\"http://arcky.herokuapp.com/images/svg/food.svg\"><span>Food</span></label>\n        <input type=\"radio\" name=\"category\" id=\"gaming\" (change)='newValue(value)' value=\"gaming\" [(ngModel)]=\"value\"/><label for=\"gaming\"><img src=\"http://arcky.herokuapp.com/images/svg/gaming.svg\"><span>Gaming</span></label>\n        <input type=\"radio\" name=\"category\" id=\"ecommerce\" (change)='newValue(value)' value=\"ecommerce\" [(ngModel)]=\"value\"/><label for=\"ecommerce\"><img src=\"http://arcky.herokuapp.com/images/svg/ecommerce.svg\"><span>E-commerce</span></label>\n        <input type=\"radio\" name=\"category\" id=\"other\" (change)='newValue(value)' value=\"other\" [(ngModel)]=\"value\"/><label for=\"other\"><img src=\"http://arcky.herokuapp.com/images/svg/other.svg\"><span>Other</span></label>\n        </div>\n        <br>\n    <div class=\"row segment\">\n      <div class=\"input-field\">\n        <input id=\"description\" type=\"text\" class=\"validate\" [(ngModel)] =\"nuIdea.description\">\n        <label for=\"description\">Explain it a bit more here</label>\n      </div>\n    </div>\n    <div class=\"row segment\">\n        <div class=\"input-field\">\n          <input id=\"tags\" type=\"text\" class=\"validate\" [(ngModel)] =\"tags\">\n          <label for=\"tags\">Write a few tags (eg: finance, uber, travel)</label>\n        </div>\n      </div>\n    <div class=\"btn\" (click)=\"create()\">Share it!</div>\n</div>"

/***/ }),

/***/ "./src/app/create-idea/create-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/app/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateIdeaComponent = /** @class */ (function () {
    function CreateIdeaComponent(session, router, ideas) {
        this.session = session;
        this.router = router;
        this.ideas = ideas;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: []
        };
        this.nuIdea = {
            authorId: '',
            description: '',
            title: '',
            category: '',
            tags: []
        };
        this.tags = '';
    }
    CreateIdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    CreateIdeaComponent.prototype.successCb = function (user) {
        this.user = user;
        this.nuIdea.authorId = user._id;
    };
    CreateIdeaComponent.prototype.update = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
    };
    CreateIdeaComponent.prototype.create = function () {
        var _this = this;
        this.nuIdea.tags = this.tags.toLowerCase().split(' ');
        this.ideas.newIdea(this.nuIdea)
            .subscribe(function (idea) {
            _this.nuIdea = {
                authorId: '',
                description: '',
                title: '',
                category: '',
                tags: []
            };
            _this.tags = '';
        });
    };
    CreateIdeaComponent.prototype.newValue = function (value) {
        this.nuIdea.category = value;
    };
    CreateIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-idea',
            template: __webpack_require__("./src/app/create-idea/create-idea.component.html"),
            styles: [__webpack_require__("./src/app/create-idea/create-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */]])
    ], CreateIdeaComponent);
    return CreateIdeaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/display-idea/display-idea.component.css":
/***/ (function(module, exports) {

module.exports = ".idea-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 95%;\n    padding:  5px 2.5%;\n    margin: 10px 2.5%;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\n.idea-container img{\n    width: 30%;\n}\n\n.info-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n}\n\n.low-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n#main-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.upper-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n}\n\n.idea{\n    width: 45%;\n    margin: 5px 1.5%;\n    text-align: center;\n}\n\n.comment-container{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 95%;\n    padding:  5px 2.5%;\n    margin: 10px 2.5%;\n}\n\n.btn{\n    margin: 5px;\n}\n\n.contact-form{\n    width: 80%;\n    margin: 20px 10%;\n}\n\n@media screen and (min-width:1000px){\n    .idea-container, .comment-container{\n        width: 45%;\n    }\n    .idea{\n        width: 30%;\n    }\n  }"

/***/ }),

/***/ "./src/app/display-idea/display-idea.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\" *ngIf=\"!contact\">\n  <div class=\"idea-container card\">\n      <img [src]=\"'http://arcky.herokuapp.com/'+idea.picPath+'.svg'\" alt=\"Wait for it\">\n    \n    <div *ngIf=\"!edit\" class=\"info-container\">  \n      <span><b>{{idea.title}}</b> by <a [routerLink]=\"['../user', idea.authorId._id]\"><b>{{idea.authorId.username}}</b></a></span>\n      <p>{{idea.description}}</p>\n      <div class=\"low-container\">\n    <div *ngIf=\"user._id != idea.authorId._id && user.username !== ''\" class=\"btn blue\" (click)=\"toggleContact()\">Contact</div>\n    <div *ngIf=\"idea.followers.indexOf(user._id)==-1 && user.username !== ''\" class=\"btn green\" (click)=\"follow()\">Follow | {{idea.followers.length}}</div>\n    <div *ngIf=\"idea.followers.indexOf(user._id)!=-1 && user.username !== ''\" class=\"btn green\" (click)=\"unfollow()\">Following | {{idea.followers.length}}</div>\n    <div *ngIf=\"user._id != idea.authorId._id && user.username !== ''\" [routerLink]=\"['../', idea._id, 'contribute']\" class=\"btn orange\">Contribute</div>\n    <div *ngIf=\"user._id === idea.authorId._id && user.username !== ''\" (click)=\"editChange()\" class=\"btn red\">Edit Idea</div>\n      </div>\n    </div>\n    <div *ngIf=\"edit\" class=\"info-container\">  \n            <label>Idea Title</label>\n            <input [(ngModel)]=\"idea.title\">  \n            <label>Describe your idea</label>\n            <input [(ngModel)]=\"idea.description\">\n            <div class=\"low-container\">\n          <div *ngIf=\"user._id != idea.authorId._id && user.username !== ''\" class=\"btn blue\" (click)=\"toggleContact()\">Contact</div>\n          <div *ngIf=\"idea.followers.indexOf(user._id)==-1 && user.username !== ''\" class=\"btn green\" (click)=\"follow()\">Follow | {{idea.followers.length}}</div>\n          <div *ngIf=\"idea.followers.indexOf(user._id)!=-1 && user.username !== ''\" class=\"btn green\" (click)=\"unfollow()\">Following | {{idea.followers.length}}</div>\n          <div *ngIf=\"user._id != idea.authorId._id && user.username !== ''\" [routerLink]=\"['../', idea._id, 'contribute']\" class=\"btn orange\">Contribute</div>\n          <div *ngIf=\"user._id === idea.authorId._id && user.username !== ''\" (click)=\"saveChange()\" class=\"btn red\">Save Idea</div>\n            </div>\n          </div>\n  </div>\n\n  <div class=\"comment-container card\">\n    <div class=\"upper-container\">\n      <h5>Top Contributions</h5>\n      <button (click)=\"toggleCon()\" class=\"btn blue\">See All</button>\n    </div>\n    <div *ngIf=\"!allCon\" class=\"low-container\">\n      <div class=\"idea card\" *ngFor=\"let comment of contributions.slice(0,3)\">\n        {{comment.content}}\n        <div class=\"low-container\">\n            <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n            <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n            <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"allCon\" class=\"low-container\">\n            <div class=\"idea card\" *ngFor=\"let comment of contributions\">\n              {{comment.content}}\n              <div class=\"low-container\">\n                  <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n                  <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n                  <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n                </div>\n            </div>\n          </div>\n  </div>\n\n  <div class=\"comment-container card\">\n      <div class=\"upper-container\">\n        <h5>Similar Projects</h5>\n        <button (click)=\"toggleSim()\" class=\"btn blue\">See All</button>\n      </div>\n      <div *ngIf=\"!allSim\" class=\"low-container\">\n            <div class=\"idea card\" *ngFor=\"let comment of similars.slice(0,3)\">\n              {{comment.content}}\n              <div class=\"low-container\">\n                  <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n                  <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n                  <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n                </div>\n            </div>\n    </div>\n    <div *ngIf=\"allSim\" class=\"low-container\">\n            <div class=\"idea card\" *ngFor=\"let comment of similars\">\n              {{comment.content}}\n              <div class=\"low-container\">\n                  <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n                  <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n                  <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n              </div>\n            </div>\n          </div> \n    </div>\n\n    <div class=\"comment-container card\">\n        <div class=\"upper-container\">\n          <h5>Recommendations</h5>\n          <button (click)=\"toggleRec()\" class=\"btn blue\">See All</button>\n        </div>\n        <div *ngIf=\"!allRec\" class=\"low-container\">\n                <div class=\"idea card\" *ngFor=\"let comment of recs.slice(0,3)\">\n                  {{comment.content}}\n                  <div class=\"low-container\">\n                      <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n                      <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n                      <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n                    </div>\n                </div>\n              </div>\n              <div *ngIf=\"allRec\" class=\"low-container\">\n                    <div class=\"idea card\" *ngFor=\"let comment of recs\">\n                      {{comment.content}}\n                      <div class=\"low-container\">\n                          <span><a [routerLink]=\"['../user', comment.authorId._id]\">{{comment.authorId.username}}</a></span>\n                          <button (click)=\"rateDown(comment._id)\" class=\"red\">-</button><span>{{comment.rating.length}}</span>\n                          <button (click)=\"rateUp(comment._id)\" class=\"green\">+</button>\n                        </div>\n                    </div>\n                  </div>\n    </div>\n</div>\n<div *ngIf=\"contact\" class=\"contact-form\">\n  <h4>Conctact the creator of this idea!</h4>\n        <div class=\"row\">\n                <div class=\"input-field\">\n                  <input id=\"similar\" type=\"text\" class=\"validate\" [(ngModel)] =\"message.title\">\n                  <label for=\"similar\">Subject</label>\n                </div>\n              </div>\n              <div class=\"row\">\n                  <div class=\"input-field\">\n                    <input id=\"linkSim\" type=\"text\" class=\"validate\" [(ngModel)] =\"message.content\">\n                    <label for=\"linkSim\">What do you want to say?</label>\n                  </div>\n                </div>\n              <div class=\"btn blue\" (click)=\"sendMessage()\">Send!</div>\n</div>"

/***/ }),

/***/ "./src/app/display-idea/display-idea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayIdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/app/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayIdeaComponent = /** @class */ (function () {
    function DisplayIdeaComponent(session, router, ideas, route) {
        this.session = session;
        this.router = router;
        this.ideas = ideas;
        this.route = route;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: [],
            _id: ''
        };
        this.id = this.route.snapshot.params['id'];
        this.idea = {
            title: '',
            description: '',
            authorId: {
                username: '',
                picPath: '',
                id: ''
            },
            category: '',
            comments: [],
            ratings: [],
            followers: [],
            similar: [],
            picPath: 'images/svg/other'
        };
        this.contributions = [];
        this.similars = [];
        this.recs = [];
        this.contact = false;
        this.message = {
            title: '',
            content: '',
            recId: '',
            sendId: ''
        };
        this.allCon = false;
        this.allSim = false;
        this.allRec = false;
        this.edit = false;
    }
    DisplayIdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
        this.ideas.getIdea(this.route.snapshot.params['id'])
            .subscribe(function (list) {
            _this.idea = list;
            console.log(_this.idea);
            _this.message.recId = list.authorId._id;
            list.comments.forEach(function (comment) {
                if (comment.type === 'comment') {
                    _this.contributions.unshift(comment);
                }
            });
            _this.contributions.sort(function (a, b) {
                return b.rating.length - a.rating.length;
            });
            list.comments.forEach(function (comment) {
                if (comment.type === 'sim') {
                    _this.similars.unshift(comment);
                }
            });
            _this.similars.sort(function (a, b) {
                return b.rating.length - a.rating.length;
            });
            list.comments.forEach(function (comment) {
                if (comment.type === 'red') {
                    _this.recs.unshift(comment);
                }
            });
            _this.recs.sort(function (a, b) {
                return b.rating.length - a.rating.length;
            });
        });
    };
    DisplayIdeaComponent.prototype.update = function () {
        var _this = this;
        this.ideas.getIdea(this.route.snapshot.params['id'])
            .subscribe(function (list) {
            _this.idea = list;
            console.log(_this.idea);
            _this.message.recId = list.authorId._id;
            _this.contributions = [];
            _this.similars = [];
            _this.recs = [];
            list.comments.forEach(function (comment) {
                if (comment.type === 'comment') {
                    _this.contributions.unshift(comment);
                }
            });
            list.comments.forEach(function (comment) {
                if (comment.type === 'sim') {
                    _this.similars.unshift(comment);
                }
            });
            list.comments.forEach(function (comment) {
                if (comment.type === 'red') {
                    _this.recs.unshift(comment);
                }
            });
        });
    };
    DisplayIdeaComponent.prototype.successCb = function (user) {
        this.user = user;
        this.message.sendId = user._id;
        console.log(this.user);
    };
    DisplayIdeaComponent.prototype.toggleContact = function () {
        if (this.contact) {
            this.contact = false;
        }
        else {
            this.contact = true;
        }
        console.log(this.contact);
    };
    DisplayIdeaComponent.prototype.sendMessage = function () {
        if (this.contact) {
            this.contact = false;
        }
        else {
            this.contact = true;
        }
        this.ideas.sendMessage(this.message).subscribe();
        this.message.title = '';
        this.message.content = '';
        console.log(this.message);
    };
    DisplayIdeaComponent.prototype.toggleCon = function () {
        if (this.allCon) {
            this.allCon = false;
        }
        else {
            this.allCon = true;
        }
    };
    DisplayIdeaComponent.prototype.toggleSim = function () {
        if (this.allSim) {
            this.allSim = false;
        }
        else {
            this.allSim = true;
        }
    };
    DisplayIdeaComponent.prototype.toggleRec = function () {
        if (this.allRec) {
            this.allRec = false;
        }
        else {
            this.allRec = true;
        }
    };
    DisplayIdeaComponent.prototype.rateUp = function (commentId) {
        var _this = this;
        this.ideas.rateUp(commentId, this.user._id).subscribe(function (res) { return _this.update(); });
    };
    DisplayIdeaComponent.prototype.rateDown = function (commentId) {
        var _this = this;
        this.ideas.rateDown(commentId, this.user._id).subscribe(function (res) { return _this.update(); });
    };
    DisplayIdeaComponent.prototype.follow = function () {
        var _this = this;
        this.ideas.follow(this.user._id, this.id)
            .subscribe(function (res) { return _this.update(); });
    };
    DisplayIdeaComponent.prototype.unfollow = function () {
        var _this = this;
        this.ideas.unfollow(this.user._id, this.id)
            .subscribe(function (res) { return _this.update(); });
    };
    DisplayIdeaComponent.prototype.editChange = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        console.log(this.edit);
    };
    DisplayIdeaComponent.prototype.saveChange = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.ideas.updateIdea(this.route.snapshot.params['id'], this.idea).subscribe();
    };
    DisplayIdeaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-display-idea',
            template: __webpack_require__("./src/app/display-idea/display-idea.component.html"),
            styles: [__webpack_require__("./src/app/display-idea/display-idea.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], DisplayIdeaComponent);
    return DisplayIdeaComponent;
}());



/***/ }),

/***/ "./src/app/idea-list/idea-list.component.css":
/***/ (function(module, exports) {

module.exports = "\n.profile-container{\n    width: 90%;\n    margin: 10px 5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.centered{\n    width: 30%;\n    text-align: center;\n    margin: 0 35%;\n}\n\n.card{\n    width: 98%;\n    margin: 5px 1%;\n}\n\n.card img{\n    width: 100%;\n}\n\n.card-action{\n    text-align: center;\n}\n\n.card-title{\n    font-size: 0.9vw;\n    font-weight: bold;\n}\n\n@media screen and (min-width:600px){\n    .card{\n        width: 48%;\n        margin: 5px 1%;\n    }\n \n  }\n\n@media screen and (min-width:800px){\n    .card{\n        width: 31%;\n        margin: 5px 1%;\n    }\n \n  }\n\n@media screen and (min-width:1000px){\n    .card{\n        width: 23%;\n        margin: 5px 1%;\n    }\n \n  }\n\n@media screen and (min-width:1200px){\n    .card{\n        width: 18%;\n        margin: 5px 1%;\n    }\n \n  }"

/***/ }),

/***/ "./src/app/idea-list/idea-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Ideas</h3>\n<div id=\"idea-container\">\n  <div class=\"profile-container\">\n    <span class=\"centered\" *ngIf=\"ideaList.length === 0\">No Ideas so far, share one!</span>\n\n      <div *ngFor=\"let idea of ideaList\" class=\"card sticky-action\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <img class=\"activator\" [src]=\"'http://arcky.herokuapp.com/'+idea.picPath+'.svg'\" >\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title activator grey-text text-darken-4\">{{idea.title}}<i class=\"material-icons right\">more_vert</i></span>\n          <div *ngIf=\"user.following.indexOf(idea._id)==-1 && user.username !== ''\" (click)=\"follow(idea._id)\" class=\"btn\">Follow: {{idea.followers.length}}</div>\n          <div *ngIf=\"user.following.indexOf(idea._id)!=-1 && user.username !== ''\" (click)=\"unfollow(idea._id)\" class=\"btn\">Followed: {{idea.followers.length}}</div>\n          <div *ngIf=\"user.username == ''\" class=\"btn\">Followers: {{idea.followers.length}}</div>\n        </div>\n        <div class=\"card-action\">\n          <a [routerLink]=\"['../', idea._id]\">See more</a>\n        </div>\n        <div class=\"card-reveal\">\n          <span class=\"card-title grey-text text-darken-4\">{{idea.title}}<i class=\"material-icons right\">close</i></span>\n          <p>{{idea.description}}</p>\n        </div>\n      </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/idea-list/idea-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__ = __webpack_require__("./src/app/services/ideas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IdeaListComponent = /** @class */ (function () {
    function IdeaListComponent(session, router, ideas) {
        this.session = session;
        this.router = router;
        this.ideas = ideas;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: [],
            _id: ''
        };
        this.ideaList = [];
    }
    IdeaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedInHome()
            .subscribe(function (user) { return _this.successCb(user); });
        this.ideas.getIdeas()
            .subscribe(function (list) {
            _this.ideaList = list;
            _this.ideaList.sort(function (a, b) {
                return b.followers.length - a.followers.length;
            });
            console.log(_this.ideaList);
        });
    };
    IdeaListComponent.prototype.successCb = function (user) {
        this.user = user;
        console.log(this.user);
    };
    IdeaListComponent.prototype.update = function () {
        var _this = this;
        this.session.isLoggedInHome()
            .subscribe(function (user) { return _this.successCb(user); });
        this.ideas.getIdeas()
            .subscribe(function (list) {
            _this.ideaList = list;
            _this.ideaList.sort(function (a, b) {
                return b.followers.length - a.followers.length;
            });
            console.log(_this.ideaList);
        });
    };
    IdeaListComponent.prototype.follow = function (id) {
        var _this = this;
        console.log(id);
        this.ideas.follow(this.user._id, id)
            .subscribe(function (res) { return _this.update(); });
    };
    IdeaListComponent.prototype.unfollow = function (id) {
        var _this = this;
        console.log(id);
        this.ideas.unfollow(this.user._id, id)
            .subscribe(function (res) { return _this.update(); });
    };
    IdeaListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-idea-list',
            template: __webpack_require__("./src/app/idea-list/idea-list.component.html"),
            styles: [__webpack_require__("./src/app/idea-list/idea-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_ideas_service__["a" /* IdeasService */]])
    ], IdeaListComponent);
    return IdeaListComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container{\n    margin: 10px 10%;\n}\n\n.message-container{\n    border: 2px grey solid;\n    border-radius: 5px;\n    padding: 10px 5%;\n}"

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" *ngIf=\"user.username!=''\">\n  <div class=\"message-container\" *ngFor=\"let message of user.messages\">\n    <h4>{{message.title}}</h4>\n    <p>{{message.content}}</p>\n    <button class=\"btn green\" (click)=\"reply(i)\">Reply</button>\n    <br>\n    <label>Subject</label>\n    <input [(ngModel)]=\"newMessage.title\">\n    <label>What do you wanna reply?</label>\n    <input [(ngModel)]=\"newMessage.content\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = /** @class */ (function () {
    function InboxComponent(session, router, route) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: [],
            _id: '',
            messages: []
        };
        this.newMessage = {
            title: '',
            content: ''
        };
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
        this.session.getUser(this.route.snapshot.params['userid'])
            .subscribe(function (user) { return _this.user = user; });
    };
    InboxComponent.prototype.successCb = function (user) {
        this.user = user;
    };
    InboxComponent.prototype.toggleReply = function (i) {
        console.log(i);
    };
    InboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-inbox',
            template: __webpack_require__("./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__("./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "#main-container{\n    width: 95%;\n    margin: 0 auto;\n}\n\n.profile-container, .avatar-container{\n    width: 95%;\n    margin: 10px auto;\n    background-color: white;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border: 2px solid #5AB9EA;\n    border-radius: 10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\n.profile-container img{\n    width: 20%;\n    margin: 10px 5%;\n    border-radius: 50%;\n    border: 2px solid black;\n}\n\n#profile-info{\n    width: 45%;\n    margin: 10px 2.5%;\n}\n\n#profile-info span{\n    font-size: 2em;\n}\n\n#desc-area{\n    width: 90%;\n    height: 50%;\n}\n\n#profile-social{\n    width: 15%;\n    margin: 10px 2.5%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.centered{\n    width: 30%;\n    text-align: center;\n    margin: 0 35%;\n}\n\n.title{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\ninput[type=radio] {\n    display:none;\n    opacity: 0;\n}\n\ninput[type=radio] + label {\n    opacity: 0.5;\n    height: 90px;\n    width: 90px;\n    display:inline-block;\n    padding: 0 0 0 0px;\n    text-align: center\n}\n\ninput[type=radio]:checked + label {\n    opacity: 1;\n    height: 90px;\n    width: 90px;\n    display:inline-block;\n    padding: 0 0 0 0px;\n    text-align: center\n}\n\n.avatar {\n    width: 100%;\n    padding: 5px;\n}\n\n[type=\"radio\"]+label:before, [type=\"radio\"]:not(.filled-in)+label:after{\n    display: none;\n}\n\n.notifications-container{\n    margin: 10px 2%;\n}\n\n.card{\n    padding: 10px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-container\">\n  <div class=\"title\">\n  <h3>Profile</h3> <button class=\"btn green\"(click)=\"editChange()\" *ngIf=\"loggedUser._id==user._id && !edit\">Edit Profile</button>\n  <button class=\"btn red\"(click)=\"saveChange()\" *ngIf=\"loggedUser._id==user._id && edit\">Save Profile</button></div>\n  <div *ngIf=\"!edit\" class=\"profile-container\">\n      <img *ngIf=\"user.picPath\" [alt]=\"user.username\" [src]=\"'http://arcky.herokuapp.com/'+user.picPath\" >\n      <img *ngIf=\"!user.picPath\" [alt]=\"user.username\" src=\"http://www.rajitunion.com/manageadmin/photo_gallery/no-image.gif\" >\n    <div id=\"profile-info\">\n      <span>{{user.username}}</span>\n      <div id=\"desc-area\">\n        <p>{{user.description}}</p>\n      </div>\n    </div>\n    <div class=\"notifications-container\" *ngIf=\"loggedUser._id==user._id\">\n      <h5>Notifications</h5>\n        <span *ngFor=\"let not of loggedUser.notifications\">{{not.content}}</span>\n      </div>\n  </div>\n  <div *ngIf=\"edit\" class=\"profile-container\">\n      <img *ngIf=\"user.picPath\" [alt]=\"user.username\" [src]=\"'http://arcky.herokuapp.com/'+user.picPath\" >\n      <img *ngIf=\"!user.picPath\" [alt]=\"user.username\" src=\"http://www.rajitunion.com/manageadmin/photo_gallery/no-image.gif\" >\n      <div id=\"profile-info\">\n        <label>Username</label>\n        <input [(ngModel)]='user.username' />\n        <div id=\"desc-area\">\n            <label>Description</label>\n          <input [(ngModel)]='user.description' placeholder=\"Tell us a bit about yourself\"/>\n        </div>\n      </div>\n    </div>\n  <div *ngIf=\"edit\" class=\"avatar-container\">\n      <input type=\"radio\" name=\"avatar\" id=\"1\" (change)='newValue(value)' value=\"1\" [(ngModel)]=\"value\" /><label for=\"1\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-1.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"2\" (change)='newValue(value)' value=\"2\" [(ngModel)]=\"value\" /><label for=\"2\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-2.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"3\" (change)='newValue(value)' value=\"3\" [(ngModel)]=\"value\" /><label for=\"3\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-3.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"4\" (change)='newValue(value)' value=\"4\" [(ngModel)]=\"value\" /><label for=\"4\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-4.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"5\" (change)='newValue(value)' value=\"5\" [(ngModel)]=\"value\" /><label for=\"5\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-5.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"6\" (change)='newValue(value)' value=\"6\" [(ngModel)]=\"value\" /><label for=\"6\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-6.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"7\" (change)='newValue(value)' value=\"7\" [(ngModel)]=\"value\" /><label for=\"7\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-7.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"8\" (change)='newValue(value)' value=\"8\" [(ngModel)]=\"value\" /><label for=\"8\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-8.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"9\" (change)='newValue(value)' value=\"9\" [(ngModel)]=\"value\" /><label for=\"9\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-9.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"10\" (change)='newValue(value)' value=\"10\" [(ngModel)]=\"value\" /><label for=\"10\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-10.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"11\" (change)='newValue(value)' value=\"11\" [(ngModel)]=\"value\" /><label for=\"11\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-11.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"12\" (change)='newValue(value)' value=\"12\" [(ngModel)]=\"value\" /><label for=\"12\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-12.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"13\" (change)='newValue(value)' value=\"13\" [(ngModel)]=\"value\" /><label for=\"13\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-13.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"14\" (change)='newValue(value)' value=\"14\" [(ngModel)]=\"value\" /><label for=\"14\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-14.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"15\" (change)='newValue(value)' value=\"15\" [(ngModel)]=\"value\" /><label for=\"15\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-15.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"16\" (change)='newValue(value)' value=\"16\" [(ngModel)]=\"value\" /><label for=\"16\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-16.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"17\" (change)='newValue(value)' value=\"17\" [(ngModel)]=\"value\" /><label for=\"17\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-17.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"18\" (change)='newValue(value)' value=\"18\" [(ngModel)]=\"value\" /><label for=\"18\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-18.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"19\" (change)='newValue(value)' value=\"19\" [(ngModel)]=\"value\" /><label for=\"19\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-19.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"20\" (change)='newValue(value)' value=\"20\" [(ngModel)]=\"value\" /><label for=\"20\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-20.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"21\" (change)='newValue(value)' value=\"21\" [(ngModel)]=\"value\" /><label for=\"21\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-21.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"22\" (change)='newValue(value)' value=\"22\" [(ngModel)]=\"value\" /><label for=\"22\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-22.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"23\" (change)='newValue(value)' value=\"23\" [(ngModel)]=\"value\" /><label for=\"23\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-23.svg\"></label>\n      <input type=\"radio\" name=\"avatar\" id=\"24\" (change)='newValue(value)' value=\"24\" [(ngModel)]=\"value\" /><label for=\"24\"><img class=\"avatar\" src=\"http://arcky.herokuapp.com/images/avatars/user-24.svg\"></label>\n    </div>\n  <h3>Ideas</h3>\n  <div class=\"profile-container\">\n    <span class=\"centered\" *ngIf=\"user.ideas.length === 0\">No Ideas so far, share one!</span>\n    <ul class=\"card\" *ngFor=\"let idea of user.ideas\">\n      \n      <a [routerLink]=\"['../../', idea._id]\">{{idea.title}}</a>\n    </ul>\n  </div>\n  <h3>Following</h3>\n  <div class=\"profile-container\">\n    <span class=\"centered\" *ngIf=\"user.following.length === 0\">No Ideas so far, find one you like!</span>\n    <ul class=\"card\" *ngFor=\"let idea of user.following\">\n        <a [routerLink]=\"['../../', idea._id]\">{{idea.title}}</a>\n    </ul>\n  </div>\n  <h3>Contributions</h3>\n  <div class=\"profile-container\">\n    <span class=\"centered\" *ngIf=\"user.comments.length === 0\">No Contributions so far, go validate some!</span>\n    <ul class=\"card\" *ngFor=\"let comment of user.comments\">\n        <a [routerLink]=\"['../../', comment.authorId]\">{{comment.content}}</a>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(session, router, route) {
        this.session = session;
        this.router = router;
        this.route = route;
        this.user = {
            username: '',
            description: '',
            picPath: '',
            ideas: [],
            following: [],
            comments: []
        };
        this.loggedUser = {};
        this.edit = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn()
            .subscribe(function (user) { return _this.successCb(user); });
        this.session.getUser(this.route.snapshot.params['userid'])
            .subscribe(function (user) { return _this.user = user; });
    };
    ProfileComponent.prototype.successCb = function (user) {
        this.loggedUser = user;
    };
    ProfileComponent.prototype.editChange = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        console.log(this.edit);
    };
    ProfileComponent.prototype.saveChange = function () {
        if (this.edit) {
            this.edit = false;
        }
        else {
            this.edit = true;
        }
        this.session.updateUser(this.route.snapshot.params['userid'], this.user).subscribe();
    };
    ProfileComponent.prototype.newValue = function (value) {
        this.user.picPath = "images/avatars/user-" + value + ".svg";
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/ideas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IdeasService = /** @class */ (function () {
    function IdeasService(http) {
        this.http = http;
        this.option = { withCredentials: true };
    }
    IdeasService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    IdeasService.prototype.newIdea = function (idea) {
        return this.http.post("http://logosapp.herokuapp.com/ideas/new", idea, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.getIdeas = function () {
        return this.http.get("http://logosapp.herokuapp.com/ideas", this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.getIdea = function (id) {
        return this.http.get("http://logosapp.herokuapp.com/ideas/" + id, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.follow = function (userId, ideaId) {
        var message = {
            id: ideaId,
            userid: userId
        };
        return this.http.post("http://logosapp.herokuapp.com/ideas/follow", message, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.unfollow = function (userId, ideaId) {
        var message = {
            id: ideaId,
            userid: userId
        };
        return this.http.post("http://logosapp.herokuapp.com/ideas/unfollow", message, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.newComment = function (comment) {
        return this.http.post("http://logosapp.herokuapp.com/ideas/contribute", comment, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.sendMessage = function (message) {
        return this.http.post("http://logosapp.herokuapp.com/ideas/contact", message, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.rateUp = function (commentId, authorId) {
        return this.http.get("http://logosapp.herokuapp.com/ideas/rateup/" + commentId + "/" + authorId, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.rateDown = function (commentId, authorId) {
        return this.http.get("http://logosapp.herokuapp.com/ideas/ratedown/" + commentId + "/" + authorId, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.updateIdea = function (id, info) {
        return this.http.post("http://logosapp.herokuapp.com/ideas/" + id, info, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService.prototype.notify = function (id, notification) {
        return this.http.post("http://logosapp.herokuapp.com/ideas/" + id + "/notify", notification, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    IdeasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], IdeasService);
    return IdeasService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.option = { withCredentials: true };
    }
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].throw(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        console.log(user);
        return this.http.post("http://logosapp.herokuapp.com/auth/signup", user, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (user) {
        console.log(user);
        return this.http.post("http://logosapp.herokuapp.com/auth/login", user, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        return this.http.post("http://logosapp.herokuapp.com/auth/logout", {})
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        return this.http.get("http://logosapp.herokuapp.com/auth/loggedin", this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.getUser = function (id) {
        return this.http.get("http://logosapp.herokuapp.com/auth/user/" + id, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.updateUser = function (id, info) {
        return this.http.post("http://logosapp.herokuapp.com/auth/user/" + id, info, this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedInHome = function () {
        return this.http.get("http://logosapp.herokuapp.com/auth/loggedinhome", this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get("http://logosapp.herokuapp.com/auth/private", this.option)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map