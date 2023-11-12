module.exports.greet = (name) => {
    if (this.isEmpty(name)){
      return 'Hello, my friend';
    }
    return 'Hello, ' + name;
    
}
module.exports.isEmpty = (name1) => {
  if (name1 === '') {
    return true;
  }
  return false;
}