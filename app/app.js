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
    .state('home', {
      url: '/home',
      templateUrl: './home/home.html',
      controller: 'homeCtrl as hCtrl'
    })

    $urlRouterProvider.otherwise('/');
}

app.controller('indexCtrl', indexController);

indexController.$inject = ['UserFactory', '$rootScope', '$state'];

function indexController(UserFactory, $rootScope, $state) {
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

  iCtrl.openNav = function() {
    if (iCtrl.navOpen) {
      iCtrl.navOpen = false;
    } else {
      iCtrl.navOpen = true;
    }
  }
}
