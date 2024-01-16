import fs from 'fs/promises';
import readline from 'readline';
import bubbleSort from './bubblesort.js';
import insertionSort from './insertionsort.js';
import selectionSort from './selectionsort.js';
import quickSort from './quicksort.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the name of the file to sort: ', async (fileName) => {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        let numbers = data.split(' ').map(Number);
        rl.question('Which sorting algorithm do you want to use? (bubble/insertion/selection/quick) ', (algorithm) => {
            let result;
            if (algorithm === 'bubble') {
                result = bubbleSort(numbers);
            } 
            else if (algorithm === 'insertion') {
                result = insertionSort(numbers);
            } 
            else if (algorithm === 'selection') {
                result = selectionSort(numbers);
            } 
            else if (algorithm === 'quick') {
                result = quickSort(numbers);
            }
            else {
                console.log('Unknown algorithm. Please enter either "bubble", "insertion", "selection", or "quick".');
                rl.close();
                return;
            }
            console.log(`Number of comparisons: ${result.comparisons}`);
            console.log(result.sortedArray);
            rl.close();
        });
    } catch (err) {
        console.error(err);
        rl.close();
    }
});