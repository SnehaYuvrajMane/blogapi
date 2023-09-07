const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://sneha:Sneha2501@cluster0.c6lum2e.mongodb.net/Blog" ,{
   

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( ()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log(err);
})


// const dbURL = process.env.DATABASE_URL || 'mongodb+srv://sneha:Sneha2501@cluster0.c6lum2e.mongodb.net/Blog';
// mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Database connected'))
//     .catch(err => console.log(err));



