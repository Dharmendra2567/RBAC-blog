const { default: mongoose } = require("mongoose");

 mongoose.connect(process.env.DATABASE)
 .then(() =>console.log('DATABASE connected'))

 .catch(error=>console.log(error.message))