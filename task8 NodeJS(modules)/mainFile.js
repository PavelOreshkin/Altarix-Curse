let calc = require('./calc')
var nodePath = process.argv[0];
var appPath = process.argv[1];
var firstOperand = +process.argv[2];
var secondOperand = +process.argv[3];

try {
  console.log(calc(firstOperand, "+", secondOperand))
  // проверка задания
  // console.log(calc(10, "+", 5));
  // 15

  // console.log(calc('as', "+", 5));
  // Первый операнд не является числом: "as"

  // console.log(calc(10, "&", 5));
  // Неизвестный оператор: "&"
} catch (error) {
  if (error.operand1) console.log(`Первый операнд не является числом: "${error.operand1}"`)
  if (error.operand2) console.log(`Второй операнд не является числом: "${error.operand2}"`)
  if (error.operator) console.log(`Неизвестный оператор: "${error.operator}"`)
}