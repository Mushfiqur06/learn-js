import { create } from "../../helper";
import {
  getContact,
  deleteContact,
  updateContact,
} from "./../../contact/Contacts";

export default function contactItem(props) {
  let li = create("li", { class: "listItem" });
  let avatar = create("div", { class: "avatar" });
  avatar.innerText = props.contact.name.charAt(0).toUpperCase();
  let divGroup = create("div");
  let p1 = create("p");
  p1.innerText = props.contact.name;
  let p2 = create("p");
  p2.innerText = props.contact.phone;
  divGroup.append(p1, p2);
  let controller = create("div");
  let deleteBtn = create("button", { class: "btn" });
  deleteBtn.innerText = "Delete";

  let editBtn = create("button", { class: "btn" });
  editBtn.innerText = "Edit";
  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteContact(props.contact);
    console.log(getContact());
  });
  editBtn.addEventListener("click", function () {
    console.log("Hello");
  });

  controller.append(deleteBtn, editBtn);
  li.append(avatar, divGroup, controller);

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
