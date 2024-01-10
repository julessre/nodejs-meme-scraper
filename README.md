## Node.js Meme Scraper

Create a cli (Command Line Interface) application that scrapes the current version of this website:

memegen-link-examples-upleveled.netlify.app

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. 01.jpg, 02.jpg, etc.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you (eg. do not use image-downloader or nodejs-file-downloader or similar) - break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.

## To Dos

- [x] Create a Node.js CLI application
  - [x] Add `.gitignore` file with the content from cheatsheet
  - [x] Add "memes" folder to `.gitignore`
- [x] Create a directory named "memes"
- [ ] Research for libraries
  - [x] Avoid libraries that do multiple steps
- [ ] Connect to the current version of the website https://memegen-link-examples-upleveled.netlify.app/
  - [ ] Avoid any caching?
- [ ] Download HTML string from the website and save in a variable
- [ ] Search inside HTML string for `<img src="..." />` and extract to array of URLs (strings)
  - [ ] Maybe inside of the `<section id="images">`?
- [ ] Extract first 10 URLs from array
- [ ] Loop over array of first 10 URLs and:
  - [ ] Download the image data (string)
  - [ ] Generate path in the "memes" folder (eg. `./memes/03.jpg`)
    - [ ] 1-10
    - [ ] double digits
    - [ ] `.jpg`
  - [ ] Create an empty file with the path
  - [ ] Put the image data into the file
- [ ] Test it multiple times
- [ ] Set up the test

> Scraping a web page involves fetching it and extracting from it. Fetching is the downloading of a page (which a browser does when a user views a page).

https://en.wikipedia.org/wiki/Web_scraping#:~:text=Scraping%20a%20web%20page%20involves,fetched%2C%20extraction%20can%20take%20place.
