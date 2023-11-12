const {greet} = require ('../appName.js');

let table = ["KRATOS", "Thanathos", "Hypnos"];

test('function should return Hello, Thanathos and Hypnos.', () =>{
    expect(greet(table)).toBe("Hello, Thanathos and Hypnos. AND HELLO KRATOS!");
});