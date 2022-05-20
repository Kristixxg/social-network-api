const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String, unique: true, required:true, trim:true},
    email:{type:String, unique: true, required:true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    thoughts:{},
    friends: {}
})