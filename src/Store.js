import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {retaurantListReducer}from './reducers/restuarantReducer'

const reducers = combineReducers({
    restaurantReducer :retaurantListReducer
})

const initialState = {}
const middleWare = [thunk]



const store = createStore(reducers, initialState, applyMiddleware(...middleWare))

export default store