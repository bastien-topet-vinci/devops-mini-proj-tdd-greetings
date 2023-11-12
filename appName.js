module.exports.greet = (name) => {
    if (this.isEmpty(name)) {
        return 'Hello, my friend'
    }
    if (this.isNull(name)) {
        return 'Hello, my friend'
    }
    if (this.isUndefined(name)) {
        return 'Hello, my friend'
    }
    if (this.onlyUppercaseLetters(name)) {
        return 'HELLO, ' + name
    }
    if(name.length === 2){
    return ("Hello, "+ name[0] + " and " + name[1] + ".");
  if (this.isEmpty(name)) {
    return 'Hello, my friend'
  }
  if (this.isNull(name)) {
    return 'Hello, my friend'
  }
  if (this.isUndefined(name)){
    return 'Hello, my friend'
  }
  if(name.length >= 2 && typeof name === "object"){
    let greetNames = "Hello";
    for(let index = 0; index < name.length; ++index) {
      if(index === name.length-1){
        greetNames = greetNames + " and " + name[index] + ".";
      }
      else{
        greetNames = greetNames + ", " + name[index];
      }
    }
    return greetNames;
  }
  return ("Hello, "+ name);
}

module.exports.isEmpty = (name1) => {
    if (name1 === '') {
        return true
    }
    return false
}
module.exports.isNull = (name2) => {
    if (name2 === null) {
        return true
    }
    return false
}
module.exports.isUndefined = (name3) => {
    if (name3 === undefined) {
        return true
    }
    return false
}
module.exports.onlyUppercaseLetters = (name4) => {
    const regexp = /^[A-Z]+$/
    if (regexp.test(name4)) {
        return true
    }
    return false
}
