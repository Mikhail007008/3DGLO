'use strict';

class Validator{
	constructor({selector, pattern = {}, method}){
		this.form = document.getElementById(selector);
		this.pattern = pattern;
		this.method = method;
		this.elementsForm = [...this.form.elements].filter(item => {
			return item.tagName.toLowerCase() !== 'button' && 
			item.type !== 'button';
		});
		this.error = new Set();
	}

	init(){
		this.applyStyle();
		this.setPattern();
		this.elementsForm.forEach(elem => elem.addEventListener('input', this.checkIt.bind(this)));
	}

	isValid(elem){
		const validatorMethod = {
			notEmpty(elem){
				if(elem.value.trim() === ''){
					return false;
				}
				return true;
			},
			pattern(elem, pattern){
				return pattern.test(elem.value);
			}
		};

		const method = this.method[elem.id];

		if(method){
			return method.every(item =>validatorMethod[item[0]](elem, this.pattern[item[1]]));
		}

		return true;
	}

	checkIt(event){
		const target = event.target;
		console.log(this);
		if(this.isValid(target)){
			this.showSuccess(target);
			this.error.delete(target);
		} else {
			this.showError(target);
			this.error.add(target);
		}
	}

	showError(elem){
		elem.classList.remove('success');
		elem.classList.add('error');
		console.log(elem);
		if(elem.nextElementSibling){
			return;
		}
		const errorDiv = document.createElement('div');
		errorDiv.textContent = 'Ошибка в этом поле';
		errorDiv.classList.add('validator-error');
		elem.insertAdjacentElement('afterEnd', errorDiv);
	}

	showSuccess(elem){
		elem.classList.remove('error');
		elem.classList.add('success');
		if(elem.nextElementSibling){
			elem.nextElementSibling.remove();
		}
	}

	applyStyle(){
		const style = document.createElement('style');
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
		}
		`;

		document.head.appendChild(style);
	}

	setPattern(){
		if(!this.pattern.name){
			this.pattern.name = /^[78]/;
		}

		if(!this.pattern.email){
			this.pattern.email = /^\w+@\w+\.\w{2,}$/;
		}		
	}
}