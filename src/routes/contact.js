const express = require('express');
const emails = require('../emails');

const router = new express.Router();

router.post('/send', (req, res) => {
	try {
		// TODO Use user message
		emails.replyMail(req.body.first_name, req.body.email);

		res.send();
	} catch (error) {
		res.status(400).send();
	}
});

module.exports = router;
