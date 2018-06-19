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

// testing object update
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

  it(`should return new object with additional property if the property is not
      already on the original object; remaining properties should stay unchanged`, () => {
    const obj = {
      name: 'Matus',
      age: 200
    };

    const newObj = utils.updateObj(obj, 'gender', 'male');

    expect(newObj.name).toBe('Matus');
    expect(newObj.age).toBe(200);
    expect(newObj.gender).toBe('male');
    expect(Object.keys(newObj).length).toBe(3);
  });

  it(`should update property if it already exists on the original object`, () => {
    const obj = {
      name: 'Matus',
      age: 200
    };

    const newObj = utils.updateObj(obj, 'name', 'Tim');

    expect(newObj.name).toBe('Tim');
    expect(newObj.age).toBe(200);
    expect(Object.keys(newObj).length).toBe(2);
  });
});
