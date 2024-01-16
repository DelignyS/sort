import fs from 'fs/promises';
import readline from 'readline';
import bubbleSort from './bubblesort.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the name of the file to sort: ', async (fileName) => {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        let numbers = data.split(' ').map(Number);
        let sortedNumbers = bubbleSort(numbers);
        console.log(sortedNumbers);
    } catch (err) {
        console.error(err);
    }
    rl.close();
});