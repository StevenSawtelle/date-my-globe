
export const selectEarthCurrentQuestion = state => state.earth.currentQuestion;

export const selectFoundData = state => state.earth.found;

// (start === mid || end === mid)
export const selectHasFound = state => state.earth.guessValues.start === state.earth.guessValues.mid || state.earth.guessValues.end === state.earth.guessValues.mid;

export const selectGuessIndexes = state => ({
    start: state.earth.guessValues.start,
    mid: state.earth.guessValues.mid,
    end: state.earth.guessValues.end
})
