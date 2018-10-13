import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOCATS_PENDING,
    REQUEST_ROBOCATS_SUCCESS,
    REQUEST_ROBOCATS_FAILED
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should create an action to search robocats', () => {
        const text = 'foo';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });

    it('handles requesting robocats API', () => {
        const store = mockStore();
        store.dispatch(actions.requestRobocats());
        const action = store.getActions();
        const mockExpectedAction = {
            type: REQUEST_ROBOCATS_PENDING,
        };
        expect(action[0]).toEqual(mockExpectedAction);
    });
});