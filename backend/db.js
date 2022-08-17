const mongoose = require('mongoose');

//const mongooseurl = 'mongodb+srv://Riyaz:Riyaz982@cluster0.qbksz7d.mongodb.net/?retryWrites=true&w=majority'
const dotenv = require('dotenv');

dotenv.config();

const connectToMongo = ()=>{
    mongoose.connect(process.env.mongooseurl,()=>{
        console.log('connected to db');
    })
}

module.exports=connectToMongo;