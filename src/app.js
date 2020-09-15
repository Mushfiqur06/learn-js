import { getID, query, queryAll, getClass, create } from "./helper";
import book from "./../data";
import { generateLi } from "./bookLi";
// let interValId;
// let heading = getID("heading");
// let headingArr = [heading.innerText, "Hading Change Info"];
// let terms = false;
// let container = getClass(".container");

// setInterval(() => {
//   if (terms) {
//     heading.innerText = headingArr[0];
//     terms = false;
//     container.style.backgroundColor = "palegreen";
//   } else {
//     heading.innerText = headingArr[1];
//     terms = true;
//     container.style.backgroundColor = "palevioletred";
//   }
// }, 2000);

// const login = getID("login");
// const signup = getID("signup");
// function handler(e) {
//   alert(e.target.innerHTML);
// }
// login.addEventListener("click", handler);
// signup.addEventListener("click", handler);
const root = getID("root");
window.onload = function () {
  let ul = create("ul");
  ul.onclick = eventHandler;
  let lis = book.map((item) => ul.append(generateLi(item)));
  ul.append(lis);
  root.append(ul);
};

function eventHandler(event) {
  if (event.target.parentNode.tagName === "LI") {
    alert(event.target.id);
  }
}
