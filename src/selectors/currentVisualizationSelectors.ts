import { createSelector } from 'reselect';

import { IStoreState } from "../reducers/rootReducer";

import { IVisualization } from "../models/Visualization";

import { getVisualizations } from "./visualizationSelectors";


export function currentVisualization(state: IStoreState): number | null {
    return state.currentVisualization;
}

const getCurrentVisualization = createSelector(
    [ getVisualizations, currentVisualization ],
    (visualizations: IVisualization[], cv: number) => visualizations.find(
      (visualization: IVisualization) => visualization.id === cv
    )
  )

export function getCurrentVisualizationName(state: IStoreState): string | undefined {
    const current = getCurrentVisualization(state);
    return current && current.name;
}