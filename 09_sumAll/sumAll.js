
const sumAll = function(num1, num2) {

let newArr = [];

let i = num2;
    while (i >= num1 ) {
    newArr.push(i);
    
    i--;

    };

    return newArr.reduce((sum, current) => sum + current, 0);
}
//console.log(sumAll(1,4));//
// Do not edit below this line
module.exports = sumAll;
