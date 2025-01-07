const a = [2, 10, 7];

const max = () => {
  if (a[0] > a[1] && a[0] > a[2]) {
    console.log(`max is ${a[0]}`);
  } else if (a[1] > a[2] && a[1] > a[0]) {
    console.log(`max is ${a[1]}`);
  } else {
    console.log(`max is ${a[2]}`);
  }
};
export { max };
