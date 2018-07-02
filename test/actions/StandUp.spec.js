import * as actions from './../../src/actions/StandUp';

describe('Stand up actions', () => {
    it('should create the action to remove the name', () => {
        const name = 'Name';
        const expectedAction = {type: 'REMOVE', name};
        expect(actions.remove(name)).toEqual(expectedAction);
    });
});