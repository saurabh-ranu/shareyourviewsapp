define(appConfig.app_scripts, function (jquery, angular) {
    'use strict';
    var app = angular.module('shareyourviewsapp', appConfig.app_modules);
    app.service('Base64', appservice.base64Service);
    app.service('AuthenticationHttpService', appservice.authenticationHttpService);
    app.service('AuthenticationHttpInterceptor', appservice.authenticationHttpInterceptor)
        .controller('AppCtrl', ['$rootScope', '$scope', '$http', '$state',
            function ($rootScope, $scope, $http, $state, $httpProvider) {
                $rootScope.$on('unauthorized', function() {
                    $state.go('logins');
                });


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
            $stateProvider.state('home', {
                url: "/home",
                views: {
                    'root': {
                        templateUrl: 'login/home.tpl.html'
                    }
                }
            });
            $httpProvider.interceptors.push('AuthenticationHttpInterceptor');

        }]);
    return app;
});
