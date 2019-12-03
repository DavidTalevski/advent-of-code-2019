const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
var marks = [];
var steps = 0;

var matrix = [{
    x: 0,
    y: 0
}];
var point = {
    x: 0,
    y: 0
}
var getDistance = (obj1, obj2) => Math.abs(obj2.x - obj1.x) + Math.abs(obj2.y - obj1.y);

function populate(part) {
    let direction, distance;
    for (let id = 0; id <= 1; id++) {
        let _input = [...input[id].split(',')]
        for (let i = 0; i < _input.length; i++) {
            distance = _input[i];
            direction = distance[0];
            distance = parseInt(distance.slice(1));
            checkMatrix(direction, distance, id);
        }
        steps = 0;
        point.x = 0;
        point.y = 0;
    }
    if (part == 'part1')
        return findNearestX();
    else
        return findLeastStepsX();
}

function checkMatrix(direction, distance, wire) {
    for (let i = 0; i < distance; i++) {
        if (direction == 'U')
            point.y++;
        else if (direction == 'D')
            point.y--;
        else if (direction == 'L')
            point.x--;
        else // if (direction == 'R')
            point.x++;
        steps++;
        markMatrix(wire);
    }
}

function markMatrix(wire) {
    for (let i = 0; i < matrix.length; i++)
        if (matrix[i].x == point.x &&
            matrix[i].y == point.y &&
            wire != matrix[i].wire) {
            marks.push({
                x: point.x,
                y: point.y,
                steps: steps + matrix[i].steps
            })
            return;
        }

    matrix.push({
        x: point.x,
        y: point.y,
        wire: wire,
        steps: steps
    })
}

function findNearestX() {
    let matches = []
    for (let i = 0; i < marks.length; i++)
        matches.push(getDistance(matrix[0], marks[i]));

    return Math.min(...matches);
}

function findLeastStepsX() {
    let matches = []
    for (let i = 0; i < marks.length; i++)
        matches.push(marks[i].steps);

    return Math.min(...matches);
}

console.log(populate('part1'));
console.log(populate('part2'));