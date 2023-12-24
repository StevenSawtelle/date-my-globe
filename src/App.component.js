import React, { useEffect } from 'react';
import {useDispatch} from "react-redux";

import dataJson from './content/data.json';

import Earth from "./components/Earth.component";
import MainGamePlay from "./components/MainGamePlay.component";

import { setCurrentQuestion, setGuessEnd, setGuessMid, setGuessStart } from './store/earth/earth.slice';

import './App.scss';


function App() {
    const dispatch = useDispatch();

    const geoChanges = dataJson.geoChanges;
    // let start = 0;
    // let end = geoChanges.length - 1;
    // let mid = Math.floor(end / 2);

    useEffect(() => {
        const end = geoChanges.length - 1;
        const mid = Math.floor(end / 2);
        dispatch(setGuessStart(0));
        dispatch(setGuessMid(mid));
        dispatch(setGuessEnd(end));
        dispatch(setCurrentQuestion(geoChanges[mid]));
    }, [dispatch, geoChanges]);

    return (
        <div className="app-container">
            <MainGamePlay geoChanges={geoChanges} />
            <Earth />
        </div>
    );
}

export default App;