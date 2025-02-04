import { ChangeEvent, useState } from 'react';

type InputType = string | number;

export const useInput = <T extends InputType>(defaultValue: T) => {
  const [value, setValue] = useState<T>(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (typeof defaultValue === 'number') {
      setValue(Number(newValue) as T);
    } else {
      setValue(newValue as T);
    }
  };

  return { value, onChange };
};
