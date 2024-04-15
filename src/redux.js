import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { thunk } from "redux-thunk";
// import {createStore, applyMiddleware} from "redux";
// import thunk from 'redux-thunk';


const reduxConfig = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk)) //dung de goi API

    return store
}

export default reduxConfig