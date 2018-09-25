import * as React from 'react';
import { Translate } from 'react-localize-redux';

import { SerieSearchModal } from '../../../SerieSearch';
import { Button } from '../../../style';


type IVisualizationAddSerieActionProps = React.Props<any>

interface IVisualizationAddSerieActionState {
    isModalOpen: boolean;
}

export class VisualizationAddSerieAction extends React.Component<IVisualizationAddSerieActionProps, IVisualizationAddSerieActionState> {

    constructor(props: IVisualizationAddSerieActionProps) {
        super(props);

        this.state = {
            isModalOpen: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.openSearchModal = this.openSearchModal.bind(this);
        this.closeSearchModal = this.closeSearchModal.bind(this);
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
                <SerieSearchModal open={this.state.isModalOpen} onClose={this.closeSearchModal} />
            </Button>
        );
    }
}

export default VisualizationAddSerieAction;
