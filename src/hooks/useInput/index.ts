import { ChangeEventHandler, useCallback, useState } from 'react';
import { StringValidator } from 'validators';

export type UseInputReturnType = [string, ChangeEventHandler<HTMLInputElement>, string | undefined];

export const useInput = (validator?: StringValidator): UseInputReturnType => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    const { value: eventValue } = event.target;
    setErrorMessage(validator?.(eventValue));

    setValue(eventValue);
  }, []);

  return [value, onChange, errorMessage];
};
