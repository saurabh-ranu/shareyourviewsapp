define(appConfig.app_scripts, function (jquery, angular) {
    'use strict';
    var app = angular.module('shareyourviewsapp', appConfig.app_modules);
    app.service('AuthenticationService', appservice.authenticationHttpService)

        .controller('AppCtrl', ['$rootScope', '$scope', '$http', '$state',
            function ($rootScope, $scope, $http, $state) {
            }
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
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
        }]);
    return app;
});
