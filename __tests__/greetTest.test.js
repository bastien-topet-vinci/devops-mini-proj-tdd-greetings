const { greet } = require('../appName.js')

test('greet function should return Hello, Bob', () => {
    expect(greet('Jean-Kevin')).toBe('Hello, Jean-Kevin')
})

test('greet function should return Hello, my friend', () => {
    expect(greet('')).toBe('Hello, my friend')
})

test('greet function should return Hello, my friend', () => {
    expect(greet(null)).toBe('Hello, my friend')
})

test('greet function should return Hello, my friend', () => {
    expect(greet(undefined)).toBe('Hello, my friend')
})

test('greet function should return HELLO, JERRY', () => {
    expect(greet('KENNOBI')).toBe('HELLO, KENNOBI')
})
