const add = (a, b) => a + b;

const addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

module.exports = {
  add,
  addAsync
};
