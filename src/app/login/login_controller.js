define([], function() {
	'use strict';
	return ['$rootScope', '$scope', '$timeout','$http', '$state','cfpLoadingBar',
                function ($rootScope, $scope, $timeout,$http, $state,cfpLoadingBar) {
            $scope.login = function()
  {
			this.loginInfo={
				
				"userName":$scope.username,
				"password":$scope.password
				
			};
			cfpLoadingBar.start();



		/*Webservice.loginWebservice(this.loginInfo).then(function (response) {
			$timeout( function(){ 
			cfpLoadingBar.complete();
            $state.go('employeeList');
           }, 3000, false);
			
			
		}, function (errorMessage) {
			$timeout( function(){ 
			cfpLoadingBar.complete();
            $scope.validationMessage = "Invalid User Id/Password ";
           }, 3000, false);    
                });*/
		//$scope.validateuserinfo(this.loginInfo);
		//$http.defaults.headers.post['Content-Type'] = 'application/json';
		//$http.post("http://192.168.1.93:8080/HKWebservices/Rest/login",JSON.stringify(this.loginInfo)).success(function(response){
		//	$state.go('report');
		//	}).error(function(error){
		//		alert("error "+JSON.stringify(error));
		//	});*/
		};
            
                }
                 ];
});
	