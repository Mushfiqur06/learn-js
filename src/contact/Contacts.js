class Contacts {
  constructor() {
    this.contactList = [];
  }
  createContact(contact) {
    this.contactList.push(contact);
  }

  getContact() {
    return this.contactList;
  }
  deleteContact(contact) {
    let index = this.getIndex(contact.id);
    this.contactList.splice(index, 1);
  }

  updateContact(oldContact, changeContact) {
    let index = this.getIndex(oldContact.id);
    for (let i in changeContact) {
      this.contactList[index][i] = changeContact[i];
    }
  }
  getSingleContact(id) {
    let index = this.getIndex(id);
    return this.contactList[index];
  }
  getIndex(id) {
    let index = this.contactList.findIndex((c) => c.id === id);
    return index;
  }
}

export default Contacts;
