import { ErrorMessages } from 'consts';
import { StringValidator } from 'validators';

type PhoneCondition = {
  readonly range: Set<string>;
  readonly errorMessage: string;
};

const zeroAcceptance: PhoneCondition = {
  range: new Set(['0']),
  errorMessage: ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER,
};
const eightOrNineAcceptance: PhoneCondition = {
  range: new Set(['8', '9']),
  errorMessage: ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER,
};
const allDigitAcceptance: PhoneCondition = {
  range: new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']),
  errorMessage: ErrorMessages.PLEASE_INPUT_NUMBER,
};
const dashAcceptance: PhoneCondition = {
  range: new Set(['-']),
  errorMessage: ErrorMessages.PLEASE_INPUT_DASH,
};

const phoneConditions: PhoneCondition[] = [
  zeroAcceptance, // 0
  eightOrNineAcceptance, // 7 or 8
  zeroAcceptance, // 0

  dashAcceptance, // -

  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9

  dashAcceptance, // -

  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9
  allDigitAcceptance, // from 0 to 9
];

// This validation is executed when you check
export const phoneValidator: StringValidator = (value) => {
  let errorMessage: string | undefined;
  if (value.length > phoneConditions.length) return ErrorMessages.PLEASE_INPUT_CORRECT_PHONE_NUMBER;

  value.split('').every((character, index) => {
    const isValid = phoneConditions[index].range.has(character);
    if (!isValid) {
      errorMessage = phoneConditions[index].errorMessage;
    }
    return isValid;
  });
  return errorMessage;
};
