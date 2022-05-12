export const normalizeContact = contact => {
  if (contact.name) {
    return { ...contact, name: contact.name.toLowerCase() };
  }
};
