/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_progressLine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/progressLine.js */ "./src/js/modules/progressLine.js");
/* harmony import */ var _modules_hamberger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamberger.js */ "./src/js/modules/hamberger.js");
/* harmony import */ var _modules_analyticsEvents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/analyticsEvents.js */ "./src/js/modules/analyticsEvents.js");
/* harmony import */ var _modules_pageLang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pageLang */ "./src/js/modules/pageLang.js");






Object(_modules_progressLine_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_hamberger_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); //analyticsEvents();

Object(_modules_pageLang__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/js/modules/analyticsEvents.js":
/*!*******************************************!*\
  !*** ./src/js/modules/analyticsEvents.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const analyticsEvents = () => {
  //Scroll
  const pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
        doc = document.documentElement;

  const firstScroll = () => {
    gtag('event', 'scroll', {
      'event_category': 'first_scroll'
    });
    document.removeEventListener('scroll', firstScroll);
  };

  document.addEventListener('scroll', firstScroll);
  let scrollCounter = 0,
      scroll = 0,
      point = 10;
  document.addEventListener('scroll', e => {
    if (doc.scrollTop > scrollCounter) {
      scroll = Math.round((doc.scrollTop + doc.clientHeight) / pageHeight * 100);
      scrollCounter = doc.scrollTop;

      if (scroll > point) {
        gtag('event', 'scroll', {
          'event_category': 'scroll_counter',
          'event_label': `${point}%`
        });
        point += 10;
      }
    }
  }); //Click

  const catalog = document.querySelector('.catalog');
  catalog.addEventListener('click', e => {
    const target = e.target.classList;

    if (target.contains('btn_offer-request')) {
      gtag('event', 'click', {
        'event_category': 'offer',
        'event_label': e.target.closest('.offer').getAttribute('data-name')
      });
    }

    if (target.contains('btn_show-offers')) {
      gtag('event', 'click', {
        'event_category': 'show_all'
      });
    }
  });
  const calculator = document.querySelector('.calculator');
  calculator.addEventListener('click', e => {
    gtag('event', 'click', {
      'event_category': 'calculator',
      'event_label': e.target.classList.value
    });
  });
  const steps = document.querySelector('.steps');
  steps.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('steps__item') || target.closest('.steps__item')) {
      gtag('event', 'click', {
        'event_category': 'steps',
        'event_label': target.id || target.closest('.steps__item').id
      });
    }
  });
  const questions = document.querySelector('.questions');
  questions.addEventListener('click', e => {
    const target = e.target.closest('.questions__wrapper');

    if (target) {
      document.querySelectorAll('.questions__wrapper').forEach((item, i) => {
        if (target === item) {
          gtag('event', 'click', {
            'event_category': 'questions',
            'event_label': ++i
          });
        }
      });
    }
  }); //Mouse 

  calculator.addEventListener('mouseenter', e => {
    //variable creat click event
    gtag('event', 'mouse', {
      'event_category': 'calc_transform'
    });
  });
  const stepsItems = document.querySelectorAll('.steps__item');
  stepsItems.forEach(item => {
    item.addEventListener('mouseenter', e => {
      gtag('event', 'mouse', {
        'event_category': 'steps_transform',
        'event_label': e.target.id
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (analyticsEvents);

/***/ }),

/***/ "./src/js/modules/hamberger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamberger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamberger = () => {
  const hamburger = document.querySelector('.hamburger'),
        hamburgerItem = hamburger.querySelectorAll('.hamburger__item'),
        menu = document.querySelector('.menu-mobile'),
        wrapper = document.querySelector('.nav__wrapper'),
        classes = {
    menu: 'menu-mobile_active',
    wrap: 'nav__wrapper_active',
    hide: 'hide',
    left: 'hamburger__item_left',
    right: 'hamburger__item_right'
  };

  function changeClasses(obj, action) {}

  hamburger.addEventListener('click', e => {
    if (menu.classList.contains('menu-mobile_active')) {
      document.body.style = 'overflow: auto;';
      menu.classList.remove('menu-mobile_active');
      wrapper.classList.remove('nav__wrapper_active');
      hamburgerItem[1].classList.remove('hide');
      hamburgerItem[0].classList.remove('hamburger__item_left');
      hamburgerItem[2].classList.remove('hamburger__item_right');
    } else {
      menu.classList.add('menu-mobile_active');
      wrapper.classList.add('nav__wrapper_active');
      document.body.style = 'overflow: hidden;';
      hamburgerItem[1].classList.add('hide');
      hamburgerItem[0].classList.add('hamburger__item_left');
      hamburgerItem[2].classList.add('hamburger__item_right');
    }
  });
  wrapper.addEventListener('click', e => {
    if (e.target.classList.contains('nav__wrapper_active')) {
      document.body.style = 'overflow: auto;';
      menu.classList.remove('menu-mobile_active');
      wrapper.classList.remove('nav__wrapper_active');
      hamburgerItem[1].classList.remove('hide');
      hamburgerItem[0].classList.remove('hamburger__item_left');
      hamburgerItem[2].classList.remove('hamburger__item_right');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (hamberger);

/***/ }),

/***/ "./src/js/modules/pageLang.js":
/*!************************************!*\
  !*** ./src/js/modules/pageLang.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const lang = () => {
  const langTrigger = document.querySelector('.menu__item-lang'),
        choice = document.querySelector('.choice-lang');
  langTrigger.addEventListener('mouseover', e => {
    choice.classList.remove('hide');
  });
  langTrigger.addEventListener('mouseout', e => {
    choice.classList.add('hide');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (lang);

/***/ }),

/***/ "./src/js/modules/progressLine.js":
/*!****************************************!*\
  !*** ./src/js/modules/progressLine.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const progress = () => {
  const progress = document.querySelector('.progress__line'),
        body = document.querySelector('body');
  window.addEventListener('scroll', () => {
    let scrollID = window.pageYOffset / (body.scrollHeight - window.innerHeight) * 100;
    progress.style.width = scrollID + '%';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (progress);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map