/* Chaining is a mechanism to connect the output of one stream to another
    stream and create a chain of multiple stream operations.
*/

var fs = require('fs');
var zlib = require('zlib');

// Compress input file
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File compressed.');

// Decompress the file
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('File decompressed.');