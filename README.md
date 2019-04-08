# Web scraping with Puppeteer on Firebase Cloud Functions
Refer to our Blogs on [CodeBiddya](https://www.codebiddya.com/) for step by step tutorial - **Web Scraping and Storing Data: Puppeteer, Firebase and MongoDB**.
* [Part 1](https://www.codebiddya.com/blog/view/5ca070934556090017e92dc8) outlines how to deploy cloud functions in Firebase. 
* [Part 2](https://www.codebiddya.com/blog/view/5ca06cfa4556090017e92dc0) demonstrates how to extract data from HTML page, a technique commonly known as web scraping.
* [Part 3](https://www.codebiddya.com/blog/view/5ca073aa4556090017e92dcc) shows how to retrieve JSON objects from the url (provided by the firebase console) and store it in your MongoDB.

After cloning the repository go to **scrapingPuppeteerFirebaseCF/functions** directory and run the following command to install all the dependencies

```$ npm install```

Login to firebase

```$ firebase login```

   1. To view list of available projects: 
   
   ```$ firebase list``` 
      
   or create a new project in your firebase console
      
   2. To select a project: 
   
   ```$ firebase use <project_id>``` 
   
Puppeteer requires more than **250 MB** memory allocation allowed by default in the firebase spark plan.

To initialize Firebase Cloud Functions

 ```$ firebase deploy```
