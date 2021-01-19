const path = require('path');
const express = require('express');
const Mailgen = require('mailgen');
const transporter = require('./config');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '.', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: 'New Message from Contact Us Form', // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
        <li>Company: ${req.body.company}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'HNA',
      link: 'https://hna.live'
      // Product logo
      // logo: 'https://mailgen.js/img/logo.png'
  }
});

app.post('/sendLaunch', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.emailLaunch, // sender address
      to: process.env.email, // list of receivers
      subject: 'New Sign-Up Customer', // Subject line
      html: `
      <p>You have a new Sign-Up contact.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>First Name: ${req.body.firstNameLaunch}</li>
        <li>Last Name: ${req.body.lastNameLaunch}</li>
        <li>Email: ${req.body.emailLaunch}</li>
      </ul>
      `
    };

    const responseLaunch = {
      body: {
        name: req.body.firstNameLaunch + " " + req.body.lastNameLaunch,
        intro: "Thanks for signing up to be notified when we launch! We're super excited to have you interested in us and we can't wait to show you what we're all about! "
      }
    }

    const emailRespLaunch = mailGenerator.generate(responseLaunch);

    const emailResponseLaunch = {
      from: process.env.email,
      to: req.body.emailLaunch,
      subject: "You're Signed Up!",
      html: emailRespLaunch,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for signing up.'
        });
      }
    });

    transporter.sendMail(emailResponseLaunch, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false
        });
      } else {
        res.send({
          success: true
        });
      }
    });
    
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }

  

});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'));
});

app.listen(process.env.PORT || 3030, () => {
  console.log('server start on port 3030');
});
