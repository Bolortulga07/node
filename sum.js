import random from "random";

const sum = () => {
  const x = random.integer(1, 100);
  const y = random.integer(1, 50);
  console.log(x + y);
  return x + y;
};

export { sum };
