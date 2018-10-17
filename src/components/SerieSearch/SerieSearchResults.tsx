import * as React from 'react';
import { connect } from 'react-redux';

import { ISearchResult } from '../../apis';
import { IStoreState } from '../../reducers';
import { getSearchResults } from '../../selectors';


interface ISerieSearchResultsProps extends React.Props<any> {
    searchResults: ISearchResult[];
    renderResult?: (result: ISearchResult) => JSX.Element;
    renderResultWrapper?: (renderedResult: JSX.Element, key: string | number, result: ISearchResult) => JSX.Element;
}

export function UnConnectedSerieSearchResults(props: ISerieSearchResultsProps) {
    const wrapperRenderer = props.renderResultWrapper ? props.renderResultWrapper : renderResultWrapper
    const resultRenderer = props.renderResult ? props.renderResult : renderResult;

    return (
        <div className="list-group">
            {
                props.searchResults.map((searchResult: ISearchResult, index) =>
                    (wrapperRenderer(resultRenderer(searchResult), index, searchResult))
                )
            }
        </div>
    );
}

function renderResultWrapper(renderedResult: JSX.Element, key: string | number) {
    return (
        <div key={key} className="list-group-item list-group-item-action active" >
            {renderedResult}
        </div>
    );
}

function renderResult(result: ISearchResult): JSX.Element {
    return (
        <a>{result.id}: {result.displayName}</a>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        searchResults: getSearchResults(state),
    }
}

export const SerieSearchResults = connect(mapStateToProps)(UnConnectedSerieSearchResults);

export default SerieSearchResults;
