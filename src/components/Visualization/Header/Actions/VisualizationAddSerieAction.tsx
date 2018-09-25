import * as React from 'react';
import { Translate } from 'react-localize-redux';

import { Button } from '../../../style';


type IVisualizationAddSerieActionProps = React.Props<any>

export class VisualizationAddSerieAction extends React.Component<IVisualizationAddSerieActionProps> {

    constructor(props: IVisualizationAddSerieActionProps){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(event: React.SyntheticEvent<any>){
        event.stopPropagation();
        // tslint:disable-next-line:no-console
        console.log('sarras')
    }

    public render() {
        return(
            <Button variant="outline-secondary" onClick={this.handleClick}>
                <Translate id="Visualization.Actions.AddSerie"/>
            </Button>
        );
    }
}

export default VisualizationAddSerieAction;
