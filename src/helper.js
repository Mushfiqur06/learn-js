import { type } from "os";

export function getID(id) {
  try {
    return document.getElementById(id);
  } catch (err) {
    console.log(err);
  }
}
export function query(term) {
  try {
    return document.getElementById(term);
  } catch (err) {
    console.log(err);
  }
}
export function queryAll(term) {
  try {
    return document.querySelectorAll(term);
  } catch (err) {
    console.log(err);
  }
}
export function getClass(term) {
  try {
    return document.getElementsByClassName(term);
  } catch (err) {
    console.log(err);
  }
}

export function create() {
  if (arguments.length === 0) {
    return document.createElement("div");
  }

  if (arguments.length === 1 && typeof arguments[0] != "object") {
    return document.createElement(arguments[0]);
  }

  var tag = arguments[0];
  var attr = arguments[1] || arguments[0];

  if (arguments.length === 1 && typeof arguments[0] === "object") {
    tag = "div";
  }

  var element = document.createElement(tag);

  for (var i in attr) {
    element.setAttribute(i, attr[i]);
  }

  return element;
}

//create() return div
//create('ul') return ul
//create({tagName: 'tagName'}) return div with tag name
//create('li', {}) return li with an attributes
