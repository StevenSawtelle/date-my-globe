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

const PROMPT = `Look at the highlighted region. What is its' name?`;

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
        {!found && <>
            <p>{PROMPT}</p>
            <div className={'buttons'}>
                <button className={'cool-button yes'} onClick={clickYes}>{geoChanges[mid].newName}</button>
                <button className={'cool-button no'} onClick={clickNo}>{geoChanges[mid].oldName}</button>
            </div>
        </>}
        {found && <>
            <p>The best range for your globe is {start !== -1 ? geoChanges[start]?.date : 'no start'} to {geoChanges[end]?.date || 'now'}.</p>
            <p>This is because your globe has {start !== -1 ? geoChanges[start]?.newName : 'no early cap'} but does not have {geoChanges[end]?.newName || 'no end cap'}.</p>
            <button className={'cool-button start-over'} onClick={startOver}>Start Over?</button>
        </>}
    </div>);
}

export default MainGamePlay;