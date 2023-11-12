const {greetTwoNames} = require ('../appName.js');

let table = ["Kratos", "Thanathos"];

test('Hello, Kratos and Thanathos.', () =>{
    expect(greetTwoNames(table)).toBe("Hello, Kratos and Thanathos.");
});