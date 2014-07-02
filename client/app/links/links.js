angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  //create a data property on $scope
  $scope.data = {};

  $scope.getLinks = function(){
    $http.get('/api/links').success(function(links){
      $scope.data.links = links;
    });
    // $http({
    //   method: 'GET',
    //   url: '/api/links'
    // })
    // .success(function(){
    //   console.log('links.js, data------------------------> ');
    // })
    // .error(function(){
    //   console.log('ERROR');
    // });
  };

  $scope.getLinks();

});
