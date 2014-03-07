var λογος = require('../lib/λογος');

window.ApplicationController = function($scope) {
	$scope.query = 'ὁμολογέω';

	$scope.persons = ['1','2','3'];
	$scope.tenses = ['present','imperfect','future','aorist','perfect','pluperfect'];
	$scope.voices = ['active','middle','passive'];
	$scope.moods = ['indicative','subjunctive','optative','imperative','infinitive','participle'];
	$scope.cases = ['nominative','genitive','dative','accusative','vocative'];
	$scope.genders = ['masculine','feminine','neuter'];
	$scope.numbers = ['singular','plural'];
	$scope.degrees = ['comparative','superlative'];

	$scope.$watch('query', function(newValue, oldValue) {
		$scope.word = λογος($scope.query);
		$scope.wordJSON = JSON.stringify($scope.word,null,2);
		console.log($scope.word);
	});
}