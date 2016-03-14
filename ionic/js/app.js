// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.services','chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
    abstract: true,
    url: '/app',    
    templateUrl: 'templates/apps.html'    
  })

  // Each tab has its own nav history stack:

  //dash
  .state('app.dash', {
      url: '/dash',
      views: {
        'app-dash': {
          templateUrl: 'templates/dashboard/app-dash.html',
          controller: 'DashCtrl'
        }
      }
    })
    .state('app.dash-btn', {
      url: '/dash/btn',
      views: {
        'app-dash': {
          templateUrl: 'templates/dashboard/dash-btn.html'
        }
      }
    })
    .state('app.dash-form', {
      url: '/dash/form',
      views: {
        'app-dash': {
          templateUrl: 'templates/dashboard/dash-form.html'
        }
      }
    })


  //chats
  .state('app.chats', {
      url: '/chats',
      views: {
        'app-chats': {
          templateUrl: 'templates/chats/app-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('app.chats-admin', {
      url: '/chats/admin',
      views: {
        'app-chats': {
          templateUrl: 'templates/chats/chat-form.html',
          controller: 'ChatsFormCtrl'
        }
      }
    })
    .state('app.chats-account', {
      url: '/chats/account',
      views: {
        'app-chats': {
          templateUrl: 'templates/chats/chat-form.html',
          controller: 'ChatsFormCtrl'
        }
      }
    })
    .state('app.chats-charts', {
      url: '/chats/charts',
      views: {
        'app-chats': {
          templateUrl: 'templates/chats/charts.html',
          controller: 'ChartsCtrl'
        }
      }
    })


  //account
  .state('app.account', {
    url: '/account',
    views: {
      'app-account': {
        templateUrl: 'templates/app-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  //access.
  .state('access', {
    url: '/access',
    template: '<ion-nav-view></ion-nav-view>'
  })
  .state('access.signin', {
      url: '/signin',      
      template: '<div>hello signin</div>'
      
    })
    .state('access.signup', {
      url: '/signup',      
      template: '<div>hello signup</div>'
      
    })

  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dash');

});