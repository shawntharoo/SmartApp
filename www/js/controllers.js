angular.module('app.controllers', [])
  
.controller('showAdvertiesementCtrl', function($scope,$http) {
	$http.get('http://localhost/SmartApp/www/#/database.json')
	.success(function(response){
		$scope.advertiesement = response.records;
	});
})
   
.controller('aboutCtrl', function($scope) {

})
   
.controller('searchAdvertiesementCtrl', function($scope) {

})
      
.controller('postAdvertiesementCtrl', function($scope) {

})
   
.controller('buissnessCardCtrl', function($scope) {

})
   
.controller('fullShowAdvertiesementCtrl', function($scope) {

})
   
.controller('fullEditAdvertiesementCtrl', function($scope) {

})
 
.controller('editButtonPageCtrl', function($scope) {

})
 