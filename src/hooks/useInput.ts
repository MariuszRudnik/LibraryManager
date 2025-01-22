import { ChangeEvent, useState } from 'react';

export const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
