import { useState } from "react";

import './Main.styles.scss';

import {
    resetGameAction,
    setEarthCurrentQuestionAction,
    setGuessEndAction,
    setGuessMidAction,
    setGuessStartAction
} from "../store/earth/earth.actions";
import {useDispatch, useSelector} from "react-redux";
import { selectGuessIndexes, selectHasFound} from "../store/earth/earth.selectors";

const TITLE = 'Date My Globe'

const HEADER = 'Find out when your globe was made based on what the world looked like at the time!'

const PROMPT = `Look at the highlighted region on your globe. What is its' name?`;

const MainGamePlay = ({geoChanges}) => {
    const dispatch = useDispatch();
    const {start, mid, end} = useSelector(selectGuessIndexes);
    const found = useSelector(selectHasFound);

    const updateCurrentCountry = newMid => {
        dispatch(setEarthCurrentQuestionAction(geoChanges[newMid]))
    }


    const clickYes = () => {
        dispatch(setGuessStartAction(mid));
        const newMid = Math.floor((mid + end) / 2);
        dispatch(setGuessMidAction(newMid));
        if(start !== newMid && end !== newMid){
            updateCurrentCountry(newMid);
        }
    }

    const clickNo = () => {
        dispatch(setGuessEndAction(mid));
        const newMid = Math.floor((start + mid) / 2);
        dispatch(setGuessMidAction(newMid));
        if(start !== newMid && end !== newMid){
            updateCurrentCountry(newMid);
        }
    }

    const startOver = () => {
        dispatch(resetGameAction())
    }

    return (<div className={'main'}>
        <h1>{TITLE}</h1>
        {!found && <>
            <h3>{HEADER}</h3>
            <p>{PROMPT}</p>
            <div className={'buttons'}>
                <button className={'cool-button yes'} onClick={clickYes}>{geoChanges[mid].newName}</button>
                <button className={'cool-button no'} onClick={clickNo}>{geoChanges[mid].oldName}</button>
            </div>
        </>}
        {found && <>
            <p>The best range for your globe is <span className={'highlight red'}>{start !== -1 ? geoChanges[start]?.date : 'the start of globemaking'}</span> to <span className={'highlight green'}>{geoChanges[end]?.date || 'now'}</span>.</p>
            <p>This is because your globe has{' '}
                <span className={'highlight red'}>{start !== -1 ? geoChanges[start]?.newName : 'no changes that we know of to globes'}</span>
                {' '}but does not have{' '}
                <span className={'highlight green'}>{geoChanges[end]?.newName || 'any new changes since then'}</span>
            .</p>
            <button className={'cool-button start-over'} onClick={startOver}>Start Over?</button>
        </>}
    </div>);
}

export default MainGamePlay;