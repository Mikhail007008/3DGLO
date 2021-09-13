window.addEventListener('DOMContentLoaded', function(){

	'use strict';

	//Timer
	const countTimer = deadline =>{

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

	countTimer('14 september 2021');

	//Menu
	const toggleMenu = () =>{
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('li>a');

		const handlerMenu = () =>{
			menu.classList.toggle('active-menu');
		};

		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);

		menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

	};

	toggleMenu();

	//popup
	const togglePopup = () =>{
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupClose = document.querySelector('.popup-close'),
			popupContent = document.querySelector('.popup-content');



		popupBtn.forEach((elem) =>{
			elem.addEventListener('click', () =>{
				if(window.innerWidth > 768){

					const start = Date.now();

					let timer = setInterval(() => {
					let timePassed = Date.now() - start;
			
					popupContent.style.left = timePassed / 3.5 + 'px';
			
					if (timePassed > 2000) {clearInterval(timer);}
			
					}, 20);
				}

				popup.style.display = 'block';
				
			});
		});

		popupClose.addEventListener('click', () =>{
			popup.style.display = 'none';
		});

	};

	togglePopup();

});