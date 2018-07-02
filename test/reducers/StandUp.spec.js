import * as actions from './../../src/actions/StandUp';
import createReducer from '../../src/reducers/createReducer';

describe('Stand up reducer', () => {
    it('should remove the name after spin', () => {
        const initialState = {name: ['foo', 'bar', 'goo', 'dud']};
        const expectedState = {name: ['foo', 'bar', 'dud']};
        expect(createReducer(null, null)(initialState, actions.remove('goo'))).toEqual(expectedState);
    });
});