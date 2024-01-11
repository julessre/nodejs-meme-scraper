import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

// const websiteHTML = await axios('https://memegen-link-examples-upleveled.netlify.app/',(
// );
// console.log(websiteHTML.data);

const url = 'https://memegen-link-examples-upleveled.netlify.app/';
// const downloadedImages = [];

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

// console.log(getDownloadedImages);
// console.log(downloadedImages);

// console.log(
// scrapeImages('https://memegen-link-examples-upleveled.netlify.app/'),
// );

// console.log(downloadedImages);

// const downloadImage = () =>
//   axios
//     .get('https://memegen-link-examples-upleveled.netlify.app/')
//     .then(({ data }) => cheerio.load('<img scr...>', null, false).text());

// console.log(downloadImage);

// async function downloadImage(url, filename) {
//   const response = await axios.get(url);

//   fs.writeFile(filename, response.data, (err) => {
//     if (err) throw err;
//     console.log('Image downloaded successfully!');
//   });
// }

// console.log(downloadImage);

// const downloadImages = (url, image_path) =>
//   axios({
//     url,
//     responseType: 'stream',
//   }).then(
//     (response) =>
//       new Promise((resolve, reject) => {
//         response.data
//           .pipe(fs.createWriteStream(image_path))
//           .on('finish', () => resolve())
//           .on('error', (e) => reject(e));
//       }),
//   );

// console.log(
//   downloadHTML(
//     'https://memegen-link-examples-upleveled.netlify.app/',
//     './memes',
//   ),
// );
