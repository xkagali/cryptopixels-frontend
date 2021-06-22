let initialState = {
    transactionHistory : []
}

export function transactionHistoryReducer(state=initialState, action){
    switch(action.type) {
        case "GET_HISTORY":
            return {
                ...state,
                transactionHistory: action.payload
            }
        default:
            return state
    }
}
