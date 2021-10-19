import { ErrorMessages } from "consts";
import { StringValidator } from "validators";

// range: this is to check whether the character of phone is in range or not.
// errorMessage: this is error message when the character of phone is out of range.

// Actually if you use regex, it will be more simple but it maybe difficult to provide
// error message in detail.

type PhoneCondition = {
  readonly range: Set<string>;
  readonly errorMessage: string;
};

const zeroAcceptance: PhoneCondition = {
  // Using set because access order is O(1)
  range: new Set(["0"]),
  errorMessage: ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER
};
const eightOrNineAcceptance: PhoneCondition = {
  range: new Set(["8", "9"]),
  errorMessage: ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER
};
const allDigitAcceptance: PhoneCondition = {
  range: new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
  errorMessage: ErrorMessages.PLEASE_INPUT_NUMBER
};
const dashAcceptance: PhoneCondition = {
  range: new Set(["-"]),
  errorMessage: ErrorMessages.PLEASE_INPUT_DASH
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
  allDigitAcceptance // from 0 to 9
];

export const phoneValidator: StringValidator = (value) => {
  let errorMessage: string | undefined;

  // If the length are over phone length then return error message.
  if (value.length > phoneConditions.length)
    return ErrorMessages.PLEASE_INPUT_CORRECT_PHONE_NUMBER;

  value.split("").every((character, index) => {
    // if character in range, then value is valid phone number format.
    const isValid = phoneConditions[index].range.has(character);
    if (!isValid) {
      errorMessage = phoneConditions[index].errorMessage;
    }
    return isValid;
  });
  return errorMessage;
};
