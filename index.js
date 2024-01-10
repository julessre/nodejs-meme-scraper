import axios from 'axios';

const websiteHTML = await axios(
  'https://memegen-link-examples-upleveled.netlify.app/',
);

console.log(websiteHTML.data);
