const nodemailer = require('nodemailer');

module.exports = (request, response) => {
  const {
    email,
    object,
    message,
  } = request.body;

  // Configuration for mail contact form
  const contactTransport = {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_TLS,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  };

  const contactMail = nodemailer.createTransport(contactTransport);

  // Check if mail configuration is correct
  contactMail.verify((error, success) => {
    if (success) {
      const mail = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `${object} - Formulaire de contact`,
        text: message,
      };

      contactMail.sendMail(mail, (sendError, data) => {
        if (error) {
          response.json({
            error: true,
            message: sendError,
          });
        }
        else {
          response.json({
            error: false,
          });
        }
      });
    }

    if (error) {
      console.error('Error with contact mail :', error);
    }
  });
};
