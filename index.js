// імпорт за замовчанням (ESModules)
import MyMathModule from './myMath.js';

// іменний імпорт (ESModules)
import { test, testFunc as newTestFuncName } from './myMath.js';

import * as MyMath from './myMath.js';

console.log(MyMath);

newTestFuncName();