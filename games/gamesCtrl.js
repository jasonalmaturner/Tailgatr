(function() {
  angular.module('tailgatrApp')
        .controller('gamesCtrl', function($scope, fb, $firebaseArray) {
            $scope.getReservations = function() {
              var reservationsRef = new Firebase(fb.url + '/reservations/' + $scope.user.game);
              $scope.reservations = $firebaseArray(reservationsRef);
            };
        });
})();
