'use strict'
const app = angular.module('neetApp', ['ui.router']);

app.config(neetRouter);

neetRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

function neetRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: './login/login.html',
      controller: 'loginCtrl as lCtrl'
    })
    .state('activities', {
      url: '/activities',
      templateUrl: './activities/activities.html',
      controller: 'activitiesCtrl as aCtrl'
    })

    $urlRouterProvider.otherwise('/');
}

app.controller('indexCtrl', indexController);

indexController.$inject = ['UserFactory', '$rootScope', '$scope', '$state'];

function indexController(UserFactory, $rootScope, $scope, $state) {
  const iCtrl = this;
  iCtrl.title = 'index';

  iCtrl.user = UserFactory.user;

  iCtrl.navOpen = false;
  iCtrl.currentState = $state.current.name;

  $rootScope.$on('$stateChangeStart',
  function(event, toState, toParams, fromState, fromParams){
    console.log(toState)
      iCtrl.currentState = toState.name;
  })

  iCtrl.goTo = function() {

  }

  iCtrl.login = function() {
    $state.go('activities')
  }

  iCtrl.logout = function() {
    $state.go('login')
    iCtrl.navOpen = false;
  }

  iCtrl.openNav = function() {
    if (iCtrl.navOpen) {
      iCtrl.navOpen = false;
    } else {
      iCtrl.navOpen = true;
    }
  }

  $(document).ready(() => {
    $('html').click(function(event){
      console.log(event.target.className)
      if (event.target.className == 'side-nav-backer ng-scope side-nav-backer--open') {
        console.log('backer', iCtrl.navOpen)
        iCtrl.navOpen = false;
        $scope.$apply();
      }
    });
  })
}
