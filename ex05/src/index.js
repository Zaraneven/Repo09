function compareStrictValues(m){

    var m;
    
    if(m != 55) {
        console.log("Not Equal");
    } else {
        console.log("Equal");
    }


}

console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));
module.exports = compareStrictValues;