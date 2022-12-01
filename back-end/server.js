const mongoose  = require("mongoose");
const dotenv = require('dotenv')


dotenv.config({ path: 'config.env' });
const app = require('./app');



const DB = process.env.DATABASE_LOCAL 
// const DB = process.env.DATABASE 


mongoose.connect(DB)
    .then(()=>console.log('DATABASE connected'))

const port = process.env.PORT || 3000;
const server = app.listen(port , ()=>{
    console.log(`App is running on server ${port}`); 
})