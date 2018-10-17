import { ISerie, IVisualization } from "@mercurio-ar/model";
import { ISearchResult, MercurioApiClient, SearchQuery } from "./";


describe('MercurioApiClient', () => {

    const serie1: ISerie | ISearchResult | any = { id: 1, displayName: 'serie01' };
    const visualization1: IVisualization = { id: 1, name: 'serie01', series: [serie1] };
    const searchResult1: ISearchResult[] = [
        serie1
    ];
    const visualizations: IVisualization[] = [
        visualization1
    ];
    let http: any;
    let client: MercurioApiClient;

    beforeEach(() => {
        http = {
            delete: jest.fn().mockResolvedValue({}),
            get: jest.fn().mockResolvedValue({ data: searchResult1 }),
            post: jest.fn().mockResolvedValue({ data: visualization1 }),
        };
        client = new MercurioApiClient(http);
    });

    it('searchs', () => {
        // Setup
        const searchQuery = new SearchQuery('dolar');

        // Exercise
        const actualSearchResult = client.search(searchQuery);

        // Verify
        expect(http.get).toBeCalledWith('/series/search?searchTerm=dolar')
        expect(actualSearchResult).resolves.toBe(searchResult1)
    });

    it('createVisualizationFromSearchResult', async () => {
        // Setup
        const searchQuery = new SearchQuery('dolar');

        // Exercise
        const actualSearchResult = await client.search(searchQuery)

        const actualVisualization = await client.createVisualizationFromSearchResult(actualSearchResult[0]);

        // Verify
        expect(http.post).toBeCalledWith('/visualizations', { searchResult: actualSearchResult[0] });
        expect(actualVisualization).toBe(visualization1)
    });

    it('deleteVisualization', async () => {
        // Exercise
        await client.deleteVisualization(visualization1);

        // Verify
        expect(http.delete).toBeCalledWith(`/visualizations/${visualization1.id}`);
    });

    it('fetchVisualizations', async () => {
        // Setup
        http.get = jest.fn().mockResolvedValue({data: visualizations});

        // Exercise
        const actualVisualizations: IVisualization[] = await client.fetchVisualizations();

        // Verify
        expect(http.get).toBeCalledWith('/visualizations');
        expect(actualVisualizations).toBe(visualizations);
    });

    it('addSearchResultToVisualization returns modified visualization', async () => {
        // Setup
        const modifiedVisualization = jest.fn();
        http.put = jest.fn().mockResolvedValue({data: modifiedVisualization});

        // Exercise
        const actualModifiedVisualization = await client.addSearchResultToVisualization(visualization1, searchResult1[0]);
    
        // Verify
        expect(http.put).toBeCalledWith(`/visualizations/${visualization1.id}`, {searchResult: searchResult1[0]});
        expect(actualModifiedVisualization).toBe(modifiedVisualization);
    });
});
