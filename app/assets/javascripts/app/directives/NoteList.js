Guidebook.directive('gbNoteList', function() {
  return {
    restrict: 'E',
    templateUrl: '/assets/app/views/directives/noteList.html',
    scope: {
      show: '=',
      notes: '=',
      orderValue: '@orderBy',
      onDelete: '=deleteNoteHandler'
    }
  };
});

