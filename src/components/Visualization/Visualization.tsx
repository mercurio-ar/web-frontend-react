import * as React from 'react';

import VisualizationHeader from './Header';
import VisualizationChart from './VisualizationChart';


export default class Visualization extends React.Component {

    public render(){
        return (
            <div>
                <VisualizationHeader />
                <VisualizationChart />
            </div>
        );
    }
}
