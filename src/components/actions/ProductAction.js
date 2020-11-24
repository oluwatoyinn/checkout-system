import {INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM, GET_PRODUCT} from './types'
import axios from "axios"

const url ="https://fakestoreapi.com/products"

export const getProduct =()=>async dispatch=>{
    const res = await axios.get(url)
    dispatch({
        type:GET_PRODUCT,
        payload:res.data
    })
}