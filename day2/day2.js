const fs = require('fs');
const text = fs.readFileSync('input.txt', 'utf-8').split(',');
var _input = text.map((x) => parseInt(x));

function getFirstElement(x, y) {
    var input = [..._input];
    input[1] = x;
    input[2] = y;
    let a, b, c;

    for (let i = 0; i < input.length; i += 4) {
        a = input[i + 1];
        b = input[i + 2];
        c = input[i + 3];

        if (input[i] == 1)
            input[c] = input[a] + input[b];
        else if (input[i] == 2)
            input[c] = input[a] * input[b];
        else if (input[i] == 99)
            break;
    }
    return input[0];
}

function getNumber(num) {
    for (let noun = 0; noun <= 99; noun++)
        for (let verb = 0; verb <= 99; verb++)
            if (getFirstElement(noun, verb) == num)
                return 100 * noun + verb;
}
//  part1
console.log(getFirstElement(12, 2));
//  part 2
console.log(getNumber(19690720));