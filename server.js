require ('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const atmdetails = require('./routes/atmRoutes');

const app = express();
const PORT = process.env.PORT ||3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/atmdetails',atmdetails);


mongoose.set('strictQuery',false);
mongoose.connect(MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("Connected to MongoDB");
    app.listen(PORT,()=>{
        console.log(`Connected to Node Server App running on PORT: ${PORT}`);
    })
}).catch((error)=>{
    console.error("Mongo Connection Error.."+error);
});

app.use((err,req,res,next)=>{
    console.error('Unexpected Error:'+ err);
    res.status(500).send('Internal Error Occured');
});