;(function () {
    'use strict';

    var isOnGitHub = window.location.hostname === 'blueimp.github.io',
        url = isOnGitHub ? '//jquery-file-upload.appspot.com/' : 'https://upload.wistia.com';

    angular.module('uploader', [
        'blueimp.fileupload'
    ])

        .controller('GeriFileUploadController', [
            '$scope', '$http', '$filter', '$window',
            function ($scope, $http) {
                $scope.options = {
                    method: "post",
                    url: "https://upload.wistia.com/?access_token=fe24541dfbf1496d9c4b4f119d3eaf95322b91ea8f4859f4f66b8377b1cc8dc5"
                };
               
                    $scope.loadingFiles = true;
                    $http.get("https://api.wistia.com/v1/medias.json?access_token=edd44f782b1ec74f953f6cc1638fa32f53ce8c1d0c114861aac50a721f504c48")
                        .then(
                            function (response) {
                                $scope.loadingFiles = false;
                                $scope.queue = response.data || [];
                            },
                            function () {
                                $scope.loadingFiles = false;
                            }
                        );
                
            }
        ])

    }());