import { StringValidator } from 'validators';

export const stringLengthValidator =
  (length: number, errorMessage: string): StringValidator =>
  (value: string) => {
    if (value.length === length) return undefined;

    return errorMessage;
  };
