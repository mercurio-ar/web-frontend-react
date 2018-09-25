import * as React from 'react';
import { connect } from 'react-redux';

import { newVisualizationFromSearchResult } from '../../actions';
import { ISearchResult } from '../../apis';


interface ISerieSearchModalSearchResultProps extends React.Props<any> {
    searchResult: ISearchResult;
    newVisualization: () => void;
    onClick: () => void;
}

function UnConnectedSerieSearchModalSearchResult(props: ISerieSearchModalSearchResultProps) {
    const handleClick = () => {
        props.newVisualization();
        props.onClick();
    }
    return (
        <div
            onClick={handleClick}
            className="list-group-item list-group-item-action"
        >
            {props.children}
        </div>
    );
}

function mapDispatchToProps(dispatch: any, ownProps: ISerieSearchModalSearchResultProps) {
    return {
        ...ownProps,
        newVisualization: () => dispatch(newVisualizationFromSearchResult(ownProps.searchResult)),
    }
}

export const SerieSearchModalSearchResult: any = connect(null, mapDispatchToProps)(UnConnectedSerieSearchModalSearchResult);

export default SerieSearchModalSearchResult;
