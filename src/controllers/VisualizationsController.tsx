import * as React from 'react';
import { connect } from 'react-redux';

import { fetchVisualizations } from '../actions/visualizationActions';


interface IVisualizationsControllerProps extends React.Props<any> {
    fetchVisualizations: () => void;
}

export class VisualizationsController extends React.Component<IVisualizationsControllerProps> {
    public componentDidMount(){
        this.props.fetchVisualizations();
    }
    
    public render(){
        return null;
    }
}

export default connect(null, { fetchVisualizations })(VisualizationsController);
