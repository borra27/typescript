/**
 * Let's make a calculator 🧮
 */
type ActionType = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(action: ActionType, num1: number, num2: number): number {
  // return 타입 지정
  switch (action) {
    case "add":
      return num1 + num2;
    case "substract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
    case "remainder":
      return num1 % num2;
    default:
      throw new Error("unknown action"); // 에러 넣기
  }
}
console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
