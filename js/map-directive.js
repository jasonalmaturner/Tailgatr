(function() {
  angular.module('tailgatrApp')
        .directive('myMaps', function() {
          return {
            restrict: 'E',
            template: '<div></div>',
            replace: true,
            link: function(scope, element, attrs) {
              var myLatLng = new google.maps.LatLng(33.2108, -87.5461);
              var mapOptions = {
                  center: myLatLng,
                  zoom: 18,
                  mapTypeId: google.maps.MapTypeId.SATELLITE,
              };
              var map = new google.maps.Map(document.getElementById(attrs.id), mapOptions);

              // This event listener will call addMarker() when the map is clicked.
               map.addListener('click', function(event) {
                 addMarker(event.latLng);
                 scope.$apply();
               });
               scope.bounceMarker;
               var markers = [];
               // Adds a marker to the map
                var addMarker = function(location) {
                  scope.clicked = false;
                  if (scope.bounceMarker) {
                    scope.bounceMarker.setMap(null);
                  }
                  scope.bounceMarker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: '/reserve/alabama_logo_small.png',
                    animation: google.maps.Animation.BOUNCE,
                  });
                  markers.push(scope.bounceMarker);
                  scope.bounceMarker.setMap(map);
                };

                  // this function will loop through a $firebaseArray and
                  // add all the users' markers to the map.
                scope.addMarkers = function(user) {
                  scope.reservations.$loaded(function() {
                    if (markers.length) {
                      for (var i = 0; i < markers.length; i++) {
                        markers[i].setMap(null);
                      }
                      markers = [];
                    }
                    if (!scope.reservations || !scope.reservations.length) {
                      return;
                    }
                    for (var i = 0; i < scope.reservations.length; i++) {
                      scope.marker = new google.maps.Marker({
                        position: {
                          lat: scope.reservations[i].location.lat,
                          lng: scope.reservations[i].location.lng,
                        },
                        map: map,
                        icon: '/reserve/alabama_logo_small.png',
                        title: scope.reservations[i].name,
                      });
                      scope.marker.setMap(map);
                      markers.push(scope.marker);
                    }
                  })
                };
                  // scope.users.$loaded().then(function(res) {
                  //   scope.addMarkers();
                  // });
          }
        }
      });
})();
