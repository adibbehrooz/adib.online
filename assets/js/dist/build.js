/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/src/canvas.js":
/*!*********************************!*\
  !*** ./assets/js/src/canvas.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* binding */ Canvas),
/* harmony export */   Cursor: () => (/* binding */ Cursor)
/* harmony export */ });
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Canvas ********************************
/************************************************************************/

class Canvas {
  //____________________________
  //
  // Constructor
  //____________________________

  constructor() {
    // Silence is Golden	
  }
  //____________________________
  //
  // RUN
  //____________________________	

  init() {
    this.bodyStyles();
    this.allCanvas();
  }
  //____________________________
  //
  // Define Body Styles
  //____________________________

  bodyStyles() {
    let bodyStyle = {
      'background': 'linear-gradient(#16161d,#1f1f3a,#3b2f4a)',
      'background-repeat': 'no-repeat',
      'min-height': '100vh',
      'overflow': 'hidden',
      'cursor': 'none'
    };
    let cssBodyResult = "";
    Object.keys(bodyStyle).forEach(function (prop, index) {
      cssBodyResult += prop + ": " + bodyStyle[prop] + "; ";
    });
    document.body.style = cssBodyResult;
  }
  //____________________________
  //
  // Create Section
  //____________________________

  createSection() {
    const middleSection = document.createElement("section");
    middleSection.setAttribute('class', 'o-canvas');
    middleSection.setAttribute('id', 'middle');
    middleSection.setAttribute('data', "renderType: 'canvas'");
    document.body.appendChild(middleSection);
    return middleSection;
  }
  allCanvas() {
    const middleSection = this.createSection();
    middleSection.appendChild(this.panCanvas());
    middleSection.appendChild(this.skyCanvas());
  }
  skyCanvas() {
    const canvasSky = document.createElement("canvas");
    canvasSky.setAttribute('class', 'o-canvas__sky');
    canvasSky.setAttribute('id', 'canvas__sky');
    canvasSky.width = window.innerWidth;
    canvasSky.height = window.innerHeight;
    return canvasSky;
  }
  panCanvas() {
    const canvasPan = document.createElement("canvas");
    canvasPan.setAttribute('class', 'o-canvas__pan');
    canvasPan.setAttribute('id', 'canvas__pan');
    return canvasPan;
  }
}
;


/******************************** Cursor ********************************
/************************************************************************/

class Cursor {
  //____________________________
  //
  // Constructor
  //____________________________

  constructor() {
    this.radius = 50;
    this.circleLength = 2 * Math.PI * this.radius;
    this.angle = 2 * this.angleRad * 180 / Math.PI / 7;
  }
  //____________________________
  //
  // RUN
  //____________________________

  init() {
    this.cursorModules();
    this.curveText();
    this.animateMoveCursor();
    this.fadeLetters(0.002);
  }
  //____________________________
  //
  // Modules
  //____________________________

  cursorModules() {
    const circleCursor = () => {
      const cLandscapeFrame = document.getElementById('middle');
      const circleDiv = document.createElement("div");
      circleDiv.setAttribute('class', 'o-centerCircle');
      circleDiv.setAttribute('id', 'centerCircle');
      cLandscapeFrame.parentNode.insertBefore(circleDiv, cLandscapeFrame);
    };
    const followDiv = () => {
      const cLandscapeFrame = document.getElementById('middle');
      const followDiv = document.createElement("div");
      followDiv.setAttribute('class', 'o-followCircle');
      followDiv.setAttribute('id', 'followCircle');
      const textDiv = document.createElement("div");
      textDiv.setAttribute('class', 'o-followText');
      textDiv.setAttribute('id', 'followText');
      followDiv.appendChild(textDiv);
      // textDiv.innerHTML += 'DRAG ME'; 

      cLandscapeFrame.parentNode.insertBefore(followDiv, cLandscapeFrame);
    };
    const allmodules = () => {
      circleCursor();
      followDiv();
    };
    allmodules();
  }
  //____________________________
  //
  // Curve Text
  //____________________________

  curveText() {
    this.curvedText = document.getElementById('followText');
    let text = this.curvedText.innerText;
    let html = "";
    for (let i = 0; i < text.length; i++) {
      html += `<span>${text[i]}</span>`;
    }
    this.curvedText.innerHTML = html;
    this.curvedText.style.minWidth = "initial";
    this.curvedText.style.minHeight = "initial";
    let curveWidth = this.curvedText.offsetWidth;
    let curveHeight = this.curvedText.offsetHeight;
    let spanLetters = this.curvedText.innerHTML;
    let letters = this.curvedText.querySelectorAll("span");
    let lettersStyle = {
      'position': 'absolute',
      'transform-origin': 'bottom center',
      'height': this.radius + 'px'
    };
    let cssResult = "";
    Object.keys(lettersStyle).forEach(function (prop, index) {
      cssResult += prop + ": " + lettersStyle[prop] + "; ";
    });
    const curveSpanLetters = () => {
      letters.forEach((spanLetters, index) => {
        spanLetters.style = cssResult;
        // 1. Default
        // spanLetters.style.transform = "translate("+(curveWidth / 2)+"px, 0px) rotate("+index * curveWidth+"deg)";

        // 2. Optimize
        switch (index) {
          // D
          case 0:
            spanLetters.style.top = "-20px";
            spanLetters.style.left = "4px";
            spanLetters.style.transform = "translate(11px, 0px) rotate(325deg)";
            break;

          // R
          case 1:
            spanLetters.style.top = "-18px";
            spanLetters.style.left = "0px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(3deg)";
            break;

          // A
          case 2:
            spanLetters.style.height = "47px";
            spanLetters.style.top = "-24px";
            spanLetters.style.left = "-8px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(47deg)";
            break;

          // G
          case 3:
            spanLetters.style.top = "-22px";
            spanLetters.style.left = "-10px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(71deg)";
            break;

          // Space
          case 4:
            spanLetters.style.top = "-24px";
            spanLetters.style.left = "-8px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(100deg)";
            break;

          // M
          case 5:
            spanLetters.style.bottom = "29px";
            spanLetters.style.left = "3px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(186deg)";
            break;

          // E
          case 6:
            spanLetters.style.bottom = "25px";
            spanLetters.style.left = "11px";
            spanLetters.style.transform = "translate(10px, 0px) rotate(220deg)";
            break;
        }
        ;
      });
    };
    curveSpanLetters();
  }
  //____________________________
  //
  // Fade Letters
  //____________________________

  fadeLetters(speedFade) {
    const fade = () => {
      const followTextSelector = document.querySelector("#followText");
      let opacity = followTextSelector.style.opacity;
      if (!opacity) opacity = 1;
      if (opacity > 0) {
        opacity -= speedFade;
        followTextSelector.style.opacity = opacity;
      }
      requestAnimationFrame(fade);
    };
    fade();
  }

  //____________________________
  //
  // Animate Cursor With GSAP
  //____________________________

  animateMoveCursor() {
    gsap.set(".o-followCircle", {
      xPercent: -50,
      yPercent: -50
    });
    const ball = document.querySelector(".o-followCircle");
    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    const mouse = {
      x: pos.x,
      y: pos.y
    };
    const speed = 0.2;
    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");
    window.addEventListener("mousemove", mouseEvent => {
      mouse.x = mouseEvent.x;
      mouse.y = mouseEvent.y;
    });
    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }
}
;


/***/ }),

/***/ "./assets/js/src/config.js":
/*!*********************************!*\
  !*** ./assets/js/src/config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./assets/js/src/canvas.js");
/* harmony import */ var _pan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pan */ "./assets/js/src/pan.js");
/* harmony import */ var _sky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sky */ "./assets/js/src/sky.js");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Library Configuration ********************************
/***************************************************************************************/

// Canvas
//______________


const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas();
canvas.init();

// Cursor
//______________


const cursor = new _canvas__WEBPACK_IMPORTED_MODULE_0__.Cursor();
cursor.init();

// Pan
//______________


const pan = new _pan__WEBPACK_IMPORTED_MODULE_1__.Pan();
pan.init();

// Night Sky
//______________


const nightSky = new _sky__WEBPACK_IMPORTED_MODULE_2__.Sky();
nightSky.init();

//______________
//	
//	UNPAN
//______________

// import { UNPAN } from './unpan';
// const unpan = new UNPAN();
// unpan.init();

/***/ }),

/***/ "./assets/js/src/pan.js":
/*!******************************!*\
  !*** ./assets/js/src/pan.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pan: () => (/* binding */ Pan)
/* harmony export */ });
/* harmony import */ var _positions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positions */ "./assets/js/src/positions.js");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/


class Pan {
  //____________________________
  //
  // Constructor 
  //____________________________

  constructor() {
    // Canvas
    this.panCanvas = document.getElementById('canvas__pan');
    this.panCanvas.style.position = 'absolute';
    this.ctx = this.panCanvas.getContext('2d');
    this.panCanvas.width = window.innerWidth;
    this.panCanvas.height = window.innerHeight;

    // Pan Default Offset
    this.offsetX = this.panCanvas.offsetLeft;
    this.offsetY = this.panCanvas.offsetTop;
    this.cameraOffset = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    this.initialPinchDistance = null;

    // Drag
    this.isDragging = false;
    this.srpeedDrag = 0.2;
    this.dragStart = {
      x: 0,
      y: 0
    };
    this.currentX = 0;
    this.currentY = 0;

    // Wave
    this.radious = Math.PI / 180;
    this.amplitude = 10;
    this.frequency = 0.02;
    this.srpeed = 0.045;
    this.phi = 0;
    this.frames = 0;
    this.stopped = true;
    this.fps = 25;

    // Constellation
    this.scaleSize = 3.5;
    this.fillColor = 'rgba(255, 255, 255, 1)';

    // "Stars" Inside Constellation
    this.starColor = 'rgba(255, 255, 255, 0.4)';
    this.fixedRadius = 2;
    this.minMaxRadius = {
      minRadius: 1,
      maxRadius: 2.5
    };
    this.radiusChange = 0.15;
    this.redStarColor = 'rgba(255, 194, 184, 1)';
    this.shadowBlur = 1;
    this.srp = this.shapeRelatedPosition();
  }
  //_______________________________
  //
  // All 
  //_______________________________

  init() {
    this._eventListeners();
    this.draw();
  }
  draw() {
    const animate = () => {
      this.initDraw();
      this.lines();
      this.shape();
    };
    setInterval(animate, 500 / this.fps);
  }
  //____________________________
  //
  // Draw 
  //____________________________

  initDraw() {
    this.panCanvas.width = window.innerWidth;
    this.panCanvas.height = window.innerHeight;
    this.ctx.scale(this.cameraZoom, this.cameraZoom);
    this.ctx.translate(window.innerWidth, window.innerHeight); // Full Pan	
    this.ctx.clearRect(0, 0, this.panCanvas.width, this.panCanvas.height);
  }
  /****************** LINES ******************/
  /*******************************************/

  lines() {
    this.ctx.translate(-window.innerWidth, -window.innerHeight);
    this.staticLines();
    this.dynamicLines();
  }
  // Static Lines
  staticLines() {
    for (let m = 0; m < 2; m++) {
      // Draw Lines
      this.ctx.beginPath();
      this.ctx.moveTo(-window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * 10);
      this.ctx.lineTo(window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * 10);

      // Width
      this.ctx.lineWidth = 1;

      // Gradient Line
      let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
      gradient.addColorStop(0, "rgba(23, 210, 168, 0.2)");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
      gradient.addColorStop(1, "rgba(23, 210, 168, 0.2)");
      this.ctx.strokeStyle = gradient;
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = "#392E49";
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = -10;
      this.ctx.shadowBlur = 55;
      this.ctx.shadowColor = "rgba(255, 255, 255, 1)";
      this.ctx.stroke();
    }
    ;
  }
  // Dynamic Lines
  dynamicLines() {
    let k = 5,
      opacity = [0, 0];
    for (let m = 0; m < 13; m++) {
      if (m >= 0 && m < 7) k += 1.1;else k += 0.8;
      let firstOpacity = opacity[0] += 0.015;
      let secondOpacity = opacity[1] += 0.038;
      this.frames++;
      this.phi = this.frames / 50;
      this.ctx.beginPath();
      this.ctx.moveTo(-window.innerWidth, this.cameraOffset.y / 2 * 2.5 + m * k);

      // Sin Wave	
      for (let x = -window.innerWidth; x < window.innerWidth; x++) {
        let y = Math.sin(x * this.frequency + this.phi) * this.amplitude / 8 + this.amplitude / 12;
        this.ctx.lineTo(x, this.cameraOffset.y / 2 * 2.5 + y + m * k);
      }
      // 1. Width
      this.ctx.lineWidth = 1;

      // 2. Gradient Line
      let gradient = this.ctx.createLinearGradient(0, 0, this.panCanvas.width, 0);
      gradient.addColorStop(0, "rgba(23, 210, 168, " + firstOpacity + ")");
      gradient.addColorStop(0.5, "rgba(255, 255, 255, " + secondOpacity + ")");
      gradient.addColorStop(1, "rgba(23, 210, 168, " + firstOpacity + ")");
      this.ctx.strokeStyle = gradient;

      // 3. Shadow Line
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 0;
      this.ctx.shadowBlur = 0;
      this.ctx.stroke();
    }
    ;
  }
  /****************** Shape ******************/
  /*******************************************/

  shapeRelatedPosition() {
    const position = {
      css: {
        relation: {
          x: window.innerWidth / 2,
          y: this.cameraOffset.y / 2
        }
      },
      webpack: {
        relation: {
          x: window.innerWidth / 2,
          y: this.cameraOffset.y / 2
        }
      }
    };
    return position;
  }
  translate(shape) {
    switch (shape) {
      case 'css':
        this.ctx.translate(-(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y);
        break;
      case 'webpack':
        this.ctx.translate(-(window.innerWidth / 1.9) + this.cameraOffset.x, -(window.innerHeight / 2.1) + this.cameraOffset.y);
        break;
    }
  }
  shape() {
    for (let key of Object.keys(this.srp)) {
      this.translate(key);
      this.shapeOutline(key);
      this.shapeInline(key);
      this.shapeStars(key);
    }
  }
  shapeOutline(shapeName) {
    // 1. Start
    this.ctx.beginPath();

    // 2. Draw Lines
    this.ctx.moveTo(this.srp.shapeNamep.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[0].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[0].y * this.scaleSize);
    for (let i = 1; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline.length; i++) {
      if (_positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].move == true) {
        this.ctx.moveTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].y * this.scaleSize);
      } else {
        this.ctx.lineTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].y * this.scaleSize);
      }
    }

    // 3. Line Features
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'; // Final : rgba(255, 255, 255, 1);	
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0)';
    this.ctx.stroke();
    this.ctx.fill(); // HIDE IN FINAL
    this.ctx.closePath();
  }
  shapeInline(shapeName) {
    //1. Start
    this.ctx.beginPath();

    // 2. Draw lines	
    this.ctx.moveTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[0].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[0].y * this.scaleSize);
    for (let i = 1; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline.length; i++) {
      if (_positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].move == true) {
        this.ctx.moveTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].y * this.scaleSize);
      } else {
        this.ctx.lineTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].y * this.scaleSize);
      }
    }

    // 3. Line Features
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    this.ctx.stroke();
    this.ctx.closePath();
  }
  shapeStars(shapeName) {
    // 1. Start
    let randomRadius = Math.random() * (this.minMaxRadius.maxRadius - this.minMaxRadius.minRadius) + this.minMaxRadius.minRadius;

    // 2. Update
    const update = () => {
      for (let i = 0; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline.length; i++) {
        if (randomRadius > 2.2 || randomRadius < 1) {
          this.radiusChange = -this.radiusChange;
        }
        randomRadius += this.radiusChange;
      }
    };

    // 3. Render Stars
    const render = () => {
      for (let i = 0; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline.length; i++) {
        this.ctx.beginPath();
        this.ctx.arc(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.inline[i].y * this.scaleSize, randomRadius, 0, 2 * Math.PI, false);
        this.ctx.shadowBlur = this.shadowBlur;
        this.ctx.shadowColor = this.starColor;
        this.ctx.fillStyle = this.redStarColor;
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        update();
      }
    };
    render();
  }
  shapeEvent(cursor, shapeName, offsetX, offsetY) {
    // 1. Draw Shape
    const cssBpundries = new Path2D();
    this.ctx.beginPath();
    cssBpundries.moveTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[0].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[0].y * this.scaleSize);
    for (let i = 1; i < _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline.length; i++) {
      cssBpundries.lineTo(this.srp.shapeName.relation.x + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].x * this.scaleSize, this.srp.shapeName.relation.y + _positions__WEBPACK_IMPORTED_MODULE_0__.positions.shapeName.outline[i].y * this.scaleSize);
    }
    const isPointInPath = this.ctx.isPointInPath(cssBpundries, offsetX, offsetY);
    if (isPointInPath) {
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
      console.log("true"); // Final: rgba(255, 255, 255, 1)
      // 1.1. Cursor
      gsap.to(cursor, 0.1, {
        opacity: 0.7,
        scale: 3
      });
    } else {
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.000000001)';
      console.log("false"); // Final : rgba(255, 255, 255, 0)
    }

    // 2. Features
    this.ctx.fill(cssBpundries);
    this.ctx.closePath();
  }
  //____________________________
  //
  // Responsive 
  //____________________________

  _resize() {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    this.panCanvas.width = windowWidth;
    this.panCanvas.height = windowHeight;
  }
  //____________________________
  //
  // Events 
  //____________________________	

  geteLocation(event) {
    if (event.touches && event.touches.length == 1) {
      return {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if (event.clientX && event.clientY) {
      return {
        x: event.clientX,
        y: event.clientY
      };
    }
  }
  onPointerDown(event) {
    this.isDragging = true;
    this.dragStart.x = event.clientX - this.cameraOffset.x;
    this.dragStart.y = event.clientY - this.cameraOffset.y;
  }
  onPointerUp() {
    this.isDragging = false;
  }
  onPointerMove(event) {
    if (this.isDragging) {
      this.cameraOffset.x = event.clientX - this.dragStart.x;
      this.cameraOffset.y = event.clientY - this.dragStart.y;
    }
    // Cursor
    const followCircle = document.getElementById('followCircle');
    gsap.to(followCircle, 0.1, {
      opacity: 1,
      scale: 1
    });

    // Offset
    let xPosition = parseInt(event.clientX - this.offsetX);
    let YPosition = parseInt(event.clientY - this.offsetY);
    this.shapeEvent(followCircle, xPosition, YPosition);
  }
  handleTouch(event, singleTouchHandler) {
    if (event.touches.length == 1) {
      singleTouchHandler(event);
    } else if (event.type == "touchmove" && event.touches.length == 2) {
      this.isDragging = false;
      this.handlePinch(event);
    }
  }
  handlePinch(event) {
    event.preDefault();
    event.stopPropagation();
    let touch1 = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
    let touch2 = {
      x: event.touches[1].clientX,
      y: event.touches[1].clientY
    };

    // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    let currentDistance = (touch1.x - touch2.x) ** 2 + (touch1.y - touch2.y) ** 2;
    if (this.initialPinchDistance == null) {
      this.initialPinchDistance = currentDistance;
    } else {
      this.adjustZoom(null, currentDistance / this.initialPinchDistance);
    }
  }
  adjustZoom(zoomAmount, zoomFactor) {
    if (!this.isDragging) {
      if (zoomAmount) {
        this.cameraZoom += zoomAmount;
      } else if (zoomFactor) {
        // console.log(zoomFactor);
        this.cameraZoom = zoomFactor * this.lastZoom;
      }
      this.cameraZoom = Math.min(this.cameraZoom, this.maxZoom);
      this.cameraZoom = Math.max(this.cameraZoom, this.minZoom);
      // console.log(zoomAmount)
    }
  }

  //____________________________
  //
  // Event Listeners
  //____________________________	

  _eventListeners() {
    // 1. Resize Pan
    //_____________________________________

    this._resize();
    window.addEventListener("resize", () => {
      this._resize();
    });

    // 2. Mouse
    //_____________________________________

    // 2.1 Mouse For "Canvas Pan"
    this.panCanvas.addEventListener("mousedown", event => {
      this.onPointerDown(event);
    });
    this.panCanvas.addEventListener("mouseup", () => {
      this.onPointerUp();
    });
    this.panCanvas.addEventListener("mousemove", event => {
      this.onPointerMove(event);
    });

    // 3. Touch
    //_____________________________________

    this.panCanvas.addEventListener("touchstart", event => {
      this.handleTouch(event, this.onPointerDown(event));
    });
    this.panCanvas.addEventListener("touchend", event => {
      this.handleTouch(event, this.onPointerUp());
    });
    this.panCanvas.addEventListener("touchmove", event => {
      this.handleTouch(event, this.onPointerMove(event));
    });

    // 4. Wheel
    //_____________________________________

    this.panCanvas.addEventListener("wheel", event => {
      // this.adjustZoom( event.deltaY*this.scrollSensitivity );
    });
  }
}
;


/***/ }),

/***/ "./assets/js/src/positions.js":
/*!************************************!*\
  !*** ./assets/js/src/positions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   positions: () => (/* binding */ positions)
/* harmony export */ });
const positions = {
  css: {
    outline: [{
      x: 0.000,
      y: 19.232
    }, {
      x: 9.635,
      y: 23.250
    }, {
      x: 20.800,
      y: 19.232
    }, {
      x: 24.000,
      y: 0.750
    }, {
      x: 3.630,
      y: 0.750
    }, {
      x: 2.815,
      y: 4.868
    }, {
      x: 19.485,
      y: 4.868
    }, {
      x: 18.960,
      y: 7.515
    }, {
      x: 2.2750,
      y: 7.515
    }, {
      x: 1.4750,
      y: 11.633
    }, {
      x: 18.145,
      y: 11.633
    }, {
      x: 17.205,
      y: 16.510
    }, {
      x: 10.500,
      y: 18.739
    }, {
      x: 4.6800,
      y: 16.510
    }, {
      x: 5.0800,
      y: 14.471
    }, {
      x: 1.475,
      y: 14.471
    }, {
      x: 0.000,
      y: 19.142
    }],
    inline: [{
      x: 3.175,
      y: 2.750
    }, {
      x: 21.500,
      y: 2.750
    }, {
      x: 18.700,
      y: 17.900
    }, {
      x: 9.700,
      y: 21.000
    }, {
      x: 1.700,
      y: 17.500
    }, {
      x: 2.175,
      y: 9.750,
      move: true
    }, {
      x: 20.175,
      y: 9.750
    }]
  },
  webpack: {
    outline: [{
      x: 183.689550,
      y: 202.515590
    }, {
      x: 107.274420,
      y: 245.744860
    }, {
      x: 107.274420,
      y: 212.083130
    }, {
      x: 154.886730,
      y: 185.885090
    }, {
      x: 188.924140,
      y: 197.781890
    }, {
      x: 188.924140,
      y: 107.391140
    }, {
      x: 160.972900,
      y: 123.545770
    }, {
      x: 160.972900,
      y: 181.652330
    }, {
      x: 24.146974,
      y: 202.515590,
      move: true
    }, {
      x: 100.562100,
      y: 245.744860
    }, {
      x: 100.562100,
      y: 212.083130
    }, {
      x: 52.924733,
      y: 185.885090
    }, {
      x: 18.912361,
      y: 197.781890
    }, {
      x: 18.912361,
      y: 107.391140
    }, {
      x: 46.863628,
      y: 123.545770
    }, {
      x: 46.863628,
      y: 181.652330
    }, {
      x: 22.193391,
      y: 101.530390,
      move: true
    }, {
      x: 100.562100,
      y: 57.199096
    }, {
      x: 100.562100,
      y: 89.733760
    }, {
      x: 50.345016,
      y: 117.359420
    }, {
      x: 49.944280,
      y: 117.584840
    }, {
      x: 185.643130,
      y: 101.530390,
      move: true
    }, {
      x: 107.274420,
      y: 57.199096
    }, {
      x: 107.274420,
      y: 89.733760
    }, {
      x: 157.491500,
      y: 117.334380
    }, {
      x: 157.892240,
      y: 117.559790
    }]
  }
};


/***/ }),

/***/ "./assets/js/src/sky.js":
/*!******************************!*\
  !*** ./assets/js/src/sky.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sky: () => (/* binding */ Sky)
/* harmony export */ });
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** SKY ********************************
/*********************************************************************/

class Sky {
  //____________________________
  //
  // 	Constructor
  //____________________________

  constructor() {
    //Required canvas variables
    this.skyCanvas = document.getElementById('canvas__sky');
    this.ctx = this.skyCanvas.getContext('2d');

    //particle colors
    this.colors = ['255, 255, 255'];
    //particle radius min/max
    this.minRadius = 0.4;
    this.maxRadius = 2;
    //particle opacity min/max
    this.minOpacity = 0;
    this.maxOpacity = 1;
    //particle speed min/max
    this.minSpeed = .005;
    this.maxSpeed = .19;
    //frames per second
    this.fps = 4;
    //number of particles
    this.numParticles = 900;
  }
  render() {
    let wHeight = window.innerHeight;
    let wWidth = window.innerWidth;
    this.skyCanvas.width = wWidth;
    this.skyCanvas.height = wHeight;
  }
  //_______________________________
  //
  // All Objects in Night Sky
  //_______________________________

  init() {
    this.stars(); // 1. Stars
    this.meteorShower(); // 2. Meteor Shower 
  }

  //____________________________
  //
  // Stars
  //____________________________

  stars() {
    this.render();
    this.createCircle();
  }
  _rand(min, max) {
    return Math.random() * (max - min) + min;
  }
  createCircle() {
    let particle = [];
    for (let i = 0; i < this.numParticles; i++) {
      let color = this.colors[~~this._rand(0, this.colors.length)];
      particle[i] = {
        radius: this._rand(this.minRadius, this.maxRadius),
        xPos: this._rand(0, this.skyCanvas.width),
        yPos: this._rand(0, this.skyCanvas.height / this.numParticles * i),
        xVelocity: this._rand(this.minSpeed, this.maxSpeed),
        yVelocity: this._rand(this.minSpeed, this.maxSpeed),
        color: 'rgba(' + color + ',' + this._rand(this.minOpacity, this.maxOpacity) + ')'
      };

      //once values are determined, draw particle on canvas
      this.drawParticles(particle, i);
    }
    //...and once drawn, animateCircle the particle
    this.animateCircle(particle);
  }
  drawParticles(particle, i) {
    this.ctx.fillStyle = particle[i].color;
    this.ctx.beginPath();
    this.ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 6 * Math.PI, false);
    this.ctx.fill();
  }
  animateCircle(particle) {
    const animate = () => {
      this.clearCanvas();
      for (let i = 0; i < this.numParticles; i++) {
        particle[i].xPos += particle[i].xVelocity; // Stars Move to Right
        particle[i].yPos -= particle[i].yVelocity; // Stars Move to Top

        //if particle goes off screen call reset method to place it offscreen to the left/bottom
        if (particle[i].xPos > this.skyCanvas.width + particle[i].radius || particle[i].yPos > this.skyCanvas.height + particle[i].radius) {
          this.resetParticle(particle, i);
        } else {
          this.drawParticles(particle, i);
        }
      }
    };
    // animate();
    setInterval(animate, 200 / this.fps);
  }
  resetParticle(particle, i) {
    let random = this._rand(0, 1);
    if (random > .5) {
      // 50% chance particle comes from left side of window...
      particle[i].xPos = -particle[i].radius;
      particle[i].yPos = this._rand(0, this.skyCanvas.height);
    } else {
      //... or bottom of window
      particle[i].xPos = this._rand(0, this.skyCanvas.width);
      particle[i].yPos = this.skyCanvas.height + particle[i].radius;
    }
    //redraw particle with new values
    this.drawParticles(particle, i);
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.skyCanvas.width, this.skyCanvas.height);
  }
  //____________________________
  //
  // 	Meteor Shower 
  //____________________________

  meteorShower() {
    const cLandscapeFrame = document.getElementById('middle');

    // I. PARENT DIV
    const meteorShowerParentDiv = document.createElement("div");
    meteorShowerParentDiv.setAttribute('class', 'o-meteorShower__parent');
    meteorShowerParentDiv.setAttribute('id', 'meteorShower__parent');
    for (let p = 0; p < 7; p++) {
      // Meteor Features
      let meteorFeatures = {
        "angle": Math.floor(Math.random() * (95 - 45 + 1) + 45),
        "speed": Math.floor(Math.random() * (20 - 8 + 1) + 8),
        "delay": Math.floor(Math.random() * (25 - 1 + 1) + 1),
        "x": Math.floor(Math.random() * (80 - 0 + 1) + 0),
        "y": Math.floor(Math.random() * (25 - 0 + 1) + 0),
        "travel": Math.floor(Math.random() * (50 - 10 + 1) + 10),
        "trail": Math.floor(Math.random() * (5 - 1 + 1) + 1)
      };

      // II. CHILD DIV
      const meteorShowerChildDiv = document.createElement("div");
      meteorShowerChildDiv.setAttribute('class', 'o-meteorShower o-meteorShower --' + p);
      meteorShowerChildDiv.setAttribute('id', 'meteorShower --' + p);
      meteorShowerChildDiv.style.setProperty('--angle', Object.values(meteorFeatures)[0]);
      meteorShowerChildDiv.style.setProperty('--speed', Object.values(meteorFeatures)[1]);
      meteorShowerChildDiv.style.setProperty('--delay', Object.values(meteorFeatures)[2]);
      meteorShowerChildDiv.style.setProperty('--x', Object.values(meteorFeatures)[3]);
      meteorShowerChildDiv.style.setProperty('--y', Object.values(meteorFeatures)[4]);
      meteorShowerChildDiv.style.setProperty('--travel', Object.values(meteorFeatures)[5]);
      meteorShowerChildDiv.style.setProperty('--trail', Object.values(meteorFeatures)[6]);

      // Connect Child To Father
      meteorShowerParentDiv.appendChild(meteorShowerChildDiv);

      // II. GRANDCHILD DIV
      const meteorShowerGrandchildDiv = document.createElement("div");
      meteorShowerGrandchildDiv.setAttribute('class', 'o-meteorShower__child o-meteorShower__child --' + p);
      meteorShowerGrandchildDiv.setAttribute('id', 'meteorShower__child --' + p);

      // Connect Grandchild To Child
      meteorShowerChildDiv.appendChild(meteorShowerGrandchildDiv);

      // Connect Father to <sectopn> tag
      cLandscapeFrame.appendChild(meteorShowerParentDiv);
    }
  }
}


/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./assets/js/src/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./assets/js/src/config.js");
/* harmony import */ var main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! main */ "./assets/scss/main.scss");
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Imports ********************************
/*************************************************************************/

/*____________________________________________________________________________*/
/*
/* 	I. Bundle Javascript
/*____________________________________________________________________________*/

 // I. Config

/*____________________________________________________________________________*/
/*
/* 	II. Bundle SCSS & CSS
/*____________________________________________________________________________*/

//	I. SCSS PLUGINS
//_________________________

//	II. SCSS CORE
//_________________________

 // Import
})();

/******/ })()
;
//# sourceMappingURL=build.js.map