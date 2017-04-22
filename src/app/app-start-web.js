
define([
	'require',
    'app',
    'angular'],function (require,app,angular) {
	
	require(['domReady!'], function (document) {
		angular.bootstrap(document, ['shareyourviewsapp']);
    },function (err) {
 alert("bootstrap"+err);
 });
});