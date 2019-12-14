const fs = require('fs');
const input = fs
    .readFileSync('input.txt', 'utf-8')
    .match(/.{1,150}/g);
var getCount = (element, char) => element.split(char).length - 1;
var image = [];
for (let i = 0; i < 6; i++) {
    image[i] = new Array(25);
}

function getIndex() {
    var digits = [];
    input.forEach((a, i) => digits.push(getCount(a, '0')));
    return digits.indexOf(Math.min(...digits));
}

function solve1() {
    index = getIndex();
    return getCount(input[index], '1') * getCount(input[index], '2');
}

function getPixel(i, j) {
    for (let a of input)
        if (a[i][j] != '2')
            return a[i][j];
}

function printImage() {
    var string = '';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 25; j++) {
            image[i][j] = getPixel(i, j);
            if (image[i][j] == 1)
                string += '# ';
            else
                string += '  ';
        }
        console.log(string);
        string = '';
    }
}

function solve2() {
    input.forEach((a, i) => input[i] = a.match(/.{1,25}/g));
    printImage();
}

console.log(solve1());
solve2();