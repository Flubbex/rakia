module.exports = {
  name: "someService",
  type: "service",
  requires: ["someProvider"],
  call:function(someProvider){

    this.helloWorld = someProvider.helloWorld
        
  }
}