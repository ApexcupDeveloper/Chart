const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Job = new Schema({
    name: {
        type: String
    },
    date:{
        type:Date
    },
    price:{
        type:Number
    },
    client:{
        type:String
    },
    plan:{
        type:Number
    },
    bio:{
        type:String
    }
});
module.exports = mongoose.model('Job', Job);