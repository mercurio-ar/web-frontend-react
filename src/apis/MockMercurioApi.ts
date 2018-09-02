import { IMercurioApi, ISearchQuery } from "./";

import { ISerie, IVisualization } from "../models";
import { ISearchResult } from "./IMercurioApi";


const series: ISerie[] = [
    { displayName: "serie1", points: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 3, y: 1 }] },
    { displayName: "serie2", points: [{ x: 0, y: 1 }, { x: 3, y: 4 }] },
    { displayName: "serie3", points: [{ x: 0, y: 1 }, { x: 1, y: 4 }, { x: 3, y: 1 }] },
    { displayName: "serie4", points: [{ x: 0, y: 3 }, { x: 1, y: 1 }, { x: 3, y: 2 }] },
];

export default class MockMercurioApi implements IMercurioApi {

    public createVisualizationFromSearchResult({ id, displayName }: ISearchResult) {
        return Promise.resolve({
            id,
            name: displayName,
            series
        });
    }

    public fetchVisualizations() {
        return Promise.resolve([
            { id: 1, name: "Visualization01", series },
            { id: 2, name: "Visualization02", series: [series[0], series[1]] },
            { id: 3, name: "Visualization03", series: [series[0]] },
        ]);
    }

    public deleteVisualization(visualization: IVisualization) {
        return Promise.resolve();
    }

    public search(searchQuery: ISearchQuery) {
        return Promise.resolve([
            { id: 1, displayName: "searchResult01" },
            { id: 2, displayName: "searchResult02" },
            { id: 3, displayName: "searchResult03" },
            { id: 4, displayName: "searchResult04" },
        ]);
    }
}