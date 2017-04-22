/**
 * Created by Saurabh.srivastava on 2/21/2017.
 */
define([],function(){
    'use strict';
    appservice.authenticationHttpService = ['$http', '$q',function($http,$q){


        function getCache(key) {
            return $window.localStorage.getItem(key);
        }

        function removeFromCache(key) {
            $window.localStorage.removeItem(key);
        }

        function setCache(key, value) {
            $window.localStorage.setItem(key, value);
        }

    }];

});
