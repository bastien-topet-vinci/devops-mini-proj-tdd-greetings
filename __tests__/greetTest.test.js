const { greet } = require('../appName.js')

test('greet function should return Hello, Bob', () => {
  expect(greet('Bob')).toBe('Hello, Bob')
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
  expect(greet('JERRY')).toBe('HELLO, JERRY')
})
