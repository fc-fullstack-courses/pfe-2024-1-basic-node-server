// імпорт за замовчанням (ESModules)
// import MyMathModule from './myMath.js';

// імпорт за замовчанням (CommonJS)
const myMathExports = require('./myMath.js');

console.log(myMathExports);

// іменний імпорт (ESModules)
// import { test, testFunc as newTestFuncName } from './myMath.js';

// import * as MyMath from './myMath.js';

// іменний імпорт (CommonJS)
const { test, testFunc: myTestFunc } = require('./myMath.js');

// console.log(MyMath);

// newTestFuncName();

// console.log(__dirname); // шлях до папки що містить файл
// console.log(__filename); // шлях до файл що запущено

// console.log(module);
