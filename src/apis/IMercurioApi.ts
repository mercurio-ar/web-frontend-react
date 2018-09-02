import { ISearchQuery } from "../apis";
import { IVisualization } from "../models";


export interface ISearchResult {
    id: string | number;
    displayName: string;
}

export interface IMercurioApi {
    deleteVisualization: (visualization: IVisualization) => Promise<void>;
    fetchVisualizations: () => Promise<IVisualization[]>
    search: (searchQuery: ISearchQuery) => Promise<ISearchResult[]>
}
