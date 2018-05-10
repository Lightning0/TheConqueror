import * as p5 from './p5';
import { getTheMap } from './map'
import { drawMap } from './drawMap';
import { drawInventory } from './drawInventory';
import { drawGuy } from './drawGuy';
import { drawEnemies } from './drawEnemies';
import { drawHealth } from './drawHealth';
import { updateGuy } from './updateGuy';
import { updateEnemies } from './updateEnemies';
import { BS, SPEED, WIDTH_UNITS, HEIGHT_UNITS } from './constants';
import { resolveHealth } from './resolveHealth';

let player = {};
let enemies = [];
let map = [];
let startCorner = { row: 0, col: 0 };
let frame = 0;

const sketch = p5 => {
    p5.setup = () => {
        p5.createCanvas(BS * WIDTH_UNITS, BS * HEIGHT_UNITS);
        map = getTheMap();
        p5.strokeWeight(0);

        player = {
            inventory: [],
            xpos: 16 * 12,
            ypos: 16 * 8,
            width: BS,
            height: BS,
            maxHealth: 100,
            health: 100,
            color: 'white',
            type: 'player',
            speed: 16,
            attack: 2
        }

        enemies.push({
            inventory: [],
            xpos: BS * 12,
            ypos: BS * 10,
            width: BS,
            height: BS,
            maxHealth: 25,
            health: 25,
            color: 'blue',
            type: 'enemy',
            speed: 2,
            attack: 1
        })

        enemies.push({
            inventory: [],
            xpos: BS * 5,
            ypos: BS * 10,
            width: BS,
            height: BS,
            maxHealth: 25,
            health: 25,
            color: 'blue',
            type: 'enemy',
            speed: 2,
            attack: 1
        })
    }

    p5.draw = () => {
        p5.background(0);
        startCorner = drawMap(p5, map, startCorner, player);
        drawGuy(p5, player);
        updateGuy(p5, player, map, startCorner, frame);
        drawEnemies(p5, enemies);
        updateEnemies(p5, enemies, map, startCorner);
        resolveHealth(player, enemies);
        drawHealth(p5, player);
        drawInventory(p5, player.inventory);
        ++frame;
        frame = frame % 4;
    }
}

const P5 = new p5(sketch);
