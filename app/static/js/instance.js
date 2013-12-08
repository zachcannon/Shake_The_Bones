/// <reference path="jquery-ui-1.10.3.min.js" />

$( document ).ready(function() {

	var currentShakerNumber = 0;
	updateShaker(currentShakerNumber);

	$('#reset_count_to_zero').click( function() {
		$('#us_score_box').empty();	
		$('#us_score_box').append(0)
		
		$('#them_score_box').empty();	
		$('#them_score_box').append(0)
	});
	
	$('#us_win_the_turn').click( function() {
		var current_turn_count = parseInt($('#count_on_turn').text(), 10);
		var value = parseInt($('#us_score_box').text(), 10);
		
		value += current_turn_count
		
		$('#us_score_box').empty();	
		$('#us_score_box').append(value);
		
		$('#count_on_turn').empty();
		$('#count_on_turn').append(1);
		
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('#them_win_the_turn').click( function() {
		var current_turn_count = parseInt($('#count_on_turn').text(), 10);
		var value = parseInt($('#them_score_box').text(), 10);
		
		value += current_turn_count
		
		$('#them_score_box').empty();	
		$('#them_score_box').append(value);
		
		$('#count_on_turn').empty();
		$('#count_on_turn').append(1);
		
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('#next_shaker').click( function() {
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('#previous_shaker').click( function() {
		currentShakerNumber = decrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('#increment_count').click( function() {
		var current_turn_count = parseInt($('#count_on_turn').text(), 10);
		current_turn_count += 1;		
		$('#count_on_turn').empty();	
		$('#count_on_turn').append(current_turn_count);
	});
	
	$('#decrement_count').click( function() {
		var current_turn_count = parseInt($('#count_on_turn').text(), 10);
		current_turn_count -= 1;
		if(current_turn_count < 1) current_turn_count = 1;		
		$('#count_on_turn').empty();	
		$('#count_on_turn').append(current_turn_count);
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

function hideAllArrows() {
	$('#arrow_up').hide();
	$('#arrow_left').hide();
	$('#arrow_right').hide();
	$('#arrow_down').hide();
}

function updateShaker(currentShakerNumber) {
	hideAllArrows();
	if(currentShakerNumber == 0) {
		$('#arrow_up').show();
	} else if(currentShakerNumber == 1) {
		$('#arrow_right').show();
	} else if(currentShakerNumber == 2) {
		$('#arrow_down').show();
	} else {
		$('#arrow_left').show();
	}	
}