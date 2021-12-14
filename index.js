const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const PORT = 8000;

const url = `https://www.uol.com.br/`;

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const noticias = [];

    $(`.hyperlink.headlineMain__link`).each(function () {
      const link = $(this).attr("href");
      const titulo = $(this)
        .find(".title__element.headlineMain__title")
        .text()
        .trim();

      noticias.push({ titulo, link });

      console.log(noticias);
    });
  })
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log("runing on " + PORT));
