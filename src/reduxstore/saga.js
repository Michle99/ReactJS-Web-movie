import {all , takeEvery , put} from "redux-saga/effects"
import axios from "axios"

function *Moviedetailgenerator(action){
    try {
        var result  = yield axios({
            url :"http://localhost:3005/movies/"+action.payload,
            method:"get"
        })
        console.log("Result from movie details api" , result)
        console.log("action payload: ", action.payload);
        yield put({
            type:"MOVIE_DETAILS_SUCCESS",
            payload:result.data
        })

    }
    catch {
        put({
            type:"MOVIE_DETAILS_ERROR",
        })
    }
}


function *Moviedetailsaga(){
  yield  takeEvery('GET_MOVIE_DETAILS', Moviedetailgenerator)
}

export default function *RootSaga(){
    yield all([Moviedetailsaga()])
}
