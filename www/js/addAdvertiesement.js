var Addapp = angular.module('AddAdver', []);
Addapp.controller('addAdvertiesement',function($scope,$http){
  $scope.insertData = function(){
    $http.post('insertadd.html',{'title':$scope.user.title,'email':$scope.user.email}).success(function(data,status,headers,config){
      console.log("data inserted successfully");
    });
  }
  });