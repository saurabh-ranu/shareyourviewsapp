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
                url: 'http://localhost:8089/ShareYourViewsServices/PostHandle/getAllPost',
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

        this.submitPost = function (post) {
            var dashboardDeferred = $q.defer();
            var postData = {
                "user": {
                    "userId": "1"
                },
                "subject": "Subject - Post",
                "description": post.description,
                "image": "TestImage",
                "comments": null
            };
            var _headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            $http({
                method: 'POST',
                url: 'http://localhost:8089/ShareYourViewsServices/PostHandle/post',
                data: JSON.stringify(postData),
                headers: _headers,
                responseType: 'application/json',
                crossDomain: true

            }).success(function (response) {
                alert(JSON.stringify(response));
                dashboardDeferred.resolve(response);
            }).error(function (error) {
                alert('error' + JSON.stringify(error));
                dashboardDeferred.reject(error);
            });
        };

    }];
});
