import { ISearchQuery } from "../apis";
import { IVisualization } from "../models";


export interface ISearchResult {
    id: string | number;
    displayName: string;
}

export interface IMercurioApi {
    fetchVisualizations: () => Promise<IVisualization[]>
    search: (searchQuery: ISearchQuery) => Promise<ISearchResult[]>
}
