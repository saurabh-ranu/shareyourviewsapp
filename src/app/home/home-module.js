/**
 * Created by Saurabh.srivastava on 4/24/2017.
 */
define(appConfig.home_scripts, function(jquery, angular, dashBoardService){
    'use strict';
    return angular.module('home', appConfig.login_modules)
        .service('DashBoardService',dashBoardService)
        .controller('DashBoardController',['$scope','$injector',function($scope, $injector){
            require([ './dashboard-controller' ], function(dashboardController) {
                $injector.invoke(dashboardController, this, {
                    '$scope' : $scope
                });
            });
        }
        ]);

});