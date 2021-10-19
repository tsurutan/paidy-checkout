import { ChangeEventHandler, useCallback, useState } from 'react';
import { StringValidator } from 'validators';

export type UseInputProps = {
  inputValidator?: StringValidator;
  focusLeaveValidator?: StringValidator;
};

export type UseInputReturnType = [
  string,
  ChangeEventHandler<HTMLInputElement>,
  string | undefined,
  () => void
];

export const useInput = ({
  inputValidator, // validating value when user is typing.
  focusLeaveValidator // validating value when input focus is left.
}: UseInputProps = {}): UseInputReturnType => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // This method is validating value when user is typing
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const { value: eventValue } = event.target;
      const result = inputValidator?.(eventValue);

      if (result) {
        setErrorMessage(result);
        return;
      }

      setErrorMessage(undefined);
      setValue(eventValue);
    },
    [inputValidator]
  );

  // This method is called when user focus leaved.
  const onBlur = useCallback(() => {
    // Show existing error message.
    if (errorMessage) return;

    setErrorMessage(focusLeaveValidator?.(value));
  }, [value, focusLeaveValidator, errorMessage]);

  return [value, onChange, errorMessage, onBlur];
};
