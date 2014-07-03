angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, $http) {
  $scope.link = {};
  $scope.addLink = function(){
    $http.post('/api/links', $scope.link).success(function(response){
      $scope.loading = false;
      console.log("passed");
    });
  };

});

