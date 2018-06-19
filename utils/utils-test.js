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
