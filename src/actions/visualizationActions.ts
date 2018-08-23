import { Action } from "redux";

import { SET_VISUALIZATIONS } from "../constants/visualizationConstants";
import { IVisualization } from "../models/Visualization";

export interface IVisualizationsAction extends Action {
    visualizations: IVisualization[];
}

export function setVisualizations(visualizations: IVisualization[]): IVisualizationsAction {
    return {
        type: SET_VISUALIZATIONS,
        visualizations
    };
}
