let initialState = {
    items : []
}

export function itemReducer(state=initialState, action){
    switch(action.type) {
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}
