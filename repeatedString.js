`There is a string, 's' , of lowercase English letters that is repeated infinitely many times. Given an integer, 'n' , find and print the number of letter a's in the first 'n' letters of the infinite string.`



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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    const as = s.split("").filter(c => c === "a").length;
    const times = parseInt(n / s.length);
    const rest = n % s.length;

    const totalAs = times * as +
        s.slice(0, rest).split("").filter(c => c === "a").length

    return totalAs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}