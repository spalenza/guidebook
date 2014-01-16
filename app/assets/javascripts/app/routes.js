Guidebook.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        controller: 'ChaptersController',
        templateUrl: '/assets/app/views/chapters.html'
      })
      .when('/chapter/:chapterId', {
        controller: 'ChaptersController',
        templateUrl: '/assets/app/views/chapters.html'
      })
      .when('/addNote/:chapterId', {
        controller: 'AddNoteController',
        templateUrl: '/assets/app/views/addNote.html'
      })
      .when('/deleteNote/:chapterId/:noteId', {
        controller: 'DeleteNoteController',
        templateUrl: '/assets/app/views/addNote.html'
      });
    $locationProvider.html5Mode(false);
  }
]);
