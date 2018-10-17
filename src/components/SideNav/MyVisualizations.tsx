import * as React from 'react';
import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';


import { IVisualization } from '../../models';
import { IStoreState } from '../../reducers/rootReducer';
import { getCurrentVisualization } from '../../selectors/currentVisualizationSelectors';
import { getMyVisualizations } from '../../selectors/visualizationSelectors';
import { MyVisualizationsTranslations } from '../../translations';
import { VisualizationTab } from './';

import { SideBarGroup, SideBarGroupItem, SideBarHeading } from '../style';


interface IUnLocalizeMyVisualizationsProps extends React.Props<any> {
    currentVisualization?: IVisualization;
    visualizations: IVisualization[];
}

type IMyVisualizationsProps = LocalizeContextProps & IUnLocalizeMyVisualizationsProps;

export class UnConnectedMyVisualizations extends React.Component<IMyVisualizationsProps> {

    constructor(props: IMyVisualizationsProps) {
        super(props);

        this.props.addTranslation(MyVisualizationsTranslations);
    }

    public render() {
        return (
            <div>
                <SideBarHeading>
                    <span><Translate id="SideNav.MyVisualizations.header" /></span>
                    <a className="d-flex align-items-center text-muted" href="#" />
                </SideBarHeading>
                <SideBarGroup>
                    {
                        this.props.visualizations.map(visualization => (
                            <SideBarGroupItem key={visualization.id} >
                                <VisualizationTab active={this.props.currentVisualization === visualization}
                                    visualization={visualization}
                                />
                            </SideBarGroupItem>
                        ))
                    }
                </SideBarGroup>
            </div>
        );
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        currentVisualization: getCurrentVisualization(state),
        visualizations: getMyVisualizations(state),
    }
}

export const UnLocalizeMyVisualizations = connect(mapStateToProps)(UnConnectedMyVisualizations);

export const MyVisualizations = withLocalize(UnLocalizeMyVisualizations);

export default MyVisualizations;
