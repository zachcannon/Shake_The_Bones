/// <reference path="jquery-ui-1.10.3.min.js" />

$( document ).ready(function() {

	var currentShakerNumber = 0;
	updateShaker(currentShakerNumber);

	$('.js-reset_count_to_zero').click( function() {
		us_score = 0;
		them_score = 0;
		$('.js-us_score_box').empty()
		$('.js-us_score_box').append(us_score)
		
		$('.js-them_score_box').empty();	
		$('.js-them_score_box').append(them_score)
	});
	
	$('.js-us_win_the_turn').click( function() {
		var current_turn_count = parseInt($('.js-count_on_turn:visible').text(), 10);
		
		us_score += current_turn_count
		
		$('.js-us_score_box').empty();	
		$('.js-us_score_box').append(us_score);
		
		$('.js-count_on_turn').empty();
		$('.js-count_on_turn').append(1);
		
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('.js-them_win_the_turn').click( function() {
		var current_turn_count = parseInt($('.js-count_on_turn:visible').text(), 10);
		
		them_score += current_turn_count
		
		$('.js-them_score_box').empty();	
		$('.js-them_score_box').append(them_score);
		
		$('.js-count_on_turn').empty();
		$('.js-count_on_turn').append(1);
		
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('.js-next_shaker').click( function() {
		currentShakerNumber = incrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('.js-previous_shaker').click( function() {
		currentShakerNumber = decrementShakerNumber(currentShakerNumber);
		updateShaker(currentShakerNumber);
	});
	
	$('.js-increment_count').click( function() {
		var current_turn_count = parseInt($('.js-count_on_turn:visible').text(), 10);
		current_turn_count += 1;		
		$('.js-count_on_turn').empty();	
		$('.js-count_on_turn').append(current_turn_count);
	});
	
	$('.js-decrement_count').click( function() {
		var current_turn_count = parseInt($('.js-count_on_turn:visible').text(), 10);
		current_turn_count -= 1;
		if(current_turn_count < 1) current_turn_count = 1;		
		$('.js-count_on_turn').empty();	
		$('.js-count_on_turn').append(current_turn_count);
	});
	
	$('.js-us_increment').click( function() {
		us_score = us_score + 1;
		$('.js-us_score_box').empty();	
		$('.js-us_score_box').append(us_score);
	});
	
	$('.js-us_decrement').click( function() {
		var value = parseInt($('.js-us_score_box:visible').text(), 10);
		us_score = us_score - 1;
		if(us_score < 0) us_score=0;
		$('.js-us_score_box').empty();	
		$('.js-us_score_box').append(us_score);
	});

	$('.js-them_increment').click( function() {
		them_score = them_score + 1;
		$('.js-them_score_box').empty();	
		$('.js-them_score_box').append(them_score);
	});
	
	$('.js-them_decrement').click( function() {
		them_score = them_score - 1;
		if(them_score < 0) them_score=0;
		$('.js-them_score_box').empty();	
		$('.js-them_score_box').append(them_score);
	});
});

var them_score = 0;
var us_score = 0;

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
	$('.js-arrow_up').hide();
	$('.js-arrow_left').hide();
	$('.js-arrow_right').hide();
	$('.js-arrow_down').hide();
}

function updateShaker(currentShakerNumber) {
	hideAllArrows();
	if(currentShakerNumber == 0) {
		$('.js-arrow_up').show();
	} else if(currentShakerNumber == 1) {
		$('.js-arrow_right').show();
	} else if(currentShakerNumber == 2) {
		$('.js-arrow_down').show();
	} else {
		$('.js-arrow_left').show();
	}	
}