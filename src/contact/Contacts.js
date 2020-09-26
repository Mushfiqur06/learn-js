const contactList = [];

export function createContact(contact) {
  contactList.push(contact);
}

export function getContact() {
  return contactList;
}

export function deleteContact(contact) {
  let index = getIndex(contact.id);
  contactList.splice(index, 1);
}

export function updateContact(oldContact, changeContact) {
  let index = getIndex(oldContact.id);
  for (let i in changeContact) {
    contactList[index][i] = changeContact[i];
  }
}

export function getSingleContact(id) {
  let index = getIndex(id);
  return contactList[index];
}

export function getIndex(id) {
  let index = contactList.findIndex((c) => c.id === id);
  return index;
}
