
define([
	'require',
    'app',
    'angular'],function (require,app,angular) {
	
	require(['domReady!'], function (document) {
		angular.bootstrap(document, ['mymain']);
    },function (err) {
 alert("bootstrap"+err);
 });
});