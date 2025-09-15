import {apiGet} from './apiGet';

const url = 'https://jsonplaceholder.typicode.com/posts';

describe('apiGet', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    })
    it('should return data after a successful request', async() => {
        const mockData = [
            {id: 1, name: 'one'},
            {id: 2, name: 'two'}
        ];
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockData)
        });
        const result = await apiGet(url);
        expect(result).toEqual(mockData);
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('should throw Error when response.ok is false', async() => {
        global.fetch.mockResolvedValueOnce({
            ok: false
        })
        await expect(apiGet(url)).rejects.toThrow();
    });
    it('should throw Error when fetch fail', async() => {
        global.fetch.mockRejectedValueOnce(() => Promise.reject("Network error"));
        await expect(apiGet(url)).rejects.toThrow();
    })
})