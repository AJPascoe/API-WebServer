require("./db/connection");
const express = require("express");
const cors = require("cors");
const app = express();
// const {helloWorld} = require("./controllers");
const helloRouter = require("./routes");

app.use(express.json());
app.use(cors());


//port number goes here



// app.get("/hello", (req, res)=>{
//     res.send("Hello World!");
// });

// app.get("/hello", helloWorld);

app.use(helloRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
