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
			
					popupContent.style.left = timePassed / 1.4 + 'px';
			
					if (timePassed > 800) {clearInterval(timer);}
			
					});
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
	const calc = (price = 100) =>{
		const calcItem = document.querySelectorAll('.calc-item'),
			calcBlock = document.querySelector('.calc-block'),
			calcType = document.querySelector('.calc-type'),
			calcSquare = document.querySelector('.calc-square'),
			calcDay = document.querySelector('.calc-day'),
			calcCount = document.querySelector('.calc-count'),
			totalValue = document.getElementById('total');

		const countSum = () =>{
			let total = 0,
				countValue = 1,
				dayValue = 1;
			
			const typeValue = calcType.options[calcType.selectedIndex].value,
				squareValue = +calcSquare.value;

			if(calcCount.value > 1){
				countValue += (calcCount.value - 1) / 10;
			}

			if(calcDay.value && calcDay.value < 5){
				dayValue *= 2;
			} else if(calcDay.value && calcDay.value < 10){
				dayValue *= 1.5;
			}

			if(typeValue && squareValue){
				total = price * typeValue * squareValue * countValue * dayValue;
			} 

			totalValue.textContent = total;
		};

		calcBlock.addEventListener('input', (event) =>{
			const target = event.target;

			if(target.matches('select') || target.matches('input')){
				countSum();
			}
		});

		calcItem.forEach((elem) =>{
			if(elem.hasAttribute('type')){
				elem.addEventListener('input', () => elem.value = elem.value.replace(/\D/g, ''));
			}
		});
	};

	calc(100);

	//connect
	const connect = () =>{
		const body = document.querySelector('body'),
			inputs = document.querySelectorAll('input');

		const checkInp = (elem) =>{
			if(elem.getAttribute('name') === 'user_name'){
				elem.value = elem.value.replace(/[^А-Яа-я- ]/g, '');
			}else if(elem.getAttribute('name') === 'user_message'){
				elem.value = elem.value.replace(/[^А-Яа-я0-9- ,\.]/g, '');
			}else if(elem.getAttribute('name') === 'user_email'){
				elem.value = elem.value.replace(/[^A-Za-z-@_!~'\*\.]/g, '');
			}else if(elem.getAttribute('name') === 'user_phone'){
				elem.value = elem.value.replace(/[^0-9\)\(+-]/g, '');
			}
		};

		const blur = (elem) =>{
				elem.value = elem.value.replace(/^ +| +$|^-+|-+$/g, '');
				elem.value = elem.value.replace(/\s+/g, ' ');
				elem.value = elem.value.replace(/-+/g, '-');
				
				if(elem.getAttribute('name') === 'user_name'){
					elem.value = elem.value.replace(/(^\D|\s\D)(\S*)/g, 
					(_,a1,a2) => a1.toUpperCase() + a2.toLowerCase());
				}
		};

		body.addEventListener('input', (event) =>{
			const target = event.target,
				body = target.closest('body');

			if(body){
				
				inputs.forEach((elem) =>{
					checkInp(elem);
					elem.onblur = () => blur(elem);
				});
			}
		});
	};

	connect();

	//send ajax-form
	const sendForm = () =>{
		const body = document.querySelector('body'),
			inputs = document.querySelectorAll('input'),
			style = document.createElement('style'),
			statusMessage = document.createElement('div'),
			
			errorMessage = 'Что то пошло не так...',
			loadMessage = 'Загрузка...',
			succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';

		statusMessage.style.cssText = `font-size: 2rem; color: #fff`; 
		style.textContent = `
		input.success {
			border: 2px solid green
		}
		input.error {
			border: 2px solid red
		}
		.validator-error {
			font-size: 12px;
			font-family: sans-serif;
			color: red
		}`;
		document.head.appendChild(style);

	const validator = (elem) =>{

		const showError = (elem) =>{
			elem.classList.remove('success');
			elem.classList.add('error');
	
			if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
				return;}
	
			const errorDiv = document.createElement('div');
			errorDiv.textContent = 'Ошибка в этом поле';
			errorDiv.classList.add('validator-error');
			elem.insertAdjacentElement('afterEnd', errorDiv);
		};
	
		const showSuccess = (elem) =>{
			elem.classList.remove('error');
			elem.classList.add('success');
				if(elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')){
					elem.nextElementSibling.remove('validator-error');}
		};

		const patternPhone = /[^0-9\+]/,
			patternName = /[^а-яА-Я ]/,
			patternMess = /[^а-яА-Я0-9\.,]/;

			if(elem.getAttribute('name') === 'user_phone'){
				if(!elem.value || patternPhone.test(elem.value)){
					showError(elem);
				}else{
					showSuccess(elem);
				}
			}else if(elem.getAttribute('name') === 'user_name'){
				if(!elem.value || patternName.test(elem.value)){
					showError(elem);
				}else{
					showSuccess(elem);
				}
			}else if(elem.getAttribute('name') === 'user_message'){
				if(!elem.value || patternMess.test(elem.value)){
					showError(elem);
				}else{
					showSuccess(elem);
				}
			}

		};

		inputs.forEach(elem=>{
				elem.addEventListener('input', ()=>{
					validator(elem);
				});
			});

		body.addEventListener('submit', (event) =>{
			let target = event.target;			

			if(target.matches('form') && !document.querySelector('.validator-error')){

				event.preventDefault();

				target.appendChild(statusMessage);
				statusMessage.textContent = loadMessage;

				const formData = new FormData(target);
				let body = {};

				formData.forEach((val, key) =>{
					body[key] = val;
				});

				postData(body, 
					() =>{statusMessage.textContent = succesMessage;}, 
					(error) =>{
						statusMessage.textContent = errorMessage;
						console.error(error);
					});

			} else{
				event.preventDefault();
			}

		});
	
		const postData = (body, outputData, errorData) =>{
			const request = new XMLHttpRequest();

			request.addEventListener('readystatechange', ()=>{
				
				if(request.readyState !== 4){
					return;
				}
				if(request.status === 200){
					outputData();
					
					inputs.forEach(elem =>{
						if(elem.getAttribute('name')){
							elem.value = '';
							elem.classList.remove('success');
						}
					});

				} else {
					errorData(request.status);
				}
			});

			request.open('POST', './server.php');
			request.setRequestHeader('Content-Type', 'application/json');

			request.send(JSON.stringify(body));
		};

	};

	sendForm();

});