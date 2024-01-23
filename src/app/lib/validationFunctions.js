export const validationFunctions = {
  required: (value) => {
    if (value.trim().length < 1) return "This field is required.";
    return null;
  },
  name: (name) => {
    const isEmpty = validationFunctions.required(name);
    if (isEmpty) return isEmpty;
  },
  email: (email) => {
    const isEmpty = validationFunctions.required(email);
    if (isEmpty) return isEmpty;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      return "Invalid email";
    }
    return null;
  },
  phone: (phone) => {
    const isEmpty = validationFunctions.required(phone);
    if (isEmpty) return isEmpty;
    const regex = /^(?:\+61|0)[4-5]\d{8}$/;
    if (!regex.test(phone)) {
      return "Invalid phone";
    }
  },
  address: (address) => {
    const isEmpty = validationFunctions.required(address);
    if (isEmpty) return isEmpty;
  },
  zip: (zip) => {
    const isEmpty = validationFunctions.required(zip);
    if (isEmpty) return isEmpty;
  },
  city: (city) => {
    const isEmpty = validationFunctions.required(city);
    if (isEmpty) return isEmpty;
  },
  country: (country) => {
    const isEmpty = validationFunctions.required(country);
    if (isEmpty) return isEmpty;
  },
  eNumber: (eNumber) => {
    const isEmpty = validationFunctions.required(eNumber);
    if (isEmpty) return isEmpty;
    if (eNumber.length !== 10) {
      return "eNumbers contain 10 digits";
    }
  },
  ePin: (ePin) => {
    const isEmpty = validationFunctions.required(ePin);
    if (isEmpty) return isEmpty;
    if (ePin.length !== 5) {
      return "ePins contain 5 digits";
    }
  },
};
