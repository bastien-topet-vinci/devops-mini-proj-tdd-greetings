module.exports.greet = (name) => {
  if(name.length === 2){
    return ("Hello, "+ name[0] + " and " + name[1] + ".");
  }
  return ("Hello "+ name);
};