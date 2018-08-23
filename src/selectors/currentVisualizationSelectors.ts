import { IStoreState } from "../reducers/rootReducer";

import { IVisualization } from "../models/Visualization";


export function currentVisualization(state: IStoreState): IVisualization | null {
    return state.currentVisualization;
}

export function currentVisualizationName(state: IStoreState): string | null {
    const current = currentVisualization(state);
    return current && current.name;
}