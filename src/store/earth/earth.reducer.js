const initialState = {
    currentQuestion: {
            "newName": "Montenegro",
            "oldName": "Serbia and Montenegro",
            "date": "2006",
            "cameraY": -2.05,
            "cameraX":  0.3
        },
    guessValues: {
        start: 0,
        mid: 2,
        end: 5
    },
    found: {
        found: false,
        foundStartCountry: null,
        foundEndCountry: null
    },
};

export const EARTH_ACTIONS = {
    SET_CURRENT_QUESTION: 'SET_CURRENT_QUESTION',
    GOAL_FOUND: 'GOAL_FOUND',
    SET_GUESS_START: 'SET_GUESS_START',
    SET_GUESS_MID: 'SET_GUESS_MID',
    SET_GUESS_END: 'SET_GUESS_END',
}

export const earthReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case EARTH_ACTIONS.SET_CURRENT_QUESTION:
            return { ...state, currentQuestion: action.payload };
        case EARTH_ACTIONS.GOAL_FOUND:
            return { ...state,
                    found: {
                        found: action.payload.found,
                        foundStartCountry: action.payload.foundStartCountry,
                        foundEndCountry: action.payload.foundEndCountry
                    },
                };
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
        default:
            return state;
    }
};

