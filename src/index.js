'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import team from './modules/team';
import calc from './modules/calc';
import connect from './modules/connect';
import sendForm from './modules/sendForm';

//Timer
countTimer('31 december 2021');
//Menu
toggleMenu();
//popup
togglePopup();
//tabs
tabs();
//slider
slider();
//our team
team();
//calculate
calc(100);
//connect
connect();
//send ajax-form
sendForm();