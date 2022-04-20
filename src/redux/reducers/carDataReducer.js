const initialState = {
    dataCar: null
}

const dataCarReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_DATA_CAR":
            return {
                ...state,
                dataCar: action.payload
            }
        default: return state
    }
}

export default dataCarReducer;
