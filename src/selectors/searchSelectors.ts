import { createSelector } from "reselect";

import { ISearchState, IStoreState } from "../reducers";


export function getSearchState(state: IStoreState){
    return state.search;
}

export const getSearchQuery = createSelector(getSearchState, 
    (state: ISearchState) => (state.query)
);

export const getSearchTerm = createSelector(getSearchQuery,
    searchQuery => searchQuery.searchTerm
);
