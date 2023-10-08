
const express = require('express');
const mapUtils = require('../utils.js');
const sendMessages = require('../send-messages.js')
const router = express.Router()

router.get('/send-message/', async (req, res) => {
    const longitude = req.query.lat;
    const latitude = req.query.long
    const contacts = mapUtils.getContactsInSameQuadrant(longitude, latitude)
    
    if(contacts.length != 0) {
        contacts.map(contact => {
            sendMessages.sendMessages('Peligro', contact)
        })
    }
})

module.exports = router;