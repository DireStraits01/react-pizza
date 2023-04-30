import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [cartValue, setCartValue] = useState(() => {
    const itemCart = JSON.parse(localStorage.getItem(key));
    return itemCart || initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartValue));
  }, [key, cartValue]);

  return [cartValue, setCartValue];
}
export default useLocalStorage;
