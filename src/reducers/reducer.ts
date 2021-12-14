import {ActionType, LINK} from './constants'
import * as Type from './type'

const initialState = {
    tab: '',
    data: []  
}

function reducer(state:Type.stateType = initialState , action:Type.actionType){
    switch(action.type){
        case ActionType.CHECK:{
            let newState = {
                tab: action.tab,
                data: action.data
            }
            return newState
        }
        case ActionType.UPDATE:{
            if(state.tab!==action.tab){
                let newState={
                    ...state,
                    tab: action.tab
                }
                return newState
            }
            return state
        }
        default:
            return state
    }
}

export default reducer