'use strict'
app.controller('homeCtrl', homeController);

homeController.$inject = ['UserFactory', 'ActivityFactory', '$scope'];

function homeController(UserFactory, ActivityFactory, $scope) {
  const hCtrl = this;
  hCtrl.title = 'home';

  hCtrl.user = UserFactory.user;

  hCtrl.selectedActivity = false;
  // console.log(hCtrl.selectedActivity)
  hCtrl.activities = ActivityFactory.activities;

  // console.log(hCtrl.activities[0].location)

  hCtrl.selectActivity = function(activity) {
    if (hCtrl.selectedActivity == activity) {
      hCtrl.selectedActivity = false;
      $('#' + activity.id).removeClass('activity--open');
    } else {
      $('#' + hCtrl.selectedActivity.id).removeClass('activity--open');
      hCtrl.selectedActivity = activity;
      $('#' + activity.id).addClass('activity--open');
    }
  }

  $(document).ready(function () {
      var map = new GMaps({
          div: '#map',
          lat: hCtrl.user.location.lat,
          lng: hCtrl.user.location.lng,
          zoom: 13,
          disableDefaultUI: true
      });
      GMaps.geolocate({
        success: function(position) {
          map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error) {
          // alert('Geolocation failed: '+error.message);
        },
        not_supported: function() {
          // alert("Your browser does not support geolocation");
        },
        always: function() {
          // alert("Done!");
        }
      });

      for (var i = 0; i < hCtrl.activities.length; i++) {
        let activity = hCtrl.activities[i];
        map.addMarker({
          lat: activity.location.lat,
          lng: activity.location.lng,
          title: activity.title,
          infoWindow: {
            content: '<p>' + activity.title + '</p>'
          },
          click: (e) => {
            hCtrl.selectActivity(activity);
            $scope.$apply();
          }
        });

      }
    });
}
