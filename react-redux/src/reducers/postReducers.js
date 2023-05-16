import {FETCH_POSTS,NEW_POST} from '../actions/types.js'

const initialState = {
    items:[],
    item:{}
}

export default function(state=initialState,action){//The reducer function is responsible for updating the state of the application in response to actions dispatched to the Redux store.
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,//not updatedd state
                items:action.payload//update state
            }
        case NEW_POST:
            return {
                ...state,
                item : action.payload
            }
        default:
            return state
    }
}