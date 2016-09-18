app.factory('UserFactory', UserFactory)

UserFactory.$inject = [];

function UserFactory() {
  let user = {
    name: 'Steve',
    img: './images/profile.jpg',
    location: {
      lat: 43.003192,
      lng: -87.944141
    }
  }

  return {
    user: user
  }
}
