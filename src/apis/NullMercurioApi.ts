import IMercurioApi from "./IMercurioApi";

export default class NullMercurioApi implements IMercurioApi {

    public fetchVisualizations() {
        return Promise.resolve([]);
    }
}