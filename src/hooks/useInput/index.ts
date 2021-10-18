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
  () => void,
];

export const useInput = ({
  inputValidator,
  focusLeaveValidator,
}: UseInputProps = {}): UseInputReturnType => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  // This method is validating value when use is typing
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value: eventValue } = event.target;
    const result = inputValidator?.(eventValue);

    if (result) {
      setErrorMessage(result);
      return;
    }

    setErrorMessage(undefined);
    setValue(eventValue);
  }, []);

  // This method is called when user focus leaved.
  const onBlur = useCallback(() => {
    setErrorMessage(focusLeaveValidator?.(value));
  }, [value]);

  return [value, onChange, errorMessage, onBlur];
};
