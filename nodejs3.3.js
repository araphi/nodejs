var fs = require('fs');
fs.appendFile('ukinode.txt','uki is situvated in Nallur,Jaffna. It is a full stack development course for 6 months.There are two clubs. They are gavel club and fitness club.',
function (err){
  if (err) throw err;
  console.log('Updated!');
});
