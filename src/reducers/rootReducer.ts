import { AnyAction, combineReducers, Reducer } from 'redux';

import { IVisualization } from "../models";

import apis, { IApisState } from "./apisReducer";
import currentVisualization from "./currentVisualizationReducer";
import search, { ISearchState } from './searchReducer';
import visualizations, { IVisualizationsState } from "./visualizationReducer";


export interface IStoreState {
    apis: IApisState;
    currentVisualization: IVisualization["id"] | null;
    search: ISearchState;
    visualizations: IVisualizationsState;
}

const rootReducer: Reducer<IStoreState, AnyAction> = combineReducers({
    apis,
    currentVisualization,
    search,
    visualizations,
});

export default rootReducer;
