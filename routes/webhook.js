var express = require('express');
var router = express.Router();
const Function = require('../services/function')

/* webhook. */
router.get('/', async function (req, res, next) {
  res.status(200).send({ "message": "Ok" })
});
router.post('/', async function (req, res, next) {
  const body = req.body //get body from prometheus
  const header = req.headers.authorization //get header bearer token line from webhook
  try{
  if (body.status == 'firing') {
    for (const alert of body.alerts) {
      if (alert.status == 'firing') {
        const message = `\njob: ${alert.labels.job} \n${alert.annotations.description}`
        await Function.sendToLine(header,message)
      } else if (alert.status == 'resolved') {
        const message = `\njob: ${alert.labels.job} \n${alert.annotations.description}`
        await Function.sendToLine(header,message)
      }
      else {
        console.log(null)
      }
    }
  } else if (body.status == 'resolved') {
    for (const alert of body.alerts) {
      if (alert.status == 'firing') {
        const message = `\njob: ${alert.labels.job} \n${alert.annotations.description}`
        await Function.sendToLine(header,message)
      } else if (alert.status == 'resolved') {
        const message = `\njob: ${alert.labels.job} \n${alert.annotations.description}`
        await Function.sendToLine(header,message)
      }
      else {
        console.log(null)
      }
    }
  } else {
    console.log(null)
  }
  res.status(200).send({ "message": "Ok" })
}catch(error){
  res.status(200).send({"error": `${error.message}`})
}
});

module.exports = router;
