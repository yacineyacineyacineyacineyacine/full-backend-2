const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) =>{
    res.send("hello world");
})

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
    
})