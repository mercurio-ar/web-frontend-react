import { SearchQuery } from "../apis";
import { ISearchState } from "../reducers";


export const searchInitialState: ISearchState = {
    error: null,
    query: new SearchQuery(),
    results: [],
    searching: false,
};

export default searchInitialState;
