var guidebookConfig = function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "ChaptersController",
      tempalteUrl: "app/views/chapters.html"
    })
    .when("/chapter/:chapterId", {
      controller: "ChaptersController",
      templateUrl: "app/views/chapters.html"
    })
    .when("/addNote/:chapterId", {
      controller: "AddNoteController",
      tempalteUrl: "app/views/addNote.html"
    })
    .when("deleteNote/:chapterId/:noteId", {
      controller: "DeleteNoteController",
      templateUrl: "app/views/addNote.html"
    });
};
var Guidebook = angular.module('Guidebook', []).config(guidebookConfig);
