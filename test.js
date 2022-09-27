// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
it('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

it("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

it("Test dollar to yen function", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(10)).toBe(1065.80); 
})

it("Test yes to pound function", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    
    // this is the comparison for the unit test
     expect(fromYenToPound(1000)).toBe(6.25); 
})