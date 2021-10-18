import { StringValidator } from 'validators';

// This validator is used to check some length of string and return some error message.
export const stringLengthValidator =
  (length: number, errorMessage: string): StringValidator =>
  (value: string) => {
    if (value.length === length) return undefined;

    return errorMessage;
  };
