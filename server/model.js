const mongoose= require("mongoose");
const {Schema}= require("mongoose");

const schema= new Schema({
    phone: Number,
    pass: String
})
module.exports=mongoose.model("facebook",schema);
