(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

window.mccluskey = {
  handler: {}
};

mccluskey.ready = function () {
  var $menuButton = document.getElementById('menu-button'),
      $menuButtonLabel = document.getElementById('menu-button-label'),
      $menu = document.getElementById('menu'),
      menuExpandedBreakpoint = 900,
      handler;

  handler = {
    menuClick: function menuClick(event) {
      if (window.innerWidth < menuExpandedBreakpoint) {
        if ($menu.style.marginTop == '5em') {
          var height = $menu.clientHeight;
          $menu.style.marginTop = '-' + height + 'px';
        } else {
          $menu.style.marginTop = '5em';
        }
      }
    }
  };

  $menuButton.addEventListener('click', handler.menuClick);

  mccluskey.handler = handler;
};

document.addEventListener('DOMContentLoaded', mccluskey.ready);

},{}]},{},[1]);

//# sourceMappingURL=app.js.map
