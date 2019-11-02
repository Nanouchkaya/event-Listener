const creds = require('./config/contactForm');

module.exports = (router, nodemailer) => {
  const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }

  const transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if(error) {
      console.error('transporter', error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  router.post('/contact/send', (req, res, next) => {
    const name = req.body.name 
    const email = req.body.email 
    const object = req.body.object 
    const message = req.body.message
    const content = `name: ${name} \n email: ${email} \n object: ${object} \n message: ${message}`

    const mail = {
      from: name,
      to: 'inesmouandjolobe@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail',
          err
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
};
