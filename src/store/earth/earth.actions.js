import {EARTH_ACTIONS} from "./earth.reducer";

export const setEarthCurrentQuestionAction = currentQuestion => ({ type: EARTH_ACTIONS.SET_CURRENT_QUESTION, payload: currentQuestion});

export const setGuessStartAction = start => ({ type: EARTH_ACTIONS.SET_GUESS_START, payload: start});

export const setGuessMidAction = mid => ({ type: EARTH_ACTIONS.SET_GUESS_MID, payload: mid});

export const setGuessEndAction = end => ({ type: EARTH_ACTIONS.SET_GUESS_END, payload: end});

export const resetGameAction = () => ({ type: EARTH_ACTIONS.RESET_GAME });