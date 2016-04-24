angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
 .state('tabsController.mainprofile', {
    url: '/mainprofile',
    views: {
      'tab1': {
        templateUrl: 'templates/mainprofile.html',
        controller: 'mainprofileCtrl'
      }
    }
  }) 
  //yik event start
    .state('tabsController.events', {
    url: '/events',
    views: {
      'tab5': {
    templateUrl: 'templates/events.html',
    controller: 'eventsCtrl'
        }
       }
  })
  //yik event end
    .state('tabsController.search', {
    url: '/search',
    views: {
      'tab4': {
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
      }
    }
  })

      .state('tabsController.orderPizza', {
    url: '/order',
    views: {
      'tab3': {
        templateUrl: 'templates/page.html',
        controller: 'orderPizzaCtrl'
      }
    }
  })



  
         

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cart'
      2) Using $state.go programatically:
        $state.go('tabsController.cart');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })
  
  
  .state('tabsController.Groups', {
    url: '/page-group',
    views: {
      'tab1': {
        templateUrl: 'templates/group.html',
        controller: 'groupCtrl'
      },
      'tab2': {
        templateUrl: 'templates/group.html',
        controller: 'groupCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  

  .state('signup', {
    url: '/page5',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })
  
    .state('genaraldetails', {
    url: '/address',
    templateUrl: 'templates/address.html',
    controller: 'addressCtrl'
  })
    .state('profile', {
    url: '/page6',
    
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      
    
  })
        .state('request', {
    url: '/request',
    
        templateUrl: 'templates/request.html',
        controller: 'requestCtrl'
      
    
  })
         .state('occupation', {
    url: '/occupation',
    templateUrl: 'templates/occupation.html',
    controller: 'occupationCtrl'
  })
           .state('family', {
    url: '/family',
    templateUrl: 'templates/family.html',
    controller: 'familyCtrl'
  })
  //yik routes

.state('eventPage', {
    url: '/eventPage',
    
    templateUrl: 'templates/eventPage.html',
    controller: 'eventPageCtrl'
  })

  .state('createEvent', {
    url: '/createNewEvent',
    templateUrl: 'templates/createEvent.html',
    controller: 'createevent'
  })

  .state('eventTypes', {
    url: '/OtherEvents',
    templateUrl: 'templates/eventTypes.html',
    controller: 'eventtype'
  })

   .state('eventDesc', {
    url: '/description',
    templateUrl: 'templates/eventDesc.html',
    controller: 'eventdesc'
  })

   .state('eventGoing', {
    url: '/going',
    templateUrl: 'templates/goingEvents.html',
    controller: 'eventgoing'
  })

    .state('eventHosted', {
    url: '/hosted',
    templateUrl: 'templates/hostedEvents.html',
    controller: 'eventhosted'
  })

     .state('eventPast', {
    url: '/past',
    templateUrl: 'templates/pastEvents.html',
    controller: 'eventpast'
  })

   //panchali routes

      .state('group', {
    url: '/page-group',
    templateUrl: 'templates/group.html',
    controller: 'groupCtrl'
  })

  .state('cricket', {
    url: '/page-cricket-mainpage',
    templateUrl: 'templates/cricket.html',
    controller: 'cricketCtrl'
  })

  .state('selectedPost', {
    url: '/page-group-post-one',
    templateUrl: 'templates/selectedPost.html',
    controller: 'selectedPostCtrl'
  })

  .state('cricketPost', {
    url: '/page-group-post',
    templateUrl: 'templates/cricketPost.html',
    controller: 'cricketPostCtrl'
  })

  .state('addAPost', {
    url: '/page-add-grouppost',
    templateUrl: 'templates/addAPost.html',
    controller: 'addAPostCtrl'
  })

  .state('createAGroup', {
    url: '/page-create-group',
    templateUrl: 'templates/createAGroup.html',
    controller: 'createAGroupCtrl'
  })

  .state('followAGroup', {
    url: '/page-follow-group12 members',
    templateUrl: 'templates/followAGroup.html',
    controller: 'followAGroupCtrl'
  })

  .state('settings', {
    url: '/page-group-setting',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })
  //sanda routes
  .state('tabsController2.showAdvertiesement', {
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

  .state('tabsController2.about', {
    url: '/About',
    views: {
      'tab4': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('tabsController2.searchAdvertiesement', {
    url: '/SearchAdvertiesement',
    views: {
      'tab2': {
        templateUrl: 'templates/searchAdvertiesement.html',
        controller: 'searchAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController2', {
    url: '/tabsController2',
    templateUrl: 'templates/tabsController2.html',
    abstract:true
  })

  .state('tabsController2.postAdvertiesement', {
    url: '/PostAdvertiesement',
    views: {
      'tab5': {
        templateUrl: 'templates/postAdvertiesement.html',
        controller: 'postAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController2.buissnessCard', {
    url: '/BuissnessCard',
    views: {
      'tab3': {
        templateUrl: 'templates/buissnessCard.html',
        controller: 'buissnessCardCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.fullShowAdvertiesement'
      2) Using $state.go programatically:
        $state.go('tabsController.fullShowAdvertiesement');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/fullShowAdvertiesement
      /page1/tab5/fullShowAdvertiesement
  */
  .state('tabsController2.fullShowAdvertiesement', {
    url: '/fullShowAdvertiesement',
    views: {
      'tab1': {
        templateUrl: 'templates/fullShowAdvertiesement.html',
        controller: 'fullShowAdvertiesementCtrl'
      },
      'tab5': {
        templateUrl: 'templates/fullShowAdvertiesement.html',
        controller: 'fullShowAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController2.fullEditAdvertiesement', {
    url: '/fullEditAdvertiesement',
    views: {
      'tab2': {
        templateUrl: 'templates/fullEditAdvertiesement.html',
        controller: 'fullEditAdvertiesementCtrl'
      }
    }
  })

  .state('tabsController2.editButtonPage', {
    url: '/editButtonPage',
    views: {
      'tab2': {
        templateUrl: 'templates/editButtonPage.html',
        controller: 'editButtonPageCtrl'
      }
    }
  })
  
    .state('result', {
      url: '/result',
      templateUrl: 'templates/results.html',
      controller: 'resultCtrl'
    })
  

$urlRouterProvider.otherwise('/page4')

  

});