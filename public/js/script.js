/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";

import { addEventOnElement } from "./utils.js";

const $searchField = document.querySelector("[data-search-field]");
const $searchClear = document.querySelector("[data-search-clear]");

$searchClear?.addEventListener("click", function () {
  $searchField.value = "";
});

// const $logo = document.querySelector("[data-logo]");

// if (!sessionStorage.getItem("logoAnimated")) {
//   $logo.classList.add("animate");
//   sessionStorage.setItem("logoAnimated", true);
// }

const $menuWrapper = document.querySelector("[data-menu-wrapper]");
const $menuToggler = document.querySelector("[data-menu-toggler]");

$menuToggler?.addEventListener("click", function () {
  $menuWrapper.classList.toggle("active");
});

const $page = document.querySelector("[data-page]");
let lastScrollPosition = 0;

$page?.addEventListener("scroll", function () {
  if (lastScrollPosition < this.scrollTop) {
    this.classList.add("header-hide");
  } else {
    this.classList.remove("header-hide");
  }
  lastScrollPosition = this.scrollTop;
});

const $rippleElems = document.querySelectorAll("[data-ripple]");
$rippleElems?.forEach((item) => ripple(item));

const ripple = function ($rippleElem) {
  $rippleElem.addEventListener("pointerdown", function (event) {
    event.stopImmediatePropogation();

    const $ripple = document.createElement("div");
    $ripple.classList.add("ripple");

    this.appendChild($ripple);
  });
};
