import { IMercurioApiClient, MercurioApiClient } from './MercurioApiClient';

export { IMercurioApiClient, MercurioApiClient } from './MercurioApiClient';
export { ISearchQuery, SearchQuery } from './SearchQuery';
export { ISearchResult } from './SearchResult';

export default MercurioApiClient;

export type IMercurioApi = IMercurioApiClient;
export const MercurioApi = MercurioApiClient;
