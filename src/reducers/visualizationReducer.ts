import { IVisualizationsAction } from "../actions/visualizationActions";
import { SET_VISUALIZATIONS } from "../constants/visualizationConstants";
import visualizationInitialState from "../initialStates/visualizationsInitialState";

export default function currentVisualizationReducer(state = visualizationInitialState, action: IVisualizationsAction) {
    switch(action.type){
        case SET_VISUALIZATIONS: return action.visualizations;
        default: return state;
    }
}