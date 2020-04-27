const express = require("express");
let app = express();
let bodyParser = require("body-parser");
let urlEncodedParser = bodyParser.urlencoded({extended:false});
var html = '<form method="post">';
html += '<input type="text" name="email" placeholder="email">';
html += '<textarea name="message"></textarea>';
html += '<button>Küldés</button>';
html += '</form>';

let nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:465,
    secure:true,
    auth: {
        user: 'gmail.email',
        pass: 'gmail.pass'
    }
});

app.get("/", (req, res)=> {
    res.send(html);
});

app.post("/email", urlEncodedParser, (req, res)=> {
    let message = "";
    message += "phone: " + req.body.phone + "<br/>";
    message += "name: " + req.body.name + "<br/>";
    message += "phone number: " + req.body.phoneNumber + "<br/>";
    message += req.body.message;

    var mailOptions = {
        from: req.body.email,
        to: 'gmail.email',
        subject: 'message from the site',
        //text: '<h1>This is another email!</h1>'
        html:message
    };
      
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.send(error);
        } else {
          res.send(info);
        }
    });
});

app.listen(3000);