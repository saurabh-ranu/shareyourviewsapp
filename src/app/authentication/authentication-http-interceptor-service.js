/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([], function () {
    'use strict';
    appservice.authenticationHttpInterceptor = ['AuthenticationHttpService', function (AuthenticationHttpService) {
        this.request =  angular.bind(AuthenticationHttpService, AuthenticationHttpService.handleRequest);
            this.responseError = angular.bind(AuthenticationHttpService, AuthenticationHttpService.handleResponseError);

    }];

    return appservice.authenticationHttpInterceptor;
});
