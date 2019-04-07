const mongo = require('mongodb')
const request = require('request')

let url = 'https://us-central1-scrapingdemo-92341.cloudfunctions.net/api/scrape'
let db_url = "mongodb://localhost:27017"
var db

mongo.MongoClient.connect(db_url,
    { useNewUrlParser: true }, (err, client) => {
        if (err) {
            console.log('Could not connect to MongoDB')
        } else {
            console.log('Connected to MongoDB')
            db = client.db('scrapedData')
            db.createCollection('test', (err, collection) => {
                console.log("Creating collection...")
                if (err) {
                    console.log("Error: ", err)
                }
                else {
                    fetchData()
                }
            })
        }
    })


const save = (data) => {
    console.log("Saving to mongoDB...")
    let collection = db.collection('test')
    collection.insertOne(JSON.parse(data)).then(() => {
        console.log("Data has been saved to mongoDB")
    })

}

const fetchData = () => {
    console.log("Fetching data...")
    request(url, (err, res, body) => {

        if (res.statusCode == 200) {
            save(body)
        }

        else {
            console.log("Something went wrong!")
        }

    })

}