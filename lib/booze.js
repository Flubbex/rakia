/*
Booze
Wraps bottle.js to provide flexible, decoupled, modular loading

Made by Flubbex
*/

var Bottle    = require("bottlejs")

/*
Create a booze instance from a module or an array of modules. 
A new bottle will be created if not provided. 
*/

function Booze(_modules=[],bottle=new Bottle()){
  var modules = Array.isArray(_modules) ? _modules 
                                        : [_modules]
                                  
  modules.map((bottlemodule)=>{
    if (!bottlemodule)
      throw new Error("Rakia: Missing module")
    if (!bottlemodule.name)
      throw new Error("Rakia: Missing module name")
    if (!bottlemodule.call)
      throw new Error("Rakia: Missing module call")
    if (!bottlemodule.type)
      throw new Error("Rakia: Missing module type")
    
    //Map module properties to bottle call
    bottle[bottlemodule.type]
          .apply(bottle,
                [bottlemodule.name, 
                bottlemodule.call]
          .concat(bottlemodule.requires || []))
  })
  
  return bottle
}

module.exports = Booze