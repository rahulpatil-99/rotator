import { createStore } from 'redux';
import nameList from './NameList';

const reducer = (state, action) => {
    return {name: state.name};
}


const store = createStore(reducer,
    nameList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;