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
    if(this.greetMoreNames(name)) {
      let greetNames = "Hello";
      let capsNames = [];
      let normalNames = [];
      name.forEach(names => {
        if(this.onlyUppercaseLetters(names)){
          capsNames.push(names);
          console.log(capsNames);
        }
        else{
          normalNames.push(names);
        }
      });
      for(let index = 0; index < normalNames.length; ++index) {
        if(index === normalNames.length-1){
          greetNames += " and " + normalNames[index] + ".";
        }
        else{
          greetNames += ", " + normalNames[index];
        }
      }
      for(let index = 0; index < capsNames.length; ++index) {
        greetNames += " AND HELLO " + capsNames[index];
      }
      if(capsNames.length>=1){
        greetNames += "!";
      }
      return greetNames;
    }
    if (this.onlyUppercaseLetters(name)) {
      return 'HELLO, ' + name;
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
