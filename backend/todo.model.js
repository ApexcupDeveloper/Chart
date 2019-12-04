const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let reactUser = new Schema({
    name: {
        type: String
    },
    birthday: {
        type: Date
    },
    address:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    flag:{
        type:Number
    }
});
module.exports = mongoose.model('reactUser', reactUser);