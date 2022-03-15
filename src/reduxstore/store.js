import { applyMiddleware, createStore } from "redux"
import MovieMiddleware from "./middlewares"
import MovieReducer from "./reducers"
import createSaga from "redux-saga"
import RootSaga from "./saga"

const sagaMiddleware =  createSaga()
const store = createStore(MovieReducer, applyMiddleware(MovieMiddleware, sagaMiddleware))
sagaMiddleware.run(RootSaga)

export default store