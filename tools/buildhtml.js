import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf-8', (err, markup)=>{
  if(err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  //since a separate spreadsheet is only utilized for the production build, need to dynamical

  $('head').prepend('<link rel="stylesheet" href="style.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf-8', function (err) {
    if(err) {
      return console.log(err);
    }

    console.log('index.html written to /dist'.green);

  });

});
