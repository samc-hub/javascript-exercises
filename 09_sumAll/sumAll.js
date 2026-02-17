
const sumAll = function(num1, num2) {

let newArr = [];
   
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }


    else if (num1 < 0 || num2 < 0) {
    return "ERROR";
   }
    else if (num2 > num1) {
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
