const {greet} = require ('../appName.js');

let table = ["Kratos", "Thanathos"];

test('Hello, Kratos and Thanathos.', () =>{
    expect(greet(table)).toBe("Hello, Kratos and Thanathos.");
});