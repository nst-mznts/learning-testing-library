import reducer, {loadUser} from './userSlice';
import { fetchUserData } from '../utils/fetchUserData';
import { configureStore } from '@reduxjs/toolkit';

jest.mock('../utils/fetchUserData');
const mockedFetchUserData = jest.mocked(fetchUserData);

describe('loadUser', () => {
    it('should return data when fetchUserData is called', async() => {
        const testData = { id: 1, name: 'User1' };
        mockedFetchUserData.mockResolvedValueOnce(testData);
        const store = configureStore({reducer});
        await store.dispatch(loadUser(1));
        const state = store.getState();
        expect(state).toEqual({status: "succeeded", user: testData});
        expect(mockedFetchUserData).toHaveBeenCalledWith(1);
    });
    it('should not change state if status is failed', async() => {
        mockedFetchUserData.mockRejectedValueOnce(new Error('Invalid id'));
        const store = configureStore({reducer});
        await store.dispatch(loadUser('one'));
        const state = store.getState();
        expect(state).toEqual({status: "failed", user: null});
    });
})