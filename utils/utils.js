const add = (a, b) => a + b;

const addAsync = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

const updateObj = (obj, attr, value) => {
  const copy = { ...obj };
  Object.setPrototypeOf(copy, obj);
  copy[attr] = value;
  return copy;
}

module.exports = {
  add,
  addAsync,
  updateObj
};
