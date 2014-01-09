// // Guidebook.controller('ChaptersController', function($scope, $location, $routeParams, ChapterModel, NoteModel) {
// //   debugger;
// //   // var chapters = ChapterModel.getChapters();
// //   // for (var i = 0; i < chapters.length; i++) {
// //   //   chapter[i].notes = NoteModel.getNotesForChapter(chapter[i].id);
// //   // }
// //   // $scope.chapters = chapters;
// //   // $scope.selectedChapterId = $routesParams.chapterId;
// //   // $scope.onDelete = function(noteId) {
// //   //   var confirmDelete = confirm('Are you sure you want to delete this note?');
// //   //   if (confirmDelete) {
// //   //     $location.path('/deleteNote/' + $routeParams.chapterId + '/' + noteId);
// //   //   }
// //   // }
// // });
//
//
// phonecatApp.controller('PhoneListCtrl', ['$scope', '$http',
//   function ($scope, $http) {
//     debugger;
//     $http.get('phones/phones.json').success(function(data) {
//       $scope.phones = data;
//     });
//
//     $scope.orderProp = 'age';
//   }]);
//
// phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//   function($scope, $routeParams) {
//     debugger;
//     $scope.phoneId = $routeParams.phoneId;
//   }]);
