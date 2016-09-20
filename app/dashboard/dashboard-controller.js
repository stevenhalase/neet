'use strict'
app.controller('dashboardCtrl', dashboardController);

dashboardController.$inject = ['UserFactory', 'ActivityFactory', 'NewsFactory', '$scope', '$state'];

function dashboardController(UserFactory, ActivityFactory, NewsFactory, $scope, $state) {
  const dCtrl = this;
  dCtrl.title = 'dashboard';

  dCtrl.user = UserFactory.user;
  dCtrl.user.activities.push(ActivityFactory.activities[0])
  // console.log(dCtrl.user.activities[0])

  dCtrl.news = NewsFactory.news;

  dCtrl.selectedActivity = false;
  dCtrl.openNewActivity = false;
  dCtrl.newActivitySubmitted = false;

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

  dCtrl.submitNewActivity = function() {
    let activity = dCtrl.newActivity;
    activity.user = {
      id: dCtrl.user.id,
      name: dCtrl.user.name,
      img: dCtrl.user.img
    };
    UserFactory.addHostedActivity(UserFactory.user, activity);
    dCtrl.newActivitySubmitted = true;
  }

  dCtrl.getDistance = function(activity) {
    // console.log(ActivityFactory.distance(dCtrl.user.location.lat, dCtrl.user.location.lng, activity.location.lat, activity.location.lng, 'M').toFixed(2))
    let distance = ActivityFactory.distance(dCtrl.user.location.lat, dCtrl.user.location.lng, activity.location.lat, activity.location.lng, 'M').toFixed(2);
    // console.log(distance)
    return distance;
  }

  dCtrl.getTimeFromNow = function(date) {

  }

}
