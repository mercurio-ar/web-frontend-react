import { Color } from 'csstype';
import { createSelector } from 'reselect';

import { IStoreState } from "../reducers/rootReducer";

import { ISearchResult } from 'src/apis';
import { ISerie, IVisualization } from '../models';
import { getMyVisualizations } from "./visualizationSelectors";


export function currentVisualization(state: IStoreState): number | null {
    return state.currentVisualization;
}

export const getCurrentVisualization = createSelector(
    [getMyVisualizations, currentVisualization],
    (visualizations: IVisualization[], cv: number) => visualizations.find(
        (visualization: IVisualization) => visualization.id === cv
    )
)

export function getCurrentVisualizationName(state: IStoreState): string | undefined {
    const current = getCurrentVisualization(state);
    return current && current.name;
}

export function getCurrentVisualizationSeries(state: IStoreState): ISerie[] {
    const visualization = getCurrentVisualization(state);
    return visualization ? visualization.series : [];
}

export type ILineColor = Color;

export type ILineColorGetter = (serie: ISerie) => ILineColor;

export function makeGetSerieColor(state: IStoreState): ILineColorGetter {
    return () => 'red';
}

export type ILineType = "linear" | "basis" | "basisClosed" | "basisOpen" | "linearClosed" | "natural" | "monotoneX" | "monotoneY" | "monotone" | "step" | "stepBefore" | "stepAfter" | undefined;

export type ILineTypeGetter = (serie: ISerie) => ILineType;

export function makeGetSerieLineType(state: IStoreState): ILineTypeGetter {
    return () => "natural";
}

export function makeCurrentVisualizationContainsSerie(state: IStoreState): ((serie: ISerie | ISearchResult) => boolean) {
    return (serie) =>
        getCurrentVisualizationSeries(state)
            .map((visualizationSerie: ISerie) => visualizationSerie.id)
            .indexOf(serie.id) !== -1;
}
