"use strict";

import fadeMenu from './modules/fadeMenu.js';
import steps from './modules/steps.js';
import progress from './modules/progressLine.js';
import questions from './modules/questions.js';
import hamberger from './modules/hamberger.js';
import calculator from './modules/calculator.js';
import showOffersAll from './modules/showOffers';
import analyticsEvents from './modules/analyticsEvents.js';
import popUp from './modules/popUp.js';
import lang from './modules/pageLang';
import duplicateLinks from './modules/duplicateLinks';

fadeMenu();
steps();
progress();
questions();
hamberger();
calculator();
showOffersAll();
analyticsEvents();
lang();
duplicateLinks();