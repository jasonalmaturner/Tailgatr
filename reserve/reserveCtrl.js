(function() {
  angular.module('tailgatrApp')
        .controller('reserveCtrl', function($scope, fb, $firebaseArray) {
          $scope.reservations;

          var ref = new Firebase(fb.url + '/users');
          $scope.users = $firebaseArray(ref);

          $scope.clicked = true;

          // $scope.addReservation = function(user) {
          //   reserveService.addReservation();
          // }

          $scope.addReservation = function(user) {
            if ($scope.bounceMarker) {
              user.location = {
                lat: $scope.bounceMarker.position.lat(),
                lng: $scope.bounceMarker.position.lng()
              };
            }
            $scope.reservations.$add({
              name: user.name,
              game: user.game,
              location: user.location,
              // replace user.email with user.uid after auth is set up
              user: user.email
            }).then(function(res) {
              $scope.clicked = true;
              // Take out the next several lines after auth is set up
              if (!findUser($scope.users, user.email)) {
                delete user.game;
                delete user.location;
                $scope.users.$add(user);
              }
              alert('Thank you for your reservation! Roll Tide!');
              $scope.user = '';
              // for (var key in userForm) {
              //   userForm[key].pristine = true;
              //  }
            });
          };
          $scope.checkEmail = function(user) {
            if (!$scope.reservations.length) {
              return $scope.addReservation(user);
            } else {
              for (var i = 0; i < $scope.reservations.length; i++) {
                if ($scope.reservations[i].user !== user.email && $scope.reservations[i].game === user.game ) {
                  $scope.addReservation(user);
                }
              }
            };
            // alert("Sorry, this email has already been used to reserve a spot for this game. Please select a different game.");
          };
        });
})();
