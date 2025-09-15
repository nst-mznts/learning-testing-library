import {fetchUserData} from './fetchUserData';

describe('fetchUserData', () => {
    it('should return data when the request is successful', async() => {
        const result = await fetchUserData(1);
        expect(result).toEqual({ id: 1, name: 'User1' });
    });
    it('should return name in the correct format', async() => {
        const testData = { id: 1, name: 'User1' };
        const result = await fetchUserData(1);
        expect(result.name).toEqual(testData.name);
    });
    it('should return Error for invalid id', async() => {
        await expect(() => fetchUserData('one')).rejects.toThrow();
    })
})