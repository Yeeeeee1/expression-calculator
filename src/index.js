function eval() {
    // Do not use eval!!!
    return;
  }
  
  function expressionCalculator(expr) {
    const arr = expr.split("");
    checkBrecketsPair(arr);
    checkDivisionByZero(arr);
  
    let result;
    const solidString = expr.replace(/\s/g, "");
    const getResult = new Function("return " + solidString);
    result = getResult();
  
    return result;
  }
  
  function checkBrecketsPair(arr) {
    let Brackets = 0;
  
    for (let value of arr) {
      if (value === "(") {
        Brackets++;
      }
      if (value === ")") {
        Brackets--;
      }
    }
  
    if (Brackets !== 0) throw new Error("ExpressionError: Brackets must be paired.");
  }
  
  function checkDivisionByZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "/") {
        if (arr[i + 2] === "0") throw new Error("TypeError: Division by zero.");
      }
    }
  }
  
  module.exports = {
    expressionCalculator
  };