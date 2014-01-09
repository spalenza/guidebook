var phonecatApp = angular.module('phonecatApp', [
  'ngRoute', 'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    debugger;
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);


/* var Guidebook = angular.module('Guidebook', ['ngRoute']); */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    debugger;
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    debugger;
    $scope.phoneId = $routeParams.phoneId;
  }]);

