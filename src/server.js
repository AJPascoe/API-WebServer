const express = require("express");
const app = express();
const {helloWorld} = require("./controllers");

app.use(express.json());

// app.get("/hello", (req, res)=>{
//     res.send("Hello World!");
// });

app.get("/hello", helloWorld);

app.listen(5000, () =>{
    console.log("Listening on port 5000");
});