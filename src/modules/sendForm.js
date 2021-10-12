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

	const patternPhone = /([0-9\+]){11}/,
		patternName = /[^а-яА-Я ]/,
		patternMess = /[^а-яА-Я0-9\.,]/;

		if(elem.getAttribute('name') === 'user_phone'){
			if(!elem.value || !patternPhone.test(elem.value)){
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
			
			postData(body)
				.then((response) =>{
					if(response.status === 200){
						statusMessage.textContent = succesMessage;
						setTimeout(()=>statusMessage.textContent = '', 2000);
						inputs.forEach((elem) =>{
							if(elem.getAttribute('name')){
								elem.value = '';
								elem.classList.remove('success');
							}
						});
					}else{throw new Error('status network not 200');}
					
				})
				.catch((error) =>{
					statusMessage.textContent = errorMessage;
					console.error(error);
				});
		} else{
			event.preventDefault();
		}
	});

	const postData = (body) =>{
		return fetch('./server.php', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(body)
		});
	};
};

export default sendForm;