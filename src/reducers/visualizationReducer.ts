import { IVisualizationsAction } from "../actions/visualizationActions";
import { SET_VISUALIZATIONS } from "../constants/visualizationConstants";
import visualizationInitialState from "../initialStates/visualizationsInitialState";
import { IVisualization } from "../models/Visualization";


export interface IVisualizationsState {
    error?: string;
    fetching: boolean;
    visualizations: IVisualization[];
}

export default function currentVisualizationReducer(state = visualizationInitialState, action: IVisualizationsAction) {
    switch(action.type){
        case SET_VISUALIZATIONS: return {...state, visualizations: action.visualizations || state.visualizations};
        default: return state;
    }
}