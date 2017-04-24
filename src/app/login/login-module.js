/**
 * Created by Saurabh.srivastava on 4/5/2017.
 */
define(appConfig.login_scripts, function(jquery, angular){
    'use strict';
return angular.module('login', appConfig.login_modules)
    .controller('LoginController',['$scope','$injector',function($scope, $injector){
        require([ './login-controller' ], function(loginController) {
            $injector.invoke(loginController, this, {
                '$scope' : $scope
            });
        });
    }
    ]);
});