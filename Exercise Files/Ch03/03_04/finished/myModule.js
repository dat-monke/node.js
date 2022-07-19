let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getCount = () => count;

// Everything within this, all these variables can be consumed
module.exports = {
  anything: true,
  who: "Bill",
  count,
  inc,
  dec,
  getCount
};
