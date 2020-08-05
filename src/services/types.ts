export type operatorT = '×' | '÷' | '+' | '-';
export type calcArrayT = (operatorT | number)[];

export const REGEX_UTILITY = {
  defaultInput: /(?<!\s[+|×|÷|-])(\s[+|×|÷|-])$/,
  dot: /(\d+\.|\d+\.\d+)$/,
  equal: /(\D+)$/,
  op: /[+|×|÷|-]$/,
  opMin: /[+|×|÷|-]\s[-]$/,
  min: /(\s[+|-|×|÷]|\d+)$/,
  number: /\d+$/,
  zero: /\d+\s[+|×|÷|-]$/,
};
