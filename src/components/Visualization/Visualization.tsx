import * as React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from '../../reducers/rootReducer';
import { currentVisualizationName } from '../../selectors/currentVisualizationSelectors';

import VisualizationAdd from './VisualizationAdd';
import VisualizationChart from './VisualizationChart';
import VisualizationExport from './VisualizationExport';
import VisualizationShare from './VisualizationShare';
import VisualizationTakeSnapshot from './VisualizationTakeSnapshot';


interface IVisualizationProps extends React.Props<any> {
    name: string | null
}

class Visualization extends React.Component<IVisualizationProps> {

    public render(){
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">{this.props.name}</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <VisualizationAdd />
                            <VisualizationTakeSnapshot />
                            <VisualizationShare />
                            <VisualizationExport />
                        </div>
                    </div>
                </div>

                <VisualizationChart />
            </div>
        );
    }
}

function mapStateToProps(state: IStoreState){
    return {
        name: currentVisualizationName(state),
    }
}

export default connect(mapStateToProps)(Visualization);