import { createSelector } from "reselect";

import { IStoreState } from "../reducers/rootReducer";

import { IVisualizationsState } from "../reducers/visualizationReducer";

export function getVisualizationState(state: IStoreState): IVisualizationsState{
    return state.visualizations;
}

export const getVisualizations = createSelector(
    getVisualizationState,
    (visualizationState: IVisualizationsState) => visualizationState.visualizations
);
