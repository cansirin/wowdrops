export const randomNumber = (
  min: number,
  max: number,
  toFixed?: number
): number => {
  const random = (Math.random() * (max - min) + min).toFixed(
    toFixed ? toFixed : 0
  );
  return parseFloat(random);
};
