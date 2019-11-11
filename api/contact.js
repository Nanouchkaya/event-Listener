module.exports = (router, nodemailer) => {
  const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  };

  const transporter = nodemailer.createTransport(transport);

  transporter.verify((error, success) => {
    if (error) {
      console.error('transporter', error);
    }
  });

  router.post('/contact/send', (req, res, next) => {
    const {
      name,
      email,
      object,
      message,
    } = req.body.name;

    const content = `name: ${name} \n email: ${email} \n object: ${object} \n message: ${message}`;

    const mail = {
      from: name,
      to: 'eventListener.oclock@gmail.com', // Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content,
    };

    transporter.sendMail(mail, (error, data) => {
      if (error) {
        res.json({
          msg: 'fail',
          error,
        });
      } else {
        res.json({
          msg: 'success',
        });
      }
    });
  });
};
