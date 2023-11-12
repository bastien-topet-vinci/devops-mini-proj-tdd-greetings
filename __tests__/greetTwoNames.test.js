const {greetTwoNames} = require ('../appName.js');

test('Hello, Kratos and Thanathos.', () =>{
    expect(greetTwoNames("Kratos","Thanathos")).toBe("Hello, Kratos and Thanathos.");
});