import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';
const folderName = './memes';

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName, { recursive: true });
}

const getDownloadedImages = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    let downloadedImages = [];
    $('img')
      .slice(0, 10)
      .each(function (i, elem) {
        let link = $(elem).attr('src');
        downloadedImages.push(link);
      });
    let fileName = 1;
    for (let i of downloadedImages) {
      fileName = fileName < 10 ? '0' + fileName : fileName;
      await fs.writeFileSync(`./memes/${fileName}.jpg`, i);
      fileName++;
    }
    console.log(downloadedImages);
  } catch (error) {
    console.error(error);
  }
  try {
  } catch (err) {
    console.error(err);
  }
};

console.log(getDownloadedImages(url));
