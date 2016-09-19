app.factory('UserFactory', UserFactory)

UserFactory.$inject = [];

function UserFactory() {
  let user = {
    name: 'Steve',
    img: './images/profile.jpg',
    location: {
      lat: 43.003192,
      lng: -87.944141
    },
    activitiesRequested: [],
    activities: []
  }

  function updateUser(user, info) {
      for (prop in user) {
          if (info[prop]) {
              console.log('found', info[prop])
              user[prop] = info[prop];
          }
      }
      console.log(user)
  }

  function addRequestedActivity(user, activity) {
      user.activitiesRequested.push(activity);
      console.log('in factory: ', user)
  }

  return {
    user: user,
    updateUser : updateUser,
    addRequestedActivity : addRequestedActivity
  }
}
