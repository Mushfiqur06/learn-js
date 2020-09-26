import { v4 as uuidv4 } from "uuid";
class Contact {
  constructor({
    name = null,
    phone = null,
    email = null,
    fb = null,
    group = "other",
    favourite = false,
    id = uuidv4(),
  }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.fb = fb;
    this.group = group;
    this.id = id;
    this.favourite = favourite;
  }

  print() {
    console.log(this);
  }
}

export default Contact;
