const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'Abidkoulailat@gmail.com',
    subject: 'Welcome to my new task application',
    text: `Hi ${name}, hope you are well`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'Abidkoulailat@gmail.com',
    subject: 'Sorry to see you go',
    text: `Hi ${name}, We are sorry that you are leaving us`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
