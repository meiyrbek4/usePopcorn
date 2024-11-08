import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, localName) {
  const [value, setValue] = useState(function () {
    const localWatched = localStorage.getItem(localName);
    return localWatched ? JSON.parse(localWatched) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(localName, JSON.stringify(value));
    },
    [value, localName]
  );

  return [value, setValue];
}
