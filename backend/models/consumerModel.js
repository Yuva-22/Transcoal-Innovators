import mongoose from 'mongoose'

const consumerSchema = new mongoose.Schema({
    name : {type : String, required : true},
    organization : {type : String},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
})

const consumerModel = mongoose.model('Consumers',consumerSchema);

export default consumerModel;