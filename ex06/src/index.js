function comparisonToEqual(a){
 var a;
 if(a < 5) {
     console.log("Less than 5");
     return a;
 }
 if(a <= 10) {
     console.log("Less than 10");
     return a;
 }
 if(a >= 10, a < 19) {
     console.log("10 or over");
     return a;
 }
 if(a > 20) {
      console.log("More than 20");
      return a;
     
 }
}

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));
module.exports = comparisonToEqual;