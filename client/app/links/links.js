angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  //create a data property on $scope
  $scope.data = {};

  $scope.getLinks = function(){
    $http.get('/api/links').success(function(links){
      $scope.data.links = links;
    });
  };

  $scope.getLinks();

});
