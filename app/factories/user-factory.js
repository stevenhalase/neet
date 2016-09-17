app.factory('UserFactory', UserFactory)

UserFactory.$inject = [];

function UserFactory() {
  let user = {
    name: 'Steve',
    img: './images/profile.jpeg',
    location: {
      lat: 43.003192,
      lng: -87.944141
    }
  }

  return {
    user: user
  }
}
