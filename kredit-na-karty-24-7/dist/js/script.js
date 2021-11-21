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
/* harmony import */ var _modules_fadeMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/fadeMenu.js */ "./src/js/modules/fadeMenu.js");
/* harmony import */ var _modules_steps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/steps.js */ "./src/js/modules/steps.js");
/* harmony import */ var _modules_progressLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/progressLine.js */ "./src/js/modules/progressLine.js");
/* harmony import */ var _modules_questions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/questions.js */ "./src/js/modules/questions.js");
/* harmony import */ var _modules_hamberger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hamberger.js */ "./src/js/modules/hamberger.js");
/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calculator.js */ "./src/js/modules/calculator.js");
/* harmony import */ var _modules_showOffers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/showOffers */ "./src/js/modules/showOffers.js");
/* harmony import */ var _modules_analyticsEvents_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/analyticsEvents.js */ "./src/js/modules/analyticsEvents.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/js/modules/popUp.js");
/* harmony import */ var _modules_pageLang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pageLang */ "./src/js/modules/pageLang.js");
/* harmony import */ var _modules_duplicateLinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/duplicateLinks */ "./src/js/modules/duplicateLinks.js");













Object(_modules_fadeMenu_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_steps_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_progressLine_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_questions_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_modules_hamberger_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
Object(_modules_calculator_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
Object(_modules_showOffers__WEBPACK_IMPORTED_MODULE_6__["default"])();
Object(_modules_analyticsEvents_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_modules_pageLang__WEBPACK_IMPORTED_MODULE_9__["default"])();
Object(_modules_duplicateLinks__WEBPACK_IMPORTED_MODULE_10__["default"])();

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
      'event_category': 'first_scroll',
      'event_label': 'first_scroll'
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
        'event_category': 'click_offer',
        'event_label': e.target.closest('.offer').getAttribute('data-name')
      });
    }

    if (target.contains('btn_show-offers')) {
      gtag('event', 'click', {
        'event_category': 'click_show_all',
        'evenet_label': 'show_all'
      });
    }
  });
  const calculator = document.querySelector('.calculator');
  calculator.addEventListener('click', e => {
    gtag('event', 'click', {
      'event_category': 'click_calculator',
      'event_label': e.target.classList.value
    });
  });
  const steps = document.querySelector('.steps');
  steps.addEventListener('click', e => {
    const target = e.target;

    if (target.classList.contains('steps__item') || target.closest('.steps__item')) {
      gtag('event', 'click', {
        'event_category': 'click_steps',
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
            'event_category': 'click_questions',
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

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calculator = () => {
  const input = document.querySelector('.calculator__area_sum'),
        controls = document.querySelectorAll('.btnEdit'),
        range = document.querySelector('.calculator__range'),
        offers = document.querySelectorAll('.offer');
  input.addEventListener('input', e => {
    const targetVal = e.target.value;

    if (e.target.value > 500) {
      changeSum([range], targetVal);
      filter(targetVal);
    } else {
      changeSum(500);
      filter(500);
    }
  });
  range.addEventListener('input', e => {
    const targetVal = e.target.value;
    input.value = targetVal;
    filter(targetVal);
  });
  controls.forEach(btn => {
    btn.addEventListener('click', e => {
      let res = Number(input.value) + Number(e.target.value);

      if (res > 0) {
        changeSum([input, range], res);
      }
    });
  });

  function changeSum(selector, val) {
    selector.forEach(item => {
      item.value = val;
    });
    filter(val);
  }

  function filter(val) {
    offers.forEach(offer => {
      if (Number(offer.getAttribute('data-max')) < Number(val) && !offer.classList.contains('hide')) {
        offer.classList.add('hide');
      } else if (Number(offer.getAttribute('data-max')) >= Number(val) && offer.classList.contains('hide')) {
        offer.classList.remove('hide');
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/duplicateLinks.js":
/*!******************************************!*\
  !*** ./src/js/modules/duplicateLinks.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const duplicateLinks = () => {
  let a = document.querySelectorAll('a');
  a.forEach(link => {
    if (link.href === document.location.href) {
      link.addEventListener('click', e => {
        e.preventDefault();
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (duplicateLinks);

/***/ }),

/***/ "./src/js/modules/fadeMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/fadeMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const fadeMenu = () => {
  const header = document.querySelector('.header-wrapper'),
        headerHeight = parseInt(getComputedStyle(header).getPropertyValue('height'), 10);
  let scrollCounter = 0,
      menuScroll = 0,
      scrollCounterInc = 0;

  if (window.innerWidth < 986) {
    window.addEventListener('scroll', e => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (menuScroll == 25) {
        if (scrollTop > scrollCounter) {
          changeTop('animate__slideOutUp', 'animate__slideInDown', scrollTop);
        } else {
          if (header.classList.contains('animate__slideOutUp')) {
            changeTop('animate__slideInDown', 'animate__slideOutUp', scrollTop);
          }
        }

        menuScroll = 0;
      }

      if (scrollTop == 0 && header.classList.contains('animate__slideOutUp')) {
        changeTop('animate__slideInDown', 'animate__slideOutUp', scrollTop);
        console.log('scroll 0');
      }

      menuScroll++;
      scrollCounter = scrollTop;
    });
  }

  function changeTop(animation, animationPrev, val) {
    /* if (val < headerHeight) {
        return;
    } */
    header.classList.add(animation);
    header.classList.remove(animationPrev);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (fadeMenu);

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

/***/ "./src/js/modules/popUp.js":
/*!*********************************!*\
  !*** ./src/js/modules/popUp.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const popUp = () => {
  const asideOffer = document.querySelector('.aside-offer'),
        asideOfferClose = document.querySelector('.aside-offer__close'),
        asideLink = document.querySelector('.aside-offer__link');
  const windowWith = window.innerWidth;

  function showAsideOffer() {
    //scroll part
    if (windowWith < 770) {
      asideOffer.classList.add('aside-offer__wrapper_show');
      gtag('event', 'show', {
        'event_category': 'aside',
        'event_label': 'show aside'
      });
    }
  }

  function closeAsideOffer() {
    asideOffer.classList.remove('aside-offer__wrapper_show');
    gtag('event', 'hide', {
      'event_category': 'aside',
      'event_label': 'close aside'
    });
  }

  asideOfferClose.addEventListener('click', e => {
    closeAsideOffer();
  });
  asideLink.addEventListener('click', e => {
    gtag('event', 'click', {
      'event_category': 'offer',
      'event_label': 'aside offer'
    });
    asideOffer.classList.remove('aside-offer__wrapper_show');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (popUp);

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

/***/ }),

/***/ "./src/js/modules/questions.js":
/*!*************************************!*\
  !*** ./src/js/modules/questions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const questions = () => {
  const question = document.querySelectorAll('.questions__quest'),
        answer = document.querySelectorAll('.questions__ans'),
        x = document.querySelectorAll('.questions__x');
  question.forEach((item, i) => {
    item.addEventListener('click', e => {
      /* gtag('event', 'click', {
          'event_category': 'question',
          'event_label': 'question ' + i
      }); */
      if (answer[i].classList.contains('question__ans_slide')) {
        answer[i].classList.remove('question__ans_slide');
        answer[i].style.height = 0;
        answer[i].style.borderTop = 'none';
        x[i].classList.remove('hide');
      } else {
        answer[i].style.height = answer[i].scrollHeight + 'px';
        answer[i].classList.add('question__ans_slide');
        answer[i].style.borderTop = 1 + 'px ' + 'solid ' + 'black';
        x[i].classList.add('hide');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (questions);

/***/ }),

/***/ "./src/js/modules/showOffers.js":
/*!**************************************!*\
  !*** ./src/js/modules/showOffers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const showOffersAll = () => {
  const btnShowOffers = document.querySelector('.btn_show-offers'),
        hidenOffers = document.querySelectorAll('[data-hide]');
  hidenOffers.forEach(item => {
    item.classList.add('offer-hide');
  });
  btnShowOffers.addEventListener('click', e => {
    hidenOffers.forEach(item => {
      item.classList.add('animate__animated', 'animate__fadeIn');
      item.classList.remove('offer-hide');
      e.target.classList.add('hide');
    });
  });
  /*  btnShowOffers.addEventListener('click', (e) => {
       gtag('event', 'click', {
           'event_category': 'show offer',
           'event_label': 'показать все'
       });
    
     }); */
};

/* harmony default export */ __webpack_exports__["default"] = (showOffersAll);

/***/ }),

/***/ "./src/js/modules/steps.js":
/*!*********************************!*\
  !*** ./src/js/modules/steps.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const steps = () => {
  const stepsList = document.querySelector('.steps__wrapper'),
        stepsItem = stepsList.querySelectorAll('.steps__item');
  const wrapFirst = stepsList.querySelectorAll('.item-wrapper'),
        wrapSec = stepsList.querySelectorAll('.item-wrapper_sec');
  stepsItem.forEach((item, i) => {
    item.addEventListener('click', e => {
      wrapFirst[i].classList.toggle('show');
      wrapSec[i].classList.toggle('show');
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (steps);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map