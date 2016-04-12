angular.module('ToyotaStarter')
  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.views.transition('none');
    
    $stateProvider

      .state('main', {
        url: '/main',
        abstract: true,
        cache: true,
        templateUrl: 'templates/app.html',
        controller: 'AppCtrl'
      })
      .state('main.home', {
        url: '/home',
        cache: false,
        views: {
          'main': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('main.count', {
        url: '/count',
        //cache: true,
        views: {
          'main': {
            templateUrl: 'templates/count.html',
            controller: 'CountCtrl'
          }
        }
      })
    $urlRouterProvider.otherwise('/main/home');

  });
