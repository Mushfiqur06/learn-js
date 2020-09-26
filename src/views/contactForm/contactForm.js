import input from "./../input/input";
import { create } from "./../../helper";
import { getContact, createContact } from "./../../contact/Contacts";
import Contact from "./../../contact/Contact";

export default function Form() {
  const form = create("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value);
    let contact = {};
    for (var i = 0; i < e.target.length - 1; i++) {
      contact[e.target[i].name] = e.target[i].value;
    }
    createContact(new Contact(contact));
    form.reset();
    console.log(getContact());
  });

  let nameField = input({
    type: "INPUT",
    attr: {
      placeholder: "Enter Your Name",
      className: "name",
      name: "name",
      required: true,
    },
  });
  let emailField = input({
    type: "INPUT",
    attr: {
      placeholder: "Enter Your Email",
      className: "email",
      required: true,
      name: "email",
    },
  });
  let phoneField = input({
    type: "INPUT",
    attr: {
      placeholder: "Enter Your Phone",
      className: "phone",
      required: true,
      name: "phone",
    },
  });

  let submitBtn = create("button", { class: "sumbit" });
  submitBtn.innerText = "Submit";

  form.append(nameField, emailField, phoneField, submitBtn);

  return form;
}
