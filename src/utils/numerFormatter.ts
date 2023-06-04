export const formatTo2Digits = (value: number) =>
  value.toLocaleString("fr-Fr", { minimumIntegerDigits: 2 });
