/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/team */ \"./src/modules/team.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/connect */ \"./src/modules/connect.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('14 october 2021'); //Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); //slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); //our team\n\n(0,_modules_team__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); //calculate\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(100); //connect\n\n(0,_modules_connect__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); //send ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://3DGLO/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcItem = document.querySelectorAll('.calc-item'),\n      calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n  calcItem.forEach(function (elem) {\n    if (elem.hasAttribute('type')) {\n      elem.addEventListener('input', function () {\n        return elem.value = elem.value.replace(/\\D/g, '');\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3DGLO/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/connect.js":
/*!********************************!*\
  !*** ./src/modules/connect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar connect = function connect() {\n  var body = document.querySelector('body'),\n      inputs = document.querySelectorAll('input');\n\n  var checkInp = function checkInp(elem) {\n    if (elem.getAttribute('name') === 'user_name') {\n      elem.value = elem.value.replace(/[^А-Яа-я- ]/g, '');\n    } else if (elem.getAttribute('name') === 'user_message') {\n      elem.value = elem.value.replace(/[^А-Яа-я0-9- ,\\.]/g, '');\n    } else if (elem.getAttribute('name') === 'user_email') {\n      elem.value = elem.value.replace(/[^A-Za-z-@_!~'\\*\\.]/g, '');\n    } else if (elem.getAttribute('name') === 'user_phone') {\n      elem.value = elem.value.replace(/[^0-9\\)\\(+-]/g, '');\n    }\n  };\n\n  var blur = function blur(elem) {\n    elem.value = elem.value.replace(/^ +| +$|^-+|-+$/g, '');\n    elem.value = elem.value.replace(/\\s+/g, ' ');\n    elem.value = elem.value.replace(/-+/g, '-');\n\n    if (elem.getAttribute('name') === 'user_name') {\n      elem.value = elem.value.replace(/(^\\D|\\s\\D)(\\S*)/g, function (_, a1, a2) {\n        return a1.toUpperCase() + a2.toLowerCase();\n      });\n    }\n  };\n\n  body.addEventListener('input', function (event) {\n    var target = event.target,\n        body = target.closest('body');\n\n    if (body) {\n      inputs.forEach(function (elem) {\n        checkInp(elem);\n\n        elem.onblur = function () {\n          return blur(elem);\n        };\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n\n//# sourceURL=webpack://3DGLO/./src/modules/connect.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60);\n    return {\n      dateNow: dateNow,\n      dateStop: dateStop,\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var zero = function zero(number) {\n    return number < 10 ? \"0\".concat(number) : number;\n  };\n\n  var updateClock = function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining > 0) {\n      timerHours.textContent = zero(timer.hours);\n      timerMinutes.textContent = zero(timer.minutes);\n      timerSeconds.textContent = zero(timer.seconds);\n    } else if (timer.dateStop < timer.dateNow) {\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  };\n\n  setInterval(updateClock);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3DGLO/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var body = document.querySelector('body'),\n      inputs = document.querySelectorAll('input'),\n      style = document.createElement('style'),\n      statusMessage = document.createElement('div'),\n      errorMessage = 'Что то пошло не так...',\n      loadMessage = 'Загрузка...',\n      succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  statusMessage.style.cssText = \"font-size: 2rem; color: #fff\";\n  style.textContent = \"\\n\\tinput.success {\\n\\t\\tborder: 2px solid green\\n\\t}\\n\\tinput.error {\\n\\t\\tborder: 2px solid red\\n\\t}\\n\\t.validator-error {\\n\\t\\tfont-size: 12px;\\n\\t\\tfont-family: sans-serif;\\n\\t\\tcolor: red\\n\\t}\";\n  document.head.appendChild(style);\n\n  var validator = function validator(elem) {\n    var showError = function showError(elem) {\n      elem.classList.remove('success');\n      elem.classList.add('error');\n\n      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {\n        return;\n      }\n\n      var errorDiv = document.createElement('div');\n      errorDiv.textContent = 'Ошибка в этом поле';\n      errorDiv.classList.add('validator-error');\n      elem.insertAdjacentElement('afterEnd', errorDiv);\n    };\n\n    var showSuccess = function showSuccess(elem) {\n      elem.classList.remove('error');\n      elem.classList.add('success');\n\n      if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {\n        elem.nextElementSibling.remove('validator-error');\n      }\n    };\n\n    var patternPhone = /[^0-9\\+]/,\n        patternName = /[^а-яА-Я ]/,\n        patternMess = /[^а-яА-Я0-9\\.,]/;\n\n    if (elem.getAttribute('name') === 'user_phone') {\n      if (!elem.value || patternPhone.test(elem.value)) {\n        showError(elem);\n      } else {\n        showSuccess(elem);\n      }\n    } else if (elem.getAttribute('name') === 'user_name') {\n      if (!elem.value || patternName.test(elem.value)) {\n        showError(elem);\n      } else {\n        showSuccess(elem);\n      }\n    } else if (elem.getAttribute('name') === 'user_message') {\n      if (!elem.value || patternMess.test(elem.value)) {\n        showError(elem);\n      } else {\n        showSuccess(elem);\n      }\n    }\n  };\n\n  inputs.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      validator(elem);\n    });\n  });\n  body.addEventListener('submit', function (event) {\n    var target = event.target;\n\n    if (target.matches('form') && !document.querySelector('.validator-error')) {\n      event.preventDefault();\n      target.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(target);\n      postData(formData).then(function (response) {\n        if (response.status === 200) {\n          statusMessage.textContent = succesMessage;\n          setTimeout(function () {\n            return statusMessage.textContent = '';\n          }, 2000);\n          inputs.forEach(function (elem) {\n            if (elem.getAttribute('name')) {\n              elem.value = '';\n              elem.classList.remove('success');\n            }\n          });\n        }\n\n        throw new Error('status network not 200');\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n    } else {\n      event.preventDefault();\n    }\n  });\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'multipart/form-data'\n      },\n      body: formData\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3DGLO/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      allDots = document.querySelector('.portfolio-dots'),\n      slider = document.querySelector('.portfolio-content');\n  var currentSlide = 0,\n      interval;\n\n  var newDot = function newDot() {\n    for (var i = 0; i < slide.length; i++) {\n      var _dot = document.createElement('li');\n\n      _dot.className = 'dot';\n      allDots.appendChild(_dot);\n\n      if (i === 0) {\n        _dot.className = 'dot dot-active';\n      }\n    }\n  };\n\n  newDot();\n  var dot = document.querySelectorAll('.dot');\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } else if (target.matches(\".dot\")) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide(1500);\n    }\n  });\n  startSlide(1500);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3DGLO/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab');\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3DGLO/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/team.js":
/*!*****************************!*\
  !*** ./src/modules/team.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar team = function team() {\n  var commandPhoto = document.querySelectorAll('.command__photo');\n  commandPhoto.forEach(function (elem) {\n    elem.setAttribute('data-src', elem.getAttribute('src'));\n    elem.addEventListener('mouseenter', function (event) {\n      event.target.src = event.target.dataset.img;\n    });\n    elem.addEventListener('mouseleave', function (event) {\n      event.target.src = event.target.dataset.src;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);\n\n//# sourceURL=webpack://3DGLO/./src/modules/team.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'),\n      menuItems = menu.querySelectorAll('li>a');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target,\n        foo = target.closest('.menu');\n\n    if (foo) {\n      handlerMenu();\n    }\n\n    if (target === event.target.closest('.close-btn')) {\n      handlerMenu();\n    }\n\n    menuItems.forEach(function (item) {\n      if (item === target) {\n        handlerMenu();\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3DGLO/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      if (window.innerWidth > 768) {\n        popupContent.style.left = 0;\n        var start = Date.now();\n        var timer = setInterval(function () {\n          var timePassed = Date.now() - start;\n          popupContent.style.left = timePassed / 1.4 + 'px';\n\n          if (timePassed > 800) {\n            clearInterval(timer);\n          }\n        });\n      }\n\n      popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3DGLO/./src/modules/togglePopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;