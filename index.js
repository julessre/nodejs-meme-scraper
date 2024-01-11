import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

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
    console.log(downloadedImages);
  } catch (error) {
    console.error(error);
  }
};

console.log(getDownloadedImages(url));

 try {
      if (!fs.existsSync('./meme_folder')) {
        fs.mkdirSync('./meme_folder');
      }
    } catch (err) {
      console.error(err);
    }
    let count = 1;
    const downloadJpg = async (url) => {
      const pic = await fetch(url);
      const buffer = await pic.buffer();
      await fs.promises.writeFile(`./meme_folder/${count}image.jpg`, buffer);
      console.log(`Pictures downloaded: ${count}`);
      count++;
    };
    const downloadJpgInit = async () => {
      for (const url of arr10) {
        await downloadJpg(url);
      }
    };

    downloadJpgInit();
  } catch (error) {
    console.log(error);
  }
};
