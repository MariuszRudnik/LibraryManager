export const generateRandomNumber = (): string => {
  const min = 10000000;
  const max = 99999999;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result.toString();
};
