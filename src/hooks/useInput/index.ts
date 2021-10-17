import { ChangeEventHandler, useCallback, useState } from 'react';
import { StringValidator } from 'validators';

export type UseInputReturnType = [string, ChangeEventHandler<HTMLInputElement>, string | undefined];

export const useInput = (validator?: StringValidator): UseInputReturnType => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value: eventValue } = event.target;
    const validationResult = validator?.(eventValue);

    if (validationResult != null) {
      setErrorMessage(validationResult);
      // If there is validation error, stop updating value.
      return;
    }

    setErrorMessage(undefined);
    setValue(eventValue);
  }, []);

  return [value, onChange, errorMessage];
};
