import {combineReducers} from 'redux'
const initialState = { CurrentValue: 0 }

function incValue(state = initialState, action){
    switch(action.type){
        case "INCREMENT":
            console.log(`> reducers.INCREMENT - state.CurrentValue: ${state.CurrentValue}`)
            return {
                ...state,
                CurrentValue: state.CurrentValue + 1
            }
        default:
            return state
    }
}

export default combineReducers({
    incValue
})

