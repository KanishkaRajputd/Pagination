const express=require("express");

const app=express();

const connect=require("./configs/db");

const productcontroller=require("./controllers/product.controler");
app.use(express.json());
app.use("/products",productcontroller);

app.listen(4000,async(req,res)=>{
    try{

    await connect();
    console.log("listening port 4000");


    }catch(err){
        console.log(err);
    }
})