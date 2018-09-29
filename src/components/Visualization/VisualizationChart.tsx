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

import { IStoreState } from '../../reducers';
import {
    getCurrentVisualizationSeries,
    ILineColorGetter,
    ILineTypeGetter,
    ISerieDisplayNameGetter,
    makeGetSerieColor,
    makeGetSerieDisplayName,
    makeGetSerieLineType
} from '../../selectors';

import { ISerie } from '../../models';


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
        return Object.keys(data).map(key =>
            Object.assign({ date: key }, data[key])
        ).sort((a, b) =>
            Date.parse(a.date) - Date.parse(b.date)
        );
    }

    public render() {
        const data = this.seriesData();
        // tslint:disable-next-line:no-console
        console.log(data)
        return (
            <ResponsiveContainer minHeight={200} minWidth={100}>
                <LineChart data={data}>
                    >
            <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="date"
                        type="category"
                    />
                    {
                        this.props.series.map((serie, index) => (
                            <YAxis
                                key={serie.id}
                                yAxisId={index.toString()}
                                allowDataOverflow={true}
                                type="number"
                            />))
                    }
                    {
                        this.props.series.map((serie, index) => (
                            <Line
                                key={serie.id}
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
