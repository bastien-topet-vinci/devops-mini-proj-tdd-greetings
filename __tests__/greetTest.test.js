const { greet } = require('../appName.js')

test('greet function should return Hello Bob', () => {
  expect(greet('Bob')).toBe('Hello, Bob')
})

test('greet function should return Hello my friend', () => {
  expect(greet('')).toBe('Hello, my friend')
})