Guidebook.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../assets/app/views/chapters.html',
        controller: 'ChaptersController'
      });
    $locationProvider.html5Mode(false);
  }
]);
