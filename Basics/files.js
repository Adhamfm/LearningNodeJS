// This is good for small files, not big files

const { error } = require('console');
const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('aasudifh');


// write files
fs.writeFile('./docs/blog1.txt', 'hi bosis', () => {
    console.log("File was written");
});
fs.writeFile('./docs/blog2.txt', 'hi bosis', () => {
    console.log("File was written");
});


// directiorses
if (!fs.existsSync("./assets")) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder was created")
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder removed");
    })
}

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', () => {
        if (err) {
            console.log(err);
        }
        console.log("File deleted");
    })
}