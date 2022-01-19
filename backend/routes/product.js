const express= require('express')
const {Product}= require('../models')
const product= express.Router()



product.post('/product/add', async(req, res)=>{
    try{
        var prd= new Product(req.body)
        var n= await prd.save()
        res.send(`updated, your new todo list looks like \n ${n}`)
    }
    catch(err){
        console.log(err)
    }
})

product.post('/product/delete', async(req, res)=>{
    try{
        Product.findByIdAndDelete(req.body.tid).exec();
        res.send(`deleted`)
    }
    catch(err){
        console.log(err)
    }
})

product.get('/product/list', async(req, res)=>{
    try{
        var prd= await Product.find()
        res.status(200).json({
            list: prd
        })
        
    }
    catch(err){
        console.log(err)
    }
})


module.exports= product
