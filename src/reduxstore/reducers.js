function MovieReducer(state={}, action){
    switch(action.type){
        case "MOVIE_DETAILS_SUCCESS" :{
            state = {...state}
            state["moviedetails"] = action.payload
            return state
        }
        case "MOVIE_DETAILS_ERROR" :{
            state = {...state}
            state["error"] = "Internal Server Error"
            return state
        }
        case "GET_TRANSACTIONS": {
            state = {...state}
            state["transactions"] = action.payload
            return state
        }

        case "STORE_MOVIES" :{
            state = {...state}
            state["movies"] = action.payload
            return state
        }

        case "STORE_MOVIES_ERROR" :{
            state = {...state}
            state["error"] = "Internal Server Error"
            return state
        }
        default : return state
    }
}

export default MovieReducer