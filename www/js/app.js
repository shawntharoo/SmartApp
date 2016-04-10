// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('newsApp', ['ionic']);

app.controller('newsController',function($scope,$http){
  $scope.news = [];
  $scope.loadMore = function() {
    var parameters = {
      id:$scope.lastid
    };
    $http.get('http://codedamn.com/filesCodedamn/news.php', {params : parameters}).success(function(items) {
      //useItems(items);
      $scope.lastid = items.lastID;
      angular.forEach(items, function(item){
        $scope.news.push(item);
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
      
    });
  };

   $scope.doRefresh = function() {
    $scope.news = [];
     $http({
    method : "GET",
    url: "http://codedamn.com/filesCodedamn/news.php"
  }).then(function(newsData){
    angular.forEach(newsData.data, function(newsArticle){
      $scope.news.push(newsArticle);
    });
    $scope.lastid = newsData.data.lastID;
    $scope.$broadcast('scroll.refreshComplete');
    //$scope.news = newsdata.data;
});
       
  };

  $http({
    method : "GET",
    url: "http://codedamn.com/filesCodedamn/news.php"
  }).then(function(newsData){
    angular.forEach(newsData.data, function(newsArticle){
      $scope.news.push(newsArticle);
    });
    $scope.lastid = newsData.data.lastID;
    //$scope.news = newsdata.data;
  })
});


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
