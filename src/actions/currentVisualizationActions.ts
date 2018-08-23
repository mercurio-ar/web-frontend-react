import { Action } from "redux";

import { SET_CURRENT_VISUALIZATION } from "../constants/currentVisualizationConstants";

import { IVisualization } from "../models/Visualization";


export interface ICurrentVisualizationAction extends Action {
    visualization: IVisualization;
}

export function setCurrentVisualization(visualization: IVisualization): ICurrentVisualizationAction {
    return {
        type: SET_CURRENT_VISUALIZATION,
        visualization
    };
}