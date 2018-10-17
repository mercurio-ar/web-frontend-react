import * as React from 'react';
import { connect } from 'react-redux';

import { ISerie } from 'src/models';
import { IStoreState } from 'src/reducers';
import { makeCurrentVisualizationContainsSerie } from 'src/selectors';
import { ISearchResult } from '../../apis';


interface ISerieSearchModalSearchResultProps extends React.Props<any> {
    searchResult: ISearchResult;
    onClick: (event: React.SyntheticEvent, searchResult: ISearchResult) => void;
    currentVisualizationContainsSerie: (searchResult: ISearchResult | ISerie) => boolean;
}

export function UnConnectedSerieSearchModalSearchResult(props: ISerieSearchModalSearchResultProps) {

    const alreadyAdded = props.currentVisualizationContainsSerie(props.searchResult);

    const handleClick = (event: React.SyntheticEvent) => {
        if (alreadyAdded) { return; }
        props.onClick(event, props.searchResult);
    };

    return (
        <div
            onClick={handleClick}
            className={`list-group-item 
            list-group-item-action 
            ${alreadyAdded ? 'active' : ''}`}
        >
            {props.children}
        </div>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        currentVisualizationContainsSerie: makeCurrentVisualizationContainsSerie(state),
    }
}

export default connect(mapStateToProps)(UnConnectedSerieSearchModalSearchResult);
