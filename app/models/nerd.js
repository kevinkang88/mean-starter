var mongoose = require('mongoose')
// grab mongoose module, dependences do not need directory 

// define nerd model 

module.exports = mongoose.model('Nerd',{
  name : {type : String, default: ''}
});