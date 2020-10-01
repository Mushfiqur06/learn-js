import { create } from "./../../helper";

export default function Modal(props) {
  let modal = create("div", {
    class: "modal fade",
    id: "myModal",
    tabindex: -1,
    role: "dialoge",
  });

  let modalDialoge = create("div", { class: "modal-dialog" });
  modal.append(modalDialoge);
  let modalContent = create("div", { class: "modal-content" });
  modalContent.append(modalContent);
  let modalHeader = create("div", { class: "modal-header" });

  let modalTitle = create("h5", {
    class: "modal-title",
    id: "exampleModalLabel",
  });
  modalTitle.innerText = props.title;
  let closeBtn = create("button", {
    type: "button",
    class: "close",
    dataDismiss: "modal",
    ariaLabel: "close",
  });
  let closeSpan = create("span", { ariaHidden: true });
  closeSpan.innerText = "&times;";
  closeBtn.append(closeSpan);
  modalHeader.append(modalTitle, closeBtn);

  let modalBody = create("div", { class: "modal-body" });
  modalBody.innerHTML = props.body;

  let modalFooter = create("div", { class: "modal-footer" });
  let footerCloseBtn = create("button", {
    class: "btn btn-secondary",
    type: "button",
    dataDismiss: "modal",
  });
  footerCloseBtn.innerText = "Close";
  let footerChangeBtn = create("button", {
    class: "btn btn-primary",
    type: "button",
  });
  footerChangeBtn.innerText = "Save Change";
  modalFooter.append(footerChangeBtn, footerCloseBtn);
  modalContent.append(modalHeader, modalBody, modalFooter);
}
