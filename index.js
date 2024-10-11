const express=require("express")
const personsRouter=require("./routes/PersonList")
const bodyParser=require('body-parser')
require("dotenv").config()
const mongoose=require('mongoose')
const app=express();
const cors=require('cors');
app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));
app.use(bodyParser.json())
app.use("/api/v1/persons",personsRouter)



mongoURI='mongodb://localhost:27017/mydb'
mongoose.connect(mongoURI).then(()=>console.log('Connected to MongoDb')).catch(err=>console.log('Error connecting to mongodb:',err));
app.listen(2000, ()=>{
    console.log("Server is running..");
});

