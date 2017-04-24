/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([], function () {
    'use strict';
    appservice.authenticationHttpService = ['$http', '$q', 'Base64', function ($http, $q, Base64) {

        var accessTokenCacheKey = 'access_token';
        var refreshTokenCacheKey = 'refresh_token';
        var HTTP_HEADERS = {
            ACCESS_TOKEN: 'Authorization',
            INTERACTION_ID: 'X-Interaction-Id'
        };

        this.login = function (credentials) {
            var loginDeferred = $q.defer();
            var authdata = Base64.encode('trusted-app' + ':' + 'secret');
            var _headers = {
                'Authorization': 'Basic ' + authdata,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            alert('authdata' + authdata);
            //$http.defaults.headers.common['Authorization'] = 'Basic dHJ1c3RlZC1hcHA6c2VjcmV0';
            $http({
                method: 'POST',
                url: 'http://localhost:8081/ShareYourViewsServices/oauth/token?grant_type=password&username=1&password=saurabh',
                //data: JSON.stringify(credentials),
                headers: _headers,
                responseType: 'json',
                crossDomain: true

            }).success(function (response) {
                alert('response' + JSON.stringify(response));
                loginDeferred.resolve(response);
            }).error(function (error) {
                alert('error' + JSON.stringify(error));
                loginDeferred.reject(error);
            });


            return loginDeferred.promise;
        };

        this.handleRequest = function (requestConfig) {
            requestConfig.headers = requestConfig.headers || {};

            if (!this.isAuthenticated()) {
                return requestConfig;
            }

            return this.addHttpHeaderToRequest(requestConfig);
            //return requestConfig;
        };

        this.addHttpHeaderToRequest = function addHttpHeaderToRequest(requestConfig) {
            requestConfig.headers = requestConfig.headers || {};
            requestConfig.headers[HTTP_HEADERS.ACCESS_TOKEN] = 'Bearer '+this.getAccessToken();

            return requestConfig;
        };

        this.handleResponseError = function (rejection) {
            if (rejection.status === 401) {
                $rootScope.$broadcast('unauthorized');
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

        this.setAccessToken = function setAccessToken(accessToken) {
            setCache(accessTokenCacheKey, accessToken);
        };

        this.deleteAccessToken = function deleteAccessToken() {
            removeFromCache(accessTokenCacheKey);
        };

        this.setRefreshToken = function setRefreshToken(refreshToken) {
            setCache(refreshTokenCacheKey, refreshToken);
        };

        this.deleteRefreshToken = function deleteRefreshToken() {
            removeFromCache(refreshTokenCacheKey);
        };

        this.isAuthenticated = function isAuthenticated() {
            return (!!this.getAccessToken());
        };

        this.getAccessToken = function getAccessToken() {
            return getCache(accessTokenCacheKey);
        };

    }];

    return appservice.authenticationHttpService;
});
