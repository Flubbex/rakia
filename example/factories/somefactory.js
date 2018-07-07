module.exports = {
  name: "someFactory",
  type:"factory",
  requires: ["someData"],
  call: function(container)
  {
    //factories get the container as argument
    var someFactory = function(data){
      this.data = data
    }
    
    return new someFactory(container.someData)
  }

}