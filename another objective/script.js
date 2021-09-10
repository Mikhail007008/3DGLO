'use strict';

const date = new Date(),
	hour = date.getHours();

const foo = () =>{
	if(hour < 4){
		console.log('Доброй ночи');
	}
	else if(hour < 11 ){
		console.log('Доброе утро');
	}else if(hour < 17 ){
		console.log('Добрый день');
	}else if(hour < 22 ){
		console.log('Добрый вечер');
	}else{
		console.log('Доброй ночи');
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

foo();
console.log(`Сегодня: ${getDay(date)}`);
console.log(`Текущее время: ${date.toLocaleTimeString('en')}`);
console.log(`До нового года осталось ${howMuch('January 01 2022')} дней`);
