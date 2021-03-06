import { createSelector } from "reselect";

import { IStoreState, IVisualizationsState } from "../reducers";


export function getVisualizationsState(state: IStoreState): IVisualizationsState{
    return state.visualizations;
}

export const getVisualizations = createSelector(
    getVisualizationsState,
    (visualizationState: IVisualizationsState) => visualizationState.visualizations
)

export const getMyVisualizations = createSelector(
    getVisualizations,
    visualizationState => visualizationState.user
);
