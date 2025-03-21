const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login");


connect.then(() => {
    console.log("Connected to MongoDB");
})
.catch(() =>{
    console.log("Error connecting to MongoDB");
})

const LoginScrema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const collection = new mongoose.model("users", LoginScrema);

module.exports = collection;