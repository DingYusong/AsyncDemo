var fs = require('fs');
fs.readFile('./file1', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});




