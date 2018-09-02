import { IVisualizationsAction } from "../actions";
import {
    REMOVE_VISUALIZATIONS,
    SET_FETCHING_VISUALIZATION,
    SET_VISUALIZATIONS,
    SET_VISUALIZATIONS_ERROR
} from "../constants";
import { visualizationInitialState } from "../initialStates";
import { IVisualization } from "../models";


export interface IVisualizationsState {
    error?: string;
    fetching: boolean;
    visualizations: IVisualization[];
}

export default function visualizationReducer(state = visualizationInitialState, action: IVisualizationsAction) {
    switch (action.type) {
        case SET_FETCHING_VISUALIZATION: return { ...state, fetching: action.fetching };
        case REMOVE_VISUALIZATIONS: return { ...state, visualizations: state.visualizations.filter((v) => action.visualizations.indexOf(v) === -1) }
        case SET_VISUALIZATIONS: return { ...state, visualizations: action.visualizations || state.visualizations };
        case SET_VISUALIZATIONS_ERROR: return { ...state, error: action.error };
        default: return state;
    }
}