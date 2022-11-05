const express=require("express");
const app=express();
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const cors=require("cors");
var product=require("./models/product");
var ObjectId=require('mongoose').Types.ObjectId;

mongoose.connect("mongodb://localhost:27017/CRUDAngular").then(()=>{
    console.log("Successfully Created DataBase !!")
}).catch((err)=>{
    if(err) throw err;
    process.exit();
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(cors({origin:'http://localhost:4200'}));

app.get("/AddProduct",(req,res)=>{
    product.find({},(err,data)=>{
        if(err) throw err;
        else
            res.json(data);
    })
})

app.post("/AddProduct",(req,res)=>{
    var products=new product({
        name:req.body.name,
        brand:req.body.brand,
        price:req.body.price,
        countInStock:req.body.countInStock
    }).save((err,data)=>{
        if(err) throw err;
        else
        res.json(data);
    })
})

app.get("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
    product.findById(req.params.id,(err,docs)=>{
        if(!err) {res.send(docs);}
        else
            throw err;
    })
})

app.put("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id : ${req.params.id}`);
    var pro={
        name:req.body.name,
        brand:req.body.brand,
        price:req.body.price,
        countInStock:req.body.countInStock
    };
    product.findByIdAndUpdate(req.params.id,{$set:pro},{new:true},(err,data)=>{
        if(!err) {res.send(data);}
        else
            throw err; 
    })
})

app.delete("/:id",(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with given id : ${req.params.id}`);
    product.findByIdAndDelete(req.params.id,(err,data)=>{
        if(!err) {res.send(data);}
        else
            throw err;
    });
})

app.listen(3000,()=>{
    console.log("App is listening to PORT 3000");
})
