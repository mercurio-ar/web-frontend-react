import { AxiosInstance } from 'axios';
import * as querystring from 'querystring';

import { IVisualization } from '../models';
import { IMercurioApi, ISearchQuery, ISearchResult } from './';


export class MercurioApi implements IMercurioApi {

    constructor(private http: AxiosInstance) { }

    public createVisualizationFromSearchResult(searchResult: ISearchResult): Promise<IVisualization> {
        return this.http.post(this.visualizationEndpoint, {
            searchResult
        }).then(axiosResponse => axiosResponse.data);
    }

    public deleteVisualization(visualization: IVisualization): Promise<void> {
        return this.http.delete(this.visualizationEndpoint, {
            data: {
                visualization
            }
        }).then(axiosResponse => axiosResponse.data);
    }

    public fetchVisualizations(): Promise<IVisualization[]> {
        return this.http.get(this.visualizationEndpoint)
            .then(axiosResponse => axiosResponse.data);
    }

    public search(searchQuery: ISearchQuery): Promise<ISearchResult[]> {
        const path = `${this.searchEndpoint}?${querystring.stringify(searchQuery)}`;
        return this.http.get(path).then(axiosResponse => axiosResponse.data);
    }

    private get visualizationEndpoint() {
        return '/visualization'
    }

    private get searchEndpoint() {
        return '/series/search'
    }
}
