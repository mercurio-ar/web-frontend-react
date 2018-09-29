import { ISearchQuery } from "../apis";
import { IVisualization } from "../models";


export interface ISearchResult {
    id: number;
    displayName: string;
}

export interface IMercurioApi {
    createVisualizationFromSearchResult: (searchResult: ISearchResult) => Promise<IVisualization>;
    deleteVisualization: (visualization: IVisualization) => Promise<void>;
    fetchVisualizations: () => Promise<IVisualization[]>
    search: (searchQuery: ISearchQuery) => Promise<ISearchResult[]>
    addSearchResultToVisualization: (visualization: IVisualization, searchResult: ISearchResult) => Promise<IVisualization>
}
