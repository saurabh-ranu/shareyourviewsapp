/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([], function () {
    'use strict';
    appservice.authenticationHttpInterceptor = ['$injector', function ($injector) {

        this.request = function(config) {
            return $injector.get('AuthenticationHttpService').handleRequest(config);
        };
        this.responseError = function(config) {
            return $injector.get('AuthenticationHttpService').handleResponseError(config);
        };
    }];
    return appservice.authenticationHttpInterceptor;
});
