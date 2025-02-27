const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth");
const donorRoute= require("./routes/donor");
const prospectRoute= require("./routes/prospect")
module.exports=app;

//CORS
app.use(cors());

// JSON
app.use(express.json());
app("/",(req,res)=>{
    res.send("Welcome to the Donor Management System");
})
// ROUTES
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/donors", donorRoute);
app.use("/api/v1/prospects", prospectRoute);
