import * as React from 'react';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';

import { VisualizationTranslations } from '../../translations';
import VisualizationHeader from './Header';
import VisualizationChart from './VisualizationChart';


type IVisualizationProps = LocalizeContextProps & React.Props<any>;

export class UnLocalizeVisualization extends React.Component<IVisualizationProps> {

    constructor(props: IVisualizationProps) {
        super(props);

        this.props.addTranslation(VisualizationTranslations);
    }

    public render(){
        return (
            <div>
                <VisualizationHeader />
                <VisualizationChart />
            </div>
        );
    }
}

export const Visualization = withLocalize(UnLocalizeVisualization);

export default Visualization;
