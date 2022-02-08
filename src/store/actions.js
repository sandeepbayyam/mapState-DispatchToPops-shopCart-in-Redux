import {AddtoCart} from './action.types.js'
export function AddtoCart(p){
  return{
    type:AddtoCart,
    val:p
  }
}