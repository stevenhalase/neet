'use strict'
app.controller('activitiesCtrl', activitiesController);

activitiesController.$inject = ['UserFactory', 'ActivityFactory', '$scope'];

function activitiesController(UserFactory, ActivityFactory, $scope) {
  const aCtrl = this;
  aCtrl.title = 'activities';

  aCtrl.user = UserFactory.user;

  aCtrl.selectedActivity = false;
  // console.log(aCtrl.selectedActivity)
  aCtrl.activities = ActivityFactory.activities;

  // console.log(aCtrl.activities[0].location)

  aCtrl.selectActivity = function(activity) {
    if (aCtrl.selectedActivity == activity) {
      aCtrl.selectedActivity = false;
      $('#' + activity.id).removeClass('activity--open');
    } else {
      $('#' + aCtrl.selectedActivity.id).removeClass('activity--open');
      aCtrl.selectedActivity = activity;
      $('#' + activity.id).addClass('activity--open');
    }
  }

  aCtrl.getDistance = function(activity) {
    // console.log(ActivityFactory.distance(aCtrl.user.location.lat, aCtrl.user.location.lng, activity.location.lat, activity.location.lng, 'M').toFixed(2))
    let distance = ActivityFactory.distance(aCtrl.user.location.lat, aCtrl.user.location.lng, activity.location.lat, activity.location.lng, 'M').toFixed(2);
    return distance;
  }

  $(document).ready(() => {
      var map = new GMaps({
          div: '#map',
          lat: aCtrl.user.location.lat,
          lng: aCtrl.user.location.lng,
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

      for (var i = 0; i < aCtrl.activities.length; i++) {
        let activity = aCtrl.activities[i];
        map.addMarker({
          lat: activity.location.lat,
          lng: activity.location.lng,
          title: activity.title,
          infoWindow: {
            content: '<p>' + activity.title + '</p>'
          },
          click: (e) => {
            aCtrl.selectActivity(activity);
            $scope.$apply();
          }
        });

      }
    });
}
