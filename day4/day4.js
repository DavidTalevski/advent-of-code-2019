const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('-');
var passwords = 0;

function getPasswords(from, to) {
    for (let i = from; i <= to; i++)
        checkPassword(i);

    return passwords;
}

function checkPassword(num) {
    let isDouble = false;
    let pair = false;
    let pass = num.toString();
    for (let i = 1; i <= pass.length; i++) {
        if (pass[i - 1] == pass[i]) {
            isDouble = true;
            if (pass[i] != pass[i + 1] && pass[i] != pass[i - 2])
                pair = true;
        }
        if (pass[i - 1] > pass[i])
            return;
    }
    if (!isDouble)
        return;
    else
        checkPart(pair);
}

function checkPart(pair) {
    if (part == 2) {
        if (pair)
            passwords++;
    } else passwords++;
}

var part = 1; // part = 2
console.log(getPasswords(parseInt(input[0]), parseInt(input[1])));