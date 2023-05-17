const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello API');
});

router.get('/health-check', (req, res) => {
	res.status(200).send('OK');
});

module.exports = router;
