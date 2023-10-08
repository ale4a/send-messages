require('dotenv').config()

const sendMessages = (message, phone) => {
    const SID = process.env.SID;
    const AUTH_TOKEN = process.env.AUTH_TOKEN;
    const PHONE = process.env.PHONE;
    const client = require("twilio")(SID, AUTH_TOKEN);
    client.messages
        .create({
        body: message,
        from: PHONE,
        to: phone
        })
        .then(message => {
            console.log(message.sid);
            console.log(message.error_code || 'no error');
        });
}

module.exports = {
    sendMessages
};