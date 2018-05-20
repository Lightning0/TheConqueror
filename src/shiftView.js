import { getState, setState } from './globalState';
import { BS } from './constants';

// handle the shifting of the map, so we only draw the visible portion, and shift entities accordingly
export const shiftView = p5 => {
    let { width, height } = p5;
    let { players, map, startCorner, id } = getState();
    let sC = {};
    sC.row = startCorner.row;
    sC.col = startCorner.col;
    if (players[id].xpos !== undefined) {
        let screensLeft = startCorner.col * BS;
        let screensTop = startCorner.row * BS;

        //player going down
        if (height - ((players[id].ypos - screensTop) + BS) < 2 * BS) {
            let canMove = map.length - (height / BS) - sC.row;
            let wantToMove = (height / BS) - 5;
            let move = Math.min(canMove, wantToMove);
            sC.row += move;
        }

        // player going up
        if ((players[id].ypos - screensTop) < 2 * BS) {
            let canMove = sC.row;
            let wantToMove = (height / BS) - 5;
            let move = Math.min(canMove, wantToMove);
            sC.row -= move;
        }

        // player going right
        if (width - ((players[id].xpos - screensLeft) + BS) < 2 * BS + 160) {
            let canMove = map[0].length - (width / BS) - sC.col + 5;
            let wantToMove = (width / BS) - 10;
            let move = Math.min(canMove, wantToMove);
            sC.col += move;
        }

        // player going left
        if ((players[id].xpos - screensLeft) < 2 * BS) {
            let canMove = sC.col;
            let wantToMove = (width / BS) - 10;
            let move = Math.min(canMove, wantToMove);
            sC.col -= move;
        }
    }

    setState({ next: { ...sC } });
}
