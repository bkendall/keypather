var keypather = require('../index')();

describe('in', function () {
  describe("keypather.in(obj, 'foo.bar')", keyInObject("foo.bar", true));
  describe("keypather.in(obj, '['foo'].bar')", keyInObject("['foo'].bar", true));
  describe("keypather.in(obj, 'foo['bar']')", keyInObject("foo['bar']", true));
  describe("keypather.in(obj, '['foo']['bar']')", keyInObject("['foo']['bar']", true));
  describe("keypather.in(obj, 'foo.no')", keyInObject("foo.no", false));
  describe("keypather.in(obj, '['foo'].no')", keyInObject("['foo'].no", false));
  describe("keypather.in(obj, 'foo['no']')", keyInObject("foo['no']", false));
  describe("keypather.in(obj, '['foo']['no']')", keyInObject("['foo']['no']", false));
  describe("keypather.in(obj, 'foo.deep')", keyInObject("foo.deep", true));
  describe("keypather.in(obj, '['foo'].deep')", keyInObject("['foo'].deep", true));
  describe("keypather.in(obj, 'foo['deep']')", keyInObject("foo['deep']", true));
  describe("keypather.in(obj, '['foo']['deep']')", keyInObject("['foo']['deep']", true));
  describe("keypather.has(obj, 'foo.no')", keyInObject("foo.no", false));
  describe("keypather.has(obj, '['foo'].no')", keyInObject("['foo'].no", false));
  describe("keypather.has(obj, 'foo['no']')", keyInObject("foo['no']", false));
  describe("keypather.has(obj, '['foo']['no']')", keyInObject("['foo']['no']", false));
  describe("keypather.has(obj, 'foo.no.no')", keyInObject("foo.no.no", false));
  describe("keypather.has(obj, '['foo'].no.no')", keyInObject("['foo'].no.no", false));
  describe("keypather.has(obj, 'foo['no']['no']')", keyInObject("foo['no']['no']", false));
  describe("keypather.has(obj, '['foo']['no']['no']')", keyInObject("['foo']['no']['no']", false));
});

function keyInObject (keypath, value) {
  return function () {
    before(function () {
      this.obj = {
        foo: {
          bar: 'value',
          qux: 1
        }
      };
      Object.getPrototypeOf(this.obj.foo).deep = true;
    });
    it('should return keypath in object', function () {
      keypather.in(this.obj, keypath).should.equal(value);
    });
  };
}