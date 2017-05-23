var defaultConfig={
startupFile: 'src/app/app-start-web.js',
isNative:false,
	app_modules: ['ui.router','ui.bootstrap','ngJsonExportExcel','cfp.loadingBar','angularFileUpload','ngFileUpload','templates-app','templates-common','angularUtils.directives.dirPagination'/*,'authentication'*/, 'login','ngCookies','home'],
	app_scripts: ['jquery','angular','ngJsonExportExcel','FileSaver','cfp.loadingBar','angularFileUpload','ngFileUpload','angular.resource','angular.sanitize','ui.router','angular.cookies','ui.bootstrap.tpls','bootstrap','angular.pagination','templates-app','templates-common', 'authentication/authentication-http-service', 'authentication/base64-service', 'authentication/authentication-http-interceptor-service',/*'authentication/authentication-module',*/ 'login/login-module', 'home/home-module'],
	login_modules: [ 'ui.router', 'cfp.loadingBar','templates-app','templates-common'],
    login_scripts: ['jquery', 'angular','cfp.loadingBar'],
	home_modules: [ 'ui.router', 'cfp.loadingBar','templates-app','templates-common','angularFileUpload','ngFileUpload'],
	home_scripts: ['jquery', 'angular', 'home/dashboard-service', 'home/dashboard-controller','angularFileUpload','ngFileUpload']
};


var appConfig =defaultConfig;
var webservice = function(){
};
var Directive=function(){
};
require.config({
	"waitSeconds": 0,
    "paths": {
	'domReady': '../../vendor/requirejs-domready/domReady',
	'jquery':'../../vendor/jquery/dist/jquery',
	'angular':'../../vendor/angular/angular',
	'FileSaver':'../../vendor/file-saver/FileSaver',
	'cfp.loadingBar':'../../vendor/angular-loading-bar/src/loading-bar',
    'ngJsonExportExcel':'../../vendor/json-export-excel/dest/json-export-excel.min',
	'angularFileUpload':'../../vendor/angular-file-upload/dist/angular-file-upload.min',
	'ngFileUpload':'../../vendor/ng-file-upload/ng-file-upload.min',
	'angular.sanitize' : '../../vendor/angular-sanitize/angular-sanitize.min',
	'angular-min':'../../vendor/angular/angular.min',
	'angular.cookies': '../../vendor/angular-cookies/angular-cookies.min',
	'angular.resource' : '../../vendor/angular-resource/angular-resource.min',
	'ui.router': '../../vendor/angular-ui-router/release/angular-ui-router.min',
	'bootstrap' : '../../vendor/bootstrap/dist/js/bootstrap.min',
	'ui.bootstrap.tpls' : '../../vendor/angular-bootstrap/ui-bootstrap-tpls.min',
	'angular.pagination' : '../../vendor/angular-utils-pagination/dirPagination',      
	'bootstrap.daterangepicker' : '../../vendor/bootstrap-daterangepicker/daterangepicker',
	'app-start-web':'app-start-web',
	'templates-app':'../../templates-app',
	'templates-common':'../../templates-common'
	},
    "shim": {
	'angular': {'exports': 'angular', deps: ['jquery']},
	'ui.router': { deps: ['angular'] },
    'ngJsonExportExcel':{ deps: ['angular'] },
    'cfp.loadingBar':{ deps: ['angular'] },
	'angular.cookies': { deps: ['angular'] },
	'angular.resource': { deps: ['angular'] },
	'bootstrap': { deps: ['jquery'] },
	'bootstrap.datepicker': { deps: ['jquery'] },
    'bootstrap.daterangepicker':{ deps: ['jquery','moment','bootstrap'] },
    'angular.pagination':{ deps: ['angular']},
	'ui.bootstrap.tpls': { deps: ['angular'] },
    'app-start-web':{ deps: ['angular'] },
    'templates-app':{ deps: ['angular'] },
    'templates-common':{ deps: ['angular']},
	'angularFileUpload':{ deps: ['angular']},
	'ngFileUpload':{ deps: ['angular']}
	},
	
	deps: [appConfig.startupFile]
});

var appservice = function () {
};
//define(['require','angular'],function(){
//require([appConfig.startupFile], function(angular,demo){
//},function (err) {
// alert("helooooo"+err);
//});
//
//
//});
