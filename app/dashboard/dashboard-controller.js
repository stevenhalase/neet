'use strict'
app.controller('dashboardCtrl', dashboardController);

dashboardController.$inject = ['UserFactory', 'NewsFactory', '$state'];

function dashboardController(UserFactory, NewsFactory, $state) {
  const dCtrl = this;
  dCtrl.title = 'dashboard';

  dCtrl.user = UserFactory.user;

  dCtrl.news = NewsFactory.news;

  dCtrl.selectedActivity = false;

  dCtrl.selectActivity = function(activity) {
    if (dCtrl.selectedActivity == activity) {
      dCtrl.selectedActivity = false;
      $('#' + activity.id).removeClass('activity--open');
    } else {
      $('#' + dCtrl.selectedActivity.id).removeClass('activity--open');
      dCtrl.selectedActivity = activity;
      $('#' + activity.id).addClass('activity--open');
    }
  }

}
