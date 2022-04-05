function myFunction(myParameter){
    myParameter = Boolean;
      if(myParameter = true) {
            console.log("The parameter is true!");
            return "true";
      } else {
          console.log("The parameter is false!", myParameter);
          return "false";
      }
}
myFunction(true);
myFunction(false);


module.exports = myFunction;
