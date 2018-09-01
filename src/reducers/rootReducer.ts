import { AnyAction, combineReducers, Reducer } from 'redux';

import { IVisualization } from "../models/Visualization";

import apis, { IApisState } from "./apisReducer";
import currentVisualization from "./currentVisualizationReducer";
import visualizations, { IVisualizationsState } from "./visualizationReducer";


export interface IStoreState {
    apis: IApisState;
    currentVisualization: IVisualization["id"] | null;
    visualizations: IVisualizationsState;
}

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers({
    apis,
    currentVisualization,
    visualizations,
});

export default rootReducer;
