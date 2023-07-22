// We use Streams when the data is too big so it takes much longer time till it is loaded
// Streams allows us to use the data before it is fully loaded

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
    console.log('----NEW CHUNK-----');
    console.log(chunk);
    writeStream.write('\n\n\n\n\nNEW CHUNK\n');
    writeStream.write(chunk);
});

// piping
readStream.pipe(writeStream); // read then write (similar to what happens up)