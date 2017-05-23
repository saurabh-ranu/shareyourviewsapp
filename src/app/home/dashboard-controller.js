var define2 = define([], function () {
    'use strict';
    return ['$rootScope', '$scope', '$timeout', '$http', '$state', 'cfpLoadingBar', 'DashBoardService','Upload',
        function ($rootScope, $scope, $timeout, $http, $state, cfpLoadingBar, DashBoardService, Upload) {
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

            $scope.upload = function (file) {
                alert('upload'+file);
                Upload.upload({
                    url: 'upload/url',
                    data: {file: file, 'username': $scope.username}
                }).then(function (resp) {
                    console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                }, function (resp) {
                    console.log('Error status: ' + resp.status);
                }, function (evt) {
                    //var progressPercentage = parseInt( 100.0 * evt.loaded / evt.total);
                    //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                });
            };

        }
    ];
});
