const path= require ("path");
const express = require("express");
const connect = require("./connect");
const router= require("./controller");
const port = process.env.PORT || 8000;
const cors = require("cors");
const exp = require("constants");
const app= express();
app.use(cors({}));
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.json());
async function start(){
    try {
        await connect();
        app.listen(port,function(){
            return console.log('connectd on port :'+ port)
        })

        
    } catch (error) {
        throw (error)
    }
    
}
start();

app.use("/",router)