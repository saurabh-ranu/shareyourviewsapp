define([], function () {
    'use strict';
    return ['$rootScope', '$scope', '$timeout', '$http', '$state', 'cfpLoadingBar', 'DashBoardService',
        function ($rootScope, $scope, $timeout, $http, $state, cfpLoadingBar, DashBoardService) {


            $scope.postList = [];

            DashBoardService.dashBoard().then(function (response) {
                $scope.postList = response.items;
                cfpLoadingBar.complete();
            });



            //$scope.dashBoardData();

        }
    ];
});
	