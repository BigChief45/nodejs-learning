var fs = require('fs');
var data = 'Est praesentium eos at recusandae consequatur.';

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');

// Marks end of file
writerStream.end();

writerStream.on('finish', function() {
    console.log('Write completed.');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('\nProgram has ended.');