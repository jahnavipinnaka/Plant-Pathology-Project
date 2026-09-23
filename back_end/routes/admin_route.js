let express = require('express');
let router = express.Router();
router.get("/viewusers",(req,res)=>{
    res.send("View users route");
});
router.post("/addplants",(req,res)=>{
    res.send("Add plants route");
});
router.delete("/deleteuser/:id",async(req,res)=>{
    let result=await users.findById
    AndDelete(req.params.id)
    if(result){
        res.send("user deleted success");
    }else{
        res.send("no user found");
    }
});
router.get("/viewquestion",(req,res)=>{
    res.send("View question route");
});

// localhost:3000/api/employee/viewtasks GET
module.exports=router;