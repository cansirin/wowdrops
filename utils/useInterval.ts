import { useEffect, useRef } from "react";

export const useInterval = (
  fn: () => void,
  delay: number | null,
  repetition?: number | null
): void => {
  let x = 0;
  const savedCallback = useRef(fn);

  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  useEffect(() => {
    if (!delay) return;

    const id = setInterval(() => savedCallback.current(), delay);

    if (++x === repetition) {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [delay, repetition, x]);
};
