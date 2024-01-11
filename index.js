import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const getDownloadedImages = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const downloadedImages = [];
    $('img').each(function (i, elem) {
      let link = $(elem).attr('src');
      downloadedImages.push(link);
    });
    console.log(downloadedImages);
  } catch (error) {
    console.error(error);
  }
};

console.log(getDownloadedImages(url));
