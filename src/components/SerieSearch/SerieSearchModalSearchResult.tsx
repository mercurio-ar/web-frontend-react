import * as React from 'react';

import { ISearchResult } from '../../apis';


interface ISerieSearchModalSearchResultProps extends React.Props<any> {
    searchResult: ISearchResult;
    onClick: (event: React.SyntheticEvent, searchResult: ISearchResult) => void;
}

export function SerieSearchModalSearchResult(props: ISerieSearchModalSearchResultProps) {
    
    const handleClick = (event: React.SyntheticEvent) => {
        props.onClick(event, props.searchResult);
    };
    
    return (
        <div
            onClick={handleClick}
            className="list-group-item list-group-item-action"
        >
            {props.children}
        </div>
    );
}

// function mapDispatchToProps(dispatch: any, ownProps: ISerieSearchModalSearchResultProps) {
//     return {
//         ...ownProps,
//         newVisualization: () => dispatch(newVisualizationFromSearchResult(ownProps.searchResult)),
//     }
// }

// export const SerieSearchModalSearchResult: any = connect(null, mapDispatchToProps)(UnConnectedSerieSearchModalSearchResult);

export default SerieSearchModalSearchResult;
