const remove = (state, action) => ({
    name: state.name.filter(name => name !== action.name)
})

const actionHandler = {
    'REMOVE': remove
};

export default actionHandler;