const regexp = /^[A-Z]+$/
module.exports.greet = (name) => {
  if (this.isEmpty(name)) {
    return 'Hello, my friend'
  }
  if (this.isNull(name)) {
    return 'Hello, my friend'
  }
  if (this.isUndefined(name)){
    return 'Hello, my friend'
  }
  if (regexp.test(name)){
  return 'HELLO, ' + name
  }
  return 'Hello, ' + name
}
module.exports.isEmpty = (name1) => {
  if (name1 === '') {
    return true
  }
  return false
}
module.exports.isNull = (name2) => {
  if (name2 === null){
    return true
  }
  return false
}
module.exports.isUndefined = (name3) => {
  if (name3 === undefined){
    return true;
  }
  return false;
}
