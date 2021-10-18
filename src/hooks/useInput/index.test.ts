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

  const actBlur = () => {
    act(() => {
      result.current[3]();
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
    const inputErrorMessage = 'Please input text.';
    const focusLeaveErrorMessage = 'Please input text.';

    const inputValidator: StringValidator = (value) => {
      if (value.length > 1) return undefined;
      return inputErrorMessage;
    };
    const focusLeaveValidator: StringValidator = (value) => {
      if (value.length > 1) return undefined;
      return focusLeaveErrorMessage;
    };

    const validValue = 'email@gmail.com';
    const invalidValue = '1';

    beforeEach(() => {
      result = renderHook(() =>
        useInput({
          inputValidator,
          focusLeaveValidator,
        }),
      ).result;
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

      describe('when the input focus is left', () => {
        it('should not update error message', () => {
          actBlur();
          expect(result.current[2]).toBeUndefined();
        });
      });
    });

    describe('when invalid value is inputted', () => {
      beforeEach(() => {
        actInputValue(invalidValue);
      });

      it('should not update value', () => {
        expect(result.current[0]).toEqual('');
      });

      it('should update error message', () => {
        expect(result.current[2]).toEqual(inputErrorMessage);
      });

      describe('when the input focus is left', () => {
        it('should update error message', () => {
          actBlur();
          expect(result.current[2]).toEqual(focusLeaveErrorMessage);
        });
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
