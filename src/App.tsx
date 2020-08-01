import React, {Component} from 'react';
import './App.scss';
import {calcArrayT, operatorT} from './services/types';
import handelMath from './services/math';
import Keybord from './services/Keybord';

interface CalcState {
  current: string;
}

const REGEX_UTILITY = {
  defaultInput: /(?<!\s[+|×|÷|-])(\s[+|×|÷|-])$/,
  dot: /(\d+\.|\d+\.\d+)$/,
  equal: /(\D+)$/,
  op: /[+|×|÷|-]$/,
  opMin: /[+|×|÷|-]\s[-]$/,
  min: /(\s[+|-|×|÷]|\d+)$/,
  number: /\d+$/,
  zero: /\d+\s[+|×|÷|-]$/,
};

export default class App extends Component<{}, CalcState> {
  constructor(props: any) {
    super(props);
    this.state = {
      current: '',
    };
  }

  componentDidMount = () => {
    this.toggleDarkTheme(true);
  };

  //* CALC LOOP *//
  handelCalc = (_array: calcArrayT) => {
    const opHelper = (_operator: operatorT) => (array.indexOf(_operator) !== -1 ? array.indexOf(_operator) : max);
    let array = _array;
    const max = array.length + 1;
    const multiply = opHelper('×');
    const division = opHelper('÷');
    const add = opHelper('+');
    const subtract = opHelper('-');
    multiply !== max || division !== max
      ? (array = handelMath(array, Math.min(multiply, division))) && this.handelCalc(array)
      : add !== max || subtract !== max
      ? (array = handelMath(array, Math.min(add, subtract))) && this.handelCalc(array)
      : this.setState({current: array.toString()});
  };

  //* ON CLICKS EVENTS *//
  clickInput = (input: string) => {
    let newString = this.state.current;
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
        if (!newString.match(REGEX_UTILITY.dot)) {
          newString += newString.match(REGEX_UTILITY.number) ? '.' : newString === '' ? '0.' : ' 0.';
        }
        break;
      case '0':
        if (!newString.endsWith(' 0') && newString !== '') {
          newString += newString.match(REGEX_UTILITY.zero) ? ' 0' : '0';
        }
        break;
      default:
        newString += !newString.match(REGEX_UTILITY.defaultInput) || newString === '' ? input : ` ${input}`;
        break;
    }
    if (this.state.current !== newString) {
      this.setState({current: newString});
    }
  };

  clickEqual = () => {
    const calcArray = this.state.current.replace(REGEX_UTILITY.equal, '').split(' ') as calcArrayT;
    this.handelCalc(calcArray);
  };

  clickClear = () => {
    if (this.state.current !== '') {
      this.setState({current: ''});
    }
  };

  clickBackspace = () => {
    const amountBackSpace = this.state.current.slice(0, this.state.current.endsWith('0.') ? -1 : -2).trimEnd();
    this.setState({current: amountBackSpace as string});
  };

  toggleDarkTheme = (_init?: boolean) => {
    const storge: boolean = window.sessionStorage.getItem('dark-theme') === 'true' ? true : false;
    let theme = String(_init ? storge : !storge);
    window.sessionStorage.setItem('dark-theme', theme);
    document.documentElement.setAttribute('dark-theme', theme);
  };

  render() {
    return (
      <main id='calc' className='calc'>
        <h1>React Calculator</h1>
        <label>
          <input id='display' value={this.state.current || '0'} readOnly />
        </label>
        <Btn id='clear' onClick={() => this.clickClear()}>
          AC
        </Btn>
        <Btn id='back-space' onClick={() => this.clickBackspace()}>
          ‹
        </Btn>
        <Btn id='multiply' onClick={() => this.clickInput('×')}>
          ×
        </Btn>
        <Btn id='seven' onClick={() => this.clickInput('7')}>
          7
        </Btn>
        <Btn id='eight' onClick={() => this.clickInput('8')}>
          8
        </Btn>
        <Btn id='nine' onClick={() => this.clickInput('9')}>
          9
        </Btn>
        <Btn id='divide' onClick={() => this.clickInput('÷')}>
          ÷
        </Btn>
        <Btn id='four' onClick={() => this.clickInput('4')}>
          4
        </Btn>
        <Btn id='five' onClick={() => this.clickInput('5')}>
          5
        </Btn>
        <Btn id='six' onClick={() => this.clickInput('6')}>
          6
        </Btn>
        <Btn id='add' onClick={() => this.clickInput('+')}>
          +
        </Btn>
        <Btn id='one' onClick={() => this.clickInput('1')}>
          1
        </Btn>
        <Btn id='two' onClick={() => this.clickInput('2')}>
          2
        </Btn>
        <Btn id='three' onClick={() => this.clickInput('3')}>
          3
        </Btn>
        <Btn id='subtract' onClick={() => this.clickInput('-')}>
          -
        </Btn>
        <Btn id='decimal' onClick={() => this.clickInput('.')}>
          .
        </Btn>
        <Btn id='zero' onClick={() => this.clickInput('0')}>
          0
        </Btn>
        <Btn id='equals' onClick={() => this.clickEqual()}>
          =
        </Btn>
        <Btn id='dark-btn' onClick={() => this.toggleDarkTheme()}>
          ◑
        </Btn>
        <a id='creadit' target='blink' href='https://github.com/AvivAbachi'>
          Design and Code by AvivAbachi@Gmail.com
        </a>
        <Keybord clickInput={this.clickInput} clickEqual={this.clickEqual} clickBackspace={this.clickBackspace} clickClear={this.clickClear} />
      </main>
    );
  }
}

interface BtnProps {
  id?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Btn = React.memo((props: BtnProps) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.children}
    </button>
  );
});
