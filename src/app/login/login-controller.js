define([], function () {
    'use strict';
    return ['$rootScope', '$scope', '$timeout', '$http', '$state', 'cfpLoadingBar', 'AuthenticationHttpService',
        function ($rootScope, $scope, $timeout, $http, $state, cfpLoadingBar, AuthenticationHttpService) {
            AuthenticationHttpService.deleteAccessToken();
            $scope.login = function () {
                this.credentials = {
                    "userName": $scope.username,
                    "password": $scope.password
                };
                cfpLoadingBar.start();

                AuthenticationHttpService.login(this.credentials).then(function (response) {
                    console.log('response' + JSON.stringify(response));
                    cfpLoadingBar.complete();
                    $state.go('homes');
                }, function (error) {
                    alert('You are not authenticated! Please try again with valid credentials.');
                    cfpLoadingBar.complete();
                    $state.go('logins');
                });


             };

        }
    ];
});
	