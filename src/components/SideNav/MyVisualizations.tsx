import * as React from 'react';
import { connect } from 'react-redux';

import { IVisualization } from '../../models/Visualization';
import { IStoreState } from '../../reducers/rootReducer';
import { getCurrentVisualization } from '../../selectors/currentVisualizationSelectors';
import { getVisualizations } from '../../selectors/visualizationSelectors';

import SideBarGroup from '../style/SideBarGroup';
import SideBarGroupItem from '../style/SideBarGroupItem';
import SideBarHeading from '../style/SideBarHeading';


interface IMyVisualizationsProps extends React.Props<any> {
    currentVisualization?: IVisualization;
    visualizations: IVisualization[];
}

export function MyVisualizations(props: IMyVisualizationsProps) {
    return (
        <div>
            <SideBarHeading>
                <span>My Visualizations</span>
                <a className="d-flex align-items-center text-muted" href="#" />
            </SideBarHeading>
            <SideBarGroup>
                {
                    props.visualizations.map(visualization => (
                        <SideBarGroupItem key={visualization.id} >
                            <a className={`nav-link ${props.currentVisualization === visualization ? 'active' : ''}`} href="#">
                                <span className="float-right"><i className="far fa-times-circle" /></span>
                                {visualization.name}
    </a>
                        </SideBarGroupItem>
                    ))
                }
            </SideBarGroup>
        </div>
    );
}

function mapStateToProps(state: IStoreState) {
    return {
        currentVisualization: getCurrentVisualization(state),
        visualizations: getVisualizations(state),
    }
}

export default connect(mapStateToProps)(MyVisualizations);
