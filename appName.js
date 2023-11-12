module.exports.greet = (name) => {
    if (name === '') {
        return 'Hello, my friend'
    }
    return 'Hello, ' + name
}
