define([], function () {
    'use strict';
    return ['$rootScope', '$scope', '$timeout', '$http', '$state', 'cfpLoadingBar', 'DashBoardService',
        function ($rootScope, $scope, $timeout, $http, $state, cfpLoadingBar, DashBoardService) {

            var vm = this;
            vm.postList = [];
            $scope.dashBoardData = function () {
                DashBoardService.dashBoard().then(function (response) {
                    alert(response);
                    vm.postList = response.items;
                });


            };

        }
    ];
});
	