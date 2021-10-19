import { stringLengthValidator } from './index';

const length = 2;
const errorMessage = 'Invalid length';
const target = stringLengthValidator(length, errorMessage);

describe('stringLengthValidator', () => {
  describe(`when value length is shorter than ${length}`, () => {
    it('should return undefined', () => {
      expect(target('1')).toEqual(errorMessage);
    });
  });

  describe(`when value length is equal to ${length}`, () => {
    it('should return undefined', () => {
      expect(target('12')).toBeUndefined();
    });
  });

  describe(`when value length is longer than ${length}`, () => {
    it('should return undefined', () => {
      expect(target('123')).toEqual(errorMessage);
    });
  });
});
