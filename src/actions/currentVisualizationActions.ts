import { Action, Dispatch } from "redux";

import {
    SET_CURRENT_VISUALIZATION,
} from "../constants/currentVisualizationConstants";

import { ISearchResult } from "../apis";
import { IVisualization } from "../models/Visualization";
import { IStoreState } from "../reducers";
import { 
    getCurrentVisualization, 
    getMercurioApi 
} from "../selectors";
import {
    setFetchingVisualizations, 
    setVisualizationsError, 
    updateVisualization,
} from "./visualizationActions";


export interface ICurrentVisualizationAction extends Action {
    visualization: IVisualization["id"];
}

export function setCurrentVisualization(visualization: IVisualization["id"]): ICurrentVisualizationAction {
    return {
        type: SET_CURRENT_VISUALIZATION,
        visualization
    };
}

export function addSerieFromSearchResultToCurrentVisualization(searchResult: ISearchResult) {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        const state = getState();
        const currentVisualization = getCurrentVisualization(state);
        const mercurioApi = getMercurioApi(state);
        setFetchingVisualizations(true);
        if(!currentVisualization){
            return Promise.reject('Can not add serie: No visualization currently open');
        }
        return mercurioApi.addSearchResultToVisualization(currentVisualization, searchResult)
            .then((visualization: IVisualization) => {
                dispatch(updateVisualization(visualization));
                dispatch(setFetchingVisualizations(false));
            })
            .catch((err: string) => {
                dispatch(setVisualizationsError(err));
                dispatch(setFetchingVisualizations(false));
            });
    };
}
