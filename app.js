const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const encrypt = require('./encryptHelper')
const decrypt = require('./decryptHelper')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + '/dist/'))

app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
})

app.post('/encrypt', function(req, res) {
  const text = req.body.text
  const password = req.body.password
  let encryptRes
  encryptRes = encrypt(text, password)
  res.send(encryptRes)
})

app.post('/decrypt', function(req, res) {
  const text = req.body.text
  const password = req.body.password
  let decryptRes
  decryptRes = decrypt(text, password)
  res.send(decryptRes)
})

app.listen(process.env.PORT || 3000)