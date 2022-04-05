function logicalAndOperator(num){

    var x = 40;
    var y = 80;
    
    if (num > x && num < y) {
        return "Yes";
    }
    return "No";
}

console.log(logicalAndOperator(0));
console.log(logicalAndOperator(24));
console.log(logicalAndOperator(45));
console.log(logicalAndOperator(57));
console.log(logicalAndOperator(100));
module.exports = logicalAndOperator;