// ==UserScript==
// @name         Slither.io Big Mouse Cursor
// @namespace    http://fishdawg.com/userscript/slither/bigmousecursor
// @version      1.0
// @description  Makes the mouse cursor big and easier to see.
// @author       FishDawg
// @match        http*://slither.io/
// @grant        none
// @compatible   Greasemonkey
// @downloadURL  https://github.com/FishDawg/SlitherioServerLock/raw/master/slitherioserverlock.js
// ==/UserScript==

(function(){
  var cursorBox;
  
  function updatePosition(event) {
    event = event || window.event;
    if (typeof event.clientX != "undefined") {
      xm = event.clientX - ww / 2;
      ym = event.clientY - hh / 2;
      cursorBox.style.left = event.clientX - cursorBox.offsetWidth / 2;
      cursorBox.style.top = event.clientY - cursorBox.offsetHeight / 2;
    }
  }
  
  function disableScrolling() {
    document.body.style.overflow = 'hidden';
  }
  
  function createCursorBox() {
    cursorBox = document.createElement('div');
    
    cursorBox.id = 'cursor-box';
    cursorBox.style.position = 'absolute';
    cursorBox.style.left = '-1000px';
    cursorBox.style.top = '-1000px';
    cursorBox.style.width = '100px';
    cursorBox.style.height = '100px';
    cursorBox.style.borderStyle = 'solid';
    cursorBox.style.borderWidth = '10px';
    cursorBox.style.borderColor = 'white';
    cursorBox.style.backgroundColor = 'rgb(76,68,124,0.5)';
    cursorBox.style.borderRadius = '40%';
    cursorBox.style.zIndex = 2000;
    cursorBox.style.pointerEvents = 'none';
    
    document.body.appendChild(cursorBox);
  }
  
  function initialize() {
    disableScrolling();
    createCursorBox();
    
    document.body.style.cursor = 'all-scroll';
    window.onmousemove = updatePosition;
    
    //document.querySelector('body > canvas.nsi').requestPointerLock();
  }
  
  window.onload = initialize;
})();
