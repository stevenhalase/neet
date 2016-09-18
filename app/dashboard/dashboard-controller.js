'use strict'
app.controller('dashboardCtrl', dashboardController);

dashboardController.$inject = ['$state'];

function dashboardController($state) {
  const dCtrl = this;
  dCtrl.title = 'dashboard';


}
