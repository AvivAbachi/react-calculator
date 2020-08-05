import React, {Component} from 'react';

interface KeybordProps {
  clickInput: (key: string) => void;
  clickClear: () => void;
  clickBackspace: () => void;
  clickEqual: () => void;
}

class Keybord extends Component<KeybordProps> {
  componentDidMount = () => {
    window.addEventListener('keydown', (e: KeyboardEvent) => this.handelKeyBoard(e.key));
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', (e: KeyboardEvent) => this.handelKeyBoard(e.key));
  };

  //* KEYBOARD *//
  handelKeyBoard = (key: string) => {
    let id: string = '';
    let callback: any = this.props.clickInput;
    let keyVal: string = key;
    switch (key) {
      case '0':
        id = 'zero';
        break;
      case '1':
        id = 'one';
        break;
      case '2':
        id = 'two';
        break;
      case '3':
        id = 'three';
        break;
      case '4':
        id = 'four';
        break;
      case '5':
        id = 'five';
        break;
      case '6':
        id = 'six';
        break;
      case '7':
        id = 'seven';
        break;
      case '8':
        id = 'eight';
        break;
      case '9':
        id = 'nine';
        break;
      case 'Delete':
        id = 'clear';
        callback = this.props.clickClear;
        break;
      case 'Backspace':
        id = 'back-space';
        callback = this.props.clickBackspace;
        break;
      case 'Enter':
      case '=':
        id = 'equals';
        callback = this.props.clickEqual;
        break;
      case '+':
        id = 'add';
        break;
      case '-':
        id = 'subtract';
        break;
      case '×':
      case '*':
        id = 'multiply';
        keyVal = '×';
        break;
      case '÷':
      case '/':
        id = 'divide';
        keyVal = '÷';
        break;
      case '.':
        id = 'decimal';
        break;
      default:
        break;
    }
    if (id !== '') {
      document.getElementById(id)?.focus();
      callback(keyVal);
    }
  };
  render() {
    return null;
  }
}
export default React.memo(Keybord);
