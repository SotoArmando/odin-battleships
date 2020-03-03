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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Objects/board.js":
/*!******************************!*\
  !*** ./src/Objects/board.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/Objects/player.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((playerrender = true) => {\r\n  return {\r\n    isPlayerOne: true,\r\n    players: [Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, null, null, playerrender), Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, null, null, playerrender)],\r\n    showWinner: player => `There is a winner ${player}`,\r\n    initBoard: () => {\r\n      undefined.players[0].initallevents(undefined);\r\n      undefined.players[0].initPlayer();\r\n      undefined.players[1].initPlayer();\r\n    },\r\n    reset: () => {\r\n      debugger\r\n      undefined.players[0].renderreset();\r\n      undefined.players[0].reset(0);\r\n      undefined.players[1].reset(1);\r\n    },\r\n    rollTurns: (position) => {\r\n      if (undefined.isPlayerOne) {\r\n        undefined.players[1].strike(position);\r\n      } else {\r\n        undefined.players[0].strike(position);\r\n      }\r\n      undefined.isPlayerOne = !undefined.isPlayerOne;\r\n    },\r\n\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack:///./src/Objects/board.js?");

/***/ }),

/***/ "./src/Objects/domrenderer.js":
/*!************************************!*\
  !*** ./src/Objects/domrenderer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n\r\n\r\nfunction render() {\r\n  return {\r\n    addShip: (playerindex, allpositions) => {\r\n      debugger\r\n      const color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;\r\n      allpositions.forEach((position) => {\r\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');\r\n        if (playerindex === 0) {\r\n          document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;\r\n        }\r\n      });\r\n      return allpositions;\r\n    },\r\n    initEventListeners: (board) => {\r\n      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener('click', function abc() {\r\n        board.rollTurns(this.getAttribute('data-id'));\r\n        board.rollTurns(Math.floor(Math.random() * 99));\r\n      }));\r\n    },\r\n    reset: () => {\r\n      document.querySelectorAll('cells > item').forEach((e) => { e.classList.remove('active'); e.classList.remove('striked'); e.classList.remove('striked1'); e.style.backgroundColor = ''; });\r\n      document.querySelector('#span_player1_label').innerHTML = '<span style=\"font-weight: 600;\">Board - Player 1</span><br />Press play to begin';\r\n      document.querySelector('#span_player2_label').innerHTML = '<span style=\"font-weight: 600;\">Board - CPU</span><br />Press play to begin';\r\n      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));\r\n      document.querySelector(`#span_score[data-playerid='${0}']`).innerHTML = 26;\r\n      document.querySelector(`#span_score[data-playerid='${1}']`).innerHTML = 26;\r\n    },\r\n    renderLabels: () => {\r\n      document.querySelector('#span_player1_label').innerHTML = '<span style=\"font-weight: 600;\">Board - Player 1</span><br />Its your turn, play!';\r\n      document.querySelector('#span_player2_label').innerHTML = '<span style=\"font-weight: 600;\">Board - CPU</span><br />Auto player';\r\n    },\r\n    strikePosition: (playerindex, position) => {\r\n      if (document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('active')) {\r\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked');\r\n        const otherplayer = (playerindex === 1) ? 0 : 1;\r\n        document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML = parseInt(document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML, 10) - 1;\r\n        if (document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML === '0') {\r\n          document.querySelector('#span_player1_label').innerHTML = `<span style=\"font-weight: 600;\">There is a winner!</span><br />Congrats! Player ${otherplayer}`;\r\n          document.querySelector('#span_player2_label').innerHTML = `<span style=\"font-weight: 600;\">There is a winner!</span><br />Congrats! Player ${otherplayer}`;\r\n          document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));\r\n        }\r\n      } else if (!document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.contains('striked')) {\r\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('striked1');\r\n      }\r\n      document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.remove('active');\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Objects/domrenderer.js?");

/***/ }),

/***/ "./src/Objects/player.js":
/*!*******************************!*\
  !*** ./src/Objects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\n/* harmony import */ var _positionCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionCalculator */ \"./src/Objects/positionCalculator.js\");\n/* harmony import */ var _domrenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domrenderer */ \"./src/Objects/domrenderer.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/Objects/ship.js\");\n\r\n\r\n\r\n\r\n\r\nfunction player(\r\n  index,\r\n  data = [...(' '.repeat(100).split('').map(() => false))], strikes = [...(' '.repeat(100).split('').map(() => false))], playerrender = true,\r\n) {\r\n  return {\r\n    data: [...(' '.repeat(100).split('').map(() => false))],\r\n    strikes: [...(' '.repeat(100).split('').map(() => false))],\r\n    index,\r\n    renderer: Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\r\n    initallevents: (board) => {\r\n      this.renderer.initEventListeners(board);\r\n    },\r\n    renderreset: () => {\r\n      this.renderer.reset();\r\n    },\r\n    reset() {\r\n      const newdata = [...(' '.repeat(100).split('').map(() => false))];\r\n      this.data = newdata;\r\n      this.strikes = newdata;\r\n      const a = this.data;\r\n      const b = this.index;\r\n      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {\r\n        let i = 0;\r\n        let thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size, 0, 0);\r\n        while (i < 5000) {\r\n          i += 1;\r\n          const position = Math.floor(Math.random() * 99);\r\n          const direction = Math.floor(Math.random() * 4);\r\n          const condition = Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, newdata)\r\n            .isSomethingThere({ position, direction }, size, newdata);\r\n          if (!condition) {\r\n            thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n              size,\r\n              position,\r\n              direction,\r\n            });\r\n            break;\r\n          }\r\n        }\r\n        \r\n        Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().addShip(b, Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, a)\r\n          .allpositions(thisship.vertex, thisship.size));\r\n        return thisship;\r\n      });\r\n    },\r\n    initPlayer: () => {\r\n      this.renderer.renderLabels();\r\n    },\r\n    chips: (() => {\r\n      const newdata = [...(' '.repeat(100).split('').map(() => false))];\r\n      [2, 3, 4, 4, 2, 2, 3, 6].map((size) => {\r\n        let thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size, 0, 0);\r\n        let i = 0;\r\n        if (playerrender) {\r\n          while (i < 5000) {\r\n            i += 1;\r\n            const position = Math.floor(Math.random() * 99);\r\n            const direction = Math.floor(Math.random() * 4);\r\n            const calc = Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, newdata)\r\n            const condition = calc\r\n              .isSomethingThere({ position, direction }, size ,newdata);\r\n            if (!condition) {\r\n              thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n                size,\r\n                position,\r\n                direction,\r\n              });\r\n              break;\r\n            }\r\n          }\r\n          debugger\r\n          Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().addShip(index, Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, data)\r\n            .allpositions(thisship.vertex, thisship.size));\r\n        }\r\n        else\r\n        {\r\n          thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\r\n            size,\r\n            index,\r\n            direction: 0,\r\n          });\r\n        }\r\n        return thisship;\r\n      });\r\n    })(),\r\n    strike: (position) => {\r\n      if (!this.renderer) {\r\n        this.renderer = Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      }\r\n      if (!this.data) {\r\n        this.data = data;\r\n      }\r\n      if (!this.strikes) {\r\n        this.strikes = strikes;\r\n      }\r\n      this.data[position] = true;\r\n      this.renderer\r\n        .strikePosition(this.index, position, this.data[position]);\r\n    },\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Objects/player.js?");

/***/ }),

/***/ "./src/Objects/positionCalculator.js":
/*!*******************************************!*\
  !*** ./src/Objects/positionCalculator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n  \r\nfunction positionCalculator(position = 0, data) {\r\n  return {\r\n      position,\r\n      goLeft: function (number) {\r\n          let error = undefined;\r\n          error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined\r\n          if (error) {\r\n              return error;\r\n          } else {\r\n              this.position -= 1;\r\n              return (this.position);\r\n          }\r\n      },\r\n      goRight: function (number) {\r\n          let error = undefined;\r\n          error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined\r\n          if (error) {\r\n              return error;\r\n          } else {\r\n              this.position += 1;\r\n              return (this.position);\r\n          }\r\n      },\r\n      goUp: function (number) {\r\n          let error = undefined;\r\n          error = (number > 89) ? 'There is no more board to do that' : undefined\r\n          if (error) {\r\n              return error;\r\n          } else {\r\n              this.position += 10;\r\n              return (this.position);\r\n          }\r\n      },\r\n      goDown: function (number) {\r\n          let error = undefined;\r\n          error = (number < 10) ? 'There is no more board to do that' : undefined\r\n          if (error) {\r\n              return error;\r\n          } else {\r\n              this.position -= 10;\r\n              return (this.position);\r\n          }\r\n      },\r\n      isSomethingThere: function (vertex, size) {\r\n              \r\n          let yes = false;\r\n          this.position = vertex.position;\r\n          let positions = []\r\n          let positionbi = positionIn(vertex.position)\r\n\r\n          switch (vertex.direction) {\r\n              case 0:\r\n                  if (positionbi.y + size > 7) {\r\n                      return true;\r\n                  }\r\n                  break;\r\n              case 1:\r\n                  if (positionbi.x + size > 7) {\r\n                      return true;\r\n                  }\r\n                  break;\r\n              case 2:\r\n                  if (positionbi.y - size < 1) {\r\n                      return true;\r\n                  }\r\n                  break;\r\n              case 3:\r\n                  if (positionbi.x - size < 1) {\r\n                      return true;\r\n                  }\r\n                  break;\r\n          }\r\n\r\n          for (let i = 0; i < size; i++) {\r\n              positions.push(this.position)\r\n\r\n              switch (vertex.direction) {\r\n                  case 0:\r\n                      yes = (data[this.position]) ? true : yes;\r\n                      this.goUp()\r\n                      break;\r\n                  case 1:\r\n                      yes = (data[this.position]) ? true : yes;\r\n                      this.goRight()\r\n                      break;\r\n                  case 2:\r\n                      yes = (data[this.position]) ? true : yes;\r\n                      this.goDown()\r\n                      break;\r\n                  case 3:\r\n                      yes = (data[this.position]) ? true : yes;\r\n                      this.goLeft()\r\n                      break;\r\n              }\r\n          }\r\n\r\n          if (!yes) {\r\n              positions.forEach(position => {\r\n                  data[position] = true;\r\n              });\r\n          }\r\n\r\n          return yes;\r\n      },\r\n\r\n      allpositions: function (vertex, size) {\r\n          this.position = vertex.position;\r\n          let positions = []\r\n\r\n\r\n          for (let i = 0; i < size; i++) {\r\n              positions.push(this.position)\r\n              switch (vertex.direction) {\r\n                  case 0:\r\n                      this.goUp()\r\n                      break;\r\n                  case 1:\r\n                      this.goRight()\r\n                      break;\r\n                  case 2:\r\n                      this.goDown()\r\n                      break;\r\n                  case 3:\r\n                      this.goLeft()\r\n                      break;\r\n              }\r\n          }\r\n          return positions;\r\n      }\r\n  }\r\n}\r\n\r\nfunction positionIn(x) {\r\n  let rows = 10;\r\n  let columns = 10;\r\n  let xismorethanonerow = (x > columns);\r\n  if (xismorethanonerow) {\r\n      return {\r\n          x: x % columns,\r\n          y: Math.floor(x / rows)\r\n      }\r\n  } else {\r\n      return {\r\n          x,\r\n          y: 0\r\n      };\r\n  }\r\n}\r\n\r\nfunction positionOut({\r\n  x,\r\n  y\r\n}) {\r\n  let rows = 10;\r\n  let columns = 10;\r\n  return ((y * rows) + x);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (positionCalculator);\n\n//# sourceURL=webpack:///./src/Objects/positionCalculator.js?");

/***/ }),

/***/ "./src/Objects/ship.js":
/*!*****************************!*\
  !*** ./src/Objects/ship.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ship; });\nfunction ship({\r\n  size,\r\n  position,\r\n  direction,\r\n}) {\r\n  return {\r\n    lives: {\r\n      size,\r\n      hit: [],\r\n    },\r\n    size,\r\n    vertex: {\r\n      position,\r\n      direction,\r\n    },\r\n    isInit: false,\r\n\r\n    hit: () => {\r\n      this.lives.size -= 1;\r\n    },\r\n    isSunk: () => this.lives.size === 0,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack:///./src/Objects/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Objects_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Objects/board */ \"./src/Objects/board.js\");\n\r\n\r\nfunction app() {\r\n  return {\r\n    initGame: () => {\r\n      const thisboard = Object(_Objects_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n      document.querySelector('#span_reset').addEventListener('click', () => {\r\n        thisboard.reset();\r\n      });\r\n      document.querySelector('#span_play').addEventListener('click', () => {\r\n        thisboard.initBoard();\r\n      });\r\n    },\r\n  };\r\n}\r\n\r\napp().initGame();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });