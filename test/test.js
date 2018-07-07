var assert = require('assert'),
    booze  = require('../lib/booze'),
    rakia  = require('../index'),
    app    = require('../example')
    
describe('Rakia', function() {
  
  describe('Booze', function() {
    
    it('should be a function', function() {
      assert.equal(typeof(booze), "function");
    });
    
    it('should return an empty bottle object with no arguments', function() {
      assert.equal(typeof(booze()), "object");
    });
    
    it('should return a loaded bottle object with one module', function() {
      assert.equal(booze([{
        name:"testValue",
        type:"value",
        call:"works"
      }]).container.testValue, "works");
    });
    
  });
  
  describe('Loader', function() {
    
    it('should be a function', function() {
      assert.equal(typeof(rakia), "function");
    });
    
    it('should return an empty bottle object with no arguments', function() {
      assert.equal(typeof(rakia()), "object");
    });
    
    it('should return a loaded bottle on passing a directory', function() {
      assert.equal(rakia(__dirname+"/test").container.testValue, "works");
    });
    
  });
  
});
