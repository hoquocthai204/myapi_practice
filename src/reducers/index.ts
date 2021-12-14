import { combineReducers } from "@reduxjs/toolkit";
import reducer from './reducer'

const rootReducers = combineReducers({
    hobby: reducer,
})

export default rootReducers

export type State = ReturnType<typeof rootReducers>