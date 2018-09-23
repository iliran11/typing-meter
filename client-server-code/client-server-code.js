<<<<<<< HEAD
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["client-server-code"] = factory();
	else
		root["client-server-code"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const WPM_NULL = '0';
/* harmony export (immutable) */ __webpack_exports__["WPM_NULL"] = WPM_NULL;

const START_CALCULATING_TIME = 7;
/* harmony export (immutable) */ __webpack_exports__["START_CALCULATING_TIME"] = START_CALCULATING_TIME;

const CALCULATING_INTERVAL = 1;
/* harmony export (immutable) */ __webpack_exports__["CALCULATING_INTERVAL"] = CALCULATING_INTERVAL;

const GAME_DURATION = 1;
/* harmony export (immutable) */ __webpack_exports__["GAME_DURATION"] = GAME_DURATION;

const METRICS_INTERVAL_DELAY = 500;
/* harmony export (immutable) */ __webpack_exports__["METRICS_INTERVAL_DELAY"] = METRICS_INTERVAL_DELAY;

const DEBUG_MODE = false;
/* harmony export (immutable) */ __webpack_exports__["DEBUG_MODE"] = DEBUG_MODE;

const FAILURE_ANIMATION = `animated jello`;
/* harmony export (immutable) */ __webpack_exports__["FAILURE_ANIMATION"] = FAILURE_ANIMATION;

const SUCCESS_ANIMATION = `animated pulse`;
/* harmony export (immutable) */ __webpack_exports__["SUCCESS_ANIMATION"] = SUCCESS_ANIMATION;

const WORDS_AMOUNT = 100;
/* harmony export (immutable) */ __webpack_exports__["WORDS_AMOUNT"] = WORDS_AMOUNT;


/** GAME STATUS */
const INITIAL_START = 0;
/* harmony export (immutable) */ __webpack_exports__["INITIAL_START"] = INITIAL_START;

const AWAITS_TYPING = 1;
/* harmony export (immutable) */ __webpack_exports__["AWAITS_TYPING"] = AWAITS_TYPING;

const GAME_IS_ACTIVE = 2;
/* harmony export (immutable) */ __webpack_exports__["GAME_IS_ACTIVE"] = GAME_IS_ACTIVE;

const RESTART_PENDING = 3;
/* harmony export (immutable) */ __webpack_exports__["RESTART_PENDING"] = RESTART_PENDING;


const CREATE_RESULT_RECORD = 'create-result-record';
/* harmony export (immutable) */ __webpack_exports__["CREATE_RESULT_RECORD"] = CREATE_RESULT_RECORD;


const GAME_DURATION_OPTIONS = [
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
  { value: 50, label: '50' },
  { value: 60, label: '60' }
];
/* harmony export (immutable) */ __webpack_exports__["GAME_DURATION_OPTIONS"] = GAME_DURATION_OPTIONS;


const CREATE_GAME = 'create-game';
/* harmony export (immutable) */ __webpack_exports__["CREATE_GAME"] = CREATE_GAME;

const UPDATE_WORD = 'update-word';
/* harmony export (immutable) */ __webpack_exports__["UPDATE_WORD"] = UPDATE_WORD;

const GAME_ID_MY = 'game-id-my';
/* harmony export (immutable) */ __webpack_exports__["GAME_ID_MY"] = GAME_ID_MY;

const INCREMENT_INDEX = 'increment-index';
/* harmony export (immutable) */ __webpack_exports__["INCREMENT_INDEX"] = INCREMENT_INDEX;

const DECREMENT_INDEX = 'decrement-index';
/* harmony export (immutable) */ __webpack_exports__["DECREMENT_INDEX"] = DECREMENT_INDEX;

const START_GAME = 'start-game';
/* harmony export (immutable) */ __webpack_exports__["START_GAME"] = START_GAME;

const END_GAME = 'end-game';
/* harmony export (immutable) */ __webpack_exports__["END_GAME"] = END_GAME;

const RESET_GAME_WORDS = 'reset-game-words';
/* harmony export (immutable) */ __webpack_exports__["RESET_GAME_WORDS"] = RESET_GAME_WORDS;

const CREATE_MY_GAME = 'create-my-game';
/* harmony export (immutable) */ __webpack_exports__["CREATE_MY_GAME"] = CREATE_MY_GAME;

const CREATE_COMPETITOR_GAME = 'create-competitor-game';
/* harmony export (immutable) */ __webpack_exports__["CREATE_COMPETITOR_GAME"] = CREATE_COMPETITOR_GAME;

const PLAYER_TYPING = 'player-typing'
/* harmony export (immutable) */ __webpack_exports__["PLAYER_TYPING"] = PLAYER_TYPING;



/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gameUtils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = ({
  createGame: __WEBPACK_IMPORTED_MODULE_0__gameUtils__["a" /* createGame */],
  updateWordNextStatus: __WEBPACK_IMPORTED_MODULE_0__gameUtils__["c" /* updateWordNextStatus */],
  createRandomWordsArray: __WEBPACK_IMPORTED_MODULE_0__gameUtils__["b" /* createRandomWordsArray */],
  constants: __WEBPACK_IMPORTED_MODULE_1__constants__
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createRandomWordsArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = createGame;
/* harmony export (immutable) */ __webpack_exports__["c"] = updateWordNextStatus;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isnull__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isnull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isnull__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(9);





function wordsArray(customWordsState) {
  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isnull___default()(customWordsState)) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* generateLoremIpsum */])();
  }
  return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["f" /* processTextToArray */])(this.props.customWords);
}
function createRandomWordsArray() {
  return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["e" /* padWordsWithSpaces */])(wordsArray(null));
}
function createGame(gameId, wordsArray) {
  const overallTime = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* secondstoMillisecond */])(__WEBPACK_IMPORTED_MODULE_2__constants__["GAME_DURATION"]);
  const wordObjects = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* createIndexWordObjects */])(wordsArray, Object(__WEBPACK_IMPORTED_MODULE_3__utils__["d" /* getRandomNumber */])());
  return {
    overallTime,
    gameId,
    index: 0,
    scrollIndex: 0,
    words: wordObjects,
    wpm: __WEBPACK_IMPORTED_MODULE_2__constants__["WPM_NULL"],
    gameDuration: __WEBPACK_IMPORTED_MODULE_2__constants__["GAME_DURATION"]
  };
}

function updateWordNextStatus(newTypedWord, gameState) {
  const currentIndex = gameState.index;
  const currentWord = gameState.words[currentIndex];
  const isDeletionEvent = currentWord.typed.length > newTypedWord.length;
  const nextIndex =
    currentWord.isCompleted && !isDeletionEvent
      ? currentIndex + 1
      : currentIndex;
  const hasIndexChanged = currentIndex !== nextIndex;
  /**Y territory.
   * so we will take only the last character of the input.
   * only the last char will be inserted to the word of the new index.
   */
  const typedWord = hasIndexChanged
    ? Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* getLastCharInString */])(newTypedWord)
    : newTypedWord;
  return {
    newTypedWord: typedWord,
    index: nextIndex,
    gameId: gameState.gameId

  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(6);
var v4 = __webpack_require__(7);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(1);
var bytesToUuid = __webpack_require__(2);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(1);
var bytesToUuid = __webpack_require__(2);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = generateLoremIpsum;
/* harmony export (immutable) */ __webpack_exports__["f"] = processTextToArray;
/* harmony export (immutable) */ __webpack_exports__["a"] = createIndexWordObjects;
/* harmony export (immutable) */ __webpack_exports__["g"] = secondstoMillisecond;
/* unused harmony export millisecondsToSeconds */
/* unused harmony export filterEmptyStrings */
/* unused harmony export replaceLineBreaks */
/* unused harmony export isLastCharIsSpace */
/* harmony export (immutable) */ __webpack_exports__["c"] = getLastCharInString;
/* harmony export (immutable) */ __webpack_exports__["d"] = getRandomNumber;
/* harmony export (immutable) */ __webpack_exports__["e"] = padWordsWithSpaces;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_words__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_words___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_words__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_key_index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__WordObject__ = __webpack_require__(13);




// import ow from 'ow';

function generateLoremIpsum() {
  return Array.from(new Array(__WEBPACK_IMPORTED_MODULE_1__constants__["WORDS_AMOUNT"]), () => {
    return __WEBPACK_IMPORTED_MODULE_0_random_words___default()();
  });
}
function processTextToArray(text) {
  // ow(text, ow.string);
  return replaceLineBreaks(text)
    .split(' ')
    .filter(filterEmptyStrings);
}
function createIndexWordObjects(wordsArray, key) {
  const indexedWordsArray = Object(__WEBPACK_IMPORTED_MODULE_2__react_key_index__["a" /* default */])(wordsArray, key);
  return indexedWordsArray.map(word => {
    return Object(__WEBPACK_IMPORTED_MODULE_3__WordObject__["a" /* default */])({ challenge: word.value, key: word.id });
  });
}
function secondstoMillisecond(number) {
  return number * 1000;
}
function millisecondsToSeconds(number) {
  const seconds = number / 1000;
  return Math.ceil(seconds);
}

function filterEmptyStrings(value) {
  return value !== '';
}
function replaceLineBreaks(string) {
  /**https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa */
  return string.replace(/(?:\r\n|\r|\n)/g, ' ');
}
function isLastCharIsSpace(str) {
  // https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa  return str.substr(str.length - 1, str.length - 2) === ' ';
  return str.slice(-1) === ' ';
}
function getLastCharInString(str) {
  return str.substr(str.length - 1)
}
const noop = () => {};
/* unused harmony export noop */


function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 1;
}

function padWordsWithSpaces(words) {
  return words.reduce((accumulator, word, currentIndex) => {
    const isLastIndex = currentIndex + 1 === words.length;
    if (isLastIndex) return accumulator;
    return [...accumulator, word, ' '];
  }, []);
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var wordList = [
  // Borrowed from xkcd password generator which borrowed it from wherever
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","alphabet","already",
  "also","although","am","among","amount","ancient","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","band","bank","bar","bare","bark","barn","base",
  "baseball","basic","basis","basket","bat","battle","be","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blank","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","bread","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","brush","buffalo",
  "build","building","built","buried","burn","burst","bus","bush",
  "business","busy","but","butter","buy","by","cabin","cage",
  "cake","call","calm","came","camera","camp","can","canal",
  "cannot","cap","capital","captain","captured","car","carbon","card",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","catch","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","cheese","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","circus","citizen",
  "city","class","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closely","closer","cloth","clothes",
  "clothing","cloud","club","coach","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "come","comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction",
  "contain","continent","continued","contrast","control","conversation","cook","cookies",
  "cool","copper","copy","corn","corner","correct","correctly","cost",
  "cotton","could","count","country","couple","courage","course","court",
  "cover","cow","cowboy","crack","cream","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","design","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","drive","driven","driver","driving",
  "drop","dropped","drove","dry","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","ever","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flew","flies","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot","football",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","gently","get","getting",
  "giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","guide","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","handsome","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history",
  "hit","hold","hole","hollow","home","honor","hope","horn",
  "horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
  "hurt","husband","ice","idea","identity","if","ill","image",
  "imagine","immediately","importance","important","impossible","improve","in","inch",
  "include","including","income","increase","indeed","independent","indicate","individual",
  "industrial","industry","influence","information","inside","instance","instant","instead",
  "instrument","interest","interior","into","introduced","invented","involved","iron",
  "is","island","it","its","itself","jack","jar","jet",
  "job","join","joined","journey","joy","judge","jump","jungle",
  "just","keep","kept","key","kids","kill","kind","kitchen",
  "knew","knife","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","late","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "led","left","leg","length","lesson","let","letter","level",
  "library","lie","life","lift","light","like","likely","limited",
  "line","lion","lips","liquid","list","listen","little","live",
  "living","load","local","locate","location","log","lonely","long",
  "longer","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lucky","lunch","lungs",
  "lying","machine","machinery","mad","made","magic","magnet","mail",
  "main","mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","mile","military","milk","mill",
  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","modern","molecular","moment","money","monkey",
  "month","mood","moon","more","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","musical","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "no","nobody","nodded","noise","none","noon","nor","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
  "order","ordinary","organization","organized","origin","original","other","ought",
  "our","ourselves","out","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace","pen",
  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","piano","pick","picture",
  "pictured","pie","piece","pig","pile","pilot","pine","pink",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony","pool",
  "poor","popular","population","porch","port","position","positive","possible",
  "possibly","post","pot","potatoes","pound","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","previous","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","pure","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rate","rather",
  "raw","rays","reach","read","reader","ready","real","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","regular","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rise","rising","river","road","roar","rock","rocket","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","sat","satellites",
  "satisfied","save","saved","saw","say","scale","scared","scene",
  "school","science","scientific","scientist","score","screen","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","serve","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot","should",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","so","soap","social",
  "society","soft","softly","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "southern","space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","stared","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped","stick",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","stove","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","struck","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","swung","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "tape","task","taste","taught","tax","tea","teach","teacher",
  "team","tears","teeth","telephone","television","tell","temperature","ten",
  "tent","term","terrible","test","than","thank","that","thee",
  "them","themselves","then","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","though","thought","thousand","thread","three","threw","throat",
  "through","throughout","throw","thrown","thumb","thus","thy","tide",
  "tie","tight","tightly","till","time","tin","tiny","tip",
  "tired","title","to","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wagon","wait","walk","wall","want",
  "war","warm","warn","was","wash","waste","watch","water",
  "wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","well","went","were","west","western",
  "wet","whale","what","whatever","wheat","wheel","when","whenever",
  "where","wherever","whether","which","while","whispered","whistle","white",
  "who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","wrote","yard",
  "year","yellow","yes","yesterday","yet","you","young","younger",
  "your","yourself","youth","zero","zoo"
];

function words(options) {
  function word() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join

  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  for (var i = 0; (i < total); i++) {
    results.push(word());
  }
  if (options.join) {
    results = results.join(options.join);
  }
  return results;
}

module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hashids__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hashids___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hashids__);
/** deprecated library called react-key-index
 *  imported the index.js to the src to change a few thigns so it will be supported
 *  TODO: Find another supported library.
 */



/* harmony default export */ __webpack_exports__["a"] = (function(arr, label) {
  var hashids = new __WEBPACK_IMPORTED_MODULE_0_hashids___default.a();
  // eslint-disable-next-line
  var x = parseInt(label);
  // eslint-disable-next-line
  var digits = [9, 9, x];
  // eslint-disable-next-line
  var obj = {};
  // eslint-disable-next-line
  var array = arr;
  // eslint-disable-next-line
  var matrix = [];

  var result = arr.map(function(arr, index) {
    digits.push(index);
    if (typeof arr === 'object') {
      var i = 0;
      Object.keys(arr).forEach(function(key) {
        var x = '';
        digits.push(i);
        x = '_' + key + 'Id';
        arr[x] = hashids.encode(digits);
        digits = digits.slice(0, 6);
        i++;
      });
      return arr;
    } else {
      obj = {
        value: arr,
        id: hashids.encode(digits)
      };
      digits = digits.slice(0, 5);
      return obj;
    }
    //matrix.push(digits);
  });
  return result;
});


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.Hashids = mod.exports;
	}
})(this, function (module, exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var Hashids = function () {
		function Hashids() {
			var salt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var minLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var alphabet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

			_classCallCheck(this, Hashids);

			var minAlphabetLength = 16;
			var sepDiv = 3.5;
			var guardDiv = 12;

			var errorAlphabetLength = 'error: alphabet must contain at least X unique characters';
			var errorAlphabetSpace = 'error: alphabet cannot contain spaces';

			var uniqueAlphabet = '',
			    sepsLength = void 0,
			    diff = void 0;

			/* funcs */

			this.escapeRegExp = function (s) {
				return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
			};
			this.parseInt = function (v, radix) {
				return (/^(\-|\+)?([0-9]+|Infinity)$/.test(v) ? parseInt(v, radix) : NaN
				);
			};

			/* alphabet vars */

			this.seps = 'cfhistuCFHISTU';
			this.minLength = parseInt(minLength, 10) > 0 ? minLength : 0;
			this.salt = typeof salt === 'string' ? salt : '';

			if (typeof alphabet === 'string') {
				this.alphabet = alphabet;
			}

			for (var i = 0; i !== this.alphabet.length; i++) {
				if (uniqueAlphabet.indexOf(this.alphabet.charAt(i)) === -1) {
					uniqueAlphabet += this.alphabet.charAt(i);
				}
			}

			this.alphabet = uniqueAlphabet;

			if (this.alphabet.length < minAlphabetLength) {
				throw errorAlphabetLength.replace('X', minAlphabetLength);
			}

			if (this.alphabet.search(' ') !== -1) {
				throw errorAlphabetSpace;
			}

			/*
   	`this.seps` should contain only characters present in `this.alphabet`
   	`this.alphabet` should not contains `this.seps`
   */

			for (var _i = 0; _i !== this.seps.length; _i++) {

				var j = this.alphabet.indexOf(this.seps.charAt(_i));
				if (j === -1) {
					this.seps = this.seps.substr(0, _i) + ' ' + this.seps.substr(_i + 1);
				} else {
					this.alphabet = this.alphabet.substr(0, j) + ' ' + this.alphabet.substr(j + 1);
				}
			}

			this.alphabet = this.alphabet.replace(/ /g, '');

			this.seps = this.seps.replace(/ /g, '');
			this.seps = this._shuffle(this.seps, this.salt);

			if (!this.seps.length || this.alphabet.length / this.seps.length > sepDiv) {

				sepsLength = Math.ceil(this.alphabet.length / sepDiv);

				if (sepsLength > this.seps.length) {

					diff = sepsLength - this.seps.length;
					this.seps += this.alphabet.substr(0, diff);
					this.alphabet = this.alphabet.substr(diff);
				}
			}

			this.alphabet = this._shuffle(this.alphabet, this.salt);
			var guardCount = Math.ceil(this.alphabet.length / guardDiv);

			if (this.alphabet.length < 3) {
				this.guards = this.seps.substr(0, guardCount);
				this.seps = this.seps.substr(guardCount);
			} else {
				this.guards = this.alphabet.substr(0, guardCount);
				this.alphabet = this.alphabet.substr(guardCount);
			}
		}

		_createClass(Hashids, [{
			key: 'encode',
			value: function encode() {
				for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
					numbers[_key] = arguments[_key];
				}

				var ret = '';

				if (!numbers.length) {
					return ret;
				}

				if (numbers[0] && numbers[0].constructor === Array) {
					numbers = numbers[0];
					if (!numbers.length) {
						return ret;
					}
				}

				for (var i = 0; i !== numbers.length; i++) {
					numbers[i] = this.parseInt(numbers[i], 10);
					if (numbers[i] >= 0) {
						continue;
					} else {
						return ret;
					}
				}

				return this._encode(numbers);
			}
		}, {
			key: 'decode',
			value: function decode(id) {

				var ret = [];

				if (!id || !id.length || typeof id !== 'string') {
					return ret;
				}

				return this._decode(id, this.alphabet);
			}
		}, {
			key: 'encodeHex',
			value: function encodeHex(hex) {

				hex = hex.toString();
				if (!/^[0-9a-fA-F]+$/.test(hex)) {
					return '';
				}

				var numbers = hex.match(/[\w\W]{1,12}/g);

				for (var i = 0; i !== numbers.length; i++) {
					numbers[i] = parseInt('1' + numbers[i], 16);
				}

				return this.encode.apply(this, numbers);
			}
		}, {
			key: 'decodeHex',
			value: function decodeHex(id) {

				var ret = [];

				var numbers = this.decode(id);

				for (var i = 0; i !== numbers.length; i++) {
					ret += numbers[i].toString(16).substr(1);
				}

				return ret;
			}
		}, {
			key: '_encode',
			value: function _encode(numbers) {

				var ret = void 0,
				    alphabet = this.alphabet,
				    numbersIdInt = 0;

				for (var i = 0; i !== numbers.length; i++) {
					numbersIdInt += numbers[i] % (i + 100);
				}

				ret = alphabet.charAt(numbersIdInt % alphabet.length);
				var lottery = ret;

				for (var _i2 = 0; _i2 !== numbers.length; _i2++) {

					var number = numbers[_i2];
					var buffer = lottery + this.salt + alphabet;

					alphabet = this._shuffle(alphabet, buffer.substr(0, alphabet.length));
					var last = this._toAlphabet(number, alphabet);

					ret += last;

					if (_i2 + 1 < numbers.length) {
						number %= last.charCodeAt(0) + _i2;
						var sepsIndex = number % this.seps.length;
						ret += this.seps.charAt(sepsIndex);
					}
				}

				if (ret.length < this.minLength) {

					var guardIndex = (numbersIdInt + ret[0].charCodeAt(0)) % this.guards.length;
					var guard = this.guards[guardIndex];

					ret = guard + ret;

					if (ret.length < this.minLength) {

						guardIndex = (numbersIdInt + ret[2].charCodeAt(0)) % this.guards.length;
						guard = this.guards[guardIndex];

						ret += guard;
					}
				}

				var halfLength = parseInt(alphabet.length / 2, 10);
				while (ret.length < this.minLength) {

					alphabet = this._shuffle(alphabet, alphabet);
					ret = alphabet.substr(halfLength) + ret + alphabet.substr(0, halfLength);

					var excess = ret.length - this.minLength;
					if (excess > 0) {
						ret = ret.substr(excess / 2, this.minLength);
					}
				}

				return ret;
			}
		}, {
			key: '_decode',
			value: function _decode(id, alphabet) {

				var ret = [],
				    i = 0,
				    r = new RegExp('[' + this.escapeRegExp(this.guards) + ']', 'g'),
				    idBreakdown = id.replace(r, ' '),
				    idArray = idBreakdown.split(' ');

				if (idArray.length === 3 || idArray.length === 2) {
					i = 1;
				}

				idBreakdown = idArray[i];
				if (typeof idBreakdown[0] !== 'undefined') {

					var lottery = idBreakdown[0];
					idBreakdown = idBreakdown.substr(1);

					r = new RegExp('[' + this.escapeRegExp(this.seps) + ']', 'g');
					idBreakdown = idBreakdown.replace(r, ' ');
					idArray = idBreakdown.split(' ');

					for (var j = 0; j !== idArray.length; j++) {

						var subId = idArray[j];
						var buffer = lottery + this.salt + alphabet;

						alphabet = this._shuffle(alphabet, buffer.substr(0, alphabet.length));
						ret.push(this._fromAlphabet(subId, alphabet));
					}

					if (this.encode(ret) !== id) {
						ret = [];
					}
				}

				return ret;
			}
		}, {
			key: '_shuffle',
			value: function _shuffle(alphabet, salt) {

				var integer = void 0;

				if (!salt.length) {
					return alphabet;
				}

				alphabet = alphabet.split("");

				for (var i = alphabet.length - 1, v = 0, p = 0, j = 0; i > 0; i--, v++) {

					v %= salt.length;
					p += integer = salt.charCodeAt(v);
					j = (integer + v + p) % i;

					var tmp = alphabet[j];
					alphabet[j] = alphabet[i];
					alphabet[i] = tmp;
				}

				alphabet = alphabet.join("");

				return alphabet;
			}
		}, {
			key: '_toAlphabet',
			value: function _toAlphabet(input, alphabet) {

				var id = '';

				do {
					id = alphabet.charAt(input % alphabet.length) + id;
					input = parseInt(input / alphabet.length, 10);
				} while (input);

				return id;
			}
		}, {
			key: '_fromAlphabet',
			value: function _fromAlphabet(input, alphabet) {

				return input.split("").map(function (item) {
					return alphabet.indexOf(item);
				}).reduce(function (carry, item) {
					return carry * alphabet.length + item;
				}, 0);
			}
		}]);

		return Hashids;
	}();

	exports.default = Hashids;
	module.exports = exports['default'];
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWordObject;
function createWordObject({ challenge = '', typed = '', key }) {
  return {
    challenge,
    typed,
    key,
    get isCompleted() {
      const { challenge, typed } = this;
      return challenge.length <= typed.length;
    },
    get isEmpty() {
      const { typed } = this;
      const trimmedTyped = typed.trim();
      return trimmedTyped.length === 0;
    },
    get isCorrect() {
      const { challenge, typed } = this;
      const relevantTyped = typed.substr(0, challenge.length).toLowerCase();
      return this.ChallengeLowerCase === relevantTyped;
    },
    get ChallengeLowerCase() {
      return this.challenge.toLowerCase();
    },
    get wordArray() {
      return this.challenge.split('');
    },
    get typedArray() {
      return this.typed.split('');
    },
    get challenegeArray() {
      return this.challenge.split('');
    },
    get challengeLength() {
      return this.challenegeArray.length;
    },
    get removeLastTypedLetter() {
      return this.typed.slice(0, -1);
    },

    get numberOfCorrectEntities() {
      return this.typedArray.reduce(
        (accumulator, currentValue, currentIndex) => {
          const isLetterCorrect = currentValue === this.wordArray[currentIndex];
          if (isLetterCorrect) accumulator.correct += 1;
          else {
            accumulator.wrong += 1;
          }
          return accumulator;
        },
        { correct: 0, wrong: 0 }
      );
    }
  };
}


/***/ })
/******/ ]);
});
=======
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["client-server-code"]=t():e["client-server-code"]=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var a=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),a[t]=e>>>((3&t)<<3)&255;return a}}},function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,a=r;return[a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],"-",a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]],a[e[n++]]].join("")}},function(e,t){e.exports=function(e){return null===e}},function(e,t){var r=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zoo"];function n(e){function t(){return r[n(r.length)]}function n(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly);for(var a=e.min+n(e.max+1-e.min),i=[],o=0;o<a;o++)i.push(t());return e.join&&(i=i.join(e.join)),i}e.exports=n,n.wordList=r},function(e,t,r){var n,a,i;a=[e,t],void 0===(i="function"==typeof(n=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a="",i=void 0,o=void 0;this.escapeRegExp=function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(e,t){return/^(\-|\+)?([0-9]+|Infinity)$/.test(e)?parseInt(e,t):NaN},this.seps="cfhistuCFHISTU",this.minLength=parseInt(r,10)>0?r:0,this.salt="string"==typeof t?t:"","string"==typeof n&&(this.alphabet=n);for(var s=0;s!==this.alphabet.length;s++)-1===a.indexOf(this.alphabet.charAt(s))&&(a+=this.alphabet.charAt(s));if(this.alphabet=a,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var l=0;l!==this.seps.length;l++){var c=this.alphabet.indexOf(this.seps.charAt(l));-1===c?this.seps=this.seps.substr(0,l)+" "+this.seps.substr(l+1):this.alphabet=this.alphabet.substr(0,c)+" "+this.alphabet.substr(c+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||this.alphabet.length/this.seps.length>3.5)&&(i=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(o=i-this.seps.length,this.seps+=this.alphabet.substr(0,o),this.alphabet=this.alphabet.substr(o)),this.alphabet=this._shuffle(this.alphabet,this.salt);var u=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,u),this.seps=this.seps.substr(u)):(this.guards=this.alphabet.substr(0,u),this.alphabet=this.alphabet.substr(u))}return r(e,[{key:"encode",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(!t.length)return"";if(t[0]&&t[0].constructor===Array&&!(t=t[0]).length)return"";for(var n=0;n!==t.length;n++)if(t[n]=this.parseInt(t[n],10),!(t[n]>=0))return"";return this._encode(t)}},{key:"decode",value:function(e){return e&&e.length&&"string"==typeof e?this._decode(e,this.alphabet):[]}},{key:"encodeHex",value:function(e){if(e=e.toString(),!/^[0-9a-fA-F]+$/.test(e))return"";for(var t=e.match(/[\w\W]{1,12}/g),r=0;r!==t.length;r++)t[r]=parseInt("1"+t[r],16);return this.encode.apply(this,t)}},{key:"decodeHex",value:function(e){for(var t=[],r=this.decode(e),n=0;n!==r.length;n++)t+=r[n].toString(16).substr(1);return t}},{key:"_encode",value:function(e){for(var t=void 0,r=this.alphabet,n=0,a=0;a!==e.length;a++)n+=e[a]%(a+100);for(var i=t=r.charAt(n%r.length),o=0;o!==e.length;o++){var s=e[o],l=i+this.salt+r;r=this._shuffle(r,l.substr(0,r.length));var c=this._toAlphabet(s,r);if(t+=c,o+1<e.length){var u=(s%=c.charCodeAt(0)+o)%this.seps.length;t+=this.seps.charAt(u)}}if(t.length<this.minLength){var h=(n+t[0].charCodeAt(0))%this.guards.length,d=this.guards[h];(t=d+t).length<this.minLength&&(h=(n+t[2].charCodeAt(0))%this.guards.length,d=this.guards[h],t+=d)}for(var p=parseInt(r.length/2,10);t.length<this.minLength;){r=this._shuffle(r,r);var g=(t=r.substr(p)+t+r.substr(0,p)).length-this.minLength;g>0&&(t=t.substr(g/2,this.minLength))}return t}},{key:"_decode",value:function(e,t){var r=[],n=0,a=new RegExp("["+this.escapeRegExp(this.guards)+"]","g"),i=e.replace(a," "),o=i.split(" ");if(3!==o.length&&2!==o.length||(n=1),void 0!==(i=o[n])[0]){var s=i[0];i=i.substr(1),a=new RegExp("["+this.escapeRegExp(this.seps)+"]","g"),i=i.replace(a," "),o=i.split(" ");for(var l=0;l!==o.length;l++){var c=o[l],u=s+this.salt+t;t=this._shuffle(t,u.substr(0,t.length)),r.push(this._fromAlphabet(c,t))}this.encode(r)!==e&&(r=[])}return r}},{key:"_shuffle",value:function(e,t){var r=void 0;if(!t.length)return e;for(var n=(e=e.split("")).length-1,a=0,i=0,o=0;n>0;n--,a++){a%=t.length,i+=r=t.charCodeAt(a);var s=e[o=(r+a+i)%n];e[o]=e[n],e[n]=s}return e=e.join("")}},{key:"_toAlphabet",value:function(e,t){var r="";do{r=t.charAt(e%t.length)+r,e=parseInt(e/t.length,10)}while(e);return r}},{key:"_fromAlphabet",value:function(e,t){return e.split("").map(function(e){return t.indexOf(e)}).reduce(function(e,r){return e*t.length+r},0)}}]),e}();t.default=n,e.exports=t.default})?n.apply(t,a):n)||(e.exports=i)},function(e,t,r){var n=r(6),a=r(7),i=a;i.v1=n,i.v4=a,e.exports=i},function(e,t,r){var n,a,i=r(0),o=r(1),s=0,l=0;e.exports=function(e,t,r){var c=t&&r||0,u=t||[],h=(e=e||{}).node||n,d=void 0!==e.clockseq?e.clockseq:a;if(null==h||null==d){var p=i();null==h&&(h=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==d&&(d=a=16383&(p[6]<<8|p[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),f=void 0!==e.nsecs?e.nsecs:l+1,m=g-s+(f-l)/1e4;if(m<0&&void 0===e.clockseq&&(d=d+1&16383),(m<0||g>s)&&void 0===e.nsecs&&(f=0),f>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=f,a=d;var y=(1e4*(268435455&(g+=122192928e5))+f)%4294967296;u[c++]=y>>>24&255,u[c++]=y>>>16&255,u[c++]=y>>>8&255,u[c++]=255&y;var b=g/4294967296*1e4&268435455;u[c++]=b>>>8&255,u[c++]=255&b,u[c++]=b>>>24&15|16,u[c++]=b>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var v=0;v<6;++v)u[c+v]=h[v];return t||o(u)}},function(e,t,r){var n=r(0),a=r(1);e.exports=function(e,t,r){var i=t&&r||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||a(o)}},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"WPM_NULL",function(){return o}),r.d(n,"START_CALCULATING_TIME",function(){return s}),r.d(n,"CALCULATING_INTERVAL",function(){return l}),r.d(n,"GAME_DURATION",function(){return c}),r.d(n,"METRICS_INTERVAL_DELAY",function(){return u}),r.d(n,"DEBUG_MODE",function(){return h}),r.d(n,"FAILURE_ANIMATION",function(){return d}),r.d(n,"SUCCESS_ANIMATION",function(){return p}),r.d(n,"WORDS_AMOUNT",function(){return g}),r.d(n,"INITIAL_START",function(){return f}),r.d(n,"AWAITS_TYPING",function(){return m}),r.d(n,"GAME_IS_ACTIVE",function(){return y}),r.d(n,"RESTART_PENDING",function(){return b}),r.d(n,"CREATE_RESULT_RECORD",function(){return v}),r.d(n,"GAME_DURATION_OPTIONS",function(){return w}),r.d(n,"CREATE_GAME",function(){return k}),r.d(n,"UPDATE_WORD",function(){return x}),r.d(n,"GAME_ID_MY",function(){return A}),r.d(n,"INCREMENT_INDEX",function(){return _}),r.d(n,"DECREMENT_INDEX",function(){return E}),r.d(n,"START_GAME",function(){return T}),r.d(n,"END_GAME",function(){return I}),r.d(n,"RESET_GAME_WORDS",function(){return j}),r.d(n,"CREATE_MY_GAME",function(){return C}),r.d(n,"CREATE_COMPETITOR_GAME",function(){return M});r(5);var a=r(2),i=r.n(a);const o="0",s=7,l=1,c=1,u=500,h=!1,d="animated jello",p="animated pulse",g=100,f=0,m=1,y=2,b=3,v="create-result-record",w=[{value:20,label:"20"},{value:30,label:"30"},{value:40,label:"40"},{value:50,label:"50"},{value:60,label:"60"}],k="create-game",x="update-word",A="game-id-my",_="increment-index",E="decrement-index",T="start-game",I="end-game",j="reset-game-words",C="create-my-game",M="create-competitor-game";var R=r(3),O=r.n(R),L=r(4),N=r.n(L),S=function(e,t){var r=new N.a,n=[9,9,parseInt(t)],a={};return e.map(function(e,t){if(n.push(t),"object"==typeof e){var i=0;return Object.keys(e).forEach(function(t){n.push(i),e["_"+t+"Id"]=r.encode(n),n=n.slice(0,6),i++}),e}return a={value:e,id:r.encode(n)},n=n.slice(0,5),a})};function q(e){return""!==e}function D(e){return i()(e)?Array.from(new Array(g),()=>O()()):function(e){return function(e){return e.replace(/(?:\r\n|\r|\n)/g," ")}(e).split(" ").filter(q)}(this.props.customWords)}t.default={createGame:function(e,t){return{overallTime:function(e){return 1e3*e}(c),gameId:e,index:0,scrollIndex:0,words:function(e,t){return S(e,t).map(e=>(function({challenge:e="",typed:t="",key:r}){return{challenge:e,typed:t,key:r,get isCompleted(){const{challenge:e,typed:t}=this;return e.length<=t.length},get isEmpty(){const{typed:e}=this;return 0===e.trim().length},get isCorrect(){const{challenge:e,typed:t}=this,r=t.substr(0,e.length).toLowerCase();return this.ChallengeLowerCase===r},get ChallengeLowerCase(){return this.challenge.toLowerCase()},get wordArray(){return this.challenge.split("")},get typedArray(){return this.typed.split("")},get challenegeArray(){return this.challenge.split("")},get challengeLength(){return this.challenegeArray.length},get removeLastTypedLetter(){return this.typed.slice(0,-1)},get numberOfCorrectEntities(){return this.typedArray.reduce((e,t,r)=>(t===this.wordArray[r]?e.correct+=1:e.wrong+=1,e),{correct:0,wrong:0})}}})({challenge:e.value,key:e.id}))}(t,Math.floor(200*Math.random())+1),wpm:o,gameDuration:c}},createRandomWordsArray:function(){return function(e){return e.reduce((t,r,n)=>n+1===e.length?t:[...t,r," "],[])}(D(null))},constants:n}}])});
>>>>>>> c218e21867c3bf76ffcd1a59b43369228990e6ea
