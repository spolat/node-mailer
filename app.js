const express = require('express'),
      bodyParser = require('body-parser'),
      logger = require('morgan'),
      emailSender = require('./utils/mailSender'),
      config = require('config'),
      app = express(),
      port = config.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(logger('dev'));

app.post('/sendMail', (req,res) => {
    emailSender(req.body.to,req.body.subject,req.body.body, (err,result) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(result);
    });
});



app.listen(port, () => {
    console.log('App listening on port: ' + port);
});

