import { ErrorMessages } from 'consts';
import { phoneValidator } from './index';

describe(phoneValidator.name, () => {
  describe.each(['090-1234-5679', '080-3424-5342'])(
    'when value is valid format(%s)',
    (phone: string) => {
      it('should return undefined', () => {
        expect(phoneValidator(phone)).toBeUndefined();
      });
    },
  );

  describe.each([
    '', // empty
    '0090-1234-5679', // first is 4 digits
    '090-234-5679', // second is 3 digits
    '090-1234-679', // last is 3 digits
    '070-3424-5342', // first 070 is invalid
    '08034245342', // there is no -
    'a70-3424-5342', // there is a alphabet
  ])('when value is invalid format(%s)', (phone: string) => {
    it('should return error message', () => {
      expect(phoneValidator(phone)).toEqual(ErrorMessages.INVALID_PHONE);
    });
  });
});
