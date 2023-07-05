const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        [this._row, this._col] = (() => {
            for (let i = 0; i < field.length; i++) {
                for (let j = 0; j < field[0].length; j++) {
                    if (field[i][j] === pathCharacter) {
                        return [i, j];
                    }
                }
            }
        })();
        this._length = field[0].length;
        this._width = field.length;
        this._gameHasEnded = false;
    }

    get gameHasEnded() {
        return this._gameHasEnded;
    }

    static generateField(length, width, numOfHoles) {
        const field = [];
        let row;
        let col;

        // Generate empty field
        for (let i = 0; i < width; i++) {
            field.push([]);
            for (let j = 0; j < length; j++) {
                field[i].push(fieldCharacter);
            }
        }

        // Generate starting position
        do {
            row = Math.floor(Math.random() * width);
            col = Math.floor(Math.random() * length);
        }
        while (field[row][col] !== fieldCharacter);
        field[row][col] = pathCharacter;

        // Generate hat position
        do {
            row = Math.floor(Math.random() * width);
            col = Math.floor(Math.random() * length);
        }
        while (field[row][col] !== fieldCharacter);
        field[row][col] = hat;

        // Generate positions of holes
        let i = 0;
        while (i < numOfHoles) {
            do {
                row = Math.floor(Math.random() * width);
                col = Math.floor(Math.random() * length);
            }
            while (field[row][col] !== fieldCharacter);
            field[row][col] = hole;
            i++;
        }

        return new Field(field);
    }

    print() {
        for (const row of this._field) {
            console.log(row.join(''));
        }
    }

    updateField(row, col) {
        if (row < 0 || col < 0 || row >= this._width || col >= this._length) {
            this._gameHasEnded = true;
            return 'LOSE: You fell off the map!';
        }
        else if (this._field[row][col] === hole) {
            this._gameHasEnded = true;
            return 'LOSE: You fell into a hole!';
        }
        else if (this._field[row][col] === hat) {
            this._gameHasEnded = true;
            return 'WIN: You found your hat!'
        }
        else {
            this._row = row;
            this._col = col;
            this._field[row][col] = pathCharacter;
            return '';
        }
    }

    headUp() {
        return this.updateField(this._row - 1, this._col);
    }

    headDown() {
        return this.updateField(this._row + 1, this._col);
    }

    headLeft() {
        return this.updateField(this._row, this._col - 1);
    }

    headRight() {
        return this.updateField(this._row, this._col + 1);
    }
}

let dir;
const field = Field.generateField(9, 9, 12);

while (!field.gameHasEnded) {
    field.print();
    dir = prompt('Which way? [u|d|l|r]: ');
    switch (dir) {
        case 'u':
            // Heading up
            console.log(field.headUp());
            break;
        case 'd':
            // Heading down
            console.log(field.headDown());
            break;
        case 'l':
            // Heading left
            console.log(field.headLeft());
            break;
        case 'r':
            // Heading right
            console.log(field.headRight());
            break;
        default:
            console.log('Not a valid direction');
            break;
    }
}