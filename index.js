import axios from 'axios';

const websiteURL = axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {});

console.log(websiteURL);
