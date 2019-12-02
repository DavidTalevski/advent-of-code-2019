const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

var calculate = num => Math.floor(num / 3) - 2;

let sum_part1 = 0,
    sum_part2 = 0,
    fuel;
for (let i = 0; i < input.length; i++) {
    fuel = calculate(input[i]);
    sum_part1 += fuel;
    while (true) {
        fuel = calculate(fuel);
        if (fuel <= 0)
            break;
        sum_part2 += fuel;
    }
}
//  part1
console.log(sum_part1);

//  part2
console.log(sum_part2 + sum_part1);