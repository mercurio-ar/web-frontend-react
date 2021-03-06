import { IVisualizationsAction } from "../actions";
import {
    ADD_USER_VISUALIZATIONS,
    REMOVE_VISUALIZATIONS,
    SET_FETCHING_VISUALIZATION,
    SET_USER_VISUALIZATIONS,
    SET_VISUALIZATIONS_ERROR,
    UPDATE_VISUALIZATIONS
} from "../constants";
import { visualizationInitialState } from "../initialStates";
import { IVisualization } from "../models";


export interface IVisualizationsState {
    error?: string;
    fetching: boolean;
    visualizations: {
        user: IVisualization[]
    };
}

export default function visualizationReducer(state = visualizationInitialState, action: IVisualizationsAction) {
    switch (action.type) {
        case SET_FETCHING_VISUALIZATION: return { ...state, fetching: action.fetching };
        case REMOVE_VISUALIZATIONS: return {
            ...state,
            visualizations: {
                user: state.visualizations.user.filter((v) => action.visualizations.indexOf(v) === -1)
            },
        }
        case SET_USER_VISUALIZATIONS: return {
            ...state,
            visualizations: {
                user: action.visualizations || state.visualizations.user
            },
        };
        case SET_VISUALIZATIONS_ERROR: return { ...state, error: action.error };
        case ADD_USER_VISUALIZATIONS: return { 
            ...state, 
            visualizations: { 
                ...state.visualizations, 
                user: [
                    ...state.visualizations.user, 
                    ...action.visualizations
                ] 
            } 
        };
        case UPDATE_VISUALIZATIONS: return {
            ...state, 
            visualizations: {
                ...state.visualizations,
                user: updateVisualizations(state.visualizations.user, action.visualizations),
            }
        };
        default: return state;
    }
}

function updateVisualizations(visualizations: IVisualization[], updatedVisualizations: IVisualization[]): IVisualization[] {
    return visualizations.map((visualization: IVisualization) => {
        const updated = updatedVisualizations.find((updatedVisualization) =>
            visualization.id === updatedVisualization.id
        );
        return updated || visualization;
    });
}
