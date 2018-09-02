import { IMercurioApi, ISearchQuery } from "./";

import { IVisualization } from "../models";


export default class NullMercurioApi implements IMercurioApi {

    public fetchVisualizations() {
        return Promise.resolve([]);
    }

    public deleteVisualization(vis: IVisualization){
        return Promise.resolve();
    }

    public search(searchQuery: ISearchQuery){
        return Promise.resolve([]);
    }
}