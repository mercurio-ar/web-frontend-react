import { Action, Dispatch } from "redux";

import { SET_FETCHING_VISUALIZATION, SET_VISUALIZATIONS, SET_VISUALIZATIONS_ERROR } from "../constants/visualizationConstants";
import { IVisualization } from "../models/Visualization";
import { IStoreState } from "../reducers/rootReducer";
import { getMercurioApi } from "../selectors/apisSelectors";

export interface IVisualizationsAction extends Action {
    error?: string;
    fetching?: boolean;
    visualizations?: IVisualization[];
}

export function setVisualizations(visualizations: IVisualization[]): IVisualizationsAction {
    return {
        type: SET_VISUALIZATIONS,
        visualizations
    };
}

export function setFetchingVisualizations(fetching: boolean): IVisualizationsAction {
    return {
        fetching,
        type: SET_FETCHING_VISUALIZATION,
    };
}

export function setVisualizationsError(error: string): IVisualizationsAction {
    return {
        error,
        type: SET_VISUALIZATIONS_ERROR,
    };
}

export function fetchVisualizations() {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        dispatch(setFetchingVisualizations(true));
        getMercurioApi(getState())
        .fetchVisualizations()
        .then((visualizations: IVisualization[]) => {
            dispatch(setVisualizations(visualizations));
            dispatch(setFetchingVisualizations(false));
        })
        .catch((err: string) => {
            dispatch(setVisualizationsError(err));
            dispatch(setFetchingVisualizations(false));
        })
    };
}