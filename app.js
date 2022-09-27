// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
} 

function fromEuroToDollar(euroAmount)
{
    return euroAmount * 1.2 ;
}

// just a console log for ourselves.
console.log(sum(7,3))
console.log(fromEuroToDollar(10));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,  fromEuroToDollar};