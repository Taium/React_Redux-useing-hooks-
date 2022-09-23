// combine all the Reducers like bankReducer
import { combineReducers } from "redux";
import bankReducer from "./bankReducer"

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers
