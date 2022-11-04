import React, { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(
        //@ts-ignore
        JSON.parse(localStorage.getItem(key, defaultValue))
  );

  useEffect(() => {
    //@ts-ignore
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;