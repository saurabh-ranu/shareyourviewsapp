/**
 * Created by Saurabh.srivastava on 4/5/2017.
 */
define(appConfig.login_scripts, function(jquery, angular){
    'use strict';
return angular.module('authentication', appConfig.login_modules)
    .config(['$httpProvider','$injector',function( $httpProvider, $injector) {
        $httpProvider.interceptors.push($injector.get('AuthenticationHttpInterceptor'));

    }]);
});