/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([],function(){
    'use strict';
    appservice.authenticationHttpService = ['$http', '$q', 'Base64', function($http, $q, Base64){

        this.login = function(credentials){
            var loginDeferred = $q.defer();
            var authdata = Base64.encode('trusted-app' + ':' + 'secret');
            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $http.post({
                method: 'POST',
                url: 'http://localhost:8080/ShareYourViewsServices/oauth/token?grant_type=password&username=1&password=saurabh',
                data: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json'
                },
                responseType: 'json',
                crossDomain:true
            }).success(function (response) {
                loginDeferred.resolve(response);
            }).error(function(response){
                loginDeferred.reject(response);
            })


            return loginDeferred.promise();
        }

        this.request = function(config) {

            return config;
        };
        this.responseError = function(response) {
            if (response.status === 401) {
                $rootScope.$broadcast('unauthorized');
            }
            return response;
        };

        this.getCache = function(key) {
            return $window.localStorage.getItem(key);
        }

        this.removeFromCache = function(key) {
            $window.localStorage.removeItem(key);
        }

        this.setCache = function(key, value) {
            $window.localStorage.setItem(key, value);
        }



    }];

    return appservice.authenticationHttpService;
});
