angular.module('app')
    .controller('noteController',
        ['$scope', '$routeParams', 'noteFactory', '$location',
            function($scope, $routeParams, noteFactory, $location) {
                $scope.notes = [];
                $scope.createNote = function functionName(newNote) {
                    console.log("creating noteController");
                    console.log(newNote);
                    noteFactory.createNote(newNote, function(note) {
                        $location.path('/notes');
                    })
                };

                $scope.getNotes = function() {
                    noteFactory.getNotes(function(notes) {
                        $scope.notes = notes;
                    })
                };
            }
        ]
);
