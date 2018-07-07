var rakia = require('../index'),
    application = rakia(__dirname+'/data', __dirname+'/services',
                        __dirname+'/factories', __dirname+'/providers')
    
    
// Returns "HelloWorld"
application.container.someService.helloWorld()

module.exports = application

