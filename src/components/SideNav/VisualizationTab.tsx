import * as React from 'react';
import { connect } from 'react-redux';

import { setCurrentVisualization } from '../../actions/currentVisualizationActions';
import { IVisualization } from '../../models/Visualization';


interface IVisualizationTabProps extends React.Props<any> {
    active?: boolean;
    visualization: IVisualization;
    setCurrentVisualization: typeof setCurrentVisualization;
}

export class VisualizationTab extends React.Component<IVisualizationTabProps> {

    public constructor(props: IVisualizationTabProps){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(event: any){
        event.preventDefault();
        this.props.setCurrentVisualization(this.props.visualization.id)
    }

    public render() {
        return (
            <a className={`nav-link ${this.props.active ? 'active' : ''}`} href="#" onClick={this.handleClick}>
                <span className="float-right"><i className="far fa-times-circle" /></span>
                {this.props.visualization.name}
            </a>
        );
    }
}

export default connect(null, { setCurrentVisualization })(VisualizationTab);
