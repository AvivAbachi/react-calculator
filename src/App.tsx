import React, {useCallback, useState} from 'react';
import {calcArrayT, operatorT, REGEX_UTILITY} from './services/types';
import handelMath from './services/math';
// import Keybord from './services/Keybord';
const Keybord = React.lazy(() => import('./services/Keybord'));
const App = (props: {setDark: () => void}) => {
  const [current, setCurrent] = useState('0');

  //* CALC LOOP *//
  const handelCalc = useCallback((_array: calcArrayT) => {
    const opHelper = (_operator: operatorT) => (array.indexOf(_operator) !== -1 ? array.indexOf(_operator) : max);
    let array: calcArrayT = _array;
    const max = array.length + 1;
    const multiply = opHelper('×');
    const division = opHelper('÷');
    const add = opHelper('+');
    const subtract = opHelper('-');
    multiply !== max || division !== max
      ? (array = handelMath(array, Math.min(multiply, division))) && handelCalc(array)
      : add !== max || subtract !== max
      ? (array = handelMath(array, Math.min(add, subtract))) && handelCalc(array)
      : setCurrent(array.toString());
  }, []);

  //* ON CLICKS EVENTS *//
  const clickInput = useCallback(
    (input: string) => {
      console.log(input);
      let newString = current === 'Infinity' ? '0' : current;
      switch (input) {
        case '-':
          newString += newString === '' ? '-' : newString.match(REGEX_UTILITY.min) ? ' -' : '';
          break;
        case '+':
        case '×':
        case '÷':
          newString.match(REGEX_UTILITY.opMin)
            ? (newString = newString.replace(REGEX_UTILITY.opMin, input))
            : newString.match(REGEX_UTILITY.op)
            ? (newString = newString.replace(REGEX_UTILITY.op, input))
            : newString !== '' && (newString += ` ${input}`);
          break;
        case '.':
          !newString.match(REGEX_UTILITY.dot) && (newString += newString.match(REGEX_UTILITY.number) ? '.' : newString === '' ? '0.' : ' 0.');
          break;
        case '0':
          !newString.endsWith(' 0') && newString !== '0' && (newString += newString.match(REGEX_UTILITY.zero) ? ' 0' : '0');
          break;
        default:
          newString === '0'
            ? (newString = input)
            : newString.endsWith(' 0')
            ? (newString = newString.slice(0, -1) + input)
            : (newString += newString.match(REGEX_UTILITY.defaultInput) ? ` ${input}` : input);
          break;
      }
      setCurrent(newString);
    },
    [current]
  );

  const clickEqual = useCallback(() => {
    const calcArray = current.replace(REGEX_UTILITY.equal, '').split(' ') as calcArrayT;
    handelCalc(calcArray);
  }, [current, handelCalc]);

  const clickBackspace = useCallback(() => {
    const amountBackSpace = current.slice(0, current.endsWith('0.') ? -2 : -1).trimEnd();
    setCurrent((prev) => (prev === 'Infinity' ? '0' : amountBackSpace));
  }, [current]);

  const clickClear = useCallback(() => setCurrent('0'), []);

  return (
    <main id='calc'>
      <h1>React Calculator</h1>
      <label>
        <input id='display' value={current === 'Infinity' ? 'Cannot divide by zero' : current} readOnly />
      </label>
      <Btn id='clear' onClick={() => clickClear()}>
        AC
      </Btn>
      <Btn id='back-space' onClick={() => clickBackspace()}>
        ‹
      </Btn>
      <Btn id='multiply' onClick={() => clickInput('×')}>
        ×
      </Btn>
      <Btn id='seven' onClick={() => clickInput('7')}>
        7
      </Btn>
      <Btn id='eight' onClick={() => clickInput('8')}>
        8
      </Btn>
      <Btn id='nine' onClick={() => clickInput('9')}>
        9
      </Btn>
      <Btn id='divide' onClick={() => clickInput('÷')}>
        ÷
      </Btn>
      <Btn id='four' onClick={() => clickInput('4')}>
        4
      </Btn>
      <Btn id='five' onClick={() => clickInput('5')}>
        5
      </Btn>
      <Btn id='six' onClick={() => clickInput('6')}>
        6
      </Btn>
      <Btn id='add' onClick={() => clickInput('+')}>
        +
      </Btn>
      <Btn id='one' onClick={() => clickInput('1')}>
        1
      </Btn>
      <Btn id='two' onClick={() => clickInput('2')}>
        2
      </Btn>
      <Btn id='three' onClick={() => clickInput('3')}>
        3
      </Btn>
      <Btn id='subtract' onClick={() => clickInput('-')}>
        -
      </Btn>
      <Btn id='decimal' onClick={() => clickInput('.')}>
        .
      </Btn>
      <Btn id='zero' onClick={() => clickInput('0')}>
        0
      </Btn>
      <Btn id='equals' onClick={() => clickEqual()}>
        =
      </Btn>
      <Btn id='dark-btn' onClick={() => props.setDark()}>
        ◑
      </Btn>
      <a id='creadit' target='blink' href='https://github.com/AvivAbachi'>
        Design and Code by AvivAbachi@Gmail.com
      </a>
      <React.Suspense fallback={null}>
        <Keybord clickInput={clickInput} clickEqual={clickEqual} clickBackspace={clickBackspace} clickClear={clickClear} />{' '}
      </React.Suspense>
    </main>
  );
};
export default App;
const Btn = React.memo((props: {id?: string; children?: React.ReactNode; onClick?: () => void}) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
});
