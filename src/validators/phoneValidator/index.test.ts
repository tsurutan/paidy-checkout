import { ErrorMessages } from 'consts';
import { phoneValidator } from './index';

describe(phoneValidator.name, () => {
  // positive cases
  describe.each(['090-1234-5679', '080-3424-5342'])(
    'when phone is valid format(%s)',
    (phone: string) => {
      it('should return undefined', () => {
        expect(phoneValidator(phone)).toBeUndefined();
      });
    }
  );

  // negative cases
  describe('when the first phone number is not 0', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER})`, () => {
      expect(phoneValidator('1')).toEqual(
        ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER
      );
    });
  });

  describe('when the second phone number is not 8 or 9', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER})`, () => {
      expect(phoneValidator('03')).toEqual(
        ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER
      );
    });
  });

  describe('when the third phone number is not 0', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER})`, () => {
      expect(phoneValidator('081')).toEqual(
        ErrorMessages.PLEASE_INPUT_JAPANESE_PHONE_NUMBER
      );
    });
  });

  describe('when the forth phone number is not dash', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_DASH})`, () => {
      expect(phoneValidator('0801')).toEqual(ErrorMessages.PLEASE_INPUT_DASH);
    });
  });

  describe('when the fifth phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-a')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 6th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-1b')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 7th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-12c')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 8th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-123d')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 9th phone number is not dash', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_DASH})`, () => {
      expect(phoneValidator('080-12345')).toEqual(
        ErrorMessages.PLEASE_INPUT_DASH
      );
    });
  });

  describe('when the 10th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-1234-a')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 11th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-1234-1f')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 12th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-1234-56f')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the 13th phone number is not digit', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_NUMBER})`, () => {
      expect(phoneValidator('080-1234-567g')).toEqual(
        ErrorMessages.PLEASE_INPUT_NUMBER
      );
    });
  });

  describe('when the phone number length is higher than', () => {
    it(`should return error message(${ErrorMessages.PLEASE_INPUT_CORRECT_PHONE_NUMBER})`, () => {
      expect(phoneValidator('080-1234-56789')).toEqual(
        ErrorMessages.PLEASE_INPUT_CORRECT_PHONE_NUMBER
      );
    });
  });
});
