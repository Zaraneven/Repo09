function compareDifferentValues(m, n){
    
    m === n;


    if (m === n){
        console.log("Eqaul");
    } else {
        console.log("Not Equal");
    }
}
console.log(compareDifferentValues(8, "8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
module.exports = compareDifferentValues;