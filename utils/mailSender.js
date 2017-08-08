const nodemailer = require('nodemailer');
const config = require('config');

let transporter = nodemailer.createTransport({
    service : 'gmail',
    port : 485,
    auth : {
        user : config.email,
        pass : config.passwd
    }
});

module.exports = ((to,subject,body,callback) => {
    let helperOptions = {
        from : 'Suat POLAT <Recipient address>',
        to : to,
        subject : subject,
        text : body
    };

    transporter.sendMail(helperOptions,callback,(err,info) => {
        if(err) return callback(err);
        return callback(null,info);
    });
});