'use strict';
const qr = require('qr-image');
const fs = require('fs');

let dataToEndoce = process.argv[2] || null;
let outImage = process.argv[3] || null;

if (dataToEndoce != null && outImage !== null) {
    qr.image(dataToEndoce, { 
        type: 'png',
        size: 20
    }).pipe(fs.createWriteStream(outImage));

    console.log('QR Image Generated!');

} else {
    console.log('Please check the command line arguments!');
}