require("dotenv").config();
var express = require('express');
var router = express.Router();
const request = require('request');
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const rp = require('minimal-request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  console.log(PAGE_ACCESS_TOKEN);
});

// Adds support for GET requests to our webhook
router.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "Viteh"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Creates the endpoint for our webhook 
router.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the body of the webhook event
      let webhook_event = entry.messaging[0];
    
      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        rp.get(`https://graph.facebook.com/v2.6/${sender_psid}?fields=first_name&access_token=${PAGE_ACCESS_TOKEN}`)
        .then(response => {
          const user = JSON.parse(response.body)
          handleMessage(sender_psid, webhook_event.message, user);     
        })   
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Handles messages events
function handleMessage(sender_psid, received_message, user) {
  let response;
  // Check if the message contains text
  if (received_message.text) {    
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": `Hello ${user.first_name}, what do you need today?`,
            "subtitle": "Tap a button to answer.",
            "image_url": "https://i.ytimg.com/vi/KPV0dvbvyF0/maxresdefault.jpg",
            "buttons": [
              {
                "type": "postback",
                "title": "Best Zone",
                "payload": "Zone",
              },
              {
                "type": "postback",
                "title": "My progress",
                "payload": "Target",
              }
            ],
          }]
        }
      }
  } 
} else {
  console.log(received_message.attachments[0].payload.coordinates)
}
  // Sends the response message
  callSendAPI(sender_psid, response);   
}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {
  let response;
  
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'Zone') {
    response = { "text": "Right now X is the better zone!" }
  } else if (payload === 'Target') {
    response = { "text": "You have made 300 pesos tonight, 75% of your target" }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
   // Construct the message body
   let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 

}

module.exports = router;
