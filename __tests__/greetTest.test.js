const {greet} = require ('../appName.js');

test('Hello Bob', () => {
  expect(greet("Bob")).toBe("Hello Bob");
});