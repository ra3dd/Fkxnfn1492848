const request = require('request');
const token = process.env.token;

const payload = {
   'content': 'ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk    ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmkksmk  ksmk  ksmk  ksmk  ksmk @حسين '
};

const header = {
  'authorization': token
};

function sendRequest() {
  request.post('https://discord.com/api/v9/channels/1157797949829554286/messages?limit=50', {
    headers: header,
    json: payload
  }, (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log(body);
    setTimeout(sendRequest, 10);
  });
}

sendRequest();
const express = require("express")
const app = express();

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>فتح كسم حسين و ابليس و مشتقاتهم </h1></center
  </body>`)
});
