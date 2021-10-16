// import { mongoose } from "mongoose";
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    { collection: 'registeredUsers' }

)

const model = mongoose.model('UserModel', UserSchema)
module.exports = model;