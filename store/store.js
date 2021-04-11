import {createStore, applyMiddleware, compose} from "redux"
import {createWrapper} from "next-redux-wrapper"
import {reducers} from "./basketReducer"
import {save, load} from "redux-localstorage-simple"


const makeStore = () => createStore(reducers, load(), compose(applyMiddleware(save())));

export const wrapper = createWrapper(makeStore)