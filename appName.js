module.exports.greet = (name) => {
  if (this.isEmpty(name)) {
    return 'Hello, my friend'
  }
  if (this.isNull(name)) {
    return 'Hello, my friend'
  }
  if (name === undefined){
    return 'Hello, my friend'
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
