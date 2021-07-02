export function numberReducer(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivide25':
            return { ...state, number: state.number / 25 }
        case 'numberFloatToInt':
            return { ...state, number: state.number | 0 }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}