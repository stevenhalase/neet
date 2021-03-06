app.factory('ActivityFactory', ActivityFactory)

ActivityFactory.$inject = [];

function ActivityFactory() {
  let activities = [{
    id: 1,
    user: {
      name: 'Steve',
      img: './images/user1.jpg'
    },
    title: 'BBQ @ Park',
    date: Date.parse('22 September 2016'),
    location: {
      address: '2123 S Muskego Ave Milwaukee, WI 53215',
      lat: 43.006211,
      lng: -87.94291699999997
    },
    invitedUsers: ['1']
  },{
    id: 2,
    user: {
      name: 'Joe',
      img: './images/user2.jpg'
    },
    title: 'Party @ House',
    date: new Date(),
    location: {
      address: '2304 S 20th St Milwaukee, WI 53215',
      lat: 43.00279219999999,
      lng: -87.9381199
    },
    invitedUsers: ['1']
  }]

  function distance(lat1, lon1, lat2, lon2, unit) {
  	let radlat1 = Math.PI * lat1/180
  	let radlat2 = Math.PI * lat2/180
  	let theta = lon1-lon2
  	let radtheta = Math.PI * theta/180
  	let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  	dist = Math.acos(dist)
  	dist = dist * 180/Math.PI
  	dist = dist * 60 * 1.1515
  	if (unit=="K") { dist = dist * 1.609344 }
  	if (unit=="N") { dist = dist * 0.8684 }
  	return dist
  }

  return {
    activities: activities,
    distance: distance
  }
}
