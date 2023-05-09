import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true,
    },
    edad:{
        type:Number,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique:true
    }
})

const usersModel = mongoose.model(collection,schema);
export default usersModel;