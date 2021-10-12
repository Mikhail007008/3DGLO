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

export default connect;