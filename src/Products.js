import React from 'react';
import './style.css'
import {connect} from 'react-redux';
import {AddtoCart} from './store/actions.js'
 
const Products = (props)=>{
  console.log(props)
  return(
    <div>
      <h4>Product Details</h4>
      <table border='2'>
        <thead>
          <th>Product</th>
          <th>Price</th>
          <th>Add</th>
        </thead>
      {
        props.product.Products.map((p,i)=>{
          return(
            <>
            <tbody>
            <tr key={i} >
              <td>{p.product}</td>
              <td>{p.price}</td>
              <button onClick={()=> {props.AddtoCart(p)
              }}>Add</button>
            </tr>
            </tbody>
            <tfoot></tfoot>
            </>
          )
        })
      }
      </table>
      </div>
  )
}
function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return{
    AddtoCart:(p)=>{
       dispatch(AddtoCart(p))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Products);