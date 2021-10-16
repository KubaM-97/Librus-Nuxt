import { mongoose } from "mongoose";

const StudentSchema = new mongoose.Schema({
    student: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, collection: 'registeredUsers'
})

const model = mongoose.model('StudentModel', StudentSchema)
module.exports = model;