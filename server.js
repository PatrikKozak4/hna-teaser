var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
var Mailgen = require('mailgen');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: process.env.PORT || 587,
    auth: {
      user: creds.USER,
      pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

var mailGenerator = new Mailgen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'HNA',
      link: 'https://google.com'
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
  }
});

router.post('/sendLaunch', (req, res, next) => {
  var firstNameLaunch = req.body.firstNameLaunch
  var lastNameLaunch = req.body.lastNameLaunch
  var emailLaunch = req.body.emailLaunch
  var contentLaunch = `First Name: ${firstNameLaunch} \n Last Name: ${lastNameLaunch} \n Email: ${emailLaunch}  `

  var mailLaunch = {
    from: firstNameLaunch + " " + lastNameLaunch,
    to: 'kozakp@mail.gvsu.edu',  // Change to email address that you want to receive messages on
    subject: 'New Sign-Up Customer',
    text: contentLaunch
  }

  var responseLaunch = {
    body: {
      name: firstNameLaunch + " " + lastNameLaunch,
      intro: "Thanks for signing up to be notified when we launch! We're super excited to have you interested in us and we can't wait to show you what we're all about! "
    }
  }

  var emailRespLaunch = mailGenerator.generate(responseLaunch);

  var emailResponseLaunch = {
    from: creds.USER,
    to: emailLaunch,
    subject: "You're Signed Up!",
    html: emailRespLaunch,
  };

  transporter
    .sendMail(mailLaunch, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

  transporter
  .sendMail(emailResponseLaunch,(err, data) => {
  if (err) {
    res.json({
      status: 'fail'
    })
  } else {
    res.json({
     status: 'success'
    })
  }
})
})

router.post('/sendUs', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var phone = req.body.phone
  var company = req.body.company
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n phone: ${phone} \n company: ${company} \n  message: ${message} `

  var mail = {
    from: name,
    to: 'kozakp@mail.gvsu.edu',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Us Form',
    text: content
    
  }

  var response = {
    body: {
      name,
      intro: "Thanks for messaging us! We're here to answer any questions you have. One of our HNA team members will be in touch shortly. "
    }
  }

  var emailResp = mailGenerator.generate(response);

  var emailResponse = {
    from: creds.USER,
    to: email,
    subject: "HNA has received your message!",
    html: emailResp,
  };

  transporter
    .sendMail(mail,(err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })

  transporter
    .sendMail(emailResponse,(err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)
