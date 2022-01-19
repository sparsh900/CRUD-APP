

//*********************************************************************
const express= require('express');
const bodyParser= require('body-parser');
const path = require('path');
const cors = require('cors');



const mongoose= require('mongoose');
const product= require('./routes/product');


const app= express()
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const mongoConnection= "mongodb+srv://crud:04102000@cluster0.88mnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoConnection,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log(`connected to ${mongoConnection}`))
    .catch(err=>console.log(`could not connect to DB ${err}`))
app.use('/product', product)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
