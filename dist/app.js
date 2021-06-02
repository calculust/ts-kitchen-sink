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

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\nvar myName = 'Vishal'; /* My myName */\nvar states = 50; /* Number of states in the USA */\nvar fivePlusFour = 5 + 4; /* Example of addition */\nfunction sayHello() {\n    alert('Hello World!');\n}\nsayHello();\nfunction checkAge(myName, age) {\n    if (age < 21) {\n        alert(\"Sorry \" + myName + \", you aren't old enough to view this page!\");\n    }\n}\ncheckAge('Charles', 21);\ncheckAge('Abby', 27);\ncheckAge('James', 18);\ncheckAge('John', 17);\nvar vegetables = ['Sweet Potato', 'Potato', 'Carrot', 'Cucumber', 'Water Chestnut'];\nfor (var i = 0; i < vegetables.length; ++i) {\n    console.log(vegetables[i]);\n}\nvar pet = {\n    name: 'Yoda',\n    breed: 'Bengal'\n};\nconsole.log(pet);\nvar person1 = {\n    name: 'Bob',\n    age: 22\n};\nvar person2 = {\n    name: 'Samantha',\n    age: 18\n};\nvar person3 = {\n    name: 'Stuart',\n    age: 32\n};\nvar person4 = {\n    name: 'Kush',\n    age: 45\n};\nvar person5 = {\n    name: 'Sandeep',\n    age: 17\n};\nvar people = [person1, person2, person3, person4, person5];\nfor (var i = 0; i < people.length; i++) {\n    checkAge(people[i].name, people[i].age);\n}\nfunction getLength(phrase) {\n    return phrase.length;\n}\nvar hwLength = getLength('Hello World');\nif (hwLength % 2 == 0) {\n    console.log('The world is nice and even!');\n}\nelse {\n    console.log('The world is an odd place!');\n}\n\n\n//# sourceURL=webpack://ts-kitchen-sink/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;