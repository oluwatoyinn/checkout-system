import {GET_PRODUCT} from '../actions/types'

const initialState ={
    products:[],
    isLoading:false
}

export default function (state=initialState, action)
{
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state,
                products:action.payload,
                isLoading:false
            }
            default:
                return state;
    }
}