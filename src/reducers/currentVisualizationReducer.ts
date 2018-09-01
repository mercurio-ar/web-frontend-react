import { ICurrentVisualizationAction } from "../actions/currentVisualizationActions";
import { SET_CURRENT_VISUALIZATION } from "../constants/currentVisualizationConstants";
import currentVisualizationInitialState from "../initialStates/currentVisualizationInitialState";

export default function currentVisualizationReducer(state = currentVisualizationInitialState, action: ICurrentVisualizationAction) {
    switch(action.type){
        case SET_CURRENT_VISUALIZATION: return action.visualization;
        default: return state;
    }
}