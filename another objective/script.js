'use strict';

const date = new Date(),
	hour = date.getHours();

const foo = () =>{
	if(hour < 4){
		return 'Доброй ночи';
	}
	else if(hour < 11 ){
		return 'Доброе утро';
	}else if(hour < 17 ){
		return 'Добрый день';
	}else if(hour < 22 ){
		return 'Добрый вечер';
	}else{
		return 'Доброй ночи';
	}
};

const getDay = (day) =>{
	let days = ['Воскресенье', 'Понедельник', 'Вторник', 
		'Среда', 'Четверг', 'Пятница', 'Суббота'];
  
	return days[day.getDay()];
  };

const howMuch = (howManyDaysTo) =>{
	let	dayNY = new Date(howManyDaysTo).getTime(),
		dayNow = new Date().getTime(),
		timeRemaining = (dayNY - dayNow) / 1000,
		day = Math.floor(timeRemaining / 60 / 60 / 24);

	return day + 1;
};

let div = document.createElement('div');
document.body.appendChild(div);	
div.innerHTML = foo() + '<br>' + 'Сегодня: ' + getDay(date) + '<br>' + 
'Текущее время: ' + date.toLocaleTimeString('en') + '<br>' +
'До нового года осталось ' + howMuch('January 01 2022') + 'дней';


