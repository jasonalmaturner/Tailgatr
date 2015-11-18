(function() {
  angular.module('tailgatrApp')
        .directive('myGames', function() {
          return {
            restrict: 'E',
            templateUrl: 'games/gamesTmpl.html',
            controller: 'gamesCtrl'
          };
        });
})();
