/* Piping is a mechanism where we provide the output of one stream as the input
 to another stream. It is normally used to get data from one stream and to pass
 the output of that stream to another stream. There is no limit on piping
 operations.
*/

var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

// Read from input.txt and pipe to output.txt
readerStream.pipe(writerStream);

console.log('\nProgram has ended.');