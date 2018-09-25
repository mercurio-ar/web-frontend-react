import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';

import { addSerieFromSearchResultToCurrentVisualization } from '../../../../actions';
import { ISearchResult } from '../../../../apis';
import { SerieSearchModal } from '../../../SerieSearch';
import { Button } from '../../../style';


interface IVisualizationAddSerieActionProps extends React.Props<any> {
    addSerieFromSearchResultToCurrentVisualization: (searchResult: ISearchResult) => void;
}

interface IVisualizationAddSerieActionState {
    isModalOpen: boolean;
}

export class UnConnectedVisualizationAddSerieAction extends React.Component<IVisualizationAddSerieActionProps, IVisualizationAddSerieActionState> {

    constructor(props: IVisualizationAddSerieActionProps) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.openSearchModal = this.openSearchModal.bind(this);
        this.closeSearchModal = this.closeSearchModal.bind(this);
        this.handleSearchResultClick = this.handleSearchResultClick.bind(this);
    }

    public handleSearchResultClick(event: React.SyntheticEvent, searchResult: ISearchResult) {
        this.props.addSerieFromSearchResultToCurrentVisualization(searchResult);
    }

    public handleClick(event: React.SyntheticEvent<any>) {
        event.stopPropagation();
        this.openSearchModal();
    }

    public openSearchModal() {
        this.setState({ isModalOpen: true })
    }

    public closeSearchModal() {
        this.setState({ isModalOpen: false })
    }

    public render() {
        return (
            <Button variant="outline-secondary" onClick={this.handleClick}>
                <Translate id="Visualization.Actions.AddSerie" />
                <SerieSearchModal
                    open={this.state.isModalOpen}
                    onClose={this.closeSearchModal}
                    onSearchResultClick={this.handleSearchResultClick}
                />
            </Button>
        );
    }
}

export const VisualizationAddSerieAction = connect(null, { addSerieFromSearchResultToCurrentVisualization })(UnConnectedVisualizationAddSerieAction);

export default VisualizationAddSerieAction;
