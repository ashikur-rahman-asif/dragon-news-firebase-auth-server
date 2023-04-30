const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 5000

const catagories = require('./data/catagories.json')
app.use(cors())
app.get('/', (req, res) => {
  res.send('The dragon news server running,,,')
})
app.get('/catagories', (req, res) => {
    res.send(catagories)
})
app.listen(port, () => {
  console.log(`The dragon news api server running,,,' ${port}`)
})