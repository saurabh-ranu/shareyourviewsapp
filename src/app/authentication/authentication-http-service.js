/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([], function () {
    'use strict';
    appservice.authenticationHttpService = ['$http', '$q', 'Base64', '$window', '$rootScope', '$state', function ($http, $q, Base64, $window, $rootScope) {

        var that = this;
        var accessTokenCacheKey = 'access_token';
        var refreshTokenCacheKey = 'refresh_token';
        var HTTP_HEADERS = {
            ACCESS_TOKEN: 'Authorization',
            INTERACTION_ID: 'X-Interaction-Id'
        };

        this.login = function (credentials) {
            that.deleteAccessToken();
            var loginDeferred = $q.defer();
            var authdata = Base64.encode('trusted-app' + ':' + 'secret');
            var _headers = {
                'Authorization': 'Basic ' + authdata,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            //$http.defaults.headers.common['Authorization'] = 'Basic dHJ1c3RlZC1hcHA6c2VjcmV0';
            $http({
                method: 'POST',
                url: 'http://localhost:8081/ShareYourViewsServices/oauth/token?grant_type=password&username=1&password=saurabh',
                //data: JSON.stringify(credentials),
                headers: _headers,
                responseType: 'json',
                crossDomain: true

            }).success(function (response) {
                that.setAccessToken(response.access_token);
                loginDeferred.resolve(response);
            }).error(function (error) {
                loginDeferred.reject(error);
            });


            return loginDeferred.promise;
        };

        this.handleRequest = function (requestConfig) {
            requestConfig.headers = requestConfig.headers || {};

            if (!that.isAuthenticated()) {
                return requestConfig;
            }

            return this.addHttpHeaderToRequest(requestConfig);
            //return requestConfig;
        };

        this.addHttpHeaderToRequest = function (requestConfig) {
            requestConfig.headers = requestConfig.headers || {};
            requestConfig.headers[HTTP_HEADERS.ACCESS_TOKEN] = 'Bearer '+this.getAccessToken();

            return requestConfig;
        };

        this.handleResponseError = function (rejection) {
            alert('rejection'+rejection.status);
            if (rejection.status === 401) {
                alert('You are not Authorize, Please Try Again');
                $rootScope.$broadcast('unauthorized');
                return $q.reject(rejection);
            }

            if (rejection.status === 0) {
                //alert('You are not Authorize, Please Try Again');
                //$rootScope.$broadcast('unauthorized');
                return $q.reject(rejection);

            }
            return rejection;
        };

        this.getCache = function (key) {
            return $window.localStorage.getItem(key);
        };

        this.removeFromCache = function (key) {
            $window.localStorage.removeItem(key);
        };

        this.setCache = function (key, value) {
            $window.localStorage.setItem(key, value);
        };

        this.setAccessToken = function (accessToken) {
            that.setCache(accessTokenCacheKey, accessToken);
        };

        this.deleteAccessToken = function () {
            that.removeFromCache(accessTokenCacheKey);
        };

        this.setRefreshToken = function (refreshToken) {
            that.setCache(refreshTokenCacheKey, refreshToken);
        };

        this.deleteRefreshToken = function () {
            that.removeFromCache(refreshTokenCacheKey);
        };

        this.isAuthenticated = function () {
            return (!!that.getAccessToken());
        };

        this.getAccessToken = function () {
            return that.getCache(accessTokenCacheKey);
        };


    }];

    return appservice.authenticationHttpService;
});
