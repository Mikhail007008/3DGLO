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

export default toggleMenu;