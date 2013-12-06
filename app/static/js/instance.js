/// <reference path="jquery-ui-1.10.3.min.js" />

$( document ).ready(function() {

	$('#us_increment').click( function() {
		var value = parseInt($('#us_score_box').text(), 10);
		value = value + 1;
		$('#us_score_box').empty();	
		$('#us_score_box').append(value);
	});
	
	$('#us_decrement').click( function() {
		var value = parseInt($('#us_score_box').text(), 10);
		value = value - 1;
		$('#us_score_box').empty();	
		$('#us_score_box').append(value);
	});

	$('#them_increment').click( function() {
		var value = parseInt($('#them_score_box').text(), 10);
		value = value + 1;
		$('#them_score_box').empty();	
		$('#them_score_box').append(value);
	});
	
	$('#them_decrement').click( function() {
		var value = parseInt($('#them_score_box').text(), 10);
		value = value - 1;
		$('#them_score_box').empty();	
		$('#them_score_box').append(value);
	});
});