import {operatorT, calcArrayT} from './types';

export default function handelMath(array: calcArrayT, index: number) {
  const a = Number(array[index - 1]);
  const b = Number(array[index + 1]);
  const operator = array[index] as operatorT;
  switch (operator as operatorT) {
    case '+':
      return [...array.slice(0, index - 1), a + b, ...array.slice(index + 2)] as calcArrayT;
    case '-':
      return [...array.slice(0, index - 1), a - +b, ...array.slice(index + 2)] as calcArrayT;
    case '×':
      return [...array.slice(0, index - 1), a * b, ...array.slice(index + 2)] as calcArrayT;
    case '÷':
      return [...array.slice(0, index - 1), a / b, ...array.slice(index + 2)] as calcArrayT;
    default:
      return array as calcArrayT;
  }
}
