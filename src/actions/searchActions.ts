import { Action, Dispatch } from "redux";

import { ISearchResult } from "../apis";
import {
    SET_SEARCH_ERROR,
    SET_SEARCH_RESULTS,
    SET_SEARCH_TERM, SET_SEARCHING
} from "../constants";
import { IVisualization } from "../models";
import { IStoreState } from "../reducers";
import { getMercurioApi, getSearchQuery } from "../selectors";
import { addUserVisualizations, setCurrentVisualization } from './';


export type ISearchAction = ISearchingAction &
    ISearchResultAction &
    ISearchTermAction &
    ISearchErrorAction;

export interface ISearchingAction extends Action {
    searching: boolean;
}

export interface ISearchResultAction extends Action {
    results: ISearchResult[];
}

export interface ISearchErrorAction extends Action {
    error: string;
}

export interface ISearchTermAction extends Action {
    searchTerm: string;
}

export function setSearchTerm(searchTerm: string): ISearchTermAction {
    return {
        searchTerm,
        type: SET_SEARCH_TERM,
    }
}

export function setSearching(searching: boolean): ISearchingAction {
    return {
        searching,
        type: SET_SEARCHING,
    }
}

export function setSearchResults(results: ISearchResult[]): ISearchResultAction {
    return {
        results,
        type: SET_SEARCH_RESULTS,
    }
}

export function setSearchError(error: string): ISearchErrorAction {
    return {
        error,
        type: SET_SEARCH_ERROR,
    }
}

export function search() {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        dispatch(setSearching(true));
        getMercurioApi(getState())
            .search(getSearchQuery(getState()))
            .then((searchResults: ISearchResult[]) => {
                dispatch(setSearchResults(searchResults));
                dispatch(setSearching(false));
            })
            .catch((err: string) => {
                dispatch(setSearchError(err));
                dispatch(setSearching(false));
            })
    };
}

export function newVisualizationFromSearchResult(searchResult: ISearchResult) {
    return (dispatch: Dispatch, getState: () => IStoreState) => {
        getMercurioApi(getState())
            .createVisualizationFromSearchResult(searchResult)
            .then((visualization: IVisualization) => {
                dispatch(addUserVisualizations([visualization]));
                dispatch(setCurrentVisualization(visualization.id));
            })
            .catch((err: string) => {
                dispatch(setSearchError(err))
            });
    }
}
