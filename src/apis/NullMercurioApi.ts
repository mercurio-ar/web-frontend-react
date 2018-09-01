import { IMercurioApi, ISearchQuery } from "./";


export default class NullMercurioApi implements IMercurioApi {

    public fetchVisualizations() {
        return Promise.resolve([]);
    }

    public search(searchQuery: ISearchQuery){
        return Promise.resolve([]);
    }
}