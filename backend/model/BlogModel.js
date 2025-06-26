const { default: mongoose } = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    content:{
        type:string,
        required:true
    },
    author:{
        type:string,
        required:true
    },

},{timeseriestrue});

module.exports = mongoose.model('Blog', BlogSchema);