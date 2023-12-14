/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./appName.js":
/*!********************!*\
  !*** ./appName.js ***!
  \********************/
/***/ (function(module) {

eval("module.exports.greet = (name) => {\r\n  if (this.isEmpty(name)) {\r\n    return 'Hello, my friend'\r\n  }\r\n  if (this.isNull(name)) {\r\n    return 'Hello, my friend'\r\n  }\r\n  if (this.isUndefined(name)) {\r\n    return 'Hello, my friend'\r\n  }\r\n  if (this.greetMoreNames(name)) {\r\n    if (this.isFr(name)) {\r\n      return this.translationFr(name)\r\n    }\r\n    if (this.isNl(name)) {\r\n      return this.translationNl(name)\r\n    } else {\r\n      return this.translationEng(name)\r\n    }\r\n  }\r\n  if (this.onlyUppercaseLetters(name)) {\r\n    return 'HELLO, ' + name\r\n  }\r\n\r\n  if (this.onlyUppercaseLetters(name)) {\r\n    return 'HELLO, ' + name\r\n  }\r\n\r\n  return 'Hello, ' + name\r\n}\r\n\r\nmodule.exports.isEmpty = (name1) => {\r\n  if (name1 === '') {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.isNull = (name2) => {\r\n  if (name2 === null) {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.isUndefined = (name3) => {\r\n  if (name3 === undefined) {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.onlyUppercaseLetters = (name4) => {\r\n  const regexp = /^[A-Z]+$/\r\n  if (regexp.test(name4)) {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.greetMoreNames = (name5) => {\r\n  if (name5.length >= 2 && typeof name5 === 'object') {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.isFr = (name6) => {\r\n  const number = name6.length - 1\r\n  if (name6[number] === 'fr') {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.isNl = (name7) => {\r\n  const number = name7.length - 1\r\n  if (name7[number] === 'nl') {\r\n    return true\r\n  }\r\n  return false\r\n}\r\n\r\nmodule.exports.translationFr = (name8) => {\r\n  let greetNames = 'Bonjour'\r\n  const capsNames = []\r\n  const normalNames = []\r\n  name8.forEach((names) => {\r\n    if (names !== 'fr') {\r\n      if (this.onlyUppercaseLetters(names)) {\r\n        capsNames.push(names)\r\n        console.log(capsNames)\r\n      } else {\r\n        normalNames.push(names)\r\n      }\r\n    }\r\n  })\r\n  for (let index = 0; index < normalNames.length; ++index) {\r\n    if (index === normalNames.length - 1 && normalNames.length > 1) {\r\n      greetNames += ' et ' + normalNames[index] + '.'\r\n    } else if (index === normalNames.length - 1) {\r\n      greetNames += ' ' + normalNames[index] + '.'\r\n    } else {\r\n      greetNames += ', ' + normalNames[index]\r\n    }\r\n  }\r\n  for (let index = 0; index < capsNames.length; ++index) {\r\n    greetNames += ' ET BONJOUR ' + capsNames[index]\r\n  }\r\n  if (capsNames.length >= 1) {\r\n    greetNames += '!'\r\n  }\r\n  return greetNames\r\n}\r\n\r\nmodule.exports.translationNl = (name9) => {\r\n  let greetNames = 'Hallo'\r\n  const capsNames = []\r\n  const normalNames = []\r\n  name9.forEach((names) => {\r\n    if (names !== 'nl') {\r\n      if (this.onlyUppercaseLetters(names)) {\r\n        capsNames.push(names)\r\n        console.log(capsNames)\r\n      } else {\r\n        normalNames.push(names)\r\n      }\r\n    }\r\n  })\r\n  for (let index = 0; index < normalNames.length; ++index) {\r\n    if (index === normalNames.length - 1 && normalNames.length > 1) {\r\n      greetNames += ' en ' + normalNames[index] + '.'\r\n    } else if (index === normalNames.length - 1) {\r\n      greetNames += ' ' + normalNames[index] + '.'\r\n    } else {\r\n      greetNames += ', ' + normalNames[index]\r\n    }\r\n  }\r\n  for (let index = 0; index < capsNames.length; ++index) {\r\n    greetNames += ' EN HALLO ' + capsNames[index]\r\n  }\r\n  if (capsNames.length >= 1) {\r\n    greetNames += '!'\r\n  }\r\n  return greetNames\r\n}\r\n\r\nmodule.exports.translationEng = (name10) => {\r\n  let greetNames = 'Hello'\r\n  const capsNames = []\r\n  const normalNames = []\r\n  name10.forEach((names) => {\r\n    if (names !== 'en') {\r\n      if (this.onlyUppercaseLetters(names)) {\r\n        capsNames.push(names)\r\n        console.log(capsNames)\r\n      } else {\r\n        normalNames.push(names)\r\n      }\r\n    }\r\n  })\r\n  for (let index = 0; index < normalNames.length; ++index) {\r\n    if (index === normalNames.length - 1 && normalNames.length > 1) {\r\n      greetNames += ' and ' + normalNames[index] + '.'\r\n    } else if (index === normalNames.length - 1) {\r\n      greetNames += ' ' + normalNames[index] + '.'\r\n    } else {\r\n      greetNames += ', ' + normalNames[index]\r\n    }\r\n  }\r\n  for (let index = 0; index < capsNames.length; ++index) {\r\n    greetNames += ' AND HELLO ' + capsNames[index]\r\n  }\r\n  if (capsNames.length >= 1) {\r\n    greetNames += '!'\r\n  }\r\n  return greetNames\r\n}\r\n\n\n//# sourceURL=webpack://projet/./appName.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./appName.js");
/******/ 	
/******/ })()
;