const fs = require('fs');
  
let data = "Learning how to write in a file.";
  
fs.writeFile('Output.json', data, (err) => { 
      
    if (err) throw err; 
})