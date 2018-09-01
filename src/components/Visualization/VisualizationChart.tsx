import * as React from 'react';
import { connect } from 'react-redux';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

import { IStoreState } from '../../reducers/rootReducer';
import {
    getCurrentVisualizationSeries,
    ILineColorGetter,
    ILineTypeGetter,
    makeGetSerieColor,
    makeGetSerieLineType
} from '../../selectors/currentVisualizationSelectors';
import { ISerieDisplayNameGetter, makeGetSerieDisplayName } from '../../selectors/serieSelectors';

import { ISerie } from '../../models/Serie';


export interface IVisualizationChartProps extends React.Props<any> {
    series: ISerie[];
    getSerieColor: ILineColorGetter;
    getSerieLineType: ILineTypeGetter;
    getSerieDisplayName: ISerieDisplayNameGetter;
}

export class VisualizationChart extends React.Component<IVisualizationChartProps> {

    public seriesData() {
        const data = {}
        this.props.series.forEach(serie => {
            serie.points.forEach(point => {
                const currentPoint = {};
                currentPoint[serie.displayName] = point.y;
                data[point.x] = Object.assign({}, (data[point.x] || {}), currentPoint);
            });
        });
        return Object.keys(data).map(key => Object.assign({ name: key }, data[key]));
    }

    public render() {
        const data = this.seriesData();
        return (
            <ResponsiveContainer minHeight={200} minWidth={100}>
                <LineChart data={data}>
                    >
            <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        allowDataOverflow={true}
                        dataKey="name"
                        type="category"
                    />
                    {
                        this.props.series.map((serie, index) => (
                            <YAxis
                                allowDataOverflow={true}
                                type="number"
                                yAxisId={index.toString()}
                            />))
                    }
                    {
                        this.props.series.map((serie, index) => (
                            <Line
                                yAxisId={index.toString()}
                                type={this.props.getSerieLineType(serie)}
                                dataKey={this.props.getSerieDisplayName(serie)}
                                stroke={this.props.getSerieColor(serie)}
                                animationDuration={300}
                            />
                        ))
                    }
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        getSerieColor: makeGetSerieColor(state),
        getSerieDisplayName: makeGetSerieDisplayName(state),
        getSerieLineType: makeGetSerieLineType(state),
        series: getCurrentVisualizationSeries(state),
    };
}

export default connect(mapStateToProps)(VisualizationChart);