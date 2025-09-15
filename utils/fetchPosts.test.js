import {fetchPosts} from './fetchPosts';

describe('fetchPosts', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    })
    it('should return data', async() => {
        const testData = [
            { id: 1, title: 'one' },
            { id: 2, title: 'two' }
        ];
        global.fetch.mockResolvedValueOnce({
            json: () => Promise.resolve(testData),
        });
        const result = await fetchPosts();
        expect(result).toEqual(testData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('should throw when fetch fails', async() => {
        global.fetch.mockResolvedValueOnce(new Error('Network Error'));
        expect(fetchPosts()).rejects.toThrow();
    })
})