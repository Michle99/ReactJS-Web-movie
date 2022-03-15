import axios from "axios"

// Custom Middleware or User Defined Middleware
function MovieMiddleware(store){
    return function (next){
        return function (action){
            console.log("actions will be executed here first and then passed to reducer ")
            if(action.type==="GET_MOVIES"){
                // make an api call and call next function based on response
                axios({
                    url:"http://localhost:3005/movies",
                    method:"get"
                }).then((response)=>{
                    console.log("response from all movies api", response.data);
                    if(response.data){
                        next({
                            type:"STORE_MOVIES",
                            payload:response.data
                        })
                    }
                } , (error)=>{
                    next({
                        type:"STORE_MOVIES_ERROR"
                    })
                })
            }
            else{
                next(action)
            }
        }
    }
}

export default MovieMiddleware