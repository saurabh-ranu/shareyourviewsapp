/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([], function () {
    'use strict';
    return ['$http', '$q', 'Base64', function ($http, $q) {

            this.dashBoard = function () {
            var dashboardDeferred = $q.defer();
            var _headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
           $http({
                method: 'GET',
                url: 'http://localhost:8080/ShareYourViewsServices/PostHandle/getAllPost',
                //data: JSON.stringify(credentials),
                headers: _headers,
                responseType: 'json',
                crossDomain: true

            }).success(function (response) {
               dashboardDeferred.resolve(response);
            }).error(function (error) {
                alert('error' + JSON.stringify(error));
               dashboardDeferred.reject(error);
            });


            return dashboardDeferred.promise;
        };


    }];

});
