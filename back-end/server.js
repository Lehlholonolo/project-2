const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./utils/sendEmail');
const nodemailer = require("nodemailer"); 

const app = express();

//Middelware
app.use(express.json());
app.use(bodyParser.json());
 app.use(cors());

//Route
app.get("/", (req, res) => {
    res.send("Home Page")

})
app.post("/api/sendemail", async (req, res) => {
    const{email} = req.body;

    try {
        const send_to='kkmashigo@gmail.com';
        const send_from= process.env.EMAIL_USER;
        const reply_to= email;
        const subject= "Thanks You for signing up with us";
        const message= `<h3>Hey Lucky</h3>
        <p>Thanks</p>
        <p>Regards... </p>
        `;

        await sendEmail(subject, message, reply_to, send_from,send_to)
        res.status(200).json({success: true, message:"Email sent successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }

})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);

})