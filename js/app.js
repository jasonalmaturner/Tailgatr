// take this function out and off of the global scope
// after auth is set up
function findUser(arr, email) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].email === email) {
      return true;
    }
  }
  return false;
}

(function() {
  angular.module('tailgatrApp', ['ui.router', 'firebase', 'ngMessages'])
        .constant('fb', {
          url: 'https://tailgatr.firebaseio.com'
        })
        .config(function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise('/home');

          $stateProvider
            .state('home', {
              url: '/home',
              templateUrl: '/home/homeTmpl.html',
            })
            .state('reserve', {
              url: '/reserve',
              templateUrl: '/reserve/reserveTmpl.html',
              controller: 'reserveCtrl'
            })
            .state('schedule', {
              url: '/schedule',
              templateUrl: '/schedule/scheduleTmpl.html',
            })
            .state('contact', {
              url: '/contact',
              templateUrl: '/contact/contactTmpl.html',
            })
        })
})();
