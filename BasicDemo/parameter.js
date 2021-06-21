const express = require("express")

const app = express()

app.get("/:id",(req,res)=>{

    res.send("the id u passed:"+req.params.id)

})

app.get("/:id/:name",(req,res)=>{

    res.send("the id u passed:"+req.params.id)
    res.send("the name u passed:"+req.params.name)


})


app.listen(9000);