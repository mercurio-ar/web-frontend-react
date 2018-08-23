import * as React from 'react';

class VisualizationChart extends React.Component {

    public render() {
        return(
            <canvas className="my-4 w-100" id="myChart" width="900" height="380" />
        );
    }
}

export default VisualizationChart;