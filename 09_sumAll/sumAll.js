
const sumAll = function(num1, num2) {

let newArr = [];

    if (num2 > num1) {
       let i = num2;
        while (i >= num1 ) {
        newArr.push(i);
    
        i--;

    };
    
    } else if (num1 > num2) {
        let i = num1;
        while (i >= num2 ) {
        newArr.push(i);
    
        i--;

    };
    }  

    
    return newArr.reduce((sum, current) => sum + current, 0);
}

//console.log(sumAll(1,4));//
// Do not edit below this line
module.exports = sumAll;
