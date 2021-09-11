window.addEventListener('DOMContentLoaded', function(){

	'use strict';

	//Timer
	function countTimer(deadline){

		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');
		

		function getTimeRemaining(){
			let	dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);

			return {dateNow, dateStop, timeRemaining, hours, minutes, seconds};
		}

		function zero(number){
			if(number < 10){
				return '0' + number;
			}
			return number;
		}

		function updateClock(){
			let timer = getTimeRemaining();

			if(timer.timeRemaining > 0){
				timerHours.textContent = zero(timer.hours);
				timerMinutes.textContent = zero(timer.minutes);
				timerSeconds.textContent = zero(timer.seconds);	
						
			}else if(timer.dateStop < timer.dateNow){
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
			}
		}

		setInterval(updateClock);
	}

	countTimer('12 september 2021');
});