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

export default togglePopup;