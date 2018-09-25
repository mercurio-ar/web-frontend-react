import * as React from 'react';
import { Translate } from 'react-localize-redux';

import { Button } from '../../../style';


class VisualizationAddSerieAction extends React.Component {

    public render() {
        return(
            <Button variant="outline-secondary">
                <Translate id="Visualization.Actions.AddSerie"/>
            </Button>
        );
    }
}

export default VisualizationAddSerieAction;
