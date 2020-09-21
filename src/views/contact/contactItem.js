import { create } from "../../helper";

export default function contactItem(props) {
  let li = create("li", { class: "listItem" });
  let avatar = create("div", { class: "avatar" });
  avatar.innerText = props.avatar;
  let divGroup = create("div");
  let p1 = create("p");
  p1.innerText = props.name;
  let p2 = create("p");
  p2.innerText = props.phone;
  divGroup.append(p1, p2);
  li.append(avatar, divGroup);

  li.addEventListener("click", () => props.events.click(props.name));

  return li;
}

// let props = {
//   name: "Mushfiqur Niloy",
//   phone: "01788689889",
//   classes: {
//     listItem: "list-item",
//     avatar: "avatar",
//   },
// };
