// (function() {
//   angular.module('tailgatrApp')
//         .service('reserveService', function() {
//
//           this.addReservation = function($scope) {
//             if ($scope.marker) {
//               user.location = {
//                 lat: $scope.marker.position.lat(),
//                 lng: $scope.marker.position.lng()
//               };
//             }
//             $scope.reservations.$add({
//               name: user.name,
//               game: user.game,
//               location: user.location,
//               // replace user.email with user.uid after auth is set up
//               user: user.email
//             }).then(function(res) {
//               $scope.clicked = true;
//               // Take out the next several lines after auth is set up
//               if (!findUser($scope.users, user.email)) {
//                 delete user.game;
//                 delete user.location;
//                 $scope.users.$add(user);
//               }
//               alert('Thank you for your reservation! Roll Tide!');
//               $scope.user = '';
//               // for (var key in userForm) {
//               //   userForm[key].pristine = true;
//               //  }
//             });
//           };
//         })
//
//
// 
//
// })();
