import { ISearchAction } from "../actions";
import { ISearchQuery, ISearchResult } from "../apis";
import {
    SET_SEARCH_ERROR,
    SET_SEARCH_RESULTS,
    SET_SEARCH_TERM,
    SET_SEARCHING
} from "../constants";
import { searchInitialState } from "../initialStates";


export interface ISearchState {
    error: string | null;
    searching: boolean;
    results: ISearchResult[];
    query: ISearchQuery;
}

export default function searchReducer(state = searchInitialState, action: ISearchAction) {
    switch (action.type) {
        case SET_SEARCH_TERM: return { ...state, query: { ...state.query, searchTerm: action.searchTerm } }
        case SET_SEARCHING: return { ...state, searching: action.searching };
        case SET_SEARCH_RESULTS: return { ...state, results: action.results };
        case SET_SEARCH_ERROR: return { ...state, error: action.error };
        default: return state;
    }
}
