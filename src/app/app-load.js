var defaultConfig={
startupFile: 'src/app/app-start-web.js',
isNative:false,
	app_modules: ['ui.router','ui.bootstrap','ngJsonExportExcel','cfp.loadingBar','templates-app','templates-common','angularUtils.directives.dirPagination','login','ngCookies'],
	app_scripts: ['jquery','angular','ngJsonExportExcel','FileSaver','cfp.loadingBar','angular.resource','angular.sanitize','ui.router','angular.cookies','ui.bootstrap.tpls','bootstrap','angular.pagination','templates-app','templates-common', 'login/login_module'],
	login_modules: [ 'ui.router', 'cfp.loadingBar','templates-app','templates-common'],
    login_scripts: ['jquery', 'angular','cfp.loadingBar']
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
    'templates-common':{ deps: ['angular']
     }
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
