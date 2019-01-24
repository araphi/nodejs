var fs = require("fs");
fs.appendFile('ukinode.txt', 'Uki is a coding school',
function (err) {
  if (err) throw err;
  console.log('Saved!');
});
