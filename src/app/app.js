define(appConfig.app_scripts, function (jquery, angular) {
    'use strict';
    var app = angular.module('shareyourviewsapp', appConfig.app_modules);
    app.service('Base64', appservice.base64Service);
    app.service('AuthenticationHttpService', appservice.authenticationHttpService);
    app.service('AuthenticationHttpInterceptor', appservice.authenticationHttpInterceptor)
        .controller('AppCtrl', ['$rootScope', '$scope', '$http', '$state', 'AuthenticationHttpService',
            function ($rootScope, $scope, $http, $state, AuthenticationHttpService) {
                $scope.islogOutVisible = false;
                $scope.pageTitle = "Share Your Views";
               $rootScope.$on('unauthorized', function() {
                    AuthenticationHttpService.deleteAccessToken();
                    $state.go('logins');
                });

                $scope.islogOutVisible = AuthenticationHttpService.isAuthenticated();

                $scope.logout = function(){
                    alert('Taking you out!');
                    AuthenticationHttpService.deleteAccessToken();
                    $state.go('logins');
                };



            }
        ]);
    app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
            //$routeProvider.otherwise({redirectTo: '/login'});

            $urlRouterProvider.otherwise("/login");
            $stateProvider.state('logins', {
                url: "/login",
                views: {
                    'root': {
                        templateUrl: 'login/login.tpl.html'
                    }
                }
            });
            $stateProvider.state('homes', {
                url: "/home",
                views: {
                    'root': {
                        templateUrl: 'home/home.tpl.html'
                    }
                }
            });
            //$injector.get('AuthenticationHttpInterceptor');
            $httpProvider.interceptors.push('AuthenticationHttpInterceptor');

        }]);
    return app;
});
