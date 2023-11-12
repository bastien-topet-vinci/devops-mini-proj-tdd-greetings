const { greet } = require('../appName.js')

let table = ["Kratos", "Thanatos", "nl"];
let table2 = ["Kratos", "Thanatos", "fr"];
let table3 = ["Kratos", "fr"];

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

test('greet function should return Hallo, Kratos en Thanatos.', () => {
  expect(greet(table)).toBe('Hallo, Kratos en Thanatos.')
})

test('greet function should return Bonjour, Kratos et Thanatos.', () => {
  expect(greet(table2)).toBe('Bonjour, Kratos et Thanatos.')
})

test('greet function should return Bonjour Kratos', () => {
  expect(greet(table3)).toBe('Bonjour Kratos.')
})