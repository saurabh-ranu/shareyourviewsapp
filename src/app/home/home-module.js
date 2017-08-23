/**
 * Created by Saurabh.srivastava on 4/24/2017.
 */
define(appConfig.home_scripts, function(jquery, angular, dashBoardService){
    'use strict';
    return angular.module('home', appConfig.home_modules)
        .service('DashBoardService',dashBoardService)
        .controller('DashBoardController',['$scope','$injector',function($scope, $injector){
            require([ 'home/dashboard-controller' ], function(dashboardController) {
                $injector.invoke(dashboardController, this, {
                    '$scope' : $scope
                });
            });
        }
        ])
        .controller('RegistrationController',['$scope','$injector',function($scope, $injector){
            require([ 'home/registration-controller' ], function(registrationController) {
                $injector.invoke(registrationController, this, {
                    '$scope' : $scope
                });
            });
        }
            ]);

});