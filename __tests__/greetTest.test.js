const { greet } = require('../appName.js')

const table = ['Kratos', 'Thanatos', 'nl']
const table2 = ['Kratos', 'Thanatos', 'fr']
const table3 = ['Kratos', 'fr']
const table4 = ['Kratos', 'Thanathos']
const table5 = ['Kratos', 'Thanathos', 'Hypnos']
const table6 = ['KRATOS', 'Thanathos', 'Hypnos']

// to launch tests, write "npm test" in the console

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

test('Hello, Kratos and Thanathos.', () => {
  expect(greet(table4)).toBe('Hello, Kratos and Thanathos.')
})

test('function should return Hello, Kratos, Thanathos and Hypnos.', () => {
  expect(greet(table5)).toBe('Hello, Kratos, Thanathos and Hypnos.')
})

test('function should return Hello, Thanathos and Hypnos.', () => {
  expect(greet(table6)).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!')
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
