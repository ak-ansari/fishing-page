const express = require("express");
const app= express();
const router= express.Router();
const model= require("./model");




    router.route("/").get((req,res)=>{
    });
    router.route("/save").post(async(req,res)=>{
        await model.create(req.body)

        res.send("login succesfull")
    })
    router.route("/view").get(async(req,res)=>{
        const responce=await model.find({})
        res.json(responce);
    })
module.exports=router;