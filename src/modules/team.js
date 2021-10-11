const team = () =>{
	const commandPhoto = document.querySelectorAll('.command__photo');

	commandPhoto.forEach((elem)=>{
		elem.setAttribute('data-src', elem.getAttribute('src'));

		elem.addEventListener('mouseenter', event =>{event.target.src = event.target.dataset.img;});
		elem.addEventListener('mouseleave', event =>{event.target.src = event.target.dataset.src;});
	});

};

export default team;