import { act, renderHook, RenderResult } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';
import { StringValidator } from 'validators';
import { useInput, UseInputReturnType } from './index';

describe(useInput.name, () => {
  let result!: RenderResult<UseInputReturnType>;

  const actInputValue = (value: string) => {
    act(() => {
      result.current[1]({ target: { value } } as ChangeEvent<HTMLInputElement>);
    });
  };

  describe('when there is no arg', () => {
    beforeEach(() => {
      result = renderHook(() => useInput()).result;
    });

    describe('when value is inputted', () => {
      const value = 'email@gmail.com';

      beforeEach(() => {
        actInputValue(value);
      });

      it('should update value', () => {
        expect(result.current[0]).toEqual(value);
      });

      it('should not update error message', () => {
        expect(result.current[2]).toBeUndefined();
      });
    });
  });

  describe('when there is a validator in the arg', () => {
    const errorMessage = 'Please input text.';
    const validator: StringValidator = (value) => (value.length > 1 ? undefined : errorMessage);
    const validValue = 'email@gmail.com';
    const invalidValue = '1';

    beforeEach(() => {
      result = renderHook(() => useInput(validator)).result;
    });

    describe('when valid value is inputted', () => {
      beforeEach(() => {
        actInputValue(validValue);
      });

      it('should update value', () => {
        expect(result.current[0]).toEqual(validValue);
      });

      it('should not update error message', () => {
        expect(result.current[2]).toBeUndefined();
      });
    });

    describe('when invalid value is inputted', () => {
      beforeEach(() => {
        actInputValue(invalidValue);
      });

      it('should update value', () => {
        expect(result.current[0]).toEqual(invalidValue);
      });

      it('should update error message', () => {
        expect(result.current[2]).toEqual(errorMessage);
      });

      describe('when valid value is inputted after previous value is invalid', () => {
        beforeEach(() => {
          actInputValue(validValue);
        });

        it('should update value', () => {
          expect(result.current[0]).toEqual(validValue);
        });

        it('should update error message to undefined', () => {
          expect(result.current[2]).toBeUndefined();
        });
      });
    });
  });
});
