import { Action } from "redux";

import { SET_CURRENT_VISUALIZATION } from "../constants/currentVisualizationConstants";

import { IVisualization } from "../models/Visualization";


export interface ICurrentVisualizationAction extends Action {
    visualization: IVisualization["id"];
}

export function setCurrentVisualization(visualization: IVisualization["id"]): ICurrentVisualizationAction {
    return {
        type: SET_CURRENT_VISUALIZATION,
        visualization
    };
}