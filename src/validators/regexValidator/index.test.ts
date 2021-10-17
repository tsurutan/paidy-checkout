import { regexValidator } from '.';

const errorMessage = 'Please input correct text.';
const sampleRegexValidator = regexValidator(/\d/, errorMessage);

describe(regexValidator.name, () => {
  describe('when value is valid format', () => {
    it('should return undefined', () => {
      expect(sampleRegexValidator('3020')).toBeUndefined();
    });
  });

  describe('when value is invalid format', () => {
    it('should return errorMessage', () => {
      expect(sampleRegexValidator('example.com')).toEqual(errorMessage);
    });
  });
});
