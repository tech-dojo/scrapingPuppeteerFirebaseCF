const mongo = require('mongodb');
const request = require('request');

let url = 'https://us-central1-scrapingdemo-92341.cloudfunctions.net/api/scrape'
let db_url = "mongodb://localhost:27017"
var db
mongo.MongoClient.connect(db_url,
    { useNewUrlParser: true }, function (err, client) {
        if (err) {
            console.log('Could not connect to MongoDB')
        } else {
            console.log('Connected to MongoDB')
         db = client.db('scrapedData')
            db.createCollection('test', function (err, collection) {
                if (err) {
                    console.log("Error: ", err)
                }
            });

        }
    })


const save = (form_data) => {

    let collection = db.collection('test')
    collection.insertOne(form_data)

}


request(url, { json: true }, (err, res, body) => {

    if (err) { return console.log(err); }
    console.log(body)
    save(body)

})