function findMSB(number) {
  // Convert the number to binary representation
  const binaryRepresentation = (number >> 32).toString(2);
  console.log("binaryRepresentation: ", binaryRepresentation);

  // The MSB is the leftmost digit in the binary representation
  const msb = binaryRepresentation.charAt(0);

  return msb;
}

// Example usage:
const number = 7;
const msb = findMSB(number);
console.log(`The MSB of ${number} is ${msb}`);
