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
      if (this.isFr(name)){
        return this.translationFr(name);
      }
      if (this.isNl(name)){
        return this.translationNl(name);
      }
    }
    if (this.onlyUppercaseLetters(name)) {
        return 'HELLO, ' + name
    }
    if(this.greetMoreNames(name)) {
      return this.translationEng(name)
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
module.exports.isFr = (name6) => {
  let number = name6.length-1;
      if (name6[number] === 'fr'){
        return true;
      }
  return false;
}
module.exports.isNl = (name7) => {
  let number = name7.length-1;
      if (name7[number] === 'nl'){
        return true;
      }
  return false;
}
module.exports.translationFr = (name8) => {
  let greetNames = "Bonjour";
        
      for(let index = 0; index < name8.length-1; ++index) {
        if (name8.length < 3){
          greetNames = greetNames + " " + name8[index] + ".";
          break;
        }
        if(index === name8.length-2){
          greetNames = greetNames + " et " + name8[index] + ".";
        }
        else{
          greetNames = greetNames + ", " + name8[index];
        }
      }
      return greetNames;
}
module.exports.translationNl = (name9) => {
  let greetNames = "Hallo";
      for(let index = 0; index < name9.length-1; ++index) {
        if (name9.length < 3){
          greetNames = greetNames + " " + name9[index] + ".";
          break;
        }
        if(index === name9.length-2){
          greetNames = greetNames + " en " + name9[index] + ".";
        }
        else{
          greetNames = greetNames + ", " + name9[index];
        }
      }
      return greetNames;
}
module.exports.translationEng = (name10) => {
      let greetNames = "Hello";
      for(let index = 0; index < name10.length; ++index) {
        if(index === name10.length-1){
          greetNames = greetNames + " and " + name10[index] + ".";
        }
        else{
          greetNames = greetNames + ", " + name10[index];
        }
      }
      return greetNames;
    }
