import * as React from 'react';
import { connect } from 'react-redux';

import { newVisualizationFromSearchResult } from '../../actions';
import { ISearchResult } from '../../apis';


interface INavBarSearchResultProps extends React.Props<any> {
    searchResult: ISearchResult;
    newVisualization: () => void;
    onClick: () => void;
}

function UnConnectedNavBarSearchResult(props: INavBarSearchResultProps) {
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

function mapDispatchToProps(dispatch: any, ownProps: INavBarSearchResultProps) {
    return {
        ...ownProps,
        newVisualization: () => dispatch(newVisualizationFromSearchResult(ownProps.searchResult)),
    }
}

export const NavBarSearchResult: any = connect(null, mapDispatchToProps)(UnConnectedNavBarSearchResult);

export default NavBarSearchResult;
