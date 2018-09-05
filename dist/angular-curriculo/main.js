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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  border-collapse: collapse;\r\n  width: 50em;\r\n  border: 1px solid #666;\r\n  align: center;\r\n  \r\n    border-radius: 10px;\r\n}\r\ntable.center {\r\n    margin-left:auto; \r\n    margin-right:auto;\r\n}\r\ntd{\r\n  align: left;\r\nborder-radius: 0px;\r\n}\r\nh1 {\r\n  color:#4CAF50;\r\n  text-align: center;\r\n}\r\nh3 {\r\n  color:#4CAF50;\r\n  magin.left: 330px;\r\n}\r\nth {\r\n  text-align: left; \r\n  color:steelblue\r\n}\r\nheader{\r\n    margin-left: 100px;\r\n}\r\n#table {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n\t\r\n    overflow:hidden;\r\n    border: solid #ccc 1px;\r\n    border-radius: 25px;\r\n\r\n}\r\n#table td, #table th {\r\n    border: 0px solid #ddd;\r\n    padding: 25px;\r\n\t\r\n}\r\n#table tr:nth-child(even){\r\n\tbackground-color: #f2f2f2;\r\n}\r\n#table tr:hover {\r\n\tbackground-color: #ddd;\r\n}\r\n#table th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: left;\r\n    background-color: steelblue;\r\n    color: white;\r\n\t    font-style: oblique;\r\n\r\n}\r\n.button {\r\n    background-color: #108700; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n\tfloat:right;\r\n}\r\nul {\r\n list-style-type: none;\r\n}\r\n#name{\r\n font-size: 25px;\r\n font: Arial, sans-serif\t;\r\n}\r\n#label{\r\n\ttext-align:right\r\n}\r\n.picture {\r\ndisplay: block;\r\nmargin-left: auto;\r\nmargin-right: auto;\r\npadding: 2px;\r\ntext-align: center;\r\nbackground-color: lightblue;\r\nborder: 1px solid #dbdbdbd;\r\nborder-radius: 10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"center\" id=\"table\">\r\n <tr>\r\n  <th colspan=\"2\" id=\"name\">{{name}}</th>\r\n  <th ><img id= \"pic\" width=\"72px\" height=\"128px\" src=\"assets/eu.jpg\" class=\"picture\" alt=\"\"/></th>\r\n </tr>\r\n <tr>\r\n  <td>Data de nascimento: {{dateOfBirth}}</td>\r\n  <td>Sexo: {{gender}}</td>\r\n  <td></td>\r\n </tr>\r\n <tr>\r\n  <td>Estado civil: {{civilStatus}} </td>\r\n  <td></td>\r\n  <td></td>\r\n </tr>\r\n <tr>\r\n  <td>Endereço: {{adress}} </td>\r\n  <td>Número: {{number}}</td>\r\n  <td></td>\r\n </tr>\r\n <tr>\r\n  <td>Cidade: {{city}} </td>\r\n  <td>Bairro: {{neighborhood}} </td>\r\n  <td>CEP: {{postalCode}}</td>\r\n </tr>\r\n <tr>\r\n  <td>Contato: {{fone}}</td>\r\n  <td>Email: {{email}}</td>\r\n  <td></td>\r\n </tr>\r\n <tr>\r\n  <td>CNH: {{driversLicense}}</td>\r\n  <td></td>\r\n  <td></td>\r\n </tr>\r\n</table>\r\n<br>\r\n\r\n<table class=\"center\" id=\"table\">\r\n <tr>\r\n  <th>Perfil Profissional</th>\r\n </tr>\r\n <tr>\r\n  <td>{{profile[0]}}</td>\r\n </tr>\r\n <tr>\r\n  <td>{{profile[1]}}</td>\r\n </tr>\r\n <tr>\r\n  <td>{{profile[2]}}</td>\r\n </tr>\r\n <tr>\r\n  <td>{{profile[3]}}</td>\r\n </tr>\r\n</table>\r\n<br>\r\n\r\n<table class=\"center\" id=\"table\">\r\n <tr>\r\n  <th>Formação Acadêmica</th>\r\n </tr>\r\n <tr>\r\n  <td>{{academicFormation}}</td>\r\n </tr>\r\n</table>\r\n<br>\r\n\r\n<!--  \r\n<table class='center' id=\"table\">\r\n <tr>\r\n  <th colspan=\"2\">Provisory Modal</th>\r\n </tr>\r\n <tr>\r\n  <td id=\"label\">Curso</td>\r\n  <td><input class='field' type = \"text\" [(ngModel)]=\"course\"></td>\r\n </tr>\r\n <tr>\r\n  <td id=\"label\">Instituição</td>\r\n  <td><input class='field' type = \"text\" [(ngModel)]=\"institution\"></td>\r\n </tr>\r\n <tr>\r\n  <td id=\"label\">Local</td>\r\n  <td><input class='field' type = \"text\" [(ngModel)]=\"institutionPlace\"></td>\r\n </tr>\r\n <tr>\r\n  <td id=\"label\">Carga Horária</td>\r\n  <td><input class='field' type = \"text\" [(ngModel)]=\"workload\"></td>\r\n </tr>\r\n</table>\r\n-->\r\n\r\n<br>\r\n<table class='center' id=\"table\">\r\n <tr>\r\n  <th colspan=\"3\" class='header'>Cursos</th>\r\n  <!--<th class='header'><button type=\"button\" class='button' (click)=\"add()\">Adicionar</button></th>-->\r\n </tr>\r\n <ul>\r\n <li *ngFor=\"let item of courses\" class='center'>\r\n  <tr>\r\n   <td>{{item.Curso}} </td>\r\n   <td>{{item.Instituicao}}</td>\r\n   <td>{{item.Local}}</td>\r\n   <td>{{item.CargaHoraria}}</td>\r\n  </tr>\r\n </li>\r\n</ul>\r\n</table>\r\n "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Augusto César Aragão de Bulhões';
        this.dateOfBirth = '05/02/1990';
        this.gender = 'Masculino';
        this.civilStatus = 'Solteiro';
        this.adress = 'Rua Sessenta e Nove';
        this.number = 26;
        this.city = 'Paulista';
        this.neighborhood = 'Maranguape I';
        this.postalCode = '53441-280';
        this.fone = '(81) 979152069';
        this.email = 'acab2@cin.ufpe.br';
        this.driversLicense = 'Classes A e B';
        this.profile = ['Trabalho em equipe', 'Ótimas noções em OO e lógica de programação', 'Vontade de aprender', 'Flexibilidade'];
        this.academicFormation = '2014.2 - Cursando - Universidade Federal de Pernambuco - Ciência da Computação';
        this.courses = [
            {
                "Curso": "Programação em C/C++",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Programação em Java",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "120h"
            },
            {
                "Curso": "JavaScript(D3)",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Haskell",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Swift(IOS)",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "HTML",
                "Instituicao": "Internet",
                "Local": "Home office",
                "CargaHoraria": "Indeterminado"
            },
            {
                "Curso": "CSS",
                "Instituicao": "Internet",
                "Local": "Home office",
                "CargaHoraria": "Indeterminado"
            },
            {
                "Curso": "Banco de dados (Oracle)",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Banco de dados (MySql)",
                "Instituicao": "Faculdade Joaquim Nabuco",
                "Local": "Paulista",
                "CargaHoraria": "60h"
            },
            {
                "Curso": "Introdução a Inteligência Artificial",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Introdução a Redes Neurais",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Visualização de Dados",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Análise de requisitos",
                "Instituicao": "Universidade Federal de Pernambuco",
                "Local": "Recife",
                "CargaHoraria": "75h"
            },
            {
                "Curso": "Inglês",
                "Instituicao": "SENAC",
                "Local": "Recife",
                "CargaHoraria": "360h"
            }
        ];
        this.course = "";
        this.institution = "";
        this.institutionPlace = "";
        this.workload = "";
    }
    AppComponent.prototype.add = function () {
        this.courses.push({ "Curso": this.course, "Instituicao": this.institution, "Local": this.institutionPlace, "CargaHoraria": this.workload });
        this.course = "";
        this.institution = "";
        this.institutionPlace = "";
        this.workload = "";
    };
    AppComponent.prototype.openModal = function () {
        console.log("Modal Here!");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gustavo\Documents\visualizacao\Curriculo\Curriculo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map