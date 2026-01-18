const express=require('express')
const app=express();

//require mongodb file
const db = require('./db');

//import the route files
const userRoutes=require('./routes/userRoutes');
//use the router  files
app.use('/user',userRoutes);
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log('Listing on posrt 3000');
})