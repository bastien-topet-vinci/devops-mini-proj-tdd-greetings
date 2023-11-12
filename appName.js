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
    if (this.greetMoreNames(name)){
      let number = name.length-1;
      if (name[number] === 'fr'){
        let greetNames = "Bonjour";
        
      for(let index = 0; index < name.length-1; ++index) {
        if (name.length < 3){
          greetNames = greetNames + " " + name[index] + ".";
          break;
        }
        if(index === name.length-2){
          greetNames = greetNames + " et " + name[index] + ".";
        }
        else{
          greetNames = greetNames + ", " + name[index];
        }
      }
      return greetNames;
      }
      if (name[number] === 'nl'){
        let greetNames = "Hallo";
      for(let index = 0; index < name.length-1; ++index) {
        if (name.length < 3){
          greetNames = greetNames + " " + name[index] + ".";
          break;
        }
        if(index === name.length-2){
          greetNames = greetNames + " en " + name[index] + ".";
        }
        else{
          greetNames = greetNames + ", " + name[index];
        }
      }
      return greetNames;
      }
    }

    if (this.onlyUppercaseLetters(name)) {
        return 'HELLO, ' + name
    }
    if(this.greetMoreNames(name)) {
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
        return true;
    }
    return false;
}
module.exports.isNull = (name2) => {
    if (name2 === null) {
        return true;
    }
    return false;
}
module.exports.isUndefined = (name3) => {
    if (name3 === undefined) {
        return true;
    }
    return false;
}
module.exports.onlyUppercaseLetters = (name4) => {
    const regexp = /^[A-Z]+$/
    if (regexp.test(name4)) {
        return true;
    }
    return false;
}

module.exports.greetMoreNames = (name5) => {
  if(name5.length >= 2 && typeof name5 === "object"){
    return true;
  }
  return false;
}
