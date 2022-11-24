 const express = require("express");
 
 const app = express()

 app.listen(3030, () => console.log("server iniciado en puerto 3030"))
 app.get("/", function(req, res){
    res.send("/index.html")
 })