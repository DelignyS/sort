import fs from 'fs/promises';
import readline from 'readline';
import bubbleSort from './bubbleSort.js';
import insertionSort from './insertionSort.js';
import selectionSort from './selectionSort.js';
import quickSort from './quickSort.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the name of the file to sort: ', async (fileName) => {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        let numbers = data.split(' ').map(Number);
        rl.question('Which sorting algorithm do you want to use? (bubble/insertion/selection/quick) ', (algorithm) => {
            let sortedNumbers;
            if (algorithm === 'bubble') {
                sortedNumbers = bubbleSort(numbers);
            } else if (algorithm === 'insertion') {
                sortedNumbers = insertionSort(numbers);
            } else if (algorithm === 'selection') {
                sortedNumbers = selectionSort(numbers);
            } else if (algorithm === 'quick') {
                sortedNumbers = quickSort(numbers);
            } else {
                console.log('Unknown algorithm. Please enter either "bubble", "insertion", "selection", or "quick".');
                rl.close();
                return;
            }
            console.log(sortedNumbers);
            rl.close();
        });
    } catch (err) {
        console.error(err);
        rl.close();
    }
});