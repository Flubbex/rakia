# RakiaJS
*Minimalistic module loader based on [require-all](https://www.npmjs.com/package/require-all) and [BottleJS](https://github.com/young-steveo/bottlejs)*

## Usage
                   
### Creating a static value 
    module.exports = {
      name: "someData",
      type: "value",
      call: "Hello World!"
    }
    
### Creating a service factory    
    module.exports = {
      name: "someFactory",
      type: "factory",
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
    
### Creating a service provider
    module.exports = {
      name: "someProvider",
      type: "provider",
      requires: ["someFactory","someData"],
      call: function(someFactory,someData)
      {
        
        var factoryPolyfill = () => "Hello world!",
        
        //replace HelloWorld with a polyfill if we're missing data
            helloWorld = someData ? factory : factoryPolyfill

        // this is the service factory
        this.$get = function(container){
          return {
            helloWorld
          }
        }
      }
    }

### Creating a service    
    module.exports = {
      name: "someService",
      type: "service",
      requires: ["someProvider"],
      call:function(someProvider){

        this.helloWorld = someProvider.helloWorld

      }
    }
    
### Tying it all together
    var rakia = require('rakia'),
        application = rakia(__dirname+'/data', 
                            __dirname+'/services',
                            __dirname+'/factories', 
                            __dirname+'/providers')
        
    // Returns "Hello World" 
    application.container.someService.helloWorld()

## Module properties

| property  | description | values | Required
|-----------|------------------------------------------|------------------|---
| name      | Module name, must be unique to namespace | Any valid string | Yes 
| type      | Import level, see BottleJS for type description      | value, constant, provider, factory, service, middleware, decorater | Yes
| requires  | Array of names to import to module call  | Array of string names  | No
| call      | Value or module constructor | Any function | Yes 

## Installation
From Github

    git clone https://github.com/Flubbex/rakia.git
    cd rakia && npm install
    
To import:
    
    var rakia = require('./rakia')
    var application = rakia()
    
## Dependencies
  - [require-all](https://www.npmjs.com/package/require-all) 
  - [BottleJS](https://github.com/young-steveo/bottlejs)
