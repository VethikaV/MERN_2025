const express = require("express");
const mdb = require("mongoose");
const dotenv = require('dotenv');
const signup=require('./models/signupSchema')
const bcrypt = require('bcrypt')
const app = express();
app.use(express.json())
const PORT = 3001;
dotenv.config()


mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MDB Connection Successful");// if it doesnot work connect with local server
  })
  .catch((err) => {
    console.log("Check your connection String", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Backend</h1>");
});


app.get("/static", (req, res) => {
  res.sendFile("D:\MERN_2025\Day-4\Task\index.html");
});

app.post("/signup",async (req,res) =>{
    try{

    const {firstName,lastName,email,password,phoneNumber}=req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const newSignup= new signup({
      /*async function checkPassword(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    if (isMatch) {
        console.log("✅ Password is correct!");
    } else {
        console.log("❌ Password is incorrect!");
    }
}
*/
        firstName: firstName,
        lastName:lastName,
        email:email,
        password:hashedPassword,
        phoneNumber:phoneNumber,
    });
    newSignup.save();
    console.log("Signup successfully");
        ({ message: "Signup Successfully", isSignUp: true });
    } catch (error) {
    console.log(error);
        res.status(400).json({ message: "Signup Unsuccessfully", isSignUp: false});
    }
});

app.listen(PORT, () => {
    console.log("Server Started Successfully")
});