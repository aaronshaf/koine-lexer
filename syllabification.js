var syllabify = require('koine-lexer/lib/syllabify');
var _ = require('lodash');
var unorm = require('unorm');

window.ApplicationController = function($scope) {
  $scope.query = 'ἀπαγγέλλομεν';
  $scope.$watch('query', function(newValue, oldValue) {
    $scope.syllables = syllabify(newValue);
  });

  // $scope.consonantClusterInput = 'ἀμὴν λέγω ὑμῖν, ὁ μὴ εἰσερχόμενος διὰ τῆς θύρας εἰς τὴν αὐλὴν τῶν προβάτων';
  // $scope.extractedConsonantClusters = [];

  // $scope.$watch('consonantClusterInput', function(newValue, oldValue) {
  //   var tmp = $scope.extractedConsonantClusters.concat(syllabification.extractConsonantClustersPronouncedTogether($scope.consonantClusterInput.trim()));
  //   $scope.extractedConsonantClusters = _.unique(tmp).sort();
  // });
}