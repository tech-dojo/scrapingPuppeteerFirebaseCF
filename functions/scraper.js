const puppeteer = require('puppeteer')
const $ = require('cheerio')

const url = 'https://www.reddit.com/'

const DailyNews = function(res) {
  var reddit = {
    headlines: [],
  }

  return puppeteer
    .launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    .then(function(browser) {
      browser
        .newPage()
        .then(function(page) {
          page
            .goto(url, {
              waitUntil: 'load',
              timeout: 300000,
            })
            .then(function() {
              page
                .content()
                .then(function(content) {
                  $('h2', content).each(function() {
                    let headline = $(this).text()
                    console.log(headline)
                    reddit.headlines.push(headline)
                  })
                  browser.close()
                  res.json(reddit)
                })
                .catch(function(error) {
                  console.log('reddit content error')
                  console.log(error)
                })
            })
            .catch(function(error) {
              console.log('reddit goto error')
              console.log(error)
            })
        })
        .catch(function(error) {
          console.log('reddit newpage error')
          console.log(error)
        })
    })
    .catch(function(error) {
      console.log('inside reddit')
      console.log(error)
    })
}

module.exports = DailyNews
