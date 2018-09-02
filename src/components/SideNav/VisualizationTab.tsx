import * as React from 'react';
import { connect } from 'react-redux';

import { setCurrentVisualization } from '../../actions/currentVisualizationActions';
import { IVisualization } from '../../models/Visualization';
import { DeleteVisualizationAction } from './';

interface IVisualizationTabProps extends React.Props<any> {
    active?: boolean;
    visualization: IVisualization;
    setCurrentVisualization: typeof setCurrentVisualization;
}

export class UnConnectedVisualizationTab extends React.Component<IVisualizationTabProps> {

    public constructor(props: IVisualizationTabProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(event: any) {
        event.preventDefault();
        this.props.setCurrentVisualization(this.props.visualization.id)
    }

    public render() {
        return (
            <a className={`nav-link ${this.props.active ? 'active' : ''}`} href="#" onClick={this.handleClick}>
                <span className="float-right"><DeleteVisualizationAction visualization={this.props.visualization} /></span>
                {this.props.visualization.name}
            </a>
        );
    }
}

export const VisualizationTab = connect(null, { setCurrentVisualization })(UnConnectedVisualizationTab);

export default VisualizationTab;
