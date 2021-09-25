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
		const menu = document.querySelector('menu'),
			menuItems = menu.querySelectorAll('li>a');

		const handlerMenu = () =>{
			menu.classList.toggle('active-menu');
		};

		document.addEventListener('click', (event) =>{
			let target = event.target,
			 foo = target.closest('.menu');

			if(foo){handlerMenu();}

			if (target === event.target.closest('.close-btn')){
				handlerMenu();
			}

			menuItems.forEach((item) =>{
				if(item === target){
					handlerMenu();
				}
			});
		});

	};

	toggleMenu();

	//popup
	const togglePopup = () =>{
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupContent = document.querySelector('.popup-content');

		popupBtn.forEach((elem) =>{
			elem.addEventListener('click', () =>{
				if(window.innerWidth > 768){
					popupContent.style.left = 0;

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

		popup.addEventListener('click', (event) =>{
			let target = event.target;

			if(target.classList.contains('popup-close')){
				popup.style.display = 'none';
			}else{
				target = target.closest('.popup-content');

				if(!target){
					popup.style.display = 'none';
				}
			}
		});
	};

	togglePopup();

	//tabs

	const tabs = () =>{

		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) =>{

			for(let i =0; i < tabContent.length; i++){

				if(index === i){

					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				}else{

					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};

		tabHeader.addEventListener('click', (event) =>{

			let target = event.target;
				target = target.closest('.service-header-tab');
			
			if(target){
			
				tab.forEach((item, i) =>{
					if(item === target){
						toggleTabContent(i);
					}
				});
			}
		});
	};

	tabs();

	//slider

	const slider = () =>{
		const slide = document.querySelectorAll('.portfolio-item'),
			allDots = document.querySelector('.portfolio-dots'),
			slider = document.querySelector('.portfolio-content');

		let currentSlide = 0,
			interval;

		const newDot = () =>{
			for(let i = 0; i < slide.length; i++){

				let dot = document.createElement('li');
				dot.className = 'dot';
				allDots.appendChild(dot);

				if(i === 0){
					dot.className = 'dot dot-active';
				}
			}
		};
		newDot();

		const dot = document.querySelectorAll('.dot');

		const prevSlide = (elem, index, strClass) =>{
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) =>{
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () =>{

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if(currentSlide >= slide.length){
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) =>{
			interval = setInterval(autoPlaySlide, time);
		};
		const stopSlide = () =>{
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) =>{
			event.preventDefault();

			let target = event.target;

			if(!target.matches('.portfolio-btn, .dot')){
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if(target.matches("#arrow-right")){
				currentSlide++;
			}else if(target.matches("#arrow-left")){
				currentSlide--;
			}else if(target.matches(".dot")){
				dot.forEach((elem, index) =>{
					if(elem === target){
						currentSlide = index;
					}
				});
			}

			if(currentSlide >= slide.length){
				currentSlide = 0;
			}

			if(currentSlide < 0){
				currentSlide = slide.length -1;
			}

			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		});

		slider.addEventListener('mouseover', (event) =>{
			if(event.target.matches('.portfolio-btn') || 
			event.target.matches('.dot')){
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (event) =>{
			if(event.target.matches('.portfolio-btn') || 
			event.target.matches('.dot')){
				startSlide(1500);
			}
		});
		startSlide(1500);
	};

	slider();

	//our team
	const team = () =>{
		const commandPhoto = document.querySelectorAll('.command__photo');

		commandPhoto.forEach((elem)=>{
			elem.setAttribute('data-src', elem.getAttribute('src'));

			elem.addEventListener('mouseenter', event =>{event.target.src = event.target.dataset.img;});
			elem.addEventListener('mouseleave', event =>{event.target.src = event.target.dataset.src;});
		});

	};

	team();

	//calculate
	const calc = () =>{

		const calcItem = document.querySelectorAll('.calc-item');

		calcItem.forEach((elem) =>{
			if(elem.hasAttribute('type')){
				elem.addEventListener('input', () => elem.value = elem.value.replace(/\D/g, ''));
			}
		});
	};

	calc();

	//connect
	const connect = () =>{

		const footerFormInput = document.querySelector('.footer-form-input'),
			topForm = document.querySelectorAll('.top-form'),
			mess = document.querySelector('.mess');

		const checkInp = (elem) =>{
			if(elem.getAttribute('name') === 'user_name' || elem.getAttribute('name') === 'user_message'){
				elem.value = elem.value.replace(/[^А-Яа-я- ]/g, '');
			}else if(elem.getAttribute('name') === 'user_email'){
				elem.value = elem.value.replace(/[^A-Za-z-@_.!~*']/g, '');
			}else if(elem.getAttribute('name') === 'user_phone'){
				elem.value = elem.value.replace(/[^0-9)(-]/g, '');
			}
		};

		const blur = (elem) =>{
				elem.value = elem.value.replace(/^ | $|^-|-$/g, '');
				elem.value = elem.value.replace(/\s+/g, ' ');
				elem.value = elem.value.replace(/-+/g, '-');
				
				if(elem.getAttribute('name') === 'user_name'){
					elem.value = elem.value.replace(/(^\D|\s\D)(\S*)/g, 
					(_,a1,a2) => a1.toUpperCase() + a2.toLowerCase());
				}
		};

		footerFormInput.addEventListener('input', () =>{

			const target = event.target,
				messMatch = target.closest('.mess'),
				topFormMatch = target.closest('.top-form');

			if(topFormMatch){
				topForm.forEach((elem) =>{
					checkInp(elem);
					elem.onblur = () => blur(elem);
				});

			}else if(messMatch){
				checkInp(mess);
				mess.onblur = () => blur(mess);
			}
		});
	};

	connect();

});