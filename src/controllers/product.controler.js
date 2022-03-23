const express=require("express");
const path=require("path")
const transporter=require("../configs/mail");

const router=express.Router();

const Product =require("../module/product.module");


router.get("/",async(req,res)=>{
    try{

const page = req.query.page || 1;
const pagesize = req.query.pagesize || 2; 

const skip = (page - 1) * pagesize; 

const p=await Product.find()
.skip(skip)
.limit(pagesize)
.lean()
.exec();
res.send(p);
    }catch(err){
    res.send(err.message);
    }

    const totalPages = Math.ceil(
        (await Product.find().countDocuments()) / pagesize
      );
  

})
router.post("/",async(req,res)=>{
    try{
const p=await Product.create(req.body);

 transporter.sendMail({
    from: '"Fred Foo 👻" <kanishka6393rajput@gmail.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello Dheeraj", // plain text body
    html: "<b>Hello Dheeraj</b>", // html body

    alternatives: [
        {
          contentType: "text/html",
          path: path.join(__dirname, "../mailers/product-created.mail.html"),
        },
        {
          filename: "product.txt",
          path: path.join(__dirname, "../mailers/product-details.txt"),
        },
      ],
  });


res.send(p);
    }catch(err){
    res.send(err.message);
    }

})
module.exports=router;