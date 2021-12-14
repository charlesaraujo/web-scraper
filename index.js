const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const PORT = 8000;

const url = `https://www.uol.com.br/`;

axios(url).then((response) => {
  const html = response.data;

  const $ = cheerio.load(html);
  // const title =
  $(`.hyperlink.headlineMain__link`).each(function () {
    console.log(
      $(this).find(".title__element.headlineMain__title").text().trim()
    );
    console.log($(this).attr("href"));
  });
});

app.listen(PORT, () => console.log("runing on " + PORT));
