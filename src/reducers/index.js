import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import tracks from './tracks';
import filterTracks from './filterTracks';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    tracks,
    filterTracks
});

export default createRootReducer;