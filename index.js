import fs from 'node:fs';
import axios from 'axios';
import * as cheerio from 'cheerio';

const websiteURL = 'https://memegen-link-examples-upleveled.netlify.app/';
const folderName = './memes';

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName, { recursive: true });
}

// Function to scrape memes
const getDownloadedImages = async (url) => {
  try {
    const response = await axios.get(url);

    // Load the HTML
    const $ = cheerio.load(response.data);

    // Create Array to save URL
    const downloadedImages = [];

    // Find first 10 Images and push to Array
    $('img')
      .slice(0, 10)
      .each(function (i, elem) {
        const imageURL = $(elem).attr('src');
        downloadedImages.push(imageURL);
      });
    // Generate the file names
    let fileName = 1;
    for (const imageURL of downloadedImages) {
      fileName = fileName < 10 ? '0' + fileName : fileName;

      // Get Image with axios
      const imageResponse = await axios({
        method: 'get',
        url: imageURL,
        responseType: 'stream',
      });

      // Save image to file
      imageResponse.data.pipe(fs.createWriteStream(`./memes/${fileName}.jpg`));
      fileName++;
    }
    console.log('Download was successful');
  } catch (error) {
    console.error(error);
  }
};

console.log(getDownloadedImages(websiteURL));
