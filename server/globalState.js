let state = {
    players: {},
    enemies: [],
    map: [],
    startCorner: undefined,
    next: undefined,
}

export function getState() { return state }

export function setState(newState) {
    state = { ...state, ...newState }
}
