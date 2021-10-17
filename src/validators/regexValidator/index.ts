import { StringValidator } from 'validators';

export const regexValidator =
  (regex: RegExp, message: string): StringValidator =>
  (value) => {
    if (regex.test(value)) return undefined;

    return message;
  };
