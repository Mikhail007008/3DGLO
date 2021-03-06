const countTimer = (deadline) =>{

	const timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds');
	

	const getTimeRemaining = () =>{
		let	dateStop = new Date(deadline).getTime(),
			dateNow = new Date().getTime(),
			timeRemaining = (dateStop - dateNow) / 1000,
			seconds = Math.floor(timeRemaining % 60),
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60);

		return {dateNow, dateStop, timeRemaining, hours, minutes, seconds};
	};

	const zero= number => number < 10 ? `0${number}` : number;

	const updateClock = () =>{
		const timer = getTimeRemaining();

		if(timer.timeRemaining > 0){
			timerHours.textContent = zero(timer.hours);
			timerMinutes.textContent = zero(timer.minutes);
			timerSeconds.textContent = zero(timer.seconds);	
					
		}else if(timer.dateStop < timer.dateNow){
			timerHours.textContent = '00';
			timerMinutes.textContent = '00';
			timerSeconds.textContent = '00';
		}
	};

	setInterval(updateClock);
};

export default countTimer;