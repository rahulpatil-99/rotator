import { createStore } from 'redux';
import nameList from './NameList';
import createReducer from './reducers/createReducer';

const store = createStore(createReducer(),
    nameList,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;