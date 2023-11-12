module.exports.greet = (name) => {
  return ("Hello "+ name);
};

module.exports.greetTwoNames = (table) => {
  return ("Hello, "+ table[0] + " and " + table[1] + ".");
};