import fs from 'fs';
import csv from 'csvtojson';

const csvFilePath = './csv/node_mentoring_t1_2_input_example.csv';
const jsonFilePath = './csv/export.txt';

try {
    const readStream = fs.createReadStream(csvFilePath);
    const writeStream = fs.createWriteStream(jsonFilePath);

    readStream.pipe(csv()).pipe(writeStream);
} catch (err) {
    console.error(err);
}
