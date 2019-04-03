# scrapingPuppeteerFirebaseCF

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
