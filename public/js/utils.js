/**
 * @license Apache-2.0 License
 * @copyright phaneendra nikhil 2024
 */

"use strict";

const addEventOnElement = function (element, eventType, callback) {
  element.forEach((element) => element.addEventListener(eventType, callback));
};

export{ addEventOnElement };