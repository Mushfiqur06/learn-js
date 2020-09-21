import { create } from "./../../helper";
import contactItem from "./contactItem";

export default function contactUL(props) {
  const ul = create("ul");
  props.contactList.map((singleContact) => {
    let item = contactItem({
      name: singleContact.name,
      phone: singleContact.phone,
      email: singleContact.email,
      avatar: singleContact.name.charAt(0).toUpperCase(),
    });

    ul.append(item);
  });

  return ul;
}
