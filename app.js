// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
} 

function fromEuroToDollar(euroAmount)
{
    return euroAmount * 1.2 ;
}

function fromDollarToYen(dollarAmount)
{
    return dollarAmount * 106.58;
}

function fromYenToPound(yenAmount)
{
    return yenAmount * 0.00625;
}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound};