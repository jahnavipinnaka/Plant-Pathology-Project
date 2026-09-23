let express = require("express");
let app = express();
let adminroutes = require('./routes/admin_route');
let userroutes = require('./routes/user_route');
let mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/plantpathology")
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use("/api/admin",adminroutes);
app.use("/api/user",userroutes);
// run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})