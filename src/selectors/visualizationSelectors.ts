import { IStoreState } from "../reducers/rootReducer";

import { IVisualization } from "../models/Visualization";

export function getVisualizations(state: IStoreState): IVisualization[] {
    return state.visualizations;   
}