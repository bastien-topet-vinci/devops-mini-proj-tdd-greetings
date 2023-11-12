const {greet} = require ('../appName.js');

let table = ["Kratos", "Thanathos", "Hypnos"];

test('function should return Hello, Kratos, Thanathos and Hypnos.', () =>{
    expect(greet(table)).toBe("Hello, Kratos, Thanathos and Hypnos.");
});