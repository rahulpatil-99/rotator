const remove = (state, action) => ({
    name: state.name.filter(name => !action.name.includes(name))
})

const actionHandler = {
    'REMOVE': remove
};

export default actionHandler;