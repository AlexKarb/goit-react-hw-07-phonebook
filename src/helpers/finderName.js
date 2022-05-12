const finderName = (array, contact) => {
  return new Promise((resolve, reject) => {
    const haveContact = array.find(({ name }) => name === contact.name);

    if (!haveContact) {
      resolve(contact);
    } else {
      reject(contact.name);
    }
  });
};
export default finderName;
