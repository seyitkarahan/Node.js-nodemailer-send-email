const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("email");
});

// app.post("/", function(req, res) {
//     let fName = req.body.name;
//     let eMail = req.body.email;
//     let message = req.body.message;

//     console.log(fName, eMail, message);
// });

app.post('/', (req, res) => {
    const { name, email, message } = req.body;

    // Nodemailer settings
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-mail@gmail.com',
            pass: 'mail-password'
        }
    });

    // E-posta içeriği
    const mailOptions = {
        from: name,
        to: email,
        subject: message,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // E-posta gönderme işlemi
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            res.redirect("/");
        }
    });
});

app.listen(3000, function () {
    console.log("Server 3000");
});