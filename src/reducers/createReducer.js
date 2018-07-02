import actionHandlers  from './../../src/constants/ActionHandlers';

const createReducer = (initialState = {}, handlers = actionHandlers) => (
	 (state = initialState, action) => (
		(actionHandlers.hasOwnProperty(action.type))?
			actionHandlers[action.type](state, action):
		state
	)
);

export default createReducer;