import { getContact } from "./../../contact/Contacts";
import { create } from "./../../helper";
import contactUL from "./../contact/contactUL";
import contactUl from "./../contact/contactUL";

export function renderContactList(props) {
  let contactUI = null;

  if (getContact().length > 0) {
    console.log(getContact());
    contactUI = contactUL(getContact());
    // contactUI = document.createElement("ul");
    // contactUI.classList = "list-group";

    // getContact().forEach((contact) => {
    //   let contactLi = document.createElement("li");
    //   contactLi.classList = "list-group-item";
    //   contactLi.innerText = `${contact.name} --> ${contact.phone}`;

    //   contactUI.appendChild(contactLi);
    // });
  } else {
    contactUI = document.createElement("p");
    contactUI.classList = "lead";
    contactUI.innerText = "There is no Contact";
  }

  return contactUI;
}
