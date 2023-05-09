import express from 'express';
import mongoose from 'mongoose';
import usersModel from './models/users.js';

const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on ${PORT}`));

const connection = mongoose.connect(`mongodb+srv://CoderHouse:kramerxl1@alumnos.lgqy1er.mongodb.net/?retryWrites=true&w=majority`)
app.use(express.json());

const users = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"15691240"
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"29358120"
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268"
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567"
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450"
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234"
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129"
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389"
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893"
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"02213850"
  }]

  app.get('/users/insertion',async (req,res)=>{
    let result = await usersModel.insertMany(users)
    res.send({result})
  })
  app.get('/users',async(req,res)=>{
    const result = await usersModel.find();
    res.send({students:result})
  })

  app.post('/users',async(req,res)=>{
    const {nombre,apellido,edad,dni} = req.body;
    if(!nombre||!apellido||!edad||!dni) return res.status(400).send({error:"Incomplete values"});
    let user = {
        nombre,
        apellido,
        edad,
        dni
    }
    let result = await usersModel.create(user);
    res.send({result})
  })
  
  app.put('/users/:id',async(req,res)=>{
    const id = req.params.id;
    const UpdateUser = req.body;
    let result = await usersModel.updateOne({_id:id},{$set:UpdateUser});
    res.send({result});
  })

  app.delete('/users/:id',async(req,res)=>{
    const id= req.params.id;
    let result = await usersModel.deleteOne({_id:id});
    res.send({result})
  })