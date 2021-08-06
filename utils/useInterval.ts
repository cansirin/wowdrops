import { useEffect, useRef } from "react";

export const useInterval = (fn: () => void, delay: number | null): void => {
  const savedCallback = useRef(fn);

  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    if (!delay) return;

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
