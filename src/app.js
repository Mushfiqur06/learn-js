import { getID, query, queryAll, getClass, create } from "./helper";
let circleTop = 0;
let circleLeft = 0;
const containerStyle = {
  width: "200px",
  height: "200px",
  margin: "0 auto",
  border: "2px solid palegreen",
  borderRadius: "3px",
  position: "relative",
};
const circleStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "15px",
  backgroundColor: "palevioletred",
  position: "absolute",
};
const root = getID("root");
const container = create("div", { class: "container" });
Object.assign(container.style, containerStyle);
root.append(container);

const circle = create("div", { class: "circle" });
container.append(circle);
Object.assign(circle.style, circleStyle);
const btns = create("div", { class: "btns" });
root.append(btns);

const left = create("button", { class: "left btn" });
left.innerText = "Left";
const right = create("button", { class: "right btn" });
right.innerText = "Right";
const bottom = create("button", { class: "bottom btn" });
bottom.innerText = "Bottom";
const top = create("button", { class: "top btn" });
top.innerText = "Top";
btns.append(left, right, bottom, top);

const btnList = queryAll("button");
const btnArr = Array.prototype.slice.call(btnList);
btnArr.map((item) => {
  console.log(item);
  item.addEventListener("click", function (event) {
    let circleName = event.target.innerText;
    switch (circleName) {
      case "Left":
        circleLeft = circleLeft - 10;
        circleLeft >= 0
          ? Object.assign(circle.style, { left: `${circleLeft}px` })
          : alert("No");
        break;
      case "Right":
        circleLeft = circleLeft + 10;
        circleLeft <= 170
          ? Object.assign(circle.style, { left: `${circleLeft}px` })
          : alert("No");
        break;
      case "Top":
        circleTop = circleTop - 10;
        circleTop >= 0
          ? Object.assign(circle.style, { top: `${circleTop}px` })
          : alert("No");
        break;
      case "Bottom":
        circleTop = circleTop + 10;
        circleTop <= 170
          ? Object.assign(circle.style, { top: `${circleTop}px` })
          : alert("No");
        break;
      default:
        console.log("default");
    }
  });
});

// right.addEventListener("click", function (event) {
//   circleLeft = circleLeft + 10;
//   circleLeft <= 170
//     ? Object.assign(circle.style, { left: `${circleLeft}px` })
//     : alert("No");
// });
