import * as actions from './../../src/actions/StandUp';
import initialState from './../../src/NameList';
import actionType from '../../src/constants/ActionTypes'

describe('Stand up actions', () => {
    it('should create the action to remove the name', () => {
        const name = 'Name';
        const expectedAction = {type: actionType.REMOVE, name};
        expect(actions.remove(name)).toEqual(expectedAction);
    });

    it('should create the action to reload the initial state', () => {
        const expectedAction = {type: actionType.RELOAD};
        expect(actions.reload()).toEqual(expectedAction);
    });

    it('should create an action that would skip the selected name', () =>{
        const name = 'Name';
        const expectedAction = {type: actionType.SKIP, name};
        expect(actions.skip(name)).toEqual(expectedAction);
    });
});