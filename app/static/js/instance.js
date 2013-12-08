/// <reference path="jquery-ui-1.10.3.min.js" />

$( document ).ready(function() {

	var currentShakerNumber = 0;
	updateShaker(currentShakerNumber);

	$('#next_shaker').click( function() {
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('#previous_shaker').click( function() {
		currentShakerNumber = decrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
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

function incrementShakerNumber(currentShakerNumber) {
	currentShakerNumber ++;
	if (currentShakerNumber > 3) currentShakerNumber = 0;
	return currentShakerNumber;
}

function decrementShakerNumber(currentShakerNumber) {
	currentShakerNumber --;
	if (currentShakerNumber < 0) currentShakerNumber = 3;
	return currentShakerNumber;
}

function updateShaker(currentShakerNumber) {
	if(currentShakerNumber == 0) {
		$('#arrow_up').show();
		$('#arrow_left').hide();
		$('#arrow_right').hide();
		$('#arrow_down').hide();
	} else if(currentShakerNumber == 1) {
		$('#arrow_up').hide();
		$('#arrow_left').hide();
		$('#arrow_right').show();
		$('#arrow_down').hide();
	} else if(currentShakerNumber == 2) {
		$('#arrow_up').hide();
		$('#arrow_left').hide();
		$('#arrow_right').hide();
		$('#arrow_down').show();
	} else {
		$('#arrow_up').hide();
		$('#arrow_left').show();
		$('#arrow_right').hide();
		$('#arrow_down').hide();
	}	
}