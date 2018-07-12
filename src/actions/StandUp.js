import actionType from '../../src/constants/ActionTypes'

export const remove = name => ({
    type: actionType.REMOVE,
    name
});

export const reload = () => ({
    type: actionType.RELOAD
});

export const skip = name => ({
    type: actionType.SKIP,
    name
});