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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/Objects/player.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((playerrender = true) => {\n  const players = [Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, playerrender), Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, playerrender)];\n  let isPlayerOne = true;\n\n  return {\n    showWinner: player => `There is a winner ${player}`,\n    initBoard: (board) => {\n      players[0].initallevents(board);\n      players[0].initPlayer();\n      players[1].initPlayer();\n    },\n    reset: () => {\n      players[0].renderreset();\n      players[0].reset(0);\n      players[1].reset(1);\n    },\n    rollTurns: (position,arrid) => {\n      if (isPlayerOne) {\n        players[1].strike(position,arrid);\n      } else {\n        players[0].strike(position,arrid);\n      }\n      isPlayerOne = !isPlayerOne;\n    },\n  };\n});\n\n\n//# sourceURL=webpack:///./src/Objects/board.js?");

/***/ }),

/***/ "./src/Objects/domrenderer.js":
/*!************************************!*\
  !*** ./src/Objects/domrenderer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return render; });\n\n\nfunction render() {\n  let canrollturns = true;\n  return {\n    addShip: (playerindex, allpositions, arrid) => {\n      \n      const color = `rgba(${(Math.random() * 255)},${(Math.random() * 255)},${(Math.random() * 255)},0.3)`;\n      allpositions.forEach((position) => {\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).classList.add('active');\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute(\"data-lives\", allpositions.length);\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute(\"data-name\", allpositions.length);\n        document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).setAttribute(\"data-arrid\", arrid);\n        if (playerindex === 0) {\n          document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`).style.backgroundColor = color;\n        }\n      });\n      return allpositions;\n    },\n    initEventListeners: (board) => {\n      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.addEventListener('click', () => {\n        if (canrollturns && !x.classList.contains('striked') && !x.classList.contains('striked1')) {\n          canrollturns = false;\n          let arrid = x.getAttribute('data-arrid');\n          board.rollTurns(parseInt(x.getAttribute('data-id'),10), arrid);\n          let otherplayercell = Math.floor(Math.random() * 99);\n          let option = document.querySelector(`cells[data-playerid='0'] > item[data-id='${otherplayercell}']`);\n          while (option.classList.contains('striked1') || option.classList.contains('striked')) {\n            if (otherplayercell < 99) {\n              otherplayercell += 1;\n            } else {\n              \n              otherplayercell = 0;\n            }\n            option = document.querySelector(`cells[data-playerid='0'] > item[data-id='${otherplayercell}']`)\n          }\n          board.rollTurns(otherplayercell, option.getAttribute('data-arrid'));\n          canrollturns = true;\n        } \n      }));\n    },\n    reset: () => {\n      document.querySelectorAll('cells > item').forEach((e) => { e.classList.remove('active'); e.classList.remove('striked'); e.classList.remove('striked1'); e.style.backgroundColor = ''; });\n      document.querySelector('#span_player1_label').innerHTML = '<span style=\"font-weight: 600;\">Board - Player 1</span><br />Press play to begin';\n      document.querySelector('#span_player2_label').innerHTML = '<span style=\"font-weight: 600;\">Board - CPU</span><br />Press play to begin';\n      document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));\n      document.querySelector(`#span_score[data-playerid='${0}']`).innerHTML = 26;\n      document.querySelector(`#span_score[data-playerid='${1}']`).innerHTML = 26;\n    },\n    renderLabels: () => {\n      document.querySelector('#span_player1_label').innerHTML = '<span style=\"font-weight: 600;\">Board - Player 1</span><br />Its your turn, play!';\n      document.querySelector('#span_player2_label').innerHTML = '<span style=\"font-weight: 600;\">Board - CPU</span><br />Auto player';\n    },\n    strikePosition: (playerindex, position, shipname, arrid) => {\n\n      let positioncell = document.querySelector(`cells[data-playerid='${playerindex}'] > item[data-id='${position}']`);\n      if (positioncell.classList.contains('active')) {\n        positioncell.classList.add('striked');\n        const otherplayer = (playerindex === 1) ? 0 : 1;\n        document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML = parseInt(document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML, 10) - 1;\n        let lives = positioncell.getAttribute(\"data-lives\");\n        if (lives == 1) {\n          \n          let playerspanlog = document.querySelector(`span#span_log[data-playerid='${otherplayer}']`)\n          playerspanlog.innerHTML = `The player ${otherplayer} has striked down the <b>${shipname}</b>!`\n        } else {\n          \n          lives -= 1;\n          document.querySelectorAll(`cells[data-playerid='${playerindex}'] > item[data-arrid='${arrid}']`).forEach(cell => cell.setAttribute(\"data-lives\", lives))\n        }\n\n        if (document.querySelector(`#span_score[data-playerid='${playerindex}']`).innerHTML === '0') {\n          document.querySelector('#span_player1_label').innerHTML = `<span style=\"font-weight: 600;\">There is a winner!</span><br />Congrats! Player ${otherplayer}`;\n          document.querySelector('#span_player2_label').innerHTML = `<span style=\"font-weight: 600;\">There is a winner!</span><br />Congrats! Player ${otherplayer}`;\n          document.querySelectorAll(`cells[data-playerid='${1}'] > item`).forEach(x => x.parentNode.replaceChild(x.cloneNode(true), x));\n        }\n      } else if (!positioncell.classList.contains('striked')) {\n        positioncell.classList.add('striked1');\n      }\n      positioncell.classList.remove('active');\n    },\n  };\n}\n\n\n//# sourceURL=webpack:///./src/Objects/domrenderer.js?");

/***/ }),

/***/ "./src/Objects/player.js":
/*!*******************************!*\
  !*** ./src/Objects/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return player; });\n/* harmony import */ var _positionCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positionCalculator */ \"./src/Objects/positionCalculator.js\");\n/* harmony import */ var _domrenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domrenderer */ \"./src/Objects/domrenderer.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/Objects/ship.js\");\n\n\n\n\n\nfunction player(\n  _index,\n   playerrender = true,\n) {\n  let renderer = Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  let data = [...(' '.repeat(100).split('').map(() => false))];\n  let strikes = [...(' '.repeat(100).split('').map(() => false))];\n  const index = _index;\n  const shipnames= ['Destroyer','Submarine','Battleship','Battleship','Destroyer','Destroyer','Submarine','Carrier']\n\n  return {\n    data,\n    strikes,\n    index,\n    renderer,\n    initallevents: (board) => {\n      renderer.initEventListeners(board);\n    },\n    renderreset: () => {\n      renderer.reset();\n    },\n    reset() {\n      const newdata = [...(' '.repeat(100).split('').map(() => false))];\n      data = newdata;\n      strikes = newdata;\n      this.chips = [2, 3, 4, 4, 2, 2, 3, 6].map((size,number) => {\n        let i = 0;\n        let thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size, 0, 0);\n        while (i < 5000) {\n          i += 1;\n          const position = Math.floor(Math.random() * 99);\n          const direction = Math.floor(Math.random() * 4);\n          const condition = Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, newdata)\n            .isSomethingThere({ position, direction }, size, newdata);\n          if (!condition) {\n            thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n              size,\n              position,\n              direction,\n            });\n            break;\n          }\n        }\n        \n        \n\n        Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().addShip(index, Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, data)\n          .allpositions(thisship.vertex, thisship.size),number);\n        return thisship;\n      });\n    },\n    initPlayer: () => {\n      renderer.renderLabels();\n    },\n    chips: (() => {\n      const newdata = [...(' '.repeat(100).split('').map(() => false))];\n      [2, 3, 4, 4, 2, 2, 3, 6].map((size,number) => {\n        let thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(size, 0, 0);\n        let i = 0;\n        if (playerrender) {\n          while (i < 5000) {\n            i += 1;\n            const position = Math.floor(Math.random() * 99);\n            const direction = Math.floor(Math.random() * 4);\n            const calc = Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, newdata)\n            const condition = calc\n              .isSomethingThere({ position, direction }, size , newdata);\n            if (!condition) {\n              thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                size,\n                position,\n                direction,\n              });\n              break;\n            }\n          }\n          Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().addShip(index, Object(_positionCalculator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, data)\n            .allpositions(thisship.vertex, thisship.size),number);\n        }\n        else\n        {\n          thisship = Object(_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            size,\n            index,\n            direction: 0,\n          });\n        }\n        return thisship;\n      });\n    })(),\n    strike: (position,arrid) => {\n      \n      if (!renderer) {\n        renderer = Object(_domrenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      }\n\n      data[position] = true;\n      renderer\n        .strikePosition(index, position, shipnames[arrid], arrid);\n    },\n  };\n}\n\n\n//# sourceURL=webpack:///./src/Objects/player.js?");

/***/ }),

/***/ "./src/Objects/positionCalculator.js":
/*!*******************************************!*\
  !*** ./src/Objects/positionCalculator.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n  \nfunction positionCalculator(position = 0, data) {\n  return {\n      position,\n      goLeft: function (number) {\n          let error = undefined;\n          error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined\n          if (error) {\n              return error;\n          } else {\n              this.position -= 1;\n              return (this.position);\n          }\n      },\n      goRight: function (number) {\n          let error = undefined;\n          error = (number > 98 || number < 2) ? 'There is no more board to do that' : undefined\n          if (error) {\n              return error;\n          } else {\n              this.position += 1;\n              return (this.position);\n          }\n      },\n      goUp: function (number) {\n          let error = undefined;\n          error = (number > 89) ? 'There is no more board to do that' : undefined\n          if (error) {\n              return error;\n          } else {\n              this.position += 10;\n              return (this.position);\n          }\n      },\n      goDown: function (number) {\n          let error = undefined;\n          error = (number < 10) ? 'There is no more board to do that' : undefined\n          if (error) {\n              return error;\n          } else {\n              this.position -= 10;\n              return (this.position);\n          }\n      },\n      isSomethingThere: function (vertex, size) {\n              \n          let yes = false;\n          this.position = vertex.position;\n          let positions = []\n          let positionbi = positionIn(vertex.position)\n\n          switch (vertex.direction) {\n              case 0:\n                  if (positionbi.y + size > 7) {\n                      return true;\n                  }\n                  break;\n              case 1:\n                  if (positionbi.x + size > 7) {\n                      return true;\n                  }\n                  break;\n              case 2:\n                  if (positionbi.y - size < 1) {\n                      return true;\n                  }\n                  break;\n              case 3:\n                  if (positionbi.x - size < 1) {\n                      return true;\n                  }\n                  break;\n          }\n\n          for (let i = 0; i < size; i++) {\n              positions.push(this.position)\n\n              switch (vertex.direction) {\n                  case 0:\n                      yes = (data[this.position]) ? true : yes;\n                      this.goUp()\n                      break;\n                  case 1:\n                      yes = (data[this.position]) ? true : yes;\n                      this.goRight()\n                      break;\n                  case 2:\n                      yes = (data[this.position]) ? true : yes;\n                      this.goDown()\n                      break;\n                  case 3:\n                      yes = (data[this.position]) ? true : yes;\n                      this.goLeft()\n                      break;\n              }\n          }\n\n          if (!yes) {\n              positions.forEach(position => {\n                  data[position] = true;\n              });\n          }\n\n          return yes;\n      },\n\n      allpositions: function (vertex, size) {\n          this.position = vertex.position;\n          let positions = []\n\n\n          for (let i = 0; i < size; i++) {\n              positions.push(this.position)\n              switch (vertex.direction) {\n                  case 0:\n                      this.goUp()\n                      break;\n                  case 1:\n                      this.goRight()\n                      break;\n                  case 2:\n                      this.goDown()\n                      break;\n                  case 3:\n                      this.goLeft()\n                      break;\n              }\n          }\n          return positions;\n      }\n  }\n}\n\nfunction positionIn(x) {\n  let rows = 10;\n  let columns = 10;\n  let xismorethanonerow = (x > columns);\n  if (xismorethanonerow) {\n      return {\n          x: x % columns,\n          y: Math.floor(x / rows)\n      }\n  } else {\n      return {\n          x,\n          y: 0\n      };\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (positionCalculator);\n\n//# sourceURL=webpack:///./src/Objects/positionCalculator.js?");

/***/ }),

/***/ "./src/Objects/ship.js":
/*!*****************************!*\
  !*** ./src/Objects/ship.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ship; });\nfunction ship({\n  size,\n  position,\n  direction,\n}) {\n\n  return {\n    lives: {\n      size,\n      hit: [],\n    },\n    size,\n    vertex: {\n      position,\n      direction,\n    },\n    isInit: false,\n\n    hit: () => {\n      this.lives.size -= 1;\n    },\n    isSunk: () => this.lives.size === 0,\n  };\n}\n\n\n//# sourceURL=webpack:///./src/Objects/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Objects_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Objects/board */ \"./src/Objects/board.js\");\n\n\nfunction app() {\n  return {\n    initGame: () => {\n      const thisboard = Object(_Objects_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      document.querySelector('#span_reset').addEventListener('click', () => {\n        thisboard.reset();\n      });\n      document.querySelector('#span_play').addEventListener('click', () => {\n        thisboard.initBoard(thisboard);\n      });\n    },\n  };\n}\n\napp().initGame();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });