const getState = require('./globalState').getState
const setState = require('./globalState').setState
const mapUtils = require('./map')
const utils = require('./utils')
const constants = require('./constants')
const { BS, WIDTH_UNITS, HEIGHT_UNITS } = constants

module.exports = id => {
    mapUtils.addSpawnPoint()
    const { map, players } = getState()
    let pRow = 0
    let pCol = 0
    let found = false

    for (let row = 0; row < map.length; ++row) {
        for (let col = 0; col < map[0].length; ++col) {
            // Draw player at initial position and add to the player array.
            if (map[row][col] === 'p') {
                // Position view so that player is in the center, but constrain to size of map.
                pRow = Math.min(
                    map.length - HEIGHT_UNITS,
                    Math.max(0, Math.floor(row - HEIGHT_UNITS / 2))
                )
                pCol = Math.min(
                    map[0].length - WIDTH_UNITS,
                    Math.max(0, Math.floor(col - WIDTH_UNITS / 2))
                )

                players[id] = {
                    name: 'Guest',
                    width: BS,
                    height: BS,
                    spriteChoice: 0,
                    mapChoice: 0,
                    xpos: col * BS,
                    ypos: row * BS,
                    inventory: [
                        {
                            width: BS,
                            height: BS,
                            color: 'yellow',
                            type: 'ia',
                        },
                    ],
                    maxHealth: 100,
                    health: 100,
                    chatColor: utils.getRandomColor(),
                    type: 'player',
                    speed: 2,
                    attack: 2,
                    direction: 'down',
                    step: 0,
                    startCorner: { row: pRow, col: pCol },
                    next: { row: pRow, col: pCol },
                }

                map[row][col] = '0'
                found = true
                break
            }
        }
        if (found) break
    }
}
