//gom lai tat ca reducer thanh 1
import { combineReducers } from "redux";
import appReducer from "./appReducer";


const rootReducer = combineReducers({
    app: appReducer,
})

export default rootReducer