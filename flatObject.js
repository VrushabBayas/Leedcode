const person = {
  firstName: "Vrushabh",
  lastName: "Bayas",
  age: 29,
  address: {
    street: "123 Main St",
    city: "Pune",
    state: "MH",
    zipCode: "12345",
  },
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "555-1234",
      work: "555-5678",
    },
  },
  hobbies: ["reading", "hiking"],
  isStudent: false,
  education: {
    degree: "Bachelor's in Computer Science",
    school: "University of Anytown",
    specialisation: {
      ug: "Bsc",
      pg: "Msc",
    },
  },
};
function flattenObject(object, resultObject = {}, prefix = "") {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (typeof element === "object") {
        flattenObject(element, resultObject, prefix + key + ".");
      } else {
        resultObject[prefix + key] = element;
      }
    }
  }
  return resultObject;
}

let result = flattenObject(person);
console.log("result: ", result);
