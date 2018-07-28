const express = require('express');
const router = express.Router();

// @Route   GET api/users/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "user works"}));

module.exports = router;