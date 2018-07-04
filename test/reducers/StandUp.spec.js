import * as actions from './../../src/actions/StandUp';
import createReducer from '../../src/reducers/createReducer';
import nameList from './../../src/NameList'

describe('Stand up reducer', () => {
    it('should remove the name after spin', () => {
        const initialState = {name: ['foo', 'bar', 'goo', 'dud']};
        const expectedState = {name: ['foo', 'bar']};
        expect(createReducer(null, null)(initialState, actions.remove(['goo', 'dud']))).toEqual(expectedState);
    });

    it('should return the initial name list on reload', () => {
        expect(createReducer()(null, actions.reload())).toEqual(nameList);
    });
});