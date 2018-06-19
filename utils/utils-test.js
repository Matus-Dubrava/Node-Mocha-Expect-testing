const expect = require('expect');

const utils = require('./utils');

// testing normal function
describe('add', () => {
  it('should add two numbers', () => {
    expect(utils.add(1, 2)).toBe(3).toBeA('number');
  });
});

// testing async function with callback
// specifying done to wait for function to finish
describe('addAsync', () => {
  it('shold add two numbers async.', done => {
    utils.addAsync(1, 2, sum => {
      expect(sum).toBe(3).toBeA('number');
      done();
    });
  });
});

// testing object updating
describe('updateObj', () => {
  it('should not modify the original object', () => {
    const obj = {
      name: 'Matus',
      age: 200
    };

    const newObj = utils.updateObj(obj, 'gender', 'male');

    expect(obj.name).toBe('Matus');
    expect(obj.age).toBe(200);
    expect(Object.keys(obj).length).toBe(2);
  });
});
