import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOCATS_PENDING,
    REQUEST_ROBOCATS_SUCCESS,
    REQUEST_ROBOCATS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchCats', () => {
    it('should return the initial state', () => {
        expect(reducers.searchCats(undefined, {}))
            .toEqual({ searchField: '' });
    });

    it('should handle CHANGE_SEARCH_FIELD', () => {
        expect(reducers.searchCats(undefined, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({ searchField: 'abc' });
    });
});

describe('requestRobots', () => {
    const initialStateRequest = {
        isPending: false,
        robocats: [],
        error: ''
    }
    it('should return the initial state', () => {
        expect(reducers.requestRobocats(undefined, {}))
            .toEqual(initialStateRequest);
    });

    it('should handle REQUEST_ROBOCATS_PENDING', () => {
        expect(reducers.requestRobocats(initialStateRequest, {
            type: REQUEST_ROBOCATS_PENDING
        })).toEqual({
            isPending: true,
            robocats: [],
            error: ''
        });
    });

    it('should handle REQUEST_ROBOCATS_SUCCESS', () => {
        expect(reducers.requestRobocats(initialStateRequest, {
            type: REQUEST_ROBOCATS_SUCCESS,
            payload: [{ name: 'test', username: 'Foo'}]
        })).toEqual({
            isPending: false,
            robocats: [{ name: 'test', username: 'Foo'}],
            error: ''
        });
    });

    it('should handle REQUEST_ROBOCATS_FAILED', () => {
        expect(reducers.requestRobocats(initialStateRequest, {
            type: REQUEST_ROBOCATS_FAILED,
            payload: 'error text'
        })).toEqual({
            isPending: false,
            robocats: [],
            error: 'error text'
        });
    });
});