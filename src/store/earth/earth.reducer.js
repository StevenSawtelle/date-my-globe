const initialState = {
    currentQuestion: {
            "newName": "Montenegro",
            "oldName": "Serbia and Montenegro",
            "date": "2006",
            "cameraY": -2.05,
            "cameraX":  0.3
        },
    guessValues: {
        start: -1,
        mid: 2,
        end: 6
    },
};

export const EARTH_ACTIONS = {
    SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
    SET_GUESS_START: 'SET_GUESS_START',
    SET_GUESS_MID: 'SET_GUESS_MID',
    SET_GUESS_END: 'SET_GUESS_END',
    RESET_GAME: 'RESET_GAME',
}

export const earthReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case EARTH_ACTIONS.SET_CURRENT_QUESTION:
            return { ...state, currentQuestion: action.payload };
        case EARTH_ACTIONS.SET_GUESS_START:
            return {
                ...state,
                guessValues: {
                    ...state.guessValues,
                    start: action.payload,
                }
            };
        case EARTH_ACTIONS.SET_GUESS_MID:
            return {
                ...state,
                guessValues: {
                    ...state.guessValues,
                    mid: action.payload,
                }
            };
        case EARTH_ACTIONS.SET_GUESS_END:
            return {
                ...state,
                guessValues: {
                    ...state.guessValues,
                    end: action.payload,
                }
            };
        case EARTH_ACTIONS.RESET_GAME:
            return initialState;
        default:
            return state;
    }
};

