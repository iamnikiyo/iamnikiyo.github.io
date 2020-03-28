import {createStore, combineReducers} from 'redux';
import animationReducer from './store/reducer';


const reducers = combineReducers({
    animationReducer
});
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__:any;
    }
}
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;