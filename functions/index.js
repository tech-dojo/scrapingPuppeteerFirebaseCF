// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
const scraper = require('./scraper')

const app = express()

app.use(cors({origin: true}))

app.get('/scrape', (req, res) => {
  scraper(res)
})

exports.api = functions
  .runWith({memory: '1GB'})
  .https.onRequest((request, response) => {
    return app(request, response)
  })
