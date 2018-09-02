import { Action, Dispatch } from "redux";

import {
    ADD_USER_VISUALIZATIONS,
    REMOVE_VISUALIZATIONS,
    SET_FETCHING_VISUALIZATION,
    SET_USER_VISUALIZATIONS,
    SET_VISUALIZATIONS_ERROR
} from "../constants";
import { IVisualization } from "../models";
import { IStoreState } from "../reducers";
import { getMercurioApi } from "../selectors";


export type IVisualizationsAction = IVisualizationsErrorAction &
    IVisualizationsFetchingAction &
    IVisualizationsManipulationAction;

export interface IVisualizationsErrorAction extends Action {
    error: string;
}

export interface IVisualizationsFetchingAction extends Action {
    fetching: boolean;
}

export interface IVisualizationsManipulationAction extends Action {
    visualizations: IVisualization[];
}

export function addUserVisualizations(visualizations: IVisualization[]): IVisualizationsManipulationAction {
    return {
        type: ADD_USER_VISUALIZATIONS,
        visualizations,
    }
}

export function setUserVisualizations(visualizations: IVisualization[]): IVisualizationsManipulationAction {
    return {
        type: SET_USER_VISUALIZATIONS,
        visualizations
    };
}

export function setFetchingVisualizations(fetching: boolean): IVisualizationsFetchingAction {
    return {
        fetching,
        type: SET_FETCHING_VISUALIZATION,
    };
}

export function setVisualizationsError(error: string): IVisualizationsErrorAction {
    return {
        error,
        type: SET_VISUALIZATIONS_ERROR,
    };
}

export function removeVisualizations(visualizations: IVisualization[]): IVisualizationsManipulationAction {
    return {
        type: REMOVE_VISUALIZATIONS,
        visualizations,
    }
}

export function fetchVisualizations() {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        dispatch(setFetchingVisualizations(true));
        getMercurioApi(getState())
            .fetchVisualizations()
            .then((visualizations: IVisualization[]) => {
                dispatch(setUserVisualizations(visualizations));
                dispatch(setFetchingVisualizations(false));
            })
            .catch((err: string) => {
                dispatch(setVisualizationsError(err));
                dispatch(setFetchingVisualizations(false));
            })
    };
}

export function deleteVisualization(visualization: IVisualization) {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        getMercurioApi(getState())
            .deleteVisualization(visualization)
            .then(() => {
                dispatch(removeVisualizations([visualization]));
            })
            .catch((err: string) => {
                dispatch(setVisualizationsError(err));
            })
    };
}
