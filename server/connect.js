const connectingString = "mongodb+srv://akansari:ak9799@cluster0.dg5v4xc.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose");

function connect(){
    return mongoose.connect(connectingString, { useNewUrlParser: true, useUnifiedTopology: true }
    )
};
module.exports = connect