import { create } from "./../../helper";
import contactItem from "./contactItem";

export default function contactUL(props) {
  const ul = create("ul");
  props.contactList.map((contact) => {
    let item = contactItem({
      contact,
    });

    ul.append(item);
  });

  return ul;
}
