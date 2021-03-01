const block = [
    [
        [
            0b0100,
            0b0100,
            0b0100,
            0b0100,
        ],
        [
            0b0000,
            0b1111,
            0b0000,
            0b0000,
        ],
    ],
    [
        [
            0b0000,
            0b1110,
            0b0010,
            0b0000,
        ],
        [
            0b0000,
            0b0110,
            0b0100,
            0b0100,
        ],
        [
            0b0000,
            0b0100,
            0b0111,
            0b0000,
        ],
        [
            0b0010,
            0b0010,
            0b0110,
            0b0000,
        ],
    ],
    [
        [
            0b0000,
            0b0010,
            0b1110,
            0b0000,
        ],
        [
            0b0000,
            0b0110,
            0b0010,
            0b0010,
        ],
        [
            0b0000,
            0b0111,
            0b0100,
            0b0000,
        ],
        [
            0b0100,
            0b0100,
            0b0110,
            0b0000,
        ],
    ],
    [
        [
            0b0100,
            0b0110,
            0b0100,
            0b0000,
        ],
        [
            0b0100,
            0b1110,
            0b0000,
            0b0000,
        ],
        [
            0b0100,
            0b1100,
            0b0100,
            0b0000,
        ],
        [
            0b0000,
            0b1110,
            0b0100,
            0b0000,
        ],
    ],
    [
        [
            0b0000,
            0b1100,
            0b0110,
            0b0000,
        ],
        [
            0b0010,
            0b0110,
            0b0100,
            0b0000,
        ],
    ],
    [
        [
            0b0000,
            0b0110,
            0b1100,
            0b0000,
        ],
        [
            0b0100,
            0b0110,
            0b0010,
            0b0000,
        ],
    ],
    [
        [
            0b0000,
            0b0110,
            0b0110,
            0b0000,
        ],
    ],
];
const GAME_WIDTH  =  10;
const GAME_HEIGHT =  20;
const CELL_SIZE   =  32;
const BGCOLOR     = 102;
const GRIDCOLOR   = 153;
let board = Array(GAME_HEIGHT);
let level, score;

function drawcell(x, y, c)
{
    noStroke();
    if (c) {
        fill((floor(random(5)) + 1) * 51, (floor(random(5)) + 1) * 51, (floor(random(5)) + 1) * 51);
    } else {
        fill(BGCOLOR);
    }
    rect((x + 1) * CELL_SIZE + 1, (y + 1) * CELL_SIZE + 1, CELL_SIZE - 2, CELL_SIZE - 2);
}

function drawblock(shape, rotation, x, y)
{
    let i, j, col, row = y, b = block[shape][rotation];

    for (i = 0; i < 4; ++i) {
        if (row >= 0 && row < GAME_HEIGHT) {
            col = x;
            for (j = 8; j > 0; j >>= 1) {
                if (col >= 0 && col < GAME_WIDTH) {
                    drawcell(col, row, b[i] & j);
                }
                ++col;
            }
        }
        ++row;
    }
}

function reset()
{
    let i;

    // Clear
    background(BGCOLOR);

    // Grid
    stroke(GRIDCOLOR);
    strokeWeight(1);
    noFill();
    for (i = 0; i <= GAME_WIDTH + 2; ++i) {
        line(i * CELL_SIZE, 0, i * CELL_SIZE, height - 1);
    }
    for (i = 0; i <= GAME_HEIGHT + 2; ++i) {
        line(0, i * CELL_SIZE, width - 1, i * CELL_SIZE);
    }

    // Game
    for (i = 0; i < GAME_HEIGHT; ++i) {
        board[i] = 0;
    }    
    level = 0;
    score = 0;
}    

function setup()
{
    createCanvas((GAME_WIDTH + 2) * CELL_SIZE + 1, (GAME_HEIGHT + 2) * CELL_SIZE + 1);
    frameRate(1);
    reset();
}

function draw()
{
    const b = floor(random(block.length));
    const r = floor(random(block[b].length));
    drawblock(b, r, 3, 3);
}
