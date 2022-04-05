function myEqualFunction(num){
     
    num === 23;
    
   if(num === 23) {
    console.log("Equal");
    
} else {
    console.log("Not equal")
    
}

   }  

   

console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));
module.exports = myEqualFunction;