import nameList from './../NameList';

const remove = (state, action) => ({
    name: state.name.filter(name => !action.name.includes(name))
})

const reload = (state, action) =>({
    name: nameList
});

const actionHandler = {
    'REMOVE': remove,
    'RELOAD': reload
};

export default actionHandler;