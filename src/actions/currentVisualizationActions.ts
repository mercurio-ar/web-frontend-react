import { Action } from "redux";
import { IVisualization } from "../models/Visualization";

export interface ICurrentVisualizationAction extends Action {
    visualization: IVisualization;
}