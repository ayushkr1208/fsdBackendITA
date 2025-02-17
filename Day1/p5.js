const fs = require('fs')
const write =()=>{
    fs.writeFile('file.txt', 'Hello World!', (err) => {
        if (err) throw err;
        console.log('File written successfully.');
        });
}
write();