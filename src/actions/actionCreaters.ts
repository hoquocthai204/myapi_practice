import {ActionType} from '../reducers/constants'


export const checkAction=(tab:string, data:string[])=>{
    return {
        type: ActionType.CHECK,
        tab: tab,
        data: data
    }
}

export const updateTabAction=(tab:string)=>{
    return {
        type: ActionType.UPDATE,
        tab: tab
    }
}
