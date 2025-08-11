export const sum = (...num) => {
  return num.reduce((acc, curr) => acc + curr, 0);
};

export const sub = (...num) => {
  return num.reduce((acc, curr) => acc - curr);
};

export const mult = (...num) => {
  return num.reduce((acc, curr) => acc * curr, 1);
}

export const div = (...num) => {
  return num.reduce((acc, curr) => acc / curr);
};  