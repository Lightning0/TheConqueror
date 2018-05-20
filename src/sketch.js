import { origWidth, origHeight } from './constants';
import { drawEnemies } from './drawEnemies';
import { drawPlayers } from './drawPlayers';
import { drawHealth } from './drawHealth';
import { drawInventory } from './drawInventory';
import { drawVisibleItems } from './drawVisibleItems';
import { shiftView } from './shiftView';
import { updateGuy } from './updateGuy';
import { performClickAction } from './performClickAction';
import { getState, setState } from './globalState';
import { drawLayout } from './drawLayout';
import { glide } from './glide';
import { createCharacterGrobs, drawCharacterGrobs, drawBackground } from './graphicsHelpers';

export const initSketch = socket =>
    p5 => {
        p5.preload = () => {
            setState({
                images: p5.loadImage("sprites1.png"),
                enemyImages: p5.loadImage("monsterSprites.png"),
                mapImage: p5.loadImage("map.png"),
                itemImage: p5.loadImage("items.png"),
                startMenuImage: p5.loadImage("startMenu.png")
            })
        }

        p5.setup = () => {
            const can = p5.createCanvas(origWidth, origHeight);
            can.mousePressed(() => performClickAction(p5, socket))
            p5.textAlign(p5.CENTER, p5.CENTER);
            createCharacterGrobs(getState().graphicsObjects, p5);
        }

        p5.draw = () => {
            let { startMenuImage, state, images, graphicsObjects } = getState();
            if (state === 'STARTMENU') {
                p5.background('#009955');
                p5.image(startMenuImage, 0, 0, p5.width, p5.height);
                drawCharacterGrobs(graphicsObjects, p5, images);
            } else if (state === 'PLAY' || state === 'GLIDE') {
                if (state === 'PLAY') shiftView(p5);
                let { players, startCorner, next } = getState();
                if (state === 'PLAY' && (startCorner.col !== next.col || startCorner.row !== next.row))
                    setState({ superMoveY: startCorner.row - next.row, superMoveX: startCorner.col - next.col, state: 'GLIDE' });
                if (state === 'GLIDE') glide();
                drawBackground(p5);
                drawVisibleItems(p5, p5.width, p5.height);
                drawPlayers(p5);
                drawEnemies(p5);
                drawLayout(p5);
                drawInventory(p5);
                drawHealth(p5);
                updateGuy(p5, socket);
            }
        }
    }