import {RESTAURANT_LIST_SUCCESS} from '../constants/restaurantConstants'



export const retaurantListReducer=(states={restaurants:[]},actions)=>{
    switch(actions.type){
        case RESTAURANT_LIST_SUCCESS:
            return{
                restaurants:actions.payload
            }
            default:
                return states

    }
}