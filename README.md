# Web scraping with Puppeteer on Firebase Cloud Functions
* [Part 3](https://www.codebiddya.com/blog/view/5ca073aa4556090017e92dcc): Retrieve JSON objects from the url (provided by the firebase console) and store it in MongoDB.

### Instructions


   1. Clone the repository
      
   2. Go to scrapingPuppeteerFirebaseCF/functions directory and run the following command to install all the dependencies
   ```$ npm install```
   
   3. On the background run your mongodb
   
   4. Run the program with :  ```node fetch_and_save```
   
   5. To see what is stored in mongoDB :
   
      a. ```$ use scrapedData```
      
      b. ```$ db.test.find().pretty()```
