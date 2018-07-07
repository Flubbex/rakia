/* 
Rakia
Minimalistic module loader based on require-all and BottleJS

Created by Flubbex
*/

var all      = require("require-all"),
    booze    = require("./lib/booze"),

    rakia   = function(){
        return [].slice.call(arguments)
                      .reduce((newbottle,included) =>
                          booze( Object.values( all( included ) ), newbottle) 
                      , booze())        
    }

module.exports = rakia