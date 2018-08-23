import { combineReducers } from 'redux';

import { IVisualization } from "../models/Visualization";

import currentVisualization from "./currentVisualizationReducer";

export interface IStoreState {
    currentVisualization: IVisualization | null;
}

const rootReducer = combineReducers({
    currentVisualization,
});

export default rootReducer;
