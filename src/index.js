module.exports = function reverse (n) {
  let reversedNumber = String(n).split("").reverse().join("");
  reversedNumber = parseInt(reversedNumber);
  return reversedNumber
}
