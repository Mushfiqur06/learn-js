import { getID } from "./helper";
import { renderContactList } from "./views/viewData";
import Form from "./views/contactForm/contactForm";

let mode = "list";

let newBtn = getID("newContact");
let output = getID("output");

window.onload = function () {
  render();

  newBtn.addEventListener("click", function () {
    if (mode === "list") {
      mode = "form";
      newBtn.innerHTML = "Show All Contact";
      render();
    } else if (mode === "form") {
      mode = "list";
      newBtn.innerHTML = "Create New Contact";
      render();
    }
  });
};

function render() {
  if (mode === "list") {
    output.innerHTML = "";
    output.appendChild(renderContactList());
  } else if (mode === "form") {
    output.innerHTML = "";
    let form = Form({
      button: {
        innerText: "submit",
      },
    });
    output.appendChild(form);
  }
}
