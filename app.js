const express = require("express");
const path = require("path");
const app = express(); 
const pathPublic = path.resolve(__dirname, "./public");
app.use(express.static(pathPublic));


app.listen(3002, () => {
    console.log("Pagina Corriendo");
})

app.get("/", (req, res)=>{
    let patheo = path.join(__dirname, "/views/home.html");
    res.sendFile(patheo);
})