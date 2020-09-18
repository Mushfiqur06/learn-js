import { v4 as uuidv4 } from "uuid";
class Contact {
  constructor({
    name = null,
    phone = null,
    email = null,
    fb = null,
    group = "other",
    id = uuidv4(),
  }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.fb = fb;
    this.group = group;
    this.id = id;
  }

  print() {
    console.log(this);
  }
}

export default Contact;
