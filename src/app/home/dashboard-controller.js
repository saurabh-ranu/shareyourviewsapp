var define2 = define([], function () {
    'use strict';
    return ['$rootScope', '$scope', '$timeout', '$http', '$state', 'cfpLoadingBar', 'DashBoardService',
        function ($rootScope, $scope, $timeout, $http, $state, cfpLoadingBar, DashBoardService) {
            $scope.postList = [];

            DashBoardService.dashBoard().then(function (response) {
                $scope.postList = response.items;
                cfpLoadingBar.complete();
            });

            $scope.submitPost = function () {
                this.post = {
                    subject: undefined,
                    description: $scope.postText,
                    image: undefined,
                    userId: '1'
                };
                alert('Post->' + $scope.postText);
                DashBoardService.submitPost(this.post);
            };

        }
    ];
});
