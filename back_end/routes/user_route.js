let express = require('express');
let router = express.Router();
router.post("/adduser",(req,res)=>{
    res.send("Add user route");
});
router.post("/login",(req,res)=>{
    res.send("Add login route");
});
router.put("/updateprofile",(req,res)=>{
    res.send("Update profile route");
});
router.post("/addquestion",(req,res)=>{
    res.send("Add question route");
});
router.get("/viewquestion",(req,res)=>{
    res.send("View question route");
});
router.put("/update",(req,res)=>{
    res.send("Update response route");
});
router.get("/viewplants",(req,res)=>{
    res.send("View plants route");
});


// localhost:3000/api/user/viewtasks GET
module.exports=router;





