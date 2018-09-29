import { ISerie } from '../../models/Serie';

import { IVisualizationChartProps, VisualizationChart } from './VisualizationChart';



describe('series => chartData adapter', () => {

    const visCharProps: IVisualizationChartProps = {
        getSerieColor: () => 'fafafa',
        getSerieDisplayName: (serie: ISerie) => serie.displayName,
        getSerieLineType: () => 'linear',
        series: [],
    };


    it('translates series data to chart data', () => {
        // Setup
        const series: ISerie[] = [
            { id: 1, displayName: "serie1", points: [{ x: "2018-01-01", y: 1 }, { x: "2018-01-02", y: 2 }] },
            { id: 2, displayName: "serie2", points: [{ x: "2018-01-01", y: 2 }, { x: "2018-01-02", y: 1 }] },
        ];
        const props = { ...visCharProps, series };
        const visChart = new VisualizationChart(props);

        // Exercise
        const actual = visChart.seriesData();

        // Verify
        expect(actual).toEqual([
            { name: "2018-01-01", serie1: 1, serie2: 2 },
            { name: "2018-01-02", serie1: 2, serie2: 1 },
        ]);
    });

    it('translates series data to chart data', () => {
        // Setup
        const series: ISerie[] = [
            { id: 1, displayName: "serie1", points: [{ x: "2018-01-01", y: 1 }, { x: "2018-01-02", y: 2 }] },
            { id: 2, displayName: "serie2", points: [{ x: "2018-01-02", y: 2 }, { x: "2018-01-03", y: 1 }] },
        ];
        const props = { ...visCharProps, series };
        const visChart = new VisualizationChart(props);

        // Exercise
        const actual = visChart.seriesData();

        // Verify
        expect(actual).toEqual([
            { name: "2018-01-01", serie1: 1 },
            { name: "2018-01-02", serie1: 2, serie2: 2 },
            { name: "2018-01-03", serie2: 1 },
        ]);
    });
});
