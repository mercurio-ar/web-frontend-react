import { AnyAction, combineReducers, Reducer } from 'redux';

import { IVisualization } from "../models/Visualization";

import currentVisualization from "./currentVisualizationReducer";
import visualizations from "./visualizationReducer";

export interface IStoreState {
    currentVisualization: IVisualization["id"] | null;
    visualizations: IVisualization[]
}

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers({
    currentVisualization,
    visualizations,
});

export default rootReducer;
