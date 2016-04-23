angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.showAdvertiesement'
      2) Using $state.go programatically:
        $state.go('tabsController.showAdvertiesement');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/ShowAddvertiesement
      /page1/tab5/ShowAddvertiesement
  */
  .state('tabsController.showAdvertiesement', {
    url: '/ShowAddvertiesement',
    views: {
      'tab1': {
        templateUrl: 'templates/showAdvertiesement.html',
        controller: 'showAdvertiesementCtrl'
      },
      'tab5': {
        templateUrl: 'templates/showAdvertiesement.html',
        controller: 'showAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController.about', {
    url: '/About',
    views: {
      'tab4': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController.searchAdvertiesement', {
    url: '/SearchAdvertiesement',
    views: {
      'tab2': {
        templateUrl: 'templates/searchAdvertiesement.html',
        controller: 'searchAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.postAdvertiesement', {
    url: '/PostAdvertiesement',
    views: {
      'tab5': {
        templateUrl: 'templates/postAdvertiesement.html',
        controller: 'postAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController.buissnessCard', {
    url: '/BuissnessCard',
    views: {
      'tab3': {
        templateUrl: 'templates/buissnessCard.html',
        controller: 'buissnessCardCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/tab1/ShowAddvertiesement')

  

});