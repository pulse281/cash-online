"use strict";

import fadeMenu from './modules/fadeMenu.js';
import progress from './modules/progressLine.js';
import hamberger from './modules/hamberger.js';
import analyticsEvents from './modules/analyticsEvents.js';
import lang from './modules/pageLang';
import duplicateLinks from './modules/duplicateLinks';

fadeMenu();
progress();
hamberger();
analyticsEvents();
lang();
duplicateLinks();