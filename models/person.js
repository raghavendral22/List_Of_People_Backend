const { request } = require("express")
const mongoose=require("mongoose")

const Person=mongoose.Schema({
    Name:{
        type:String,
        require:true},
    Age:{
        type:Number,
        require:true},
    Gender:{
        type:String,
        require:true},

    Mobilenumber:{
        type:Number,
        require:true}


})

module.exports=mongoose.model("Persons",Person)