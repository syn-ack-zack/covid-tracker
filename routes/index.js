var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

module.exports = router;
