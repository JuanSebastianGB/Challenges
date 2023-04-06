import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let result;
    try {
      result = localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key))
        : defaultValue;
    } catch (error) {
      result = localStorage.getItem(key)
        ? localStorage.getItem(key)
        : defaultValue;
    }
    return result;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
