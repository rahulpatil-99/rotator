import { createStore } from 'redux';
import nameList from './NameList';

const store = createStore((state, action) => (state),
    nameList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;