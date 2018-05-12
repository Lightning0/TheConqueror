import * as p5 from './p5';
import { BS } from './constants';
const bs = BS + 4;
const beginBtn = document.querySelector('#begin-btn');
const mapHeight = document.querySelector('#map-height');
const mapWidth = document.querySelector('#map-width');
const w = document.querySelector('#w');
const i = document.querySelector('#i');
const m = document.querySelector('#m');
const s = document.querySelector('#s');
const o = document.querySelector('#o');
const playBtn = document.querySelector('#play-btn');

let height, width, P5;
let gridArray = [];
let currentBlockType = 'w';

beginBtn.addEventListener('click', e => {
    if (P5 !== undefined) P5.remove();
    P5 = new p5(sketch, 'grid');
})

w.addEventListener('click', e => {
    currentBlockType = 'w';
})

i.addEventListener('click', e => {
    currentBlockType = 'i';
})

m.addEventListener('click', e => {
    currentBlockType = 'm';
})

s.addEventListener('click', e => {
    currentBlockType = 's';
})

o.addEventListener('click', e => {
    currentBlockType = '0';
})

playBtn.addEventListener('click', e => {
    playGame();
})

const playGame = () => {
    localStorage.setItem("map", JSON.stringify(gridArray));
    window.location.href = 'index.html';
}

const sketch = p5 => {
    p5.setup = () => {
        height = mapHeight.value;
        width = mapWidth.value;
        const can = p5.createCanvas(bs * width + 1, bs * height + 1);
        can.mousePressed(() => {
            let col = Math.floor(p5.mouseX / bs);
            let row = Math.floor(p5.mouseY / bs);
            gridArray[row][col] = currentBlockType;
        })

        for (let j = 0; j < height; ++j) {
            let oneRow = [];
            for (let i = 0; i < width; ++i) {
                if (i === 0 || i === 1 || i === width - 1 || i === width - 2
                    || j === 0 || j === 1 || j === height - 1 || j === height - 2)
                    oneRow[i] = 'w';
                else oneRow[i] = '0';
            }

            gridArray[j] = oneRow.slice();
        }
    }

    p5.draw = () => {
        for (let j = 0; j < height; ++j) {
            for (let i = 0; i < width; ++i) {
                if (gridArray[j][i] === 'w') p5.fill('green');
                if (gridArray[j][i] === 'i') p5.fill('yellow');
                if (gridArray[j][i] === 'm') p5.fill('purple');
                if (gridArray[j][i] === 's') p5.fill('pink');
                if (gridArray[j][i] === '0') p5.fill('white');
                p5.rect(i * bs, j * bs, bs, bs);
                p5.fill('white');
            }
        }
    }
}