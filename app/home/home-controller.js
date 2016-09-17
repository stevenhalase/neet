'use strict'
app.controller('homeCtrl', homeController);

homeController.$inject = [];

function homeController() {
  const hCtrl = this;
  hCtrl.title = 'home';
}
