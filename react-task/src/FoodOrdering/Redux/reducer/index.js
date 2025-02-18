import {combineReducers} from 'redux'
import { reducers } from './reducerOperation'

export const reducer = combineReducers({
    all_data: reducers
})
