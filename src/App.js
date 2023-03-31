import dataJson from './content/data.json';

import React from 'react';
import './App.scss';
import Earth from "./components/Earth.component";
import MainGamePlay from "./components/MainGamePlay.component";
import {setEarthCurrentQuestionAction} from "./store/earth/earth.actions";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch();

    const geoChanges = dataJson.geoChanges;
    // let start = 0;
    // let end = geoChanges.length - 1;
    // let mid = Math.floor(end / 2);
    // dispatch(setEarthCurrentQuestionAction(geoChanges[mid]));

    return (
        <div className="app-container">
            <MainGamePlay geoChanges={geoChanges} />
            <Earth />
        </div>
    );
}

export default App;