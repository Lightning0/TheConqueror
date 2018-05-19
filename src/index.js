import * as p5 from './p5';
import { BS, WIDTH_UNITS, HEIGHT_UNITS } from './constants';
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
import { defer } from './utils';

let P5;
let ro;
let width = 960;
let height = 576;

const canvasDiv = document.querySelector('#grid');
const chatUl = document.querySelector('#chat-ul');
const chatSendBtn = document.querySelector('#chat-send-btn');
const chatTextArea = document.querySelector('#chat-text-area');
const chatChatBox = document.querySelector('#chat-chat-box');
const nameText = document.querySelector('#name-text');

chatSendBtn.addEventListener('click', e => {
    let { players, id } = getState();
    let text = chatTextArea.value;

    socket.emit('chatmsg', {
        id,
        name: nameText.value,
        text
    });
})

const socket = io.connect('http://localhost:8080');

// When the client is first served the page, it will connect to the websocket server
// The server will then send the map to the client
// When the map arrives, the sketch will start looping
let firstMapPromise = defer();
firstMapPromise.then(data => {
    let { map, enemies, players } = data;
    let id = socket.id;
    let startCorner = players[id].startCorner;
    let next = players[id].next;
    setState({ map, enemies, players, startCorner, next, id });
    P5 = new p5(sketch, 'grid');

    // Observer to catch canvas resize
    ro = new ResizeObserver(entries => {
        for (let entry of entries) {
            const cr = entry.contentRect;
            width = cr.width;
            height = cr.height;
            P5.resizeCanvas(width, height - 4);
        }
    });

    ro.observe(canvasDiv);
})

// Chat box will always scroll to the bottom when new content is added
var scrollOb = new MutationObserver(scrollToBottom);
var config = { childList: true };
scrollOb.observe(chatUl, config);

function scrollToBottom() {
    chatChatBox.scrollTop = chatChatBox.scrollHeight;
}

// Socket listeners
socket.on('firstconnect', data => { firstMapPromise.resolve(data); })  // Get map and enemies from server
socket.on('update', newData => { setState({ ...newData }); }) // Get enemies and players from server
socket.on('mapupdate', map => { setState(map); }) // Get map from server

// message from chat
socket.on('globalchatmsg', nameAndText => {

    // <ul id="chat-ul">
    //     <li>
    //         <b>Matt: </b> How's everyone doing?
    //     </li>
    // </ul>

    let { name, text } = nameAndText;

    let nameNode = document.createElement("B");
    let nameTextNode = document.createTextNode(`${name}: `);
    nameNode.appendChild(nameTextNode);

    let msgNode = document.createElement("LI");
    msgNode.appendChild(nameNode);

    let msgTextNode = document.createTextNode(text);
    msgNode.appendChild(msgTextNode);

    chatUl.appendChild(msgNode);
    chatTextArea.value = "";
});

const sketch = p5 => {
    p5.preload = () => {
        setState({
            images: p5.loadImage("sprites.png"),
            enemyImages: p5.loadImage("monsterSprites.png"),
            mapImage: p5.loadImage("map.png"),
            itemImage: p5.loadImage("items.png"),
        })
    }

    p5.setup = () => {
        const can = p5.createCanvas(width, height - 4);
        can.mousePressed(() => { performClickAction(p5, socket); })
    }

    p5.draw = () => {
        let gameState = getState().state;
        if (gameState === 'PLAY') {
            shiftView(width, height);
            let { players, startCorner, next } = getState();
            if (startCorner.col === next.col && startCorner.row === next.row) {
                drawBackground(p5);
                drawVisibleItems(p5, width, height);
                drawPlayers(p5);
                drawEnemies(p5);
                drawLayout(p5);
                drawInventory(p5);
                drawHealth(p5);
                updateGuy(p5, socket);
            } else {
                setState({
                    superMoveY: startCorner.row - next.row,
                    superMoveX: startCorner.col - next.col,
                    state: 'GLIDE'
                });
            }
        } else if (gameState === 'GLIDE') {
            drawBackground(p5);
            glide();
            drawVisibleItems(p5, width, height);
            drawPlayers(p5);
            drawEnemies(p5);
            drawLayout(p5);
            drawInventory(p5);
            drawHealth(p5);
            updateGuy(p5, socket);
        }
    }
}

const drawBackground = p5 => {
    let { mapImage, players, startCorner } = getState();
    p5.image(mapImage, 0, 0, p5.width, p5.height, 32 + startCorner.col * BS,
        32 + startCorner.row * BS, p5.width, p5.height);
}
