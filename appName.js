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
  if (this.greetMoreNames(name)) {
    if (this.isFr(name)) {
      return this.translationFr(name)
    }
    if (this.isNl(name)) {
      return this.translationNl(name)
    } else {
      return this.translationEng(name)
    }
  }
  if (this.onlyUppercaseLetters(name)) {
    return 'HELLO, ' + name
  }

  if (this.onlyUppercaseLetters(name)) {
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

module.exports.greetMoreNames = (name5) => {
  if (name5.length >= 2 && typeof name5 === 'object') {
    return true
  }
  return false
}

module.exports.isFr = (name6) => {
  const number = name6.length - 1
  if (name6[number] === 'fr') {
    return true
  }
  return false
}

module.exports.isNl = (name7) => {
  const number = name7.length - 1
  if (name7[number] === 'nl') {
    return true
  }
  return false
}

module.exports.translationFr = (name8) => {
  let greetNames = 'Bonjour'
  const capsNames = []
  const normalNames = []
  name8.forEach((names) => {
    if (names !== 'fr') {
      if (this.onlyUppercaseLetters(names)) {
        capsNames.push(names)
        console.log(capsNames)
      } else {
        normalNames.push(names)
      }
    }
  })
  for (let index = 0; index < normalNames.length; ++index) {
    if (index === normalNames.length - 1 && normalNames.length > 1) {
      greetNames += ' et ' + normalNames[index] + '.'
    } else if (index === normalNames.length - 1) {
      greetNames += ' ' + normalNames[index] + '.'
    } else {
      greetNames += ', ' + normalNames[index]
    }
  }
  for (let index = 0; index < capsNames.length; ++index) {
    greetNames += ' ET BONJOUR ' + capsNames[index]
  }
  if (capsNames.length >= 1) {
    greetNames += '!'
  }
  return greetNames
}

module.exports.translationNl = (name9) => {
  let greetNames = 'Hallo'
  const capsNames = []
  const normalNames = []
  name9.forEach((names) => {
    if (names !== 'nl') {
      if (this.onlyUppercaseLetters(names)) {
        capsNames.push(names)
        console.log(capsNames)
      } else {
        normalNames.push(names)
      }
    }
  })
  for (let index = 0; index < normalNames.length; ++index) {
    if (index === normalNames.length - 1 && normalNames.length > 1) {
      greetNames += ' en ' + normalNames[index] + '.'
    } else if (index === normalNames.length - 1) {
      greetNames += ' ' + normalNames[index] + '.'
    } else {
      greetNames += ', ' + normalNames[index]
    }
  }
  for (let index = 0; index < capsNames.length; ++index) {
    greetNames += ' EN HALLO ' + capsNames[index]
  }
  if (capsNames.length >= 1) {
    greetNames += '!'
  }
  return greetNames
}

module.exports.translationEng = (name10) => {
  let greetNames = 'Hello'
  const capsNames = []
  const normalNames = []
  name10.forEach((names) => {
    if (names !== 'en') {
      if (this.onlyUppercaseLetters(names)) {
        capsNames.push(names)
        console.log(capsNames)
      } else {
        normalNames.push(names)
      }
    }
  })
  for (let index = 0; index < normalNames.length; ++index) {
    if (index === normalNames.length - 1 && normalNames.length > 1) {
      greetNames += ' and ' + normalNames[index] + '.'
    } else if (index === normalNames.length - 1) {
      greetNames += ' ' + normalNames[index] + '.'
    } else {
      greetNames += ', ' + normalNames[index]
    }
  }
  for (let index = 0; index < capsNames.length; ++index) {
    greetNames += ' AND HELLO ' + capsNames[index]
  }
  if (capsNames.length >= 1) {
    greetNames += '!'
  }
  return greetNames
}
console.log("test pipeline");
