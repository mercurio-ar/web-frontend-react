import * as React from 'react';
import { connect } from 'react-redux';

import { ISearchResult } from '../../apis';
import { IStoreState } from '../../reducers';
import { getSearchResults } from '../../selectors';


interface ISerieSearchResultsProps extends React.Props<any> {
    searchResults: ISearchResult[];
}

export function UnConnectedSerieSearchResults(props: ISerieSearchResultsProps) {
    return (
        <div id="list-example" className="list-group">
            {
                props.searchResults.map((searchResult: ISearchResult) => (
                    <a key={searchResult.id} className="list-group-item list-group-item-action">
                        {searchResult.id}: {searchResult.displayName}
                    </a>
                ))
            }
        </div>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        searchResults: getSearchResults(state),
    }
}

export const SerieSearchResults = connect(mapStateToProps)(UnConnectedSerieSearchResults);

export default SerieSearchResults;
