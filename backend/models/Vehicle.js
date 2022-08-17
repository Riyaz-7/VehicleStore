const mongoose = require('mongoose');
const { Schema } = mongoose;

const VehicleSchema = new Schema({
     name : {
     type : String,
     required : true
    },
    Type :{
        type : String,
     required : true
    },
    cost:{
        type : Number,
        required : true
    },
    date :{
        type : Date,
        default : Date.now
    },
    image :{
        type : String
    }
  });

  module.exports = mongoose.model('vehicles',VehicleSchema);