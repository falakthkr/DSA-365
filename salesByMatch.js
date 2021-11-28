`There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:
 n=7
 ar = [1,2,1,2,1,3,2]

There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

`;


'use strict';

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let count = 0;
    for (var i = 0; i < ar.length; i++) {
        let subCount = 0;
        for (var j = i + 1; j < ar.length; j++) {
            if (subCount < 1) {
                if (ar[i] == ar[j]) {
                    subCount++
                    ar.splice(j, 1)
                    count++
                }
            }
        }
    }
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}