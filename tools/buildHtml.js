import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, markup) => {
    if (err) {
        return console.log(err + '1 build');
    }

    const $ = cheerio.load(markup);

    $('head').prepend('<link rel="stylesheet href="stylesheet.css">' );

    fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
        if (err) {
            return console.log(err + '2 build');
        }

        console.log('index.html written to /dist'.green);
    });
});