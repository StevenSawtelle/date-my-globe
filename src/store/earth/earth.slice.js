import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentQuestion: {
        newName: '',
        oldName: '',
        date: '',
        cameraY: 0,
        cameraX: 0,
    },
    guessValues: {
        start: 0,
        mid: 0,
        end: 0,
    },
};

const earthSlice = createSlice({
    name: 'earth',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setGuessStart: (state, action) => {
            state.guessValues.start = action.payload;
        },
        setGuessMid: (state, action) => {
            state.guessValues.mid = action.payload;
        },
        setGuessEnd: (state, action) => {
            state.guessValues.end = action.payload;
        },
        resetGame: () => initialState,
    },
});

export const {
    setCurrentQuestion,
    setGuessStart,
    setGuessMid,
    setGuessEnd,
    resetGame,
} = earthSlice.actions;

export const earthReducer = earthSlice.reducer;
