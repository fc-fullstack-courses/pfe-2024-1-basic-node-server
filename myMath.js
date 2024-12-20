class MyMath {
  static PI = 3.14;
}

// експорт за замовчанням (ESModules)
export default MyMath;

// export default 5; ERROR

// іменний експорт (ESModules)
export { MyMath };

export const test = 5;

export function testFunc () {
  console.log('test func');
}

