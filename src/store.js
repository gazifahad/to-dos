import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ToDosReducer from './services/reducers/ToDosReducers';

const store=createStore(ToDosReducer,applyMiddleware(thunk));
export default store;