var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.status(200).send({"message": "Ok"})
});
router.post('/', async function(req, res, next) {
  const body = req.body
  console.log(body)
  res.status(200).send({"message": "Ok"})
});

module.exports = router;
