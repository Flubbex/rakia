module.exports = {
  name: "someProvider",
  type: "provider",
  requires: ["someFactory","someData"],
  call: function(someFactory,someData)
  {
      //replace HelloWorld with a polyfill if we're missing the data for it
      var factoryPolyfill = () => "Hello world!",
          helloWorld = someData ? factory : factoryPolyfill
      
      // this is the service factory
      this.$get = function(container){
        return {
          helloWorld
        }
      }
  }

}