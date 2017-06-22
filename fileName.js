var fileName = process.argv[2];
var fs = require('fs')
fs.readFile(fileName, function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("File read: " + data.toString());
});
